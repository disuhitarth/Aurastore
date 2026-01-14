'use client'

export default function PartnersBar() {
  // Placeholder partner logos - replace with actual partner brands
  const partners = [
    'Partner 1',
    'Partner 2',
    'Partner 3',
    'Partner 4',
    'Partner 5',
    'Partner 6',
    'Partner 7',
    'Partner 8',
  ]

  return (
    <section className="relative z-30 bg-aura-grey-light py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-sm font-semibold text-aura-grey-dark mb-6">
          TRUSTED BY LEADING BRANDS
        </h3>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
                style={{ minWidth: '150px' }}
              >
                <div className="bg-white px-6 py-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-aura-grey-dark font-medium">{partner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
