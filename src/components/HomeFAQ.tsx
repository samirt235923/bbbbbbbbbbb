'use client';

import dynamic from 'next/dynamic';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = dynamic(() => import('@/components/FAQ'), {
  ssr: false,
  loading: () => (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
        <p className="text-gray-600">Loading FAQs...</p>
      </div>
    </section>
  ),
});

export default function HomeFAQ({ items }: { items: FAQItem[] }) {
  return <FAQ items={items} />;
}
