import Head from 'next/head'
import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Doctors from '@/components/Doctors'
import Services from '@/components/Services'
import Features from '@/components/Features'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>MOD Dentistry - Dentistry Reinvented For You</title>
        <meta 
          name="description" 
          content="At MOD Dentistry, we've reimagined dental care around your comfort, convenience, and confidence. Modern, transparent dental care in Houston, Texas." 
        />
        <meta name="keywords" content="dentist Houston, modern dentistry, dental implants, smile makeover, dental care" />
        <meta property="og:title" content="MOD Dentistry - Dentistry Reinvented For You" />
        <meta property="og:description" content="Experience modern, comfortable dental care in Houston. We've reimagined dentistry around your comfort and convenience." />
        <meta property="og:type" content="website" />
      </Head>
      
      <Layout>
        <Hero />
        <About />
        <Doctors />
        <Services />
        <Features />
        <Gallery />
        <Testimonials />
        <Contact />
      </Layout>
    </>
  )
}