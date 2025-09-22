'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import Folder from '../../components/Folder';

export default function CategoriesPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Dark mode'u localStorage'dan al
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
      setIsDarkMode(savedTheme === 'true');
    }
  }, []);

  useEffect(() => {
    // Dark mode state'ini DOM'a uygula
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#171717';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#ffffff';
    }
  }, [isDarkMode]);

  const categories = [
    {
      id: '90s-style',
      name: '90s Style',
      description: 'Retro vibes with neon colors and geometric shapes',
      count: 24,
      color: '#FF6B8A',
      images: [
        'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=600&fit=crop'
      ],
      featured: true
    },
    {
      id: 'nature',
      name: 'Nature',
      description: 'Pure & fresh nature wallpapers for peace',
      count: 18,
      color: '#4ADE80',
      images: [
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop'
      ],
      featured: true
    },
    {
      id: 'abstract',
      name: 'Abstract',
      description: 'Creative art and modern abstract designs',
      count: 32,
      color: '#9333EA',
      images: [
        'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1549317336-206569e8475c?w=400&h=600&fit=crop'
      ],
      featured: false
    },
    {
      id: 'memoji',
      name: 'Memoji',
      description: 'Fun & cool memoji style wallpapers',
      count: 15,
      color: '#F59E0B',
      images: [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&h=600&fit=crop'
      ],
      featured: false
    },
    {
      id: 'minimalist',
      name: 'Minimalist',
      description: 'Clean design for modern aesthetic',
      count: 21,
      color: '#6B7280',
      images: [
        'https://images.unsplash.com/photo-1557683304-673a23048d34?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1615819297061-13b6a3c2c2a1?w=400&h=600&fit=crop'
      ],
      featured: false
    },
    {
      id: 'dark-mode',
      name: 'Dark Mode',
      description: 'Perfect for night mode users',
      count: 19,
      color: '#1F2937',
      images: [
        'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=600&fit=crop'
      ],
      featured: true
    }
  ];

  const featuredCategories = categories.filter(cat => cat.featured);
  const regularCategories = categories.filter(cat => !cat.featured);

  return (
    <main className="min-h-screen bg-white dark:bg-dark-bg hero-grid-bg">
      {/* Navigation - Simple version for sub pages */}
      <nav className="py-4 lg:py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="retro-logo retro-logo-md">
              <span className="retro-logo-yumix">yumix</span><span className="retro-logo-art">art</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/categories" className="text-apple-gray-900 hover:text-apple-gray-700 dark:text-gray-100 dark:hover:text-gray-300 transition-colors text-base font-medium">Categories</Link>
              <Link href="/collections" className="text-apple-gray-700 hover:text-apple-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors text-base font-medium">Collections</Link>
              <Link href="#" className="text-apple-gray-700 hover:text-apple-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors text-base font-medium">Subscription</Link>
              <Link href="#" className="text-apple-gray-700 hover:text-apple-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors text-base font-medium">About</Link>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button className="hibrit-btn-secondary bg-white dark:bg-gray-800 text-apple-gray-700 dark:text-gray-200 px-5 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg">
                Login
              </button>
              <button className="hibrit-btn-primary px-5 py-2 rounded-full text-sm font-medium shadow-lg">
                Explore
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="pt-8 pb-12 lg:pt-16 lg:pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-apple-gray-900 dark:text-gray-100 mb-6">
            Browse <span className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 bg-clip-text text-transparent dark:dark-hibrit-text-gradient">Categories</span>
          </h1>
          <p className="text-lg lg:text-xl text-apple-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover premium mobile wallpapers organized by style. Find the perfect match for your aesthetic.
          </p>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-apple-gray-900 dark:text-gray-100">
              Featured Categories
            </h2>
            <div className="flex items-center gap-2 text-sm text-apple-gray-600 dark:text-gray-400">
              <Star className="w-4 h-4 fill-current text-yellow-500" />
              <span>Most Popular</span>
            </div>
          </div>

          {/* Featured Folders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
            {featuredCategories.map((category) => (
              <div key={category.id} className="flex flex-col items-center">
                {/* Interactive Folder */}
                <div className="mb-6 transform transition-all duration-300 hover:scale-110">
                  <Folder
                    color={category.color}
                    size={2}
                    items={category.images.map((img, index) => (
                      <div
                        key={index}
                        className="w-full h-full rounded-lg overflow-hidden"
                        style={{
                          backgroundImage: `url(${img})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      />
                    ))}
                    className="cursor-pointer"
                  />
                </div>
                
                {/* Category Info */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h3 className="font-bold text-xl text-apple-gray-900 dark:text-gray-100">
                      {category.name}
                    </h3>
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  </div>
                  
                  <p className="text-sm text-apple-gray-600 dark:text-gray-400 mb-3 max-w-xs">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-sm font-medium text-apple-gray-500 dark:text-gray-500">
                      {category.count} wallpapers
                    </span>
                  </div>
                  
                  <Link
                    href={`/categories/${category.id}`}
                    className="inline-flex items-center gap-2 hibrit-btn-primary px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    Explore Collection
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* All Categories */}
          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-apple-gray-900 dark:text-gray-100 mb-8">
              All Categories
            </h2>
          </div>

          {/* Regular Categories Folders Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-10">
            {regularCategories.map((category) => (
              <div key={category.id} className="flex flex-col items-center">
                {/* Interactive Folder */}
                <div className="mb-4 transform transition-all duration-300 hover:scale-110">
                  <Folder
                    color={category.color}
                    size={1.5}
                    items={category.images.map((img, index) => (
                      <div
                        key={index}
                        className="w-full h-full rounded-lg overflow-hidden"
                        style={{
                          backgroundImage: `url(${img})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      />
                    ))}
                    className="cursor-pointer"
                  />
                </div>
                
                {/* Category Info */}
                <div className="text-center">
                  <h3 className="font-semibold text-apple-gray-900 dark:text-gray-100 text-sm lg:text-base mb-1 hover:text-green-500 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-apple-gray-500 dark:text-gray-500 mb-2">
                    {category.count} wallpapers
                  </p>
                  <Link
                    href={`/categories/${category.id}`}
                    className="text-xs text-green-500 hover:text-green-600 font-medium transition-colors"
                  >
                    View →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-dark-bg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="relative overflow-hidden rounded-3xl navbar-hibrit-glass py-16 px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Check out our premium collections or join our community to request custom wallpapers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/collections"
                className="hibrit-btn-primary px-6 py-3 lg:px-8 lg:py-4 rounded-full text-base lg:text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Browse Collections
              </Link>
              <button className="hibrit-btn-secondary bg-white dark:bg-gray-800 text-apple-gray-700 dark:text-gray-200 px-6 py-3 lg:px-8 lg:py-4 rounded-full text-base lg:text-lg font-medium shadow-md hover:shadow-lg">
                Join Discord
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
