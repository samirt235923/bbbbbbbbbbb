'use client';

import React, { useState, useEffect } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import SEOHead from '@/components/SEOHead';
import FAQ from '@/components/FAQ';
import { FAQSchema, ArticleSchema } from '@/components/SchemaMarkup';
import RelatedCalculators from '@/components/RelatedCalculators';

export default function GPAPercentageCalculator() {
  const [gpaValue, setGpaValue] = useState<string>('');
  const [percentageValue, setPercentageValue] = useState<string>('');
  const [gpaScale, setGpaScale] = useState<string>('4.0');
  const [conversionMode, setConversionMode] = useState<'gpa-to-percentage' | 'percentage-to-gpa'>('gpa-to-percentage');
  const [result, setResult] = useState<{gpa?: number; percentage?: number}>({});

  // Conversion formulas
  const convertGpaToPercentage = (gpa: number, scale: string): number => {
    switch (scale) {
      case '4.0':
        return (gpa / 4.0) * 100;
      case '5.0':
        return (gpa / 5.0) * 100;
      case '10.0':
        return gpa * 10;
      default:
        return 0;
    }
  };

  const convertPercentageToGpa = (percentage: number, scale: string): number => {
    switch (scale) {
      case '4.0':
        return (percentage / 100) * 4;
      case '5.0':
        return (percentage / 100) * 5;
      case '10.0':
        return percentage / 10;
      default:
        return 0;
    }
  };

  // Calculate on input change
  useEffect(() => {
    if (conversionMode === 'gpa-to-percentage' && gpaValue) {
      const gpa = parseFloat(gpaValue);
      if (!isNaN(gpa) && gpa >= 0) {
        const percentage = convertGpaToPercentage(gpa, gpaScale);
        setResult({ percentage: Math.round(percentage * 100) / 100 });
      } else {
        setResult({});
      }
    } else if (conversionMode === 'percentage-to-gpa' && percentageValue) {
      const percentage = parseFloat(percentageValue);
      if (!isNaN(percentage) && percentage >= 0 && percentage <= 100) {
        const gpa = convertPercentageToGpa(percentage, gpaScale);
        setResult({ gpa: Math.round(gpa * 100) / 100 });
      } else {
        setResult({});
      }
    } else {
      setResult({});
    }
  }, [gpaValue, percentageValue, gpaScale, conversionMode]);

  const clearCalculator = () => {
    setGpaValue('');
    setPercentageValue('');
    setResult({});
  };

  const conversionTable = [
    { gpa: 4.0, percentage: 100 },
    { gpa: 3.8, percentage: 95 },
    { gpa: 3.5, percentage: 87.5 },
    { gpa: 3.2, percentage: 80 },
    { gpa: 3.0, percentage: 75 },
    { gpa: 2.5, percentage: 62.5 },
    { gpa: 2.0, percentage: 50 },
  ];

  const faqData = [
    {
      question: "How do you convert GPA to percentage?",
      answer: "To convert GPA to percentage, divide your GPA by the scale maximum and multiply by 100. For example, on a 4.0 scale, a 3.5 GPA equals (3.5 ÷ 4.0) × 100 = 87.5%. Use our calculator above for instant conversion."
    },
    {
      question: "Is 3.5 GPA equal to 90%?",
      answer: "On a 4.0 GPA scale, 3.5 GPA is equal to 87.5%, not 90%. The conversion depends on the GPA scale used. A 3.5 GPA on a 4.0 scale represents excellent academic performance."
    },
    {
      question: "What percentage is a 4.0 GPA?",
      answer: "A 4.0 GPA represents 100% on a 4.0 scale grading system. This is the highest possible GPA and indicates perfect academic performance in all courses."
    },
    {
      question: "How to convert percentage to GPA?",
      answer: "To convert percentage to GPA, divide the percentage by 100 and multiply by the GPA scale. For example, 85% on a 4.0 scale equals (85 ÷ 100) × 4 = 3.4 GPA."
    },
    {
      question: "Is GPA better than percentage?",
      answer: "Neither GPA nor percentage is inherently better - they serve different purposes. GPA provides a standardized measure across different grading systems, while percentage offers precise granularity. Both are valuable for academic assessment."
    }
  ];

  return (
    <>
      <SEOHead
        title="GPA to Percentage Calculator – Convert GPA into Percentage"
        description="Use our GPA Percentage Calculator to convert GPA into percentage instantly. Supports 4.0 and 5.0 GPA scale conversion with accurate formulas."
        canonical="/gpa-calculators/gpa-percentage-calculator"
      />

      <ArticleSchema
        headline="GPA to Percentage Calculator – Convert GPA into Percentage"
        description="Learn how to convert GPA to percentage with our comprehensive calculator. Includes conversion formulas, examples, and detailed explanations for 4.0, 5.0, and 10.0 GPA scales."
        author="GPA Calculator Team"
        datePublished="2024-01-15"
        dateModified="2024-01-15"
      />

      <FAQSchema faqs={faqData} />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'GPA Calculators', href: '/gpa-calculators' },
              { label: 'GPA Percentage Calculator', href: '/gpa-calculators/gpa-percentage-calculator' }
            ]}
          />

          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            GPA Percentage Calculator
          </h1>

          {/* Calculator Interface */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="mb-6">
              <div className="flex justify-center mb-4">
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setConversionMode('gpa-to-percentage')}
                    className={`px-4 py-2 rounded-md font-medium transition-colors ${
                      conversionMode === 'gpa-to-percentage'
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    GPA → Percentage
                  </button>
                  <button
                    onClick={() => setConversionMode('percentage-to-gpa')}
                    className={`px-4 py-2 rounded-md font-medium transition-colors ${
                      conversionMode === 'percentage-to-gpa'
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Percentage → GPA
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {conversionMode === 'gpa-to-percentage' ? (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      GPA Value
                    </label>
                    <input
                      type="number"
                      value={gpaValue}
                      onChange={(e) => setGpaValue(e.target.value)}
                      placeholder="Enter GPA (e.g., 3.5)"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      min="0"
                      max={gpaScale === '4.0' ? '4.0' : gpaScale === '5.0' ? '5.0' : '10.0'}
                      step="0.01"
                    />
                  </div>
                ) : (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Percentage Value
                    </label>
                    <input
                      type="number"
                      value={percentageValue}
                      onChange={(e) => setPercentageValue(e.target.value)}
                      placeholder="Enter percentage (e.g., 87.5)"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      min="0"
                      max="100"
                      step="0.1"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    GPA Scale
                  </label>
                  <select
                    value={gpaScale}
                    onChange={(e) => setGpaScale(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="4.0">4.0 Scale</option>
                    <option value="5.0">5.0 Scale</option>
                    <option value="10.0">10.0 Scale</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-center mb-4">
                <button
                  onClick={clearCalculator}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                >
                  Clear
                </button>
              </div>

              {/* Results */}
              {result.percentage !== undefined && (
                <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-4">
                  <h2 className="text-lg font-semibold text-green-800 mb-2">Conversion Result</h2>
                  <p className="text-green-700">
                    GPA {gpaValue} on {gpaScale} scale = <strong>{result.percentage}%</strong>
                  </p>
                </div>
              )}

              {result.gpa !== undefined && (
                <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-4">
                  <h2 className="text-lg font-semibold text-blue-800 mb-2">Conversion Result</h2>
                  <p className="text-blue-700">
                    {percentageValue}% = <strong>{result.gpa} GPA</strong> on {gpaScale} scale
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              <li><a href="#what-is-gpa" className="text-blue-600 hover:text-blue-800">What is GPA?</a></li>
              <li><a href="#gpa-percentage" className="text-blue-600 hover:text-blue-800">What is GPA Percentage?</a></li>
              <li><a href="#conversion-formulas" className="text-blue-600 hover:text-blue-800">How to Convert GPA to Percentage</a></li>
              <li><a href="#conversion-table" className="text-blue-600 hover:text-blue-800">GPA to Percentage Conversion Chart</a></li>
              <li><a href="#gpa-vs-percentage" className="text-blue-600 hover:text-blue-800">Difference Between GPA and Percentage</a></li>
              <li><a href="#college-admissions" className="text-blue-600 hover:text-blue-800">How Colleges Use GPA and Percentage</a></li>
              <li><a href="#faq" className="text-blue-600 hover:text-blue-800">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* SEO Content */}
          <div className="space-y-8">
            <section id="what-is-gpa">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What is GPA?</h2>
              <p className="text-gray-700 mb-4">
                GPA, or Grade Point Average, is a numerical representation of a student's academic performance.
                It's calculated by assigning point values to letter grades (A=4, B=3, C=2, D=1, F=0) and averaging
                them across all courses. The GPA to percentage calculator helps convert this standardized GPA score
                into a percentage format that many people find more intuitive.
              </p>
              <p className="text-gray-700 mb-4">
                Most educational institutions in the United States use a 4.0 scale, where 4.0 represents perfect
                grades and 0.0 represents failing grades. However, some schools use different scales like 5.0
                (for weighted grades) or even 10.0 scale systems used in some international education systems.
              </p>
            </section>

            <section id="gpa-percentage">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What is GPA Percentage?</h2>
              <p className="text-gray-700 mb-4">
                GPA percentage refers to the conversion of your GPA score into a percentage format. This conversion
                is particularly useful when you need to understand your academic standing in terms that are more
                universally understood. Many employers, graduate schools, and international institutions prefer
                percentage-based grading systems.
              </p>
              <p className="text-gray-700 mb-4">
                Schools often convert GPA to percentage for several reasons: it provides a more granular view of
                academic performance, it's easier for international students to understand, and it aligns with
                percentage-based grading systems used in many countries. Our GPA percentage calculator makes this
                conversion process simple and accurate.
              </p>
            </section>

            <section id="conversion-formulas">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Convert GPA to Percentage</h2>
              <p className="text-gray-700 mb-4">
                Converting GPA to percentage involves simple mathematical formulas that vary depending on the GPA scale used.
                Below, we'll explain the conversion formulas for the most common GPA scales.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.0 GPA Scale Conversion</h3>
                <p className="text-gray-700 mb-2"><strong>Formula:</strong> Percentage = (GPA ÷ 4.0) × 100</p>
                <p className="text-gray-700 mb-4"><strong>Example:</strong> GPA = 3.5</p>
                <p className="text-gray-700 mb-4">Percentage = (3.5 ÷ 4.0) × 100 = 87.5%</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.0 GPA Scale Conversion</h3>
                <p className="text-gray-700 mb-2"><strong>Formula:</strong> Percentage = (GPA ÷ 5.0) × 100</p>
                <p className="text-gray-700 mb-4"><strong>Example:</strong> GPA = 4.2</p>
                <p className="text-gray-700 mb-4">Percentage = (4.2 ÷ 5.0) × 100 = 84%</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">10.0 GPA Scale Conversion</h3>
                <p className="text-gray-700 mb-2"><strong>Formula:</strong> Percentage = GPA × 10</p>
                <p className="text-gray-700 mb-4"><strong>Example:</strong> GPA = 8.1</p>
                <p className="text-gray-700 mb-4">Percentage = 8.1 × 10 = 81%</p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reverse Conversion: Percentage to GPA</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-900">4.0 Scale</p>
                  <p className="text-blue-700">GPA = (Percentage ÷ 100) × 4</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-900">5.0 Scale</p>
                  <p className="text-blue-700">GPA = (Percentage ÷ 100) × 5</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-900">10.0 Scale</p>
                  <p className="text-blue-700">GPA = Percentage ÷ 10</p>
                </div>
              </div>
            </section>

            <section id="conversion-table">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">GPA to Percentage Conversion Chart</h2>
              <p className="text-gray-700 mb-6">
                Use this quick reference table to convert common GPA values to percentages on a 4.0 scale.
                This table provides instant conversions for the most frequently encountered GPA scores.
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        GPA (4.0 Scale)
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Percentage
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Letter Grade
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {conversionTable.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {row.gpa}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {row.percentage}%
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {row.gpa === 4.0 ? 'A' :
                           row.gpa >= 3.7 ? 'A-' :
                           row.gpa >= 3.3 ? 'B+' :
                           row.gpa >= 3.0 ? 'B' :
                           row.gpa >= 2.7 ? 'B-' :
                           row.gpa >= 2.3 ? 'C+' :
                           row.gpa >= 2.0 ? 'C' :
                           row.gpa >= 1.7 ? 'C-' :
                           row.gpa >= 1.3 ? 'D+' :
                           row.gpa >= 1.0 ? 'D' : 'F'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="gpa-vs-percentage">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Difference Between GPA and Percentage</h2>
              <p className="text-gray-700 mb-4">
                While both GPA and percentage grading systems measure academic performance, they serve different purposes
                and have distinct characteristics. Understanding these differences can help you better interpret your
                academic standing and communicate your achievements effectively.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">GPA System</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Standardized across institutions</li>
                    <li>• Based on letter grades (A, B, C, D, F)</li>
                    <li>• Maximum typically 4.0 (unweighted)</li>
                    <li>• Easier for college admissions comparison</li>
                    <li>• May include weighted grades for honors/AP</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Percentage System</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• More granular (0-100%)</li>
                    <li>• Directly reflects test/course scores</li>
                    <li>• Universally understood</li>
                    <li>• Better for precise performance measurement</li>
                    <li>• Common in international education</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                The choice between GPA and percentage often depends on the context. GPA is preferred for college
                admissions in the US because it standardizes grading across different schools with varying difficulty
                levels. Percentage grading provides more precision and is often used in competitive academic environments
                or when exact performance metrics are needed.
              </p>
            </section>

            <section id="college-admissions">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Colleges Use GPA and Percentage</h2>
              <p className="text-gray-700 mb-4">
                Colleges and universities use both GPA and percentage information differently in their admissions and
                academic evaluation processes. Understanding how these metrics are applied can help students make
                informed decisions about their academic goals and college applications.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">College Admissions Context</h3>
              <p className="text-gray-700 mb-4">
                In college admissions, GPA serves as a standardized measure that allows admissions officers to compare
                applicants from different high schools with varying grading standards. A 4.0 GPA from one school can be
                directly compared to a 4.0 GPA from another school, regardless of the underlying percentage values.
              </p>

              <p className="text-gray-700 mb-4">
                However, some colleges also consider percentage grades, especially when evaluating applicants from
                international schools or when making scholarship decisions. Converting GPA to percentage can be
                particularly useful for students applying to international universities or programs that require
                percentage-based qualifications.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Academic Standing and Honors</h3>
              <p className="text-gray-700 mb-4">
                Within colleges, GPA is typically used for determining academic standing, honors designations, and
                eligibility for certain programs. Percentage grades are often used for individual course assessments
                and may influence grade appeals or academic probation decisions.
              </p>

              <p className="text-gray-700 mb-4">
                Many graduate programs and professional schools require minimum GPA thresholds for admission. Using
                our GPA percentage calculator can help you understand how your GPA translates to percentage terms,
                which can be useful when communicating with international institutions or employers.
              </p>
            </section>

            <section id="faq">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <FAQ items={faqData} />
            </section>

            {/* Related Calculators */}
            <RelatedCalculators relatedIds={['college-gpa-calculator', 'high-school-gpa-calculator', 'weighted-gpa-calculator', '4-0-scale-gpa-calculator']} />

            {/* Authority Links */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Resources</h2>
              <p className="text-gray-700 mb-4">
                For more information about GPA systems and educational standards, visit these authoritative sources:
              </p>
              <ul className="space-y-2">
                <li>
                  <a href="https://nces.ed.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    National Center for Education Statistics (NCES)
                  </a> - Official U.S. education data and statistics
                </li>
                <li>
                  <a href="https://www.collegeboard.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    College Board
                  </a> - Information about college admissions and standardized testing
                </li>
                <li>
                  <a href="https://www.ed.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    U.S. Department of Education
                  </a> - Federal education policies and guidelines
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
