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
    question: 'What is a good GPA?',
    answer: 'A GPA of 3.5 or higher is generally considered very good. Most colleges look for a minimum GPA of 2.0 to 2.5 for admission, while competitive schools prefer 3.5 or above.',
  },
  {
    question: 'How do I calculate GPA?',
    answer: 'GPA is calculated by multiplying each grade\'s point value by the number of credit hours, summing all these products, and dividing by the total credit hours.',
  },
  {
    question: 'What is a 4.0 GPA scale?',
    answer: 'The 4.0 GPA scale is the most common grading system in the US. A=4.0, B=3.0, C=2.0, D=1.0, F=0.0.',
  },
  {
    question: 'Do colleges recalculate GPA?',
    answer: 'Yes, many colleges recalculate your GPA using their own criteria, sometimes excluding certain courses or giving more weight to core classes.',
  },
  {
    question: 'How can I improve my GPA?',
    answer: 'Improve your GPA by taking easier courses, improving study habits, getting tutoring help, and consistently earning higher grades on assignments and exams.',
  },
  {
    question: 'What is weighted GPA?',
    answer: 'Weighted GPA gives more value to AP, Honors, and IB courses. Instead of 4.0 being the maximum, it can go higher (4.5 or 5.0) depending on the school.',
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
                <h2 className="text-3xl font-bold text-gray-800 mb-6">About {calculator.name}</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {calculator.description} Our free {calculator.name.toLowerCase()} helps {calculator.targetAudience.toLowerCase()} instantly
                  calculate their academic standing. Whether you're tracking progress for
                  college admissions, scholarships, or personal growth, our tool provides accurate
                  results in seconds.
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-8">How to Use This Calculator</h2>
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  <li>Enter your course name (optional) in the first field</li>
                  <li>Select your grade for the course using the dropdown</li>
                  <li>Enter the number of credit hours for the course</li>
                  <li>Repeat for each course you want to include</li>
                  <li>Click "Calculate GPA" to see your results</li>
                  <li>Add or remove courses as needed</li>
                </ol>

                <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-8">Understanding GPA Scale</h2>
                <p className="text-gray-700 mb-4">
                  Most US schools use a 4.0 GPA scale where letter grades convert as follows:
                </p>
                <table className="w-full border-collapse mb-6">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 px-4 py-2 text-left">Letter Grade</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">GPA Points</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">A</td>
                      <td className="border border-gray-300 px-4 py-2">4.0</td>
                      <td className="border border-gray-300 px-4 py-2">90-100%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">B</td>
                      <td className="border border-gray-300 px-4 py-2">3.0</td>
                      <td className="border border-gray-300 px-4 py-2">80-89%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">C</td>
                      <td className="border border-gray-300 px-4 py-2">2.0</td>
                      <td className="border border-gray-300 px-4 py-2">70-79%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">D</td>
                      <td className="border border-gray-300 px-4 py-2">1.0</td>
                      <td className="border border-gray-300 px-4 py-2">60-69%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">F</td>
                      <td className="border border-gray-300 px-4 py-2">0.0</td>
                      <td className="border border-gray-300 px-4 py-2">Below 60%</td>
                    </tr>
                  </tbody>
                </table>

                <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-8">Tips for Improving Your {calculator.name.split(' ').slice(0, 1).join(' ')} GPA</h2>
                <ul className="list-disc list-inside space-y-3 text-gray-700">
                  <li>Develop consistent study habits and allocate time for each course</li>
                  <li>Attend all classes and participate actively in discussions</li>
                  <li>Form study groups with classmates to reinforce learning</li>
                  <li>Seek help from tutors or professors when you're struggling</li>
                  <li>Start assignments early to avoid last-minute stress</li>
                  <li>Review material regularly, not just before exams</li>
                  <li>Take care of your health with proper sleep and nutrition</li>
                  <li>Set realistic goals and track your progress regularly</li>
                </ul>
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
