import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Developer Portfolio | Full Stack Developer',
  description: 'Professional portfolio showcasing web development projects, skills, and experience in React, TypeScript, Next.js, and modern web technologies.',
  keywords: 'web developer, full stack developer, React, TypeScript, Next.js, portfolio',
  authors: [{ name: 'Developer Portfolio' }],
  openGraph: {
    title: 'Developer Portfolio | Full Stack Developer',
    description: 'Professional portfolio showcasing web development projects and expertise',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}