import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Audience } from '@/components/Audience'
import { Listings } from '@/components/Listings'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <PrimaryFeatures /> */}
        <Audience />
        <Listings />
        <SecondaryFeatures />
        {/* <Testimonials /> */}
        <Pricing />
        {/* <Faqs /> */}
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
