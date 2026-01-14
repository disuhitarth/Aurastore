import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-aura-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">AURA</span>
              <span className="text-aura-gold"> RENOVATIONS</span>
            </h3>
            <p className="text-aura-grey mb-4">
              Professional commercial and residential construction services in Brampton and the GTA.
            </p>
            <p className="text-sm text-aura-grey">
              Also trading as: <span className="text-aura-gold">Aura Renos</span> & <span className="text-aura-gold">House of Aura</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-aura-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-aura-grey hover:text-aura-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-aura-grey hover:text-aura-gold transition-colors">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-aura-grey hover:text-aura-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-aura-grey hover:text-aura-gold transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-aura-grey hover:text-aura-gold transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-aura-gold">Our Services</h4>
            <ul className="space-y-2 text-aura-grey">
              <li>General Contracting</li>
              <li>Commercial Renovations</li>
              <li>Residential Renovations</li>
              <li>Project Management</li>
              <li>Property Management</li>
              <li>Design & Build</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-aura-gold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-aura-gold mr-2 mt-1 flex-shrink-0" />
                <span className="text-aura-grey">
                  30 Intermodal Drive, #46<br />
                  Brampton, ON
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-aura-gold mr-2 flex-shrink-0" />
                <a href="tel:647-391-3292" className="text-aura-grey hover:text-aura-gold transition-colors">
                  647-391-3292
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-aura-gold mr-2 flex-shrink-0" />
                <a href="mailto:info@aurarenovations.ca" className="text-aura-grey hover:text-aura-gold transition-colors">
                  info@aurarenovations.ca
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3 text-aura-gold">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-aura-grey hover:text-aura-gold transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-aura-grey hover:text-aura-gold transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-aura-grey hover:text-aura-gold transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-aura-grey hover:text-aura-gold transition-colors" aria-label="YouTube">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-aura-grey-dark mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-aura-grey">
            <p>© {currentYear} Aura Renovations Inc. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span>Domain: aurarenovations.ca</span>
              <span>|</span>
              <span>aurarenos.ca</span>
              <span>|</span>
              <span>aurarenos.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
