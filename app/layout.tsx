import './globals.css'
import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AIChatbot from '@/components/AIChatbot'

export const metadata: Metadata = {
  title: 'M.S Services & Trading Co. - Building Excellence Since 2005',
  description: 'Complete infrastructure solutions including construction, IT equipment, janitorial services, transportation, supplies, solar systems, aviation parts, marine equipment, electrical services, mechanical solutions, and safety equipment. Serving Pakistan with excellence since 2005.',
  keywords: 'construction services pakistan, IT solutions karachi, janitorial services, fleet management, solar installation, aviation parts, marine equipment, electrical services, mechanical services, generator systems',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <Navigation />
        {children}
        <Footer />
        <AIChatbot />
      </body>
    </html>
  )
}