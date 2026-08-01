import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AIChatbot from '@/components/AIChatbot'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, OG_IMAGE } from '@/lib/seo'
import { JsonLd, organizationSchema, localBusinessSchema, websiteSchema } from '@/components/seo/JsonLd'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
  display: 'swap',
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'M.S Services & Trading Co. - Building Excellence Since 2005',
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords:
    'construction services pakistan, IT solutions karachi, janitorial services, fleet management, solar installation, aviation parts, marine equipment, electrical services, mechanical services, generator systems, AI automation, AI agents, business process automation',
  alternates: { canonical: '/' },
  icons: {
    icon: '/mslogo.png',
    shortcut: '/mslogo.png',
    apple: '/mslogo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: 'M.S Services & Trading Co. - Building Excellence Since 2005',
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [{ url: OG_IMAGE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M.S Services & Trading Co. - Building Excellence Since 2005',
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <JsonLd data={[organizationSchema(), localBusinessSchema(), websiteSchema()]} />
        <Navigation  />
        {children}
        <Footer />
        <AIChatbot />
      </body>
    </html>
  )
}
