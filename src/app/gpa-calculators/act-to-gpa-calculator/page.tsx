'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Breadcrumb from '../../../components/Breadcrumb';
import FAQ from '../../../components/FAQ';
import { FAQSchema } from '@/components/SchemaMarkup';

const ActToGpaCalculator: React.FC = () => {
  const [actScore, setActScore] = useState<number>(25);
  const [gpaScale, setGpaScale] = useState<number>(4.0);
  const [estimatedGpa, setEstimatedGpa] = useState<number | null>(null);

  // ACT to GPA mapping table
  const actToGpaTable = [
    { act: 36, gpa: 4.0 },
    { act: 34, gpa: 3.9 },
    { act: 32, gpa: 3.8 },
    { act: 30, gpa: 3.7 },
    { act: 28, gpa: 3.5 },
    { act: 26, gpa: 3.3 },
    { act: 24, gpa: 3.0 },
    { act: 22, gpa: 2.7 },
    { act: 20, gpa: 2.5 },
    { act: 18, gpa: 2.3 },
    { act: 16, gpa: 2.0 },
    { act: 14, gpa: 1.7 },
    { act: 12, gpa: 1.3 },
    { act: 10, gpa: 1.0 },
  ];

  const calculateGpa = (score: number): number => {
    if (score >= 36) return 4.0;
    if (score <= 10) return 1.0;

    // Find the range
    for (let i = 0; i < actToGpaTable.length - 1; i++) {
      const current = actToGpaTable[i];
      const next = actToGpaTable[i + 1];

      if (score >= next.act && score <= current.act) {
        // Linear interpolation
        const actDiff = current.act - next.act;
        const gpaDiff = current.gpa - next.gpa;
        const scoreDiff = current.act - score;

        const interpolatedGpa = current.gpa - (scoreDiff / actDiff) * gpaDiff;
        return Math.round(interpolatedGpa * 100) / 100;
      }
    }

    return 0;
  };

  const handleCalculate = () => {
    const gpa = calculateGpa(actScore);
    // Adjust for GPA scale if needed
    const adjustedGpa = gpaScale === 5.0 ? (gpa / 4.0) * 5.0 : gpa;
    setEstimatedGpa(Math.round(adjustedGpa * 100) / 100);
  };

  // Instant calculation
  useEffect(() => {
    handleCalculate();
  }, [actScore, gpaScale]);

  const faqData = [
    {
      question: 'What GPA is a 30 ACT?',
      answer: 'A 30 ACT score is approximately equivalent to a 3.7 GPA on a 4.0 scale. This is an estimate based on historical correlations between ACT scores and high school GPAs.',
    },
    {
      question: 'Is a 32 ACT equivalent to a 4.0 GPA?',
      answer: 'A 32 ACT score is approximately equivalent to a 3.8 GPA on a 4.0 scale. A perfect 4.0 GPA typically correlates with ACT scores in the 34-36 range.',
    },
    {
      question: 'How do you convert ACT score to GPA?',
      answer: 'ACT to GPA conversion uses historical data and statistical correlations. Our calculator uses a mapping table with linear interpolation to estimate GPA equivalents based on ACT score ranges.',
    },
    {
      question: 'Do colleges convert ACT scores to GPA?',
      answer: 'Colleges typically do not directly convert ACT scores to GPA. They consider both metrics separately in admissions decisions, along with other factors like extracurricular activities and essays.',
    },
    {
      question: 'Is ACT more important than GPA?',
      answer: 'Neither ACT nor GPA is universally more important - it depends on the college and program. Some schools are test-optional, while others heavily weight standardized test scores.',
    },
  ];

  return (
    <>
      
      <FAQSchema faqs={faqData} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'GPA Calculators', href: '/gpa-calculators' },
            { label: 'ACT to GPA Calculator', href: '/act-to-gpa-calculator' },
          ]}
        />

        <h1 className="text-4xl font-bold text-center mb-8">ACT to GPA Calculator</h1>

        {/* Table of Contents */}
        <div className="bg-gray-100 p-4 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><a href="#calculator" className="text-blue-600 hover:underline">ACT to GPA Calculator</a></li>
            <li><a href="#table" className="text-blue-600 hover:underline">ACT Score to GPA Table</a></li>
            <li><a href="#what-is" className="text-blue-600 hover:underline">What is ACT to GPA Conversion</a></li>
            <li><a href="#how-to-convert" className="text-blue-600 hover:underline">How to Convert ACT Score to GPA</a></li>
            <li><a href="#chart" className="text-blue-600 hover:underline">ACT Score to GPA Chart</a></li>
            <li><a href="#example" className="text-blue-600 hover:underline">Example ACT to GPA Calculation</a></li>
            <li><a href="#good-act" className="text-blue-600 hover:underline">What is a Good ACT Score</a></li>
            <li><a href="#admissions" className="text-blue-600 hover:underline">How ACT Scores and GPA Affect College Admissions</a></li>
            <li><a href="#faq" className="text-blue-600 hover:underline">Frequently Asked Questions</a></li>
            <li><a href="#related" className="text-blue-600 hover:underline">Related GPA Calculators</a></li>
          </ul>
        </div>

        {/* Calculator */}
        <section id="calculator" className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Convert ACT Score to GPA</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="actScore" className="block text-sm font-medium text-gray-700 mb-2">
                ACT Score (1 – 36)
              </label>
              <input
                type="number"
                id="actScore"
                value={actScore}
                onChange={(e) => setActScore(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="1"
                max="36"
                step="1"
              />
            </div>
            <div>
              <label htmlFor="gpaScale" className="block text-sm font-medium text-gray-700 mb-2">
                GPA Scale
              </label>
              <select
                id="gpaScale"
                value={gpaScale}
                onChange={(e) => setGpaScale(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value={4.0}>4.0 Scale</option>
                <option value={5.0}>5.0 Scale</option>
              </select>
            </div>
          </div>
          <button
            onClick={handleCalculate}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          >
            Calculate
          </button>
          {estimatedGpa !== null && (
            <div className="bg-green-100 p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">Estimated GPA</h3>
              <p className="text-2xl font-bold text-green-600">{estimatedGpa}</p>
              <p className="text-sm text-gray-600 mt-2">
                This is an approximate GPA equivalent based on historical correlations. Actual GPA requirements may vary by school and program.
              </p>
            </div>
          )}
        </section>

        {/* ACT Score to GPA Table */}
        <section id="table" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">ACT Score to GPA Conversion Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">ACT Score</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Estimated GPA (4.0 Scale)</th>
                </tr>
              </thead>
              <tbody>
                {actToGpaTable.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border border-gray-300 px-4 py-2">{row.act}</td>
                    <td className="border border-gray-300 px-4 py-2">{row.gpa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            * GPA estimates are based on historical data and statistical correlations. Individual results may vary.
          </p>
        </section>

        {/* SEO Content */}
        <section id="what-is" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What is ACT to GPA Conversion</h2>
          <p className="mb-4">
            ACT to GPA conversion is a way for students and educators to compare standardized test performance with academic achievement. While ACT scores and GPA measure different aspects of student performance, many people want to understand how these metrics relate to each other.
          </p>
          <p className="mb-4">
            The ACT measures a student's readiness for college through standardized testing in English, Math, Reading, and Science. GPA reflects overall academic performance across high school courses. Converting between these metrics helps students understand their relative standing and set realistic college goals.
          </p>
          <p>
            Our ACT to GPA calculator provides approximate conversions based on historical data and statistical correlations. Keep in mind that these are estimates and actual college admissions decisions consider many factors beyond just test scores and grades.
          </p>
        </section>

        <section id="how-to-convert" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How to Convert ACT Score to GPA</h2>
          <p className="mb-4">
            Converting ACT scores to GPA involves using statistical correlations from large datasets of student performance. Our calculator uses a mapping table based on historical data from college-bound students.
          </p>
          <p className="mb-4">
            The conversion process:
          </p>
          <ol className="list-decimal list-inside space-y-2 mb-4">
            <li>Reference the ACT to GPA mapping table</li>
            <li>Use linear interpolation for scores between table values</li>
            <li>Adjust for different GPA scales if necessary</li>
            <li>Consider the result as an estimate, not an exact conversion</li>
          </ol>
          <p>
            For example, a 29 ACT score falls between 28 (3.5 GPA) and 30 (3.7 GPA). Using linear interpolation: 29 - 28 = 1 point, so 3.5 + (1/2) × (3.7 - 3.5) = 3.5 + 0.1 = 3.6 GPA.
          </p>
        </section>

        <section id="chart" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">ACT Score to GPA Chart</h2>
          <p className="mb-4">
            The chart below shows approximate GPA equivalents for various ACT score ranges. These estimates are based on data from college admissions and can help you understand where your scores might place you academically.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <ul className="space-y-2">
              <li><strong>34-36 ACT:</strong> Approximately 3.9-4.0 GPA (top academic performance)</li>
              <li><strong>30-33 ACT:</strong> Approximately 3.7-3.8 GPA (excellent performance)</li>
              <li><strong>26-29 ACT:</strong> Approximately 3.3-3.6 GPA (good performance)</li>
              <li><strong>22-25 ACT:</strong> Approximately 2.7-3.2 GPA (average performance)</li>
              <li><strong>18-21 ACT:</strong> Approximately 2.3-2.6 GPA (below average)</li>
            </ul>
          </div>
        </section>

        <section id="example" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Example ACT to GPA Calculation</h2>
          <p className="mb-4">
            Let's calculate the GPA equivalent for a 29 ACT score.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p><strong>ACT Score:</strong> 29</p>
            <p><strong>GPA Scale:</strong> 4.0</p>
          </div>
          <p className="mb-4">
            Looking at our conversion table:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>28 ACT = 3.5 GPA</li>
            <li>30 ACT = 3.7 GPA</li>
          </ul>
          <p className="mb-4">
            The difference between 28 and 30 is 2 points and 0.2 GPA points.
          </p>
          <p className="mb-4">
            29 is 1 point above 28, so: 3.5 + (1/2) × 0.2 = 3.5 + 0.1 = 3.6 GPA
          </p>
          <p>
            Therefore, a 29 ACT score is approximately equivalent to a 3.6 GPA. Remember, this is just an estimate for comparison purposes.
          </p>
        </section>

        <section id="good-act" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What is a Good ACT Score</h2>
          <p className="mb-4">
            A "good" ACT score depends on your college goals and the competitiveness of the schools you're interested in. Here's a general breakdown:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Elite Colleges (Ivy League, Stanford, MIT):</strong> 33+ ACT (approximately 3.8+ GPA equivalent)</li>
            <li><strong>Highly Selective Schools:</strong> 30-32 ACT (approximately 3.7-3.8 GPA equivalent)</li>
            <li><strong>Selective Schools:</strong> 27-29 ACT (approximately 3.4-3.6 GPA equivalent)</li>
            <li><strong>Moderately Selective Schools:</strong> 24-26 ACT (approximately 3.0-3.3 GPA equivalent)</li>
            <li><strong>Open Admission Schools:</strong> Below 24 ACT (approximately below 3.0 GPA equivalent)</li>
          </ul>
          <p>
            Remember that ACT scores are just one part of your college application. Many schools are now test-optional, and they consider your GPA, extracurricular activities, essays, and recommendations holistically.
          </p>
        </section>

        <section id="admissions" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How ACT Scores and GPA Affect College Admissions</h2>
          <p className="mb-4">
            Both ACT scores and GPA play important roles in college admissions, but their relative importance varies by school and program. Here's how they typically factor in:
          </p>
          <h3 className="text-xl font-semibold mb-2">ACT Scores:</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Measure standardized academic ability and college readiness</li>
            <li>Help colleges compare students from different schools</li>
            <li>Can be improved with test prep and retakes</li>
            <li>Some schools are test-optional or test-blind</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">GPA:</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Reflects consistent academic performance over time</li>
            <li>Shows ability to handle high school coursework</li>
            <li>Difficult to change once courses are completed</li>
            <li>Weighted GPAs consider honors/AP courses</li>
          </ul>
          <p>
            Top colleges often look for students with both strong ACT scores (30+) and high GPAs (3.8+). However, many schools use a holistic admissions process where strong performance in one area can compensate for weaker performance in another.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-8">
          <FAQ items={faqData} />
        </section>

        {/* Related Calculators */}
        <section id="related" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related GPA Calculators</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/gpa-calculators/sat-to-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg">
              <h3 className="font-bold mb-2">SAT to GPA Calculator</h3>
              <p className="text-sm text-gray-600">Convert SAT scores to GPA.</p>
            </Link>
            <Link href="/gpa-calculators/college-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg">
              <h3 className="font-bold mb-2">College GPA Calculator</h3>
              <p className="text-sm text-gray-600">General GPA computations.</p>
            </Link>
            <Link href="/gpa-calculators/high-school-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg">
              <h3 className="font-bold mb-2">High School GPA Calculator</h3>
              <p className="text-sm text-gray-600">Track high school performance.</p>
            </Link>
            <Link href="/gpa-calculators/weighted-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg">
              <h3 className="font-bold mb-2">Weighted GPA Calculator</h3>
              <p className="text-sm text-gray-600">Includes Honors/AP weighting.</p>
            </Link>
            <Link href="/gpa-calculators/4-0-scale-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg">
              <h3 className="font-bold mb-2">4.0 Scale GPA Calculator</h3>
              <p className="text-sm text-gray-600">Use standard 4.0 grading.</p>
            </Link>
          </div>
        </section>

        {/* External Links */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Learn More</h3>
          <ul className="space-y-2">
            <li><a href="https://www.act.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ACT - Official Testing Organization</a></li>
            <li><a href="https://www.collegeboard.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">College Board - College Planning</a></li>
            <li><a href="https://nces.ed.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">National Center for Education Statistics</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ActToGpaCalculator;



