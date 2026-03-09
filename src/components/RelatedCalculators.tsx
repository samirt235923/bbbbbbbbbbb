import Link from 'next/link';
import { calculatorData } from '@/data/calculators';

interface RelatedCalculatorsProps {
  relatedIds: string[];
  maxCards?: number;
}

export default function RelatedCalculators({ relatedIds, maxCards = 5 }: RelatedCalculatorsProps) {
  const relatedCalcs = relatedIds
    .map((id) => calculatorData.find((calc) => calc.id === id))
    .filter(Boolean)
    .slice(0, maxCards);

  return (
    <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Related Calculators</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {relatedCalcs.map((calc) => (
            <Link
              key={calc?.id}
              href={`/gpa-calculators/${calc?.id}`}
              className="p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-lg transition group"
            >
              <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition mb-2">
                {calc?.name}
              </h3>
              <p className="text-sm text-gray-600">
                {calc?.description?.substring(0, 60)}...
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}





