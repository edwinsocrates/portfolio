"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { getProjectBySlug } from "@/lib/projects"
import { DOCS } from "@/lib/constants"

interface ProjectCardProps {
  slug: string
}

const MERIDIAN_STATS = [
  { value: "370K+", label: "members" },
  { value: "$26B",  label: "managed assets" },
  { value: "Month 1", label: "positive reviews" },
]

const PROJECT_CASE_STUDIES: Record<string, string> = {
  "retail-banking": DOCS["meridian-case-study"].url,
}

export function ProjectCard({ slug }: ProjectCardProps) {
  const project = getProjectBySlug(slug)
  if (!project) return null

  const caseStudyUrl = PROJECT_CASE_STUDIES[slug]
  const isMeridian = slug === "retail-banking"

  return (
    <div
      className="ml-[34px] overflow-hidden rounded-2xl animate-slide-up"
      style={{
        background: "#faf9f5",
        boxShadow:
          "0px 0px 0px 1px #f0eee6, rgba(0,0,0,0.05) 0px 4px 24px",
      }}
    >
      {/* Cover image — 16px top radius via overflow hidden */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={project.previewImage.url}
          alt={project.previewImage.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 640px"
        />
      </div>

      {/* Meridian stat bar */}
      {isMeridian && (
        <div
          className="flex items-center gap-5 px-5 py-2.5 text-xs"
          style={{
            borderBottom: "1px solid #f0eee6",
            background: "rgba(201, 100, 66, 0.04)",
          }}
        >
          {MERIDIAN_STATS.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-1.5">
              <span className="font-semibold" style={{ color: "#c96442" }}>
                {stat.value}
              </span>
              <span style={{ color: "#87867f" }}>{stat.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Card body */}
      <div className="p-6">
        <p
          className="text-[11px] font-medium tracking-[0.1em] uppercase mb-1"
          style={{ color: "#c96442" }}
        >
          {project.client}
        </p>
        <h3
          className="text-[16px] font-semibold mb-2 leading-snug"
          style={{ color: "#141413" }}
        >
          {project.projectTitle}
        </h3>
        <p
          className="text-[14px] leading-[1.6] line-clamp-2 mb-4"
          style={{ color: "#5e5d59" }}
        >
          {project.tagline}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-2.5 py-0.5 text-[11px]"
              style={{ background: "#e8e6dc", color: "#87867f" }}
            >
              {tag}
            </span>
          ))}
          {project.status === "wip" && (
            <span
              className="rounded-full px-2.5 py-0.5 text-[11px] font-medium"
              style={{
                background: "rgba(201, 100, 66, 0.1)",
                color: "#c96442",
              }}
            >
              In progress
            </span>
          )}
        </div>

        {/* Case study link */}
        {caseStudyUrl && (
          <a
            href={caseStudyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium transition-opacity hover:opacity-70"
            style={{ color: "#c96442" }}
          >
            View case study
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </div>
  )
}
