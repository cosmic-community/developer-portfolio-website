import { WorkExperience } from '@/types'

interface ExperienceCardProps {
  experience: WorkExperience
  isLast?: boolean
}

export default function ExperienceCard({ experience, isLast = false }: ExperienceCardProps) {
  const metadata = experience.metadata
  const startDate = metadata?.start_date ? new Date(metadata.start_date) : null
  const endDate = metadata?.end_date ? new Date(metadata.end_date) : null
  
  const formatDate = (date: Date | null) => {
    if (!date) return null
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    })
  }

  const dateRange = startDate 
    ? `${formatDate(startDate)} - ${metadata?.current_job ? 'Present' : formatDate(endDate) || 'Present'}`
    : 'Date not specified'

  return (
    <div className="relative">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-16 w-px h-full bg-gray-200"></div>
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-4 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>
      
      {/* Content */}
      <div className="ml-16 bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              {metadata?.job_title || experience.title}
            </h3>
            <p className="text-blue-600 font-medium mb-2">
              {metadata?.company_name}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              {metadata?.location && (
                <span>📍 {metadata.location}</span>
              )}
              {metadata?.employment_type?.value && (
                <span>💼 {metadata.employment_type.value}</span>
              )}
              <span>📅 {dateRange}</span>
            </div>
          </div>
          
          {metadata?.company_logo?.imgix_url && (
            <img
              src={`${metadata.company_logo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
              alt={`${metadata.company_name} logo`}
              className="w-12 h-12 rounded object-cover flex-shrink-0 ml-4"
            />
          )}
        </div>

        {metadata?.description && (
          <div 
            className="text-gray-700 mb-4 prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: metadata.description }}
          />
        )}

        {metadata?.achievements && (
          <div className="mb-4">
            <h4 className="font-medium text-gray-900 mb-2">Key Achievements:</h4>
            <div 
              className="text-gray-700 prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: metadata.achievements }}
            />
          </div>
        )}

        {metadata?.technologies && metadata.technologies.length > 0 && (
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {metadata.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}