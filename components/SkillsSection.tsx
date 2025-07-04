import SkillBadge from '@/components/SkillBadge'
import type { Skill } from '@/types'

interface SkillsSectionProps {
  skills: Skill[]
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  if (!skills || skills.length === 0) {
    return null
  }

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    const category = skill.metadata.category?.key || 'other'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  const categoryOrder = ['frontend', 'backend', 'database', 'ai_ml', 'tools']
  const categoryLabels = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    ai_ml: 'AI & Machine Learning',
    tools: 'Tools & Technologies',
    other: 'Other'
  }

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across different areas 
            of web development and modern technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryOrder.map((category) => {
            const categorySkills = skillsByCategory[category]
            if (!categorySkills || categorySkills.length === 0) return null

            return (
              <div key={category} className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {categoryLabels[category] || category}
                </h3>
                <div className="space-y-3">
                  {categorySkills.map((skill) => (
                    <div key={skill.id}>
                      <SkillBadge skill={skill} showProficiency />
                      {skill.metadata.description && (
                        <p className="text-sm text-gray-600 mt-1">
                          {skill.metadata.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}

          {/* Handle any uncategorized skills */}
          {skillsByCategory.other && skillsByCategory.other.length > 0 && (
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Other</h3>
              <div className="space-y-3">
                {skillsByCategory.other.map((skill) => (
                  <div key={skill.id}>
                    <SkillBadge skill={skill} showProficiency />
                    {skill.metadata.description && (
                      <p className="text-sm text-gray-600 mt-1">
                        {skill.metadata.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}