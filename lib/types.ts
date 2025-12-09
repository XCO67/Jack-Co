/**
 * TypeScript Types
 * Centralized type definitions for type safety and extensibility
 */

export type Service = {
  image: string
  title: string
  description: string
  features: readonly string[]
}

export type PortfolioEvent = {
  image: string
  name: string
  category: string
}

export type NavigationItem = {
  href: string
  label: string
}

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    instagram: string
    facebook: string
  }
  contact: {
    email: string
    phone: string
    address: string
  }
}

