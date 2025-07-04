import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
            Full Stack Developer & 
            <span className="text-primary-600"> Problem Solver</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 text-balance max-w-3xl mx-auto">
            I build modern web applications with React, TypeScript, and Next.js. 
            Passionate about creating exceptional user experiences and scalable solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects" className="btn-primary inline-flex items-center justify-center">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/experience" className="btn-secondary inline-flex items-center justify-center">
              See Experience
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}