"use client";

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { calculatorData } from '@/data/calculators';

export default function GPACalculatorsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredCalculators = useMemo(() => {
    if (!normalizedQuery) return calculatorData;
    return calculatorData.filter((calc) => {
      const name = calc.name.toLowerCase();
      const description = (calc.description ?? '').toLowerCase();
      return name.includes(normalizedQuery) || description.includes(normalizedQuery);
    });
  }, [normalizedQuery]);

  const featuredCalculators = useMemo(() => filteredCalculators.slice(0, 6), [filteredCalculators]);

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-gray-200 py-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/></svg></li>
            <li className="text-gray-900 font-medium">GPA Calculators</li>
          </ol>
        </div>
      </nav>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All GPA Calculators</h1>
          <p className="text-lg text-gray-600 mb-10">
            Choose the calculator that fits your needs. All tools are free and work instantly.
          </p>

          {/* Search/Filter */}
          <div className="mb-8">
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search calculators..."
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Featured Calculators */}
          {featuredCalculators.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Calculators</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featuredCalculators.map((calc) => (
                  <Link
                    key={calc.id}
                    href={`/gpa-calculators/${calc.id}`}
                    className="group block rounded-2xl border border-gray-200 bg-white p-6 hover:border-blue-500 hover:shadow-lg transition"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                      {calc.name}
                    </h3>
                    <p className="text-sm text-gray-600">{calc.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* All Calculators */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">All Calculators</h2>
            {filteredCalculators.length === 0 ? (
              <p className="text-gray-600">No calculators matched your search. Try a different keyword.</p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredCalculators.map((calc) => (
                  <Link
                    key={calc.id}
                    href={`/gpa-calculators/${calc.id}`}
                    className="group block rounded-2xl border border-gray-200 bg-white p-6 hover:border-blue-500 hover:shadow-lg transition"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                      {calc.name}
                    </h3>
                    <p className="text-sm text-gray-600">{calc.description}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "All GPA Calculators",
            "description": "Browse all 50+ free GPA calculators. Find the perfect calculator for college GPA, high school GPA, weighted GPA, and more.",
            "url": "https://topgpacalculator.com/gpa-calculators",
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": calculatorData.length,
              "itemListElement": calculatorData.map((calc, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": calc.name,
                "url": `https://topgpacalculator.com/gpa-calculators/${calc.id}`
              }))
            }
          })
        }}
      />
    </div>
  );
}

