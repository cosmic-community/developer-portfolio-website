import { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const metadata = testimonial.metadata
  
  const renderStars = (rating: string | undefined) => {
    const numStars = rating ? parseInt(rating) : 0
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index}
        className={index < numStars ? 'text-yellow-400' : 'text-gray-300'}
      >
        ★
      </span>
    ))
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      {/* Rating */}
      {metadata?.rating?.key && (
        <div className="flex items-center mb-4">
          <div className="flex text-lg">
            {renderStars(metadata.rating.key)}
          </div>
          <span className="ml-2 text-sm text-gray-600">
            ({metadata.rating.value})
          </span>
        </div>
      )}

      {/* Testimonial text */}
      {metadata?.testimonial_text && (
        <div 
          className="text-gray-700 mb-6 prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: metadata.testimonial_text }}
        />
      )}

      {/* Client info */}
      <div className="flex items-center">
        {metadata?.client_photo?.imgix_url && (
          <img
            src={`${metadata.client_photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={metadata.client_name || 'Client'}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        )}
        
        <div>
          <h4 className="font-semibold text-gray-900">
            {metadata?.client_name || 'Anonymous'}
          </h4>
          <p className="text-sm text-gray-600">
            {metadata?.client_title}
            {metadata?.client_title && metadata?.company_name && ' at '}
            {metadata?.company_name}
          </p>
        </div>
      </div>

      {/* Related project link */}
      {metadata?.related_project && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-600">
            Project: 
            <span className="text-blue-600 font-medium ml-1">
              {metadata.related_project.metadata?.project_name || metadata.related_project.title}
            </span>
          </p>
        </div>
      )}

      {/* Date */}
      {metadata?.date_received && (
        <div className="mt-2">
          <p className="text-xs text-gray-500">
            {new Date(metadata.date_received).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
      )}
    </div>
  )
}