"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function OrderForm() {
  const [occasion, setOccasion] = useState("Surprise Me");
  const [budget, setBudget] = useState("5K–10K");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      toast.error("Please fill in your name and WhatsApp number.");
      return;
    }
    const message = `Hi Abby! I'd like to order a custom bouquet.\nOccasion: ${occasion}\nBudget: KES ${budget}\nName: ${name}\nPhone: ${phone}\nNotes: ${notes}`;
    const url = `https://wa.me/254700000000?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleMpesaClick = () => {
    toast.success("M-Pesa payment will be arranged by Abby after your order is confirmed on WhatsApp.");
  };

  return (
    <div className="bg-card rounded-[2rem] p-8 md:p-10 shadow-xl border border-border/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10" />
      <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
        Build Your Bouquet
      </h3>
      <p className="text-muted-foreground mb-8 text-sm">
        Select options to generate your WhatsApp message.
      </p>

      <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
        {/* Occasion buttons */}
        <div>
          <label className="block text-sm font-bold text-foreground mb-3">Occasion</label>
          <div className="flex flex-wrap gap-2">
            {["Birthday", "Anniversary", "Graduation", "Baby Shower", "Corporate", "Surprise Me"].map((occ) => (
              <button
                key={occ}
                type="button"
                onClick={() => setOccasion(occ)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  occasion === occ
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {occ}
              </button>
            ))}
          </div>
        </div>

        {/* Budget buttons */}
        <div>
          <label className="block text-sm font-bold text-foreground mb-3">Budget Estimate</label>
          <div className="grid grid-cols-2 gap-2">
            {["2,500–5K", "5K–10K", "10K–20K", "20K+"].map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => setBudget(amt)}
                className={`px-4 py-3 rounded-xl text-sm font-bold border-2 transition-all ${
                  budget === amt
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-transparent bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                KES {amt}
              </button>
            ))}
          </div>
        </div>

        {/* Name & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="order-name" className="block text-sm font-bold text-foreground mb-2">
              Your Name
            </label>
            <input
              id="order-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Wanjiku"
              className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div>
            <label htmlFor="order-phone" className="block text-sm font-bold text-foreground mb-2">
              WhatsApp Number
            </label>
            <input
              id="order-phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="07XX XXX XXX"
              className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>

        {/* Notes */}
        <div>
          <label htmlFor="order-notes" className="block text-sm font-bold text-foreground mb-2">
            Special Instructions <span className="text-muted-foreground font-normal">(Optional)</span>
          </label>
          <textarea
            id="order-notes"
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Specific flowers, colours, or delivery notes..."
            className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none text-foreground placeholder:text-muted-foreground"
          />
        </div>

        <div className="pt-4 space-y-3">
          <button
            type="submit"
            className="w-full bg-[#25d366] text-white rounded-xl py-4 font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors shadow-sm"
          >
            <i className="fa-brands fa-whatsapp text-xl"></i> Send Order on WhatsApp
          </button>
          <button
            type="button"
            onClick={handleMpesaClick}
            className="w-full bg-emerald-700/10 text-emerald-800 dark:text-emerald-400 rounded-xl py-3 font-bold text-sm flex items-center justify-center gap-2 hover:bg-emerald-700/20 transition-colors"
          >
            <i className="fa-solid fa-mobile-screen-button"></i> Pay with M-Pesa STK Push
          </button>
        </div>
      </form>
    </div>
  );
}