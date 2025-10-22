"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export const Logo = ({ className = "" }: { className?: string }) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Theme değişikliklerini dinle
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    };

    checkTheme();

    // MutationObserver ile theme değişikliklerini dinle
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`relative ${className}`}>
      {theme === "dark" ? (
        <Image
          src="/Logo/Logo - Beyaz.png"
          alt="Klymk AI"
          width={140}
          height={40}
          className="h-8 lg:h-9 w-auto object-contain"
          priority
        />
      ) : (
        <Image
          src="/Logo/Logo - Siyah.png"
          alt="Klymk AI"
          width={140}
          height={40}
          className="h-8 lg:h-9 w-auto object-contain"
          priority
        />
      )}
    </div>
  );
};
