import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GPACalculator from '@/components/GPACalculator';
import RelatedCalculators from '@/components/RelatedCalculators';
import Breadcrumb from '@/components/Breadcrumb';
import FAQ from '@/components/FAQ';
import { FAQSchema } from '@/components/SchemaMarkup';
import { calculatorData } from '@/data/calculators';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return calculatorData.map((calc) => ({
    slug: calc.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const calculator = calculatorData.find((calc) => calc.id === slug);

  if (!calculator) {
    return {};
  }

  const url = `https://topgpacalculator.com/gpa-calculators/${calculator.id}`;

  return {
    title: calculator.title,
    description: calculator.metaDescription,
    openGraph: {
      title: calculator.title,
      description: calculator.metaDescription,
      url: url,
      type: 'website',
      images: [
        {
          url: 'https://topgpacalculator.com/og-image.png',
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: calculator.title,
      description: calculator.metaDescription,
    },
    alternates: {
      canonical: url,
    },
  };
}

const sampleFAQs = [
  {
    question: 'How do I calculate GPA online?',
    answer: 'Start by entering course names, grades, and credit hours. The online calculator uses grade points (grade value × credit hours) and divides by total credits for your GPA.',
  },
  {
    question: 'Is this an accurate online GPA calculator?',
    answer: 'Yes, this calculator uses the standard 4.0 scale and optional weighted values for Honors/AP, providing accurate GPA results for most college grading systems.',
  },
  {
    question: 'Can I calculate weighted GPA online?',
    answer: 'Yes, choose Honors/AP/Advanced for course type to apply weighted score adjustments in the online calculator.',
  },
  {
    question: 'What is a good GPA?',
    answer: 'A good GPA generally begins at 3.0, with 3.5+ considered strong. Your target should align with career, scholarship and grad school goals.',
  },
  {
    question: 'How does credit hour affect GPA?',
    answer: 'Credit hours multiply the grade points for each course; high credits with strong grades can raise your GPA significantly, while poor grades in high-credit courses can drag it down.',
  },
];

export default async function CalculatorPage({ params }: Props) {
  const { slug } = await params;
  const calculator = calculatorData.find((calc) => calc.id === slug);

  if (!calculator) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Calculators', href: '/gpa-calculators' },
    { label: calculator.name, href: `/gpa-calculators/${calculator.id}` },
  ];

  const breadcrumbSchema = [
    { name: 'Home', url: 'https://gpacalculator.com' },
    { name: 'Calculators', url: 'https://gpacalculator.com/gpa-calculators' },
    { name: calculator.name, url: `https://gpacalculator.com/gpa-calculators/${calculator.id}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: breadcrumbSchema.map((item, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: item.name,
              item: item.url,
            })),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EducationalApplication',
            name: calculator.title,
            description: calculator.metaDescription,
            url: `https://gpacalculator.com/gpa-calculators/${calculator.id}`,
            applicationCategory: 'EducationalApplication',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
          }),
        }}
      />

      <FAQSchema faqs={sampleFAQs} />

      <div className="bg-white">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Header Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{calculator.h1}</h1>
            <p className="text-xl text-blue-100">{calculator.metaDescription}</p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="md:col-span-2">
              {/* Calculator */}
              <div className="mb-12">
                <GPACalculator />
              </div>

              {/* Content */}
              <article className="prose prose-lg max-w-none">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Table of Contents</h2>
                  <ul className="list-decimal list-inside space-y-2 text-gray-700">
                    <li><a href="#what-is-online-gpa-calculator" className="text-blue-600 hover:underline">What Is an Online GPA Calculator</a></li>
                    <li><a href="#how-to-use" className="text-blue-600 hover:underline">How to Use the Online GPA Calculator</a></li>
                    <li><a href="#gpa-formula" className="text-blue-600 hover:underline">GPA Calculation Formula Explained</a></li>
                    <li><a href="#weighted-vs-unweighted" className="text-blue-600 hover:underline">Weighted vs Unweighted GPA</a></li>
                    <li><a href="#example-calculation" className="text-blue-600 hover:underline">Example Calculation</a></li>
                    <li><a href="#tips-improve" className="text-blue-600 hover:underline">Tips to Improve Your GPA</a></li>
                    <li><a href="#grade-scale" className="text-blue-600 hover:underline">Grade Scale (4.0)</a></li>
                    <li><a href="#related-calculators" className="text-blue-600 hover:underline">Related GPA Calculators</a></li>
                  </ul>
                </div>

                <h2 id="what-is" className="text-3xl font-bold text-gray-800 mb-4">What Is {calculator.name}</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {calculator.description} This calculator simplifies GPA tracking by letting you enter courses, grades and credit hours quickly. It provides instant answers for <strong>{calculator.name.toLowerCase()}</strong> and related GPA queries while ensuring accurate computation based on the standard 4.0 scale.
                </p>

                <h2 id="how-to-use" className="text-3xl font-bold text-gray-800 mb-4">How to Use {calculator.name}</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Use the calculator panel above to add course rows and enter required details. Choose a grade and credit hours, and optionally select course type (Regular/Honors/AP/Advanced). The calculator updates GPA automatically and displays totals instantly.
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
                  <li>Enter course name (optional).</li>
                  <li>Select letter grade (A through F).</li>
                  <li>Choose course type (Regular/Honors/AP/Advanced) for weighted GPA.</li>
                  <li>Set credit hours (1–12).</li>
                  <li>Add or remove courses to reflect your schedule.</li>
                  <li>Results display automatically; press Calculate if you prefer manual update.</li>
                </ol>

                <h2 id="gpa-formula" className="text-3xl font-bold text-gray-800 mb-4">GPA Calculation Formula Explained</h2>
                <p className="text-gray-700 mb-6">
                  The formula is simple and accurate:
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6">
                  <p className="font-bold text-gray-800">GPA = Total Grade Points ÷ Total Credit Hours</p>
                  <p className="text-gray-700 mt-2">Where Grade Points = Grade Value × Credit Hours.</p>
                </div>

                <h2 id="weighted-vs-unweighted" className="text-3xl font-bold text-gray-800 mb-4">Weighted vs Unweighted GPA</h2>
                <p className="text-gray-700 mb-4">Unweighted GPA follows a standard 4.0 scale, ignoring course difficulty. Weighted GPA adds 0.5 for Honors and 1.0 for AP/Advanced courses, so top performers can exceed 4.0 in some systems.</p>
                <p className="text-gray-700 mb-6">Our calculator shares both values and clearly shows how performance impacts GPA with optional weighting.</p>

                <h2 id="grade-scale" className="text-3xl font-bold text-gray-800 mb-4">Grade Scale (Standard 4.0)</h2>
                <p className="text-gray-700 mb-4">Use this table to map letter grades to grade points for the formula.</p>
                <table className="w-full border-collapse mb-6">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 px-4 py-2 text-left">Letter Grade</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">GPA Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-gray-300 px-4 py-2">A</td><td className="border border-gray-300 px-4 py-2">4.0</td></tr>
                    <tr><td className="border border-gray-300 px-4 py-2">A-</td><td className="border border-gray-300 px-4 py-2">3.7</td></tr>
                    <tr><td className="border border-gray-300 px-4 py-2">B+</td><td className="border border-gray-300 px-4 py-2">3.3</td></tr>
                    <tr><td className="border border-gray-300 px-4 py-2">B</td><td className="border border-gray-300 px-4 py-2">3.0</td></tr>
                    <tr><td className="border border-gray-300 px-4 py-2">B-</td><td className="border border-gray-300 px-4 py-2">2.7</td></tr>
                    <tr><td className="border border-gray-300 px-4 py-2">C+</td><td className="border border-gray-300 px-4 py-2">2.3</td></tr>
                    <tr><td className="border border-gray-300 px-4 py-2">C</td><td className="border border-gray-300 px-4 py-2">2.0</td></tr>
                    <tr><td className="border border-gray-300 px-4 py-2">C-</td><td className="border border-gray-300 px-4 py-2">1.7</td></tr>
                    <tr><td className="border border-gray-300 px-4 py-2">D</td><td className="border border-gray-300 px-4 py-2">1.0</td></tr>
                    <tr><td className="border border-gray-300 px-4 py-2">F</td><td className="border border-gray-300 px-4 py-2">0.0</td></tr>
                  </tbody>
                </table>

                <p className="text-gray-700 mb-6">Optional weighted calculations: Honors +0.5, AP +1.0 (max 5.0 per class). Use the course type selector in the calculator to automatically store this data in your result.</p>

                <h2 id="example-calculation" className="text-3xl font-bold text-gray-800 mb-4">Example Calculation</h2>
                <p className="text-gray-700 leading-relaxed mb-4">Use this weighted example to confirm your calculator usage:</p>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
                  <li>Math (AP): A, 4 credits → Grade Points = 5.0 × 4 = 20</li>
                  <li>English (Honors): B+, 3 credits → Grade Points = 3.8 × 3 = 11.4</li>
                  <li>History (Regular): A-, 3 credits → Grade Points = 3.7 × 3 = 11.1</li>
                </ul>
                <p className="text-gray-700 mb-2">Total Grade Points = 42.5</p>
                <p className="text-gray-700 mb-2">Total Credits = 10</p>
                <p className="font-semibold text-gray-800 mb-6">GPA (Weighted) = 42.5 ÷ 10 = 4.25</p>

                <h2 id="tips-improve" className="text-3xl font-bold text-gray-800 mb-4">Tips to Improve Your GPA</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">A strong GPA helps open doors for academic and career growth:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li><strong>Internships:</strong> Many internships require minimum GPA thresholds (often 3.0+).</li>
                  <li><strong>Scholarships:</strong> Higher GPA increases eligibility for merit-based aid.</li>
                  <li><strong>Career opportunities:</strong> Employers may review GPA as a performance indicator.</li>
                  <li><strong>Graduate school:</strong> Admissions rely heavily on cumulative GPA and consistency.</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-800 mb-4" id="related-calculators">Related GPA Calculators</h2>
                <p className="text-gray-700 mb-4">Explore these tools for comprehensive GPA planning:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li><a href="/freshman-gpa-calculator" className="text-blue-600 hover:underline">Freshman GPA Calculator</a></li>
                  <li><a href="/junior-gpa-calculator" className="text-blue-600 hover:underline">Junior GPA Calculator</a></li>
                  <li><a href="/senior-gpa-calculator" className="text-blue-600 hover:underline">Senior GPA Calculator</a></li>
                  <li><a href="/term-gpa-calculator" className="text-blue-600 hover:underline">Term GPA Calculator</a></li>
                  <li><a href="/gpa-projection-calculator" className="text-blue-600 hover:underline">GPA Projection Calculator</a></li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">Trusted Planning Resources</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                  <li><a href="https://www.collegeboard.org" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">College Board</a></li>
                  <li><a href="https://nces.ed.gov" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">National Center for Education Statistics (NCES)</a></li>
                  <li><a href="https://www.ed.gov" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">U.S. Department of Education</a></li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">How to Get the Most Out of This Page</h2>
                <p className="text-gray-700 leading-relaxed">Bookmark and revisit after each semester. Use it for trend analysis; compare first year and second year to figure out GPA targets for junior year. This page is designed to be fast, lightweight, and mobile-friendly for students on the go.</p>
              </article>

              {/* AdSense Block */}
              <div className="my-12 p-8 bg-gray-100 border-2 border-gray-300 rounded-lg text-center">
                <p className="text-gray-600">Advertisement Space</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              {/* Quick Info Box */}
              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200 mb-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Quick Facts</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li>✓ <strong>Instant Calculation:</strong> Get results in seconds</li>
                  <li>✓ <strong>100% Accurate:</strong> Uses standard GPA formula</li>
                  <li>✓ <strong>Free to Use:</strong> No registration required</li>
                  <li>✓ <strong>Mobile Friendly:</strong> Works on all devices</li>
                  <li>✓ <strong>For {calculator.targetAudience}</strong></li>
                </ul>
              </div>

              {/* AdSense Sidebar */}
              <div className="bg-gray-100 p-6 rounded-lg border-2 border-gray-300 mb-8 text-center">
                <p className="text-gray-600 text-sm">Advertisement Space</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ items={sampleFAQs} />

        {/* Related Calculators */}
        <RelatedCalculators relatedIds={calculator.relatedCalculators} />

        {/* Bottom AdSense */}
        <section className="py-8 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-8 text-center">
              <p className="text-gray-600">Advertisement Space</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
