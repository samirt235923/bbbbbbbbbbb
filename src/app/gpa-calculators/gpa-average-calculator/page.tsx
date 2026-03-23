import { Metadata } from 'next';
import Link from 'next/link';
import GPAAverageCalculator from '@/components/GPAAverageCalculator';
import FAQ from '@/components/FAQ';
import { FAQSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'GPA Average Calculator – Calculate Your Average GPA',
  description:
    'Use our GPA Average Calculator to find the average GPA across multiple courses or semesters. Enter your GPA values to calculate the overall average instantly.',
  keywords:
    'gpa average calculator, calculate average gpa, average grade point calculator, find average gpa, gpa mean calculator, weighted gpa average',
  openGraph: {
    title: 'GPA Average Calculator – Calculate Your Average GPA',
    description:
      'Use our GPA Average Calculator to find the average GPA across multiple courses or semesters. Enter your GPA values to calculate the overall average instantly.',
    type: 'website',
    url: 'https://topgpacalculator.com/gpa-calculators/gpa-average-calculator',
    images: [
      {
        url: 'https://topgpacalculator.com/logo.svg',
        width: 1200,
        height: 630,
        alt: 'GPA Average Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GPA Average Calculator – Calculate Your Average GPA',
    description:
      'Use our GPA Average Calculator to find the average GPA across multiple courses or semesters. Enter your GPA values to calculate the overall average instantly.',
    images: ['https://topgpacalculator.com/logo.svg'],
  },
  alternates: {
    canonical: 'https://topgpacalculator.com/gpa-calculators/gpa-average-calculator',
  },
  other: {
    'article:author': 'GPA Calculator',
    'article:section': 'Education',
    'article:tag': 'GPA Average Calculator',
  },
};

const tableOfContents = [
  { id: 'calculator', label: 'Calculator' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'formulas', label: 'GPA Average Formulas' },
  { id: 'examples', label: 'Example Calculations' },
  { id: 'good-gpa', label: 'What is a Good Average GPA?' },
  { id: 'reference', label: 'GPA Reference Scale' },
  { id: 'faq', label: 'FAQ' },
];

const faqItems = [
  {
    question: 'How do you calculate average GPA?',
    answer:
      'Add all GPA values, then divide by the number of values. For example, (3.5 + 3.8 + 3.2) ÷ 3 = 3.5.',
  },
  {
    question: 'What is the formula for GPA average?',
    answer:
      'Simple average formula: (GPA1 + GPA2 + ... + GPAn) ÷ n. Weighted formula: (Σ(GPA × Credits)) ÷ ΣCredits.',
  },
  {
    question: 'Is a 3.5 average GPA good?',
    answer:
      'Yes, 3.5 is generally considered a strong GPA. It indicates consistent B+ to A- performance and can qualify you for many scholarships and honors programs.',
  },
  {
    question: 'How is weighted GPA average calculated?',
    answer:
      'Multiply each GPA by its credit hours, sum the results, then divide by the total credit hours. This gives more weight to courses with higher credit values.',
  },
  {
    question: 'What is the difference between average GPA and cumulative GPA?',
    answer:
      'Average GPA is based on a selected set of courses or semesters. Cumulative GPA includes every graded course taken at an institution, spanning your full academic history.',
  },
];

export default function GPAAverageCalculatorPage() {
  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Breadcrumb Schema */}
      <FAQSchema faqs={faqItems} />

      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="text-sm mb-4">
            <ol className="flex flex-wrap gap-2 text-gray-600">
              <li>
                <Link href="/" className="text-blue-600 hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/gpa-calculators" className="text-blue-600 hover:underline">
                  GPA Calculators
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-800 font-medium">GPA Average Calculator</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="md:flex md:items-start md:justify-between gap-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">GPA Average Calculator</h1>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Use our <strong>GPA Average Calculator</strong> to find the average GPA across multiple courses or semesters. Enter your GPA values and optionally include credit hours for a weighted average calculation.
              </p>
              <div className="mt-6 rounded-lg bg-blue-50 border border-blue-100 p-5">
                <p className="text-sm text-blue-800">
                  Tip: Select <strong>Weighted</strong> if you want courses with more credits to count more toward your overall GPA average.
                </p>
              </div>
            </div>

            {/* Table of Contents */}
            <aside className="hidden lg:block w-80 sticky top-24 self-start">
              <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-5">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">On this page</h2>
                <nav className="space-y-2 text-sm text-gray-600">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block hover:text-blue-600 hover:underline"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          </header>

          {/* Calculator Section */}
          <section id="calculator" className="mt-12">
            <div className="grid gap-10 lg:grid-cols-2">
              <GPAAverageCalculator />

              <div className="space-y-6">
                <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">How to use this calculator</h3>
                  <ol className="space-y-3 list-decimal list-inside text-gray-600">
                    <li>Enter each course or semester GPA value (0.0–4.0).</li>
                    <li>If you want a weighted average, also enter credit hours for each entry.</li>
                    <li>Click <strong>+ Add row</strong> to add more values, or <strong>Remove</strong> to delete a row.</li>
                    <li>The calculator updates instantly as you type.</li>
                    <li>Use the results to plan semester goals, track progress, or apply for scholarships.</li>
                  </ol>
                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Why average GPA matters</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your average GPA gives you a quick snapshot of academic performance over a group of courses or a set period. It helps you understand how consistently you are performing and whether you are on track for your academic goals.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Many scholarships, academic programs, and honors require students to meet a minimum average GPA. This calculator is built to help you estimate that number instantly.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="how-it-works" className="mt-16">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900">What is an Average GPA?</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                An <strong>average GPA</strong> represents the mean of a set of grade point averages. Students often calculate an average GPA for a particular semester, a group of classes, or across multiple terms. It’s a simple way to measure overall academic performance without having to calculate a cumulative GPA for every course ever taken.
              </p>
              <p className="mt-3 text-gray-600 leading-relaxed">
                While cumulative GPA includes every graded course in a program, your average GPA can be tailored to a specific segment — like a term, a group of selected classes, or the last two semesters. This makes it useful for tracking improvement, setting goals, and preparing applications.
              </p>
            </div>
          </section>

          <section id="formulas" className="mt-16">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900">How to Calculate Average GPA</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                This section shows the formulas behind the calculator so you can see exactly how results are derived.
              </p>

              <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900">Simple Average GPA Formula</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  The simple average GPA is calculated by adding all GPA values and then dividing by the number of entries.
                </p>
                <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-white">
                  <code>
                    Average GPA = (GPA1 + GPA2 + GPA3 + ... + GPAn) ÷ Number of GPAs
                  </code>
                </pre>

                <div className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-5">
                  <h3 className="text-lg font-semibold text-blue-900">Example</h3>
                  <p className="mt-2 text-gray-700">
                    GPA values: 3.5, 3.8, 3.2
                  </p>
                  <p className="mt-2 text-gray-700">
                    Average GPA = (3.5 + 3.8 + 3.2) ÷ 3 = 10.5 ÷ 3 = <strong>3.5</strong>
                  </p>
                </div>
              </div>

              <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900">Weighted GPA Average Formula</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  A weighted GPA average gives more influence to courses with more credit hours. The formula multiplies each GPA by its credit hours, sums the results, then divides by total credits.
                </p>

                <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-white">
                  <code>
                    Weighted Average GPA = (Σ (GPA × Credits)) ÷ Σ Credits
                  </code>
                </pre>

                <div className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-5">
                  <h3 className="text-lg font-semibold text-blue-900">Example</h3>
                  <p className="mt-2 text-gray-700">Semester 1: GPA 3.5 × 15 credits = 52.5</p>
                  <p className="mt-1 text-gray-700">Semester 2: GPA 3.8 × 12 credits = 45.6</p>
                  <p className="mt-2 text-gray-700">
                    Average GPA = (52.5 + 45.6) ÷ (15 + 12) = 98.1 ÷ 27 ≈ <strong>3.63</strong>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="examples" className="mt-16">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900">Example GPA Average Calculation</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Below is a step-by-step example showing how to compute both the simple and weighted average GPA.
              </p>

              <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900">Simple Average Example</h3>
                <ol className="mt-4 list-decimal list-inside space-y-2 text-gray-600">
                  <li>List your GPAs: 3.2, 3.7, 3.9, 3.4.</li>
                  <li>Add them: 3.2 + 3.7 + 3.9 + 3.4 = 14.2.</li>
                  <li>Divide by the number of GPAs: 14.2 ÷ 4 = <strong>3.55</strong>.</li>
                </ol>
              </div>

              <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900">Weighted Average Example</h3>
                <ol className="mt-4 list-decimal list-inside space-y-2 text-gray-600">
                  <li>Course A: GPA 3.9, 4 credits → 3.9 × 4 = 15.6</li>
                  <li>Course B: GPA 3.4, 3 credits → 3.4 × 3 = 10.2</li>
                  <li>Course C: GPA 3.7, 5 credits → 3.7 × 5 = 18.5</li>
                  <li>Add the weighted points: 15.6 + 10.2 + 18.5 = 44.3</li>
                  <li>Add total credits: 4 + 3 + 5 = 12</li>
                  <li>Divide: 44.3 ÷ 12 = <strong>3.69</strong></li>
                </ol>
              </div>
            </div>
          </section>

          <section id="good-gpa" className="mt-16">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900">What is a Good Average GPA?</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                A good average GPA depends on your goals. Many colleges and scholarship programs look for GPAs of <strong>3.0 or higher</strong>, while more competitive programs may expect <strong>3.5+</strong>.
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600">
                <li>
                  <strong>3.0 – 3.4</strong>: Solid performance; likely to meet core academic requirements and maintain good standing.
                </li>
                <li>
                  <strong>3.5 – 3.7</strong>: Strong performance; competitive for many merit scholarships and honors programs.
                </li>
                <li>
                  <strong>3.8 – 4.0</strong>: Excellent GPA; often required for top-tier schools, elite scholarships, and graduate program applications.
                </li>
              </ul>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Remember that different schools may use different grading scales, so check your institution’s GPA policy. This calculator uses a standard 4.0 scale.
              </p>
            </div>
          </section>

          <section id="reference" className="mt-16">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900">GPA Reference Scale</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Use this reference table if you want to convert letter grades to GPA values on a standard 4.0 scale.
              </p>
              <div className="mt-6 overflow-x-auto rounded-xl border border-gray-200 bg-white">
                <table className="w-full text-left text-sm text-gray-700">
                  <thead className="bg-gray-50 text-gray-900">
                    <tr>
                      <th className="px-6 py-3">Letter Grade</th>
                      <th className="px-6 py-3">GPA Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-200">
                      <td className="px-6 py-3">A</td>
                      <td className="px-6 py-3">4.0</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="px-6 py-3">A-</td>
                      <td className="px-6 py-3">3.7</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="px-6 py-3">B+</td>
                      <td className="px-6 py-3">3.3</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="px-6 py-3">B</td>
                      <td className="px-6 py-3">3.0</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="px-6 py-3">B-</td>
                      <td className="px-6 py-3">2.7</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="px-6 py-3">C+</td>
                      <td className="px-6 py-3">2.3</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="px-6 py-3">C</td>
                      <td className="px-6 py-3">2.0</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="px-6 py-3">C-</td>
                      <td className="px-6 py-3">1.7</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="px-6 py-3">D</td>
                      <td className="px-6 py-3">1.0</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="px-6 py-3">F</td>
                      <td className="px-6 py-3">0.0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section id="faq" className="mt-16">
            <FAQ items={faqItems} />
          </section>

          <section className="mt-16 pb-16">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900">Related GPA Calculators</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Explore other GPA tools to help you plan your semester, track your college GPA, or project your future academic standing.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Link
                  href="/gpa-calculators/term-gpa-calculator"
                  className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:border-blue-500 hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-semibold text-gray-900">Term GPA Calculator</h3>
                  <p className="mt-2 text-gray-600">Calculate your GPA for a single term or semester.</p>
                </Link>
                <Link
                  href="/gpa-calculators/semester-gpa-calculator"
                  className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:border-blue-500 hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-semibold text-gray-900">Semester GPA Calculator</h3>
                  <p className="mt-2 text-gray-600">Track your semester GPA with a dedicated calculator.</p>
                </Link>
                <Link
                  href="/gpa-calculators/college-gpa-calculator"
                  className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:border-blue-500 hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-semibold text-gray-900">College GPA Calculator</h3>
                  <p className="mt-2 text-gray-600">Find your college GPA using course grades and credit hours.</p>
                </Link>
                <Link
                  href="/gpa-calculators/gpa-projection-calculator"
                  className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:border-blue-500 hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-semibold text-gray-900">GPA Projection Calculator</h3>
                  <p className="mt-2 text-gray-600">Estimate how future grades will impact your GPA.</p>
                </Link>
                <Link
                  href="/gpa-calculators/weighted-gpa-calculator"
                  className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:border-blue-500 hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-semibold text-gray-900">Weighted GPA Calculator</h3>
                  <p className="mt-2 text-gray-600">Calculate a weighted GPA using course weights and honors/AP credit values.</p>
                </Link>
              </div>
            </div>
          </section>

          <section className="mt-16 pb-16">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900">Trusted Education Resources</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Learn more about GPA scales and academic policies from trusted sources:
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600">
                <li>
                  <a
                    href="https://www.collegeboard.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    College Board
                  </a>
                </li>
                <li>
                  <a
                    href="https://nces.ed.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    National Center for Education Statistics (NCES)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.ed.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    U.S. Department of Education
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

