"use client"

import Image from "next/image"
import { SpiralMark } from "@/components/spiral-mark"

// Message types
export type MessageKind =
  | "text"
  | "project-header"
  | "image"
  | "image-row"
  | "impact"
  | "followups"

export interface BaseMessage {
  id: string
  role: "user" | "assistant"
  kind?: MessageKind
  firstOfStreak?: boolean
}

export interface TextMessage extends BaseMessage {
  kind: "text"
  text: string
}

export interface ProjectHeaderMessage extends BaseMessage {
  kind: "project-header"
  project: {
    slug: string
    client: string
    projectTitle: string
    role: string
    year?: string
    previewImage: string
  }
}

export interface ImageMessage extends BaseMessage {
  kind: "image"
  image: { url: string; alt?: string }
  caption?: string
}

export interface ImageRowMessage extends BaseMessage {
  kind: "image-row"
  images: { url: string; alt?: string }[]
  caption?: string
}

export interface ImpactMessage extends BaseMessage {
  kind: "impact"
  label?: string
  items: string[]
}

export interface FollowupsMessage extends BaseMessage {
  kind: "followups"
  text?: string
  chips: { text: string; slug?: string }[]
}

export type StructuredMessage =
  | TextMessage
  | ProjectHeaderMessage
  | ImageMessage
  | ImageRowMessage
  | ImpactMessage
  | FollowupsMessage

// Text bubble with markdown-like formatting
export function TextBubble({ text }: { text: string }) {
  if (!text) return null

  return (
    <div style={{ fontSize: 16, lineHeight: 1.6, color: "#ffffff" }}>
      {text.split("\n").map((p, i) => (
        <p
          key={i}
          style={{ margin: i === 0 ? 0 : "12px 0 0" }}
          dangerouslySetInnerHTML={{
            __html: p
              .replace(
                /\*\*(.+?)\*\*/g,
                '<strong style="font-weight:600">$1</strong>'
              )
              .replace(
                /\[([^\]]+)\]\(([^)]+)\)/g,
                '<a href="$2" target="_blank" rel="noopener" style="color:#fa520f;text-decoration:underline;text-underline-offset:3px">$1</a>'
              ),
          }}
        />
      ))}
    </div>
  )
}

