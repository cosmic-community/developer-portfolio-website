import { Skill } from '@/types'

interface SkillCardProps {
  skill: Skill
  className?: string
}

export default function SkillCard({ skill, className = '' }: SkillCardProps) {
  const skillName = skill.metadata?.skill_name || skill.title
  const proficiency = skill.metadata?.proficiency
  const yearsExperience = skill.metadata?.years_experience
  const icon = skill.metadata?.icon

  const getProficiencyColor = (level?: string) => {
    switch (level) {
      case 'expert':
        return 'bg-green-500'
      case 'advanced':
        return 'bg-blue-500'
      case 'intermediate':
        return 'bg-yellow-500'
      case 'beginner':
        return 'bg-gray-500'
      default:
        return 'bg-gray-400'
    }
  }

  const getProficiencyWidth = (level?: string) => {
    switch (level) {
      case 'expert':
        return 'w-full'
      case 'advanced':
        return 'w-3/4'
      case 'intermediate':
        return 'w-1/2'
      case 'beginner':
        return 'w-1/4'
      default:
        return 'w-1/3'
    }
  }

  return (
    <div className={`card hover:shadow-md transition-shadow duration-300 ${className}`}>
      <div className="flex items-center space-x-4 mb-4">
        {icon && (
          <img
            src={`${icon.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
            alt={skillName}
            width={40}
            height={40}
            className="w-10 h-10 rounded-lg object-cover"
          />
        )}
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{skillName}</h3>
          {proficiency && (
            <p className="text-sm text-gray-600 capitalize">{proficiency.value}</p>
          )}
        </div>
      </div>

      {proficiency && (
        <div className="mb-3">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-medium text-gray-700">
              Proficiency
            </span>
            {yearsExperience && (
              <span className="text-xs text-gray-500">
                {yearsExperience} {yearsExperience === 1 ? 'year' : 'years'}
              </span>
            )}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${getProficiencyColor(proficiency.key)} ${getProficiencyWidth(proficiency.key)}`}
            />
          </div>
        </div>
      )}
    </div>
  )
}