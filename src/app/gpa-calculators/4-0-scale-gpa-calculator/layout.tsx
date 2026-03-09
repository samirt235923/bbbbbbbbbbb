import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '4.0 GPA Calculator – Calculate GPA on a 4.0 Scale',
  description: 'Use our 4.0 GPA Calculator to calculate your GPA using the standard 4.0 grading scale. Enter courses, credits, and grades to instantly calculate your GPA.',
  keywords: '4.0 gpa calculator, gpa calculator 4.0 scale, calculate gpa on 4.0 scale, college gpa calculator 4.0 scale, how to calculate gpa on a 4.0 scale',
  openGraph: {
    title: '4.0 GPA Calculator – Calculate GPA on a 4.0 Scale',
    description: 'Use our 4.0 GPA Calculator to calculate your GPA using the standard 4.0 grading scale. Enter courses, credits, and grades to instantly calculate your GPA.',
    type: 'website',
    url: 'https://topgpacalculator.com/gpa-calculators/4-0-scale-gpa-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: '4.0 GPA Calculator – Calculate GPA on a 4.0 Scale',
    description: 'Use our 4.0 GPA Calculator to calculate your GPA using the standard 4.0 grading scale. Enter courses, credits, and grades to instantly calculate your GPA.',
  },
  alternates: {
    canonical: 'https://topgpacalculator.com/gpa-calculators/4-0-scale-gpa-calculator',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}





