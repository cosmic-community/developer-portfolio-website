import { getWorkExperience } from '@/lib/cosmic'
import WorkExperienceCard from '@/components/WorkExperienceCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experience | Developer Portfolio',
  description: 'My professional work experience as a full-stack developer, including roles, responsibilities, and achievements.',
}

export default async function ExperiencePage() {
  const workExperience = await getWorkExperience()

  if (!workExperience || workExperience.length === 0) {
    return (
      <div className="container section-padding">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h1>
          <p className="text-gray-600">No work experience available at the moment.</p>
        </div>
      </div>
    )
  }

  // Sort by start date (most recent first)
  const sortedExperience = workExperience.sort((a, b) => {
    const dateA = new Date(a.metadata.start_date).getTime()
    const dateB = new Date(b.metadata.start_date).getTime()
    return dateB - dateA
  })

  return (
    <div className="container section-padding">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          My professional journey as a full-stack developer, showcasing roles, 
          responsibilities, and key achievements.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {sortedExperience.map((experience, index) => (
            <WorkExperienceCard 
              key={experience.id} 
              experience={experience}
              isLast={index === sortedExperience.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}