import type { Skill } from '@/types'

interface SkillBadgeProps {
  skill: Skill
  size?: 'sm' | 'md'
  showProficiency?: boolean
}

export default function SkillBadge({ skill, size = 'md', showProficiency = false }: SkillBadgeProps) {
  const category = skill.metadata.category?.key || 'other'
  const proficiency = skill.metadata.proficiency?.key || 'beginner'
  
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1'
  }
  
  const categoryClasses = {
    frontend: 'skill-frontend',
    backend: 'skill-backend', 
    database: 'skill-database',
    tools: 'skill-tools',
    ai_ml: 'skill-ai_ml',
    other: 'bg-gray-100 text-gray-800'
  }

  const proficiencyIndicator = showProficiency && (
    <span className={`ml-2 w-2 h-2 rounded-full inline-block proficiency-${proficiency}`} />
  )

  return (
    <span className={`skill-badge ${categoryClasses[category]} ${sizeClasses[size]} inline-flex items-center`}>
      {skill.metadata.name}
      {proficiencyIndicator}
      {showProficiency && skill.metadata.years_experience && (
        <span className="ml-1 text-xs opacity-75">
          ({skill.metadata.years_experience}y)
        </span>
      )}
    </span>
  )
}