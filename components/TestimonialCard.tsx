import { Star } from 'lucide-react'
import type { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const rating = testimonial.metadata.rating ? parseInt(testimonial.metadata.rating.key) : 5
  const clientPhoto = testimonial.metadata.client_photo

  return (
    <div className="card">
      {/* Rating */}
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <blockquote className="text-gray-600 mb-6 leading-relaxed">
        "{testimonial.metadata.testimonial}"
      </blockquote>

      {/* Client Info */}
      <div className="flex items-center">
        {clientPhoto && (
          <div className="flex-shrink-0 mr-4">
            <img
              src={`${clientPhoto.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
              alt={testimonial.metadata.client_name}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        )}
        <div>
          <div className="font-semibold text-gray-900">
            {testimonial.metadata.client_name}
          </div>
          {testimonial.metadata.client_position && (
            <div className="text-sm text-gray-600">
              {testimonial.metadata.client_position}
              {testimonial.metadata.company && (
                <span> at {testimonial.metadata.company}</span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Related Project */}
      {testimonial.metadata.project && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="text-sm text-gray-600">
            Related to:{' '}
            <span className="font-medium text-gray-900">
              {testimonial.metadata.project.metadata.title}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}