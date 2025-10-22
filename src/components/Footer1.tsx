"use client";

import Link from "next/link";
import { Logo } from "./Logo";

export const Footer1 = () => {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
    },
    {
      title: "Product",
      description: "Powerful AI video creation tools for content creators",
      items: [
        {
          title: "Video Templates",
          href: "/templates",
        },
        {
          title: "AI Editor",
          href: "/editor",
        },
        {
          title: "Analytics",
          href: "/analytics",
        },
        {
          title: "API Access",
          href: "/api",
        },
      ],
    },
    {
      title: "Company",
      description: "Learn more about Klymk and our mission",
      items: [
        {
          title: "About us",
          href: "/about",
        },
        {
          title: "Careers",
          href: "/careers",
        },
        {
          title: "Press Kit",
          href: "/press",
        },
        {
          title: "Contact us",
          href: "/contact",
        },
      ],
    },
  ];

  return (
    <div className="w-full py-8 lg:py-12 xl:py-20 bg-background text-foreground border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start lg:items-center">
          <div className="flex gap-6 lg:gap-8 flex-col items-start">
            <div className="flex gap-2 lg:gap-3 flex-col">
              <Logo className="mb-2" />
              <p className="text-base lg:text-lg max-w-xs sm:max-w-md lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                Empowering creators with AI-powered video generation. 
                Create viral content for Instagram and TikTok faster than ever before.
              </p>
            </div>
            <div className="flex gap-8 sm:gap-20 flex-col sm:flex-row">
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                <p>San Francisco</p>
                <p>California</p>
                <p>USA</p>
              </div>
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                <Link href="/terms">Terms of service</Link>
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/cookies">Cookie Policy</Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 items-start">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="flex text-base gap-1 flex-col items-start"
              >
                <div className="flex flex-col gap-2">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex justify-between items-center"
                    >
                      <span className="text-xl">{item.title}</span>
                    </Link>
                  ) : (
                    <p className="text-xl">{item.title}</p>
                  )}
                  {item.items &&
                    item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="flex justify-between items-center"
                      >
                        <span className="text-muted-foreground">
                          {subItem.title}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
