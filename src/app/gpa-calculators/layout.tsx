import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All GPA Calculators - 50+ Free Tools | GPA Calculator',
  description: 'Browse all 50+ free GPA calculators. Find the perfect calculator for college GPA, high school GPA, weighted GPA, and more.',
  keywords: 'GPA calculators, GPA calculator tools, college GPA calculator, high school GPA calculator, weighted GPA calculator',
  openGraph: {
    title: 'All GPA Calculators - 50+ Free Tools | GPA Calculator',
    description: 'Browse all 50+ free GPA calculators. Find the perfect calculator for college GPA, high school GPA, weighted GPA, and more.',
    type: 'website',
    url: 'https://topgpacalculator.com/gpa-calculators',
    images: [
      {
        url: 'https://topgpacalculator.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'All GPA Calculators',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All GPA Calculators - 50+ Free Tools | GPA Calculator',
    description: 'Browse all 50+ free GPA calculators. Find the perfect calculator for college GPA, high school GPA, weighted GPA, and more.',
    images: ['https://topgpacalculator.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://topgpacalculator.com/gpa-calculators',
  },
};

export default function GPACalculatorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>{children}</main>
  );
}





