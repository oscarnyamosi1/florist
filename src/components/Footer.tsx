import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f0505] text-white/60 py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 font-display font-bold text-xl tracking-tight text-white mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm">
                <i className="fa-solid fa-seedling"></i>
              </div>
              abbywambui
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Nairobi&apos;s most beloved florist — folding Kenyan shillings into showstopping bouquets and crafting custom flower arrangements for life's most precious moments.
            </p>
            <div className="flex gap-3">
              <a href="https://tiktok.com/@abbywambui" target="_blank" rel="noopener noreferrer" aria-label="Follow abbywambui on TikTok" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition-colors">
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a href="https://instagram.com/abbywambui" target="_blank" rel="noopener noreferrer" aria-label="Follow abbywambui on Instagram" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition-colors">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer" aria-label="Chat with abbywambui on WhatsApp" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition-colors">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-bold text-sm tracking-wider uppercase mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/#products" className="hover:text-white transition-colors">Shop Bouquets</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/#tiktok" className="hover:text-white transition-colors">Watch Us on TikTok</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold text-sm tracking-wider uppercase mb-5">Products</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/#products" className="hover:text-white transition-colors">Money Bouquets</Link></li>
              <li><Link href="/#products" className="hover:text-white transition-colors">Custom Fresh Flowers</Link></li>
              <li><Link href="/#products" className="hover:text-white transition-colors">Corporate Hampers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold text-sm tracking-wider uppercase mb-5">Policies</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/policies/no-refunds" className="hover:text-white transition-colors">No Refunds</Link></li>
              <li><Link href="/policies/returns" className="hover:text-white transition-colors">Returns & Replacements</Link></li>
              <li><Link href="/policies/cancellation" className="hover:text-white transition-colors">Cancellations</Link></li>
              <li><Link href="/policies/mpesa" className="hover:text-white transition-colors">M-Pesa Payments</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} abbywambui. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/policies/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/policies/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-md">
              <i className="fa-solid fa-mobile-screen-button text-[#4caf50]"></i>
              <span>Secure M-Pesa Payments</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
