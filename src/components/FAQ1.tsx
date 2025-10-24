"use client";

import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ1 = () => (
  <div className="w-full py-12 lg:py-20 xl:py-40">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
        <div className="flex gap-6 lg:gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge>FAQ</Badge>
            </div>
            <div className="flex gap-2 lg:gap-3 flex-col">
              <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter max-w-xs sm:max-w-md lg:max-w-xl text-left font-regular">
                Everything you need to know
              </h4>
              <p className="text-base lg:text-lg max-w-xs sm:max-w-md lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                Get answers to common questions about our AI video creation platform.
                From pricing to technical details, we've got you covered.
              </p>
            </div>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-sm lg:text-base">
              How does the credit system work?
            </AccordionTrigger>
            <AccordionContent>
              Each video render costs 1 credit. You can purchase credits in packages 
              (10, 50, or 200 credits). Credits never expire and can be used whenever you need them.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-sm lg:text-base">
              What formats do you support?
            </AccordionTrigger>
            <AccordionContent>
              We support all major video formats including MP4, MOV, and AVI. Output videos 
              are optimized for Instagram Reels, TikTok, and YouTube Shorts.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-sm lg:text-base">
              Can I remove objects from videos?
            </AccordionTrigger>
            <AccordionContent>
              Yes! Our AI can seamlessly remove unwanted objects, people, or elements 
              from your videos while maintaining natural-looking backgrounds.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-sm lg:text-base">
              How long does processing take?
            </AccordionTrigger>
            <AccordionContent>
              Most videos are processed within 2-5 minutes. Complex edits like object 
              removal or scene manipulation may take 5-10 minutes depending on video length.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-sm lg:text-base">
              Do you offer API access?
            </AccordionTrigger>
            <AccordionContent>
              Yes, API access is available with our Agency Scale plan. This allows you 
              to integrate our video processing capabilities directly into your applications.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-sm lg:text-base">
              Can I cancel anytime?
            </AccordionTrigger>
            <AccordionContent>
              There are no subscriptions to cancel! Our credit system means you only 
              pay for what you use. Purchased credits never expire.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-sm lg:text-base">
              What's in viral templates?
            </AccordionTrigger>
            <AccordionContent>
              Our viral templates include trending prompt styles, proven engagement patterns, 
              and optimized settings for different social media platforms.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger className="text-sm lg:text-base">
              Is there a free trial?
            </AccordionTrigger>
            <AccordionContent>
              Yes! New users get 3 free credits to test our platform. No credit card required 
              for the trial period.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>
);
