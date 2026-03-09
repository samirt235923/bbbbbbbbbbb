import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cumulative GPA Calculator (Accurate & Free)',
  description: 'Calculate your cumulative GPA across all semesters and years. Track your overall academic performance with our free calculator.',
  keywords: 'cumulative gpa calculator, overall gpa, cumulative gpa, total gpa',
  openGraph: {
    title: 'Cumulative GPA Calculator (Accurate & Free)',
    description: 'Calculate your cumulative GPA across all semesters and years.',
    type: 'website',
    url: 'https://gpacalculator.com/gpa-calculators/cumulative-gpa-calculator',
    images: [
      {
        url: 'https://gpacalculator.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cumulative GPA Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cumulative GPA Calculator (Accurate & Free)',
    description: 'Calculate your cumulative GPA across all semesters and years.',
    images: ['https://gpacalculator.com/og-image.png'],
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://gpacalculator.com/gpa-calculators/cumulative-gpa-calculator',
  },
};

export default function CumulativeGPACalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}