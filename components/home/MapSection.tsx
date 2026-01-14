'use client'

export default function MapSection() {
  return (
    <section className="relative z-30 bg-white py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Visit Our <span className="text-aura-gold">Location</span>
          </h2>
          <p className="text-xl text-aura-grey-dark">
            30 Intermodal Drive, #46, Brampton, ON
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-2xl">
          {/* Google Maps Embed */}
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

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="card">
            <h3 className="text-xl font-bold mb-2 text-aura-gold">Serving the GTA</h3>
            <p className="text-aura-grey-dark">
              We provide services throughout the Greater Toronto Area
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-2 text-aura-gold">Licensed & Insured</h3>
            <p className="text-aura-grey-dark">
              Fully licensed general contractor with comprehensive insurance
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-2 text-aura-gold">Free Estimates</h3>
            <p className="text-aura-grey-dark">
              Contact us today for a complimentary project estimate
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
