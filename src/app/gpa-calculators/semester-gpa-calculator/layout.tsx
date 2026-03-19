import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Semester GPA Calculator - Calculate Your Term GPA Easily',
  description: 'Use our Semester GPA Calculator to calculate your GPA for a single term. Enter grades and credit hours to get accurate results instantly.',
  keywords: [
    'semester gpa calculator',
    'calculate semester gpa',
    'gpa calculator for semester',
    'college semester gpa calculator',
    'term gpa calculator',
  ],
  alternates: {
    canonical: 'https://topgpacalculator.com/gpa-calculators/semester-gpa-calculator',
  },
  openGraph: {
    title: 'Semester GPA Calculator - Calculate Your Term GPA Easily',
    description: 'Use our Semester GPA Calculator to calculate your GPA for a single term. Enter grades and credit hours to get accurate results instantly.',
    url: 'https://topgpacalculator.com/gpa-calculators/semester-gpa-calculator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Semester GPA Calculator - Calculate Your Term GPA Easily',
    description: 'Use our Semester GPA Calculator to calculate your GPA for a single term. Enter grades and credit hours to get accurate results instantly.',
  },
};

export default function SemesterGPACalculatorLayout({ children }: { children: ReactNode }) {
  return children;
}
