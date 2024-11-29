import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Medicare PlanIt',
  description: 'Land on the right Medicare plan with our guided questionnaire.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-b from-[#D9EBF9] to-white`}>
        {children}
      </body>
    </html>
  )
}
