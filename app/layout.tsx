import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StructuredData from '@/components/StructuredData'
import { generateLocalBusinessSchema } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL('https://aurarenovations.ca'),
  title: {
    default: 'Aura Renovations Inc. | Premier General Contractor in Brampton, ON',
    template: '%s | Aura Renovations Inc.'
  },
  description: 'Award-winning general contractor serving Brampton and the GTA since 2010. Expert commercial renovations, residential remodeling, project management, and design-build services. Licensed, insured, and trusted by over 500 satisfied clients.',
  keywords: [
    'general contractor Brampton',
    'commercial renovations GTA',
    'residential renovations Brampton',
    'kitchen remodeling Brampton',
    'bathroom renovations',
    'basement finishing',
    'project management construction',
    'design build services',
    'licensed contractor Ontario',
    'home additions Brampton',
    'commercial buildout',
    'property management',
    'renovation contractor near me',
    'Aura Renovations',
    'Aura Renos',
    'House of Aura',
  ],
  authors: [{ name: 'Aura Renovations Inc.', url: 'https://aurarenovations.ca' }],
  creator: 'Aura Renovations Inc.',
  publisher: 'Aura Renovations Inc.',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  category: 'Construction & Renovation',
  classification: 'Business',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://aurarenovations.ca',
    siteName: 'Aura Renovations Inc.',
    title: 'Aura Renovations Inc. | Premier General Contractor in Brampton, ON',
    description: 'Award-winning general contractor serving Brampton and the GTA. Expert commercial & residential renovations, project management, and design-build services.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aura Renovations Inc. - Professional Construction Services',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aurarenos',
    creator: '@aurarenos',
    title: 'Aura Renovations Inc. | Premier General Contractor',
    description: 'Award-winning general contractor serving Brampton and the GTA since 2010.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://aurarenovations.ca',
    languages: {
      'en-CA': 'https://aurarenovations.ca',
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
    yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
  },
  other: {
    'geo.region': 'CA-ON',
    'geo.placename': 'Brampton',
    'geo.position': '43.6874;-79.7331',
    'ICBM': '43.6874, -79.7331',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = generateLocalBusinessSchema()

  return (
    <html lang="en-CA">
      <head>
        <StructuredData data={structuredData} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#D4AF37" />
      </head>
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-aura-gold focus:text-white focus:rounded">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        {/* Google Analytics - Replace with your GA4 ID */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </body>
    </html>
  )
}
