import type { Metadata } from 'next';
import { Space_Grotesk, DM_Sans } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'abbywambui – Money Bouquets & Custom Flowers',
  description: 'Nairobi\'s most beloved florist — vivid, joyful creator who folds Kenyan shillings into showstopping bouquets and crafts custom flower arrangements.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} scroll-smooth`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className="font-sans antialiased min-h-[100dvh] flex flex-col">
        {children}
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}