import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Medical School GPA Calculator – Calculate Your Pre-Med GPA',
  description: 'Use our Medical School GPA Calculator to calculate your overall GPA and science GPA for medical school applications. Enter courses, grades, and credits to get your GPA instantly.',
  keywords: 'medical school gpa calculator, pre med gpa calculator, calculate gpa for medical school, science gpa calculator, how to calculate pre med gpa',
  openGraph: {
    title: 'Medical School GPA Calculator – Calculate Your Pre-Med GPA',
    description: 'Use our Medical School GPA Calculator to calculate your overall GPA and science GPA for medical school applications. Enter courses, grades, and credits to get your GPA instantly.',
    type: 'website',
    url: 'https://toptopgpacalculator.com/gpa-calculators/medical-school-gpa-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical School GPA Calculator – Calculate Your Pre-Med GPA',
    description: 'Use our Medical School GPA Calculator to calculate your overall GPA and science GPA for medical school applications. Enter courses, grades, and credits to get your GPA instantly.',
  },
  alternates: {
    canonical: 'https://toptopgpacalculator.com/gpa-calculators/medical-school-gpa-calculator',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}




