import type { Metadata } from 'next';
import Link from 'next/link';
import GPACalculator from '@/components/GPACalculator';
import FAQ from '@/components/FAQ';

const faqItems = [
  { question: 'How do I calculate GPA online?', answer: 'Add courses with credit hours and grades, then the calculator divides total grade points by total credits to produce your GPA.' },
  { question: 'Is this an accurate online GPA calculator?', answer: 'Yes, this calculator is built on the standard 4.0 GPA scale with optional weighted adjustment for Honors/AP/Advanced courses for accurate results.' },
  { question: 'Can I calculate weighted GPA online?', answer: 'Absolutely. Choose course types Honors, AP, or Advanced and the tool applies the corresponding weight (+0.5 or +1.0) to GPA.' },
  { question: 'What is a good GPA?', answer: 'A strong GPA usually starts at 3.0. 3.5+ is very competitive for scholarships and college admissions, and 3.7+ is excellent.' },
  { question: 'How does credit hour affect GPA?', answer: 'Each course credit multiplies grade value; a 4-credit course influences GPA four times more than a 1-credit course.' },
];

export const metadata: Metadata = {
  title: 'Online GPA Calculator – Calculate Your GPA Instantly',
  description: 'Use our Online GPA Calculator to calculate your GPA instantly. Enter your grades and credit hours to get accurate GPA results with our interactive tool.',
  keywords: 'online gpa calculator, gpa calculator online, calculate gpa online, best online gpa calculator, interactive gpa calculator',
  openGraph: {
    title: 'Online GPA Calculator – Calculate Your GPA Instantly',
    description: 'Use our Online GPA Calculator to calculate your GPA instantly. Enter your grades and credit hours to get accurate GPA results with our interactive tool.',
    type: 'website',
    url: 'https://topgpacalculator.com/gpa-calculators/online-gpa-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online GPA Calculator – Calculate Your GPA Instantly',
    description: 'Use our Online GPA Calculator to calculate your GPA instantly. Enter your grades and credit hours to get accurate GPA results with our interactive tool.',
  },
  alternates: {
    canonical: 'https://topgpacalculator.com/gpa-calculators/online-gpa-calculator',
  },
};

const relatedCalculators = [
  { href: '/gpa-calculators/college-gpa-calculator', name: 'College GPA Calculator' },
  { href: '/gpa-calculators/final-semester-gpa-calculator', name: 'Final Semester GPA Calculator' },
  { href: '/gpa-calculators/term-gpa-calculator', name: 'Term GPA Calculator' },
  { href: '/gpa-calculators/gpa-projection-calculator', name: 'GPA Projection Calculator' },
  { href: '/gpa-calculators/gpa-improvement-calculator', name: 'GPA Improvement Calculator' },
];

const gradeScale = [
  { letter: 'A', value: 4.0 },
  { letter: 'A-', value: 3.7 },
  { letter: 'B+', value: 3.3 },
  { letter: 'B', value: 3.0 },
  { letter: 'B-', value: 2.7 },
  { letter: 'C+', value: 2.3 },
  { letter: 'C', value: 2.0 },
  { letter: 'C-', value: 1.7 },
  { letter: 'D', value: 1.0 },
  { letter: 'F', value: 0.0 },
];

