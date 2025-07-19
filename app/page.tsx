import { getProjects, getSkills, getWorkExperience, getTestimonials } from '@/lib/cosmic'
import { Project, Skill, WorkExperience, Testimonial } from '@/types'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'
import ExperienceSection from '@/components/ExperienceSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import Footer from '@/components/Footer'

export default async function HomePage() {
  // Fetch all data in parallel
  const [projects, skills, experience, testimonials] = await Promise.all([
    getProjects() as Promise<Project[]>,
    getSkills() as Promise<Skill[]>,
    getWorkExperience() as Promise<WorkExperience[]>,
    getTestimonials() as Promise<Testimonial[]>
  ])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProjectsSection projects={projects} />
        <SkillsSection skills={skills} />
        <ExperienceSection experience={experience} />
        <TestimonialsSection testimonials={testimonials} />
      </main>
      <Footer />
    </div>
  )
}