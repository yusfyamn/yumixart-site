"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";

export const Header1 = () => {
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
          title: "AI Video Editor",
          href: "/editor",
        },
        {
          title: "Templates",
          href: "/templates",
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
      description: "Learn more about Aleph and our mission",
      items: [
        {
          title: "About us",
          href: "/about",
        },
        {
          title: "Blog",
          href: "/blog",
        },
        {
          title: "Careers",
          href: "/careers",
        },
        {
          title: "Contact us",
          href: "/contact",
        },
      ],
    },
  ];

  const [isOpen, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };
  return (
    <header className="w-full z-50 fixed top-0 left-0">
      <div className="container mx-auto px-4 pt-4 lg:pt-6">
        <div className="relative bg-gradient-to-r from-neutral-800 to-black backdrop-blur-md border-2 rounded-full min-h-12 lg:min-h-16 flex gap-2 lg:gap-4 flex-row lg:grid lg:grid-cols-3 items-center px-4 lg:px-6 shadow-xl border-border/50">
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <>
                      <NavigationMenuLink>
                        <Button variant="ghost" className="hover:bg-black/20 hover:text-white">{item.title}</Button>
                      </NavigationMenuLink>
                    </>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="font-medium text-sm !bg-transparent hover:!bg-black/20 hover:!text-white focus:!bg-black/20 focus:!text-white data-[active]:!bg-black/20 data-[state=open]:!bg-black/20 border-none text-white">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[450px] p-4 border-0 bg-gradient-to-r from-neutral-800 to-black text-white">
                        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                          <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col">
                              <p className="text-base">{item.title}</p>
                              <p className="text-muted-foreground text-sm">
                                {item.description}
                              </p>
                            </div>
                            <Button size="sm" className="mt-10">
                              Book a demo today
                            </Button>
                          </div>
                          <div className="flex flex-col text-sm h-full justify-end">
                            {item.items?.map((subItem) => (
                              <NavigationMenuLink
                                href={subItem.href}
                                key={subItem.title}
                                className="flex flex-row justify-between items-center hover:bg-black/30 py-2 px-4 rounded text-white"
                              >
                                <span>{subItem.title}</span>
                                <MoveRight className="w-4 h-4 text-gray-400" />
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex lg:justify-center">
          <Logo />
        </div>
        <div className="hidden lg:flex justify-end w-full gap-4">
          <Button variant="outline" className="hover:bg-black hover:text-white border-white/20">Sign in</Button>
          <Button className="hover:bg-black/80">Get started</Button>
        </div>
        <div className="flex lg:hidden items-center justify-end w-full gap-0">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
        {isOpen && (
          <>
            {/* Backdrop overlay - starts below header */}
            <div
              className="fixed inset-0 bg-black/40 lg:hidden z-30"
              style={{
                top: '76px',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)'
              }}
              onClick={() => setOpen(false)}
            />
            {/* Menu content */}
            <div className="absolute top-16 left-4 right-4 flex flex-col bg-background border rounded-2xl shadow-lg py-4 px-4 gap-4 lg:hidden z-40">
            {navigationItems.map((item) => (
              <div key={item.title}>
                <div className="flex flex-col">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex justify-between items-center py-1"
                      onClick={() => setOpen(false)}
                    >
                      <span className="text-base font-medium">{item.title}</span>
                      <MoveRight className="w-4 h-4 text-muted-foreground" />
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.title)}
                        className="flex justify-between items-center py-1 text-left"
                      >
                        <span className="text-base font-medium">{item.title}</span>
                        <ChevronDown 
                          className={`w-4 h-4 text-muted-foreground transition-transform ${
                            openDropdown === item.title ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      {openDropdown === item.title && item.items && (
                        <div className="flex flex-col gap-1 mt-1 ml-4">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className="flex justify-between items-center py-1 pl-4 border-l-2 border-muted hover:bg-muted/50 rounded"
                              onClick={() => setOpen(false)}
                            >
                              <span className="text-sm text-muted-foreground">
                                {subItem.title}
                              </span>
                              <MoveRight className="w-3 h-3 text-muted-foreground" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t">
              <Button variant="outline" className="w-full hover:bg-black hover:text-white">Sign in</Button>
              <Button className="w-full hover:bg-black/80">Get started</Button>
            </div>
          </div>
          </>
        )}
        </div>
      </div>
    </header>
  );
};
