import { Metadata } from 'next'

export const companyInfo = {
  name: 'Aura Renovations Inc.',
  legalName: 'Aura Renovations Inc.',
  alternateName: ['Aura Renos', 'House of Aura'],
  description: 'Premier general contracting and renovation services in Brampton, ON. Specializing in commercial and residential construction, project management, and design-build solutions.',
  url: 'https://aurarenovations.ca',
  logo: 'https://aurarenovations.ca/logo.png',
  image: 'https://aurarenovations.ca/og-image.jpg',
  telephone: '+1-647-391-3292',
  email: 'info@aurarenovations.ca',
  address: {
    streetAddress: '30 Intermodal Drive, #46',
    addressLocality: 'Brampton',
    addressRegion: 'ON',
    postalCode: 'L6T 5K4',
    addressCountry: 'CA',
  },
  geo: {
    latitude: '43.6874',
    longitude: '-79.7331',
  },
  areaServed: [
    'Brampton',
    'Mississauga',
    'Toronto',
    'Vaughan',
    'Richmond Hill',
    'Markham',
    'Oakville',
    'Burlington',
    'Greater Toronto Area',
    'GTA',
  ],
  services: [
    'General Contracting',
    'Commercial Renovations',
    'Residential Renovations',
    'Kitchen Remodeling',
    'Bathroom Renovations',
    'Basement Finishing',
    'Project Management',
    'Property Management',
    'Design and Build',
    'Home Additions',
    'Commercial Buildouts',
  ],
  foundingDate: '2010',
  priceRange: '$$',
  rating: {
    ratingValue: '5',
    bestRating: '5',
    ratingCount: '127',
  },
  socialMedia: {
    facebook: 'https://facebook.com/aurarenovations',
    instagram: 'https://instagram.com/aurarenovations',
    linkedin: 'https://linkedin.com/company/aura-renovations',
    youtube: 'https://youtube.com/@aurarenovations',
  },
}

export function generateMetadata({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  noindex = false,
}: {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  noindex?: boolean
}): Metadata {
  const fullTitle = title.includes('Aura Renovations')
    ? title
    : `${title} | Aura Renovations Inc. - Brampton, ON`

  const url = canonical || companyInfo.url
  const image = ogImage || companyInfo.image

  return {
    title: fullTitle,
    description,
    keywords: keywords?.join(', '),
    authors: [{ name: companyInfo.name }],
    creator: companyInfo.name,
    publisher: companyInfo.name,
    robots: noindex ? 'noindex,nofollow' : 'index,follow',
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      url,
      title: fullTitle,
      description,
      siteName: companyInfo.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_CA',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: '@aurarenos',
    },
    verification: {
      google: 'your-google-verification-code',
    },
    other: {
      'contact:phone_number': companyInfo.telephone,
      'contact:email': companyInfo.email,
      'contact:street_address': companyInfo.address.streetAddress,
      'contact:locality': companyInfo.address.addressLocality,
      'contact:region': companyInfo.address.addressRegion,
      'contact:postal_code': companyInfo.address.postalCode,
      'contact:country_name': 'Canada',
    },
  }
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': companyInfo.url,
    name: companyInfo.name,
    alternateName: companyInfo.alternateName,
    legalName: companyInfo.legalName,
    description: companyInfo.description,
    url: companyInfo.url,
    logo: companyInfo.logo,
    image: companyInfo.image,
    telephone: companyInfo.telephone,
    email: companyInfo.email,
    foundingDate: companyInfo.foundingDate,
    priceRange: companyInfo.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: companyInfo.address.streetAddress,
      addressLocality: companyInfo.address.addressLocality,
      addressRegion: companyInfo.address.addressRegion,
      postalCode: companyInfo.address.postalCode,
      addressCountry: companyInfo.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: companyInfo.geo.latitude,
      longitude: companyInfo.geo.longitude,
    },
    areaServed: companyInfo.areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Construction and Renovation Services',
      itemListElement: companyInfo.services.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service,
        },
      })),
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: companyInfo.rating.ratingValue,
      bestRating: companyInfo.rating.bestRating,
      ratingCount: companyInfo.rating.ratingCount,
    },
    sameAs: Object.values(companyInfo.socialMedia),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '16:00',
      },
    ],
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
