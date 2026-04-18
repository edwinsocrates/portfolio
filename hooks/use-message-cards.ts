import { useState, useEffect } from "react"
import type { UIMessage } from "ai"
import { getAssistantText, parseProjectSlugs, parseDocKeys } from "@/lib/message-utils"

export function useMessageCards(messages: UIMessage[]) {
  const [projectCards, setProjectCards] = useState<Map<string, string[]>>(new Map())
  const [docCards, setDocCards] = useState<Map<string, string[]>>(new Map())

  useEffect(() => {
    for (const msg of messages) {
      if (msg.role !== "assistant") continue

      const text = getAssistantText(msg)

      // Project cards
      if (!projectCards.has(msg.id)) {
        const slugs = parseProjectSlugs(text)
        if (slugs.length > 0) {
          setProjectCards((prev) => new Map(prev).set(msg.id, slugs))
        }
      }

      // Doc cards
      if (!docCards.has(msg.id)) {
        const keys = parseDocKeys(text)
        if (keys.length > 0) {
          setDocCards((prev) => new Map(prev).set(msg.id, keys))
        }
      }
    }
  }, [messages, projectCards, docCards])

  return { projectCards, docCards }
}
