import { Metadata } from 'next';
import Link from 'next/link';
import FivePointZeroGPACalculator from '@/components/FivePointZeroGPACalculator';

export const metadata: Metadata = {
  title: '5.0 Scale GPA Calculator (Weighted GPA) – Free & Accurate Tool',
  description: 'Use our free 5.0 Scale GPA Calculator to calculate your weighted GPA instantly. Enter your courses, grades, and credit hours to get your GPA on a 5.0 scale.',
  keywords: '5.0 GPA calculator, calculate 5.0 scale GPA, weighted GPA calculator 5.0 scale, high school 5.0 GPA calculator, GPA calculator 5.0 scale',
  openGraph: {
    title: '5.0 Scale GPA Calculator (Weighted GPA) – Free & Accurate Tool',
    description: 'Use our free 5.0 Scale GPA Calculator to calculate your weighted GPA instantly. Enter your courses, grades, and credit hours to get your GPA on a 5.0 scale.',
    type: 'website',
    url: 'https://toptopgpacalculator.com/gpa-calculators/5-0-scale-gpa-calculator',
    images: [
      {
        url: 'https://toptopgpacalculator.com/og-image.png',
        width: 1200,
        height: 630,
        alt: '5.0 Scale GPA Calculator Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '5.0 Scale GPA Calculator (Weighted GPA) – Free & Accurate Tool',
    description: 'Use our free 5.0 Scale GPA Calculator to calculate your weighted GPA instantly. Enter your courses, grades, and credit hours to get your GPA on a 5.0 scale.',
  },
  alternates: {
    canonical: 'https://toptopgpacalculator.com/gpa-calculators/5-0-scale-gpa-calculator',
  },
  other: {
    'article:author': 'GPA Calculator',
    'article:published_time': '2024-01-01T00:00:00.000Z',
    'article:modified_time': '2024-01-01T00:00:00.000Z',
    'article:section': 'Education',
    'article:tag': 'GPA Calculator',
  },
};

const faqData = [
  {
    question: 'What is a 5.0 GPA scale?',
    answer: 'A 5.0 GPA scale is a weighted grading system where AP (Advanced Placement) courses can earn up to 5.0 grade points, Honors courses up to 4.5, and regular courses up to 4.0. This allows students to achieve GPAs higher than 4.0 by taking more challenging courses.',
  },
  {
    question: 'Is a 4.5 GPA good?',
    answer: 'Yes, a 4.5 GPA is excellent and indicates outstanding academic performance. It typically requires taking Honors or AP courses and earning high grades. A 4.5 GPA places students in the top percentile of their class and is highly competitive for college admissions.',
  },
  {
    question: 'How is weighted GPA calculated?',
    answer: 'Weighted GPA is calculated by assigning higher point values to more challenging courses. AP courses receive +1.0 bonus points, Honors courses receive +0.5 bonus points. The formula is: Total Weighted Grade Points ÷ Total Credit Hours.',
  },
  {
    question: 'Can GPA be higher than 4.0?',
    answer: 'Yes, with a weighted GPA system, students can achieve GPAs higher than 4.0. AP courses can earn up to 5.0 points per grade, allowing exceptional students to reach GPAs of 5.0 or higher.',
  },
  {
    question: 'Do AP classes increase GPA?',
    answer: 'Yes, AP classes can significantly increase your GPA. An A in an AP course earns 5.0 grade points instead of 4.0, giving you a full point bonus. This rewards students for taking challenging courses.',
  },
];

export default function FivePointZeroScaleGPACalculatorPage() {
  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center space-x-2 text-sm text-secondary-600">
            <li><Link href="/" className="hover:text-primary-600 transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/gpa-calculators" className="hover:text-primary-600 transition-colors">GPA Calculators</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-secondary-900 font-medium" aria-current="page">5.0 Scale GPA Calculator</li>
          </ol>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Table of Contents */}
        <nav aria-label="Table of Contents" className="bg-white rounded-xl p-6 mb-8 shadow-soft border border-secondary-100">
          <h2 className="text-lg font-bold text-secondary-900 mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#calculator" className="text-primary-600 hover:text-primary-800 focus:ring-2 focus:ring-primary-500 rounded outline-none transition-colors">5.0 Scale GPA Calculator</a></li>
            <li><a href="#what-is-5-0-gpa" className="text-primary-600 hover:text-primary-800 focus:ring-2 focus:ring-primary-500 rounded outline-none transition-colors">What is a 5.0 GPA Scale</a></li>
            <li><a href="#how-to-calculate" className="text-primary-600 hover:text-primary-800 focus:ring-2 focus:ring-primary-500 rounded outline-none transition-colors">How to Calculate 5.0 Scale GPA</a></li>
            <li><a href="#4-0-vs-5-0" className="text-primary-600 hover:text-primary-800 focus:ring-2 focus:ring-primary-500 rounded outline-none transition-colors">Difference Between 4.0 and 5.0 GPA Scale</a></li>
            <li><a href="#weighted-formula" className="text-primary-600 hover:text-primary-800 focus:ring-2 focus:ring-primary-500 rounded outline-none transition-colors">Weighted GPA Formula Explained</a></li>
            <li><a href="#example-calculation" className="text-primary-600 hover:text-primary-800 focus:ring-2 focus:ring-primary-500 rounded outline-none transition-colors">Example of 5.0 GPA Calculation</a></li>
            <li><a href="#improve-gpa" className="text-primary-600 hover:text-primary-800 focus:ring-2 focus:ring-primary-500 rounded outline-none transition-colors">How to Improve Your Weighted GPA</a></li>
            <li><a href="#faq" className="text-primary-600 hover:text-primary-800 focus:ring-2 focus:ring-primary-500 rounded outline-none transition-colors">Frequently Asked Questions</a></li>
            <li><a href="#related-calculators" className="text-primary-600 hover:text-primary-800 focus:ring-2 focus:ring-primary-500 rounded outline-none transition-colors">Related GPA Calculators</a></li>
          </ul>
        </nav>

        {/* H1 Title & Introduction */}
        <header className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-secondary-900 mb-6 text-center tracking-tight">
            5.0 Scale GPA Calculator
          </h1>
          <div className="bg-white rounded-xl p-6 shadow-soft border border-secondary-100">
            <p className="text-secondary-700 mb-4 leading-relaxed text-lg">
              Use our free <strong>5.0 Scale GPA Calculator</strong> to calculate your weighted GPA instantly.
              This advanced calculator supports the 5.0 grading scale used by many high schools and colleges,
              where AP courses can earn up to 5.0 grade points.
            </p>
            <p className="text-secondary-700 leading-relaxed">
              Our calculator handles unlimited courses and provides instant results with detailed breakdowns. Simply enter your courses, grades, credit hours, and course levels to understand your precise academic standing.
            </p>
          </div>
        </header>

        {/* Calculator Section */}
        <section id="calculator" className="mb-12 scroll-mt-6">
          <FivePointZeroGPACalculator />
        </section>

        {/* Example Quick Glance */}
        <div className="bg-primary-50 rounded-xl p-6 mb-10 border border-primary-200 shadow-sm">
          <h3 className="text-xl font-bold text-secondary-900 mb-4">Quick Example Calculation</h3>
          <p className="text-secondary-700 mb-4">
            Let's calculate a short semester using our 5.0 scale:
          </p>
          <ul className="list-disc list-inside text-secondary-700 mb-4 space-y-2">
            <li><strong>Math (AP):</strong> A (5.0) × 3 credits = <span className="font-semibold">15 points</span></li>
            <li><strong>English (Honors):</strong> B (3.5) × 3 credits = <span className="font-semibold">10.5 points</span></li>
            <li><strong>Science (Regular):</strong> A (4.0) × 4 credits = <span className="font-semibold">16 points</span></li>
          </ul>
          <div className="bg-white/60 p-4 rounded-md mt-4">
            <p className="text-secondary-800">
              <strong>Total Points:</strong> 41.5 <br />
              <strong>Total Credits:</strong> 10 <br />
              <span className="text-primary-700 font-bold text-lg">Final GPA: 4.15</span> (41.5 ÷ 10)
            </p>
          </div>
        </div>

        {/* SEO Content Sections */}
        <article className="space-y-12">
          
          <section id="what-is-5-0-gpa" className="scroll-mt-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-4">What is a 5.0 GPA Scale?</h2>
            <p className="text-secondary-700 mb-4 leading-relaxed">
              A 5.0 GPA scale is a weighted grading system that rewards students for taking more challenging courses.
              Unlike the traditional 4.0 scale where an A is worth 4.0 points regardless of course difficulty,
              the 5.0 scale gives bonus points for Advanced Placement (AP) and Honors courses.
            </p>
            <p className="text-secondary-700 leading-relaxed">
              In this system, regular courses maintain the standard 4.0 scale. Honors courses receive a 0.5 point bonus (A=4.5), while AP courses receive a full 1.0 point bonus (A=5.0). This allows exceptional students to achieve GPAs higher than 4.0, distinguishing them in competitive college admissions.
            </p>
          </section>

          <section id="how-to-calculate" className="scroll-mt-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-4">How to Calculate 5.0 Scale GPA</h2>
            <p className="text-secondary-700 mb-6 leading-relaxed">
              Calculating your GPA on a 5.0 scale involves a few simple steps. First, assign grade points for each letter grade based on the course level. Then multiply each grade by its credit hours and sum everything up.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border border-secondary-200 shadow-sm">
                <h3 className="font-bold text-secondary-900 mb-2 flex items-center gap-2">
                  <span className="bg-primary-100 text-primary-800 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span> 
                  Assign Grade Points
                </h3>
                <ul className="text-secondary-700 space-y-2 ml-8">
                  <li><strong>Regular:</strong> A=4.0, B=3.0, C=2.0, D=1.0, F=0.0</li>
                  <li><strong>Honors:</strong> A=4.5, B=3.5, C=2.5, D=1.5, F=0.0</li>
                  <li><strong>AP/IB:</strong> A=5.0, B=4.0, C=3.0, D=2.0, F=0.0</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-5 border border-secondary-200 shadow-sm">
                <h3 className="font-bold text-secondary-900 mb-2 flex items-center gap-2">
                  <span className="bg-primary-100 text-primary-800 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span> 
                  Multiply by Credits
                </h3>
                <p className="text-secondary-700 ml-8">Multiply each assigned Grade Point value by the number of credit hours for that specific course.</p>
              </div>
              <div className="bg-white rounded-lg p-5 border border-secondary-200 shadow-sm">
                <h3 className="font-bold text-secondary-900 mb-2 flex items-center gap-2">
                  <span className="bg-primary-100 text-primary-800 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span> 
                  Divide by Total
                </h3>
                <p className="text-secondary-700 ml-8">Divide the sum of your total calculated grade points by the total number of credit hours attempted.</p>
              </div>
            </div>
          </section>

          <section id="4-0-vs-5-0" className="scroll-mt-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-4">Difference Between 4.0 and 5.0 GPA Scale</h2>
            
            <p className="text-secondary-700 mb-4 leading-relaxed mt-4">
              The primary difference between 4.0 and 5.0 GPA scales is that the 5.0 scale allows for <strong>weighted grades</strong>.
              In a 4.0 scale, all courses are treated equally regardless of difficulty. An A in an introductory elective counts exactly the same as an A in AP Calculus.
            </p>
            <p className="text-secondary-700 mb-4 leading-relaxed">
              The 5.0 scale recognizes that some courses are significantly more challenging. Students who take rigorous courses are rewarded with higher GPAs, which better reflects their academic stamina. A student who takes all regular courses is capped at 4.0, making the 5.0 scale better for distinguishing valedictorian candidates.
            </p>
          </section>

          <section id="weighted-formula" className="scroll-mt-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-4">Weighted GPA Formula Explained</h2>
            <div className="bg-accent-50 rounded-xl p-6 md:p-8 mb-4 border border-accent-200 shadow-sm">
              <h3 className="text-lg font-bold text-secondary-900 mb-4 text-center">Standard Weighted GPA Formula</h3>
              <div className="text-center mb-6">
                <code className="block md:inline-block text-sm md:text-lg bg-white px-6 py-4 rounded-lg border border-accent-300 font-mono shadow-inner text-secondary-800 break-words">
                  GPA = Σ(Grade Points × Credit Hours) ÷ Σ(Credit Hours)
                </code>
              </div>
              <p className="text-secondary-700 text-center">
                Where standard grade points receive a <strong>+0.5 modifier</strong> for Honors and a <strong>+1.0 modifier</strong> for AP/IB courses.
              </p>
            </div>
          </section>

          <section id="example-calculation" className="scroll-mt-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-4">Example of a Full 5.0 Calculation</h2>
            <div className="bg-white rounded-xl overflow-hidden mb-4 border border-secondary-200 shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-secondary-50 text-secondary-800 uppercase text-xs">
                    <tr>
                      <th scope="col" className="px-6 py-4 font-semibold">Course</th>
                      <th scope="col" className="px-6 py-4 font-semibold">Level</th>
                      <th scope="col" className="px-6 py-4 font-semibold">Grade</th>
                      <th scope="col" className="px-6 py-4 font-semibold">Credits</th>
                      <th scope="col" className="px-6 py-4 font-semibold">Grade Pts</th>
                      <th scope="col" className="px-6 py-4 font-semibold text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-secondary-200 text-secondary-700">
                    <tr className="hover:bg-secondary-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium">AP Calculus</td>
                      <td className="px-6 py-4">AP</td>
                      <td className="px-6 py-4 font-semibold">A</td>
                      <td className="px-6 py-4">3</td>
                      <td className="px-6 py-4">5.0</td>
                      <td className="px-6 py-4 text-right">15.0</td>
                    </tr>
                    <tr className="hover:bg-secondary-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium">Honors English</td>
                      <td className="px-6 py-4">Honors</td>
                      <td className="px-6 py-4 font-semibold">B+</td>
                      <td className="px-6 py-4">3</td>
                      <td className="px-6 py-4">3.8</td>
                      <td className="px-6 py-4 text-right">11.4</td>
                    </tr>
                    <tr className="hover:bg-secondary-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium">Regular Biology</td>
                      <td className="px-6 py-4">Regular</td>
                      <td className="px-6 py-4 font-semibold">A-</td>
                      <td className="px-6 py-4">4</td>
                      <td className="px-6 py-4">3.7</td>
                      <td className="px-6 py-4 text-right">14.8</td>
                    </tr>
                    <tr className="bg-secondary-50 font-bold text-secondary-900">
                      <td className="px-6 py-4" colSpan={3}>Totals</td>
                      <td className="px-6 py-4">10</td>
                      <td className="px-6 py-4">-</td>
                      <td className="px-6 py-4 text-right">41.2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section id="improve-gpa" className="scroll-mt-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-6">How to Improve Your Weighted GPA</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-primary-50 rounded-xl p-6 border border-primary-100 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-secondary-900 mb-2 text-lg">Take AP/Honors Courses</h3>
                <p className="text-secondary-700 text-sm leading-relaxed">
                  The most effective way to improve a weighted GPA is to enroll in advanced courses. Each AP course gives you a full point bonus, dramatically increasing your ceiling.
                </p>
              </div>
              <div className="bg-accent-50 rounded-xl p-6 border border-accent-100 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-secondary-900 mb-2 text-lg">Maintain High Grades</h3>
                <p className="text-secondary-700 text-sm leading-relaxed">
                  Focus on earning A's. An A in an AP course (5.0) is worth much more than an A in a regular course (4.0), but a C in an AP course (3.0) might hurt more than an A in a regular class.
                </p>
              </div>
              <div className="bg-secondary-50 rounded-xl p-6 border border-secondary-200 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-secondary-900 mb-2 text-lg">Strategic Course Selection</h3>
                <p className="text-secondary-700 text-sm leading-relaxed">
                  Choose advanced courses in subjects where you naturally excel. It's often better to earn an A in one AP course than to struggle and earn B's and C's in multiple AP classes.
                </p>
              </div>
              <div className="bg-warning-50 rounded-xl p-6 border border-warning-200 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-secondary-900 mb-2 text-lg">Seek Academic Support</h3>
                <p className="text-secondary-700 text-sm leading-relaxed">
                  Use tutoring, peer study groups, and teacher office hours early. Strong support systems help you maintain high grades before you fall behind in challenging weighted courses.
                </p>
              </div>
            </div>
          </section>
        </article>

        <hr className="my-12 border-secondary-200" />

        {/* FAQ Section with Zero-JS Details Accordion */}
        <section id="faq" className="mb-12 scroll-mt-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <details 
                key={index} 
                className="group bg-white rounded-xl p-6 shadow-sm border border-secondary-200 hover:border-primary-300 transition-colors cursor-pointer"
              >
                <summary className="text-lg font-semibold text-secondary-900 list-none flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded">
                  {faq.question}
                  <span className="text-primary-500 transition-transform duration-300 group-open:rotate-180">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="text-secondary-700 leading-relaxed mt-4 pt-4 border-t border-secondary-100">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Related Calculators */}
        <section id="related-calculators" className="mb-12 scroll-mt-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-6">
            Related GPA Calculators
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/gpa-calculators/college-gpa-calculator" className="block bg-white rounded-xl p-6 shadow-sm border border-secondary-200 hover:shadow-md hover:border-primary-300 transition-all focus:ring-2 focus:ring-primary-500 outline-none">
              <h3 className="text-lg font-bold text-secondary-900 mb-2">College GPA Calculator</h3>
              <p className="text-secondary-700 text-sm">Calculate your college GPA with our comprehensive tool that supports semester and cumulative calculations.</p>
            </Link>
            <Link href="/gpa-calculators/high-school-gpa-calculator" className="block bg-white rounded-xl p-6 shadow-sm border border-secondary-200 hover:shadow-md hover:border-primary-300 transition-all focus:ring-2 focus:ring-primary-500 outline-none">
              <h3 className="text-lg font-bold text-secondary-900 mb-2">High School GPA Calculator</h3>
              <p className="text-secondary-700 text-sm">Perfect for high school students calculating their GPA for college applications and academic planning.</p>
            </Link>
            <Link href="/gpa-calculators/weighted-gpa-calculator" className="block bg-white rounded-xl p-6 shadow-sm border border-secondary-200 hover:shadow-md hover:border-primary-300 transition-all focus:ring-2 focus:ring-primary-500 outline-none">
              <h3 className="text-lg font-bold text-secondary-900 mb-2">Weighted GPA Calculator</h3>
              <p className="text-secondary-700 text-sm">Advanced calculator for weighted GPA systems with customizable bonus points for honors and AP courses.</p>
            </Link>
            <Link href="/gpa-calculators/unweighted-gpa-calculator" className="block bg-white rounded-xl p-6 shadow-sm border border-secondary-200 hover:shadow-md hover:border-primary-300 transition-all focus:ring-2 focus:ring-primary-500 outline-none">
              <h3 className="text-lg font-bold text-secondary-900 mb-2">Unweighted GPA Calculator</h3>
              <p className="text-secondary-700 text-sm">Simple calculator using the traditional 4.0 scale without weighting for course difficulty.</p>
            </Link>
          </div>
        </section>

        {/* External Links */}
        <aside className="bg-secondary-50 rounded-xl p-6 border border-secondary-200 mt-12">
          <h3 className="text-lg font-bold text-secondary-900 mb-4">Additional Resources</h3>
          <p className="text-secondary-700 mb-4">For more information about GPA calculations and college admissions:</p>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="https://apstudents.collegeboard.org/courses" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800 font-medium inline-flex items-center gap-1 focus:outline-none focus:underline">
                College Board - AP Courses and GPA Information
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </li>
            <li>
              <a href="https://nces.ed.gov" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800 font-medium inline-flex items-center gap-1 focus:outline-none focus:underline">
                National Center for Education Statistics
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </li>
            <li>
              <a href="https://www.ed.gov" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800 font-medium inline-flex items-center gap-1 focus:outline-none focus:underline">
                U.S. Department of Education
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </li>
          </ul>
        </aside>

      </main>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "FAQPage",
                "mainEntity": faqData.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              },
              {
                "@type": "Article",
                "headline": "5.0 Scale GPA Calculator (Weighted GPA) – Free & Accurate Tool",
                "description": "Use our free 5.0 Scale GPA Calculator to calculate your weighted GPA instantly. Enter your courses, grades, and credit hours to get your GPA on a 5.0 scale.",
                "author": {
                  "@type": "Organization",
                  "name": "GPA Calculator"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "GPA Calculator"
                },
                "datePublished": "2024-01-01",
                "dateModified": "2024-01-01"
              }
            ]
          })
        }}
      />
    </div>
  );
}




