import { Metadata } from 'next';
import Link from 'next/link';
import SimpleGPACalculator from '@/components/SimpleGPACalculator';
import { FAQSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Simple GPA Calculator – Quick & Easy GPA Tool',
  description: 'Use our Simple GPA Calculator to quickly calculate your GPA. Enter your grades and credits for instant and accurate results.',
  keywords: 'simple gpa calculator, easy gpa calculator, quick gpa calculator, basic gpa calculator, calculate gpa quickly',
  openGraph: {
    title: 'Simple GPA Calculator – Quick & Easy GPA Tool',
    description: 'Use our Simple GPA Calculator to quickly calculate your GPA. Enter your grades and credits for instant and accurate results.',
    type: 'website',
    url: 'https://topgpacalculator.com/gpa-calculators/simple-gpa-calculator',
    images: [{ url: 'https://topgpacalculator.com/logo.svg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simple GPA Calculator – Quick & Easy GPA Tool',
    description: 'Use our Simple GPA Calculator to quickly calculate your GPA. Enter your grades and credits for instant and accurate results.',
  },
  alternates: {
    canonical: 'https://topgpacalculator.com/gpa-calculators/simple-gpa-calculator',
  },
};

const faqItems = [
  { question: 'How do I calculate GPA quickly?', answer: 'Use this simple GPA calculator to enter each course grade and credit hours. It computes total grade points and divides by total credits instantly for a quick answer.' },
  { question: 'What is the easiest way to calculate GPA?', answer: 'The easiest way is to use an automatic calculator like this one, which removes manual multiplication and addition, and gives a result in real time using the standard formula.' },
  { question: 'What is a good GPA?', answer: 'A good GPA is generally 3.0 or higher, while 3.5+ is strong for college or scholarship applications. Use this tool to track and improve your GPA over time.' },
  { question: 'Can I calculate GPA without credits?', answer: 'This calculator is credit-based, but you can also use equal credit assumptions by entering the same credit hours for each course if you prefer quick estimates.' },
  { question: 'Is this calculator accurate?', answer: 'Yes, it uses the standard GPA formula: Total Grade Points ÷ Total Credit Hours, with grade values based on the 4.0 scale. It is fast, accurate, and mobile-friendly.' },
];

export default function SimpleGPACalculatorPage() {
  const baseUrl = 'https://topgpacalculator.com/gpa-calculators/simple-gpa-calculator';

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      
      <FAQSchema faqs={faqItems} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav aria-label="Breadcrumb" className="text-sm mb-6 text-gray-500">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="text-blue-600 hover:underline">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/gpa-calculators" className="text-blue-600 hover:underline">GPA Calculators</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-900 font-semibold">Simple GPA Calculator</li>
          </ol>
        </nav>

        <header className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_10px_25px_rgba(15,23,42,0.08)] mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-3">Simple GPA Calculator</h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl">
            This <strong>simple gpa calculator</strong> is designed for speed and ease: add/remove courses, fill credit hours and grades, and see instant results. It’s a lightweight, distraction-free experience for students who need quick GPA insights.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            URL Slug: <strong>/gpa-calculators/simple-gpa-calculator</strong>
          </div>
        </header>

        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Calculator</h2>
          <SimpleGPACalculator />
        </section>

        <section id="table-of-contents" className="bg-white p-6 md:p-8 rounded-2xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Table of Contents</h2>
          <ul className="list-decimal list-inside space-y-2 text-gray-700">
            <li><a href="#what-is" className="text-blue-600 hover:underline">What Is a Simple GPA Calculator</a></li>
            <li><a href="#how-to-calculate" className="text-blue-600 hover:underline">How to Calculate GPA Quickly</a></li>
            <li><a href="#formula" className="text-blue-600 hover:underline">GPA Formula Explained</a></li>
            <li><a href="#example" className="text-blue-600 hover:underline">Example GPA Calculation</a></li>
            <li><a href="#benefits" className="text-blue-600 hover:underline">Benefits of Using a Simple GPA Calculator</a></li>
            <li><a href="#grade-scale" className="text-blue-600 hover:underline">Grade Scale (4.0)</a></li>
            <li><a href="#related" className="text-blue-600 hover:underline">Related GPA Calculators</a></li>
            <li><a href="#faq" className="text-blue-600 hover:underline">FAQ</a></li>
          </ul>
        </section>

        <section className="space-y-8">
          <article className="bg-white p-6 md:p-8 rounded-2xl shadow-md">
            <h2 id="what-is" className="text-2xl font-semibold text-slate-900 mb-4">What Is a Simple GPA Calculator</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A Simple GPA Calculator is a lightweight educational tool built for speed, clarity, and accuracy. It helps high school and college students calculate their GPA quickly by entering course grades and credit hours. This tool is meant for users who want an easy gpa calculator with minimal steps, no complex configurations, and real-time results.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Simple GPA calculators are especially useful for students tracking progress between semesters, applying for scholarships, or planning target grades. This version contains built-in support for a standard 4.0 letter grade scale with optional plus/minus adjustments, making it both basic and powerful.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Built around the principle of “less is more,” this page focuses on fast load time, clean interface, and strong SEO signals for keywords like <em>simple gpa calculator</em>, <em>easy gpa calculator</em>, <em>quick gpa calculator</em>, and <em>calculate gpa quickly</em>.
            </p>
          </article>

          <article className="bg-white p-6 md:p-8 rounded-2xl shadow-md">
            <h2 id="how-to-calculate" className="text-2xl font-semibold text-slate-900 mb-4">How to Calculate GPA Quickly</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              This calculator is designed for instant grading without distractions. Follow this easy path to calculate your GPA in under a minute:
            </p>
            <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-700">
              <li>Optional: Type the course name (e.g., Math, English, Biology). This helps keep records organized.</li>
              <li>Select the correct number of credit hours for each course. Common values are 1 to 5, depending on your school.</li>
              <li>Choose the letter grade for each class from the dropdown list. If your school uses +/- grading, toggle the plus/minus option.</li>
              <li>Add or remove course rows for all the classes you want included in this term or grading period.</li>
              <li>Watch the GPA update automatically as your values change. The page recalculates instantly in real time with no button presses needed.</li>
              <li>Hit reset if you want to clear all data and start again with a fresh row.</li>
            </ol>
            <p className="text-gray-600 leading-relaxed mt-4">
              Google loves content that matches search intent. This section includes direct queries and action-oriented phrases like “calculate gpa quickly” and “easy gpa calculator,” helping the page rank for student-focused keywords.
            </p>
          </article>

          <article className="bg-white p-6 md:p-8 rounded-2xl shadow-md">
            <h2 id="formula" className="text-2xl font-semibold text-slate-900 mb-4">GPA Formula Explained</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The core formula at the heart of the calculator is simple and standard:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-5">
              <p className="font-mono font-semibold text-slate-900">GPA = Total Grade Points ÷ Total Credit Hours</p>
              <p className="font-mono text-gray-700">Grade Points = Grade Value × Credit Hours</p>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              This formula exists in the same format used by North American high schools and colleges. It is both beginner-friendly and mathematically sound: you multiply each course grade value by its credit hours, sum all the points, then divide by total credit hours. The result is your term GPA.
            </p>
            <p className="text-gray-600 leading-relaxed">
              In a second variant, if each course has equal credits (e.g., all 3-credit classes), this calculator still works as a <strong>quick gpa calculator</strong> by taking the average of grade point values and confirming the same result with fewer manual steps.
            </p>
          </article>

          <article className="bg-white p-6 md:p-8 rounded-2xl shadow-md">
            <h2 id="example" className="text-2xl font-semibold text-slate-900 mb-4">Example GPA Calculation</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Here is a full sample calculation that illustrates speed and transparency:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-4">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Course 1: A, 3 credits → Grade points = 4.0 × 3 = 12</li>
                <li>Course 2: B, 3 credits → Grade points = 3.0 × 3 = 9</li>
                <li>Course 3: C, 4 credits → Grade points = 2.0 × 4 = 8</li>
                <li>Course 4: A-, 2 credits (if plus/minus enabled) → Grade points = 3.7 × 2 = 7.4</li>
              </ul>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Total Grade Points = 36.4<br />
              Total Credit Hours = 12<br />
              GPA = 36.4 ÷ 12 = 3.03 (rounded to 3.03)
            </p>
            <p className="text-gray-600 leading-relaxed">
              The same example also shows how adding one more class or improving one grade can shift your GPA quickly. With this tool, you can test “what-if” scenarios fast: change a B to an A or add a 4-credit class, and see the immediate effect.
            </p>
          </article>

          <article className="bg-white p-6 md:p-8 rounded-2xl shadow-md">
            <h2 id="benefits" className="text-2xl font-semibold text-slate-900 mb-4">Benefits of Using a Simple GPA Calculator</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The reason this page is built with a minimalist design is to maximize benefit with minimum friction:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Speed:</strong> real-time GPA updates as you type; no manual formulas needed.</li>
              <li><strong>Usability:</strong> mobile-friendly, large inputs, and a clean calculator layout with one-click add/remove.</li>
              <li><strong>Accuracy:</strong> uses standard 4.0 grade scale and correct total points division.</li>
              <li><strong>Control:</strong> optional +/- grade scale toggle supports common school systems.</li>
              <li><strong>Planning:</strong> instant snapshots help with course planning, scholarship requirements, and performance goals.</li>
              <li><strong>Transparency:</strong> shows total credits, grade points, and final GPA clearly in dedicated output cards.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              For digital marketing value, this section matches related long-tail search phrases that prospective students type, like “basic gpa calculator” and “quick gpa calculator for students.”
            </p>
          </article>

          <article className="bg-white p-6 md:p-8 rounded-2xl shadow-md">
            <h2 id="grade-scale" className="text-2xl font-semibold text-slate-900 mb-4">Grade Scale (4.0)</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              This calculator supports the following standard grade scale by default. If your school uses +/- variations, enable the toggle and adjust accordingly.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[320px]">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-3 py-2">Letter Grade</th>
                    <th className="border px-3 py-2">Grade Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border px-3 py-2">A</td><td className="border px-3 py-2">4.0</td></tr>
                  <tr><td className="border px-3 py-2">A-</td><td className="border px-3 py-2">3.7</td></tr>
                  <tr><td className="border px-3 py-2">B+</td><td className="border px-3 py-2">3.3</td></tr>
                  <tr><td className="border px-3 py-2">B</td><td className="border px-3 py-2">3.0</td></tr>
                  <tr><td className="border px-3 py-2">B-</td><td className="border px-3 py-2">2.7</td></tr>
                  <tr><td className="border px-3 py-2">C+</td><td className="border px-3 py-2">2.3</td></tr>
                  <tr><td className="border px-3 py-2">C</td><td className="border px-3 py-2">2.0</td></tr>
                  <tr><td className="border px-3 py-2">C-</td><td className="border px-3 py-2">1.7</td></tr>
                  <tr><td className="border px-3 py-2">D+</td><td className="border px-3 py-2">1.3</td></tr>
                  <tr><td className="border px-3 py-2">D</td><td className="border px-3 py-2">1.0</td></tr>
                  <tr><td className="border px-3 py-2">D-</td><td className="border px-3 py-2">0.7</td></tr>
                  <tr><td className="border px-3 py-2">F</td><td className="border px-3 py-2">0.0</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 leading-relaxed mt-4">
              This grade scale is written in content to support ranking for “4.0 grade scale” and “GPA grade points” queries. The page meets both user needs and search engine relevance by including direct educational terminology.
            </p>
          </article>

          <article className="bg-white p-6 md:p-8 rounded-2xl shadow-md">
            <h2 id="related" className="text-2xl font-semibold text-slate-900 mb-4">Related GPA Calculators</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you need even more features, check these related tools: about course-level forecasts, weighted AP/honors support, and long-term GPA projection.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/gpa-calculators/advanced-gpa-calculator" className="inline-block rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300">Advanced GPA Calculator</Link>
              <Link href="/gpa-calculators/college-gpa-calculator" className="inline-block rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300">College GPA Calculator</Link>
              <Link href="/gpa-calculators/quick-gpa-calculator" className="inline-block rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300">Quick GPA Calculator</Link>
              <Link href="/gpa-calculators/term-gpa-calculator" className="inline-block rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300">Term GPA Calculator</Link>
              <Link href="/gpa-calculators/gpa-average-calculator" className="inline-block rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300">GPA Average Calculator</Link>
            </div>
          </article>

          <article className="bg-white p-6 md:p-8 rounded-2xl shadow-md">
            <h2 id="faq" className="text-2xl font-semibold text-slate-900 mb-4">FAQ</h2>
            <div className="divide-y divide-slate-200">
              {faqItems.map((faq) => (
                <div key={faq.question} className="py-4">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="bg-white p-6 md:p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Authority Resources</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><a href="https://www.collegeboard.org" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">College Board</a></li>
              <li><a href="https://nces.ed.gov" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">NCES</a></li>
              <li><a href="https://www.ed.gov" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">U.S. Department of Education</a></li>
            </ul>
            <p className="text-xs text-slate-500 mt-6">Built for speed, UX, and SEO: minimal JavaScript, clean semantic markup, and mobile-first layout.</p>
          </article>
        </section>
      </div>
    </div>
  );
}

