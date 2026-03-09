import Link from 'next/link';
import type { Metadata } from 'next';
import { calculatorData } from '@/data/calculators';

export const metadata: Metadata = {
  title: 'All GPA Calculators - 50+ Free Tools | GPA Calculator',
  description: 'Browse all 50+ free GPA calculators. Find the perfect calculator for college GPA, high school GPA, weighted GPA, and more.',
  alternates: {
    canonical: 'https://gpacalculator.com/gpa-calculators',
  },
};

export default function CalculatorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://gpacalculator.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Calculators',
                item: 'https://gpacalculator.com/gpa-calculators',
              },
            ],
          }),
        }}
      />

      <div className="bg-white">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">All GPA Calculators</h1>
            <p className="text-xl text-blue-100">
              Choose from 50+ free GPA calculators for every situation
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <p className="text-gray-700 text-lg">
                We offer specialized GPA calculators for every type of student - from high school students calculating their unweighted GPA, to college students tracking semester performance, to pre-med and pre-law students preparing for professional school applications.
              </p>
            </div>

            {/* Calculator Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {calculatorData.map((calc) => (
                <Link
                  key={calc.id}
                  href={`/gpa-calculators/${calc.id}`}
                  className="card p-6 hover:shadow-xl transition h-full flex flex-col"
                >
                  <h3 className="text-xl font-bold text-blue-600 mb-3">{calc.name}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{calc.description}</p>
                  <span className="text-blue-600 font-semibold hover:underline inline-block mt-auto">
                    Open Calculator →
                  </span>
                </Link>
              ))}
            </div>

            {/* Info Section */}
            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Categories</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ <strong>By School Type:</strong> College, High School, University, Community College</li>
                  <li>✓ <strong>By GPA Type:</strong> Weighted, Unweighted, Cumulative, Semester</li>
                  <li>✓ <strong>By Specialization:</strong> Pre-Med, Pre-Law, Engineering, Nursing</li>
                  <li>✓ <strong>By Purpose:</strong> Scholarships, Admissions, Goal Setting</li>
                  <li>✓ <strong>By Year:</strong> Freshman, Sophomore, Junior, Senior</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Features</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ <strong>Instant Calculation:</strong> Get results in seconds</li>
                  <li>✓ <strong>100% Free:</strong> No registration or sign-up</li>
                  <li>✓ <strong>Mobile Friendly:</strong> Works on all devices</li>
                  <li>✓ <strong>Accurate Results:</strong> Uses standard formulas</li>
                  <li>✓ <strong>No Ads to Click:</strong> Just the tool you need</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* AdSense */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-8 text-center">
              <p className="text-gray-600">Advertisement Space</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
