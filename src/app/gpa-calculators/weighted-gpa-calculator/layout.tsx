import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weighted GPA Calculator – Free & Accurate GPA Tool',
  description: 'Use our Weighted GPA Calculator to calculate your GPA with Honors and AP classes. Enter courses, grades, and credit hours to get your weighted GPA instantly.',
  keywords: 'weighted gpa calculator, calculate weighted gpa, weighted gpa formula, weighted gpa calculator high school, how to calculate weighted gpa',
  openGraph: {
    title: 'Weighted GPA Calculator – Free & Accurate GPA Tool',
    description: 'Use our Weighted GPA Calculator to calculate your GPA with Honors and AP classes. Enter courses, grades, and credit hours to get your weighted GPA instantly.',
    url: 'https://yourwebsite.com/weighted-gpa-calculator',
    siteName: 'GPA Calculator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weighted GPA Calculator – Free & Accurate GPA Tool',
    description: 'Use our Weighted GPA Calculator to calculate your GPA with Honors and AP classes. Enter courses, grades, and credit hours to get your weighted GPA instantly.',
  },
  alternates: {
    canonical: 'https://yourwebsite.com/weighted-gpa-calculator',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}