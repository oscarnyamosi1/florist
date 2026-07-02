"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = isHome && !scrolled 
    ? "bg-transparent text-white" 
    : "bg-white/95 backdrop-blur-md text-foreground shadow-sm";

  const linkClass = isHome && !scrolled
    ? "text-white/90 hover:text-white"
    : "text-muted-foreground hover:text-foreground";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-display font-bold text-xl tracking-tight">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-lg">
            <i className="fa-solid fa-seedling"></i>
          </div>
          <span className={isHome && !scrolled ? "text-white" : "text-foreground"}>
            abbywambui
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          {isHome ? (
            <>
              <a href="#products" className={`transition-colors ${linkClass}`}>Shop</a>
              <a href="#tiktok" className={`transition-colors ${linkClass}`}>TikTok</a>
              <a href="#how-it-works" className={`transition-colors ${linkClass}`}>How It Works</a>
            </>
          ) : (
            <>
              <Link href="/#products" className={`transition-colors ${linkClass}`}>Shop</Link>
              <Link href="/#tiktok" className={`transition-colors ${linkClass}`}>TikTok</Link>
              <Link href="/#how-it-works" className={`transition-colors ${linkClass}`}>How It Works</Link>
            </>
          )}
          <Link href="/policies/terms" className={`transition-colors ${linkClass}`}>Policies</Link>
          <a 
            href="https://wa.me/254700000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 hover:bg-primary/90 transition-transform active:scale-95"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
            Order Now
          </a>
        </nav>
      </div>
    </header>
  );
}
