'use client';

import dynamic from 'next/dynamic';

const GPACalculator = dynamic(() => import('@/components/GPACalculator'), {
  ssr: false,
  loading: () => (
    <div className="card p-8 text-center text-secondary-600 min-h-[420px] flex items-center justify-center">
      Loading calculator...
    </div>
  ),
});

export default function HomeCalculator() {
  return <GPACalculator />;
}
