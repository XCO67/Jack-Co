"use client"

import { companyLogos } from "@/lib/config"

/**
 * Company Logo Scroll Component
 * Displays company logos in a horizontal scrolling animation
 */
export function CompanyLogoScroll() {
  return (
    <div className="mb-16 py-8">
      <div className="overflow-hidden">
        <div className="flex animate-scroll gap-12 items-center">
          {/* First set of logos */}
          {companyLogos.map((logo, index) => {
            const logoName = logo.split("/").pop()?.replace(/\.(png|jpg|svg)$/i, "") || `Company ${index + 1}`
            return (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 h-16 md:h-20 lg:h-24 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity max-w-[200px]"
              >
                <img
                  src={logo}
                  alt={logoName}
                  className="h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
            )
          })}
          {/* Duplicate set for seamless loop */}
          {companyLogos.map((logo, index) => {
            const logoName = logo.split("/").pop()?.replace(/\.(png|jpg|svg)$/i, "") || `Company ${index + 1}`
            return (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 h-16 md:h-20 lg:h-24 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity max-w-[200px]"
              >
                <img
                  src={logo}
                  alt={logoName}
                  className="h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

