import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import FAQ from '@/components/FAQ';
import RelatedCalculators from '@/components/RelatedCalculators';
import PercentageToGPACalculator from '@/components/PercentageToGPACalculator';
import { ArticleSchema, FAQSchema, BreadcrumbSchema, CalculatorSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Percentage to GPA Calculator  Convert Your Grades Easily',
  description: 'Use our Percentage to GPA Calculator to convert your percentage grades to GPA instantly. Supports 4.0, 5.0, and custom GPA scales with accurate formulas.',
  keywords: [
    'percentage to gpa calculator',
    'convert percentage to gpa',
    'gpa from percentage calculator',
    'how to convert percentage to gpa',
    'grade percentage to gpa',
  ],
  openGraph: {
    title: 'Percentage to GPA Calculator  Convert Your Grades Easily',
    description: 'Use our Percentage to GPA Calculator to convert your percentage grades to GPA instantly. Supports 4.0, 5.0, and custom GPA scales with accurate formulas.',
    type: 'website',
    url: 'https://topgpacalculator.com/gpa-calculators/percentage-to-gpa-calculator',
    images: [{ url: 'https://topgpacalculator.com/logo.svg', width: 1200, height: 630, alt: 'Percentage to GPA Calculator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Percentage to GPA Calculator  Convert Your Grades Easily',
    description: 'Use our Percentage to GPA Calculator to convert your percentage grades to GPA instantly. Supports 4.0, 5.0, and custom GPA scales with accurate formulas.',
    images: ['https://topgpacalculator.com/logo.svg'],
  },
  alternates: {
    canonical: 'https://topgpacalculator.com/gpa-calculators/percentage-to-gpa-calculator',
  },
};

const faqItems = [
  {
    question: 'How do I convert percentage to GPA?',
    answer: 'To convert percentage to GPA, divide your percentage by 100 and multiply by your target GPA scale. E.g., on a 4.0 scale, 87% equals (87  100)  4 = 3.48. Our calculator does this automatically with options for 4.0, 5.0, 10.0, India/Asia, and custom scales.',
  },
  {
    question: 'What is 85% in GPA?',
    answer: 'On a 4.0 scale, 85% converts to 3.4; on 5.0 it converts to 4.25; on 10.0 it converts to 8.5. Use the calculator with scale selector to get instant values and choose weighted or unweighted GPA options.',
  },
  {
    question: 'Can I calculate GPA from weighted percentages?',
    answer: 'Yes. Set the percentage score and select Honors or AP. Weighted GPA adds a grade boost (typically +0.5 for Honors and +1.0 for AP) and ensures the result caps at your chosen scale maximum.',
  },
  {
    question: 'Which conversion formula is best?',
    answer: 'The best formula depends on the system you use. The standard formula is (Percentage  100)  Scale. For some India/Asia systems, a variant is (Percentage  0.75)  10  10. Pick the method that matches your school policy.',
  },
  {
    question: 'Do universities convert percentage differently?',
    answer: 'Yes, universities may use custom conversions for international applicants. This is why having a flexible calculator with multiple scale options is helpfulcheck your target institutions conversion guideline and adjust accordingly.',
  },
];

export default function PercentageToGPACalculatorPage() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'GPA Calculators', href: '/gpa-calculators' },
          { label: 'Percentage to GPA Calculator', href: '/gpa-calculators/percentage-to-gpa-calculator' },
        ]}
      />

      <ArticleSchema
        headline="Percentage to GPA Calculator  Convert Your Grades Easily"
        description="Use our Percentage to GPA Calculator to convert your percentage grades to GPA instantly. Supports 4.0, 5.0, and custom GPA scales with accurate formulas."
        author="GPA Calculator Team"
        datePublished="2026-03-19"
        dateModified="2026-03-19"
      />

      <FAQSchema faqs={faqItems} />
      <CalculatorSchema
        title="Percentage to GPA Calculator"
        description="Instantly convert percentage scores to GPA for global grading systems including 4.0, 5.0, 10.0, India/Asia, and custom scales."
        url="https://topgpacalculator.com/gpa-calculators/percentage-to-gpa-calculator"
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h1 className="text-4xl font-bold mb-4">Percentage to GPA Calculator</h1>
          <p className="text-lg text-slate-700">
            Use our percentage to GPA calculator to convert percentage grades into GPA instantly. Built for students worldwide with multi-scale conversion, weighted options, and instant results.
          </p>
        </header>

        <PercentageToGPACalculator />

        <section id="table-of-contents" className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            <a href="#calculator" className="text-blue-600 hover:underline">Calculator</a>
            <a href="#what-is" className="text-blue-600 hover:underline">What Is a Percentage to GPA Calculator</a>
            <a href="#how-to-convert" className="text-blue-600 hover:underline">How to Convert Percentage to GPA</a>
            <a href="#conversion-formulas" className="text-blue-600 hover:underline">Conversion Formulas Explained</a>
            <a href="#example-calculations" className="text-blue-600 hover:underline">Example Calculations</a>
            <a href="#why-needed" className="text-blue-600 hover:underline">Why Students Need This</a>
            <a href="#related" className="text-blue-600 hover:underline">Related GPA Tools</a>
            <a href="#faq" className="text-blue-600 hover:underline">FAQ</a>
          </div>
        </section>

        <section id="what-is" className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-4">What Is a Percentage to GPA Calculator</h2>
          <p className="text-slate-700 mb-4">A Percentage to GPA Calculator converts numeric percentages into GPA values to help students easily understand academic performance across different grading systems. This tool is especially useful for international students, scholarship applicants, and anyone comparing multiple grading scales.</p>
          <p className="text-slate-700 mb-4">Instead of manual formulas and guesswork, this calculator provides fast and accurate results in real time. You can choose standard scales (4.0, 5.0, 10.0), use a common India/Asia variant, or enter your own custom scale. It also handles weighted course settings, giving honors and AP students the ability to estimate elevated GPA.</p>
          <p className="text-slate-700">This page is optimized for the keywords percentage to gpa calculator, convert percentage to gpa, gpa from percentage calculator, how to convert percentage to gpa, grade percentage to gpa, and includes rich content for search signals.</p>
        </section>

        <section id="how-to-convert" className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-4">How to Convert Percentage to GPA</h2>
          <p className="text-slate-700 mb-4">Follow these simple steps to convert your percentage grade to GPA:</p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-700">
            <li>Choose the GPA scale you want (4.0, 5.0, 10.0, India/Asia, or a custom scale).</li>
            <li>Enter your percentage score (0-100).</li>
            <li>Optional: set course type to Regular, Honors or AP, and provide course name for tracking.</li>
            <li>Calculator applies the correct formula and shows instant GPA result, weighted GPA, and letter grade.</li>
            <li>Use reset to try multiple scores quickly and compare scale outcomes.</li>
          </ol>
          <p className="text-slate-700 mt-4">This process ensures you can compute GPA without memorizing complex formulas. Our tool supports fast, accurate conversion and is mobile-friendly for all students worldwide.</p>
        </section>

        <section id="conversion-formulas" className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-4">Conversion Formulas Explained</h2>
          <p className="text-slate-700 mb-4">Multiple conversion methods are included so that you can match your institutions grading rules.</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li><strong>Standard 4.0 Scale:</strong> GPA = (Percentage  100)  4.0</li>
            <li><strong>Standard 5.0 Scale:</strong> GPA = (Percentage  100)  5.0</li>
            <li><strong>Standard 10.0 Scale:</strong> GPA = Percentage  10</li>
            <li><strong>India/Asia Common Formula:</strong> GPA = (Percentage  0.75)  10  10</li>
            <li><strong>Custom Scale:</strong> GPA = (Percentage  100)  Custom Scale, where you set the custom value.</li>
          </ul>
          <p className="text-slate-700 mt-4">This page includes a formula panel and step-by-step output so you can quickly verify results and follow best practices for GPA conversion.</p>
        </section>

        <section id="example-calculations" className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-4">Example Percentage to GPA Calculations</h2>
          <div className="space-y-4">
            <div className="rounded-lg p-4 bg-gray-50 border border-gray-200">
              <h3 className="text-xl font-semibold">Example 1 (4.0 Scale)</h3>
              <p>Percentage = 87%</p>
              <p>GPA = (87  100)  4 = 3.48</p>
            </div>
            <div className="rounded-lg p-4 bg-gray-50 border border-gray-200">
              <h3 className="text-xl font-semibold">Example 2 (5.0 Scale)</h3>
              <p>Percentage = 92%</p>
              <p>GPA = (92  100)  5 = 4.60</p>
            </div>
            <div className="rounded-lg p-4 bg-gray-50 border border-gray-200">
              <h3 className="text-xl font-semibold">Example 3 (India/Asia Formula)</h3>
              <p>Percentage = 75%</p>
              <p>GPA = (75  0.75)  10  10 = 74.25</p>
              <p>This formula is included for regional conversion, though different boards may use their own weights.</p>
            </div>
          </div>
        </section>

        <section id="why-needed" className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-4">Why Students Need a Percentage to GPA Calculator</h2>
          <p className="text-slate-700 mb-4">Students use this conversion for college applications, scholarship eligibility, transcript evaluation, and cross-border comparisons. Percentage and GPA are both important measures; converting between them provides clarity and confidence during academic planning.</p>
          <p className="text-slate-700 mb-4">For scholarship applications, many organizations ask for a GPA based on a 4.0 scale, while your school may report percentages. This tool eliminates manual calculations and misinterpretations.</p>
          <p className="text-slate-700">Whether you are a high school senior, college student, or international applicant, an accurate and fast calculator is essential for goal setting and real-time academic tracking.</p>
        </section>

        <section id="related" className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-4">Related GPA Tools</h2>
          <p className="text-slate-700 mb-4">Explore related calculators for full academic planning support.</p>
          <ul className="list-disc pl-5 space-y-2 text-blue-600">
            <li><Link href="/gpa-calculators/gpa-calculator" className="hover:underline">GPA Calculator</Link></li>
            <li><Link href="/gpa-calculators/gpa-to-percentage-calculator" className="hover:underline">GPA to Percentage Calculator</Link></li>
            <li><Link href="/gpa-calculators/weighted-gpa-calculator" className="hover:underline">Weighted GPA Calculator</Link></li>
            <li><Link href="/gpa-calculators/cumulative-gpa-calculator" className="hover:underline">Cumulative GPA Calculator</Link></li>
            <li><Link href="/gpa-calculators/semester-gpa-calculator" className="hover:underline">Semester GPA Calculator</Link></li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-4">Authority Resources</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li><a href="https://www.collegeboard.org" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">College Board</a></li>
            <li><a href="https://nces.ed.gov" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">NCES</a></li>
            <li><a href="https://www.ed.gov" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">U.S. Department of Education</a></li>
          </ul>
        </section>

        <section id="faq" className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <FAQ items={faqItems} />
        </section>

        <RelatedCalculators relatedIds={['gpa-calculator', 'gpa-to-percentage-calculator', 'weighted-gpa-calculator', 'cumulative-gpa-calculator', 'semester-gpa-calculator']} />
      </div>

      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://topgpacalculator.com' },
        { name: 'GPA Calculators', url: 'https://topgpacalculator.com/gpa-calculators' },
        { name: 'Percentage to GPA Calculator', url: 'https://topgpacalculator.com/gpa-calculators/percentage-to-gpa-calculator' },
      ]} />
    </div>
  );
}
