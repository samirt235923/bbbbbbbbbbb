import CreditHourGPACalculator from '@/components/CreditHourGPACalculator';
import FAQ from '@/components/FAQ';
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Credit Hour GPA Calculator – Calculate GPA Using Credit Hours',
  description:
    'Use our Credit Hour GPA Calculator to calculate GPA based on grades and credit hours. Enter courses, credits, and grades to instantly calculate your GPA accurately.',
  openGraph: {
    title: 'Credit Hour GPA Calculator – Calculate GPA Using Credit Hours',
    description:
      'Use our Credit Hour GPA Calculator to calculate GPA based on grades and credit hours. Enter courses, credits, and grades to instantly calculate your GPA accurately.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://topgpacalculator.com/gpa-calculators/credit-hour-gpa-calculator',
  },
};

const faqItems = [
  {
    question: 'How do you calculate GPA with credit hours?',
    answer:
      'Multiply the grade value by the credit hours for each course to calculate grade points, then divide the total grade points by the total credit hours.',
  },
  {
    question: 'What are credit hours in college?',
    answer:
      'Credit hours represent the amount of time spent in class each week and help determine how much weight a course has on your GPA. Higher credit courses have a bigger impact on your overall GPA.',
  },
  {
    question: 'Do credit hours affect GPA calculation?',
    answer:
      'Yes. Credit hours determine how much each course contributes to your total grade points. A course with more credit hours has a larger effect on your GPA.',
  },
  {
    question: 'How many credit hours are needed for a semester?',
    answer:
      'Most colleges consider 12–15 credit hours a full-time semester load. Your school defines the minimum and maximum based on its policies.',
  },
  {
    question: 'What is the GPA formula using credits?',
    answer:
      'GPA = Total Grade Points ÷ Total Credit Hours, where Grade Points = Grade Value × Credit Hours.',
  },
];

const relatedCalculators = [
  { href: '/college-gpa-calculator', label: 'College GPA Calculator' },
  { href: '/semester-gpa-calculator', label: 'Semester GPA Calculator' },
  { href: '/term-gpa-calculator', label: 'Term GPA Calculator' },
  { href: '/weighted-gpa-calculator', label: 'Weighted GPA Calculator' },
  { href: '/gpa-average-calculator', label: 'GPA Average Calculator' },
];

