import Link from "next/link"
import { siteConfig, navigation } from "@/lib/config"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-black" aria-label="Site footer">
      <div className="container max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h4 className="font-rajdhani text-xl text-white">NAVIGATION</h4>
            <nav className="space-y-2 text-sm text-gray-400 font-inter" aria-label="Footer navigation">
              {navigation.map((item) => (
                <div key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          <div className="space-y-3">
            <h4 className="font-rajdhani text-xl text-white">ALL SERVICES</h4>
            <div className="space-y-2 text-sm text-gray-400 font-inter">
              <div>
                <Link href="/services" className="hover:text-white transition-colors">
                  Event Planning
                </Link>
              </div>
              <div>
                <Link href="/services" className="hover:text-white transition-colors">
                  Coordination
                </Link>
              </div>
              <div>
                <Link href="/services" className="hover:text-white transition-colors">
                  Design & Styling
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-rajdhani text-xl text-white">CONNECT</h4>
            <div className="space-y-2 text-sm text-gray-400 font-inter">
              <div>
                <Link 
                  href={siteConfig.links.instagram} 
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                >
                  Instagram
                </Link>
              </div>
              <div>
                <Link 
                  href={siteConfig.links.facebook} 
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                >
                  Facebook
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-rajdhani text-xl text-white">CONTACT</h4>
            <div className="space-y-2 text-sm text-gray-400 font-inter">
              <div>
                <a 
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div>
                <a 
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="text-gray-500">
                {siteConfig.contact.address}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400 font-inter">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
