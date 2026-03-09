import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nursing GPA Calculator – Free Tool for Nursing School Applicants',
  description: 'Use our Nursing GPA Calculator to calculate your GPA for nursing school applications. Enter courses, grades, and credit hours to get your accurate nursing GPA instantly.',
  keywords: 'nursing gpa calculator, calculate nursing school gpa, nursing prerequisite gpa calculator, nursing admission gpa calculator, how to calculate nursing gpa',
  openGraph: {
    title: 'Nursing GPA Calculator – Free Tool for Nursing School Applicants',
    description: 'Use our Nursing GPA Calculator to calculate your GPA for nursing school applications. Enter courses, grades, and credit hours to get your accurate nursing GPA instantly.',
    url: 'https://topgpacalculator.com/nursing-gpa-calculator',
    siteName: 'GPA Calculator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nursing GPA Calculator – Free Tool for Nursing School Applicants',
    description: 'Use our Nursing GPA Calculator to calculate your GPA for nursing school applications. Enter courses, grades, and credit hours to get your accurate nursing GPA instantly.',
  },
  alternates: {
    canonical: 'https://topgpacalculator.com/nursing-gpa-calculator',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}



