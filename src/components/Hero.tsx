import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg"
          alt="Houston skyline at sunset"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-white mb-6 text-shadow font-raleway animate-fade-in">
          Dentistry, Reinvented For You
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto text-shadow-strong font-light leading-relaxed animate-slide-up">
          At Mod Dentist, we&apos;ve reimagined dental care around your comfort, convenience, and confidence.
          <br className="hidden sm:block" />
          This is dentistry reinvented—modern, transparent, and truly made for you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Link
            href="#contact"
            className="w-full sm:w-auto bg-dental-green hover:bg-dental-green/90 text-white font-medium py-4 px-8 rounded-md transition-all duration-200 hover:shadow-lg text-center"
          >
            REQUEST AN APPOINTMENT
          </Link>
          <a
            href="tel:+18327625635"
            className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-dental-green font-medium py-4 px-8 rounded-md transition-all duration-200 text-center"
          >
            CALL +1 (832) 762‑5635
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}