import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#D9EBF9] to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#005EB8] mb-6">
            Land on the right Medicare plan
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Get an individualized recommendation from 5-7 "decision guide" questions helping you
            prioritize what's most important for your Medicare needs.
          </p>

          <div className="space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/questionnaire">
              <Button size="lg">
                Get Started
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="secondary" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            {
              title: "Simple Process",
              description: "Answer just a few questions about your Medicare preferences"
            },
            {
              title: "Expert Guidance",
              description: "Get personalized recommendations based on decades of experience"
            },
            {
              title: "Free Service",
              description: "No cost or obligation to use our Medicare plan finder tool"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-[#005EB8] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
