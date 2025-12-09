"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { CompanyLogoScroll } from "@/components/company-logo-scroll"
import { PortfolioScroll } from "@/components/portfolio-scroll"
import { useEffect, useRef } from "react"
import { services } from "@/lib/config"

export default function HomePage() {
  const servicesSectionRef = useRef<HTMLElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (backgroundRef.current) {
            if (entry.isIntersecting) {
              backgroundRef.current.style.opacity = '1'
            } else {
              backgroundRef.current.style.opacity = '0'
            }
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '-100px 0px 0px 0px'
      }
    )

    if (servicesSectionRef.current) {
      observer.observe(servicesSectionRef.current)
    }

    return () => {
      if (servicesSectionRef.current) {
        observer.unobserve(servicesSectionRef.current)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-background relative">
      <Header />

      {/* Hero Section - Fixed/Sticky White Background */}
      <section className="sticky top-0 min-h-screen flex flex-col -mt-20 pt-20 pb-[100px] z-10 bg-white" style={{ minHeight: 'calc(100vh + 100px)' }}>
        {/* Logo Section */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-6">
            <img
              src="/jack-co-logo.png"
              alt="Jack & Co Logo"
              className="mx-auto max-w-full h-auto w-auto max-h-[60vh] md:max-h-[70vh] lg:max-h-[80vh] object-contain"
            />
            <p className="text-2xl md:text-3xl lg:text-4xl font-inter font-light text-gray-800 tracking-[0.2em] uppercase">
              Events Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview Section - Scrolls over hero */}
      <section 
        ref={servicesSectionRef}
        className="w-full px-4 py-12 md:py-16 lg:py-20 relative z-20 bg-black/60"
                style={{
          backgroundImage: 'url(/background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="container max-w-screen-2xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-rajdhani text-white mb-3">OUR SERVICES</h2>
            <p className="text-base md:text-lg text-gray-300 font-inter max-w-2xl mx-auto">
              Whether you're planning a lavish wedding, a corporate gala, a music festival or any event that requires the
              finest equipment and infrastructure. We got you covered!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <div className="aspect-[3/2] relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-rajdhani text-white mb-2 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-300 font-inter leading-relaxed">
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
              className="border-2 border-white/50 text-white hover:bg-white/10 font-light font-inter relative group"
              asChild
              >
              <Link href="/services" className="relative">
                View All Services
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-3/4"></span>
              </Link>
              </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section - White Background */}
      <section className="w-full px-4 py-12 md:py-16 lg:py-20 min-h-screen flex items-center relative z-20 bg-white">
        <div className="container max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
              {/* Company Logo - Top Left */}
              <div className="mb-8">
                <img
                  src="/logo-pattern-black.png"
                  alt="Jack & Co Logo"
                  className="max-w-[150px] md:max-w-[180px] lg:max-w-[200px] h-auto object-contain"
                />
              </div>
              <h2 className="text-4xl md:text-5xl font-rajdhani text-gray-900">ABOUT US</h2>
              <p className="text-lg text-gray-700 font-inter leading-relaxed">
                Our story is one of dedication and a relentless pursuit of excellence. Established by visionary leaders
                who recognized the need for top-tier event equipment, we've grown into your trusted creative partner.
              </p>
              <p className="text-lg text-gray-700 font-inter leading-relaxed">
                We believe that every event is an opportunity to create magic, and we are here to make that magic happen,
                one rental at a time. Join us on a journey where imagination meets innovation.
              </p>
              <div className="flex justify-center mt-4">
                <Button
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 text-white font-light font-inter relative group"
                  asChild
                >
                  <Link href="/about-us" className="relative">
              Learn More
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-3/4"></span>
                  </Link>
            </Button>
              </div>
          </div>
          <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden border border-gray-200 shadow-lg">
                <img
                  src="/about-us.jpg"
                  alt="About Us"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section - Horizontal Scrolling Gallery */}
      <section 
        className="w-full px-4 py-12 md:py-16 lg:py-20 relative z-20 overflow-hidden"
        style={{
          backgroundImage: 'url(/background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="container max-w-screen-2xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-rajdhani text-white mb-3">OUR PORTFOLIO</h2>
            <p className="text-base md:text-lg text-gray-300 font-inter max-w-2xl mx-auto">
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
              className="border-2 border-white/50 text-white hover:bg-white/10 font-light font-inter relative group"
              asChild
            >
              <Link href="/portfolio" className="relative">
                View Full Portfolio
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-3/4"></span>
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
