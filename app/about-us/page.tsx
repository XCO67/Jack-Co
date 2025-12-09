"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background Image - Same as homepage */}
      <div className="fixed inset-0 z-0">
        <img
          src="/background.jpg"
          alt="Event background"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32 z-10">
        <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-rajdhani text-white">
              ABOUT US
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-inter max-w-3xl mx-auto">
              Creating unforgettable events with a perfect blend of retro charm and modern professionalism
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative z-10 container max-w-screen-xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-rajdhani text-white">OUR STORY</h2>
            <p className="text-lg text-gray-300 font-inter leading-relaxed">
              Our story is one of dedication and a relentless pursuit of excellence. Established by visionary leaders
              who recognized the need for top-tier event equipment, Jack & Co has grown into a trusted partner for
              creating unforgettable events.
            </p>
            <p className="text-lg text-gray-300 font-inter leading-relaxed">
              At Jack & Co, we don't just provide equipment; we provide solutions. Our team of experts works closely
              with you, offering insights, advice, and customized equipment packages tailored to your unique event
              needs.
            </p>
            <p className="text-lg text-gray-300 font-inter leading-relaxed">
              We believe that every event is an opportunity to create magic, and we are here to make that magic happen,
              one rental at a time. We pride ourselves on being more than just a leasing company; we are your creative
              partner, dedicated to helping you craft remarkable events that leave a lasting impression.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden border border-white/20">
              <img
                src="/about-us.jpg"
                alt="About Us"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Modern Creative Design */}
      <section className="relative z-10 container max-w-screen-2xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-rajdhani text-white mb-4">OUR VALUES</h2>
          <p className="text-lg text-gray-300 font-inter max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Excellence Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8 h-full flex flex-col">
              <h3 className="text-2xl font-rajdhani text-white mb-4">EXCELLENCE</h3>
              <p className="text-gray-300 font-inter leading-relaxed">
                We strive for perfection in every detail, ensuring your event exceeds expectations and leaves a lasting impression.
              </p>
            </div>
          </div>

          {/* Passion Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8 h-full flex flex-col">
              <h3 className="text-2xl font-rajdhani text-white mb-4">PASSION</h3>
              <p className="text-gray-300 font-inter leading-relaxed">
                We love what we do, and it shows in the care and attention we bring to every project, making each event truly special.
              </p>
            </div>
          </div>

          {/* Collaboration Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8 h-full flex flex-col">
              <h3 className="text-2xl font-rajdhani text-white mb-4">COLLABORATION</h3>
              <p className="text-gray-300 font-inter leading-relaxed">
                We work closely with you to bring your unique vision to life, every step of the way, ensuring your voice is heard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative z-10 container max-w-screen-xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-rajdhani text-white mb-4">OUR TEAM</h2>
          <p className="text-lg text-gray-300 font-inter max-w-2xl mx-auto">
            A dedicated group of professionals committed to making your event extraordinary
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 text-center hover:border-white/30 transition-all duration-300 hover:scale-105">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-white/20 to-white/10 mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl font-rajdhani text-white">JD</span>
            </div>
            <h3 className="text-xl font-rajdhani text-white mb-2">JACK DAVIS</h3>
            <p className="text-gray-400 font-inter text-sm">Founder & Creative Director</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 text-center hover:border-white/30 transition-all duration-300 hover:scale-105">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-white/20 to-white/10 mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl font-rajdhani text-white">SM</span>
            </div>
            <h3 className="text-xl font-rajdhani text-white mb-2">SARAH MILLER</h3>
            <p className="text-gray-400 font-inter text-sm">Event Coordinator</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 text-center hover:border-white/30 transition-all duration-300 hover:scale-105">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-white/20 to-white/10 mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl font-rajdhani text-white">MJ</span>
            </div>
            <h3 className="text-xl font-rajdhani text-white mb-2">MIKE JOHNSON</h3>
            <p className="text-gray-400 font-inter text-sm">Design Specialist</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

