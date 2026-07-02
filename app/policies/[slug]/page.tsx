import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import  Navbar from "@/components/Navbar";
import  Footer from "@/components/Footer";

const policies = {
  "no-refunds": {
    title: "No Refunds Policy",
    content: (
      <>
        <p>Due to the perishable and custom nature of our bouquets, we do not offer refunds. Damaged items replaced within 24 hours with photo proof. Change of mind cancellations receive store credit only.</p>
        
        <h3 className="text-xl font-bold mt-8 mb-4">Why We Can&apos;t Offer Refunds</h3>
        <p>Our floral arrangements and money bouquets are crafted specifically for each order using fresh materials and verified currency. Once prepared or dispatched, these custom creations cannot be restocked or reused.</p>
        
        <h3 className="text-xl font-bold mt-8 mb-4">Damaged Items</h3>
        <p>If your arrangement arrives damaged due to transit issues, please report it to us within 2 hours of delivery, including clear photos. We will arrange a replacement to be delivered within 24 hours.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">Store Credit Policy</h3>
        <p>In certain extenuating circumstances where cancellation is approved, we will issue a store credit valid for 6 months. This credit cannot be exchanged for cash or M-Pesa reversals.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">Contact Information</h3>
        <p>For any urgent queries regarding an order you&apos;ve just received, please contact our WhatsApp line immediately at <a href="https://wa.me/254700000000" className="text-primary hover:underline">+254 700 000 000</a>.</p>
      </>
    )
  },
  "returns": {
    title: "Returns & Replacements",
    content: (
      <>
        <p>Damaged arrangements may be replaced — not refunded. Photos must be submitted within 2 hours of delivery. Replacements dispatched within 24 hours upon verification.</p>
        
        <h3 className="text-xl font-bold mt-8 mb-4">Replacement Eligibility</h3>
        <p>To be eligible for a replacement, the arrangement must be significantly damaged during transit or incorrect items must have been delivered. Wilting of fresh flowers after 24 hours of successful delivery is natural and not eligible for replacement.</p>
        
        <h3 className="text-xl font-bold mt-8 mb-4">How to Report Damage</h3>
        <p>Send a WhatsApp message within 2 hours of delivery with:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Your order details</li>
          <li>At least 2 clear photos showing the damage or issue</li>
          <li>A brief description of the problem</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">Replacement Timeline</h3>
        <p>Once verified and approved, we will prioritize your replacement and have it dispatched within 24 hours to the original delivery address at no extra cost.</p>
        
        <h3 className="text-xl font-bold mt-8 mb-4">Exclusions</h3>
        <p>We do not accept returns on money bouquets once they have been handed over and accepted. Please inspect your money bouquet carefully upon delivery.</p>
      </>
    )
  },
  "cancellation": {
    title: "Order Cancellation Policy",
    content: (
      <>
        <p>Full store credit if cancelled 48+ hours before delivery. Rush orders (under 24 hours) cannot be cancelled once confirmed. Store credit valid 6 months.</p>
        
        <h3 className="text-xl font-bold mt-8 mb-4">Cancellation Windows</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>48+ Hours Notice:</strong> Eligible for full store credit.</li>
          <li><strong>24-48 Hours Notice:</strong> Eligible for 50% store credit (to cover material costs already incurred).</li>
          <li><strong>Less than 24 Hours Notice:</strong> No cancellation allowed.</li>
        </ul>
        
        <h3 className="text-xl font-bold mt-8 mb-4">Rush Order Policy</h3>
        <p>Any order placed for same-day delivery or within a 24-hour window is considered a &quot;Rush Order.&quot; These are immediately put into production and cannot be cancelled or modified once payment is confirmed.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">Store Credit Terms</h3>
        <p>Store credit issued from a cancellation will be linked to your WhatsApp number and is valid for 6 months from the date of issue. To redeem, simply mention your credit during your next WhatsApp order.</p>
      </>
    )
  },
  "privacy": {
    title: "Privacy Policy",
    content: (
      <>
        <p>Your WhatsApp number, delivery address, and payment details are used solely for order fulfilment. Never shared, sold, or stored without consent. No M-Pesa PIN is ever seen or stored. Compliant with Kenyan data protection laws.</p>
        
        <h3 className="text-xl font-bold mt-8 mb-4">Information We Collect</h3>
        <p>We collect only what is necessary to complete your order: your name, the recipient&apos;s name and delivery address, contact phone numbers, and any specific notes or card messages you provide.</p>
        
        <h3 className="text-xl font-bold mt-8 mb-4">How We Use It</h3>
        <p>This information is used strictly to arrange your bouquet, process your M-Pesa payment, and ensure smooth delivery by our riders. Occasionally, we may send you a WhatsApp message with a special offer, which you can opt out of at any time.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">Data Security</h3>
        <p>We treat your order details with absolute confidentiality. We do not maintain a public database of customer addresses. Money bouquet amounts are kept strictly private between the buyer, Abby, and the recipient.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">Your Rights</h3>
        <p>You have the right to request the deletion of your order history and chat records at any time. Simply message us on WhatsApp with your request.</p>
      </>
    )
  },
  "terms": {
    title: "Terms of Service",
    content: (
      <>
        <p>Delivery covers Nairobi, Kiambu, and Thika. Orders placed before 12PM get same-day delivery. Company not liable for delays caused by third-party delivery partners.</p>
        
        <h3 className="text-xl font-bold mt-8 mb-4">Service Area</h3>
        <p>Our standard delivery zones include the greater Nairobi metropolitan area, Kiambu, and Thika. Deliveries outside these areas may be arranged upon special request but are subject to availability and additional courier fees.</p>
        
        <h3 className="text-xl font-bold mt-8 mb-4">Order Cutoff Times</h3>
        <p>For same-day delivery, your order must be finalized and paid for via M-Pesa by 12:00 PM EAT. Orders placed after noon will be scheduled for the following day or an agreed-upon future date.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">Delivery Policy</h3>
        <p>We rely on trusted third-party riders and couriers. While we strive to meet specific delivery time windows, traffic and weather conditions in Nairobi can be unpredictable. We appreciate a grace period of up to 2 hours for delivery windows.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">Liability</h3>
        <p>abbywambui is not liable for delayed deliveries caused by inaccurate address details provided by the customer, unavailability of the recipient, or severe weather events.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">Governing Law</h3>
        <p>These terms are governed by and construed in accordance with the laws of Kenya.</p>
      </>
    )
  },
  "mpesa": {
    title: "M-Pesa Payment Policy",
    content: (
      <>
        <p>All payments processed through official Safaricom M-Pesa Daraja APIs. abbywambui never stores or sees your PIN. STK push sent directly to your registered M-Pesa phone.</p>
        
        <h3 className="text-xl font-bold mt-8 mb-4">How M-Pesa Payments Work</h3>
        <p>When you confirm your order with us on WhatsApp, we will trigger an M-Pesa STK Push directly to your phone number, or provide our official Till Number for manual payment.</p>
        
        <h3 className="text-xl font-bold mt-8 mb-4">STK Push Process</h3>
        <p>A prompt will appear on your phone screen displaying the total amount due to &quot;ABBYWAMBUI FLORALS&quot; You will only need to enter your M-Pesa PIN on your own device to authorize the transaction.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">Security</h3>
        <p>We have absolutely no access to your M-Pesa PIN or account balance. The transaction is fully encrypted and handled entirely by Safaricom.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">Failed Payments</h3>
        <p>If an STK push fails or times out, please let us know on WhatsApp and we will initiate another request, or you can opt to pay manually via our Till Number.</p>

        <h3 className="text-xl font-bold mt-8 mb-4">Refunds & M-Pesa</h3>
        <p>As per our No Refunds Policy, we generally do not process cash or M-Pesa reversals. In the rare event a reversal is required (e.g., duplicate accidental payment), it will be processed directly to the originating M-Pesa number within 24 hours.</p>
      </>
    )
  }
};

export default function PolicyPage({ params }: { params: { slug: string } }) {
  const policy = policies[params.slug as keyof typeof policies];

  if (!policy) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-[calc(100vh-400px)]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-12 border-b border-border pb-8">
            <Link href="/#policies" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
              <i className="fa-solid fa-arrow-left"></i> Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{policy.title}</h1>
          </div>
          
          <div className="prose prose-pink prose-lg max-w-none text-muted-foreground prose-headings:text-foreground">
            {policy.content}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
