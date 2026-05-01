"use client"

import React, { useRef, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface ChatInputProps {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  isLoading: boolean
  placeholder?: string
  className?: string
}

export function ChatInput({
  value,
  onChange,
  onSubmit,
  isLoading,
  placeholder = "Ask anything...",
  className,
}: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = "auto"
    el.style.height = `${Math.min(el.scrollHeight, 180)}px`
  }, [value])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      if (value.trim() && !isLoading) onSubmit()
    }
  }

  const canSubmit = value.trim().length > 0 && !isLoading

  return (
    <div className={cn("relative", className)}>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        rows={1}
        disabled={isLoading}
        className="w-full resize-none py-5 pl-5 pr-14 text-[16px] leading-[1.5] focus:outline-none disabled:opacity-50 transition-shadow"
        style={{
          background: "#1a1a1a",
          color: "#ffffff",
          caretColor: "#fa520f",
          boxShadow: "rgba(250, 82, 15, 0.08) 0px 4px 24px",
        }}
        onFocus={(e) => {
          e.currentTarget.style.boxShadow =
            "0 0 0 2px #fa520f, rgba(250, 82, 15, 0.15) 0px 8px 32px"
        }}
        onBlur={(e) => {
          e.currentTarget.style.boxShadow =
            "rgba(250, 82, 15, 0.08) 0px 4px 24px"
        }}
        aria-label="Chat input"
      />
      <style>{`textarea::placeholder { color: #787878; }`}</style>
      <button
        type="button"
        onClick={onSubmit}
        disabled={!canSubmit}
        aria-label="Send message"
        className="absolute right-3 bottom-3 flex h-11 items-center justify-center gap-2 px-4 transition-all disabled:opacity-30 uppercase tracking-[0.5px]"
        style={{
          background: canSubmit ? "#fa520f" : "#262626",
        }}
      >
        <span
          style={{
            fontSize: 12,
            fontWeight: 400,
            color: "#ffffff",
          }}
        >
          Send
        </span>
        <ArrowUp
          className="h-4 w-4"
          style={{ color: "#ffffff" }}
        />
      </button>
    </div>
  )
}
