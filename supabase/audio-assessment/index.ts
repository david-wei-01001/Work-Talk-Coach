import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const formData = await req.formData();
    const audioFile = formData.get('audio') as File;
    const referenceText = formData.get('referenceText') as string;

    if (!audioFile || !referenceText) {
      return new Response(JSON.stringify({ error: 'Missing audio or reference text' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const apiKey = Deno.env.get("INTEGRATIONS_API_KEY");
    
    // 1. Transcribe audio
    const sttFormData = new FormData();
    sttFormData.append('file', audioFile);
    sttFormData.append('language', 'english');
    sttFormData.append('response_format', 'json');
    
    const sttResponse = await fetch("https://app-boqpkug1kw01-api-DY8MNQoqOnMa.gateway.appmedo.com/v1/audio/transcriptions", {
      method: "POST",
      headers: {
        "X-Gateway-Authorization": `Bearer ${apiKey}`,
      },
      body: sttFormData,
    });

    if (!sttResponse.ok) {
      const error = await sttResponse.text();
      throw new Error(`STT Error: ${error}`);
    }

    const { text: transcription } = await sttResponse.json();

    // 2. Score with LLM
    const llmPrompt = `
      You are an expert business English coach. Compare the following transcription of a student's speech with the reference text.
      
      Reference Text: "${referenceText}"
      Student Transcription: "${transcription}"
      
      Evaluate the student's performance based on:
      1. Accuracy: How well the words match the reference text.
      2. Pronunciation: Clarity and phonetic accuracy.
      3. Fluency: Flow, rhythm, and appropriate pausing.
      4. Intonation: Variation in pitch and natural emphasis.
      
      Identify any specific words that were mispronounced or missed.
      
      Return the result strictly in the following JSON format:
      {
        "score": 0-100 (Overall score),
        "pronunciation": 0-100,
        "fluency": 0-100,
        "intonation": 0-100,
        "feedback": "A short, encouraging professional feedback in Chinese (max 100 chars)",
        "transcription": "${transcription.replace(/"/g, '\\"')}",
        "mispronounced_words": ["word1", "word2"] (empty array if none)
      }
    `;

    const llmResponse = await fetch("https://app-boqpkug1kw01-api-VaOwP8E7dJqa.gateway.appmedo.com/v1beta/models/gemini-2.5-flash:streamGenerateContent?alt=sse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Gateway-Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: llmPrompt }] }],
      }),
    });

    if (!llmResponse.ok) {
      const error = await llmResponse.text();
      throw new Error(`LLM Error: ${error}`);
    }

    const reader = llmResponse.body?.getReader();
    let fullText = "";
    const decoder = new TextDecoder();
    
    if (reader) {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const dataStr = line.substring(6).trim();
              if (!dataStr || dataStr === "[DONE]") continue;
              const json = JSON.parse(dataStr);
              const part = json.candidates[0].content.parts[0].text;
              if (part) fullText += part;
            } catch (e) {
              console.error("Error parsing SSE line", e);
            }
          }
        }
      }
    }

    // Attempt to extract JSON from fullText (in case the model wraps it in markdown)
    const jsonMatch = fullText.match(/\{[\s\S]*\}/);
    const resultJson = jsonMatch ? jsonMatch[0] : fullText;
    const result = JSON.parse(resultJson);

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Audio Assessment Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
})
