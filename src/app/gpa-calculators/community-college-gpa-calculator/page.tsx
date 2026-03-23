import Link from 'next/link';
import { Metadata } from 'next';
import Script from 'next/script';
import CommunityCollegeGPACalculator from '@/components/CommunityCollegeGPACalculator';
import { FAQSchema } from '@/components/SchemaMarkup';
import { jsonLdStringify } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'Community College GPA Calculator – Calculate Your GPA Easily',
  description: 'Use our Community College GPA Calculator to calculate your GPA quickly. Enter your courses, grades, and credit hours to instantly calculate your community college GPA.',
};

const faqItems = [
  {
    question: 'How do you calculate community college GPA?',
    answer: 'Multiply grade values by credits, sum grade points, divide by total credits using the standard 4.0 scale.',
  },
  {
    question: 'What is a good GPA in community college?',
    answer: 'Typically 3.0 or higher; 3.5+ greatly improves university transfer chances.',
  },
  {
    question: 'Do community colleges use a 4.0 GPA scale?',
    answer: 'Yes, most use a 4.0 scale with plus/minus grading.',
  },
  {
    question: 'Can I transfer with a 3.0 GPA from community college?',
    answer: 'Many universities accept transfers with a 3.0 GPA; competitive programs may require higher.',
  },
  {
    question: 'Does community college GPA affect university admission?',
    answer: 'Yes, it is often the primary academic metric for transfer admissions and scholarship consideration.',
  },
];

