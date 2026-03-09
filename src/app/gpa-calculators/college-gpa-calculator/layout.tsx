import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'College GPA Calculator (Accurate & Free) – Calculate Your GPA Online',
  description: 'Use our free College GPA Calculator to calculate your GPA instantly. Enter your courses, grades, and credit hours to get an accurate GPA for college.',
  keywords: 'college gpa calculator, calculate college gpa, how to calculate college gpa, gpa calculator for college students, free college gpa calculator',
  openGraph: {
    title: 'College GPA Calculator (Accurate & Free) – Calculate Your GPA Online',
    description: 'Use our free College GPA Calculator to calculate your GPA instantly. Enter your courses, grades, and credit hours to get an accurate GPA for college.',
    type: 'website',
    url: 'https://topgpacalculator.com/gpa-calculators/college-gpa-calculator',
    images: [
      {
        url: 'https://topgpacalculator.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'College GPA Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'College GPA Calculator (Accurate & Free) – Calculate Your GPA Online',
    description: 'Use our free College GPA Calculator to calculate your GPA instantly. Enter your courses, grades, and credit hours to get an accurate GPA for college.',
    images: ['https://topgpacalculator.com/og-image.png'],
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://topgpacalculator.com/gpa-calculators/college-gpa-calculator',
  },
};

export default function CollegeGPACalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>{children}</main>
  );
}



