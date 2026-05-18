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
    const { type, ...params } = await req.json();
    const apiKey = Deno.env.get("INTEGRATIONS_API_KEY");

    if (!apiKey) {
      throw new Error("Missing INTEGRATIONS_API_KEY");
    }

    let prompt = "";
    if (type === 'scenario') {
      prompt = `
        You are a professional Business English Coach. Your goal is to evaluate a user's answer to a workplace scenario question.
        Take on the role of: ${params.role}.
        Feedback style: ${params.style}.
        Scenario Context: ${params.scenario} - ${params.topic}.
        User Input: ${params.userInput}.

        Provide a detailed evaluation in JSON format. 
        The 'overall', 'pros' (explanations), 'improvements' (explanations), 'errors.explanation', 'usefulPhrases.meaning' MUST be in Chinese.
        The 'improvedVersion' and actual 'phrases' should be in high-quality Business English.

        JSON format:
        {
          "score": "string (A/B/C/D/S)",
          "overall": "string",
          "pros": ["string"],
          "improvements": ["string"],
          "errors": [{"error": "string", "correction": "string", "explanation": "string"}],
          "improvedVersion": "string",
          "usefulPhrases": [{"phrase": "string", "meaning": "string"}]
        }
        Respond ONLY with the raw JSON object. Do not wrap in markdown code blocks.
      `;
    } else if (type === 'rewriter') {
      prompt = `
        You are a professional Business English communication expert.
        Rewrite the following expression based on the specified context:
        Original Text: ${params.userInput}
        Target Audience: ${params.target}
        Communication Channel: ${params.channel}
        Desired Tone: ${params.tone}

        Instructions:
        1. Rewrite the expression to be natural, professional, and appropriate for the audience/channel.
        2. Provide a Chinese explanation of the changes and why they matter.

        Return the result in JSON format:
        {
          "rewritten": "string (The rewritten expression in English)",
          "explanation": "string (In Chinese)",
          "whyBetter": "string (In Chinese)",
          "scenarios": "string (In Chinese)",
          "alternatives": [{"phrase": "string", "context": "string (In Chinese)"}]
        }
        Respond ONLY with the raw JSON object. Do not wrap in markdown code blocks.
      `;
    }

    const upstream = await fetch(
      "https://app-boqpkug1kw01-api-VaOwP8E7dJqa.gateway.appmedo.com/v1beta/models/gemini-2.5-flash:streamGenerateContent?alt=sse",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Gateway-Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: prompt }] }],
        }),
      }
    );

    if (!upstream.ok) {
      const err = await upstream.text();
      throw new Error(`Upstream error: ${upstream.status} - ${err}`);
    }

    return new Response(upstream.body, {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "X-Content-Type-Options": "nosniff",
      },
    });

  } catch (error) {
    console.error("AI Coach Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
})
