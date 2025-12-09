/**
 * Site Configuration
 * Centralized configuration for easy updates and extensibility
 */

export const siteConfig = {
  name: "Jack & Co",
  description: "Professional event management services with retro modern style",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://jackandco.com",
  ogImage: "/og-image.jpg",
  links: {
    instagram: "#",
    facebook: "#",
  },
  contact: {
    email: "info@jackandco.com",
    phone: "+965 XXXX XXXX",
    address: "Kuwait",
  },
} as const

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
] as const

export const services = [
  {
    image: "/services/event planning.jpg",
    title: "EVENT PLANNING",
    description:
      "Pioneering event planning expertise ensures seamless, unforgettable experiences for every client.",
    features: [
      "Comprehensive planning",
      "Timeline management",
      "Budget coordination",
      "Vendor selection",
    ],
  },
  {
    image: "/services/light system.jpg",
    title: "LIGHT SYSTEM",
    description:
      "Our innovative lighting solutions transform spaces, illuminating events with unmatched brilliance.",
    features: [
      "Custom lighting design",
      "Professional installation",
      "Dynamic lighting effects",
      "Energy-efficient solutions",
    ],
  },
  {
    image: "/services/led screens.jpg",
    title: "LED SCREENS",
    description:
      "Cutting-edge LED screens deliver vivid visuals and enhance event engagement like no other.",
    features: [
      "High-resolution displays",
      "Indoor & outdoor options",
      "Custom configurations",
      "Live content support",
    ],
  },
  {
    image: "/services/audio and visual.jpg",
    title: "AUDIO & VISUAL PRODUCTION",
    description:
      "Leaders in AV production, we deliver crystal-clear sound and stunning visuals every time.",
    features: [
      "Professional sound systems",
      "Video production",
      "Live streaming setup",
      "Technical support",
    ],
  },
  {
    image: "/services/streaming solutions.jpg",
    title: "STREAMING SOLUTIONS",
    description:
      "Stay ahead with our premier streaming technology, connecting global audiences to your event.",
    features: [
      "Live event streaming",
      "Multi-platform broadcasting",
      "HD quality transmission",
      "Real-time monitoring",
    ],
  },
  {
    image: "/services/event production.jpg",
    title: "EVENT PRODUCTION",
    description:
      "Planning, designing, constructing & managing event displays, materials, branding, marketing.",
    features: [
      "Full production management",
      "Brand integration",
      "Display construction",
      "Marketing support",
    ],
  },
  {
    image: "/services/promoters.jpg",
    title: "PROMOTERS",
    description:
      "Our dynamic promoters create buzz and draw crowds, setting trends and maximizing event success.",
    features: [
      "Event promotion",
      "Social media marketing",
      "Crowd engagement",
      "Brand awareness",
    ],
  },
] as const

export const portfolioEvents = [
  {
    image: "/portfolio/Kuwait Formula 4 Event.jpeg",
    name: "Kuwait Formula 4 Event",
    category: "Racing Event",
  },
  {
    image: "/portfolio/Spark Fitness Fusion Event.png",
    name: "Spark Fitness Fusion Event",
    category: "Fitness Event",
  },
  {
    image: "/portfolio/Qout Market.jpg",
    name: "Qout Market",
    category: "Market Event",
  },
  {
    image: "/portfolio/Boubyan CXM Event.png",
    name: "Boubyan CXM Event",
    category: "Corporate Event",
  },
  {
    image: "/portfolio/Redbull Drift Event.jpg",
    name: "Redbull Drift Event",
    category: "Sports Event",
  },
  {
    image: "/portfolio/KU grad Event.jpg",
    name: "KU Grad Event",
    category: "Graduation",
  },
] as const

export const companyLogos = [
  "/company-logos/BoubyanBankLogo_(1).svg.png",
  "/company-logos/Gulf_Bank_Logo.svg.png",
  "/company-logos/NBK.svg.png",
  "/company-logos/Zain_(Unternehmen)_logo.svg.png",
  "/company-logos/ooredoo_logo_.png",
  "/company-logos/red-bull-logo-png-transparent.png",
  "/company-logos/McDonalds-Logo-1968-2003.png",
  "/company-logos/nestle-9-logo-png-transparent.png",
  "/company-logos/Lincoln_logo.svg.png",
  "/company-logos/Cadillac-Logo-Free-Download-PNG.png",
  "/company-logos/porsche-logo-png_seeklogo-168544.png",
  "/company-logos/Huawei-Logo.png",
  "/company-logos/Anghami_logo.png",
  "/company-logos/KuwaitSportsClub.png",
  "/company-logos/Sultanlogo.png",
] as const

