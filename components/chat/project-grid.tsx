import { projects } from "@/lib/projects"
import { LandingProjectCard } from "@/components/chat/landing-project-card"

interface ProjectGridProps {
  onProjectClick: (slug: string) => void
}

export function ProjectGrid({ onProjectClick }: ProjectGridProps) {
  return (
    <section>
      {/* DESIGN.md overline: 10px, Stone Gray, 0.5px tracking, uppercase */}
      <p
        className="mb-6 text-[10px] font-medium uppercase"
        style={{ color: "#87867f", letterSpacing: "0.5px" }}
      >
        Selected Work
      </p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <LandingProjectCard
            key={project.slug}
            project={project}
            onClick={onProjectClick}
          />
        ))}
      </div>
    </section>
  )
}
