"use client";

import { Badge } from "@/components/ui/badge";

export const Feature3 = () => (
  <div className="w-full py-12 lg:py-20">
    <div className="container mx-auto px-4">
      <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-10 lg:items-center">
        <div className="bg-muted rounded-md w-full aspect-video h-full flex-1 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-4">🎬</div>
            <p className="text-sm sm:text-base lg:text-lg">AI Video Editor Demo</p>
          </div>
        </div>
        <div className="flex gap-4 pl-0 lg:pl-20 flex-col flex-1">
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className="flex gap-2 lg:gap-3 flex-col">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter max-w-xs sm:max-w-md lg:max-w-xl font-regular text-left">
              Advanced AI Video Editing
            </h2>
            <p className="text-base lg:text-lg max-w-xs sm:max-w-md lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
              Remove objects, change backgrounds, and manipulate scenes with our 
              state-of-the-art AI technology. What used to take hours now takes minutes.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
