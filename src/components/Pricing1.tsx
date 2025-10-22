"use client";

import { Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Pricing1 = () => (
  <div className="w-full py-12 lg:py-20 xl:py-40">
    <div className="container mx-auto px-4">
      <div className="flex text-center justify-center items-center gap-4 flex-col">
        <Badge>Pricing</Badge>
        <div className="flex gap-2 flex-col">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter max-w-xs sm:max-w-xl text-center font-regular">
            Simple Credit-Based Pricing
          </h2>
          <p className="text-base lg:text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xs sm:max-w-xl text-center">
            Pay only for what you create. No subscriptions, no hidden fees.
          </p>
        </div>
        <div className="grid pt-12 lg:pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-4 lg:gap-8">
          <Card className="w-full rounded-md">
            <CardHeader className="pb-3 lg:pb-6">
              <CardTitle>
                <span className="flex flex-row gap-4 items-center font-normal text-base lg:text-lg">
                  Starter Pack
                </span>
              </CardTitle>
              <CardDescription className="text-sm lg:text-base">
                Perfect for individual creators testing AI video creation.
                Get started with essential features.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-col gap-4 lg:gap-8 justify-start">
                <p className="flex flex-row items-center gap-2 text-lg lg:text-xl">
                  <span className="text-2xl lg:text-4xl">$29</span>
                  <span className="text-xs lg:text-sm text-muted-foreground">
                    {" "}
                    / 10 credits
                  </span>
                </p>
                <div className="flex flex-col gap-3 lg:gap-4 justify-start">
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>10 Video Renders</p>
                      <p className="text-muted-foreground text-sm">
                        Create up to 10 AI-powered videos
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Basic Templates</p>
                      <p className="text-muted-foreground text-sm">
                        Access to starter viral prompt templates
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Email Support</p>
                      <p className="text-muted-foreground text-sm">
                        Get help via email within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="gap-4">
                  Get Started <MoveRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full shadow-2xl rounded-md">
            <CardHeader className="pb-3 lg:pb-6">
              <CardTitle>
                <span className="flex flex-row gap-4 items-center font-normal text-base lg:text-lg">
                  Creator Pro
                </span>
              </CardTitle>
              <CardDescription className="text-sm lg:text-base">
                Most popular choice for serious content creators and small teams.
                Everything you need to scale.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-col gap-4 lg:gap-8 justify-start">
                <p className="flex flex-row items-center gap-2 text-lg lg:text-xl">
                  <span className="text-2xl lg:text-4xl">$99</span>
                  <span className="text-xs lg:text-sm text-muted-foreground">
                    {" "}
                    / 50 credits
                  </span>
                </p>
                <div className="flex flex-col gap-3 lg:gap-4 justify-start">
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>50 Video Renders</p>
                      <p className="text-muted-foreground text-sm">
                        Create up to 50 professional videos
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>All Premium Templates</p>
                      <p className="text-muted-foreground text-sm">
                        Access to all viral prompt templates
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Priority Support</p>
                      <p className="text-muted-foreground text-sm">
                        Fast priority support and advanced features
                      </p>
                    </div>
                  </div>
                </div>
                <Button className="gap-4">
                  Start Creating <MoveRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full rounded-md">
            <CardHeader className="pb-3 lg:pb-6">
              <CardTitle>
                <span className="flex flex-row gap-4 items-center font-normal text-base lg:text-lg">
                  Agency Scale
                </span>
              </CardTitle>
              <CardDescription className="text-sm lg:text-base">
                For agencies and large teams creating content at scale.
                Custom solutions available.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-col gap-4 lg:gap-8 justify-start">
                <p className="flex flex-row items-center gap-2 text-lg lg:text-xl">
                  <span className="text-2xl lg:text-4xl">$299</span>
                  <span className="text-xs lg:text-sm text-muted-foreground">
                    {" "}
                    / 200 credits
                  </span>
                </p>
                <div className="flex flex-col gap-3 lg:gap-4 justify-start">
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>200 Video Renders</p>
                      <p className="text-muted-foreground text-sm">
                        Bulk video creation for agencies
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Custom Templates</p>
                      <p className="text-muted-foreground text-sm">
                        White-label and custom branded templates
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>24/7 Support & API</p>
                      <p className="text-muted-foreground text-sm">
                        Dedicated support and API access
                      </p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="gap-4">
                  Contact Sales <PhoneCall className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
);
