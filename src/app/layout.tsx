import type { Metadata, Viewport } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: 'GPA Calculator - Free & Accurate GPA Calculator for Students',
  description: 'Calculate your GPA instantly with our free GPA calculator. Perfect for college and high school students. Accurate, fast, and easy to use.',
  keywords: 'GPA calculator, calculate GPA, GPA tool, college GPA, high school GPA',
  openGraph: {
    title: 'GPA Calculator - Free & Accurate GPA Calculator for Students',
    description: 'Calculate your GPA instantly with our free GPA calculator.',
    url: 'https://toptopgpacalculator.com',
    siteName: 'GPA Calculator',
    images: [
      {
        url: 'https://toptopgpacalculator.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GPA Calculator - Free & Accurate GPA Calculator for Students',
    description: 'Calculate your GPA instantly with our free GPA calculator.',
    creator: '@gpacalculator',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://toptopgpacalculator.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0066cc" />
        <link rel="canonical" href="https://toptopgpacalculator.com" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}




