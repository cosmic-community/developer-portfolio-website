import Hero from '@/components/Hero';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import { getProjects, getSkills, getWorkExperience, getTestimonials } from '@/lib/cosmic';

export default async function Home() {
  // Fetch all data from Cosmic CMS
  const [skills, projects, experience, testimonials] = await Promise.all([
    getSkills(),
    getProjects(),
    getWorkExperience(),
    getTestimonials()
  ]);

  return (
    <div className="min-h-screen">
      <Hero />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <ExperienceSection experience={experience} />
      <TestimonialsSection testimonials={testimonials} />
      <ContactSection />
    </div>
  );
}