export default function OnlineGPACalculatorPage() {
  const pageUrl = 'https://topgpacalculator.com/gpa-calculators/online-gpa-calculator';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://topgpacalculator.com' },
              { '@type': 'ListItem', position: 2, name: 'GPA Calculators', item: 'https://topgpacalculator.com/gpa-calculators' },
              { '@type': 'ListItem', position: 3, name: 'Online GPA Calculator', item: pageUrl },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: { '@type': 'Answer', text: faq.answer },
            })),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Online GPA Calculator – Calculate Your GPA Instantly',
            description: 'Use our Online GPA Calculator to calculate your GPA instantly. Enter your grades and credit hours to get accurate GPA results with our interactive tool.',
            author: { '@type': 'Organization', name: 'Top GPA Calculator' },
            publisher: { '@type': 'Organization', name: 'Top GPA Calculator' },
            datePublished: '2026-03-18',
            mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
          }),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav aria-label="breadcrumb" className="text-sm mb-6">
          <ol className="flex gap-2 text-gray-600">
            <li><Link href="/" className="text-blue-600 hover:underline">Home</Link></li>
            <li>›</li>
            <li><Link href="/gpa-calculators" className="text-blue-600 hover:underline">GPA Calculators</Link></li>
            <li>›</li>
            <li className="font-semibold text-gray-900">Online GPA Calculator</li>
          </ol>
        </nav>

        <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 mb-8 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Online GPA Calculator</h1>
          <p className="text-lg md:text-xl mb-3">Use our Online GPA Calculator to calculate your GPA instantly. Enter your grades and credit hours to get accurate GPA results with our interactive tool.</p>
          <p>Track your academic performance with a modern, mobile-friendly interface designed for students who need fast and precise results.</p>
        </header>

        <section id="table-of-contents" className="bg-white rounded-2xl p-6 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 text-blue-600">
            <a href="#calculator" className="hover:underline">Calculator</a>
            <a href="#what-is" className="hover:underline">What Is an Online GPA Calculator</a>
            <a href="#how-to-use" className="hover:underline">How to Use</a>
            <a href="#formula" className="hover:underline">Formula</a>
            <a href="#grade-scale" className="hover:underline">Grade Scale</a>
            <a href="#example" className="hover:underline">Example Calculation</a>
            <a href="#weighted-vs-unweighted" className="hover:underline">Weighted vs Unweighted</a>
            <a href="#tips" className="hover:underline">Tips</a>
            <a href="#faq" className="hover:underline">FAQ</a>
            <a href="#related" className="hover:underline">Related Calculators</a>
          </div>
        </section>

        <section id="calculator" className="bg-white rounded-2xl p-6 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Interactive GPA Calculator</h2>
          <p className="text-gray-700 mb-4">Add unlimited courses, remove rows at will, and calculate GPA instantly with optional weighted GPA support and performance classification.</p>
          <GPACalculator />
        </section>

        <section id="what-is" className="bg-white rounded-2xl p-6 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">What Is an Online GPA Calculator</h2>
          <p className="text-gray-700">An online GPA calculator is a tool that allows students to input course names, credit hours, and grades to automatically compute GPA using the standard formula. It is fast, error-free, and perfect for planning academic goals.</p>
        </section>

        <section id="how-to-use" className="bg-white rounded-2xl p-6 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">How to Use the Online GPA Calculator</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Enter course name (optional), credit hours, and letter grade.</li>
            <li>Select course type: Regular, Honors, AP, or Advanced.</li>
            <li>Add new courses with "Add Another Course".</li>
            <li>Remove courses with the Remove button.</li>
            <li>Click "Calculate GPA" to compute GPA instantly.</li>
            <li>Use "Reset Calculator" to clear fields and start fresh.</li>
          </ol>
        </section>

        <section id="formula" className="bg-white rounded-2xl p-6 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">GPA Formula</h2>
          <p className="text-gray-700 mb-2">GPA = Total Grade Points ÷ Total Credit Hours</p>
          <p className="text-gray-700">Grade Points = Grade Value × Credit Hours</p>
          <p className="text-gray-700 mt-2">Weighted Grade Points (if Honors/AP/Advanced): Bonus is added to grade value (max 5.0), then multiplied by credit hours.</p>
        </section>

        <section id="grade-scale" className="bg-white rounded-2xl p-6 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Grade Scale</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <thead className="bg-gray-100">
                <tr><th className="border px-3 py-2">Letter Grade</th><th className="border px-3 py-2">GPA Value</th></tr>
              </thead>
              <tbody>
                {gradeScale.map((item) => (
                  <tr key={item.letter}>
                    <td className="border px-3 py-2">{item.letter}</td>
                    <td className="border px-3 py-2">{item.value.toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-gray-700">Add Honors (+0.5) or AP (+1.0) or Advanced (+0.5) to these values for weighted GPA.</p>
        </section>

        <section id="example" className="bg-white rounded-2xl p-6 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Example Calculation</h2>
          <p className="text-gray-700 mb-1">Math (AP): A (4.0 + 1.0) × 4 = 20.0</p>
          <p className="text-gray-700 mb-1">English (Honors): B+ (3.3 + 0.5) × 3 = 11.4</p>
          <p className="text-gray-700 mb-1">History (Regular): A- (3.7) × 3 = 11.1</p>
          <p className="text-gray-700 mt-2">Total Grade Points = 42.5</p>
          <p className="text-gray-700">Total Credit Hours = 10</p>
          <p className="text-lg font-semibold mt-2">GPA = 42.5 ÷ 10 = 4.25 (Weighted)</p>
        </section>

        <section id="weighted-vs-unweighted" className="bg-white rounded-2xl p-6 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Weighted vs Unweighted GPA</h2>
          <p className="text-gray-700 mb-2">Unweighted GPA uses base grade values only. Weighted GPA adds bonus points for rigorous coursework.</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Regular: no bonus</li>
            <li>Honors: +0.5</li>
            <li>AP: +1.0</li>
            <li>Advanced: +0.5</li>
          </ul>
        </section>

        <section id="tips" className="bg-white rounded-2xl p-6 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Tips to Improve Your GPA</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Focus on high credit courses with strong grades.</li>
            <li>Take rigorous courses early but balance workload.</li>
            <li>Use the calculator regularly to test scenarios.</li>
            <li>Study consistently and seek academic help when needed.</li>
            <li>Retake courses where possible to replace low scores.</li>
          </ol>
        </section>

        <section id="related" className="bg-white rounded-2xl p-6 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Related GPA Calculators</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {relatedCalculators.map((item) => (
              <Link key={item.href} href={item.href} className="block p-3 border border-gray-200 rounded-lg hover:border-blue-500">{item.name}</Link>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl p-6 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">External Authority Links</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li><a href="https://www.collegeboard.org" target="_blank" rel="noreferrer">College Board</a></li>
            <li><a href="https://nces.ed.gov" target="_blank" rel="noreferrer">NCES</a></li>
            <li><a href="https://www.ed.gov" target="_blank" rel="noreferrer">U.S. Department of Education</a></li>
          </ul>
        </section>

        <section id="faq" className="bg-white rounded-2xl p-6 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <FAQ items={faqItems} />
        </section>

        <footer className="text-center text-sm text-gray-500 py-6">
          <p>© {new Date().getFullYear()} Top GPA Calculator. Always verify with your school’s official policy.</p>
        </footer>
      </div>
    </div>
  );
}
