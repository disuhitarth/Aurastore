import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Aura Renovations Inc. - Commercial & Residential Construction',
  description: 'Professional general contracting, commercial renovations, residential remodeling, and project management services in Brampton, ON. Quality construction you can trust.',
  keywords: 'general contractor, commercial renovations, residential renovations, construction, Brampton, Ontario, project management, Aura Renos, House of Aura',
  authors: [{ name: 'Aura Renovations Inc.' }],
  creator: 'Aura Renovations Inc.',
  publisher: 'Aura Renovations Inc.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Aura Renovations Inc. - Commercial & Residential Construction',
    description: 'Professional general contracting and renovation services in Brampton, ON',
    url: 'https://aurarenovations.ca',
    siteName: 'Aura Renovations Inc.',
    locale: 'en_CA',
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
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
