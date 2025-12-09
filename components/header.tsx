"use client"

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
            className={`h-12 md:h-14 w-auto object-contain transition-all duration-300 ${
              isOnWhiteBackground ? "brightness-0" : ""
            }`}
          />
        </Link>

        {/* Navigation - Centered */}
        <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2" aria-label="Main navigation">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            const textColor = isOnWhiteBackground 
              ? (isActive ? "text-gray-900" : "text-gray-700 hover:text-gray-900")
              : (isActive ? "text-white" : "text-white/80 hover:text-white")
            const underlineColor = isOnWhiteBackground ? "bg-gray-900" : "bg-white"
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-base font-light font-inter tracking-wide transition-all duration-300 group ${textColor}`}
              >
                {item.label}
                {/* Hover underline effect */}
                <span
                  className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-0.5 ${underlineColor} rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            )
          })}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className={isOnWhiteBackground ? "text-gray-900" : "text-white"}>
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
          </button>
        </div>
      </div>
    </header>
  )
}
