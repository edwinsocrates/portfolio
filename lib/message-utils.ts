import type { UIMessage } from "ai"

/** Extract the full text content from a UIMessage's text parts. */
export function getAssistantText(msg: UIMessage): string {
  if (!msg.parts || !Array.isArray(msg.parts)) return ""
  return msg.parts
    .filter((p): p is { type: "text"; text: string } => p.type === "text")
    .map((p) => p.text)
    .join("")
}

/** Extract all [PROJECT:slug] markers from a message string. */
export function parseProjectSlugs(text: string): string[] {
  const matches = Array.from(text.matchAll(/\[PROJECT:([a-z0-9-]+)\]/g))
  return matches.map((m) => m[1])
}

/** Extract all [DOC:key] markers from a message string. */
export function parseDocKeys(text: string): string[] {
  const matches = Array.from(text.matchAll(/\[DOC:([a-z0-9-]+)\]/g))
  return matches.map((m) => m[1])
}

/** Strip card markers from text before displaying in the bubble. */
export function stripCardMarkers(text: string): string {
  return text
    .replace(/\[PROJECT:[a-z0-9-]+\]/g, "")
    .replace(/\[DOC:[a-z0-9-]+\]/g, "")
    .trim()
}
