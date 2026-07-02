"use client";
import Navbar  from "@/components/Navbar";
import Footer  from "@/components/Footer";
// import HeroCarousel  from "@/components/HeroCarousel";
import TikTokCarousel  from "@/components/TikTokCarousel";
import OrderForm  from "@/components/OrderForm";
import {tiktokVideos}  from "@/data/tiktokVideos";
import HeroVideoCarousel from "@/components/HeroVideoCarousel";
import Image from "next/image";
// import Link from "next/link";

// Hero Images (move to a data file if you prefer)


// const heroImages = [
//   "https://storage.googleapis.com/banani-generated-images/generated-images/e6ca1c3e-f90e-49d7-a1f7-7da38803a10d.jpg",
//   "https://storage.googleapis.com/banani-generated-images/generated-images/6e890a9b-eb15-4498-b630-9ca21c341e23.jpg",
//   "https://storage.googleapis.com/banani-generated-images/generated-images/029cd21d-59e7-4da9-8307-2c85449c13c2.jpg",
//   "https://storage.googleapis.com/banani-generated-images/generated-images/6065463c-9c7a-46e4-991d-b5d4dd299425.jpg"
// ];

// Product data (can also be moved)
const products = [
  {
    id: 1,
    name: "Classic Money Bouquet",
    tag: "Money Bouquet",
    price: "From KES 5,500",
    image: "https://storage.googleapis.com/banani-generated-images/generated-images/8d9959c1-0db3-4af5-8d02-d6de8c292814.jpg",
  },
  {
    id: 2,
    name: "Toilet Paper Bouquet",
    tag: "Money Bouquet",
    price: "From KES 5,500",
    image: "/pictures/Screenshot_20260702_031319_TikTok.png",
  },
  {
    id: 3,
    name: "Cake Tier Money Bouquet",
    tag: "Money Bouquet",
    price: "From KES 5,500",
    image: "/pictures/Screenshot_20260702_031430_TikTok.png",
  },
  {
    id: 4,
    name: "Custom Bouquet",
    tag: "Money Bouquet",
    price: "From KES 5,500",
    image: "https://storage.googleapis.com/banani-generated-images/generated-images/8d9959c1-0db3-4af5-8d02-d6de8c292814.jpg",
  },
  // ... other products
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section – now a client component */}
      {/* <HeroCarousel images={heroImages} /> */}
            <HeroVideoCarousel videos={tiktokVideos} />

      {/* Delivery Banner (static) */}
      <div className="bg-primary py-4 px-6 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="container mx-auto flex items-center justify-center md:justify-between gap-8 text-primary-foreground font-medium text-sm">
          <div className="flex items-center gap-2"><i className="fa-solid fa-truck-fast opacity-80"></i> Same-day delivery in Nairobi</div>
          <div className="w-px h-5 bg-white/30 hidden md:block"></div>
          <div className="flex items-center gap-2"><i className="fa-brands fa-whatsapp opacity-80 text-lg"></i> Order via WhatsApp</div>
          {/* <div className="w-px h-5 bg-white/30 hidden md:block"></div> */}
          {/* <div className="flex items-center gap-2"><i className="fa-solid fa-mobile-screen-button opacity-80"></i> Pay with M-Pesa STK Push</div> */}
          <div className="w-px h-5 bg-white/30 hidden lg:block"></div>
          <div className="items-center gap-2 hidden lg:flex"><i className="fa-solid fa-location-dot opacity-80"></i> Nairobi · Kiambu · Thika</div>
        </div>
      </div>

      {/* Products Section (static, but product cards can be server-rendered) */}
      <section id="products" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-3 block">Made with Love & Money</span>
            <h2 className="text-4xl font-bold tracking-tight text-foreground">Our Signature Collections</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-card rounded-3xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-primary font-bold text-xs tracking-wider uppercase mb-2 block">{product.tag}</span>
                  <h3 className="text-lg font-bold mb-1 text-foreground">{product.name}</h3>
                  <p className="text-muted-foreground font-medium mb-6">{product.price}</p>
                  <a 
                    href={`https://wa.me/254700000000?text=${encodeURIComponent(`Hi Abby! I'd like to order a ${product.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25d366]/10 text-[#25d366] hover:bg-[#25d366] hover:text-white px-4 py-3 rounded-full font-bold flex items-center justify-center gap-2 transition-colors"
                  >
                    <i className="fa-brands fa-whatsapp text-lg"></i> Order via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works (static) */}
      <section id="how-it-works" className="py-24 px-6 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">How Ordering Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Fast, simple, and personal. From your screen to their hands in just a few steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Steps ... (same as before) */}
          </div>
        </div>
      </section>

      {/* Order Form Section – client component */}
      <section id="order-form" className="py-24 px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left info side (static) */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                Place Your <span className="text-primary">Custom Order</span> Right Now
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Skip the back-and-forth. Build your order here and instantly send it to Abby&apos;s WhatsApp for quick confirmation.
              </p>

              <div className="space-y-8">
                {/* Info items ... (same) */}
              </div>
            </div>

            {/* Form – client component */}
            <OrderForm />
          </div>
        </div>
      </section>

      {/* TikTok Section – client component with carousel */}
      <section id="tiktok" className="py-24 px-6 bg-background">
        <div className="container mx-auto">
          <TikTokCarousel videos={tiktokVideos} />
        </div>
      </section>

      {/* Testimonials (static) */}
      <section className="py-24 px-6 bg-muted/50">
        {/* ... same as before ... */}
      </section>

      {/* Policies (static) */}
      <section id="policies" className="py-24 px-6 bg-[#1a0a0a]">
        {/* ... same as before ... */}
      </section>

      <Footer />
    </>
  );
}