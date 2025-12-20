"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { navigation } from "@/lib/config"

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOnWhiteBackground, setIsOnWhiteBackground] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Pages without white hero section should use white text/logo
    const pagesWithWhiteHero = ["/"]
    const hasWhiteHero = pagesWithWhiteHero.includes(pathname)
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const windowHeight = window.innerHeight
      
      // Check if we're in the hero section (white background) - only for homepage
      if (hasWhiteHero && currentScrollY < windowHeight * 0.8) {
        setIsOnWhiteBackground(true)
      } else {
        setIsOnWhiteBackground(false)
      }
      
      if (currentScrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    // Check initial state
    handleScroll()
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY, pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-transparent transition-all duration-200 ${
        isScrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="container relative z-10 flex h-20 max-w-screen-2xl items-center justify-between px-4 md:px-8 mx-auto">
        {/* Logo - Left Side */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo-pattern-white.png"
            alt="Jack & Co Logo"
            className="h-12 md:h-14 w-auto object-contain transition-all duration-300"
          />
        </Link>

        {/* Navigation - Centered */}
        <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2" aria-label="Main navigation">
          {navigation.slice(0, -1).map((item) => {
            const isActive = pathname === item.href
            const textColor = isActive ? "text-white" : "text-white/80 hover:text-white"
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-base font-light font-inter tracking-wide transition-all duration-300 group ${textColor}`}
              >
                {item.label}
                {/* Hover underline effect */}
                <span
                  className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            )
          })}
        </nav>

        {/* Contact Us Button - Right Side */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact-us"
            className="relative px-6 py-2.5 text-sm font-light font-inter tracking-wide transition-all duration-300 group text-[oklch(0.25_0.08_250)] bg-white border border-white hover:bg-white/90 rounded-full"
          >
            Contact Us
            <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300 bg-[oklch(0.25_0.08_250)] ${
              pathname === "/contact-us" ? "w-3/4" : "w-0 group-hover:w-3/4"
            }`} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-white/10">
          <nav className="container max-w-screen-2xl mx-auto px-4 py-4 space-y-4" aria-label="Mobile navigation">
            {navigation.slice(0, -1).map((item) => {
              const isActive = pathname === item.href
              const textColor = isActive ? "text-white" : "text-white/80"
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-base font-light font-inter tracking-wide transition-colors py-2 ${textColor} ${
                    isActive ? "border-l-2 border-white pl-4" : "pl-4"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
            {/* Contact Us Button in Mobile Menu */}
            <div className="pt-2 border-t border-white/10">
              <Link
                href="/contact-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-center px-6 py-3 text-sm font-light font-inter tracking-wide transition-all duration-300 rounded-full ${
                  pathname === "/contact-us"
                    ? "bg-white text-[oklch(0.25_0.08_250)]"
                    : "bg-white text-[oklch(0.25_0.08_250)] border border-white hover:bg-white/90"
                }`}
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
