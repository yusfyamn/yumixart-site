'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Heart, Download, Star, Eye, Share2, Filter } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

export default function NinetiesStylePage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('all');

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

  // Sample wallpaper data - Bu gerçek projede API'dan gelecek
  const wallpapers = [
    {
      id: 1,
      title: 'Neon Geometric',
      price: 2.99,
      isPremium: false,
      downloads: 1200,
      likes: 89,
      image: 'https://skiper-ui.com/images/x.com/3.jpeg',
      tags: ['geometric', 'neon']
    },
    {
      id: 2,
      title: 'Retro Wave',
      price: 3.99,
      isPremium: true,
      downloads: 800,
      likes: 156,
      image: 'https://skiper-ui.com/images/x.com/4.jpeg',
      tags: ['wave', 'purple']
    },
    {
      id: 3,
      title: 'Pixel Art Grid',
      price: 2.99,
      isPremium: false,
      downloads: 2100,
      likes: 234,
      image: 'https://skiper-ui.com/images/x.com/5.jpeg',
      tags: ['pixel', 'grid']
    },
    {
      id: 4,
      title: 'Vaporwave Sunset',
      price: 4.99,
      isPremium: true,
      downloads: 950,
      likes: 312,
      image: 'https://skiper-ui.com/images/x.com/6.jpeg',
      tags: ['vaporwave', 'sunset']
    },
    {
      id: 5,
      title: '90s Memphis',
      price: 2.99,
      isPremium: false,
      downloads: 1800,
      likes: 145,
      image: 'https://skiper-ui.com/images/x.com/13.jpeg',
      tags: ['memphis', 'pattern']
    },
    {
      id: 6,
      title: 'Cyber Punk',
      price: 3.99,
      isPremium: true,
      downloads: 1400,
      likes: 201,
      image: 'https://skiper-ui.com/images/x.com/32.jpeg',
      tags: ['cyber', 'punk']
    },
    {
      id: 7,
      title: 'Retro Gradient',
      price: 2.99,
      isPremium: false,
      downloads: 1600,
      likes: 178,
      image: 'https://skiper-ui.com/images/x.com/20.jpeg',
      tags: ['gradient', 'retro']
    },
    {
      id: 8,
      title: 'Synthwave',
      price: 4.99,
      isPremium: true,
      downloads: 1100,
      likes: 267,
      image: 'https://skiper-ui.com/images/x.com/21.jpeg',
      tags: ['synthwave', 'neon']
    }
  ];

  const filters = [
    { id: 'all', name: 'All', count: wallpapers.length },
    { id: 'premium', name: 'Premium', count: wallpapers.filter(w => w.isPremium).length },
    { id: 'popular', name: 'Popular', count: wallpapers.filter(w => w.downloads > 1500).length },
    { id: 'recent', name: 'Recent', count: 12 }
  ];

  const filteredWallpapers = wallpapers.filter(wallpaper => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'premium') return wallpaper.isPremium;
    if (selectedFilter === 'popular') return wallpaper.downloads > 1500;
    if (selectedFilter === 'recent') return true; // Simulated
    return true;
  });

  return (
    <main className="min-h-screen bg-white dark:bg-dark-bg hero-grid-bg">
      {/* Navigation */}
      <nav className="py-4 lg:py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Back Button + Logo */}
            <div className="flex items-center gap-4">
              <Link 
                href="/categories"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-200"
              >
                <ArrowLeft className="w-5 h-5 text-apple-gray-900 dark:text-gray-100" />
              </Link>
              
              <Link href="/" className="retro-logo retro-logo-md">
                <span className="retro-logo-yumix">yumix</span><span className="retro-logo-art">art</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/categories" className="text-apple-gray-700 hover:text-apple-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors text-base font-medium">Categories</Link>
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

      {/* Category Header */}
      <section className="pt-8 pb-12 lg:pt-16 lg:pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-apple-gray-600 dark:text-gray-400 mb-6">
            <Link href="/categories" className="hover:text-apple-gray-900 dark:hover:text-gray-200 transition-colors">Categories</Link>
            <span>/</span>
            <span className="text-apple-gray-900 dark:text-gray-200 font-medium">90s Style</span>
          </div>

          {/* Header Content */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
            {/* Category Icon */}
            <div className="relative">
              <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-300 rounded-3xl flex items-center justify-center shadow-xl">
                <div className="text-white font-bold text-3xl lg:text-4xl">90s</div>
              </div>
              <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-2 shadow-lg">
                <Star className="w-4 h-4 text-white fill-current" />
              </div>
            </div>

            {/* Category Info */}
            <div className="flex-1">
              <h1 className="text-4xl lg:text-6xl font-bold text-apple-gray-900 dark:text-gray-100 mb-4">
                90s <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">Style</span>
              </h1>
              <p className="text-lg lg:text-xl text-apple-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
                Dive into the nostalgic world of 90s aesthetics with retro vibes, neon colors, and geometric patterns. Perfect for those who love vintage style.
              </p>
              
              {/* Stats */}
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-apple-gray-500 dark:text-gray-500" />
                  <span className="text-apple-gray-600 dark:text-gray-400">24 wallpapers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-apple-gray-500 dark:text-gray-500" />
                  <span className="text-apple-gray-600 dark:text-gray-400">12.5K downloads</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-red-500" />
                  <span className="text-apple-gray-600 dark:text-gray-400">2.1K likes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8 lg:pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl lg:text-2xl font-bold text-apple-gray-900 dark:text-gray-100">
              Browse Collection
            </h2>
            
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-apple-gray-500 dark:text-gray-500" />
              <span className="text-sm text-apple-gray-600 dark:text-gray-400">Filter by:</span>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="w-full overflow-hidden">
            <Swiper
              slidesPerView="auto"
              spaceBetween={12}
              freeMode={true}
              scrollbar={{ hide: true }}
              modules={[FreeMode, Scrollbar]}
              className="pb-2"
            >
              {filters.map((filter) => (
                <SwiperSlide key={filter.id} className="!w-auto">
                  <button
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                      selectedFilter === filter.id
                        ? 'hibrit-btn-primary shadow-lg'
                        : 'bg-white/50 dark:bg-gray-800/50 text-apple-gray-700 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-gray-700/50 backdrop-blur-sm'
                    }`}
                  >
                    {filter.name} ({filter.count})
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Wallpapers Grid */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {filteredWallpapers.map((wallpaper) => (
              <div key={wallpaper.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 aspect-[9/16] transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]">
                  {/* Wallpaper Image */}
                  <img
                    src={wallpaper.image}
                    alt={wallpaper.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Premium Badge */}
                  {wallpaper.isPremium && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      PREMIUM
                    </div>
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 flex items-center gap-2">
                      <button className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors">
                        <Eye className="w-5 h-5 text-white" />
                      </button>
                      <button className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors">
                        <Heart className="w-5 h-5 text-white" />
                      </button>
                      <button className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors">
                        <Share2 className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Bottom Stats */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="flex items-center justify-between text-white text-xs">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Download className="w-3 h-3" />
                          <span>{wallpaper.downloads}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          <span>{wallpaper.likes}</span>
                        </div>
                      </div>
                      <div className="font-bold">
                        ${wallpaper.price}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Wallpaper Info */}
                <div className="pt-3">
                  <h3 className="font-semibold text-apple-gray-900 dark:text-gray-100 text-sm lg:text-base mb-1 group-hover:text-purple-500 transition-colors">
                    {wallpaper.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {wallpaper.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs text-apple-gray-500 dark:text-gray-500 bg-apple-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm font-bold text-green-500">
                      ${wallpaper.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-16 lg:py-24 bg-white dark:bg-dark-bg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-apple-gray-900 dark:text-gray-100 mb-4">
              You Might Also Like
            </h2>
            <p className="text-lg text-apple-gray-600 dark:text-gray-300">
              Explore similar categories that match the 90s aesthetic
            </p>
          </div>

          {/* Related Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <Link href="/categories/abstract" className="group block">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 aspect-[4/5] transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white font-bold text-xl lg:text-2xl">∾</div>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-white text-xs font-medium opacity-90">32 wallpapers</div>
                </div>
              </div>
              <div className="pt-3">
                <h3 className="font-semibold text-apple-gray-900 dark:text-gray-100 text-sm lg:text-base group-hover:text-indigo-500 transition-colors">
                  Abstract
                </h3>
              </div>
            </Link>

            <Link href="/categories/memoji" className="group block">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 aspect-[4/5] transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white font-bold text-xl lg:text-2xl">🎭</div>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-white text-xs font-medium opacity-90">15 wallpapers</div>
                </div>
              </div>
              <div className="pt-3">
                <h3 className="font-semibold text-apple-gray-900 dark:text-gray-100 text-sm lg:text-base group-hover:text-orange-500 transition-colors">
                  Memoji
                </h3>
              </div>
            </Link>

            <Link href="/categories/dark-mode" className="group block">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black aspect-[4/5] transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/15 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white font-bold text-xl lg:text-2xl">●</div>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-white text-xs font-medium opacity-90">19 wallpapers</div>
                </div>
              </div>
              <div className="pt-3">
                <h3 className="font-semibold text-apple-gray-900 dark:text-gray-100 text-sm lg:text-base group-hover:text-gray-500 transition-colors">
                  Dark Mode
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
