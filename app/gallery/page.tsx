'use client'

import { useState } from 'react'
import { Building, Home, ChevronRight } from 'lucide-react'

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('residential')

  const residentialCategories = [
    { name: 'Kitchens', count: 25, image: '/images/gallery/kitchen-1.jpg' },
    { name: 'Multi Residential Units', count: 18, image: '/images/gallery/multi-unit-1.jpg' },
    { name: 'Bathrooms', count: 30, image: '/images/gallery/bathroom-1.jpg' },
    { name: 'Re-designing', count: 15, image: '/images/gallery/redesign-1.jpg' },
    { name: 'Wall Designing', count: 12, image: '/images/gallery/wall-design-1.jpg' },
    { name: 'Legal Basements', count: 22, image: '/images/gallery/basement-1.jpg' },
    { name: 'Garden Suites', count: 8, image: '/images/gallery/garden-suite-1.jpg' },
    { name: 'Outdoor Living Spaces', count: 16, image: '/images/gallery/outdoor-1.jpg' },
  ]

  const commercialCategories = [
    { name: 'Restaurants', count: 14, image: '/images/gallery/restaurant-1.jpg' },
    { name: 'Retail Stores', count: 20, image: '/images/gallery/retail-1.jpg' },
    { name: 'Salons & Spas', count: 12, image: '/images/gallery/salon-1.jpg' },
    { name: 'Medical Offices', count: 10, image: '/images/gallery/medical-1.jpg' },
    { name: 'Corporate Offices', count: 18, image: '/images/gallery/office-1.jpg' },
    { name: 'Condominium Units', count: 15, image: '/images/gallery/condo-1.jpg' },
    { name: 'Bars & Pubs', count: 8, image: '/images/gallery/bar-1.jpg' },
    { name: 'Grocery Stores', count: 6, image: '/images/gallery/grocery-1.jpg' },
    { name: 'Pharmacies', count: 5, image: '/images/gallery/pharmacy-1.jpg' },
  ]

  const categories = activeTab === 'residential' ? residentialCategories : commercialCategories

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-aura-black via-aura-grey-dark to-aura-black text-white py-20">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Project <span className="text-aura-gold">Gallery</span>
          </h1>
          <p className="text-xl text-aura-grey-light max-w-3xl mx-auto">
            Explore our portfolio of completed projects across residential and commercial sectors
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="section-container">
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border-2 border-aura-gold p-1 bg-white">
            <button
              onClick={() => setActiveTab('residential')}
              className={`flex items-center px-8 py-4 rounded-lg font-semibold transition-all ${
                activeTab === 'residential'
                  ? 'bg-aura-gold text-white'
                  : 'text-aura-grey-dark hover:text-aura-gold'
              }`}
            >
              <Home className="w-5 h-5 mr-2" />
              Residential Projects
            </button>
            <button
              onClick={() => setActiveTab('commercial')}
              className={`flex items-center px-8 py-4 rounded-lg font-semibold transition-all ${
                activeTab === 'commercial'
                  ? 'bg-aura-gold text-white'
                  : 'text-aura-grey-dark hover:text-aura-gold'
              }`}
            >
              <Building className="w-5 h-5 mr-2" />
              Commercial Projects
            </button>
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group card overflow-hidden cursor-pointer hover:shadow-2xl transition-all relative"
            >
              {/* Placeholder Image Background */}
              <div className="h-64 bg-gradient-to-br from-aura-grey-light to-aura-grey relative overflow-hidden">
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-aura-black/80 via-aura-black/40 to-transparent group-hover:from-aura-gold/80 group-hover:via-aura-gold/40 transition-all"></div>

                {/* Placeholder Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {activeTab === 'residential' ? (
                    <Home className="w-20 h-20 text-white/30 group-hover:scale-110 transition-transform" />
                  ) : (
                    <Building className="w-20 h-20 text-white/30 group-hover:scale-110 transition-transform" />
                  )}
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-aura-gold transition-colors">
                    {category.name}
                  </h3>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-white/80">{category.count} Projects</p>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note about images */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-aura-grey-light rounded-lg p-6 max-w-2xl">
            <p className="text-aura-grey-dark">
              <span className="font-semibold text-aura-gold">Note:</span> Project images will be added to showcase
              our completed work. Each category will feature high-quality photos of our construction and renovation projects.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Stats */}
      <section className="bg-aura-black text-white py-20 mt-12">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our <span className="text-aura-gold">Track Record</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-aura-gold mb-2">500+</div>
              <div className="text-lg text-aura-grey-light">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-aura-gold mb-2">15+</div>
              <div className="text-lg text-aura-grey-light">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-aura-gold mb-2">100%</div>
              <div className="text-lg text-aura-grey-light">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-aura-gold mb-2">50+</div>
              <div className="text-lg text-aura-grey-light">Industry Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container mt-12">
        <div className="card bg-gradient-to-r from-aura-gold-dark via-aura-gold to-aura-gold-light text-white text-center p-12">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Get in touch for a free consultation and estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-aura-black hover:bg-aura-grey-dark text-white font-semibold py-3 px-8 rounded-lg transition-all">
              Get Free Estimate
            </a>
            <a href="/services" className="bg-white hover:bg-aura-grey-light text-aura-black font-semibold py-3 px-8 rounded-lg transition-all">
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
