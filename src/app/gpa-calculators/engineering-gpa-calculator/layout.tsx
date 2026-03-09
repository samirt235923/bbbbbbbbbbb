import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engineering GPA Calculator – Calculate Your Engineering GPA Easily',
  description: 'Use our Engineering GPA Calculator to calculate your cumulative engineering GPA instantly. Enter engineering courses, credits, and grades to calculate GPA accurately.',
  keywords: 'engineering gpa calculator, calculate engineering gpa, engineering grade point calculator, how to calculate engineering gpa, engineering cumulative gpa calculator',
  openGraph: {
    title: 'Engineering GPA Calculator – Calculate Your Engineering GPA Easily',
    description: 'Use our Engineering GPA Calculator to calculate your cumulative engineering GPA instantly. Enter engineering courses, credits, and grades to calculate GPA accurately.',
    type: 'website',
    url: 'https://toptopgpacalculator.com/gpa-calculators/engineering-gpa-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering GPA Calculator – Calculate Your Engineering GPA Easily',
    description: 'Use our Engineering GPA Calculator to calculate your cumulative engineering GPA instantly. Enter engineering courses, credits, and grades to calculate GPA accurately.',
  },
  alternates: {
    canonical: 'https://toptopgpacalculator.com/gpa-calculators/engineering-gpa-calculator',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}




