"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
        <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bebas text-white">
              CONTACT US
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-montserrat max-w-3xl mx-auto">
              Let's start planning your perfect event together
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container max-w-screen-xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-3xl font-bebas text-white">SEND US A MESSAGE</CardTitle>
              <CardDescription className="text-gray-300 font-montserrat">
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-white font-montserrat">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 font-montserrat"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-white font-montserrat">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 font-montserrat"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white font-montserrat">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 font-montserrat"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white font-montserrat">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 font-montserrat"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="eventType" className="text-white font-montserrat">
                    Event Type
                  </Label>
                  <Input
                    id="eventType"
                    placeholder="Wedding, Corporate, Birthday, etc."
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 font-montserrat"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white font-montserrat">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your event..."
                    rows={6}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 font-montserrat resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-white hover:bg-white/90 text-black font-bold font-montserrat relative group"
                >
                  <span className="relative">
                    Send Message
                    <Send className="ml-2 h-5 w-5 inline" />
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-3/4"></span>
                  </span>
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bebas text-white mb-6">GET IN TOUCH</h2>
              <p className="text-lg text-gray-300 font-montserrat leading-relaxed mb-8">
                We'd love to hear from you. Whether you're planning a wedding, corporate event, or celebration,
                we're here to help bring your vision to life.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bebas text-white mb-1">EMAIL</h3>
                  <p className="text-gray-300 font-montserrat">hello@jackandco.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bebas text-white mb-1">PHONE</h3>
                  <p className="text-gray-300 font-montserrat">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bebas text-white mb-1">ADDRESS</h3>
                  <p className="text-gray-300 font-montserrat">
                    123 Event Street
                    <br />
                    City, State 12345
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bebas text-white mb-3">BUSINESS HOURS</h3>
              <div className="space-y-2 text-gray-300 font-montserrat">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

