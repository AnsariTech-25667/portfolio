export const runtime = "edge";

/**
 * Streaming mock for PromptPilot demo.
 * Accepts { prompt, provider } and streams a friendly, chunked text response.
 */
function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

export async function POST(req) {
  const encoder = new TextEncoder();

  let prompt = "";
  let provider = "openai";
  try {
    const body = await req.json();
    if (body && typeof body.prompt === "string") prompt = body.prompt;
    if (body && typeof body.provider === "string" && body.provider.trim()) {
      provider = body.provider.trim();
    }
  } catch {
    // ignore parse errors; keep defaults
  }

  const preview =
    prompt.length > 300 ? prompt.slice(0, 300) + "…" : prompt || "(no prompt)";

  const chunks = [
    `Using ${provider} (mock): `,
    "processing your prompt…\n\n",
    "This is a streamed response that simulates an LLM typing.\n",
    "You can swap this endpoint to a real provider later.\n\n",
    "Prompt preview:\n",
    preview + "\n\n",
    "Tips: try Export → Markdown, or save templates in the Prompt Library.\n",
    "Done."
  ];

  const stream = new ReadableStream({
    async start(controller) {
      try {
        for (let i = 0; i < chunks.length; i++) {
          controller.enqueue(encoder.encode(chunks[i]));
          // vary the cadence slightly to feel "human"
          await sleep(80 + Math.floor(Math.random() * 40));
        }
      } catch {
        // silently end on any unexpected error
      } finally {
        controller.close();
      }
    }
  });

  return new Response(stream, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: { Allow: "POST, OPTIONS" }
  });
}

// Defensive handling for accidental GETs in dev tools, etc.
export async function GET() {
  return Response.json({ ok: false, error: "Use POST" }, { status: 405 });
}

export async function HEAD() {
  return new Response(null, {
    status: 405,
    headers: { "Content-Type": "application/json" }
  });
}