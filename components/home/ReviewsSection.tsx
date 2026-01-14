'use client'

import { Star } from 'lucide-react'

export default function ReviewsSection() {
  const reviews = [
    {
      name: 'John Smith',
      rating: 5,
      comment: 'Aura Renovations exceeded our expectations! Professional, on-time, and the quality of work was outstanding.',
      project: 'Kitchen Renovation',
    },
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'From start to finish, the team was amazing. They transformed our commercial space beautifully.',
      project: 'Retail Store Renovation',
    },
    {
      name: 'Michael Chen',
      rating: 5,
      comment: 'Excellent project management and communication throughout. Highly recommend for any construction project.',
      project: 'Office Building',
    },
  ]

  return (
    <section className="relative z-30 bg-aura-grey-light py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-aura-gold">Clients Say</span>
          </h2>
          <p className="text-xl text-aura-grey-dark">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="card bg-white">
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-aura-gold fill-current" />
                ))}
              </div>
              <p className="text-aura-grey-dark mb-4 italic">"{review.comment}"</p>
              <div className="border-t border-aura-grey pt-4">
                <p className="font-semibold text-aura-black">{review.name}</p>
                <p className="text-sm text-aura-gold">{review.project}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=aura+renovations+brampton+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Read More Reviews
          </a>
        </div>
      </div>
    </section>
  )
}
