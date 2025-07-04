import HeroSection from '@/components/HeroSection'
import FeaturedProjects from '@/components/FeaturedProjects'
import SkillsSection from '@/components/SkillsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import { getFeaturedProjects, getSkills, getTestimonials } from '@/lib/cosmic'

export default async function HomePage() {
  const [featuredProjects, skills, testimonials] = await Promise.all([
    getFeaturedProjects(),
    getSkills(),
    getTestimonials()
  ])

  return (
    <div className="animate-fade-in">
      <HeroSection />
      <FeaturedProjects projects={featuredProjects} />
      <SkillsSection skills={skills} />
      <TestimonialsSection testimonials={testimonials} />
    </div>
  )
}