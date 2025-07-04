import { getProjects } from '@/lib/cosmic'
import ProjectCard from '@/components/ProjectCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Developer Portfolio',
  description: 'Explore my web development projects including React applications, Next.js websites, and full-stack solutions.',
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  if (!projects || projects.length === 0) {
    return (
      <div className="container section-padding">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Projects</h1>
          <p className="text-gray-600">No projects available at the moment.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container section-padding">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Projects</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A collection of web development projects showcasing modern technologies 
          and innovative solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}