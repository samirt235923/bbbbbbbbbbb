import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Law School GPA Calculator – Calculate Your LSAC GPA',
  description: 'Use our Law School GPA Calculator to estimate your GPA for law school applications. Enter your courses, grades, and credits to calculate your LSAC-style GPA.',
  keywords: 'law school gpa calculator, calculate law school gpa, lsac gpa calculator, law school admission gpa calculator, how to calculate gpa for law school',
  openGraph: {
    title: 'Law School GPA Calculator – Calculate Your LSAC GPA',
    description: 'Use our Law School GPA Calculator to estimate your GPA for law school applications. Enter your courses, grades, and credits to calculate your LSAC-style GPA.',
    url: 'https://yourwebsite.com/law-school-gpa-calculator',
    siteName: 'GPA Calculator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Law School GPA Calculator – Calculate Your LSAC GPA',
    description: 'Use our Law School GPA Calculator to estimate your GPA for law school applications. Enter your courses, grades, and credits to calculate your LSAC-style GPA.',
  },
  alternates: {
    canonical: 'https://yourwebsite.com/law-school-gpa-calculator',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}