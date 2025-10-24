"use client";

import { MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const CTA1 = () => (
  <div className="w-full py-8 lg:py-10 xl:py-20">
    <div className="container mx-auto px-4">
      <div className="flex flex-col text-center bg-gradient-to-r from-neutral-800 to-black rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-14 gap-6 lg:gap-8 items-center">
        <div className="flex flex-col gap-2 lg:gap-3">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter max-w-xs sm:max-w-md lg:max-w-xl font-regular">
            Ready to Create Viral Content?
          </h3>
          <p className="text-base lg:text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xs sm:max-w-md lg:max-w-xl">
            Join thousands of creators using AI to produce engaging social media content 
            faster and cheaper than ever before. Start your journey today with our 
            powerful video creation platform.
          </p>
        </div>
        <div className="flex flex-row gap-4 w-full sm:w-auto">
          <Button className="gap-4 w-full sm:w-auto" size="lg">
            Start Creating <MoveRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);
