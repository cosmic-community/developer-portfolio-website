import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import SkillBadge from '@/components/SkillBadge'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const featuredImage = project.metadata.images?.[0]

  return (
    <div className="card group hover:scale-105 transition-transform duration-200">
      {featuredImage && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <img
            src={`${featuredImage.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
            alt={project.metadata.title}
            width={300}
            height={200}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>
      )}

      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {project.metadata.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {project.metadata.description}
        </p>

        {project.metadata.technologies && project.metadata.technologies.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {project.metadata.technologies.slice(0, 3).map((tech) => (
                <SkillBadge key={tech.id} skill={tech} size="sm" />
              ))}
              {project.metadata.technologies.length > 3 && (
                <span className="skill-badge bg-gray-100 text-gray-600 text-xs">
                  +{project.metadata.technologies.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
          <Link
            href={`/projects/${project.slug}`}
            className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
          >
            Learn More
          </Link>
          
          {project.metadata.live_url && (
            <a
              href={project.metadata.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-700 text-sm transition-colors inline-flex items-center"
            >
              <ExternalLink className="w-3 h-3 mr-1" />
              Live Site
            </a>
          )}
          
          {project.metadata.github_url && (
            <a
              href={project.metadata.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-700 text-sm transition-colors inline-flex items-center"
            >
              <Github className="w-3 h-3 mr-1" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}