export default function Page() {
  const pageUrl = 'https://www.example.com/credit-hour-gpa-calculator';
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
          <li className="text-gray-900">Credit Hour GPA Calculator</li>
        </ol>
      </nav>

      <article>
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Credit Hour GPA Calculator</h1>
          <p className="mt-4 max-w-2xl text-gray-700">
            Use our Credit Hour GPA Calculator to calculate GPA based on grades and credit hours. Enter courses,
            credit hours, and grades to instantly calculate your GPA accurately.
          </p>
        </header>

        <section className="mb-10">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <CreditHourGPACalculator />
          </div>
        </section>

        <section className="mb-10" aria-label="Table of contents">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Table of contents</h2>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>
                <a href="#what-are-credit-hours" className="underline-offset-4 hover:underline">
                  What Are Credit Hours in College
                </a>
              </li>
              <li>
                <a href="#how-gpa-is-calculated" className="underline-offset-4 hover:underline">
                  How GPA Is Calculated Using Credit Hours
                </a>
              </li>
              <li>
                <a href="#credit-hour-gpa-formula" className="underline-offset-4 hover:underline">
                  Credit Hour GPA Formula Explained
                </a>
              </li>
              <li>
                <a href="#example-calculation" className="underline-offset-4 hover:underline">
                  Example Credit Hour GPA Calculation
                </a>
              </li>
              <li>
                <a href="#why-credit-hours-matter" className="underline-offset-4 hover:underline">
                  Why Credit Hours Matter in GPA
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

        <section id="what-are-credit-hours" className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900">What Are Credit Hours in College</h2>
          <p className="mt-4 text-gray-700">
            Credit hours represent how much time you spend in a class each week. In most colleges, a 3-credit course
            means approximately 3 hours of classroom time per week, plus outside study time. Each course's credit
            hours determine how much it contributes to your overall GPA.
          </p>
          <p className="mt-4 text-gray-700">
            Understanding credit hours helps you plan your semester and estimate your workload. Generally, a full-time
            semester load is around 12–15 credit hours, while heavier loads may count as 18 credits or more.
          </p>
        </section>

        <section id="how-gpa-is-calculated" className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900">How GPA Is Calculated Using Credit Hours</h2>
          <p className="mt-4 text-gray-700">
            GPA is calculated by converting each grade into a grade value, multiplying that value by the course's
            credit hours, and then dividing the total grade points by the total credit hours.
          </p>
          <p className="mt-4 text-gray-700">
            This approach ensures that courses with more credit hours have a larger impact on your GPA than courses
            with fewer credits.
          </p>

          <div className="mt-6 overflow-x-auto rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Standard 4.0 Grade Scale</h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full table-auto text-left text-sm text-gray-700">
                <thead>
                  <tr>
                    <th className="border-b border-gray-200 px-3 py-2">Grade</th>
                    <th className="border-b border-gray-200 px-3 py-2">GPA Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-gray-200 px-3 py-2">A</td>
                    <td className="border-b border-gray-200 px-3 py-2">4.0</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 px-3 py-2">A-</td>
                    <td className="border-b border-gray-200 px-3 py-2">3.7</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 px-3 py-2">B+</td>
                    <td className="border-b border-gray-200 px-3 py-2">3.3</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 px-3 py-2">B</td>
                    <td className="border-b border-gray-200 px-3 py-2">3.0</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 px-3 py-2">B-</td>
                    <td className="border-b border-gray-200 px-3 py-2">2.7</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 px-3 py-2">C+</td>
                    <td className="border-b border-gray-200 px-3 py-2">2.3</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 px-3 py-2">C</td>
                    <td className="border-b border-gray-200 px-3 py-2">2.0</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 px-3 py-2">C-</td>
                    <td className="border-b border-gray-200 px-3 py-2">1.7</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 px-3 py-2">D</td>
                    <td className="border-b border-gray-200 px-3 py-2">1.0</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 px-3 py-2">F</td>
                    <td className="border-b border-gray-200 px-3 py-2">0.0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="credit-hour-gpa-formula" className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900">Credit Hour GPA Formula Explained</h2>
          <p className="mt-4 text-gray-700">
            The formula for calculating GPA using credit hours is:
          </p>
          <p className="mt-3 text-gray-700">
            <strong>GPA</strong> = Total Grade Points ÷ Total Credit Hours
          </p>
          <p className="mt-3 text-gray-700">
            Where:
            <ul className="mt-2 list-disc space-y-2 pl-6 text-gray-700">
              <li>
                <strong>Grade Points</strong> = Grade Value × Credit Hours for each course
              </li>
              <li>
                <strong>Total Credit Hours</strong> = Sum of credit hours for all courses
              </li>
            </ul>
          </p>
        </section>

        <section id="example-calculation" className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900">Example Credit Hour GPA Calculation</h2>
          <p className="mt-4 text-gray-700">
            Below is an example calculation showing how credit hours affect GPA.
          </p>
          <div className="mt-4 overflow-x-auto rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mt-4 overflow-x-auto">
              <table className="w-full table-auto text-left text-sm text-gray-700">
                <thead>
                  <tr>
                    <th className="border-b border-gray-200 px-3 py-2">Course</th>
                    <th className="border-b border-gray-200 px-3 py-2">Grade</th>
                    <th className="border-b border-gray-200 px-3 py-2">Credits</th>
                    <th className="border-b border-gray-200 px-3 py-2">Grade Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-gray-200 px-3 py-2">Math</td>
                    <td className="border-b border-gray-200 px-3 py-2">A (4.0)</td>
                    <td className="border-b border-gray-200 px-3 py-2">3</td>
                    <td className="border-b border-gray-200 px-3 py-2">12.0</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 px-3 py-2">English</td>
                    <td className="border-b border-gray-200 px-3 py-2">B+ (3.3)</td>
                    <td className="border-b border-gray-200 px-3 py-2">4</td>
                    <td className="border-b border-gray-200 px-3 py-2">13.2</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 px-3 py-2">Science</td>
                    <td className="border-b border-gray-200 px-3 py-2">B (3.0)</td>
                    <td className="border-b border-gray-200 px-3 py-2">3</td>
                    <td className="border-b border-gray-200 px-3 py-2">9.0</td>
                  </tr>
                </tbody>
              </table>

              <div className="mt-4 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <p className="text-xs font-semibold text-gray-600">Total Grade Points</p>
                  <p className="mt-1 text-xl font-semibold text-gray-900">34.2</p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <p className="text-xs font-semibold text-gray-600">Total Credits</p>
                  <p className="mt-1 text-xl font-semibold text-gray-900">10</p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <p className="text-xs font-semibold text-gray-600">GPA</p>
                  <p className="mt-1 text-xl font-semibold text-gray-900">3.42</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="why-credit-hours-matter" className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900">Why Credit Hours Matter in GPA</h2>
          <p className="mt-4 text-gray-700">
            Credit hours determine how much each class contributes to your overall GPA. A strong grade in a high-credit
            course has more effect on your GPA than the same grade in a low-credit course.
          </p>
          <p className="mt-4 text-gray-700">
            Understanding how credit hours work helps you prioritize study time for courses that affect your GPA the
            most, and it helps you choose a balanced course load for a successful semester.
          </p>
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
            These answers cover the most common questions about calculating GPA with credit hours.
          </p>
          <div className="mt-6">
            <FAQ items={faqItems} />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900">Resources and Further Reading</h2>
          <p className="mt-4 text-gray-700">
            For more information about credit hours, GPA scales, and college requirements, check out these trusted
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
                href="https://www.ed.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                U.S. Department of Education
              </a>
            </li>
          </ul>
        </section>

        <ArticleSchema
          headline="Credit Hour GPA Calculator"
          description="Use our Credit Hour GPA Calculator to calculate GPA based on grades and credit hours. Enter courses, credits, and grades to instantly calculate your GPA accurately."
          author="GPA Calculator"
          datePublished={publishedTime}
          dateModified={modifiedTime}
        />

        <FAQSchema faqs={faqItems} />

        <BreadcrumbSchema
          items={[
            { name: 'Home', url: 'https://www.example.com/' },
            { name: 'GPA Calculators', url: 'https://www.example.com/gpa-calculators' },
            { name: 'Credit Hour GPA Calculator', url: pageUrl },
          ]}
        />
      </article>
    </main>
  );
}