export default function CommunityCollegeGpaPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type":"ListItem","position":1,"name":"Home","item":"https://topgpacalculator.com"},
      {"@type":"ListItem","position":2,"name":"GPA Calculators","item":"https://topgpacalculator.com/gpa-calculators"},
      {"@type":"ListItem","position":3,"name":"Community College GPA Calculator","item":"https://topgpacalculator.com/gpa-calculators/community-college-gpa-calculator"}
    ]
  };
  const breadcrumbJsonLd = jsonLdStringify(breadcrumbSchema);

  return (
    <>
      {breadcrumbJsonLd && (
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }}
        />
      )}
      <FAQSchema faqs={faqItems} />

      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <nav className="bg-white border-b border-gray-200 py-3">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/></svg></li>
              <li><Link href="/gpa-calculators" className="hover:text-blue-600">GPA Calculators</Link></li>
              <li><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/></svg></li>
              <li className="text-gray-900 font-medium">Community College GPA Calculator</li>
            </ol>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 id="calculator" className="text-4xl font-bold text-gray-900 mb-6">Community College GPA Calculator</h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">Use our <strong>community college GPA calculator</strong> to compute your GPA instantly. Simply add your course names, credit hours, and grades.</p>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Use the Calculator</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">Enter your course information below. Select your grade from the dropdown, enter credit hours, and click "Calculate GPA" to see your results.</p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Grade Conversion Table</h3>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border px-4 py-2 text-left">Letter Grade</th>
                      <th className="border px-4 py-2 text-center">GPA Value</th>
                      <th className="border px-4 py-2 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border px-4 py-2">A</td><td className="border px-4 py-2 text-center">4.0</td><td className="border px-4 py-2">Excellent</td></tr>
                    <tr><td className="border px-4 py-2">A-</td><td className="border px-4 py-2 text-center">3.7</td><td className="border px-4 py-2">Excellent</td></tr>
                    <tr><td className="border px-4 py-2">B+</td><td className="border px-4 py-2 text-center">3.3</td><td className="border px-4 py-2">Good</td></tr>
                    <tr><td className="border px-4 py-2">B</td><td className="border px-4 py-2 text-center">3.0</td><td className="border px-4 py-2">Good</td></tr>
                    <tr><td className="border px-4 py-2">B-</td><td className="border px-4 py-2 text-center">2.7</td><td className="border px-4 py-2">Good</td></tr>
                    <tr><td className="border px-4 py-2">C+</td><td className="border px-4 py-2 text-center">2.3</td><td className="border px-4 py-2">Satisfactory</td></tr>
                    <tr><td className="border px-4 py-2">C</td><td className="border px-4 py-2 text-center">2.0</td><td className="border px-4 py-2">Satisfactory</td></tr>
                    <tr><td className="border px-4 py-2">C-</td><td className="border px-4 py-2 text-center">1.7</td><td className="border px-4 py-2">Satisfactory</td></tr>
                    <tr><td className="border px-4 py-2">D+</td><td className="border px-4 py-2 text-center">1.3</td><td className="border px-4 py-2">Poor</td></tr>
                    <tr><td className="border px-4 py-2">D</td><td className="border px-4 py-2 text-center">1.0</td><td className="border px-4 py-2">Poor</td></tr>
                    <tr><td className="border px-4 py-2">F</td><td className="border px-4 py-2 text-center">0.0</td><td className="border px-4 py-2">Fail</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-12">
            <CommunityCollegeGPACalculator />
          </div>

          <div className="space-y-12">
            <section id="what-is-gpa">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is a Community College GPA</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">A community college GPA is calculated using the same 4.0 scale as other colleges but typically includes courses taken at two-year institutions. This GPA is used for academic standing, transfer applications, and scholarships.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Because community colleges serve a diverse student body, GPAs can vary widely; nevertheless, maintaining a strong GPA improves transfer opportunities to four-year universities.</p>
            </section>

            <section id="how-to-calc">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Calculate Community College GPA</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
                <li>Assign numerical values to each letter grade (A=4.0, A-=3.7, etc.).</li>
                <li>Multiply each grade value by the course's credit hours.</li>
                <li>Add all grade points together.</li>
                <li>Add all credit hours together.</li>
                <li>Divide total grade points by total credit hours to obtain GPA.</li>
              </ol>
              <p className="text-gray-700 mb-4 leading-relaxed">The calculator above performs all steps for you automatically.</p>
            </section>

            <section id="formula">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Community College GPA Formula Explained</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">The standard formula is:</p>
              <p className="text-gray-700 mb-4 leading-relaxed font-mono">GPA = Total Grade Points ÷ Total Credit Hours</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Grade Points = Grade Value × Credit Hours</p>
            </section>

            <section id="example">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Example of Community College GPA Calculation</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead><tr className="bg-gray-50"><th className="border px-4 py-2 text-left">Course</th><th className="border px-4 py-2 text-center">Grade</th><th className="border px-4 py-2 text-center">Value</th><th className="border px-4 py-2 text-center">Credits</th><th className="border px-4 py-2 text-center">Grade Points</th></tr></thead>
                    <tbody>
                      <tr><td className="border px-4 py-2">English Composition</td><td className="border px-4 py-2 text-center">A</td><td className="border px-4 py-2 text-center">4.0</td><td className="border px-4 py-2 text-center">3</td><td className="border px-4 py-2 text-center">12.00</td></tr>
                      <tr><td className="border px-4 py-2">College Algebra</td><td className="border px-4 py-2 text-center">B+</td><td className="border px-4 py-2 text-center">3.3</td><td className="border px-4 py-2 text-center">4</td><td className="border px-4 py-2 text-center">13.20</td></tr>
                      <tr><td className="border px-4 py-2">Psychology</td><td className="border px-4 py-2 text-center">B</td><td className="border px-4 py-2 text-center">3.0</td><td className="border px-4 py-2 text-center">3</td><td className="border px-4 py-2 text-center">9.00</td></tr>
                      <tr className="bg-blue-50"><td className="border px-4 py-2 font-bold" colSpan={4}>TOTALS</td><td className="border px-4 py-2 text-center font-bold">34.20</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">Total credits 10, grade points 34.2 ⇒ GPA = <strong>3.42</strong>.</p>
            </section>

            <section id="good-gpa">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is a Good GPA in Community College</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">A GPA above 3.0 is generally good, 3.5+ is excellent and strengthens transfer applications.</p>
            </section>

            <section id="transfer">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How GPA Affects Transfer to Universities</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Community college GPA is a major factor in transfer admissions; many four-year schools have minimum GPA requirements.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Improving GPA can open doors to scholarship and honors programs at transfer institutions.</p>
            </section>

            <section id="faq">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How do you calculate community college GPA?</h3>
                  <p className="text-gray-700">Multiply grade values by credits, sum grade points, divide by total credits using the standard 4.0 scale.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What is a good GPA in community college?</h3>
                  <p className="text-gray-700">Typically 3.0 or higher; 3.5+ greatly improves university transfer chances.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Do community colleges use a 4.0 GPA scale?</h3>
                  <p className="text-gray-700">Yes, most use a 4.0 scale with plus/minus grading.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Can I transfer with a 3.0 GPA from community college?</h3>
                  <p className="text-gray-700">Many universities accept transfers with a 3.0 GPA; competitive programs may require higher.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Does community college GPA affect university admission?</h3>
                  <p className="text-gray-700">Yes, it is often the primary academic metric for transfer admissions and scholarship consideration.</p>
                </div>
              </div>
            </section>

            <section id="related">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Related GPA Calculators</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/gpa-calculators/college-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg"><h3 className="font-bold mb-2">College GPA Calculator</h3><p className="text-sm text-gray-600">General GPA computations.</p></Link>
                <Link href="/gpa-calculators/high-school-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg"><h3 className="font-bold mb-2">High School GPA Calculator</h3><p className="text-sm text-gray-600">Track high school performance.</p></Link>
                <Link href="/gpa-calculators/weighted-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg"><h3 className="font-bold mb-2">Weighted GPA Calculator</h3><p className="text-sm text-gray-600">Includes Honors/AP weighting.</p></Link>
                <Link href="/gpa-calculators/4-0-scale-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg"><h3 className="font-bold mb-2">4.0 Scale GPA Calculator</h3><p className="text-sm text-gray-600">Use standard 4.0 grading.</p></Link>
                <Link href="/gpa-calculators/5-0-scale-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg"><h3 className="font-bold mb-2">5.0 Scale GPA Calculator</h3><p className="text-sm text-gray-600">For 5.0 grading systems.</p></Link>
                <Link href="/gpa-calculators/cumulative-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg"><h3 className="font-bold mb-2">Cumulative GPA Calculator</h3><p className="text-sm text-gray-600">Combine multiple semesters.</p></Link>
              </div>
            </section>

            <section className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Resources</h3>
              <p className="text-gray-700 mb-4">Find more information at these education sites:</p>
              <ul className="space-y-2 text-blue-600">
                <li><a href="https://www.collegeboard.org" target="_blank" rel="noopener noreferrer" className="hover:underline">College Board</a></li>
                <li><a href="https://nces.ed.gov" target="_blank" rel="noopener noreferrer" className="hover:underline">NCES</a></li>
                <li><a href="https://www.khanacademy.org" target="_blank" rel="noopener noreferrer" className="hover:underline">Khan Academy</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}









