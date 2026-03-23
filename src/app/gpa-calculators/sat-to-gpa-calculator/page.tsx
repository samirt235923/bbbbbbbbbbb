'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Breadcrumb from '../../../components/Breadcrumb';
import SEOHead from '../../../components/SEOHead';
import FAQ from '../../../components/FAQ';
import { FAQSchema } from '@/components/SchemaMarkup';

const SatToGpaCalculator: React.FC = () => {
  const [satScore, setSatScore] = useState<number>(1200);
  const [gpaScale, setGpaScale] = useState<number>(4.0);
  const [estimatedGpa, setEstimatedGpa] = useState<number | null>(null);

  // SAT to GPA mapping table
  const satToGpaTable = [
    { sat: 1600, gpa: 4.0 },
    { sat: 1500, gpa: 3.9 },
    { sat: 1400, gpa: 3.7 },
    { sat: 1300, gpa: 3.5 },
    { sat: 1200, gpa: 3.3 },
    { sat: 1100, gpa: 3.0 },
    { sat: 1000, gpa: 2.7 },
    { sat: 900, gpa: 2.3 },
    { sat: 800, gpa: 2.0 },
    { sat: 700, gpa: 1.7 },
    { sat: 600, gpa: 1.3 },
    { sat: 500, gpa: 1.0 },
    { sat: 400, gpa: 0.5 },
  ];

  const calculateGpa = (score: number): number => {
    if (score >= 1600) return 4.0;
    if (score <= 400) return 0.5;

    // Find the range
    for (let i = 0; i < satToGpaTable.length - 1; i++) {
      const current = satToGpaTable[i];
      const next = satToGpaTable[i + 1];

      if (score >= next.sat && score <= current.sat) {
        // Linear interpolation
        const satDiff = current.sat - next.sat;
        const gpaDiff = current.gpa - next.gpa;
        const scoreDiff = current.sat - score;

        const interpolatedGpa = current.gpa - (scoreDiff / satDiff) * gpaDiff;
        return Math.round(interpolatedGpa * 100) / 100;
      }
    }

    return 0;
  };

  const handleCalculate = () => {
    const gpa = calculateGpa(satScore);
    // Adjust for GPA scale if needed
    const adjustedGpa = gpaScale === 5.0 ? (gpa / 4.0) * 5.0 : gpa;
    setEstimatedGpa(Math.round(adjustedGpa * 100) / 100);
  };

  // Instant calculation
  useEffect(() => {
    handleCalculate();
  }, [satScore, gpaScale]);

  const faqData = [
    {
      question: 'What GPA is a 1200 SAT?',
      answer: 'A 1200 SAT score is approximately equivalent to a 3.3 GPA on a 4.0 scale. This is an estimate based on historical correlations between SAT scores and high school GPAs.',
    },
    {
      question: 'Is a 1400 SAT equivalent to a 4.0 GPA?',
      answer: 'A 1400 SAT score is approximately equivalent to a 3.7 GPA on a 4.0 scale. A perfect 4.0 GPA typically correlates with SAT scores in the 1500-1600 range.',
    },
    {
      question: 'How do you convert SAT to GPA?',
      answer: 'SAT to GPA conversion uses historical data and statistical correlations. Our calculator uses a mapping table with linear interpolation to estimate GPA equivalents based on SAT score ranges.',
    },
    {
      question: 'Do colleges convert SAT scores to GPA?',
      answer: 'Colleges typically do not directly convert SAT scores to GPA. They consider both metrics separately in admissions decisions, along with other factors like extracurricular activities and essays.',
    },
    {
      question: 'Is SAT more important than GPA?',
      answer: 'Neither SAT nor GPA is universally more important - it depends on the college and program. Some schools are test-optional, while others heavily weight standardized test scores.',
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
            { label: 'SAT to GPA Calculator', href: '/sat-to-gpa-calculator' },
          ]}
        />

        <h1 className="text-4xl font-bold text-center mb-8">SAT to GPA Calculator</h1>

        {/* Table of Contents */}
        <div className="bg-gray-100 p-4 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><a href="#calculator" className="text-blue-600 hover:underline">SAT to GPA Calculator</a></li>
            <li><a href="#table" className="text-blue-600 hover:underline">SAT Score to GPA Table</a></li>
            <li><a href="#what-is" className="text-blue-600 hover:underline">What is SAT to GPA Conversion</a></li>
            <li><a href="#how-to-convert" className="text-blue-600 hover:underline">How to Convert SAT Score to GPA</a></li>
            <li><a href="#chart" className="text-blue-600 hover:underline">SAT Score to GPA Chart</a></li>
            <li><a href="#example" className="text-blue-600 hover:underline">Example SAT to GPA Calculation</a></li>
            <li><a href="#good-sat" className="text-blue-600 hover:underline">What is a Good SAT Score</a></li>
            <li><a href="#admissions" className="text-blue-600 hover:underline">How SAT Scores and GPA Affect College Admission</a></li>
            <li><a href="#faq" className="text-blue-600 hover:underline">Frequently Asked Questions</a></li>
            <li><a href="#related" className="text-blue-600 hover:underline">Related GPA Calculators</a></li>
          </ul>
        </div>

        {/* Calculator */}
        <section id="calculator" className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Convert SAT Score to GPA</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="satScore" className="block text-sm font-medium text-gray-700 mb-2">
                SAT Score (400 – 1600)
              </label>
              <input
                type="number"
                id="satScore"
                value={satScore}
                onChange={(e) => setSatScore(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="400"
                max="1600"
                step="10"
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

        {/* SAT Score to GPA Table */}
        <section id="table" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">SAT Score to GPA Conversion Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">SAT Score</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Estimated GPA (4.0 Scale)</th>
                </tr>
              </thead>
              <tbody>
                {satToGpaTable.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border border-gray-300 px-4 py-2">{row.sat}</td>
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
          <h2 className="text-2xl font-semibold mb-4">What is SAT to GPA Conversion</h2>
          <p className="mb-4">
            SAT to GPA conversion is a way for students and educators to compare standardized test performance with academic achievement. While SAT scores and GPA measure different aspects of student performance, many people want to understand how these metrics relate to each other.
          </p>
          <p className="mb-4">
            The SAT measures a student's readiness for college through standardized testing, while GPA reflects overall academic performance across high school courses. Converting between these metrics helps students understand their relative standing and set realistic college goals.
          </p>
          <p>
            Our SAT to GPA calculator provides approximate conversions based on historical data and statistical correlations. Keep in mind that these are estimates and actual college admissions decisions consider many factors beyond just test scores and grades.
          </p>
        </section>

        <section id="how-to-convert" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How to Convert SAT Score to GPA</h2>
          <p className="mb-4">
            Converting SAT scores to GPA involves using statistical correlations from large datasets of student performance. Our calculator uses a mapping table based on historical data from college-bound students.
          </p>
          <p className="mb-4">
            The conversion process:
          </p>
          <ol className="list-decimal list-inside space-y-2 mb-4">
            <li>Reference the SAT to GPA mapping table</li>
            <li>Use linear interpolation for scores between table values</li>
            <li>Adjust for different GPA scales if necessary</li>
            <li>Consider the result as an estimate, not an exact conversion</li>
          </ol>
          <p>
            For example, a 1250 SAT score falls between 1200 (3.3 GPA) and 1300 (3.5 GPA). Using linear interpolation: 1250 - 1200 = 50 points, so 3.3 + (50/100) × (3.5 - 3.3) = 3.4 GPA.
          </p>
        </section>

        <section id="chart" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">SAT Score to GPA Chart</h2>
          <p className="mb-4">
            The chart below shows approximate GPA equivalents for various SAT score ranges. These estimates are based on data from college admissions and can help you understand where your scores might place you academically.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <ul className="space-y-2">
              <li><strong>1600 SAT:</strong> Approximately 4.0 GPA (top academic performance)</li>
              <li><strong>1400-1500 SAT:</strong> Approximately 3.7-3.9 GPA (excellent performance)</li>
              <li><strong>1200-1300 SAT:</strong> Approximately 3.3-3.5 GPA (good performance)</li>
              <li><strong>1000-1100 SAT:</strong> Approximately 2.7-3.0 GPA (average performance)</li>
              <li><strong>800-900 SAT:</strong> Approximately 2.0-2.3 GPA (below average)</li>
            </ul>
          </div>
        </section>

        <section id="example" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Example SAT to GPA Calculation</h2>
          <p className="mb-4">
            Let's calculate the GPA equivalent for a 1250 SAT score.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p><strong>SAT Score:</strong> 1250</p>
            <p><strong>GPA Scale:</strong> 4.0</p>
          </div>
          <p className="mb-4">
            Looking at our conversion table:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>1200 SAT = 3.3 GPA</li>
            <li>1300 SAT = 3.5 GPA</li>
          </ul>
          <p className="mb-4">
            The difference between 1200 and 1300 is 100 points and 0.2 GPA points.
          </p>
          <p className="mb-4">
            1250 is 50 points above 1200, so: 3.3 + (50/100) × 0.2 = 3.3 + 0.1 = 3.4 GPA
          </p>
          <p>
            Therefore, a 1250 SAT score is approximately equivalent to a 3.4 GPA. Remember, this is just an estimate for comparison purposes.
          </p>
        </section>

        <section id="good-sat" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What is a Good SAT Score</h2>
          <p className="mb-4">
            A "good" SAT score depends on your college goals and the competitiveness of the schools you're interested in. Here's a general breakdown:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Elite Colleges (Ivy League, Stanford, MIT):</strong> 1500+ SAT (approximately 3.9+ GPA equivalent)</li>
            <li><strong>Highly Selective Schools:</strong> 1400-1490 SAT (approximately 3.7-3.8 GPA equivalent)</li>
            <li><strong>Selective Schools:</strong> 1300-1390 SAT (approximately 3.5-3.6 GPA equivalent)</li>
            <li><strong>Moderately Selective Schools:</strong> 1100-1290 SAT (approximately 3.0-3.4 GPA equivalent)</li>
            <li><strong>Open Admission Schools:</strong> Below 1100 SAT (approximately below 3.0 GPA equivalent)</li>
          </ul>
          <p>
            Remember that SAT scores are just one part of your college application. Many schools are now test-optional, and they consider your GPA, extracurricular activities, essays, and recommendations holistically.
          </p>
        </section>

        <section id="admissions" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How SAT Scores and GPA Affect College Admission</h2>
          <p className="mb-4">
            Both SAT scores and GPA play important roles in college admissions, but their relative importance varies by school and program. Here's how they typically factor in:
          </p>
          <h3 className="text-xl font-semibold mb-2">SAT Scores:</h3>
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
            Top colleges often look for students with both strong SAT scores (1400+) and high GPAs (3.8+). However, many schools use a holistic admissions process where strong performance in one area can compensate for weaker performance in another.
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
            <Link href="/gpa-calculators/final-grade-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg">
              <h3 className="font-bold mb-2">Final Grade GPA Calculator</h3>
              <p className="text-sm text-gray-600">Calculate required final grades.</p>
            </Link>
          </div>
        </section>

        {/* External Links */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Learn More</h3>
          <ul className="space-y-2">
            <li><a href="https://www.collegeboard.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">College Board - Official SAT Information</a></li>
            <li><a href="https://nces.ed.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">National Center for Education Statistics</a></li>
            <li><a href="https://www.khanacademy.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Khan Academy - Free SAT Prep Resources</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SatToGpaCalculator;



