"use client"

import { portfolioEvents } from "@/lib/config"

/**
 * Portfolio Scroll Component
 * Displays portfolio events in a horizontal scrolling animation
 */
export function PortfolioScroll() {
  return (
    <div className="relative mb-10">
      <div className="overflow-hidden">
        <div className="flex animate-scroll gap-6">
          {/* First set of portfolio items */}
          {portfolioEvents.map((event, index) => (
            <div
              key={`first-${index}`}
              className="group flex-shrink-0 w-[300px] md:w-[400px] lg:w-[500px] relative overflow-hidden rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading={index < 2 ? "eager" : "lazy"}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-[oklch(0.25_0.08_250)]/60 backdrop-blur-sm">
                  <h3 className="text-lg font-rajdhani text-white">{event.name}</h3>
                </div>
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {portfolioEvents.map((event, index) => (
            <div
              key={`second-${index}`}
              className="group flex-shrink-0 w-[300px] md:w-[400px] lg:w-[500px] relative overflow-hidden rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-[oklch(0.25_0.08_250)]/60 backdrop-blur-sm">
                  <h3 className="text-lg font-rajdhani text-white">{event.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

