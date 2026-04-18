"use client"

import { FileText, ArrowUpRight } from "lucide-react"
import { DOCS, type DocKey } from "@/lib/constants"

interface DocCardProps {
  docKey: string
}

export function DocCard({ docKey }: DocCardProps) {
  const doc = DOCS[docKey as DocKey]
  if (!doc) return null

  return (
    <a
      href={doc.url}
      target="_blank"
      rel="noopener noreferrer"
      className="ml-[34px] flex items-center gap-3.5 rounded-2xl px-5 py-4 transition-all animate-slide-up group"
      style={{
        background: "#faf9f5",
        boxShadow: "0px 0px 0px 1px #f0eee6, rgba(0,0,0,0.05) 0px 4px 24px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          "0px 0px 0px 1px #d1cfc5, rgba(0,0,0,0.08) 0px 4px 24px"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow =
          "0px 0px 0px 1px #f0eee6, rgba(0,0,0,0.05) 0px 4px 24px"
      }}
    >
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
        style={{ background: "rgba(201, 100, 66, 0.1)" }}
      >
        <FileText className="h-4 w-4" style={{ color: "#c96442" }} />
      </div>
      <div className="flex-1 min-w-0">
        <p
          className="text-[14px] font-semibold truncate"
          style={{ color: "#141413" }}
        >
          {doc.label}
        </p>
        <p className="text-[13px]" style={{ color: "#5e5d59" }}>
          {doc.description}
        </p>
      </div>
      <ArrowUpRight
        className="h-4 w-4 shrink-0 transition-opacity group-hover:opacity-100"
        style={{ color: "#c96442", opacity: 0.5 }}
      />
    </a>
  )
}
