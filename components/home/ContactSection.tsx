import Link from 'next/link'
import { Phone, Mail, Clock } from 'lucide-react'

export default function ContactSection() {
  return (
    <section className="relative z-30 bg-aura-black text-white py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your <span className="text-aura-gold">Project?</span>
            </h2>
            <p className="text-xl text-aura-grey mb-8">
              Get in touch with us today for a free consultation and estimate. Let's build something amazing together.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-aura-gold mr-4" />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <a href="tel:647-391-3292" className="text-aura-gold hover:underline">
                    647-391-3292
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="w-6 h-6 text-aura-gold mr-4" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <a href="mailto:info@aurarenovations.ca" className="text-aura-gold hover:underline">
                    info@aurarenovations.ca
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Clock className="w-6 h-6 text-aura-gold mr-4" />
                <div>
                  <p className="font-semibold">Business Hours</p>
                  <p className="text-aura-grey">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-aura-grey">Sat: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            <Link href="/contact" className="btn-primary">
              Get Free Estimate
            </Link>
          </div>

          <div className="card bg-white text-aura-black">
            <h3 className="text-2xl font-bold mb-6">Quick Inquiry</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input-field"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="input-field"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="input-field"
                  required
                />
              </div>
              <div>
                <select className="input-field" required>
                  <option value="">Select Service</option>
                  <option value="general">General Contracting</option>
                  <option value="commercial">Commercial Renovation</option>
                  <option value="residential">Residential Renovation</option>
                  <option value="project">Project Management</option>
                  <option value="property">Property Management</option>
                  <option value="design">Design & Build</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Brief description of your project"
                  rows={4}
                  className="input-field"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
