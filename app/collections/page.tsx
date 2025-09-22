'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Star, Download, Heart, Users, Award, Crown, ArrowRight } from 'lucide-react';

export default function CollectionsPage() {
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

  // Premium Collections Data
  const collections = [
    {
      id: 1,
      name: 'Retro Synthwave Pack',
      description: 'A curated collection of 12 premium synthwave wallpapers with neon aesthetics and 80s vibes',
      price: 12.99,
      originalPrice: 18.99,
      wallpaperCount: 12,
      downloads: 3200,
      likes: 890,
      featured: true,
      gradient: 'from-purple-600 via-pink-500 to-orange-400',
      previewImages: [
        'https://skiper-ui.com/images/x.com/3.jpeg',
        'https://skiper-ui.com/images/x.com/4.jpeg',
        'https://skiper-ui.com/images/x.com/5.jpeg',
        'https://skiper-ui.com/images/x.com/6.jpeg'
      ],
      tags: ['synthwave', 'neon', '80s', 'retro'],
      exclusiveFeatures: ['4K Resolution', 'OLED Optimized', 'Exclusive Designs']
    },
    {
      id: 2,
      name: 'Zen Nature Ultimate',
      description: 'Premium nature wallpapers shot in exclusive locations with professional photography',
      price: 15.99,
      originalPrice: 22.99,
      wallpaperCount: 15,
      downloads: 2800,
      likes: 1200,
      featured: true,
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      previewImages: [
        'https://skiper-ui.com/images/x.com/13.jpeg',
        'https://skiper-ui.com/images/x.com/32.jpeg',
        'https://skiper-ui.com/images/x.com/20.jpeg',
        'https://skiper-ui.com/images/x.com/21.jpeg'
      ],
      tags: ['nature', 'photography', 'zen', 'premium'],
      exclusiveFeatures: ['Professional Photography', '6K Resolution', 'Raw Unfiltered']
    },
    {
      id: 3,
      name: 'Abstract Minimalism Pro',
      description: 'Sophisticated abstract designs perfect for modern aesthetics and clean interfaces',
      price: 9.99,
      originalPrice: 14.99,
      wallpaperCount: 10,
      downloads: 4100,
      likes: 756,
      featured: false,
      gradient: 'from-indigo-600 via-purple-600 to-pink-500',
      previewImages: [
        'https://skiper-ui.com/images/x.com/19.jpeg',
        'https://skiper-ui.com/images/x.com/1.jpeg',
        'https://skiper-ui.com/images/x.com/2.jpeg',
        'https://skiper-ui.com/images/x.com/3.jpeg'
      ],
      tags: ['abstract', 'minimalism', 'modern', 'clean'],
      exclusiveFeatures: ['Vector Based', 'Scalable', 'Perfect Geometry']
    },
    {
      id: 4,
      name: 'Dark Mode Elite',
      description: 'Premium dark wallpapers optimized for OLED displays with deep blacks and subtle accents',
      price: 11.99,
      originalPrice: 16.99,
      wallpaperCount: 14,
      downloads: 5200,
      likes: 1100,
      featured: true,
      gradient: 'from-gray-800 via-gray-700 to-gray-900',
      previewImages: [
        'https://skiper-ui.com/images/x.com/4.jpeg',
        'https://skiper-ui.com/images/x.com/5.jpeg',
        'https://skiper-ui.com/images/x.com/6.jpeg',
        'https://skiper-ui.com/images/x.com/13.jpeg'
      ],
      tags: ['dark', 'oled', 'premium', 'minimal'],
      exclusiveFeatures: ['OLED Optimized', 'True Black', 'Battery Saving']
    },
    {
      id: 5,
      name: 'Cosmic Dreams',
      description: 'Stunning space and cosmic wallpapers with nebulas, galaxies, and stellar phenomena',
      price: 13.99,
      originalPrice: 19.99,
      wallpaperCount: 16,
      downloads: 1800,
      likes: 920,
      featured: false,
      gradient: 'from-blue-900 via-indigo-800 to-purple-900',
      previewImages: [
        'https://skiper-ui.com/images/x.com/32.jpeg',
        'https://skiper-ui.com/images/x.com/20.jpeg',
        'https://skiper-ui.com/images/x.com/21.jpeg',
        'https://skiper-ui.com/images/x.com/19.jpeg'
      ],
      tags: ['space', 'cosmic', 'nebula', 'galaxy'],
      exclusiveFeatures: ['NASA Imagery', 'High Detail', 'Scientific Accuracy']
    },
    {
      id: 6,
      name: 'Luxury Gradients',
      description: 'Premium gradient collections with gold, silver, and exclusive metallic finishes',
      price: 8.99,
      originalPrice: 12.99,
      wallpaperCount: 8,
      downloads: 2600,
      likes: 654,
      featured: false,
      gradient: 'from-yellow-400 via-orange-500 to-red-500',
      previewImages: [
        'https://skiper-ui.com/images/x.com/1.jpeg',
        'https://skiper-ui.com/images/x.com/2.jpeg',
        'https://skiper-ui.com/images/x.com/3.jpeg',
        'https://skiper-ui.com/images/x.com/4.jpeg'
      ],
      tags: ['gradient', 'luxury', 'metallic', 'gold'],
      exclusiveFeatures: ['Metallic Effects', 'Luxury Finish', '3D Rendered']
    }
  ];

  const featuredCollections = collections.filter(c => c.featured);
  const regularCollections = collections.filter(c => !c.featured);

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
              <Link href="/categories" className="text-apple-gray-700 hover:text-apple-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors text-base font-medium">Categories</Link>
              <Link href="/collections" className="text-apple-gray-900 hover:text-apple-gray-700 dark:text-gray-100 dark:hover:text-gray-300 transition-colors text-base font-medium">Collections</Link>
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
          <div className="flex items-center justify-center gap-3 mb-6">
            <Crown className="w-8 h-8 text-yellow-500" />
            <span className="text-lg font-semibold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Premium Collections
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-apple-gray-900 dark:text-gray-100 mb-6">
            Curated <span className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 bg-clip-text text-transparent dark:dark-hibrit-text-gradient">Collections</span>
          </h1>
          <p className="text-lg lg:text-xl text-apple-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Handpicked premium wallpaper collections crafted by professional designers. Each pack includes exclusive content you won't find anywhere else.
          </p>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-apple-gray-900 dark:text-gray-100">
              Featured Collections
            </h2>
            <div className="flex items-center gap-2 text-sm text-apple-gray-600 dark:text-gray-400">
              <Award className="w-4 h-4 fill-current text-yellow-500" />
              <span>Editor's Choice</span>
            </div>
          </div>

          {/* Featured Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
            {featuredCollections.map((collection) => (
              <div key={collection.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.02]">
                  {/* Collection Preview */}
                  <div className={`relative bg-gradient-to-br ${collection.gradient} p-8 lg:p-12`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-300" />
                    
                    {/* Featured Badge */}
                    <div className="absolute top-6 right-6 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-2 rounded-full flex items-center gap-1">
                      <Crown className="w-3 h-3" />
                      FEATURED
                    </div>
                    
                    {/* Collection Preview Grid */}
                    <div className="relative z-10 grid grid-cols-2 gap-3 mb-6">
                      {collection.previewImages.slice(0, 4).map((image, index) => (
                        <div key={index} className="aspect-[9/16] rounded-xl overflow-hidden">
                          <img
                            src={image}
                            alt={`Preview ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    
                    {/* Hover Arrow */}
                    <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <ArrowRight className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Collection Info */}
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-b-3xl">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-2xl text-apple-gray-900 dark:text-gray-100 mb-2">
                          {collection.name}
                        </h3>
                        <p className="text-apple-gray-600 dark:text-gray-400 text-base leading-relaxed">
                          {collection.description}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {collection.exclusiveFeatures.map((feature) => (
                        <span key={feature} className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full">
                          ✓ {feature}
                        </span>
                      ))}
                    </div>

                    {/* Stats & Price */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                          <Download className="w-4 h-4 text-apple-gray-500 dark:text-gray-500" />
                          <span className="text-apple-gray-600 dark:text-gray-400">{collection.downloads}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Heart className="w-4 h-4 text-red-500" />
                          <span className="text-apple-gray-600 dark:text-gray-400">{collection.likes}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-apple-gray-500 dark:text-gray-500" />
                          <span className="text-apple-gray-600 dark:text-gray-400">{collection.wallpaperCount} wallpapers</span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-apple-gray-500 dark:text-gray-500 line-through">
                            ${collection.originalPrice}
                          </span>
                          <span className="text-2xl font-bold text-green-500">
                            ${collection.price}
                          </span>
                        </div>
                        <div className="text-xs text-green-600 dark:text-green-400">
                          Save ${(collection.originalPrice - collection.price).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* All Collections */}
          <div className="mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-apple-gray-900 dark:text-gray-100 mb-8">
              All Premium Collections
            </h2>
          </div>

          {/* Regular Collections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {regularCollections.map((collection) => (
              <div key={collection.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]">
                  {/* Collection Preview */}
                  <div className={`relative bg-gradient-to-br ${collection.gradient} p-6 aspect-[4/5]`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                    
                    {/* Preview Grid - 2x2 mini grid */}
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <div className="grid grid-cols-2 gap-2 w-full max-w-[120px]">
                        {collection.previewImages.slice(0, 4).map((image, index) => (
                          <div key={index} className="aspect-[9/16] rounded-lg overflow-hidden">
                            <img
                              src={image}
                              alt={`Preview ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Collection Count */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-white text-sm font-medium opacity-90 text-center">
                        {collection.wallpaperCount} Premium Wallpapers
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Collection Info */}
                <div className="pt-4">
                  <h3 className="font-bold text-lg text-apple-gray-900 dark:text-gray-100 mb-2 group-hover:text-green-500 transition-colors">
                    {collection.name}
                  </h3>
                  <p className="text-sm text-apple-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                    {collection.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-apple-gray-500 dark:text-gray-500">
                      <span>{collection.downloads} downloads</span>
                      <span>{collection.likes} likes</span>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-apple-gray-500 dark:text-gray-500 line-through">
                          ${collection.originalPrice}
                        </span>
                        <span className="text-lg font-bold text-green-500">
                          ${collection.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer CTA */}
      <section className="py-16 lg:py-24 bg-white dark:bg-dark-bg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="relative overflow-hidden rounded-3xl navbar-hibrit-glass py-16 px-8">
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                LIMITED TIME OFFER
              </div>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 mt-8">
              Get All Premium Collections
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Access to all current and future premium collections with our lifetime membership. Save over $200 compared to individual purchases.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl text-apple-gray-500 dark:text-gray-500 line-through">$299.99</span>
                  <span className="text-4xl font-bold text-green-500">$149.99</span>
                </div>
                <div className="text-sm text-green-600 dark:text-green-400">Save $150 • Lifetime Access</div>
              </div>
            </div>
            
            <button className="mt-8 hibrit-btn-primary px-8 py-4 rounded-full text-lg font-medium shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
              Get Lifetime Access
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
