"use client"

import Image from "next/image"
import type { Project } from "@/lib/projects"

interface LandingProjectCardProps {
  project: Project
  onClick: (slug: string) => void
}

export function LandingProjectCard({ project, onClick }: LandingProjectCardProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(project.slug)}
      className="group w-full text-left overflow-hidden rounded-2xl transition-all duration-200"
      style={{
        background: "#faf9f5",
        boxShadow:
          "0px 0px 0px 1px #f0eee6, rgba(0,0,0,0.05) 0px 4px 24px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          "0px 0px 0px 1px #d1cfc5, rgba(0,0,0,0.08) 0px 6px 28px"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow =
          "0px 0px 0px 1px #f0eee6, rgba(0,0,0,0.05) 0px 4px 24px"
      }}
    >
      {/* Cover image */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={project.previewImage.url}
          alt={project.previewImage.alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {project.status === "wip" && (
          <div
            className="absolute top-2.5 right-2.5 rounded-full px-2.5 py-0.5 text-[10px] font-medium"
            style={{
              background: "rgba(245, 244, 237, 0.9)",
              color: "#c96442",
              boxShadow: "0px 0px 0px 1px rgba(201, 100, 66, 0.3)",
              backdropFilter: "blur(6px)",
            }}
          >
            In progress
          </div>
        )}
      </div>

      {/* Card footer */}
      <div className="px-5 py-4">
        <p
          className="text-[11px] font-medium tracking-[0.1em] uppercase mb-1"
          style={{ color: "#c96442" }}
        >
          {project.client}
        </p>
        <p
          className="text-[14px] font-semibold mb-1.5 leading-snug"
          style={{ color: "#141413" }}
        >
          {project.projectTitle}
        </p>
        <p
          className="text-[13px] leading-[1.6] line-clamp-2 mb-3"
          style={{ color: "#5e5d59" }}
        >
          {project.tagline}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full px-2.5 py-0.5 text-[11px]"
              style={{
                background: "#e8e6dc",
                color: "#87867f",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  )
}
