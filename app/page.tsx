"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { CompanyLogoScroll } from "@/components/company-logo-scroll"
import { PortfolioScroll } from "@/components/portfolio-scroll"
import { useEffect, useRef, useState } from "react"
import { services } from "@/lib/config"

export default function HomePage() {
  const servicesSectionRef = useRef<HTMLElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="min-h-screen relative">
      {/* Background Image - Covers entire page */}
      <div className="fixed inset-0 z-0">
        <img
          src="/background.jpg"
          alt="Event background"
          className="w-full h-full object-cover"
          style={{ backgroundAttachment: isMobile ? 'scroll' : 'fixed' }}
        />
        <div className="absolute inset-0 bg-[oklch(0.25_0.08_250)]/80"></div>
      </div>

      <Header />

      {/* Hero Section - White space at top with logo */}
      <section className="relative min-h-screen flex flex-col -mt-20 pt-32 md:pt-40 pb-12 z-10">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-6 mt-[130px]">
            <img
              src="/logo-pattern-white.png"
              alt="Jack & Co Logo"
              className="mx-auto max-w-full h-auto w-auto max-h-[40vh] md:max-h-[50vh] lg:max-h-[60vh] object-contain"
            />
            <p className="text-2xl md:text-3xl lg:text-4xl font-inter font-light text-white tracking-[0.2em] uppercase">
              Events Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section 
        ref={servicesSectionRef}
        className="w-full px-4 py-12 md:py-16 lg:py-20 relative z-20"
      >
        <div className="container max-w-screen-2xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-rajdhani text-white mb-3">OUR SERVICES</h2>
            <p className="text-base md:text-lg text-white/80 font-inter max-w-2xl mx-auto">
              Whether you're planning a lavish wedding, a corporate gala, a music festival or any event that requires the
              finest equipment and infrastructure. We got you covered!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 hover:border-[oklch(0.65_0.25_250)]/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <div className="aspect-[3/2] relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-rajdhani text-white mb-2 group-hover:text-[oklch(0.65_0.25_250)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-white/70 font-inter leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white bg-white text-[oklch(0.25_0.08_250)] hover:bg-white/90 font-light font-inter relative group"
              asChild
            >
              <Link href="/services" className="relative">
                View All Services
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[oklch(0.25_0.08_250)] transition-all duration-300 group-hover:w-3/4"></span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section 
        className="w-full px-4 py-12 md:py-16 lg:py-20 relative z-20 overflow-hidden"
      >
        <div className="container max-w-screen-2xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-rajdhani text-white mb-3">OUR PORTFOLIO</h2>
            <p className="text-base md:text-lg text-white/80 font-inter max-w-2xl mx-auto">
              From Formula 4 racing events to corporate galas, we've created unforgettable experiences
            </p>
          </div>

          {/* Company Logos Section - Horizontal Scrolling */}
          <CompanyLogoScroll />
          
          {/* Portfolio Images - Horizontal Scrolling */}
          <PortfolioScroll />

          <div className="flex justify-center">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white bg-white text-[oklch(0.25_0.08_250)] hover:bg-white/90 font-light font-inter relative group"
              asChild
            >
              <Link href="/portfolio" className="relative">
                View Full Portfolio
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[oklch(0.25_0.08_250)] transition-all duration-300 group-hover:w-3/4"></span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="relative z-30">
        <Footer />
      </div>
    </div>
  )
}
