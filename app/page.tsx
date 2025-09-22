'use client';

import { Heart, Home, Menu, ShoppingCart, ToggleLeft, User, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Autoplay, EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Folder from '../components/Folder';
import GradualBlur from '../components/GradualBlur';

export default function HomePage() {
  // 🚀 Dark mode'u flash olmadan initialize et
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Server-side'da default true döndür
    if (typeof window === 'undefined') return true;
    
    // Client-side'da localStorage'dan oku
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? saved === 'true' : true;
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFullScreenMenuOpen, setIsFullScreenMenuOpen] = useState(false);
  
  // 🚀 Progressive Loading - Viewport Management
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);
  const [isTableVisible, setIsTableVisible] = useState(false);
  const [isCommunityVisible, setIsCommunityVisible] = useState(false);
  
  // Section refs for Intersection Observer
  const heroRef = useRef(null);
  const categoriesRef = useRef(null);
  const tableRef = useRef(null);
  const communityRef = useRef(null);

  // 🚀 Dark mode'u hemen uygula - flash önlemek için
  useEffect(() => {
    // Initial dark mode class'ını ekle
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#171717';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#ffffff';
    }
  }, []);

  // 🎯 Intersection Observer - Modern Progressive Loading
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -10% 0px', // Trigger when 10% visible
      threshold: [0, 0.25, 0.5, 0.75, 1]
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { target, isIntersecting, intersectionRatio } = entry;
        
        // Hero Section - Swiper Control
        if (target === heroRef.current) {
          setIsHeroVisible(isIntersecting && intersectionRatio > 0.25);
        }
        
        // Categories Section - Folder Rendering Control
        if (target === categoriesRef.current) {
          setIsCategoriesVisible(isIntersecting && intersectionRatio > 0.1);
        }
        
        // Table Section - Progressive Loading
        if (target === tableRef.current) {
          setIsTableVisible(isIntersecting && intersectionRatio > 0.1);
        }
        
        // Community Section - Progressive Loading
        if (target === communityRef.current) {
          setIsCommunityVisible(isIntersecting && intersectionRatio > 0.1);
        }
      });
    }, observerOptions);

    // Start observing sections
    if (heroRef.current) observer.observe(heroRef.current);
    if (categoriesRef.current) observer.observe(categoriesRef.current);
    if (tableRef.current) observer.observe(tableRef.current);
    if (communityRef.current) observer.observe(communityRef.current);

    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    // 🎯 Dark mode değişikliklerini DOM'a uygula ve localStorage'a kaydet
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#171717';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#ffffff';
    }
    
    // LocalStorage'a kaydet
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', isDarkMode.toString());
    }
  }, [isDarkMode]);

  // 🚀 Memoized Theme Toggle
  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => !prev);
  }, []);

  // 🎯 Memoized Menu Handlers
  const handleMobileMenuToggle = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const handleFullScreenMenuToggle = useCallback(() => {
    setIsFullScreenMenuOpen(prev => !prev);
  }, []);

  const handleFullScreenMenuClose = useCallback(() => {
    setIsFullScreenMenuOpen(false);
  }, []);

  // 🚀 Memoized Icon Paths (avoid recreation on every render)
  const heroIcons = useMemo(() => ({
    icon1Dark: "/icons/hero - icon1 - dark.png",
    icon1Light: "/icons/hero - icon1 - light.png",
    icon2Dark: "/icons/hero - icon2 - dark.png",
    icon2Light: "/icons/hero - icon2 - light.png",
    icon3Dark: "/icons/hero - icon3 - dark.png",
    icon3Light: "/icons/hero - icon3 - light.png"
  }), []);

  const tableImages = useMemo(() => ({
    mobileDark: "/images/table - mobile - dark.png",
    mobileLight: "/images/table - mobile - light.png",
    desktopDark: "/images/table - desktop - dark.png",
    desktopLight: "/images/table - desktop - light.png"
  }), []);

  return (
    <>
      {/* Ana Sayfa - Direkt yükleniyor, loading yok */}
      <main className="min-h-screen bg-white dark:bg-dark-bg hero-grid-bg animate-fadeIn">
        {/* Navigation */}
        <nav className="py-4 lg:sticky lg:top-0 z-[200] lg:py-8">
          {/* Mobile: Simple centered logo */}
          <div className="lg:hidden text-center pt-8">
            <div className="retro-logo retro-logo-sm">
              <span className="retro-logo-yumix">yumix</span><span className="retro-logo-art">art</span>
            </div>
          </div>

          {/* Desktop: Full navbar (restored) */}
          <div className="hidden lg:block max-w-6xl mx-auto px-6">
            <div className="navbar-hibrit-glass rounded-full px-6 py-4 transform transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center justify-between">
                {/* Left Logo */}
                <div className="flex items-center">
                  <div className="retro-logo retro-logo-md">
                    <span className="retro-logo-yumix">yumix</span><span className="retro-logo-art">art</span>
                  </div>
                </div>

                {/* Center Menu Items - Desktop Only */}
                <div className="flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
                  <Link href="/categories" className="text-apple-gray-700 hover:text-apple-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors text-base font-medium">Categories</Link>
                  <Link href="/collections" className="text-apple-gray-700 hover:text-apple-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors text-base font-medium">Collections</Link>
                  <a href="#" className="text-apple-gray-700 hover:text-apple-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors text-base font-medium">Subscription</a>
                  <a href="#" className="text-apple-gray-700 hover:text-apple-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors text-base font-medium">About</a>
                </div>

                {/* Desktop Right Actions */}
                <div className="flex items-center space-x-3">
                  <button className="hibrit-btn-secondary bg-white dark:bg-gray-800 text-apple-gray-700 dark:text-gray-200 px-5 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg">
                    Login
                  </button>
                  <button className="hibrit-btn-primary px-5 py-2 rounded-full text-sm font-medium shadow-lg">
                    Start Exploring
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section ref={heroRef} className="pt-8 pb-16 lg:pt-16 lg:pb-32 bg-white dark:bg-dark-bg relative overflow-hidden will-change-transform">
          <div className="max-w-6xl mx-auto px-6 relative">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-4">
              {/* Sol Taraf - Yazılar */}
              <div className="flex-1 text-center lg:text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="hibrit-btn-primary w-8 h-8 flex items-center justify-center text-sm font-bold rounded-full cursor-default">
                    #1
                  </div>
                  <span className="text-lg font-semibold bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 bg-clip-text text-transparent dark:dark-hibrit-text-gradient">
                    Premium Wallpaper Platform
                  </span>
                </div>

                <h1 className="apple-hero-text text-apple-gray-900 dark:text-gray-100 mb-6">
                  <div>Premium Mobile</div>
                  <div>Wallpapers for <span className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 bg-clip-text text-transparent dark:dark-hibrit-text-gradient">Perfect Style</span></div>
                </h1>

                <div className="flex justify-center lg:justify-start">
                  <button className="hibrit-btn-primary px-6 py-3 lg:px-8 lg:py-4 rounded-full text-base lg:text-lg font-medium shadow-lg">
                    Explore Collection
                  </button>
                </div>

                {/* Community Stats */}
                <div className="flex items-center justify-center lg:justify-start mt-6 gap-4">
                  <div className="flex -space-x-3">
                    <img
                      src={isDarkMode ? heroIcons.icon1Dark : heroIcons.icon1Light}
                      alt="User Avatar"
                      className="w-12 h-12 rounded-full border-2 border-white dark:border-dark-bg object-cover"
                    />
                    <img
                      src={isDarkMode ? heroIcons.icon2Dark : heroIcons.icon2Light}
                      alt="User Avatar"
                      className="w-12 h-12 rounded-full border-2 border-white dark:border-dark-bg object-cover"
                    />
                    <img
                      src={isDarkMode ? heroIcons.icon3Dark : heroIcons.icon3Light}
                      alt="User Avatar"
                      className="w-12 h-12 rounded-full border-2 border-white dark:border-dark-bg object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg text-apple-gray-900 dark:text-gray-100">22k+</div>
                    <div className="text-sm text-apple-gray-600 dark:text-gray-400">Active users</div>
                  </div>
                </div>
              </div>

              {/* Sağ Taraf - Hero Wallpaper Carousel */}
              <div className="flex-1 flex justify-center lg:justify-end">
                <div className="relative">
                  <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards, Autoplay]}
                    className="h-[380px] w-[260px] lg:h-[580px] lg:w-[420px] overflow-visible pb-[50px]"
                    autoplay={isHeroVisible ? {
                      delay: 2000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    } : false}
                    loop={true}
                  >
                    <SwiperSlide className="rounded-3xl">
                      <img
                        className="h-full w-full object-cover rounded-3xl"
                        alt="Premium Wallpaper Collection"
                        src="/compressed-images/aesthetic_wallpaper_optimized.jpeg"
                        loading="lazy"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="rounded-3xl">
                      <img
                        className="h-full w-full object-cover rounded-3xl"
                        alt="90s Style Wallpapers"
                        src="/compressed-images/wallpaper1_optimized.jpeg"
                        loading="lazy"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="rounded-3xl">
                      <img
                        className="h-full w-full object-cover rounded-3xl"
                        alt="Memoji Collection"
                        src="/compressed-images/wallpaper2_optimized.jpeg"
                        loading="lazy"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="rounded-3xl">
                      <img
                        className="h-full w-full object-cover rounded-3xl"
                        alt="Abstract Wallpapers"
                        src="/compressed-images/wallpaper3_optimized.jpeg"
                        loading="lazy"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="rounded-3xl">
                      <img
                        className="h-full w-full object-cover rounded-3xl"
                        alt="Nature Collection"
                        src="/compressed-images/wallpaper4_optimized.jpeg"
                        loading="lazy"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="rounded-3xl">
                      <img
                        className="h-full w-full object-cover rounded-3xl"
                        alt="Minimalist Designs"
                        src="/compressed-images/wallpaper5_optimized.jpeg"
                        loading="lazy"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="rounded-3xl">
                      <img
                        className="h-full w-full object-cover rounded-3xl"
                        alt="Gradient Collection"
                        src="/compressed-images/wallpaper6_optimized.jpeg"
                        loading="lazy"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="rounded-3xl">
                      <img
                        className="h-full w-full object-cover rounded-3xl"
                        alt="Digital Art"
                        src="/compressed-images/wallpaper7_optimized.jpeg"
                        loading="lazy"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="rounded-3xl">
                      <img
                        className="h-full w-full object-cover rounded-3xl"
                        alt="Pattern Designs"
                        src="/compressed-images/wallpaper8_optimized.jpeg"
                        loading="lazy"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="rounded-3xl">
                      <img
                        className="h-full w-full object-cover rounded-3xl"
                        alt="Vintage Collection"
                        src="/compressed-images/aesthetic_wallpaper_optimized.jpeg"
                        loading="lazy"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="rounded-3xl">
                      <img
                        className="h-full w-full object-cover rounded-3xl"
                        alt="Modern Art"
                        src="/compressed-images/wallpaper1_optimized.jpeg"
                        loading="lazy"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Preview Section */}
        <section ref={categoriesRef} className="py-16 lg:py-24 bg-white dark:bg-dark-bg">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20 lg:mb-56">
              <h2 className="apple-large-text text-apple-gray-900 dark:text-gray-100 mb-4">
                Browse Categories
              </h2>
              <p className="apple-body-text text-apple-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Click on folders to see details!
              </p>
            </div>

            {/* Interactive Folder Categories - 🚀 Smart Conditional Rendering */}
            {isCategoriesVisible && (
              <div className="space-y-8 animate-fadeIn">
                {/* Mobile Layout: Upper 2, Lower 1 centered */}
                <div className="md:hidden space-y-8">
                  {/* Top Row - 2 categories */}
                  <div className="grid grid-cols-2 gap-6">
                    {/* 90s Style */}
                    <div className="flex flex-col items-center">
                      <div className="mb-6 transform transition-all duration-300 hover:scale-110">
                        <Folder
                          color="#FF6B8A"
                          size={0.9}
                          items={[
                            <div key={0} className="w-full h-full rounded-lg overflow-hidden" style={{backgroundImage: 'url(/compressed-images/aesthetic_wallpaper_optimized.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}} />,
                            <div key={1} className="w-full h-full rounded-lg overflow-hidden" style={{backgroundImage: 'url(/compressed-images/wallpaper1_optimized.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}} />,
                            <div key={2} className="w-full h-full rounded-lg overflow-hidden" style={{backgroundImage: 'url(/compressed-images/wallpaper2_optimized.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}} />
                          ]}
                          className="cursor-pointer"
                        />
                      </div>
                      <h3 className="font-semibold text-apple-gray-900 dark:text-gray-100 text-sm text-center">90s Style</h3>
                    </div>

                    {/* Nature */}
                    <div className="flex flex-col items-center">
                      <div className="mb-6 transform transition-all duration-300 hover:scale-110">
                        <Folder
                          color="#4ADE80"
                          size={0.9}
                          items={[
                            <div key={0} className="w-full h-full rounded-lg overflow-hidden" style={{backgroundImage: 'url(/compressed-images/wallpaper3_optimized.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}} />,
                            <div key={1} className="w-full h-full rounded-lg overflow-hidden" style={{backgroundImage: 'url(/compressed-images/wallpaper4_optimized.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}} />,
                            <div key={2} className="w-full h-full rounded-lg overflow-hidden" style={{backgroundImage: 'url(/compressed-images/wallpaper5_optimized.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}} />
                          ]}
                          className="cursor-pointer"
                        />
                      </div>
                      <h3 className="font-semibold text-apple-gray-900 dark:text-gray-100 text-sm text-center">Nature</h3>
                    </div>
                  </div>

                  {/* Bottom Row - 1 category centered */}
                  <div className="flex justify-center">
                    <div className="flex flex-col items-center">
                      <div className="mb-6 transform transition-all duration-300 hover:scale-110">
                        <Folder
                          color="#9333EA"
                          size={0.9}
                          items={[
                            <div key={0} className="w-full h-full rounded-lg overflow-hidden" style={{backgroundImage: 'url(/compressed-images/wallpaper6_optimized.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}} />,
                            <div key={1} className="w-full h-full rounded-lg overflow-hidden" style={{backgroundImage: 'url(/compressed-images/wallpaper7_optimized.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}} />,
                            <div key={2} className="w-full h-full rounded-lg overflow-hidden" style={{backgroundImage: 'url(/compressed-images/wallpaper8_optimized.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}} />
                          ]}
                          className="cursor-pointer"
                        />
                      </div>
                      <h3 className="font-semibold text-apple-gray-900 dark:text-gray-100 text-sm text-center">Abstract</h3>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout: Only 3 categories with creative staggered layout and hover */}
                <div className="hidden md:flex justify-center items-center space-x-36 lg:space-x-44">
                  {/* 90s Style - Left position */}
                  <div className="flex flex-col items-center transform lg:translate-y-6">
                    <div className="mb-12 transition-all duration-300 hover:scale-105">
                      <Folder
                        color="#FF6B8A"
                        size={1.8}
                        hoverToOpen={true}
                        items={[
                          <div key={0} className="w-full h-full rounded-lg overflow-hidden" style={{backgroundImage: 'url(/compressed-images/aesthetic_wallpaper_optimized.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}} />,
                          <div key={1} className="w-full h-full rounded-lg overflow-hidden" style={{backgroundImage: 'url(/compressed-images/wallpaper1_optimized.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}} />,
                          <div key={2} className="w-full h-full rounded-lg overflow-hidden" style={{backgroundImage: 'url(/compressed-images/wallpaper2_optimized.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}} />
                        ]}
                        className="cursor-pointer"
                      />
                    </div>
                    <h3 className="font-semibold text-apple-gray-900 dark:text-gray-100 text-base lg:text-lg text-center mb-2">90s Style</h3>
                  </div>

                  {/* Nature - Center position (elevated) */}
                  <div className="flex flex-col items-center transform lg:-translate-y-12">
                    <div className="mb-12 transition-all duration-300 hover:scale-105">
                      <Folder
                        color="#4ADE80"
                        size={1.8}
                        hoverToOpen={true}
                        items={[
                          <div key={0} className="w-full h-full rounded-lg overflow-hidden" style={{backgroundImage: 'url(/compressed-images/wallpaper3_optimized.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}} />,
                          <div key={1} className="w-full h-full rounded-lg overflow-hidden" style={{backgroundImage: 'url(/compressed-images/wallpaper4_optimized.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}} />,
                          <div key={2} className="w-full h-full rounded-lg overflow-hidden" style={{backgroundImage: 'url(/compressed-images/wallpaper5_optimized.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}} />
                        ]}
                        className="cursor-pointer"
                      />
                    </div>
                    <h3 className="font-semibold text-apple-gray-900 dark:text-gray-100 text-base lg:text-lg text-center mb-2">Nature</h3>
                  </div>

                  {/* Abstract - Right position */}
                  <div className="flex flex-col items-center transform lg:translate-y-6">
                    <div className="mb-12 transition-all duration-300 hover:scale-105">
                      <Folder
                        color="#9333EA"
                        size={1.8}
                        hoverToOpen={true}
                        items={[
                          <div key={0} className="w-full h-full rounded-lg overflow-hidden" style={{backgroundImage: 'url(/compressed-images/wallpaper6_optimized.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}} />,
                          <div key={1} className="w-full h-full rounded-lg overflow-hidden" style={{backgroundImage: 'url(/compressed-images/wallpaper7_optimized.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}} />,
                          <div key={2} className="w-full h-full rounded-lg overflow-hidden" style={{backgroundImage: 'url(/compressed-images/wallpaper8_optimized.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}} />
                        ]}
                        className="cursor-pointer"
                      />
                    </div>
                    <h3 className="font-semibold text-apple-gray-900 dark:text-gray-100 text-base lg:text-lg text-center mb-2">Abstract</h3>
                  </div>
                </div>
              </div>
            )}

            {/* View All Categories Button */}
            <div className="text-center mt-8 lg:mt-12">
              <Link href="/categories" className="inline-block hibrit-btn-secondary bg-white dark:bg-gray-800 text-apple-gray-700 dark:text-gray-200 px-6 py-3 lg:px-8 lg:py-4 rounded-full text-sm lg:text-base font-medium shadow-md hover:shadow-lg transition-all duration-200">
                View All Categories
              </Link>
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section ref={tableRef} className="pt-24 pb-4 lg:py-32 bg-white dark:bg-dark-bg">
          <div className="max-w-6xl mx-auto px-2 lg:px-6">
            <div className="text-center mb-4 lg:mb-16 px-4 lg:px-0">
              <h2 className="apple-large-text text-apple-gray-900 dark:text-gray-100 mb-4">
                Why <span className="retro-logo retro-logo-lg lg:retro-logo-xl inline"><span className="retro-logo-yumix">yumix</span><span className="retro-logo-art">art</span></span>
              </h2>
              <p className="apple-body-text text-apple-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Learn why people choose us.
              </p>
            </div>

            {/* Uploaded Table Image */}
            <div className="w-full lg:max-w-3xl mx-auto">
              {/* Mobile: Different images for dark/light mode */}
              <img
                src={isDarkMode ? tableImages.mobileDark : tableImages.mobileLight}
                alt="YumixArt vs Others Comparison Table"
                className="w-5/6 h-auto mx-auto lg:hidden"
              />
              {/* Desktop: Different images for dark/light mode */}
              <img
                src={isDarkMode ? tableImages.desktopDark : tableImages.desktopLight}
                alt="YumixArt vs Others Comparison Table"
                className="w-full h-auto hidden lg:block"
              />

              {/* CTA Button */}
              <div className="text-center -mt-4 lg:mt-8">
                <button className="hibrit-btn-primary px-6 py-3 lg:px-8 lg:py-4 rounded-full text-base lg:text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  Start Exploring
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Discord Community CTA */}
        <section ref={communityRef} className="py-20 bg-white dark:bg-dark-bg">
          <div className="max-w-6xl mx-auto px-6">
            <div className="relative overflow-hidden rounded-3xl navbar-hibrit-glass">

              <div className="relative z-10 py-16 px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Join Our Community
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
                  Get support, share your favorite wallpapers, and connect with other YumixArt users. Our friendly Discord community is here to help you with any questions.
                </p>

                <button className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform">
                  <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.195.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.30zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  Join Discord
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white dark:bg-dark-bg py-16 border-t border-apple-gray-200 dark:border-gray-700">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div>
                <h4 className="font-semibold text-apple-gray-900 dark:text-gray-100 mb-4">Collections</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-apple-gray-600 dark:text-gray-300 hover:text-apple-gray-900 dark:hover:text-gray-100 transition-colors">90s Style</a></li>
                  <li><a href="#" className="text-apple-gray-600 dark:text-gray-300 hover:text-apple-gray-900 dark:hover:text-gray-100 transition-colors">Memoji Silhouettes</a></li>
                  <li><a href="#" className="text-apple-gray-600 dark:text-gray-300 hover:text-apple-gray-900 dark:hover:text-gray-100 transition-colors">Premium Packs</a></li>
                  <li><a href="#" className="text-apple-gray-600 dark:text-gray-300 hover:text-apple-gray-900 dark:hover:text-gray-100 transition-colors">Weekly Featured</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-apple-gray-900 dark:text-gray-100 mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-apple-gray-600 dark:text-gray-300 hover:text-apple-gray-900 dark:hover:text-gray-100 transition-colors">About</a></li>
                  <li><a href="#" className="text-apple-gray-600 dark:text-gray-300 hover:text-apple-gray-900 dark:hover:text-gray-100 transition-colors">Contact</a></li>
                  <li><a href="#" className="text-apple-gray-600 dark:text-gray-300 hover:text-apple-gray-900 dark:hover:text-gray-100 transition-colors">Blog</a></li>
                  <li><a href="#" className="text-apple-gray-600 dark:text-gray-300 hover:text-apple-gray-900 dark:hover:text-gray-100 transition-colors">Careers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-apple-gray-900 dark:text-gray-100 mb-4">Support</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-apple-gray-600 dark:text-gray-300 hover:text-apple-gray-900 dark:hover:text-gray-100 transition-colors">Help Center</a></li>
                  <li><a href="#" className="text-apple-gray-600 dark:text-gray-300 hover:text-apple-gray-900 dark:hover:text-gray-100 transition-colors">Download Guide</a></li>
                  <li><a href="#" className="text-apple-gray-600 dark:text-gray-300 hover:text-apple-gray-900 dark:hover:text-gray-100 transition-colors">Refunds</a></li>
                  <li><a href="#" className="text-apple-gray-600 dark:text-gray-300 hover:text-apple-gray-900 dark:hover:text-gray-100 transition-colors">Contact Support</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-apple-gray-900 dark:text-gray-100 mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-apple-gray-600 dark:text-gray-300 hover:text-apple-gray-900 dark:hover:text-gray-100 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-apple-gray-600 dark:text-gray-300 hover:text-apple-gray-900 dark:hover:text-gray-100 transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-apple-gray-600 dark:text-gray-300 hover:text-apple-gray-900 dark:hover:text-gray-100 transition-colors">Cookie Policy</a></li>
                </ul>
              </div>
            </div>

            <div className="text-center pt-8 border-t border-apple-gray-200 dark:border-gray-700">
              <div className="retro-logo retro-logo-lg mb-4">
                <span className="retro-logo-yumix">yumix</span><span className="retro-logo-art">art</span>
              </div>
              <p className="text-apple-gray-500 dark:text-gray-400">
                © 2024 YumixArt. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

        {/* Background Blur Overlay */}
        {isFullScreenMenuOpen && (
          <div className="fixed inset-0 z-[80] lg:hidden">
            <div
              className="absolute inset-0 bg-black/10 backdrop-blur-sm"
              onClick={handleFullScreenMenuClose}
            />
          </div>
        )}

        {/* Compact Mobile Menu Popup */}
        {isFullScreenMenuOpen && (
          <div className="fixed inset-0 z-[90] lg:hidden pointer-events-none">
            {/* Menu Popup */}
            <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 pointer-events-auto">
              <div className="floating-hibrit-glass rounded-2xl animate-slide-up-menu p-5 min-w-[280px] transition-all duration-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)]">
                {/* Menu Items */}
                <div className="space-y-1 mb-4">
                  <Link href="/categories" className="block text-center text-apple-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-600/20 hover:text-apple-gray-900 dark:hover:text-gray-100 transition-all duration-200 text-sm font-medium py-3 px-4 rounded-xl">Categories</Link>
                  <Link href="/collections" className="block text-center text-apple-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-600/20 hover:text-apple-gray-900 dark:hover:text-gray-100 transition-all duration-200 text-sm font-medium py-3 px-4 rounded-xl">Collections</Link>
                  <a href="#" className="block text-center text-apple-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-600/20 hover:text-apple-gray-900 dark:hover:text-gray-100 transition-all duration-200 text-sm font-medium py-3 px-4 rounded-xl">Subscription</a>
                  <a href="#" className="block text-center text-apple-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-600/20 hover:text-apple-gray-900 dark:hover:text-gray-100 transition-all duration-200 text-sm font-medium py-3 px-4 rounded-xl">About</a>
                </div>

                {/* Divider */}
                <div className="border-t border-apple-gray-200/30 my-4" />

                {/* Action Buttons */}
                <div className="flex flex-col items-center space-y-3">
                  <button className="hibrit-btn-secondary bg-white dark:bg-gray-800 text-apple-gray-700 dark:text-gray-200 px-5 py-2.5 rounded-full text-sm font-medium shadow-sm">
                    Login
                  </button>
                  <button className="hibrit-btn-primary px-5 py-2.5 rounded-full text-sm font-medium shadow-lg">
                    Start Exploring
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Alt Menu - Minimal Floating Action Bar - Mobile Horizontal, Desktop Vertical */}
        {/* Mobile: Horizontal bottom bar */}
        <div className="lg:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[9999]">
          <div className="inline-flex items-center justify-center overflow-hidden p-3 rounded-full floating-hibrit-glass gap-1 transition-all duration-300 hover:shadow-[0_15px_50px_rgba(0,0,0,0.18)]">
            <button className="flex items-center justify-center transition-colors hover:bg-white/20">
              <div className="group relative flex size-9 items-center justify-center rounded-full p-1.5 hover:bg-white/15">
                {/* Discord Icon */}
                <svg className="h-full w-full text-apple-gray-900 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.195.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </div>
            </button>
            <button
              className="flex items-center justify-center transition-colors hover:bg-white/20"
              onClick={toggleTheme}
            >
              <div className="group relative flex size-9 items-center justify-center rounded-full p-1.5 hover:bg-white/15">
                <ToggleLeft className={`h-full w-full transition-transform duration-300 ${isDarkMode ? 'text-blue-400 rotate-180' : 'text-apple-gray-900 dark:text-white'}`} />
              </div>
            </button>
            <button className="flex items-center justify-center transition-colors hover:bg-white/20">
              <div className="group relative flex size-9 items-center justify-center rounded-full p-1.5 hover:bg-white/15">
                <Home className="h-full w-full text-apple-gray-900 dark:text-white" />
              </div>
            </button>
            <button className="flex items-center justify-center transition-colors hover:bg-white/20">
              <div className="group relative flex size-9 items-center justify-center rounded-full p-1.5 hover:bg-white/15">
                <User className="h-full w-full text-apple-gray-900 dark:text-white" />
              </div>
            </button>
            <button className="flex items-center justify-center transition-colors hover:bg-white/20">
              <div className="group relative flex size-9 items-center justify-center rounded-full p-1.5 hover:bg-white/15">
                <Heart className="h-full w-full text-apple-gray-900 dark:text-white" />
              </div>
            </button>
            <button className="flex items-center justify-center transition-colors hover:bg-white/20">
              <div className="group relative flex size-9 items-center justify-center rounded-full p-1.5 hover:bg-white/15">
                <ShoppingCart className="h-full w-full text-apple-gray-900 dark:text-white" />
              </div>
            </button>
            {/* Menu Button - Mobile Only */}
            <button
              className="flex items-center justify-center transition-colors hover:bg-white/20"
              onClick={handleFullScreenMenuToggle}
            >
              <div className="group relative flex size-9 items-center justify-center rounded-full p-1.5 hover:bg-white/15">
                <div className="relative">
                  {/* Menu Icon */}
                  <Menu
                    className={`h-full w-full text-apple-gray-900 dark:text-white transition-all duration-300 ${isFullScreenMenuOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                      }`}
                  />
                  {/* X Icon */}
                  <X
                    className={`absolute inset-0 h-full w-full text-apple-gray-900 dark:text-white transition-all duration-300 ${isFullScreenMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-75'
                      }`}
                  />
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Desktop: Vertical bottom bar */}
        <div className="hidden lg:block fixed left-1/2 bottom-6 transform -translate-x-1/2 z-[9999]">
          <div className="flex items-center overflow-hidden p-3 rounded-full floating-hibrit-glass gap-1 transition-all duration-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)]">
            <button className="flex items-center justify-center transition-colors hover:bg-white/20 dark:hover:bg-gray-600/20">
              <div className="group relative flex size-10 items-center justify-center rounded-full p-2 hover:bg-white/15 dark:hover:bg-gray-600/15">
                {/* Discord Icon */}
                <svg className="h-full w-full text-apple-gray-900 dark:text-gray-100" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.195.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.30zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </div>
            </button>
            <button
              className="flex items-center justify-center transition-colors hover:bg-white/20 dark:hover:bg-gray-600/20"
              onClick={toggleTheme}
            >
              <div className="group relative flex size-10 items-center justify-center rounded-full p-2 hover:bg-white/15 dark:hover:bg-gray-600/15">
                <ToggleLeft className={`h-full w-full transition-transform duration-300 ${isDarkMode ? 'text-blue-400 rotate-180' : 'text-apple-gray-900 dark:text-gray-100'}`} />
              </div>
            </button>
            <button className="flex items-center justify-center transition-colors hover:bg-white/20 dark:hover:bg-gray-600/20">
              <div className="group relative flex size-10 items-center justify-center rounded-full p-2 hover:bg-white/15 dark:hover:bg-gray-600/15">
                <Home className="h-full w-full text-apple-gray-900 dark:text-gray-100" />
              </div>
            </button>
            <button className="flex items-center justify-center transition-colors hover:bg-white/20 dark:hover:bg-gray-600/20">
              <div className="group relative flex size-10 items-center justify-center rounded-full p-2 hover:bg-white/15 dark:hover:bg-gray-600/15">
                <User className="h-full w-full text-apple-gray-900 dark:text-gray-100" />
              </div>
            </button>
            <button className="flex items-center justify-center transition-colors hover:bg-white/20 dark:hover:bg-gray-600/20">
              <div className="group relative flex size-10 items-center justify-center rounded-full p-2 hover:bg-white/15 dark:hover:bg-gray-600/15">
                <Heart className="h-full w-full text-apple-gray-900 dark:text-gray-100" />
              </div>
            </button>
            <button className="flex items-center justify-center transition-colors hover:bg-white/20 dark:hover:bg-gray-600/20">
              <div className="group relative flex size-10 items-center justify-center rounded-full p-2 hover:bg-white/15 dark:hover:bg-gray-600/15">
                <ShoppingCart className="h-full w-full text-apple-gray-900 dark:text-gray-100" />
              </div>
            </button>
          </div>
        </div>

      </main>

      {/* Gradual Blur Effect */}
      <GradualBlur
        preset="page-footer"
        strength={3}
        height="6rem"
        opacity={0.95}
        divCount={8}
        curve="ease-in"
        exponential={true}
        zIndex={1000}
        responsive={true}
        mobileHeight="6rem"
        tabletHeight="6rem"
        style={{ bottom: 0, margin: 0, padding: 0 }}
      />
    </>
  );
}
