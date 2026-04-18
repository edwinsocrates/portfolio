"use client"

import { SpiralMark } from "@/components/spiral-mark"
import { ChatInput } from "@/components/chat/chat-input"

const PROMPT_CHIPS = [
  "What's your strongest AI case study?",
  "How do you work with engineering teams?",
  "What are you building right now?",
  "Show me your resume",
] as const

interface ChatWelcomeProps {
  input: string
  onInputChange: (value: string) => void
  onSubmit: () => void
  onChipSelect: (text: string) => void
  isLoading: boolean
}

export function ChatWelcome({
  input,
  onInputChange,
  onSubmit,
  onChipSelect,
  isLoading,
}: ChatWelcomeProps) {
  return (
    <div className="flex w-full max-w-2xl flex-col items-center gap-6 px-4">
      {/* Logo */}
      <div className="animate-fade-in">
        <SpiralMark size={64} />
      </div>

      {/* Headline */}
      <div className="text-center animate-fade-in" style={{ animationDelay: "60ms" }}>
        <h1 className="text-lg font-semibold tracking-tight text-ink/80 mb-1">
          EdwinOS{" "}
          <span
            className="rounded-full px-2.5 py-0.5 text-xs font-medium align-middle"
            style={{
              background: "rgba(232, 107, 46, 0.12)",
              color: "rgb(var(--color-accent))",
              border: "1px solid rgba(232, 107, 46, 0.25)",
            }}
          >
            Assistant Running
          </span>
        </h1>
        <p className="text-sm text-subtle">
          Ask me about my work, process, or background
        </p>
      </div>

      {/* Input */}
      <div className="w-full animate-fade-in" style={{ animationDelay: "120ms" }}>
        <ChatInput
          value={input}
          onChange={onInputChange}
          onSubmit={onSubmit}
          isLoading={isLoading}
          placeholder="Ask anything..."
        />
      </div>

      {/* Prompt chips */}
      <div
        className="flex flex-wrap justify-center gap-2 animate-fade-in"
        style={{ animationDelay: "180ms" }}
      >
        {PROMPT_CHIPS.map((chip) => (
          <button
            key={chip}
            type="button"
            onClick={() => onChipSelect(chip)}
            disabled={isLoading}
            className="rounded-full px-3.5 py-1.5 text-xs text-subtle transition-colors hover:text-ink disabled:opacity-40"
            style={{
              background: "rgb(var(--color-surface))",
              border: "1px solid rgba(232, 107, 46, 0.18)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.border = "1px solid rgba(232, 107, 46, 0.45)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.border = "1px solid rgba(232, 107, 46, 0.18)"
            }}
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  )
}
