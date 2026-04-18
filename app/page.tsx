"use client"

import React, { useState, useRef, useEffect } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { ArrowLeft } from "lucide-react"
import { SpiralMark } from "@/components/spiral-mark"
import { ChatInput } from "@/components/chat/chat-input"
import { MessageBubble } from "@/components/chat/message-bubble"
import { ProjectCard } from "@/components/chat/project-card"
import { DocCard } from "@/components/chat/doc-card"
import { ProjectGrid } from "@/components/chat/project-grid"
import { useMessageCards } from "@/hooks/use-message-cards"
import { getProjectBySlug } from "@/lib/projects"
import { DOCS } from "@/lib/constants"

const PROMPT_CHIPS = [
  "What are you building at FutureFit AI?",
  "Tell me about the Meridian project",
  "How do you approach stakeholder pushback?",
  "Show me your resume",
] as const

type Mode = "landing" | "chat"

function createTransport() {
  return new DefaultChatTransport({ api: "/api/chat" })
}

export default function HomePage() {
  const [mode, setMode] = useState<Mode>("landing")
  const [pinnedSlug, setPinnedSlug] = useState<string | null>(null)
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const { messages, sendMessage, status, setMessages } = useChat({
    transport: createTransport(),
  })

  const isLoading = status === "streaming" || status === "submitted"
  const { projectCards, docCards } = useMessageCards(messages)

  useEffect(() => {
    if (mode === "chat") {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, mode])

  function handleProjectClick(slug: string) {
    const project = getProjectBySlug(slug)
    if (!project) return
    setPinnedSlug(slug)
    setMode("chat")
    sendMessage({
      text: `Tell me about the ${project.projectTitle} project at ${project.client}.`,
    })
  }

  function handleSend() {
    if (!input.trim() || isLoading) return
    setMode("chat")
    setPinnedSlug(null)
    sendMessage({ text: input })
    setInput("")
  }

  function handleChipSelect(text: string) {
    setMode("chat")
    setPinnedSlug(null)
    sendMessage({ text })
  }

  function handleBack() {
    setMode("landing")
    setPinnedSlug(null)
    setInput("")
    setMessages([])
  }

  const displayMessages = pinnedSlug
    ? messages.filter((m, i) => !(m.role === "user" && i === 0))
    : messages

  /* ── LANDING ──────────────────────────────────────────────── */
  if (mode === "landing") {
    return (
      <div className="min-h-dvh overflow-y-auto bg-bg">

        {/* Hero section — Parchment canvas */}
        <div className="mx-auto max-w-2xl px-6 pt-16 pb-12">

          {/* Top bar */}
          <div
            className="mb-14 flex items-center justify-between animate-fade-in"
            style={{ animationDelay: "0ms" }}
          >
            <div className="flex items-center gap-2.5">
              <SpiralMark size={20} />
              <span
                className="text-[10px] font-medium tracking-[0.5px] uppercase"
                style={{ color: "#87867f" }}
              >
                EdwinOS
              </span>
              <span
                className="rounded-full px-2.5 py-0.5 text-[10px] font-medium"
                style={{
                  background: "rgba(201, 100, 66, 0.08)",
                  color: "#c96442",
                  boxShadow: "0px 0px 0px 1px rgba(201, 100, 66, 0.25)",
                }}
              >
                Assistant Running
              </span>
            </div>

            <nav className="flex items-center gap-5">
              {[
                { label: "Portfolio", href: "https://www.edwinsocrates.com/portfolio" },
                { label: "Case Study", href: DOCS["meridian-case-study"].url },
                { label: "Resume",    href: DOCS["resume"].url },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] transition-colors"
                  style={{ color: "#5e5d59" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#141413" }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#5e5d59" }}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Bio — serif headline, generous line-height */}
          <div
            className="mb-10 animate-fade-in"
            style={{ animationDelay: "60ms" }}
          >
            <h1
              className="font-serif mb-5 font-medium leading-[1.12] tracking-[-0.01em]"
              style={{ fontSize: "2.5rem", color: "#141413" }}
            >
              I&apos;m Edwin, a product designer interested in AI products and workflows.
            </h1>
            <p
              className="text-base leading-[1.65] max-w-[520px]"
              style={{ color: "#5e5d59" }}
            >
              Experience crafting user-centric products and systems that solve complex
              problems. Adept at using human-centered design principles with business
              goals to create impactful solutions.
            </p>
          </div>

          {/* Input */}
          <div
            className="mb-5 animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            <ChatInput
              value={input}
              onChange={setInput}
              onSubmit={handleSend}
              isLoading={isLoading}
              placeholder="Ask anything..."
            />
          </div>

          {/* Prompt chips — Warm Sand, Charcoal text, ring warm */}
          <div
            className="flex flex-wrap justify-center gap-2 animate-fade-in"
            style={{ animationDelay: "150ms" }}
          >
            {PROMPT_CHIPS.map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => handleChipSelect(chip)}
                disabled={isLoading}
                className="rounded-lg px-3.5 py-2 text-sm transition-all disabled:opacity-40"
                style={{
                  background: "#e8e6dc",
                  color: "#4d4c48",
                  boxShadow: "0px 0px 0px 1px #d1cfc5",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0px 0px 0px 1px #c2c0b6"
                  e.currentTarget.style.background = "#dddbd0"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0px 0px 0px 1px #d1cfc5"
                  e.currentTarget.style.background = "#e8e6dc"
                }}
              >
                {chip}
              </button>
            ))}
          </div>
        </div>

        {/* Section divider — Border Cream */}
        <div
          className="mx-auto max-w-4xl px-6"
          style={{ borderTop: "1px solid #f0eee6" }}
        />

        {/* Project grid — continues on Parchment */}
        <div className="mx-auto max-w-4xl px-6 py-12 pb-24">
          <ProjectGrid onProjectClick={handleProjectClick} />
        </div>
      </div>
    )
  }

  /* ── CHAT ─────────────────────────────────────────────────── */
  return (
    <div className="flex h-dvh flex-col bg-bg">

      {/* Header */}
      <header
        className="flex h-12 shrink-0 items-center justify-between px-5"
        style={{ borderBottom: "1px solid #f0eee6" }}
      >
        <button
          type="button"
          onClick={handleBack}
          className="flex items-center gap-1.5 text-sm transition-colors"
          style={{ color: "#5e5d59" }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "#141413" }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "#5e5d59" }}
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All projects
        </button>

        <div className="flex items-center gap-2">
          <SpiralMark size={18} />
          <span
            className="text-[10px] font-medium tracking-[0.5px] uppercase"
            style={{ color: "#87867f" }}
          >
            EdwinOS
          </span>
        </div>

        <a
          href="https://www.edwinsocrates.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm transition-colors"
          style={{ color: "#5e5d59" }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "#141413" }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "#5e5d59" }}
        >
          edwinsocrates.com ↗
        </a>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-2xl space-y-6 px-5 py-8">

          {/* Pinned project card */}
          {pinnedSlug && (
            <div className="animate-slide-up">
              <ProjectCard slug={pinnedSlug} />
            </div>
          )}

          {/* Chat messages */}
          {displayMessages.map((message, i) => {
            const slugs = projectCards.get(message.id) ?? []
            const docs = docCards.get(message.id) ?? []
            const isLastMsg = i === displayMessages.length - 1
            const isStreamingThisMsg =
              isLastMsg && message.role === "assistant" && isLoading

            return (
              <React.Fragment key={message.id}>
                <MessageBubble
                  message={message}
                  isStreaming={isStreamingThisMsg}
                  hasProjectCards={slugs.length > 0}
                  hasDocCards={docs.length > 0}
                />

                {docs.length > 0 && (
                  <div className="space-y-2">
                    {docs.map((docKey) => (
                      <DocCard key={docKey} docKey={docKey} />
                    ))}
                  </div>
                )}
              </React.Fragment>
            )
          })}

          {/* Typing indicator */}
          {isLoading && messages[messages.length - 1]?.role === "user" && (
            <div className="flex items-center gap-3">
              <SpiralMark size={20} />
              <div className="flex gap-1.5">
                {[0, 150, 300].map((delay) => (
                  <span
                    key={delay}
                    className="h-1.5 w-1.5 rounded-full animate-pulse"
                    style={{
                      background: "#c96442",
                      opacity: 0.5,
                      animationDelay: `${delay}ms`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Bottom input */}
      <div
        className="px-5 pb-6 pt-3"
        style={{ borderTop: "1px solid #f0eee6" }}
      >
        <div className="mx-auto w-full max-w-2xl">
          <ChatInput
            value={input}
            onChange={setInput}
            onSubmit={handleSend}
            isLoading={isLoading}
            placeholder={pinnedSlug ? "Ask a follow-up..." : "Ask anything..."}
          />
          <p
            className="mt-2.5 text-center text-[11px]"
            style={{ color: "#87867f" }}
          >
            edwinsocrates.com · AI may make mistakes
          </p>
        </div>
      </div>
    </div>
  )
}
