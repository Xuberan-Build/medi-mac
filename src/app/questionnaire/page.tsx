'use client'

import QuestionnaireForm from '@/components/QuestionnaireForm'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function QuestionnairePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#D9EBF9] to-white">
      <Header />

      <main className="flex-grow py-8">
        <QuestionnaireForm />
      </main>

      <Footer />
    </div>
  )
}
