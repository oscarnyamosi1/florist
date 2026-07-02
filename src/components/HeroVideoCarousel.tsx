"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface TikTokVideo {
  id: string;
  title: string;
}

interface HeroVideoCarouselProps {
  videos: TikTokVideo[];
}

export default function HeroVideoCarousel({ videos }: HeroVideoCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto‑advance every 5 seconds
  useEffect(() => {
    if (videos.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [videos.length]);

  if (videos.length === 0) {
    return (
      <div className="relative w-full h-[100dvh] min-h-[600px] bg-zinc-900 flex items-center justify-center">
        <p className="text-white/60">No videos to display.</p>
      </div>
    );
  }

  return (
    <section className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden bg-zinc-900">
      {/* Video slides */}
      {videos.map((video, index) => (
        <div
          key={video.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <iframe
            src={`https://www.tiktok.com/embed/v2/${video.id}?lang=en-US`}
            className="absolute inset-0 w-full h-full"
            allowFullScreen
            loading="lazy"
            scrolling="no"
            title={video.title}
          />
        </div>
      ))}

      {/* Gradient Overlay (same as before) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-primary/30 to-transparent z-20" />

      {/* Content - exactly as before */}
      <div className="absolute z-30 top-1/2 left-0 -translate-y-1/2 w-full px-6">
        <div className="container mx-auto">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/50 rounded-full px-4 py-1.5 text-accent text-xs font-bold uppercase tracking-wider mb-6">
              <i className="fa-brands fa-tiktok"></i> As seen on TikTok
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Money Bouquets & <br /><span className="text-accent">Custom Flowers</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-lg">
              Nairobi&apos;s most beloved florist — folding Kenyan shillings into showstopping bouquets for life's most precious moments.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#order-form" 
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-primary/90 transition-transform active:scale-95"
              >
                <i className="fa-solid fa-gift"></i> Order Your Bouquet
              </a>
              <a 
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25d366] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-[#20bd5a] transition-transform active:scale-95"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i> Chat on WhatsApp
              </a>
            </div>

            <div className="mt-8 flex items-center gap-2 text-white/60 text-sm">
              <i className="fa-solid fa-circle-info"></i>
              Tap any video to play – slides auto‑advance.
            </div>
          </div>
        </div>
      </div>

      {/* Floating TikTok badge */}
      <a 
        href="https://tiktok.com/@abbywambui"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute z-30 bottom-8 right-6 bg-black/60 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3 flex items-center gap-3 text-white font-medium hover:bg-black/80 transition-colors hidden md:flex"
      >
        <i className="fa-brands fa-tiktok text-[#ee1d52] text-xl"></i>
        @abbywambui
      </a>

      {/* Slide indicators (dots) */}
      <div className="absolute z-30 bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-8 bg-primary" : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}