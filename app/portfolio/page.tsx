"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { portfolioEvents, companyLogos } from "@/lib/config"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img
          src="/background.jpg"
          alt="Event background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32 z-10">
        <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-rajdhani text-white">
              OUR PORTFOLIO
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-inter max-w-3xl mx-auto">
              Showcasing our successful events and the magic we've created together
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery - Creative Grid */}
      <section className="relative z-10 container max-w-screen-2xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioEvents.map((event, index) => {
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-[1.02] cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-inter text-white bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                        {event.category}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-rajdhani text-white">
                      {event.name}
                    </h3>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="relative z-10 container max-w-screen-2xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-rajdhani text-white mb-3">
            TRUSTED BY LEADING BRANDS
          </h2>
          <p className="text-base md:text-lg text-gray-300 font-inter max-w-2xl mx-auto">
            We're proud to have worked with some of the world's most recognized brands
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-8 md:gap-12">
          {companyLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-20 md:h-24 opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={logo}
                alt={`Company logo ${index + 1}`}
                className="max-w-full max-h-full object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

