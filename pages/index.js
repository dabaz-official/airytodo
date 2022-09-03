import Head from 'next/head'
import Faqs from '../components/Faqs'
import Features from '../components/Features'
import Footer from '../components/Footer'
import FreeMembership from '../components/FreeMembership'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <div>
      <Head>
        <title>AiryToDo</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header />

      <main>
        <Hero />
        <Features />
        <FreeMembership />
        <Testimonials />
        <Pricing />
        <Faqs />
        <Footer />
      </main>
    </div>
  )
}
