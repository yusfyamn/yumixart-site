"use client";

import { Badge } from "@/components/ui/badge";

export const Feature4 = () => (
  <div className="w-full py-12 lg:py-20">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 lg:items-center">
        <div className="flex gap-4 flex-col flex-1">
          <div>
            <Badge>Templates</Badge>
          </div>
          <div className="flex gap-2 lg:gap-3 flex-col">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter max-w-xs sm:max-w-md lg:max-w-xl font-regular text-left">
              Viral Content Templates
            </h2>
            <p className="text-base lg:text-lg max-w-xs sm:max-w-md lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
              Access pre-built viral prompt templates designed to maximize engagement 
              on Instagram and TikTok. Proven formulas for viral success.
            </p>
          </div>
        </div>
        <div className="bg-muted rounded-md w-full aspect-video h-full flex-1 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-4">📱</div>
            <p className="text-sm sm:text-base lg:text-lg">Viral Templates Gallery</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
