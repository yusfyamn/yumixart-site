"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        <div className="flex gap-6 lg:gap-8 pt-12 pb-8 lg:py-20 xl:py-40 items-center justify-center flex-col px-4">
          <div>
            <Button variant="secondary" size="sm" className="rounded-full border border-primary/20 cursor-default hover:bg-secondary text-xs sm:text-sm py-1 sm:py-2">
              #1 Video Editor AI
            </Button>
          </div>
          <div className="flex gap-3 lg:gap-4 flex-col">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-sm sm:max-w-md lg:max-w-2xl tracking-tighter text-center font-regular leading-tight">
              <span className="text-foreground">AI Video Creation is</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
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
              Create viral social media videos with AI. Remove objects, edit scenes, and produce engaging content faster than traditional methods.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button size="lg" className="gap-4 w-full sm:w-auto" variant="outline">
              Watch Demo <Play className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4 w-full sm:w-auto">
              Start Creating <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
