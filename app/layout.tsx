import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Developer Portfolio',
  description: 'Professional developer portfolio showcasing projects, skills, and experience',
  keywords: ['developer', 'portfolio', 'web development', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Developer Portfolio' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👨‍💻</text></svg>",
        type: 'image/svg+xml',
      }
    ]
  },
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
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}