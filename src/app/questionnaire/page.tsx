'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const steps = [
  { id: 'welcome', title: 'Welcome' },
  { id: 'doctor-choice', title: 'Doctor Choice' },
  { id: 'managed-care', title: 'Managed Care' }
]

export default function QuestionnairePage() {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      {/* Back to Home Link */}
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center text-[#005EB8] hover:text-[#003F7A] transition-colors"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back to Home
        </Link>
      </div>

      <div className="mb-8">
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-[#005EB8] rounded-full transition-all"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          />
        </div>
      </div>

      <Card className="p-6">
        <h1 className="text-2xl font-bold text-[#005EB8] mb-6">
          {steps[currentStep].title}
        </h1>

        <div className="flex justify-between mt-8">
          <Button
            variant="secondary"
            onClick={() => setCurrentStep(s => Math.max(0, s - 1))}
            disabled={currentStep === 0}
          >
            Previous
          </Button>
          <Button
            onClick={() => setCurrentStep(s => Math.min(steps.length - 1, s + 1))}
            disabled={currentStep === steps.length - 1}
          >
            Next
          </Button>
        </div>
      </Card>

      {/* Optional: Exit confirmation for mobile */}
      <div className="mt-6 text-center sm:hidden">
        <Link href="/">
          <Button variant="secondary" className="w-full">
            Exit Questionnaire
          </Button>
        </Link>
      </div>
    </main>
  )
}
