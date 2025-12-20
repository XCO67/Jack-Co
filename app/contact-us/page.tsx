"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Send, MessageSquare, CheckCircle2, AlertCircle, Instagram } from "lucide-react"
import { siteConfig } from "@/lib/config"
import { useState, useEffect, FormEvent } from "react"

export default function ContactUsPage() {
  const [isMobile, setIsMobile] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' })
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  })

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent. We\'ll get back to you within 24 hours.'
        })
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          eventType: '',
          message: ''
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.'
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-background relative">
      {/* Background Image */}
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

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32 z-10">
        <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-rajdhani text-white">
              CONTACT US
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-inter max-w-3xl mx-auto">
              Let's create something extraordinary together. Get in touch and let's bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 container max-w-screen-2xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-rajdhani text-white mb-4">SEND US A MESSAGE</h2>
              <p className="text-lg text-gray-300 font-inter leading-relaxed">
                Fill out the form below and we'll get back to you within 24 hours. We're here to help make your event unforgettable.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-[oklch(0.28_0.08_250)] backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8">
              {/* Status Message */}
              {submitStatus.type && (
                <div className={`p-4 rounded-lg flex items-start space-x-3 ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-500/20 border border-green-500/30' 
                    : 'bg-red-500/20 border border-red-500/30'
                }`}>
                  {submitStatus.type === 'success' ? (
                    <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  )}
                  <p className={`text-sm font-inter ${
                    submitStatus.type === 'success' ? 'text-green-300' : 'text-red-300'
                  }`}>
                    {submitStatus.message}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white font-inter text-sm">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="bg-[oklch(0.32_0.08_250)] border-white/20 text-white placeholder:text-white/50 font-inter focus:border-[oklch(0.65_0.25_250)] focus:ring-[oklch(0.65_0.25_250)]/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white font-inter text-sm">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="bg-[oklch(0.32_0.08_250)] border-white/20 text-white placeholder:text-white/50 font-inter focus:border-[oklch(0.65_0.25_250)] focus:ring-[oklch(0.65_0.25_250)]/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white font-inter text-sm">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 font-inter focus:border-white/40 focus:ring-white/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white font-inter text-sm">
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+965 XXXX XXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 font-inter focus:border-white/40 focus:ring-white/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="eventType" className="text-white font-inter text-sm">
                  Event Type
                </Label>
                <Input
                  id="eventType"
                  placeholder="Corporate Event, Wedding, Festival, etc."
                  value={formData.eventType}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 font-inter focus:border-white/40 focus:ring-white/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white font-inter text-sm">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your event, date, venue, and any special requirements..."
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                    className="bg-[oklch(0.32_0.08_250)] border-white/20 text-white placeholder:text-white/50 font-inter resize-none focus:border-[oklch(0.65_0.25_250)] focus:ring-[oklch(0.65_0.25_250)]/20"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-white hover:bg-white/90 font-light font-inter relative group border-0 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative flex items-center justify-center text-[oklch(0.25_0.08_250)] !text-[oklch(0.25_0.08_250)]">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <Send className="ml-2 h-5 w-5 text-[oklch(0.25_0.08_250)]" />}
                  {!isSubmitting && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[oklch(0.25_0.08_250)] transition-all duration-300 group-hover:w-3/4"></span>
                  )}
                </span>
              </Button>
            </form>
          </div>

          {/* Contact Info & Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-rajdhani text-white mb-4">GET IN TOUCH</h2>
              <p className="text-lg text-gray-300 font-inter leading-relaxed">
                Whether you're planning a corporate gala, a music festival, or an intimate celebration, 
                we're here to help bring your vision to life with world-class equipment and expertise.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <div className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.02]">
                <div className="p-6 flex items-start space-x-4">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 group-hover:bg-white/20 transition-colors">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-rajdhani text-white mb-1">EMAIL</h3>
                    <a 
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-gray-300 font-inter hover:text-white transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.02]">
                <div className="p-6 flex items-start space-x-4">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 group-hover:bg-white/20 transition-colors">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-rajdhani text-white mb-1">PHONE</h3>
                    <a 
                      href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                      className="text-gray-300 font-inter hover:text-white transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Instagram Card */}
              <div className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.02]">
                <a
                  href={siteConfig.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 flex items-start space-x-4 block"
                >
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 group-hover:bg-white/20 transition-colors">
                    <Instagram className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-rajdhani text-white mb-1">FOLLOW US</h3>
                    <p className="text-gray-300 font-inter hover:text-white transition-colors">
                      @better.call.jack
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Response Card */}
            <div className="rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 p-6">
              <div className="flex items-start space-x-3">
                <MessageSquare className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-rajdhani text-white mb-2">QUICK RESPONSE</h3>
                  <p className="text-sm text-gray-300 font-inter leading-relaxed">
                    We typically respond to all inquiries within 24 hours. For urgent matters, 
                    please call us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
