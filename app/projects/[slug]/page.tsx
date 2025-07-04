// app/projects/[slug]/page.tsx
import { getProject, getProjects } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink, Github, ArrowLeft } from 'lucide-react'
import SkillBadge from '@/components/SkillBadge'
import { marked } from 'marked'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const projects = await getProjects()
  
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProject(slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.metadata.title} | Developer Portfolio`,
    description: project.metadata.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }

  const longDescriptionHtml = project.metadata.long_description 
    ? marked(project.metadata.long_description)
    : null

  return (
    <div className="container section-padding">
      <div className="mb-8">
        <Link 
          href="/projects" 
          className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>
      </div>

      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {project.metadata.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            {project.metadata.description}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            {project.metadata.live_url && (
              <a
                href={project.metadata.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Site
              </a>
            )}
            {project.metadata.github_url && (
              <a
                href={project.metadata.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center"
              >
                <Github className="w-4 h-4 mr-2" />
                View Code
              </a>
            )}
          </div>

          {project.metadata.technologies && project.metadata.technologies.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.metadata.technologies.map((tech) => (
                  <SkillBadge key={tech.id} skill={tech} />
                ))}
              </div>
            </div>
          )}
        </header>

        {project.metadata.images && project.metadata.images.length > 0 && (
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.metadata.images.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                  <img
                    src={`${image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                    alt={`${project.metadata.title} screenshot ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {longDescriptionHtml && (
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: longDescriptionHtml }} />
          </div>
        )}
      </div>
    </div>
  )
}