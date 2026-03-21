import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | GPA Calculator',
  description: 'Contact the GPA Calculator team for support, feedback, or questions.',
  alternates: {
    canonical: 'https://topgpacalculator.com/contact',
  },
  openGraph: {
    title: 'Contact Us | GPA Calculator',
    description: 'Contact the GPA Calculator team for support, feedback, or questions.',
    url: 'https://topgpacalculator.com/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
