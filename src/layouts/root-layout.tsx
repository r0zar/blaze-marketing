import React from 'react'
import Link from 'next/link'

// Root layout with dark theme applied

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark min-h-screen bg-background-dark text-white">
      <header className="navbar">
        <div className="container flex justify-between items-center w-full">
          <div className="logo-container">
            <Link href="/" className="flex items-center">
              <span className="ml-2 text-xl font-bold text-white">Signet</span>
            </Link>
          </div>
          <nav className="nav-links space-x-6">
            <Link href="#features" className="text-white hover:text-primary-light transition-colors">Features</Link>
            <Link href="#developers" className="text-white hover:text-primary-light transition-colors">Developers</Link>
            <Link href="#about" className="text-white hover:text-primary-light transition-colors">About</Link>
            <Link href="#demo" className="text-white hover:text-primary-light transition-colors">Demo</Link>
          </nav>
        </div>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}
