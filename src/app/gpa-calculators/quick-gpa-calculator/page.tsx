import { Metadata } from 'next';
import Link from 'next/link';
import QuickGPACalculator from '@/components/QuickGPACalculator';
import { FAQSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Quick GPA Calculator – Fast & Easy GPA Calculation Tool',
  description: 'Use our Quick GPA Calculator to calculate your GPA instantly. Simple, fast, and accurate GPA calculation with minimal inputs.',
  keywords: 'quick gpa calculator, fast gpa calculator, simple gpa calculator, instant gpa calculator, easy gpa calculator',
  openGraph: {
    title: 'Quick GPA Calculator – Fast & Easy GPA Calculation Tool',
    description: 'Use our Quick GPA Calculator to calculate your GPA instantly. Simple, fast, and accurate GPA calculation with minimal inputs.',
    type: 'website',
    url: 'https://topgpacalculator.com/gpa-calculators/quick-gpa-calculator',
    images: [{ url: 'https://topgpacalculator.com/logo.svg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quick GPA Calculator – Fast & Easy GPA Calculation Tool',
    description: 'Use our Quick GPA Calculator to calculate your GPA instantly. Simple, fast, and accurate GPA calculation with minimal inputs.',
  },
  alternates: {
    canonical: 'https://topgpacalculator.com/gpa-calculators/quick-gpa-calculator',
  },
};

const gradeScale = [
  { grade: 'A', value: '4.0' },
  { grade: 'A-', value: '3.7' },
  { grade: 'B+', value: '3.3' },
  { grade: 'B', value: '3.0' },
  { grade: 'B-', value: '2.7' },
  { grade: 'C+', value: '2.3' },
  { grade: 'C', value: '2.0' },
  { grade: 'C-', value: '1.7' },
  { grade: 'D', value: '1.0' },
  { grade: 'F', value: '0.0' },
];

const faqItems = [
  { question: 'How do I calculate GPA quickly?', answer: 'Use equal credit course entries and multiply grade points by credits, then divide by total credits. With this calculator, results update instantly as you type.' },
  { question: 'What is the fastest way to calculate GPA?', answer: 'Use quick mode with standard 3-credit courses and grade dropdowns so GPA updates in real time without pressing a button.' },
  { question: 'Is quick GPA calculator accurate?', answer: 'Yes — this tool uses the standard 4.0 scale and the correct GPA formula (total grade points / total credit hours) for precision.' },
  { question: 'Can I calculate GPA without credit hours?', answer: 'Yes. Quick mode assumes equal credits for every course, so the denominator becomes number of courses; optionally switch to credit mode for weighted GPA.' },
  { question: 'What is a good GPA?', answer: 'A GPA of 3.0 or higher is generally good; 3.5+ is strong. Use instant results to track, set goals, and improve performance quickly.' },
];

export default function QuickGPACalculatorPage() {
  return (
    <div className="bg-slate-100 min-h-screen text-gray-800">
      <FAQSchema faqs={faqItems} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav aria-label="Breadcrumb" className="text-sm mb-6">
          <ol className="flex flex-wrap gap-2 text-gray-600">
            <li><Link href="/" className="text-blue-600 hover:underline">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/gpa-calculators" className="text-blue-600 hover:underline">GPA Calculators</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-900 font-semibold">Quick GPA Calculator</li>
          </ol>
        </nav>

        <header className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Quick GPA Calculator</h1>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed max-w-3xl">
            Use our <strong>quick gpa calculator</strong> for lightning-fast GPA calculations. This easy calculator is designed for fast entry with minimal clicks and instant GPA results.
          </p>
          <p className="text-sm text-slate-600 mt-3 leading-relaxed max-w-3xl">
            Enter letter grades or numeric scores using a clean interface that updates results in real time. Quickly compare current GPA, target GPA, and improvement strategies without page reloads.
          </p>
        </header>

        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Calculator</h2>
          <QuickGPACalculator />
        </section>

        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-8" id="table-of-contents">
          <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
          <ul className="list-decimal list-inside space-y-2 text-gray-700">
            <li><a href="#what-is" className="text-blue-600 hover:underline">What Is a Quick GPA Calculator</a></li>
            <li><a href="#how-to-calculate" className="text-blue-600 hover:underline">How to Calculate GPA Quickly</a></li>
            <li><a href="#formula" className="text-blue-600 hover:underline">Quick GPA Formula Explained</a></li>
            <li><a href="#example" className="text-blue-600 hover:underline">Example Quick GPA Calculation</a></li>
            <li><a href="#when-to-use" className="text-blue-600 hover:underline">When to Use a Quick GPA Calculator</a></li>
            <li><a href="#grade-scale" className="text-blue-600 hover:underline">Grade Scale (4.0 GPA)</a></li>
            <li><a href="#related" className="text-blue-600 hover:underline">Related GPA Calculators</a></li>
            <li><a href="#faq" className="text-blue-600 hover:underline">FAQ</a></li>
          </ul>
        </section>

        <article className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 prose prose-slate max-w-none space-y-8">
          <h2 id="what-is">What Is a Quick GPA Calculator</h2>
          <p>
            A <strong>Quick GPA Calculator</strong> is built for speed and simplicity. It gives students an instant estimate with minimum fields, auto row generation, and real-time updates. This tool is optimized for users looking for a <strong>fast gpa calculator</strong> that returns results without waiting or complicated steps.
          </p>

          <h2 id="how-to-calculate">How to Calculate GPA Quickly</h2>
          <p>
            Enter the number of courses and select letter grades. Optionally include credit hours for each course. With Quick Mode (equal credit), the calculator assumes the same number of credit hours for every class and computes the total grade points immediately. The instant response saves a ton of time while keeping the result accurate.
          </p>

          <h2 id="formula">Quick GPA Formula Explained</h2>
          <p>There are two main formulas depending on your credit strategy:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li><strong>Equal-credit quick mode:</strong> GPA = Total Grade Points ÷ Total Courses</li>
            <li><strong>Weighted mode:</strong> GPA = Total Grade Points ÷ Total Credit Hours</li>
          </ul>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mt-4">
            <p className="font-mono text-sm text-slate-700">Total Grade Points = Σ(Grade Point Value × Credit Hours)</p>
          </div>
          <p>
            Total Grade Points = Σ(Grade Point Value × Credit Hours). Our app supports both formulas and highlights the formula in the calculator panel.
          </p>

          <h2 id="example">Example Quick GPA Calculation</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mt-2">
            <pre className="font-mono text-sm text-slate-700 leading-relaxed">
Courses: 4
Grades: A, B+, A-, B
Grade Points: 4.0 + 3.3 + 3.7 + 3.0 = 14.0
GPA = 14 ÷ 4 = 3.5
            </pre>
          </div>

          <h2 id="grade-scale">Grade Scale (4.0 GPA)</h2>
          <p>Use this reference as a quick lookup for standard grade points:</p>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100">
                <th className="border px-3 py-2">Letter Grade</th>
                <th className="border px-3 py-2">Grade Points</th>
              </tr>
            </thead>
            <tbody>
              {gradeScale.map((item) => (
                <tr key={item.grade}>
                  <td className="border px-3 py-2">{item.grade}</td>
                  <td className="border px-3 py-2">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 id="when-to-use">When to Use a Quick GPA Calculator</h2>
          <ul>
            <li>Before or after registration when picking courses in a hurry.</li>
            <li>For instant semester or term planning.</li>
            <li>For scholarship cutoff checks and target planning.</li>
            <li>When students need an <strong>easy gpa calculator</strong> experience on mobile.</li>
            <li>When tracking grades week-by-week and updating your plan in real time.</li>
          </ul>

          <h2 id="related">Related GPA Calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/online-gpa-calculator" className="block rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm hover:shadow-md transition">Online GPA Calculator</Link>
            <Link href="/college-gpa-calculator" className="block rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm hover:shadow-md transition">College GPA Calculator</Link>
            <Link href="/term-gpa-calculator" className="block rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm hover:shadow-md transition">Term GPA Calculator</Link>
            <Link href="/gpa-average-calculator" className="block rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm hover:shadow-md transition">GPA Average Calculator</Link>
            <Link href="/gpa-projection-calculator" className="block rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm hover:shadow-md transition">GPA Projection Calculator</Link>
          </div>

          <h2 id="faq">FAQ</h2>
          {faqItems.map((faq) => (
            <div key={faq.question} className="pt-4 mt-4 border-t border-slate-200">
              <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
              <p className="text-gray-600 mt-1 leading-relaxed">{faq.answer}</p>
            </div>
          ))}

          <h2>External Authority Resources</h2>
          <ul>
            <li><a href="https://www.collegeboard.org" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">College Board</a></li>
            <li><a href="https://nces.ed.gov" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">NCES</a></li>
            <li><a href="https://www.ed.gov" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">U.S. Department of Education</a></li>
          </ul>

          <p className="text-xs text-slate-500 mt-6">This page is optimized for performance and search: minimal JavaScript, semantic markup, fast paint, and mobile-first layout.</p>
        </article>
      </div>
    </div>
  );
}

