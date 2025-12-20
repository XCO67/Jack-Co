"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { services } from "@/lib/config"

export default function ServicesPage() {

  return (
    <div className="min-h-screen bg-background relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img
          src="/background.jpg"
          alt="Event background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[oklch(0.25_0.08_250)]/80"></div>
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32 z-10">
        <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-rajdhani text-white">
              OUR SERVICES
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-inter max-w-3xl mx-auto">
              Comprehensive event management solutions tailored to your unique needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - Modern Picture-Based with Flip Effect */}
      <section className="relative z-10 container max-w-screen-2xl mx-auto px-4 pt-8 pb-12 md:pt-12 md:pb-16 lg:pt-16 lg:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group perspective-1000"
              style={{ perspective: '1000px' }}
            >
              <div className="relative w-full h-[400px] preserve-3d transition-transform duration-700 group-hover:rotate-y-180 group-active:rotate-y-180 md:group-active:rotate-y-0">
                {/* Front of Card - Image */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/20 hover:border-[oklch(0.65_0.25_250)]/50 transition-colors">
                  <div className="aspect-[4/3] relative overflow-hidden h-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-rajdhani text-white mb-2">{service.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Back of Card - Description */}
                <div 
                  className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden bg-[oklch(0.28_0.08_250)] backdrop-blur-sm border border-[oklch(0.65_0.25_250)]/30 p-6 flex flex-col justify-center"
                  style={{ transform: 'rotateY(180deg)' }}
                >
                  <h3 className="text-2xl font-rajdhani text-[oklch(0.65_0.25_250)] mb-4">{service.title}</h3>
                  <p className="text-sm text-white/80 font-inter leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-white/70 font-inter flex items-center">
                        <span className="w-1.5 h-1.5 bg-[oklch(0.65_0.25_250)] rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

