'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronRight, ToggleLeft, Home, User, Menu, X } from 'lucide-react'

export default function ShadcnDemo() {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)

  // İlk ziyaret kontrolü ve yönlendirme
  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem('siteVisited')
    
    if (hasVisitedBefore) {
      // Daha önce ziyaret edilmiş, direkt anasayfaya yönlendir
      router.push('/')
    } else {
      // İlk ziyaret, hello sayfasını göster
      setIsVisible(true)
      // Flag'i kaydet
      localStorage.setItem('siteVisited', 'true')
    }
  }, [router])

  // Hello sayfasının body arkaplanını #171717 yap
  useEffect(() => {
    if (isVisible) {
      // Dark mode ayarla
      document.documentElement.classList.add('dark')
      document.body.style.backgroundColor = '#171717'
      
      // Cleanup: Sayfa değiştiğinde arkaplanı resetle
      return () => {
        document.body.style.backgroundColor = ''
      }
    }
  }, [isVisible])

  // Anasayfaya geçiş fonksiyonu
  const goToHomepage = () => {
    router.push('/')
  }

  // Eğer daha önce ziyaret edilmişse hiçbir şey render etme
  if (!isVisible) {
    return null
  }

  return (
    <>
      {/* Hello Page with YumixArt Design System */}
      <main className="min-h-screen bg-white dark:bg-dark-bg hero-grid-bg">
        
        {/* Navigation - YumixArt Style */}
        <nav className="py-4 md:sticky md:top-0 z-[200] md:py-8">
          {/* Mobile: Simple centered logo */}
          <div className="md:hidden text-center pt-8">
            <div className="retro-logo retro-logo-sm">
              <span className="retro-logo-yumix">yumix</span><span className="retro-logo-art">art</span>
            </div>
          </div>
          
          {/* Desktop: Full navbar */}
          <div className="hidden md:block max-w-6xl mx-auto px-6">
            <div className="navbar-hibrit-glass rounded-full px-6 py-4 transform transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center justify-between">
                {/* Left Logo */}
                <div className="flex items-center">
                  <div className="retro-logo retro-logo-md">
                    <span className="retro-logo-yumix">yumix</span><span className="retro-logo-art">art</span>
                  </div>
                </div>
                
                {/* Center - Hello Badge */}
                <div className="flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
                  <div className="hibrit-btn-secondary bg-white dark:bg-gray-800 text-apple-gray-700 dark:text-gray-200 px-5 py-2 rounded-full text-sm font-medium shadow-md">
                    Hello Page
                  </div>
                </div>
                
                {/* Desktop Right Actions */}
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={goToHomepage}
                    className="hibrit-btn-primary px-5 py-2 rounded-full text-sm font-medium shadow-lg"
                  >
                    Enter Site
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section - YumixArt Style */}
        <section className="pt-8 pb-4 md:pt-20 md:pb-20 lg:pt-24 lg:pb-32 bg-white dark:bg-dark-bg relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 md:px-6 relative">
            <div className="text-center">
              {/* Welcome Badge */}
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="hibrit-btn-primary w-8 h-8 flex items-center justify-center text-sm font-bold rounded-full cursor-default">
                  👋
                </div>
                <span className="text-lg font-semibold bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 bg-clip-text text-transparent dark:dark-hibrit-text-gradient">
                  Welcome to YumixArt
                </span>
              </div>
              
              {/* Main Title */}
              <h1 className="apple-hero-text text-apple-gray-900 dark:text-gray-100 mb-8">
                <div>Premium Mobile</div>
                <div>Wallpapers for <span className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 bg-clip-text text-transparent dark:dark-hibrit-text-gradient">Perfect Style</span></div>
              </h1>

              {/* Description */}
              <p className="apple-body-text text-apple-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
                Discover our carefully curated collection of premium wallpapers designed specifically for mobile devices. Experience the perfect blend of style and quality.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <button 
                  onClick={goToHomepage}
                  className="hibrit-btn-primary px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Explore Collection <ChevronRight className="inline w-5 h-5 ml-1" />
                </button>
                <button 
                  onClick={goToHomepage}
                  className="hibrit-btn-secondary bg-white dark:bg-gray-800 text-apple-gray-700 dark:text-gray-200 px-8 py-4 rounded-full text-lg font-medium shadow-md hover:shadow-lg"
                >
                  View Gallery
                </button>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="hibrit-btn-primary w-16 h-16 flex items-center justify-center text-2xl rounded-2xl mb-4 mx-auto">
                    📱
                  </div>
                  <h3 className="apple-large-text text-apple-gray-900 dark:text-gray-100 mb-2 text-xl font-bold">
                    Mobile Optimized
                  </h3>
                  <p className="text-apple-gray-600 dark:text-gray-400">
                    Perfect resolution and aspect ratios for all mobile devices
                  </p>
                </div>

                <div className="text-center">
                  <div className="hibrit-btn-primary w-16 h-16 flex items-center justify-center text-2xl rounded-2xl mb-4 mx-auto">
                    ✨
                  </div>
                  <h3 className="apple-large-text text-apple-gray-900 dark:text-gray-100 mb-2 text-xl font-bold">
                    Premium Quality
                  </h3>
                  <p className="text-apple-gray-600 dark:text-gray-400">
                    High-resolution wallpapers with stunning visual details
                  </p>
                </div>

                <div className="text-center">
                  <div className="hibrit-btn-primary w-16 h-16 flex items-center justify-center text-2xl rounded-2xl mb-4 mx-auto">
                    🎨
                  </div>
                  <h3 className="apple-large-text text-apple-gray-900 dark:text-gray-100 mb-2 text-xl font-bold">
                    Curated Style
                  </h3>
                  <p className="text-apple-gray-600 dark:text-gray-400">
                    Carefully selected designs from top artists worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white dark:bg-dark-bg py-8 border-t border-apple-gray-200 dark:border-gray-700">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="retro-logo retro-logo-lg mb-4">
              <span className="retro-logo-yumix">yumix</span><span className="retro-logo-art">art</span>
            </div>
            <p className="text-apple-gray-500 dark:text-gray-400 mb-6">
              © 2024 YumixArt. All rights reserved.
            </p>
            <button 
              onClick={goToHomepage}
              className="hibrit-btn-primary px-6 py-3 rounded-full text-base font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Continue to Site <ChevronRight className="inline w-4 h-4 ml-1" />
            </button>
          </div>
        </footer>
      </main>

      {/* Mobile Floating Action Bar - YumixArt Style */}
      <div className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[100] animate-slide-up">
        <div className="inline-flex items-center justify-center overflow-hidden p-3 rounded-full floating-hibrit-glass gap-1 transition-all duration-300 hover:shadow-[0_15px_50px_rgba(0,0,0,0.18)]">
          <button 
            onClick={goToHomepage}
            className="flex items-center justify-center transition-colors hover:bg-white/20"
          >
            <div className="group relative flex size-9 items-center justify-center rounded-full p-1.5 hover:bg-white/15">
              <Home className="h-full w-full text-apple-gray-900 dark:text-white" />
            </div>
          </button>
          <button className="flex items-center justify-center transition-colors hover:bg-white/20">
            <div className="group relative flex size-9 items-center justify-center rounded-full p-1.5 hover:bg-white/15">
              <User className="h-full w-full text-apple-gray-900 dark:text-white" />
            </div>
          </button>
          <button
            className="flex items-center justify-center transition-colors hover:bg-white/20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="group relative flex size-9 items-center justify-center rounded-full p-1.5 hover:bg-white/15">
              <div className="relative">
                <Menu
                  className={`h-full w-full text-apple-gray-900 dark:text-white transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                  }`}
                />
                <X
                  className={`absolute inset-0 h-full w-full text-apple-gray-900 dark:text-white transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-75'
                  }`}
                />
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Popup */}
      {isMobileMenuOpen && (
        <>
          <div className="fixed inset-0 z-[80] md:hidden">
            <div
              className="absolute inset-0 bg-black/10 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </div>
          
          <div className="fixed inset-0 z-[90] md:hidden pointer-events-none">
            <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 pointer-events-auto">
              <div className="floating-hibrit-glass rounded-2xl animate-slide-up-menu p-5 min-w-[280px] transition-all duration-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)]">
                <div className="space-y-1 mb-4">
                  <button 
                    onClick={goToHomepage}
                    className="block w-full text-center text-apple-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-600/20 hover:text-apple-gray-900 dark:hover:text-gray-100 transition-all duration-200 text-sm font-medium py-3 px-4 rounded-xl"
                  >
                    Home
                  </button>
                  <button 
                    onClick={goToHomepage}
                    className="block w-full text-center text-apple-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-600/20 hover:text-apple-gray-900 dark:hover:text-gray-100 transition-all duration-200 text-sm font-medium py-3 px-4 rounded-xl"
                  >
                    Collections
                  </button>
                  <button 
                    onClick={goToHomepage}
                    className="block w-full text-center text-apple-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-600/20 hover:text-apple-gray-900 dark:hover:text-gray-100 transition-all duration-200 text-sm font-medium py-3 px-4 rounded-xl"
                  >
                    Wallpapers
                  </button>
                </div>
                
                <div className="border-t border-apple-gray-200/30 my-4" />
                
                <div className="flex flex-col items-center space-y-3">
                  <button 
                    onClick={goToHomepage}
                    className="hibrit-btn-primary px-5 py-2.5 rounded-full text-sm font-medium shadow-lg"
                  >
                    Enter YumixArt
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}