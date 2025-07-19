import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Developer Portfolio',
  description: 'Professional developer portfolio showcasing projects, skills, and experience',
  keywords: ['developer', 'portfolio', 'web development', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Developer Portfolio' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Developer Portfolio',
    description: 'Professional developer portfolio showcasing projects, skills, and experience',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developer Portfolio',
    description: 'Professional developer portfolio showcasing projects, skills, and experience',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}