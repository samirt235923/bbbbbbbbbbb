import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Community College GPA Calculator – Calculate Your GPA Easily',
  description: 'Use our Community College GPA Calculator to calculate your GPA quickly. Enter your courses, grades, and credit hours to instantly calculate your community college GPA.',
  keywords: 'community college gpa calculator, calculate community college gpa, community college grade calculator, how to calculate gpa in community college, cumulative gpa calculator community college',
  openGraph: {
    title: 'Community College GPA Calculator – Calculate Your GPA Easily',
    description: 'Use our Community College GPA Calculator to calculate your GPA quickly. Enter your courses, grades, and credit hours to instantly calculate your community college GPA.',
    type: 'website',
    url: 'https://topgpacalculator.com/gpa-calculators/community-college-gpa-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Community College GPA Calculator – Calculate Your GPA Easily',
    description: 'Use our Community College GPA Calculator to calculate your GPA quickly. Enter your courses, grades, and credit hours to instantly calculate your community college GPA.',
  },
  alternates: {
    canonical: 'https://topgpacalculator.com/gpa-calculators/community-college-gpa-calculator',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}





