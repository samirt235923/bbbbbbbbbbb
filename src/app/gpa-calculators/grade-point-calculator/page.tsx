import type { Metadata } from 'next';
import Link from 'next/link';
import GradePointCalculator from '@/components/GradePointCalculator';
import FAQ from '@/components/FAQ';

const faqItems = [
  { question: 'How do I calculate grade points?', answer: 'Grade points are calculated as grade value multiplied by credit hours for each course. Our calculator performs this in real time and provides totals.' },
  { question: 'What is a good grade point?', answer: 'A good GPA is usually 3.0 or above. Aim for 3.5+ to be competitive for scholarships and advanced programs.' },
  { question: 'Does grade point affect GPA?', answer: 'Yes, total grade points divided by total credits yields GPA. The calculator shows both totals and GPA automatically.' },
  { question: 'Can I calculate grade points for weighted courses?', answer: 'Yes. Select Honors or AP course type to get bonus points (+0.5 or +1.0) and see weighted calculations.' },
  { question: 'What is the difference between grade points and GPA?', answer: 'Grade points are per-course points based on credit hours. GPA is the cumulative average of grade points divided by total credits.' },
];

export const metadata: Metadata = {
  title: 'Grade Point Calculator – Calculate Your Grades Easily',
  description: 'Use our Grade Point Calculator to calculate grade points and GPA quickly. Supports weighted courses, credit hours, and multiple grading scales.',
  keywords: 'grade point calculator, calculate grade points, gpa grade point calculator, academic grade point calculator, college grade point calculator',
  openGraph: {
    title: 'Grade Point Calculator – Calculate Your Grades Easily',
    description: 'Use our Grade Point Calculator to calculate grade points and GPA quickly. Supports weighted courses, credit hours, and multiple grading scales.',
    type: 'website',
    url: 'https://topgpacalculator.com/gpa-calculators/grade-point-calculator',
    images: [{ url: 'https://topgpacalculator.com/og-image.png', width: 1200, height: 630, alt: 'Grade Point Calculator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grade Point Calculator – Calculate Your Grades Easily',
    description: 'Use our Grade Point Calculator to calculate grade points and GPA quickly. Supports weighted courses, credit hours, and multiple grading scales.',
    images: ['https://topgpacalculator.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://topgpacalculator.com/gpa-calculators/grade-point-calculator',
  },
};

export default function GradePointCalculatorPage() {
  const pageUrl = 'https://topgpacalculator.com/gpa-calculators/grade-point-calculator';

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://topgpacalculator.com' },
              { '@type': 'ListItem', position: 2, name: 'GPA Calculators', item: 'https://topgpacalculator.com/gpa-calculators' },
              { '@type': 'ListItem', position: 3, name: 'Grade Point Calculator', item: pageUrl },
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
            headline: 'Grade Point Calculator – Calculate Your Grades Easily',
            description: 'Use our Grade Point Calculator to calculate grade points and GPA quickly. Supports weighted courses, credit hours, and multiple grading scales.',
            author: { '@type': 'Organization', name: 'Top GPA Calculator' },
            publisher: { '@type': 'Organization', name: 'Top GPA Calculator' },
            datePublished: '2026-03-19',
            mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
          }),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm mb-6" aria-label="Breadcrumb">
          <ol className="flex gap-2 text-gray-500">
            <li><Link href="/" className="text-blue-600 hover:underline">Home</Link></li>
            <li>›</li>
            <li><Link href="/gpa-calculators" className="text-blue-600 hover:underline">GPA Calculators</Link></li>
            <li>›</li>
            <li className="font-semibold text-gray-900">Grade Point Calculator</li>
          </ol>
        </nav>

        <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 mb-8 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Grade Point Calculator</h1>
          <p className="text-lg md:text-xl">Use our Grade Point Calculator to calculate grade points and GPA quickly. Supports weighted courses, credit hours, and multiple grading scales.</p>
        </header>

        <section id="table-of-contents" className="bg-white rounded-2xl p-6 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            <a className="text-blue-600 hover:underline" href="#calculator">Calculator</a>
            <a className="text-blue-600 hover:underline" href="#what-is">What Is</a>
            <a className="text-blue-600 hover:underline" href="#how-to">How to Calculate</a>
            <a className="text-blue-600 hover:underline" href="#formula">Formulas</a>
            <a className="text-blue-600 hover:underline" href="#example">Example</a>
            <a className="text-blue-600 hover:underline" href="#importance">Why It Matters</a>
            <a className="text-blue-600 hover:underline" href="#related">Related Calculators</a>
            <a className="text-blue-600 hover:underline" href="#faq">FAQ</a>
          </div>
        </section>

        <section id="calculator" className="bg-white rounded-2xl p-6 mb-8 border border-gray-200">
          <GradePointCalculator />
        </section>

        <article className="prose prose-slate max-w-none">
          <section id="what-is">
            <h2>What Is a Grade Point Calculator</h2>
            <p>An online grade point calculator helps students calculate grade points for each course and aggregate totals that determine GPA. It is essential for academic planning and tracking performance across semesters.</p>
          </section>

          <section id="how-to">
            <h2>How to Calculate Grade Points</h2>
            <ol>
              <li>Enter course name, credit hours, grade, and course type.</li>
              <li>Grade points are computed as grade value × credit hours.</li>
              <li>Weighted courses apply bonus points for Honors/AP.</li>
              <li>Sum total grade points and total credits to compute GPA.</li>
              <li>Use results to monitor progress and make course plans.</li>
            </ol>
          </section>

          <section id="formula">
            <h2>Grade Point Formula Explained</h2>
            <p>Grade Points per Course = Grade Value × Credit Hours</p>
            <p>GPA = Total Grade Points ÷ Total Credit Hours</p>
            <p>Weighted Grade = Base Grade + Bonus (Honors +0.5, AP +1.0)</p>
          </section>

          <section id="example">
            <h2>Example Grade Point Calculation</h2>
            <p>Math → A (4.0 × 3) = 12</p>
            <p>English → B+ (3.3 × 4) = 13.2</p>
            <p>Science → B (3.0 × 3) = 9</p>
            <p>Total Grade Points = 34.2</p>
            <p>Total Credits = 10</p>
            <p>GPA = 34.2 ÷ 10 = 3.42</p>
          </section>

          <section id="importance">
            <h2>Why Grade Points Are Important</h2>
            <p>Grade points are the foundation of GPA calculations, academic performance review, college admissions, and scholarship qualification. Accurate tracking helps students set realistic academic goals and measure improvement.
            </p>
          </section>

          <section id="related">
            <h2>Related Calculators</h2>
            <ul>
              <li><Link href="/gpa-calculators/gpa-calculator" className="text-blue-600 hover:underline">GPA Calculator</Link></li>
              <li><Link href="/gpa-calculators/weighted-gpa-calculator" className="text-blue-600 hover:underline">Weighted GPA Calculator</Link></li>
              <li><Link href="/gpa-calculators/semester-gpa-calculator" className="text-blue-600 hover:underline">Semester GPA Calculator</Link></li>
              <li><Link href="/gpa-calculators/cumulative-gpa-calculator" className="text-blue-600 hover:underline">Cumulative GPA Calculator</Link></li>
              <li><Link href="/gpa-calculators/gpa-improvement-calculator" className="text-blue-600 hover:underline">GPA Improvement Calculator</Link></li>
            </ul>
          </section>

          <section id="external">
            <h2>Authority References</h2>
            <ul>
              <li><a href="https://www.collegeboard.org" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">College Board</a></li>
              <li><a href="https://nces.ed.gov" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">NCES</a></li>
              <li><a href="https://www.ed.gov" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">U.S. Department of Education</a></li>
            </ul>
          </section>

          <section id="faq">
            <h2>FAQ</h2>
            <FAQ items={faqItems} />
          </section>
        </article>
      </div>
    </div>
  );
}
