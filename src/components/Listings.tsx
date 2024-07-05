'use client'

import { useId } from 'react'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import Image from 'next/image'

import backgroundImage from '@/images/background-features.jpg'
import screenshot from '@/images/screenshots/mockup.png'

interface Feature {
  name?: React.ReactNode
  summary: string
  description: string
  example: string
  textLeft: string
  textRight: string
  icon: React.ComponentType
}

export function Listings() {
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container>
        <div className="relative mx-auto mb-8 max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Explore listings
          </h2>
        </div>

        <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0">
          <Image
            className="relative w-full rounded-xl"
            src={screenshot}
            alt=""
            priority
          />
        </div>
      </Container>
    </section>
  )
}
