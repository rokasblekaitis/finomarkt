'use client'

import { useId } from 'react'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import Image from 'next/image'

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
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="relative mx-auto mb-8 max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
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