// Project header card
export function ProjectHeaderBubble({
  project,
}: {
  project: ProjectHeaderMessage["project"]
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        background: "#1a1a1a",
        padding: "16px 20px 16px 16px",
        maxWidth: 480,
        boxShadow: "rgba(250, 82, 15, 0.08) 0px 4px 24px",
      }}
    >
      <div
        style={{
          width: 64,
          height: 64,
          flexShrink: 0,
          background: "#262626",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Image
          src={project.previewImage}
          alt=""
          fill
          className="object-contain p-1"
          sizes="64px"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          flex: 1,
          gap: 4,
        }}
      >
        <div
          style={{
            fontSize: 10,
            fontWeight: 400,
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            color: "#fa520f",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          {project.client}
        </div>
        <div
          style={{
            fontSize: 18,
            lineHeight: 1.2,
            color: "#ffffff",
            fontWeight: 400,
          }}
        >
          {project.projectTitle}
        </div>
        <div style={{ fontSize: 12, color: "#787878" }}>
          {project.role}
          {project.year && (
            <>
              {" · "}
              <span className="font-mono">{project.year}</span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

// Single image bubble
export function ImageBubble({
  image,
  caption,
}: {
  image: { url: string; alt?: string }
  caption?: string
}) {
  return (
    <figure style={{ margin: 0, maxWidth: 520 }}>
      <div
        style={{
          overflow: "hidden",
          background: "#1a1a1a",
          aspectRatio: "16 / 10",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 16,
          boxShadow: "rgba(250, 82, 15, 0.08) 0px 4px 24px",
          position: "relative",
        }}
      >
        <Image
          src={image.url}
          alt={image.alt || ""}
          fill
          className="object-contain p-4"
          style={{
            filter: "drop-shadow(0 8px 18px rgba(0, 0, 0, 0.4))",
          }}
          sizes="520px"
        />
      </div>
      {(caption || image.alt) && (
        <figcaption
          style={{
            margin: "10px 0 0",
            fontSize: 12,
            color: "#787878",
            lineHeight: 1.5,
          }}
        >
          {caption || image.alt}
        </figcaption>
      )}
    </figure>
  )
}

// Row of images
export function ImageRowBubble({
  images,
  caption,
}: {
  images: { url: string; alt?: string }[]
  caption?: string
}) {
  return (
    <figure style={{ margin: 0, maxWidth: 560 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${images.length}, 1fr)`,
          gap: 8,
        }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            style={{
              overflow: "hidden",
              background: "#1a1a1a",
              aspectRatio: "3 / 4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 12,
              boxShadow: "rgba(250, 82, 15, 0.06) 0px 4px 16px",
              position: "relative",
            }}
          >
            <Image
              src={img.url}
              alt={img.alt || ""}
              fill
              className="object-contain p-2"
              style={{
                filter: "drop-shadow(0 6px 14px rgba(0, 0, 0, 0.3))",
              }}
              sizes="180px"
            />
          </div>
        ))}
      </div>
      {caption && (
        <figcaption
          style={{
            margin: "10px 0 0",
            fontSize: 12,
            color: "#787878",
            lineHeight: 1.5,
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

// Impact stats card
export function ImpactBubble({
  label,
  items,
}: {
  label?: string
  items: string[]
}) {
  return (
    <div
      style={{
        background: "#1a1a1a",
        padding: "16px 20px",
        maxWidth: 520,
        boxShadow: "rgba(250, 82, 15, 0.06) 0px 4px 16px",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          fontSize: 10,
          fontWeight: 400,
          letterSpacing: "0.5px",
          textTransform: "uppercase",
          color: "#fa520f",
          marginBottom: 12,
        }}
      >
        <span style={{ fontSize: 10 }}>■</span> {label || "Impact"}
      </div>
      <ul
        style={{
          margin: 0,
          padding: 0,
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {items.map((x, i) => (
          <li
            key={i}
            style={{
              fontSize: 15,
              lineHeight: 1.5,
              color: "#ffffff",
              display: "flex",
              gap: 12,
            }}
          >
            <span
              className="font-mono"
              style={{
                flexShrink: 0,
                width: 20,
                color: "#fa520f",
                fontWeight: 400,
                fontSize: 13,
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Follow-up suggestions
export function FollowupsBubble({
  text,
  chips,
  onPick,
  disabled,
}: {
  text?: string
  chips: { text: string; slug?: string }[]
  onPick?: (chip: { text: string; slug?: string }) => void
  disabled?: boolean
}) {
  return (
    <div>
      {text && <TextBubble text={text} />}
      {chips?.length > 0 && (
        <div
          style={{
            marginTop: text ? 14 : 0,
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          {chips.map((c, i) => (
            <button
              key={i}
              onClick={() => onPick?.(c)}
              disabled={disabled}
              style={{
                padding: "10px 16px",
                fontSize: 14,
                background: "#1a1a1a",
                color: "#ffffff",
                transition: "all 0.15s",
                cursor: disabled ? "default" : "pointer",
                opacity: disabled ? 0.5 : 1,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                border: "none",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => {
                if (!disabled) {
                  e.currentTarget.style.background = "#262626"
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#1a1a1a"
              }}
            >
              <span style={{ color: "#fa520f" }}>→</span>
              {c.text}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// Typing indicator
export function TypingIndicator({ showAvatar = true }: { showAvatar?: boolean }) {
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <div style={{ flexShrink: 0, width: 24 }}>
        {showAvatar && <SpiralMark size={24} />}
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        {[0, 150, 300].map((d) => (
          <span
            key={d}
            className="animate-pulse"
            style={{
              width: 8,
              height: 8,
              background: "#fa520f",
              animationDelay: `${d}ms`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

// Assistant message wrapper
export function AssistantBubble({
  message,
  onChipPick,
  isLastAssistant,
}: {
  message: StructuredMessage
  onChipPick?: (chip: { text: string; slug?: string }) => void
  isLastAssistant?: boolean
}) {
  const showAvatar = message.firstOfStreak !== false
  const kind = message.kind || "text"

  return (
    <div
      className="animate-slide-up"
      style={{ display: "flex", gap: 12 }}
    >
      <div style={{ flexShrink: 0, width: 24, marginTop: 2 }}>
        {showAvatar && <SpiralMark size={24} />}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        {kind === "text" && <TextBubble text={(message as TextMessage).text} />}
        {kind === "project-header" && (
          <ProjectHeaderBubble
            project={(message as ProjectHeaderMessage).project}
          />
        )}
        {kind === "image" && (
          <ImageBubble
            image={(message as ImageMessage).image}
            caption={(message as ImageMessage).caption}
          />
        )}
        {kind === "image-row" && (
          <ImageRowBubble
            images={(message as ImageRowMessage).images}
            caption={(message as ImageRowMessage).caption}
          />
        )}
        {kind === "impact" && (
          <ImpactBubble
            label={(message as ImpactMessage).label}
            items={(message as ImpactMessage).items}
          />
        )}
        {kind === "followups" && (
          <FollowupsBubble
            text={(message as FollowupsMessage).text}
            chips={(message as FollowupsMessage).chips}
            onPick={onChipPick}
            disabled={!isLastAssistant}
          />
        )}
      </div>
    </div>
  )
}

// User message bubble
export function UserBubble({ content }: { content: string }) {
  return (
    <div
      className="animate-slide-up"
      style={{ display: "flex", justifyContent: "flex-end" }}
    >
      <div
        style={{
          maxWidth: "85%",
          padding: "12px 16px",
          background: "#fa520f",
          color: "#ffffff",
          fontSize: 16,
          lineHeight: 1.5,
        }}
      >
        {content}
      </div>
    </div>
  )
}
