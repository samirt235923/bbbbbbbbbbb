import { Metadata } from 'next';
import Link from 'next/link';
import SophomoreGPACalculator from '@/components/SophomoreGPACalculator';
import { FAQSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Sophomore GPA Calculator – Calculate Your Second Year GPA',
  description: 'Use our Sophomore GPA Calculator to calculate your GPA for your second year in college. Enter grades and credit hours to get instant results.',
  keywords: 'sophomore gpa calculator, calculate sophomore year gpa, second year college gpa calculator, gpa calculator for sophomore students, college sophomore gpa calculator',
  openGraph: {
    title: 'Sophomore GPA Calculator – Calculate Your Second Year GPA',
    description: 'Use our Sophomore GPA Calculator to calculate your GPA for your second year in college. Enter grades and credit hours to get instant results.',
    type: 'website',
    url: 'https://topgpacalculator.com/gpa-calculators/sophomore-gpa-calculator',
    images: [{ url: 'https://topgpacalculator.com/logo.svg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sophomore GPA Calculator – Calculate Your Second Year GPA',
    description: 'Use our Sophomore GPA Calculator to calculate your GPA for your second year in college. Enter grades and credit hours to get instant results.',
  },
  alternates: {
    canonical: 'https://topgpacalculator.com/gpa-calculators/sophomore-gpa-calculator',
  },
};

const gradeScale = [
  { letter: 'A', value: '4.0' },
  { letter: 'A-', value: '3.7' },
  { letter: 'B+', value: '3.3' },
  { letter: 'B', value: '3.0' },
  { letter: 'B-', value: '2.7' },
  { letter: 'C+', value: '2.3' },
  { letter: 'C', value: '2.0' },
  { letter: 'C-', value: '1.7' },
  { letter: 'D', value: '1.0' },
  { letter: 'F', value: '0.0' },
];

const faqItems = [
  { question: 'How do I calculate sophomore GPA?', answer: 'Use the formula: Total Grade Points ÷ Total Credit Hours. Multiply each course grade value by its credit hours, sum them, then divide by total credits.' },
  { question: 'Is sophomore GPA important?', answer: 'Yes. Sophomore GPA is often used by employers and graduate programs to assess your academic trajectory after first year.' },
  { question: 'What is a good sophomore GPA?', answer: 'A GPA above 3.0 is generally good, 3.5+ is strong, and 3.7+ is excellent for competitive internships and grad school.' },
  { question: 'Does sophomore GPA affect internships?', answer: 'Many internships use GPA cutoffs. A strong sophomore GPA helps qualify for competitive internships early in your major.' },
  { question: 'How do credit hours impact GPA?', answer: 'Credit hours weight each grade. Higher credit courses influence GPA more, which is why a credit-weighted calculator gives accurate results.' },
];

export default function SophomoreGPACalculatorPage() {
  return (
    <div className="bg-slate-50 min-h-screen text-gray-800">
      <FAQSchema faqs={faqItems} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-gray-600">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="text-blue-600 hover:underline">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/gpa-calculators" className="text-blue-600 hover:underline">GPA Calculators</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-semibold text-gray-900">Sophomore GPA Calculator</li>
          </ol>
        </nav>

        <header className="bg-white p-6 rounded-2xl shadow-sm mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Sophomore GPA Calculator</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Use our <strong>sophomore gpa calculator</strong> to calculate your second year college GPA fast and accurately. Enter course names, credit hours, and letter grades to get instant GPA results for your sophomore year.
          </p>
        </header>

        <section className="bg-white p-6 rounded-2xl shadow-sm mb-8">
          <SophomoreGPACalculator />
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-sm mb-8" id="table-of-contents">
          <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
          <ul className="list-decimal list-inside space-y-2 text-gray-700">
            <li><a href="#what-is" className="text-blue-600 hover:underline">What Is a Sophomore GPA</a></li>
            <li><a href="#how-to-calculate" className="text-blue-600 hover:underline">How to Calculate Sophomore GPA</a></li>
            <li><a href="#formula" className="text-blue-600 hover:underline">Sophomore GPA Formula Explained</a></li>
            <li><a href="#example" className="text-blue-600 hover:underline">Example Sophomore GPA Calculation</a></li>
            <li><a href="#importance" className="text-blue-600 hover:underline">Why Sophomore GPA Is Important</a></li>
            <li><a href="#grade-scale" className="text-blue-600 hover:underline">Grade Scale Table</a></li>
            <li><a href="#related" className="text-blue-600 hover:underline">Related GPA Calculators</a></li>
            <li><a href="#faq" className="text-blue-600 hover:underline">FAQ</a></li>
          </ul>
        </section>

        <article className="bg-white p-6 rounded-2xl shadow-sm prose prose-slate max-w-none">
          <h2 id="what-is">Introduction: What is Sophomore GPA</h2>
          <p>
            Sophomore GPA tracks your second-year college grades at a glance. It shows academic strength and helps you adjust your plan by junior year.
          </p>

          <h2 id="importance">Why Sophomore GPA Matters</h2>
          <ul>
            <li><strong>Internships:</strong> top internships often request 3.0+ GPA.</li>
            <li><strong>Scholarships:</strong> many are based on sophomore year results.</li>
            <li><strong>Graduate goals:</strong> strong soph year boosts long-term GPA trends.</li>
          </ul>

          <h2 id="how-to-calculate">How to Calculate Sophomore GPA (Step-by-step)</h2>
          <p>👉 Step-by-step guide for easy use:</p>
          <ol>
            <li>Enter each course name, credits, and grade.</li>
            <li>Select course type: Regular, Honors, AP.</li>
            <li>Our calculator multiplies grade value by credits.</li>
            <li>It sums total credit hours and total grade points.</li>
            <li>It divides points by credits and displays your GPA instantly.</li>
          </ol>

          <h2 id="formula">GPA Formula</h2>
          <p><strong>GPA = Total Grade Points ÷ Total Credit Hours</strong></p>
          <p><strong>Grade Points = Grade Value × Credits</strong></p>

          <h2 id="example">Example Calculation</h2>
          <p>📊 Master it with this clean example:</p>
          <ol>
            <li>Accounting: A (4.0) × 3 = 12.0</li>
            <li>Statistics: B+ (3.3) × 4 = 13.2</li>
            <li>Marketing: A- (3.7) × 3 = 11.1</li>
          </ol>
          <p><strong>Total credits = 10</strong></p>
          <p><strong>Total points = 36.3</strong></p>
          <p><strong>Sophomore GPA = 36.3 ÷ 10 = 3.63</strong></p>

          <h2 id="grade-scale">Grade Scale Table</h2>
          <p>Standard 4.0 values:</p>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100">
                <th className="border px-3 py-2">Grade</th>
                <th className="border px-3 py-2">Value</th>
              </tr>
            </thead>
            <tbody>
              {gradeScale.map((item) => (
                <tr key={item.letter}>
                  <td className="border px-3 py-2">{item.letter}</td>
                  <td className="border px-3 py-2">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 id="weighted">Weighted GPA Explanation</h2>
          <p>💡 Pro tips included for weighted GPA:</p>
          <ul>
            <li>Regular = 4.0 max.</li>
            <li>Honors = +0.5 to grade value.</li>
            <li>AP = +1.0 to grade value.</li>
            <li>Use weighted mode for a realistic estimate if applicable.</li>
          </ul>

          <h2 id="faq">FAQs</h2>
          {faqItems.map((faq) => (
            <div key={faq.question}>
              <strong>{faq.question}</strong>
              <p>{faq.answer}</p>
            </div>
          ))}

          <h2 id="related">Related Calculators</h2>
          <ul>
            <li><Link href="/freshman-gpa-calculator" className="text-blue-600 hover:underline">Freshman GPA Calculator</Link></li>
            <li><Link href="/junior-gpa-calculator" className="text-blue-600 hover:underline">Junior GPA Calculator</Link></li>
            <li><Link href="/senior-gpa-calculator" className="text-blue-600 hover:underline">Senior GPA Calculator</Link></li>
            <li><Link href="/gpa-projection-calculator" className="text-blue-600 hover:underline">GPA Projection Calculator</Link></li>
            <li><Link href="/gpa-improvement-calculator" className="text-blue-600 hover:underline">GPA Improvement Calculator</Link></li>
          </ul>

          <h2>External Links</h2>
          <ul>
            <li><a href="https://www.collegeboard.org" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">College Board</a></li>
            <li><a href="https://nces.ed.gov" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">NCES</a></li>
            <li><a href="https://www.ed.gov" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">U.S. Department of Education</a></li>
          </ul>

          <p className="text-xs text-slate-500 mt-6">This page is structured for fast scanning, mobile clarity, and high engagement.</p>
        </article>
      </div>
    </div>
  );
}

