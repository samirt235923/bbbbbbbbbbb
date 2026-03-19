'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import SEOHead from '@/components/SEOHead';
import { BreadcrumbSchema, ArticleSchema, FAQSchema, CalculatorSchema } from '@/components/SchemaMarkup';

type FormulaType = 'basic' | 'alternative' | 'custom';

type ScaleType = '4.0' | '5.0' | '10.0' | 'custom';

const gradeClassification = (percentage: number) => {
  if (percentage >= 90) return 'A (Excellent)';
  if (percentage >= 80) return 'B (Very Good)';
  if (percentage >= 70) return 'C (Good)';
  if (percentage >= 60) return 'D (Average)';
  if (percentage >= 50) return 'E (Passing)';
  return 'F (Failing)';
};

const faqItems = [
  {
    question: 'How do I convert GPA to percentage?',
    answer: 'Use the formula percentage = (GPA ÷ max GPA) × 100 for most systems. Our converter supports 4.0, 5.0, 10.0, and custom scales with instant results.',
  },
  {
    question: 'What is 3.5 GPA in percentage?',
    answer: 'On a 4.0 scale, 3.5 GPA equals 87.5%. On a 5.0 scale, it equals 70%. Always check which scale you use to avoid mistakes.',
  },
  {
    question: 'Is GPA better than percentage?',
    answer: 'GPA standardizes performance across courses while percentage is more granular. Universities often convert percentage to GPA for uniform evaluation.',
  },
  {
    question: 'Which formula is correct?',
    answer: 'Both formulas are correct in context: basic formula is universal, alternative formula is common in India/Asia. Choose formula based on your institution’s policy.',
  },
  {
    question: 'How do universities convert GPA?',
    answer: 'Universities may use a fixed formula, course weights, and scaling rules. Many use percentage conversion formulas and review transcripts from international grading systems.',
  },
];

