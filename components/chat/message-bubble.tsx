"use client"

import type { UIMessage } from "ai"
import ReactMarkdown from "react-markdown"
import { getAssistantText, stripCardMarkers } from "@/lib/message-utils"
import { SpiralMark } from "@/components/spiral-mark"

interface MessageBubbleProps {
  message: UIMessage
  isStreaming?: boolean
  hasProjectCards?: boolean
  hasDocCards?: boolean
}

export function MessageBubble({
  message,
  isStreaming,
  hasProjectCards,
  hasDocCards,
}: MessageBubbleProps) {
  const isUser = message.role === "user"
  let text = getAssistantText(message)

  if (hasProjectCards || hasDocCards) {
    text = stripCardMarkers(text)
  }

  if (!text) return null

  // User bubble — Pure White on Parchment, Border Cream ring, Near Black text
  if (isUser) {
    return (
      <div className="flex justify-end">
        <div
          className="max-w-[78%] rounded-[18px] rounded-br-sm px-4 py-3 text-[15px] leading-[1.6]"
          style={{
            background: "#ffffff",
            boxShadow:
              "0px 0px 0px 1px #e8e6dc, rgba(0,0,0,0.05) 0px 2px 8px",
            color: "#141413",
          }}
        >
          {text}
        </div>
      </div>
    )
  }

  // AI message — no bubble, SpiralMark avatar + Near Black prose
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 shrink-0">
        <SpiralMark size={22} />
      </div>
      <div className="flex-1 min-w-0">
        <div
          className="text-[15px] leading-[1.65]"
          style={{ color: "#3d3d3a" }}
        >
          <ReactMarkdown
            components={{
              p: ({ children }) => (
                <p className="mb-4 last:mb-0 leading-[1.65]">{children}</p>
              ),
              strong: ({ children }) => (
                <strong style={{ fontWeight: 600, color: "#141413" }}>
                  {children}
                </strong>
              ),
              em: ({ children }) => (
                <em style={{ fontStyle: "italic", color: "#5e5d59" }}>
                  {children}
                </em>
              ),
              ul: ({ children }) => (
                <ul className="mb-4 space-y-2 last:mb-0">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="mb-4 space-y-2 last:mb-0">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="flex gap-2 leading-[1.6]">
                  <span
                    className="mt-[10px] h-1 w-1 shrink-0 rounded-full"
                    style={{ background: "#c96442", opacity: 0.7 }}
                  />
                  <span>{children}</span>
                </li>
              ),
              h2: ({ children }) => (
                <h2
                  className="mb-2 mt-5 first:mt-0 text-[12px] font-medium tracking-[0.5px] uppercase"
                  style={{ color: "#87867f" }}
                >
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3
                  className="mb-2 mt-4 first:mt-0 text-[15px] font-semibold"
                  style={{ color: "#141413" }}
                >
                  {children}
                </h3>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  style={{ color: "#c96442", textDecorationLine: "underline", textUnderlineOffset: "2px" }}
                  className="hover:opacity-80 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              code: ({ children }) => (
                <code
                  className="rounded px-1.5 py-0.5 font-mono text-[13px]"
                  style={{
                    background: "#f0eee6",
                    color: "#4d4c48",
                    letterSpacing: "-0.32px",
                  }}
                >
                  {children}
                </code>
              ),
              blockquote: ({ children }) => (
                <blockquote
                  className="pl-3 italic"
                  style={{
                    borderLeft: "2px solid #e8e6dc",
                    color: "#5e5d59",
                  }}
                >
                  {children}
                </blockquote>
              ),
            }}
          >
            {text}
          </ReactMarkdown>
          {isStreaming && (
            <span
              className="inline-block w-[2px] h-[14px] ml-0.5 -mb-[2px] animate-cursor-blink"
              style={{ background: "#c96442" }}
            />
          )}
        </div>
      </div>
    </div>
  )
}
