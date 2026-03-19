import type { Metadata } from 'next';
import Link from 'next/link';
import GpaGoalCalculator from '@/components/GpaGoalCalculator';
import FAQ from '@/components/FAQ';

const faqItems = [
  { question: 'How do I calculate GPA needed to reach my goal?', answer: 'Enter your current GPA, current credits, target GPA, and upcoming course credits. The calculator determines the required upcoming GPA and required grade level.' },
  { question: 'Can I reach a 4.0 GPA from a lower GPA?', answer: 'It depends on how many credits remain and your target. The calculator uses your current record and future courses to show if reaching 4.0 is feasible.' },
  { question: 'Does course weight affect my GPA goal?', answer: 'Yes. Weighted courses (Honors/AP) increase effective grade points by 0.5 or 1.0, making high targets more achievable with advanced coursework.' },
  { question: 'How many credits do I need to achieve my target GPA?', answer: 'The calculator estimates required upcoming credits and corresponding grades. More credits with high grades generally accelerate target achievement.' },
  { question: 'What is a realistic GPA goal?', answer: 'A realistic goal often depends on your current GPA and study plan. Incremental goals like +0.2 per semester are easier; ambitious goals should align with your schedule and effort.' },
];

export const metadata: Metadata = {
  title: 'GPA Goal Calculator – Plan & Achieve Your Target GPA',
  description: 'Use our GPA Goal Calculator to calculate the grades you need to reach your desired GPA. Supports weighted courses, multiple semesters, and cumulative GPA.',
  keywords: 'gpa goal calculator, calculate gpa goal, gpa target calculator, how to reach gpa goal, cumulative gpa goal planner',
  openGraph: {
    title: 'GPA Goal Calculator – Plan & Achieve Your Target GPA',
    description: 'Use our GPA Goal Calculator to calculate the grades you need to reach your desired GPA. Supports weighted courses, multiple semesters, and cumulative GPA.',
    type: 'website',
    url: 'https://topgpacalculator.com/gpa-calculators/gpa-goal-calculator',
  },
  alternates: {
    canonical: 'https://topgpacalculator.com/gpa-calculators/gpa-goal-calculator',
  },
};

