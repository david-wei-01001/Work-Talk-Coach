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

    // 1. Transcribe audio via Speech-to-Text
    const sttFormData = new FormData();
    sttFormData.append('file', audioFile);
    sttFormData.append('language', 'english');
    sttFormData.append('response_format', 'json');

    const sttResponse = await fetch("https://app-boqpkug1kw01-api-DY8MNQoqOnMa.gateway.appmedo.com/v1/audio/transcriptions", {
      method: "POST",
      headers: { "X-Gateway-Authorization": `Bearer ${apiKey}` },
      body: sttFormData,
    });

    if (!sttResponse.ok) {
      const error = await sttResponse.text();
      throw new Error(`STT Error: ${error}`);
    }

    const { text: transcription } = await sttResponse.json();

    // 2. Deep assessment with LLM
    const llmPrompt = `
You are a senior business English speaking coach specialising in helping Chinese professionals excel in workplace communication. Your task is to conduct a thorough, constructive, and actionable spoken English assessment.

## Reference Answer (what the student aimed to say):
"${referenceText}"

## Student's Actual Speech (transcribed):
"${transcription}"

---

Perform a comprehensive assessment across FIVE dimensions. For each dimension, give a score from 0–10 and write a detailed Chinese comment (2–4 sentences) that is specific, honest, and actionable.

### Scoring Dimensions:

**1. 内容完整度 (Content Completeness)** — Did the student cover all key points in the reference? Were important ideas omitted, incomplete, or significantly rephrased in a way that loses meaning?

**2. 词汇准确度 (Vocabulary Accuracy)** — Were words chosen precisely and appropriately for a professional business context? Note any awkward word choices, wrong collocations, or missed opportunities to use stronger professional vocabulary.

**3. 流利度 (Fluency & Delivery)** — Based on the transcription, assess sentence completeness, whether ideas flow naturally, and if there are signs of hesitation, repetition, or fragmented sentence structures.

**4. 语法正确性 (Grammatical Accuracy)** — Identify specific grammatical errors (tense, subject-verb agreement, article use, prepositions, sentence structure). Quote exact errors where possible and provide the correct form.

**5. 表达专业度 (Professional Tone & Register)** — Does the language sound like a confident, polished professional? Are business-appropriate phrases, hedging language, and formal register used correctly?

---

Also provide:

**strengths**: 2–3 specific things the student did well (quote actual phrases from the transcription if possible).

**improvements**: 2–3 concrete improvements with BEFORE → AFTER examples showing how to upgrade specific phrases or sentences from the student's speech to a more professional version.

**comparison**: A paragraph (3–5 sentences in Chinese) comparing the student's response to the reference answer — highlighting what was captured well, what was missed, and what diverged in tone or vocabulary.

**encouragement**: One warm, motivating closing sentence in Chinese tailored to this student's performance level.

---

Return ONLY valid JSON in exactly this structure (no markdown fences, no extra text):
{
  "overall_score": <integer 0–100, weighted average>,
  "transcription": <the student transcription string>,
  "dimensions": {
    "content": { "score": <0–10>, "comment": "<Chinese, 2–4 sentences>" },
    "vocabulary": { "score": <0–10>, "comment": "<Chinese, 2–4 sentences>" },
    "fluency": { "score": <0–10>, "comment": "<Chinese, 2–4 sentences>" },
    "grammar": { "score": <0–10>, "comment": "<Chinese, 2–4 sentences>" },
    "professionalism": { "score": <0–10>, "comment": "<Chinese, 2–4 sentences>" }
  },
  "strengths": ["<specific strength 1 in Chinese>", "<specific strength 2 in Chinese>", "<specific strength 3 in Chinese>"],
  "improvements": [
    { "issue": "<what was said or missed, in Chinese>", "before": "<original phrasing>", "after": "<improved phrasing>", "explanation": "<why this is better, in Chinese>" },
    { "issue": "<issue 2>", "before": "<original>", "after": "<improved>", "explanation": "<explanation>" },
    { "issue": "<issue 3>", "before": "<original>", "after": "<improved>", "explanation": "<explanation>" }
  ],
  "comparison": "<Chinese paragraph comparing student response to reference>",
  "encouragement": "<one motivating sentence in Chinese>",
  "mispronounced_words": ["<word1>", "<word2>"]
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

    // Stream and collect the full response
    const reader = llmResponse.body?.getReader();
    let fullText = "";
    const decoder = new TextDecoder();

    if (reader) {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        for (const line of chunk.split('\n')) {
          if (line.startsWith('data: ')) {
            try {
              const dataStr = line.substring(6).trim();
              if (!dataStr || dataStr === "[DONE]") continue;
              const json = JSON.parse(dataStr);
              const part = json?.candidates?.[0]?.content?.parts?.[0]?.text;
              if (part) fullText += part;
            } catch (_) { /* skip malformed SSE lines */ }
          }
        }
      }
    }

    // Extract JSON — handle model wrapping in markdown code fences
    const jsonMatch = fullText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("LLM returned no valid JSON");
    const result = JSON.parse(jsonMatch[0]);

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Audio Assessment Error:", error);
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
})
