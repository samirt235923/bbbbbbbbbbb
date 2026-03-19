import GPAWeightCalculator from '@/components/GPAWeightCalculator';
import FAQ from '@/components/FAQ';
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from '@/components/SchemaMarkup';

export const metadata = {
  title: 'GPA Weight Calculator – Calculate Weighted GPA for Honors & AP Classes',
  description:
    'Use our GPA Weight Calculator to calculate your weighted GPA including honors and AP courses. Enter grades, credits, and course level to get accurate results instantly.',
  openGraph: {
    title: 'GPA Weight Calculator – Calculate Weighted GPA for Honors & AP Classes',
    description:
      'Use our GPA Weight Calculator to calculate your weighted GPA including honors and AP courses. Enter grades, credits, and course level to get accurate results instantly.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://topgpacalculator.com/gpa-calculators/gpa-weight-calculator',
  },
};

const faqItems = [
  {
    question: 'What is a weighted GPA?',
    answer:
      'A weighted GPA accounts for course difficulty by giving honors and AP/advanced classes higher point values. It helps reflect your performance in more rigorous coursework.',
  },
  {
    question: 'How do you calculate weighted GPA?',
    answer:
      'Multiply the grade value by the credit hours for each class to get weighted grade points. Then divide the total weighted grade points by total credit hours.',
  },
  {
    question: 'Is a 4.5 GPA possible?',
    answer:
      'Yes. A 4.5 GPA is possible when you take honors or advanced courses and earn high grades, since those courses add extra weight to your grade points.',
  },
  {
    question: 'Do AP classes increase GPA?',
    answer:
      'Yes. AP/advanced classes often use a 5.0 scale for an A, which can boost your GPA above the standard 4.0 scale.',
  },
  {
    question: 'What is the difference between weighted and unweighted GPA?',
    answer:
      'Unweighted GPA uses a consistent 4.0 scale for all classes. Weighted GPA gives extra credit for advanced courses, so it better reflects course difficulty.',
  },
];

const relatedCalculators = [
  { href: '/weighted-gpa-calculator', label: 'Weighted GPA Calculator' },
  { href: '/college-gpa-calculator', label: 'College GPA Calculator' },
  { href: '/high-school-gpa-calculator', label: 'High School GPA Calculator' },
  { href: '/term-gpa-calculator', label: 'Term GPA Calculator' },
  { href: '/gpa-projection-calculator', label: 'GPA Projection Calculator' },
];

