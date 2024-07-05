import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-xxl mx-auto text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Rediscover the financial market
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg tracking-tight text-white">
            To trade securities was privilege for Bigwig Industries. Now Petite
            Startups can list securities and trade online.{' '}
          </p>
          <Button href="/register" color="white" className="mt-10">
            Register
          </Button>
        </div>
      </Container>
    </section>
  )
}
