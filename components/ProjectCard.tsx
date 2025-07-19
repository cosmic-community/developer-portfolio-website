import { Project } from '@/types'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  project: Project
  className?: string
}

export default function ProjectCard({ project, className = '' }: ProjectCardProps) {
  const featuredImage = project.metadata?.featured_image
  const technologies = project.metadata?.technologies || []
  const demoUrl = project.metadata?.demo_url
  const githubUrl = project.metadata?.github_url
  const status = project.metadata?.status

  return (
    <div className={`card group hover:shadow-lg transition-all duration-300 ${className}`}>
      {featuredImage && (
        <div className="mb-6 -mt-6 -mx-6">
          <img
            src={`${featuredImage.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
            alt={project.title}
            width={400}
            height={200}
            className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
            {status && (
              <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                status.key === 'completed' ? 'bg-green-100 text-green-800' :
                status.key === 'in_progress' ? 'bg-blue-100 text-blue-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {status.value}
              </span>
            )}
          </div>
          
          {project.metadata?.description && (
            <div 
              className="prose text-sm text-gray-600"
              dangerouslySetInnerHTML={{ __html: project.metadata.description }}
            />
          )}
        </div>

        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-3 pt-2">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary flex-1 text-sm"
            >
              <ExternalLink size={16} className="mr-2" />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline flex-1 text-sm"
            >
              <Github size={16} className="mr-2" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}