export default function GPAToPercentageConverter() {
  const [gpaValue, setGpaValue] = useState('');
  const [percentageValue, setPercentageValue] = useState('');
  const [scale, setScale] = useState<ScaleType>('4.0');
  const [customScale, setCustomScale] = useState('7.5');
  const [formula, setFormula] = useState<FormulaType>('basic');
  const [customMultiplier, setCustomMultiplier] = useState('10');
  const [customOffset, setCustomOffset] = useState('0');

  const hasInput = formula !== 'custom' ? gpaValue.trim() !== '' : gpaValue.trim() !== '';

  const result = useMemo(() => {
    const gpa = parseFloat(gpaValue);
    if (isNaN(gpa) || gpa < 0) return { percentage: undefined, grading: '' };

    const maxScale = scale === 'custom' ? parseFloat(customScale) : parseFloat(scale);
    const validScale = !isNaN(maxScale) && maxScale > 0 ? maxScale : 4.0;

    let percentage = 0;

    if (formula === 'basic') {
      percentage = (gpa / validScale) * 100;
    } else if (formula === 'alternative') {
      percentage = (gpa - 0.75) * 10;
    } else {
      const multiplier = parseFloat(customMultiplier);
      const offset = parseFloat(customOffset);
      const m = !isNaN(multiplier) ? multiplier : 1;
      const o = !isNaN(offset) ? offset : 0;
      percentage = gpa * m + o;
    }

    const bounded = Math.min(100, Math.max(0, percentage));
    return { percentage: Math.round(bounded * 100) / 100, grading: gradeClassification(bounded) };
  }, [gpaValue, scale, customScale, formula, customMultiplier, customOffset]);

  const reverseResult = useMemo(() => {
    const pct = parseFloat(percentageValue);
    if (isNaN(pct) || pct < 0 || pct > 100) return { gpa: undefined, grading: '' };

    const maxScale = scale === 'custom' ? parseFloat(customScale) : parseFloat(scale);
    const validScale = !isNaN(maxScale) && maxScale > 0 ? maxScale : 4.0;

    let gpa = 0;

    if (formula === 'basic') {
      gpa = (pct / 100) * validScale;
    } else if (formula === 'alternative') {
      gpa = pct / 10 + 0.75;
    } else {
      const multiplier = parseFloat(customMultiplier);
      const offset = parseFloat(customOffset);
      const m = !isNaN(multiplier) && multiplier !== 0 ? multiplier : 1;
      const o = !isNaN(offset) ? offset : 0;
      gpa = (pct - o) / m;
    }

    const bounded = Math.min(validScale, Math.max(0, gpa));
    return { gpa: Math.round(bounded * 100) / 100, grading: gradeClassification(pct) };
  }, [percentageValue, scale, customScale, formula, customMultiplier, customOffset]);

  const reset = () => {
    setGpaValue('');
    setPercentageValue('');
    setScale('4.0');
    setCustomScale('7.5');
    setFormula('basic');
    setCustomMultiplier('10');
    setCustomOffset('0');
  };

  const basicTable = [
    { gpa: 4.0, percentage: 100 },
    { gpa: 3.5, percentage: 87.5 },
    { gpa: 3.0, percentage: 75 },
    { gpa: 2.5, percentage: 62.5 },
    { gpa: 2.0, percentage: 50 },
    { gpa: 1.5, percentage: 37.5 },
    { gpa: 1.0, percentage: 25 },
  ];

  const advancedTable = [
    { gpa: 5.0, percentage: 100 },
    { gpa: 4.5, percentage: 90 },
    { gpa: 4.0, percentage: 80 },
    { gpa: 3.5, percentage: 70 },
    { gpa: 3.0, percentage: 60 },
    { gpa: 2.0, percentage: 40 },
    { gpa: 1.0, percentage: 20 },
  ];

  return (
    <>
      <SEOHead
        title="GPA to Percentage Converter – Convert GPA to %"
        description="Convert GPA to percentage instantly using our GPA to Percentage Converter. Supports 4.0, 5.0, and custom GPA scales with accurate formulas."
        canonical="/gpa-calculators/gpa-to-percentage-converter"
      />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://topgpacalculator.com/' },
          { name: 'GPA Calculators', url: 'https://topgpacalculator.com/gpa-calculators' },
          { name: 'GPA to Percentage Converter', url: 'https://topgpacalculator.com/gpa-calculators/gpa-to-percentage-converter' },
        ]}
      />

      <ArticleSchema
        headline="GPA to Percentage Converter"
        description="Convert GPA to percentage instantly using a practical converter, multiple formulas, and detailed guidance for global grading systems."
        author="GPA Calculator Team"
        datePublished="2026-03-18"
        dateModified={new Date().toISOString().split('T')[0]}
      />

      <CalculatorSchema
        title="GPA to Percentage Converter"
        description="Interactive GPA to percentage converter with formula selection, custom scales, and detailed user guidance."
        url="/gpa-calculators/gpa-to-percentage-converter"
      />

      <FAQSchema faqs={faqItems} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm mb-4" aria-label="Breadcrumb">
          <ol className="flex flex-wrap gap-2 text-gray-600">
            <li><Link href="/" className="text-blue-600 hover:underline">Home</Link></li>
            <li>/</li>
            <li><Link href="/gpa-calculators" className="text-blue-600 hover:underline">GPA Calculators</Link></li>
            <li>/</li>
            <li className="font-semibold text-gray-900">GPA to Percentage Converter</li>
          </ol>
        </nav>

        <header className="bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700 text-white rounded-2xl p-8 mb-8 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">GPA to Percentage Converter</h1>
          <p className="text-lg max-w-3xl mb-4">
            Convert your GPA to percentage instantly and accurately. Our converter supports 4.0, 5.0, 10.0, and custom GPA scales using multiple formulas built for global students.
          </p>
          <p className="bg-white/15 inline-block text-sm px-3 py-2 rounded-full">Keyword target: gpa to percentage converter, convert gpa to percentage, gpa to percent calculator</p>
        </header>

        <section className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Converter</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="py-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Conversion Mode</label>
                <div className="flex gap-2">
                  <button
                    className={`px-4 py-2 rounded-md ${formula === 'basic' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}
                    onClick={() => setFormula('basic')}
                  >Basic</button>
                  <button
                    className={`px-4 py-2 rounded-md ${formula === 'alternative' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}
                    onClick={() => setFormula('alternative')}
                  >Alternative (India/Asia)</button>
                  <button
                    className={`px-4 py-2 rounded-md ${formula === 'custom' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}
                    onClick={() => setFormula('custom')}
                  >Custom</button>
                </div>
              </div>

              <div className="py-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">GPA Scale</label>
                <select
                  value={scale}
                  onChange={(e) => setScale(e.target.value as ScaleType)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="4.0">4.0 Scale</option>
                  <option value="5.0">5.0 Scale</option>
                  <option value="10.0">10.0 Scale</option>
                  <option value="custom">Custom Scale</option>
                </select>
              </div>

              {scale === 'custom' && (
                <div className="py-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Custom Max GPA</label>
                  <input
                    type="number"
                    value={customScale}
                    onChange={(e) => setCustomScale(e.target.value)}
                    min="1"
                    step="0.1"
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    placeholder="e.g. 7.5"
                  />
                </div>
              )}

              <div className="py-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">GPA Input</label>
                <input
                  type="number"
                  value={gpaValue}
                  onChange={(e) => setGpaValue(e.target.value)}
                  min="0"
                  max={scale === 'custom' ? customScale : parseFloat(scale).toString()}
                  step="0.01"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  placeholder="Enter GPA value"
                />
              </div>

              <div className="py-2">
                <button
                  onClick={() => setPercentageValue(result.percentage?.toString() ?? '')}
                  className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                >
                  Use Converted Percentage for Reverse Calculation
                </button>
              </div>

              <div className="py-2">
                <button
                  onClick={reset}
                  className="w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                >
                  Reset Calculator
                </button>
              </div>
            </div>

            <div>
              <div className="p-4 rounded-xl border border-gray-200 bg-gray-50">
                <h3 className="text-xl font-semibold mb-2">Result</h3>
                <p className="text-gray-700">
                  {hasInput && result.percentage !== undefined
                    ? `Percentage: ${result.percentage}%` 
                    : 'Enter a valid GPA value to see conversion.'}
                </p>
                {result.grading && <p className="text-gray-600 mt-2">Grade Classification: {result.grading}</p>}

                <div className="mt-4 text-sm text-gray-600">
                  <p><strong>Formula used: </strong>{formula === 'basic' ? 'Percentage = (GPA ÷ Max GPA) × 100' : formula === 'alternative' ? 'Percentage = (GPA − 0.75) × 10' : `Custom: Percentage = (GPA × ${customMultiplier}) + ${customOffset}`}</p>
                </div>

                {formula === 'custom' && (
                  <div className="mt-4 space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Custom Multiplier</label>
                    <input
                      type="number"
                      value={customMultiplier}
                      onChange={(e) => setCustomMultiplier(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      step="0.01"
                    />
                    <label className="block text-sm font-medium text-gray-700">Custom Offset</label>
                    <input
                      type="number"
                      value={customOffset}
                      onChange={(e) => setCustomOffset(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      step="0.01"
                    />
                  </div>
                )}

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">Reverse Percentage to GPA</label>
                  <input
                    type="number"
                    value={percentageValue}
                    onChange={(e) => setPercentageValue(e.target.value)}
                    min="0"
                    max="100"
                    step="0.01"
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    placeholder="Enter percentage value"
                  />
                  {reverseResult.gpa !== undefined && (
                    <p className="mt-2 text-gray-800 font-semibold">Equivalent GPA: {reverseResult.gpa}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 mb-8">
          <h2 id="what-is-gpa" className="text-2xl font-bold mb-4">What Is GPA to Percentage Conversion</h2>
          <p>Converting GPA to percentage is essential when applying to schools that use different grading systems. A GPA is a normalized value (e.g. 4.0 scale) and percentage is a direct scale (0-100%).</p>
          <p>This page helps students answer key questions like "how to convert gpa to percentage" and offers multiple methods for global accuracy. It is structured for high SEO value and usability.</p>
        </section>

        <section id="gpa-percentage" className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">How to Convert GPA to Percentage</h2>
          <p>Start by identifying your GPA scale and selecting the right formula. Use the calculator above for real-time results and then follow these steps:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Choose your GPA scale (4.0, 5.0, 10.0 or custom).</li>
            <li>Select the formula for your region: basic or India/Asia alternative.</li>
            <li>Enter your GPA and get instant percentage using the selected formula.</li>
            <li>Verify your results with the table below for confidence.</li>
          </ul>
        </section>

        <section id="conversion-formulas" className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">GPA to Percentage Formula Explained</h2>
          <div className="space-y-4">
            <article>
              <h3 className="text-xl font-semibold mb-2">1. Basic Formula (Common Method)</h3>
              <p><code>Percentage = (GPA ÷ Max GPA) × 100</code></p>
              <p>This is the most accepted formula for global conversion and is the default method in this tool.</p>
              <p>Example (4.0 scale): GPA 3.5 → (3.5 ÷ 4.0) × 100 = 87.5%</p>
            </article>

            <article>
              <h3 className="text-xl font-semibold mb-2">2. Alternative Formula (India/Asia Common)</h3>
              <p><code>Percentage = (GPA − 0.75) × 10</code></p>
              <p>This formula is widely used in India and some Asian jurisdictions for standardized transformations to the 100-point system.</p>
              <p>Example (10 scale): GPA 8.2 → (8.2 − 0.75) × 10 = 74.5%</p>
            </article>

            <article>
              <h3 className="text-xl font-semibold mb-2">3. Custom Formula</h3>
              <p>For local policies, use the custom multiplier and offset tool. This covers unique conversions like:</p>
              <p><code>Percentage = (GPA × Custom Multiplier) + Custom Offset</code></p>
              <p>Example: If your family school uses a special formula, add values and verify with sample data.</p>
            </article>
          </div>
        </section>

        <section id="conversion-table" className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Conversion Tables</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <h3 className="bg-neutral-100 px-4 py-3 text-lg font-semibold">4.0 GPA to Percentage</h3>
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3 text-left">GPA</th>
                    <th className="p-3 text-left">Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {basicTable.map((row) => (
                    <tr key={row.gpa} className="border-t border-gray-200">
                      <td className="p-3">{row.gpa.toFixed(1)}</td>
                      <td className="p-3">{row.percentage.toFixed(1)}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <h3 className="bg-neutral-100 px-4 py-3 text-lg font-semibold">5.0 GPA to Percentage</h3>
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3 text-left">GPA</th>
                    <th className="p-3 text-left">Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {advancedTable.map((row) => (
                    <tr key={row.gpa} className="border-t border-gray-200">
                      <td className="p-3">{row.gpa.toFixed(1)}</td>
                      <td className="p-3">{row.percentage.toFixed(1)}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="gpa-vs-percentage" className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">GPA vs Percentage – Key Differences</h2>
          <p>GPA is normalized across courses and credit weights, whereas percentage is an absolute score out of 100. GPA is ideal for comparing students across systems, while percentage is commonly used for local grading.</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>GPA compresses range into 0-4, 0-5, or 0-10 scale.</li>
            <li>Percentage gives specific numeric details like 89.2%.</li>
            <li>Conversion avoids direct equivalence errors by understanding context and institutional policies.</li>
          </ul>
        </section>

        <section id="which-formula" className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Which Formula Should You Use</h2>
          <p>Choose formulas depending on location and reporting format:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>North America: Basic formula is preferred for 4.0 and 5.0 systems.</li>
            <li>India/Asia: Alternative formula is often used with 10.0-based GPA contexts.</li>
            <li>Custom/International: Use custom formula input for institution-specific conversion rules.</li>
          </ul>
          <p>Verify with your school or university registrar for official conversion maps before submitting transcripts.</p>
        </section>

        <section id="college-admissions" className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">College Admissions and GPA-to-Percentage Mapping</h2>
          <p>Admissions committees may convert your GPA to percentage for global comparison. Common approach uses basic formula with adjustments for course rigor. This calculator equips you with both a quick estimate and detail to present in applications.</p>
          <p>For students with international transcripts, “GPA to percent calculator” ensures you can estimate at-home performance in localized terms.</p>
        </section>

        <section id="faq" className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <h3 className="font-semibold text-lg">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Internal Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Link href="/gpa-calculator" className="text-blue-600 hover:underline">GPA Calculator</Link>
            <Link href="/gpa-calculators/gpa-to-letter-grade-calculator" className="text-blue-600 hover:underline">GPA to Letter Grade Calculator</Link>
            <Link href="/gpa-calculators/gpa-percentage-calculator" className="text-blue-600 hover:underline">GPA Percentage Calculator</Link>
            <Link href="/gpa-calculators/weighted-gpa-calculator" className="text-blue-600 hover:underline">Weighted GPA Calculator</Link>
            <Link href="/gpa-calculators/cumulative-gpa-calculator" className="text-blue-600 hover:underline">Cumulative GPA Calculator</Link>
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">External Authority Links</h2>
          <ul className="list-disc pl-5 space-y-2 text-blue-600">
            <li><a href="https://www.collegeboard.org" target="_blank" rel="noreferrer">CollegeBoard</a></li>
            <li><a href="https://nces.ed.gov" target="_blank" rel="noreferrer">NCES</a></li>
            <li><a href="https://www.ed.gov" target="_blank" rel="noreferrer">U.S. Department of Education</a></li>
          </ul>
        </section>

        <footer className="text-sm text-gray-500 text-center pb-8">
          <p>Fast loading, mobile-first, clean and optimized for high SEO ranking in GPA percentage conversions.</p>
          <p>Last updated: {new Date().toLocaleDateString('en-US')}</p>
        </footer>
      </div>
    </>
  );
}
