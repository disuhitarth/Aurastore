'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, Linkedin, Youtube, Star } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission will be connected to backend API later
    alert('Thank you for your inquiry! We will contact you shortly.')
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const reviews = [
    {
      name: 'John Smith',
      rating: 5,
      comment: 'Exceptional service from start to finish. Highly recommend Aura Renovations!',
      date: '2 weeks ago',
    },
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Professional team that delivered outstanding results. Our kitchen looks amazing!',
      date: '1 month ago',
    },
    {
      name: 'Michael Chen',
      rating: 5,
      comment: 'Best contractor we\'ve worked with. On time, on budget, and quality work.',
      date: '1 month ago',
    },
  ]

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-aura-black via-aura-grey-dark to-aura-black text-white py-20">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact <span className="text-aura-gold">Us</span>
          </h1>
          <p className="text-xl text-aura-grey-light max-w-3xl mx-auto">
            Get in touch for a free consultation and estimate. We're here to help bring your project to life.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8">
              Get In <span className="text-aura-gold">Touch</span>
            </h2>

            <div className="space-y-6 mb-8">
              {/* Phone */}
              <div className="card bg-aura-grey-light hover:shadow-xl transition-all">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-aura-gold flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <a href="tel:647-391-3292" className="text-aura-gold hover:underline text-lg">
                      647-391-3292
                    </a>
                    <p className="text-sm text-aura-grey-dark mt-1">Call us for immediate assistance</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="card bg-aura-grey-light hover:shadow-xl transition-all">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-aura-gold flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a href="mailto:info@aurarenovations.ca" className="text-aura-gold hover:underline">
                      info@aurarenovations.ca
                    </a>
                    <p className="text-sm text-aura-grey-dark mt-1">Send us an email anytime</p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="card bg-aura-grey-light hover:shadow-xl transition-all">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-aura-gold flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Address</h3>
                    <p className="text-aura-grey-dark">
                      30 Intermodal Drive, #46<br />
                      Brampton, ON
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="card bg-aura-grey-light hover:shadow-xl transition-all">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-aura-gold flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                    <p className="text-aura-grey-dark">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-lg bg-aura-gold hover:bg-aura-gold-dark flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-lg bg-aura-gold hover:bg-aura-gold-dark flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-lg bg-aura-gold hover:bg-aura-gold-dark flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-lg bg-aura-gold hover:bg-aura-gold-dark flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div>
            <div className="card bg-white">
              <h2 className="text-3xl font-bold mb-6">
                Send Us a <span className="text-aura-gold">Message</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field"
                    required
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field"
                    required
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="input-field"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="general">General Contracting</option>
                    <option value="commercial">Commercial Renovation</option>
                    <option value="residential">Residential Renovation</option>
                    <option value="project">Project Management</option>
                    <option value="property">Property Management</option>
                    <option value="design">Design & Build</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="input-field"
                    required
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full flex items-center justify-center">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>

                <p className="text-sm text-aura-grey-dark text-center">
                  We'll respond to your inquiry within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-aura-grey-light py-20 mt-12">
        <div className="section-container">
          <h2 className="text-4xl font-bold mb-12 text-center">
            What Our <span className="text-aura-gold">Clients Say</span>
          </h2>

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
                  <p className="text-sm text-aura-grey">{review.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.google.com/search?q=aura+renovations+brampton+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Read More Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-container">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Visit Our <span className="text-aura-gold">Location</span>
        </h2>

        <div className="rounded-xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.8934!2d-79.7331!3d43.6874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQxJzE0LjYiTiA3OcKwNDMnNTkuMiJX!5e0!3m2!1sen!2sca!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Aura Renovations Location"
          ></iframe>
        </div>
      </section>
    </div>
  )
}
