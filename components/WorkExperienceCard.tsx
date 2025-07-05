// components/WorkExperienceCard.tsx
import type { WorkExperience } from '@/types'
import { ExternalLink, MapPin, Calendar } from 'lucide-react'
import SkillBadge from './SkillBadge'

interface WorkExperienceCardProps {
  experience: WorkExperience
  isLast?: boolean
}

export default function WorkExperienceCard({ experience, isLast = false }: WorkExperienceCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric'
    })
  }

  const startDate = formatDate(experience.metadata.start_date)
  const endDate = experience.metadata.end_date 
    ? formatDate(experience.metadata.end_date)
    : 'Present'

  return (
    <div className={`relative ${!isLast ? 'pb-8' : ''}`}>
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-12 w-0.5 h-full bg-gray-200"></div>
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-4 top-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-md"></div>
      
      {/* Content */}
      <div className="ml-16">
        <div className="card">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {experience.metadata.job_title}
              </h3>
              <div className="flex items-center text-lg text-primary-600 mb-2">
                {experience.metadata.company_website ? (
                  <a 
                    href={experience.metadata.company_website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-primary-700 transition-colors"
                  >
                    {experience.metadata.company}
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                ) : (
                  experience.metadata.company
                )}
              </div>
            </div>
            
            <div className="flex flex-col md:text-right text-sm text-gray-600">
              <div className="flex items-center mb-1">
                <Calendar className="w-4 h-4 mr-1" />
                {startDate} - {endDate}
              </div>
              {experience.metadata.location && (
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {experience.metadata.location}
                </div>
              )}
              {experience.metadata.employment_type && (
                <div className="mt-1">
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                    {experience.metadata.employment_type.value}
                  </span>
                </div>
              )}
            </div>
          </div>

          {experience.metadata.description && (
            <div className="mb-4">
              <p className="text-gray-700 leading-relaxed">
                {experience.metadata.description}
              </p>
            </div>
          )}

          {experience.metadata.achievements && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</h4>
              <div className="text-gray-700 text-sm">
                {experience.metadata.achievements.split('\n').map((achievement, index) => (
                  <div key={index} className="flex items-start mb-1">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {experience.metadata.technologies && experience.metadata.technologies.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {experience.metadata.technologies.map((tech) => (
                  <SkillBadge key={tech.id} skill={tech} size="sm" />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}