export default function Page() {
  const pageUrl = 'https://www.example.com/gpa-weight-calculator';
  const publishedTime = new Date().toISOString();
  const modifiedTime = publishedTime;

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8">
      <nav className="mb-6 text-sm" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-gray-600">
          <li>
            <a href="/" className="underline-offset-4 hover:underline">
              Home
            </a>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <a href="/gpa-calculators" className="underline-offset-4 hover:underline">
              GPA Calculators
            </a>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-900">GPA Weight Calculator</li>
        </ol>
      </nav>

      <article>
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">GPA Weight Calculator</h1>
          <p className="mt-4 max-w-2xl text-gray-700">
            Use this GPA Weight Calculator to calculate your weighted GPA for honors and AP classes. Enter
            grades, credits, and course level to get accurate results instantly.
          </p>
        </header>

        <section className="mb-10">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <GPAWeightCalculator />
          </div>
        </section>

        <section className="mb-10" aria-label="Table of contents">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Table of contents</h2>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>
                <a href="#what-is-weighted-gpa" className="underline-offset-4 hover:underline">
                  What is a Weighted GPA?
                </a>
              </li>
              <li>
                <a href="#how-weighted-gpa-works" className="underline-offset-4 hover:underline">
                  How Weighted GPA Works
                </a>
              </li>
              <li>
                <a href="#how-to-calculate-weighted-gpa" className="underline-offset-4 hover:underline">
                  How to Calculate Weighted GPA
                </a>
              </li>
              <li>
                <a href="#weighted-vs-unweighted-gpa" className="underline-offset-4 hover:underline">
                  Weighted GPA vs Unweighted GPA
                </a>
              </li>
              <li>
                <a href="#why-colleges-use-weighted-gpa" className="underline-offset-4 hover:underline">
                  Why Colleges Use Weighted GPA
                </a>
              </li>
              <li>
                <a href="#faq" className="underline-offset-4 hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section id="what-is-weighted-gpa" className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900">What is a Weighted GPA</h2>
          <p className="mt-4 text-gray-700">
            A weighted GPA is a grade point average that takes class difficulty into account. Instead of using
            the standard 4.0 scale for every class, weighted GPA gives extra credit for honors, Advanced
            Placement (AP), and other advanced classes. This allows students to earn a GPA above 4.0 when they
            take more rigorous coursework.
          </p>
          <p className="mt-4 text-gray-700">
            Most high schools use a weighted GPA scale to reward students for challenging themselves with honors
            and AP courses, since these classes typically require more work and assess deeper understanding.
            Our GPA Weight Calculator makes it easy to see how honors and AP classes impact your GPA and helps
            you compare different course loads.
          </p>
          <p className="mt-4 text-gray-700">
            Keep in mind that each school may use a slightly different weighting system (some use 4.3 or 4.7 as
            an "A" for honors, for example), so you can use the calculator as a guide and then confirm your
            school's specific policies with your counselor.
          </p>
        </section>

        <section id="how-weighted-gpa-works" className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900">How Weighted GPA Works</h2>
          <p className="mt-4 text-gray-700">
            Weighted GPA works by assigning higher point values to grades earned in advanced classes. For example,
            an A in a regular class is typically worth 4.0 points, while an A in an honors class might be worth 4.5
            points and an A in an AP class might be worth 5.0 points. That extra grade point is what creates a
            weighted GPA above 4.0.
          </p>
          <p className="mt-4 text-gray-700">
            In practice, you calculate grade points for each course, add them together, and divide by the total
            number of credit hours. This gives you a weighted average that reflects both your grades and course
            difficulty.
          </p>
          <p className="mt-4 text-gray-700">
            Different schools may use slightly different scales, but the concept remains the same: the higher the
            course level (regular, honors, AP), the more weight a strong grade contributes toward your final
            weighted GPA. This calculator uses common high school standards for weighted GPA, but you can adjust
            the course level selections to match your school's policy.
          </p>

          <div className="mt-6 overflow-x-auto rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Weighted GPA Scale</h3>
            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <h4 className="font-semibold text-gray-800">Regular Courses</h4>
                <ul className="mt-2 space-y-1 text-sm text-gray-700">
                  <li>A = 4.0</li>
                  <li>B = 3.0</li>
                  <li>C = 2.0</li>
                  <li>D = 1.0</li>
                  <li>F = 0.0</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <h4 className="font-semibold text-gray-800">Honors Courses</h4>
                <ul className="mt-2 space-y-1 text-sm text-gray-700">
                  <li>A = 4.5</li>
                  <li>B = 3.5</li>
                  <li>C = 2.5</li>
                  <li>D = 1.5</li>
                  <li>F = 0.0</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <h4 className="font-semibold text-gray-800">AP / Advanced Courses</h4>
                <ul className="mt-2 space-y-1 text-sm text-gray-700">
                  <li>A = 5.0</li>
                  <li>B = 4.0</li>
                  <li>C = 3.0</li>
                  <li>D = 2.0</li>
                  <li>F = 0.0</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="how-to-calculate-weighted-gpa" className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900">How to Calculate Weighted GPA</h2>
          <p className="mt-4 text-gray-700">
            Use this step-by-step method to calculate your weighted GPA. Our calculator does the math for you,
            but understanding the formula helps you check your work and plan your course load.
          </p>

          <h3 className="mt-6 text-xl font-semibold text-gray-900">Weighted GPA Formula</h3>
          <p className="mt-3 text-gray-700">
            <strong>Weighted GPA</strong> = Total Weighted Grade Points ÷ Total Credit Hours
          </p>
          <p className="mt-3 text-gray-700">
            Where:
            <ul className="mt-2 list-disc space-y-2 pl-6 text-gray-700">
              <li>
                <strong>Weighted Grade Points</strong> = (Grade Value × Credit Hours) for each class
              </li>
              <li>
                <strong>Total Credit Hours</strong> = Sum of credit hours for all classes
              </li>
            </ul>
          </p>

          <h3 className="mt-6 text-xl font-semibold text-gray-900">Example Calculation</h3>
          <div className="mt-4 overflow-x-auto rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-gray-700">
              Use the table below to see how a weighted GPA is calculated for a mix of AP, honors, and regular
              courses.
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full table-auto text-left text-sm text-gray-700">
                <thead>
                  <tr>
                    <th className="border-b border-gray-200 px-3 py-2">Course</th>
                    <th className="border-b border-gray-200 px-3 py-2">Level</th>
                    <th className="border-b border-gray-200 px-3 py-2">Grade</th>
                    <th className="border-b border-gray-200 px-3 py-2">Credits</th>
                    <th className="border-b border-gray-200 px-3 py-2">Grade Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-gray-200 px-3 py-2">Math (AP)</td>
                    <td className="border-b border-gray-200 px-3 py-2">AP / Advanced</td>
                    <td className="border-b border-gray-200 px-3 py-2">A (5.0)</td>
                    <td className="border-b border-gray-200 px-3 py-2">3</td>
                    <td className="border-b border-gray-200 px-3 py-2">15</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 px-3 py-2">English (Honors)</td>
                    <td className="border-b border-gray-200 px-3 py-2">Honors</td>
                    <td className="border-b border-gray-200 px-3 py-2">B (3.5)</td>
                    <td className="border-b border-gray-200 px-3 py-2">4</td>
                    <td className="border-b border-gray-200 px-3 py-2">14</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 px-3 py-2">History (Regular)</td>
                    <td className="border-b border-gray-200 px-3 py-2">Regular</td>
                    <td className="border-b border-gray-200 px-3 py-2">A (4.0)</td>
                    <td className="border-b border-gray-200 px-3 py-2">3</td>
                    <td className="border-b border-gray-200 px-3 py-2">12</td>
                  </tr>
                </tbody>
              </table>

              <div className="mt-4 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <p className="text-xs font-semibold text-gray-600">Total Grade Points</p>
                  <p className="mt-1 text-xl font-semibold text-gray-900">41</p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <p className="text-xs font-semibold text-gray-600">Total Credits</p>
                  <p className="mt-1 text-xl font-semibold text-gray-900">10</p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <p className="text-xs font-semibold text-gray-600">Weighted GPA</p>
                  <p className="mt-1 text-xl font-semibold text-gray-900">4.10</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="weighted-vs-unweighted-gpa" className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900">Weighted GPA vs Unweighted GPA</h2>
          <p className="mt-4 text-gray-700">
            Unweighted GPA uses a 4.0 scale for every course, regardless of difficulty. A straight-A student in
            all regular courses would earn a 4.0 unweighted GPA. In contrast, a weighted GPA can exceed 4.0 when
            advanced coursework is included.
          </p>
          <p className="mt-4 text-gray-700">
            Weighted GPA is useful for comparing students who take different levels of courses. When reviewing
            transcripts, colleges often look at both weighted and unweighted GPAs to understand academic rigor and
            performance.
          </p>
        </section>

        <section id="why-colleges-use-weighted-gpa" className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900">Why Colleges Use Weighted GPA</h2>
          <p className="mt-4 text-gray-700">
            Colleges use weighted GPAs to better understand the context of a students transcript. A student who
            takes a challenging schedule of honors and AP courses and earns high grades demonstrates strong
            academic preparation for college-level work.
          </p>
          <p className="mt-4 text-gray-700">
            Weighted GPA helps admissions officers compare applicants from different schools and grading systems.
            It highlights students who push themselves academically while maintaining high grades.
          </p>
        </section>

        <section id="tips-to-improve-weighted-gpa" className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900">Tips to Improve Your Weighted GPA</h2>
          <p className="mt-4 text-gray-700">
            Improving your weighted GPA is usually a combination of choosing the right courses and earning strong
            grades. Here are a few strategies you can use to raise your weighted GPA over time.
          </p>
          <ul className="mt-4 list-disc space-y-3 pl-6 text-gray-700">
            <li>
              <strong>Balance challenge and mastery:</strong> Taking honors or AP courses can boost your weighted
              GPA, but only if you can maintain A's or B's. Use this calculator to experiment with different course
              loads before you enroll.
            </li>
            <li>
              <strong>Track your progress each term:</strong> Enter your grades and credit hours into the GPA weight
              calculator early, then adjust your study plan as needed to keep your GPA on track.
            </li>
            <li>
              <strong>Use teacher feedback:</strong> Regularly review graded assignments and ask for help when a
              topic is unclear—small improvements can translate to a higher grade point.
            </li>
            <li>
              <strong>Consider summer or dual enrollment courses:</strong> Some students use accredited summer classes
              or community college courses (often treated as honors/advanced) to earn extra weighted credit.
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900" id="related-gpa-calculators">
            Related GPA Calculators
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedCalculators.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-gray-200 bg-white p-5 text-sm font-semibold text-gray-800 shadow-sm transition hover:border-blue-300 hover:bg-blue-50"
              >
                {item.label}
              </a>
            ))}
          </div>
        </section>

        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900">Frequently Asked Questions</h2>
          <p className="mt-4 text-gray-700">
            These answers cover the most common questions about weighted GPA and how it differs from unweighted
            GPA.
          </p>
          <div className="mt-6">
            <FAQ items={faqItems} />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900">Resources and Further Reading</h2>
          <p className="mt-4 text-gray-700">
            For more information about GPA scales, honors classes, and college admissions, check out these trusted
            resources.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
            <li>
              <a
                href="https://www.collegeboard.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                College Board
              </a>
            </li>
            <li>
              <a
                href="https://nces.ed.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                National Center for Education Statistics
              </a>
            </li>
            <li>
              <a
                href="https://www.khanacademy.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                Khan Academy
              </a>
            </li>
          </ul>
        </section>

        <ArticleSchema
          headline="GPA Weight Calculator"
          description="Use this GPA Weight Calculator to calculate your weighted GPA including honors and AP courses. Enter grades, credits, and course level to get accurate results instantly."
          author="GPA Calculator"
          datePublished={publishedTime}
          dateModified={modifiedTime}
        />

        <FAQSchema faqs={faqItems} />

        <BreadcrumbSchema
          items={[
            { name: 'Home', url: 'https://www.example.com/' },
            { name: 'GPA Calculators', url: 'https://www.example.com/gpa-calculators' },
            { name: 'GPA Weight Calculator', url: pageUrl },
          ]}
        />
      </article>
    </main>
  );
}
