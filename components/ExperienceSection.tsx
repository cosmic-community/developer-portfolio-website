import { WorkExperience } from '@/types'
import ExperienceCard from '@/components/ExperienceCard'

interface ExperienceSectionProps {
  experience: WorkExperience[]
}

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
  if (!experience.length) {
    return null
  }

  // Sort experience by start date (most recent first)
  const sortedExperience = [...experience].sort((a, b) => {
    const dateA = new Date(a.metadata?.start_date || '').getTime()
    const dateB = new Date(b.metadata?.start_date || '').getTime()
    return dateB - dateA
  })

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and key achievements in software development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {sortedExperience.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                experience={exp}
                isLast={index === sortedExperience.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}