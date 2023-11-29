import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import HeaderNav from './components/HeaderNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dream House',
  description: 'Dream House by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='max-w-4xl mx-auto p-0'>
          {children}
        </main>
      </body>
    </html>
  )
}
