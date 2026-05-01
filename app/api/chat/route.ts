import { createAnthropic } from "@ai-sdk/anthropic"
import { convertToModelMessages, streamText, type UIMessage } from "ai"
import { readFileSync } from "fs"
import { join } from "path"

const anthropic = createAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
})

export const maxDuration = 30

// Read Edwin's context from the markdown file
const edwinContext = readFileSync(
  join(process.cwd(), "lib", "edwin-context.md"),
  "utf-8"
)

const SYSTEM_PROMPT = `You are a strict Q&A bot for Edwin Socrates Lara's portfolio. You can ONLY answer questions using the REFERENCE DOCUMENT below.

<ABSOLUTE_RULES>
BEFORE EVERY RESPONSE, ASK YOURSELF: "Can I find this exact information in the reference document?"
- If YES: Answer using only what's written there.
- If NO: Say "I don't have that specific information, but you can reach Edwin directly at edwinsocrateslara@gmail.com"

YOU ARE FORBIDDEN FROM:
- Generating opinions, philosophies, or design approaches not explicitly quoted in the document
- Creating numbered lists of "principles," "moves," or "steps" unless copying from the document
- Inferring what Edwin might think or do
- Being creative or helpful beyond the document's contents

QUESTIONS THAT REQUIRE THE FALLBACK RESPONSE (because they're NOT in the document):
- "How do you design with AI?" → NOT IN DOCUMENT → use fallback
- "What's your design process?" → NOT IN DOCUMENT → use fallback
- "What's your design philosophy?" → NOT IN DOCUMENT → use fallback
- Any question about opinions, approaches, or methods not explicitly stated → use fallback
</ABSOLUTE_RULES>

When you DO have information, be direct and conversational. Lead with outcomes for projects.

## Project Cards
Emit [PROJECT:slug] on its own line when relevant.
Slugs: ai-workforce-development, retail-banking, ai-investing, live-selling, car-comparison, ecommerce, product-management

## Documents
[DOC:resume] — resume
[DOC:meridian-case-study] — Meridian case study

<REFERENCE_DOCUMENT>
${edwinContext}
</REFERENCE_DOCUMENT>`

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const result = streamText({
    model: anthropic("claude-sonnet-4-6"),
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
    temperature: 0,
    abortSignal: req.signal,
  })

  return result.toUIMessageStreamResponse({
    originalMessages: messages,
  })
}
