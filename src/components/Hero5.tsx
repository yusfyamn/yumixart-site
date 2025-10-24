"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MoveRight, PhoneCall, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoCarousel = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const videos = [
    {
      id: 1,
      thumbnail: "https://picsum.photos/400/300?random=1",
      bgColor: "bg-gradient-to-br from-blue-500 to-purple-600",
      title: "Product Showcase",
      description: "Transform product videos with AI"
    },
    {
      id: 2,
      thumbnail: "https://picsum.photos/400/300?random=2",
      bgColor: "bg-gradient-to-br from-green-500 to-teal-600",
      title: "Social Media",
      description: "Create viral social content"
    },
    {
      id: 3,
      thumbnail: "https://picsum.photos/800/600?random=3",
      bgColor: "bg-gradient-to-br from-orange-500 to-red-600",
      title: "Brand Story",
      description: "Tell your story with AI"
    },
    {
      id: 4,
      thumbnail: "https://picsum.photos/400/300?random=4",
      bgColor: "bg-gradient-to-br from-purple-500 to-pink-600",
      title: "Tutorial",
      description: "Educational content made easy"
    },
    {
      id: 5,
      thumbnail: "https://picsum.photos/400/300?random=5",
      bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600",
      title: "Marketing",
      description: "Professional marketing videos"
    }
  ];

  const scale = useTransform(scrollYProgress, [0, 0.6], [0.6, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.8]);

  return (
    <motion.div 
      ref={containerRef}
      className="w-full max-w-7xl mx-auto my-2 lg:my-4 px-4"
      style={{ scale, opacity }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
        {/* Left videos - positioned near main video */}
        <div className="lg:col-span-1 hidden lg:block relative h-80">
          <div
            className="absolute top-16 right-4 w-40 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:opacity-100 opacity-70"
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
              <img
                src={videos[0].thumbnail}
                alt={videos[0].title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement?.classList.add(videos[0].bgColor);
                }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
            </div>
          </div>
        </div>

        {/* Center main video - takes 3 columns */}
        <div className="lg:col-span-3 flex justify-center relative">
          <div className="relative group cursor-pointer w-full max-w-2xl">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl relative">
              <img
                src={videos[2].thumbnail}
                alt={videos[2].title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement?.classList.add(videos[2].bgColor);
                }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
            </div>
          </div>
          
          {/* Video below main - left */}
          <div
            className="absolute -bottom-8 -left-16 w-36 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:opacity-100 opacity-70"
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
              <img
                src={videos[1].thumbnail}
                alt={videos[1].title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement?.classList.add(videos[1].bgColor);
                }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
            </div>
          </div>
          
          {/* Video below main - right */}
          <div
            className="absolute -bottom-6 -right-20 w-40 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:opacity-100 opacity-70"
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
              <img
                src={videos[3].thumbnail}
                alt={videos[3].title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement?.classList.add(videos[3].bgColor);
                }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
            </div>
          </div>
        </div>

        {/* Right videos - positioned near main video */}
        <div className="lg:col-span-1 hidden lg:block relative h-80">
          <div
            className="absolute top-20 left-4 w-44 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:opacity-100 opacity-70"
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
              <img
                src={videos[4].thumbnail}
                alt={videos[4].title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement?.classList.add(videos[4].bgColor);
                }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Hero5 = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["powerful", "intelligent", "creative", "efficient", "revolutionary"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-6 lg:gap-8 pt-10 pb-8 lg:pt-16 lg:pb-16 xl:pt-24 xl:pb-32 items-center justify-center flex-col px-4">
          <div className="flex gap-3 lg:gap-4 flex-col">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-sm sm:max-w-md lg:max-w-2xl tracking-tighter text-center font-regular leading-tight">
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">AI Video Creation is</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-foreground"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md sm:max-w-lg lg:max-w-2xl text-center">
              Create, edit, and go viral — all powered by AI.
            </p>
            
            <div className="flex justify-center mt-4">
              <Button size="default" className="gap-4 bg-primary hover:bg-primary/90 px-6 py-2 text-base">
                Start Creating <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Video Carousel */}
          <VideoCarousel />
        </div>
      </div>
    </div>
  );
};
