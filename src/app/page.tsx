"use client";

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#D9EBF9] to-white">
      <Header />

      <main className="flex-grow max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-8 mb-16">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold text-[#005EB8] mb-6">
              Land on the right Medicare plan
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl">
              Get an individualized recommendation from 5-7 "decision guide" questions helping you prioritize what is most important for your Medicare needs.
            </p>
            <Link href="/questionnaire">
              <Button size="lg" className="bg-[#005EB8] hover:bg-[#003F7A]">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative h-[300px] md:h-[400px] w-full max-w-xl">
            <Image
              src="/images/active-pickleball.webp"
              alt="Active seniors playing pickleball"
              fill
              priority
              className="object-cover rounded-lg shadow-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* Features Grid */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
            {/* Simplified Decisions Icon */}
            <symbol id="simplified-decisions" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 1 1-10 10A10 10 0 0 1 12 2zm0 2a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm1 4h-2v4h4v-2h-2z" />
            </symbol>
            {/* Quick & Easy Icon */}
            <symbol id="quick-easy" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 1 1-10 10A10 10 0 0 1 12 2zm0 2a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm-1 3h2v6h-2zm1 10a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 12 17z" />
            </symbol>
            {/* Stay On Course Icon */}
            <symbol id="stay-course" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 1 1-10 10A10 10 0 0 1 12 2zm0 2a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm0 2.5a5.5 5.5 0 1 1-5.5 5.5A5.5 5.5 0 0 1 12 4.5zm-.5 4h1v2h-1zm0 4h1v1h-1z" />
            </symbol>
          </svg>
          {[
            {
              icon: "simplified-decisions",
              title: "Simplified Decisions",
              description: "Using decades of Medicare plan knowledge, we have simplified the steps to the most essential decisions."
            },
            {
              icon: "quick-easy",
              title: "Quick & Easy",
              description: "With just a few simple clicks Medicare PlanIt will guide you to confidently choose your Medicare plan."
            },
            {
              icon: "stay-course",
              title: "Stay On Course",
              description: "We will keep you from being lost in Medicare space and help you save time, money and disappointment."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <svg className="w-16 h-16 mb-4 mx-auto text-[#005EB8]">
                <use href={`#${feature.icon}`} />
              </svg>
              <h3 className="text-xl font-semibold text-[#005EB8] mb-4 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="text-center bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-[#005EB8] mb-6">Ready to get started?</h2>
          <div className="text-lg text-gray-600 mb-8">
            <p className="mb-4">Answer a few easy questions and we will recommend which Medicare plan option may best fit your needs.</p>
            <p>It only takes a few minutes to complete - there are no wrong answers.</p>
          </div>
          <Link href="/questionnaire">
            <Button size="lg" className="bg-[#005EB8] hover:bg-[#003F7A]">Take the Quiz</Button>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}