export default function GpaGoalCalculatorPage() {
  const pageUrl = 'https://topgpacalculator.com/gpa-calculators/gpa-goal-calculator';

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
              { '@type': 'ListItem', position: 3, name: 'GPA Goal Calculator', item: pageUrl },
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
            headline: 'GPA Goal Calculator – Plan & Achieve Your Target GPA',
            description: 'Use our GPA Goal Calculator to calculate the grades you need to reach your desired GPA. Supports weighted courses, multiple semesters, and cumulative GPA.',
            author: { '@type': 'Organization', name: 'Top GPA Calculator' },
            publisher: { '@type': 'Organization', name: 'Top GPA Calculator' },
            datePublished: '2026-03-18',
            mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
          }),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav aria-label="Breadcrumb" className="text-sm mb-6">
          <ol className="flex gap-2 text-gray-500">
            <li><Link href="/" className="text-blue-600 hover:underline">Home</Link></li>
            <li>›</li>
            <li><Link href="/gpa-calculators" className="text-blue-600 hover:underline">GPA Calculators</Link></li>
            <li>›</li>
            <li className="font-semibold text-gray-900">GPA Goal Calculator</li>
          </ol>
        </nav>

        <header className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl p-8 mb-8 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">GPA Goal Calculator</h1>
          <p className="text-lg md:text-xl mb-3">Use our GPA Goal Calculator to calculate the grades you need to reach your desired GPA. Supports weighted courses, multiple semesters, and cumulative GPA planning.</p>
          <p className="max-w-3xl">This easy-to-use GPA target tool helps students design a path to their academic target with accurate formulas, real-time results, and planning guidance for success.</p>
        </header>

        <section id="table-of-contents" className="bg-white rounded-2xl p-6 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-blue-600">
            <a href="#calculator" className="hover:underline">Calculator</a>
            <a href="#what-is" className="hover:underline">What Is</a>
            <a href="#how-to-use" className="hover:underline">How to Use</a>
            <a href="#formula" className="hover:underline">GPA Formulas</a>
            <a href="#example" className="hover:underline">Example</a>
            <a href="#tips" className="hover:underline">Tips</a>
            <a href="#related" className="hover:underline">Related</a>
            <a href="#faq" className="hover:underline">FAQ</a>
          </div>
        </section>

        <section id="calculator" className="bg-white rounded-2xl p-6 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Powerful GPA Goal Calculator</h2>
          <GpaGoalCalculator />
        </section>

        <article className="prose prose-slate max-w-none">
          <section id="what-is">
            <h2>What Is a GPA Goal Calculator</h2>
            <p>An online GPA goal calculator helps you convert “where I am” and “where I want to go” into actionable grade targets. It makes cumulative GPA planning precise, providing a roadmap for currently enrolled students and future semester scheduling.</p>
            <p>This tool is indispensable for anyone searching for “gpa goal calculator”, “calculate gpa goal” or “gpa target calculator”, and it supports comprehensive planning for both GPA and credit goals.</p>
          </section>

          <section id="how-to-use">
            <h2>How to Use a GPA Goal Calculator</h2>
            <ol>
              <li>Enter your current cumulative GPA and the total credits already completed.</li>
              <li>Set your GPA target (goal).</li>
              <li>Enter upcoming courses, credit hours, and expected grade estimates.</li>
              <li>Enable weighted grading for Honors/AP courses if used.</li>
              <li>Review the required GPA output and projected cumulative GPA.</li>
              <li>Adjust course plans and repeat until you have a realistic achievement path.</li>
            </ol>
          </section>

          <section id="formula">
            <h2>GPA Goal Formula Explained</h2>
            <p>Use these formulas for accurate calculation and planning.</p>
            <h3>Cumulative GPA</h3>
            <p>Cumulative GPA = (Previous GPA × Previous Credits + Current Grade Points) ÷ Total Credits</p>
            <h3>Required GPA to Reach Target</h3>
            <p>Required GPA = (Target GPA × (Total Credits + Upcoming Credits) − Previous GPA × Previous Credits) ÷ Upcoming Credits</p>
            <h3>Weighted GPA (Optional)</h3>
            <p>Weighted Grade = Base Grade + Bonus</p>
            <p>Honors: +0.5, AP: +1.0</p>
          </section>

          <section id="example">
            <h2>Example: Achieving Your Target GPA</h2>
            <p>Scenario:</p>
            <ul>
              <li>Current GPA = 3.2</li>
              <li>Current Credits = 30</li>
              <li>Target GPA = 3.5</li>
              <li>Upcoming Credits = 10</li>
            </ul>
            <p>Required GPA = (3.5 × 40 − 3.2 × 30) ÷ 10 = 4.0 → All A’s needed.</p>
            <p>This shows how useful a gpa goal planner is for setting realistic goals and course load strategies.</p>
          </section>

          <section id="tips">
            <h2>Tips to Reach Your GPA Goal</h2>
            <ul>
              <li>Focus on high-credit courses early because they have greater effect.</li>
              <li>Balance routine courses with one or two Honors/AP options for weighted boosts.</li>
              <li>Use the calculator every month to track progress and adjust targets.</li>
              <li>Seek tutoring and study groups for challenging coursework.</li>
              <li>Aim for 3.5+ in planned courses if your current GPA is below target.</li>
            </ul>
          </section>

          <section id="related">
            <h2>Related GPA Calculators</h2>
            <ul>
              <li><Link href="/gpa-calculators/cumulative-gpa-calculator" className="text-blue-600 hover:underline">Cumulative GPA Calculator</Link></li>
              <li><Link href="/gpa-calculators/semester-gpa-calculator" className="text-blue-600 hover:underline">Semester GPA Calculator</Link></li>
              <li><Link href="/gpa-calculators/gpa-projection-calculator" className="text-blue-600 hover:underline">GPA Projection Calculator</Link></li>
              <li><Link href="/gpa-calculators/gpa-improvement-calculator" className="text-blue-600 hover:underline">GPA Improvement Calculator</Link></li>
              <li><Link href="/gpa-calculators/weighted-gpa-calculator" className="text-blue-600 hover:underline">Weighted GPA Calculator</Link></li>
            </ul>
          </section>

          <section id="external-authority">
            <h2>External Authority Links</h2>
            <ul>
              <li><a href="https://www.collegeboard.org" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">College Board</a></li>
              <li><a href="https://nces.ed.gov" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">NCES</a></li>
              <li><a href="https://www.ed.gov" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">U.S. Department of Education</a></li>
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
