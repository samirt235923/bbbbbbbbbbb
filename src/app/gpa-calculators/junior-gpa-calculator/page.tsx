import { Metadata } from 'next';
import Link from 'next/link';
import JuniorGPACalculator from '@/components/JuniorGPACalculator';
import { FAQSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Junior GPA Calculator – Calculate Your Junior Year GPA',
  description: 'Use our Junior GPA Calculator to calculate your GPA for junior year. Enter grades and credit hours to get instant results.',
  keywords: 'junior gpa calculator, junior year gpa calculator, calculate junior year gpa, high school junior gpa calculator, college junior gpa calculator',
  openGraph: {
    title: 'Junior GPA Calculator – Calculate Your Junior Year GPA',
    description: 'Use our Junior GPA Calculator to calculate your GPA for junior year. Enter grades and credit hours to get instant results.',
    type: 'website',
    url: 'https://topgpacalculator.com/gpa-calculators/junior-gpa-calculator',
    images: [{ url: 'https://topgpacalculator.com/logo.svg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Junior GPA Calculator – Calculate Your Junior Year GPA',
    description: 'Use our Junior GPA Calculator to calculate your GPA for junior year. Enter grades and credit hours to get instant results.',
  },
  alternates: {
    canonical: 'https://topgpacalculator.com/gpa-calculators/junior-gpa-calculator',
  },
};

const faqItems = [
  { question: 'How do I calculate junior GPA?', answer: 'Enter credit hours and grades for all junior year courses. The junior gpa calculator adds grade points and divides by total credits automatically.' },
  { question: 'Is junior year GPA important for college?', answer: 'Yes, junior year GPA is one of the most important metrics for college admissions because it shows progress as the application year approaches.' },
  { question: 'What is a good junior GPA?', answer: 'A strong junior GPA is typically 3.5 or above, but anything above 3.0 is respectable. Use the calculator to set specific grade goals for each course.' },
  { question: 'Does junior GPA affect college admission?', answer: 'Absolutely. Admissions teams look at junior year performance closely, because it is the most recent full-year record they can verify.' },
  { question: 'Can I improve GPA in junior year?', answer: 'Yes. Track grades each semester, raise low marks, and use weighted AP/Honors courses strategically. Use this tool to run what-if scenarios and target improvements.' },
];

export default function JuniorGPACalculatorPage() {
  const baseUrl = 'https://topgpacalculator.com/gpa-calculators/junior-gpa-calculator';

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      
      <FAQSchema faqs={faqItems} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav aria-label="Breadcrumb" className="text-sm mb-4">
          <ol className="flex flex-wrap gap-2 text-gray-600">
            <li><Link href="/" className="text-blue-600 hover:underline">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/gpa-calculators" className="text-blue-600 hover:underline">GPA Calculators</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-900 font-semibold">Junior GPA Calculator</li>
          </ol>
        </nav>

        <header className="bg-white p-6 rounded-2xl shadow-sm mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Junior GPA Calculator</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            This <strong>junior gpa calculator</strong> is built for fast junior year GPA planning. Use it to calculate your junior year GPA immediately by entering course names, credit hours, grades, and course levels.
          </p>
        </header>

        <section className="bg-white p-6 rounded-2xl shadow-sm mb-8">
          <h2 className="text-2xl font-semibold mb-4">Calculator</h2>
          <JuniorGPACalculator />
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-sm mb-8" id="table-of-contents">
          <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
          <ul className="list-decimal list-inside space-y-2 text-gray-700">
            <li><a href="#what-is" className="text-blue-600 hover:underline">What Is a Junior Year GPA</a></li>
            <li><a href="#how-to-calculate" className="text-blue-600 hover:underline">How to Calculate Junior GPA</a></li>
            <li><a href="#formula" className="text-blue-600 hover:underline">Junior GPA Formula Explained</a></li>
            <li><a href="#example" className="text-blue-600 hover:underline">Example of Junior GPA Calculation</a></li>
            <li><a href="#importance" className="text-blue-600 hover:underline">Why Junior Year GPA Is Important</a></li>
            <li><a href="#related" className="text-blue-600 hover:underline">Related GPA Calculators</a></li>
            <li><a href="#faq" className="text-blue-600 hover:underline">FAQ</a></li>
          </ul>
        </section>

        <article className="bg-white p-6 rounded-2xl shadow-sm prose prose-slate max-w-none">
          <h2 id="what-is">What Is a Junior Year GPA</h2>
          <p>
            Junior year GPA represents your academic performance during 11th grade (or third college year), and is often the strongest predictor for college applications, scholarships, and merit aid. Students usually take advanced core courses and electives at this point, making accurate calculation and planning essential.
          </p>
          <p>
            A junior year GPA calculator is different from a general GPA tool because it focuses on this critical phase, tracks weighted honors/AP course values, and provides directly applicable outputs for college readiness.
          </p>

          <h2 id="how-to-calculate">How to Calculate Junior GPA</h2>
          <p>
            Calculating junior year GPA is straightforward with the calculator above. Follow these steps for reliable results:
          </p>
          <ol>
            <li>Enter every course name from your junior year schedule.</li>
            <li>Input credit hours assigned by your school for each course (usually 0.5–5.0 scale, based on semester vs year-long classes).</li>
            <li>Select the letter grade for each course: A through F. Use +/- if your school uses it.</li>
            <li>Choose the course level: Regular, Honors (+0.5), or AP (+1.0) to include weighted GPA.
            </li>
            <li>The calculator instantaneously updates Total Credits, Total Grade Points, Junior Year GPA, Weighted GPA, and performance label.</li>
            <li>Experiment with grade improvements to see your how your GPA can rise by next semester.</li>
          </ol>

          <h2 id="formula">Junior GPA Formula Explained</h2>
          <p>
            The formula under the hood is one of the simplest and most accurate approaches used in US academic systems:
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
            <p className="font-bold">GPA = Total Grade Points ÷ Total Credit Hours</p>
            <p>Grade Points = Grade Value × Credit Hours</p>
          </div>
          <p>
            The grade value for an unweighted 4.0 scale is: A=4.0, A-=3.7, B+=3.3, B=3.0, etc. For weighted GPA, Honors courses add +0.5 and AP courses add +1.0, capped at 5.0. This helps high-achieving juniors track where they stand in a competitive application field.
          </p>

          <h2 id="example">Example of Junior GPA Calculation</h2>
          <p>
            Here is a real-world junior year example based on common core courses:
          </p>
          <ul>
            <li>Math (AP): A → 5.0 (weighted value) × 3 credits = 15</li>
            <li>English: B+ → 3.3 × 3 credits = 9.9</li>
            <li>Science: B → 3.0 × 4 credits = 12.0</li>
          </ul>
          <p>
            Total Grade Points = 36.9<br />
            Total Credits = 10<br />
            Junior GPA = 36.9 ÷ 10 = 3.69
          </p>
          <p>
            Since this calculator also computes weighted GPA, you can switch levels and immediately evaluate how honors and AP credits impact your academic profile.
          </p>

          <h2 id="importance">Why Junior Year GPA Is Important</h2>
          <p>
            Junior year is a pivotal academic term with significant implications across school and college pathways:
          </p>
          <ul>
            <li><strong>College Admissions:</strong> Many colleges emphasize junior year grades as they are often the most stable prediction of senior year performance.</li>
            <li><strong>Scholarships:</strong> Merit-based aid frequently uses junior GPA thresholds (e.g., 3.5+ or 4.0 for honors awards).</li>
            <li><strong>Internships:</strong> Competitive summer programs and internships may require a strong junior GPA on your resume.</li>
            <li><strong>Academic Standing:</strong> Junior year GPA determines eligibility for AP classes, dual enrollment, and advanced academic tracks for senior year.</li>
          </ul>
          <p>
            Regular visibility into GPA helps juniors maintain momentum, spot weak courses early, and prioritize strategic grade improvements.
          </p>

          <h2 id="features">Key Features of This Calculator</h2>
          <ul>
            <li>Easy input system with course names, credit hours, and letter grade selection.</li>
            <li>Real-time GPA updates as values change.</li>
            <li>Weighted GPA support for Honors/AP/Advanced classes.</li>
            <li>Mobile-friendly design with responsive spacing.</li>
            <li>Clear output cards for credits, grade points, and GPA.</li>
          </ul>

          <h2 id="benefits">Benefits of Using a Junior GPA Calculator</h2>
          <ul>
            <li>Saves time and reduces manual calculation errors.</li>
            <li>Helps plan course selection for junior and senior years.</li>
            <li>Supports constant performance tracking and goal setting.</li>
            <li>Enables quick “what-if” scenario modeling before application season.</li>
          </ul>

          <h2 id="tips">Tips to Improve Junior Year GPA</h2>
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-4">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Implement consistent study habits and active review.</li>
              <li>Create a weekly schedule for project deadlines and exam preparation.</li>
              <li>Choose courses that balance ambition with GPA protection.</li>
              <li>Track progress with this calculator and adjust early.</li>
            </ul>
          </div>

          <h2 id="comparison">Comparison: Junior vs other GPAs</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold">Junior vs Simple GPA</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Junior is preparation-focused for college applications.</li>
                <li>Simple is a lightweight general calculator for quick use.</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold">Junior vs Senior GPA</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Junior GPA is used to plan before senior year.</li>
                <li>Senior GPA often determines final admissions decisions.</li>
              </ul>
            </div>
          </div>

          <h2 id="related">Related GPA Calculators</h2>
          <ul>
            <li><Link href="/gpa-calculators/sophomore-gpa-calculator" className="text-blue-600 hover:underline">Sophomore GPA Calculator</Link></li>
            <li><Link href="/gpa-calculators/senior-gpa-calculator" className="text-blue-600 hover:underline">Senior GPA Calculator</Link></li>
            <li><Link href="/gpa-calculators/high-school-gpa-calculator" className="text-blue-600 hover:underline">High School GPA Calculator</Link></li>
            <li><Link href="/gpa-calculators/gpa-improvement-calculator" className="text-blue-600 hover:underline">GPA Improvement Calculator</Link></li>
            <li><Link href="/gpa-calculators/gpa-projection-calculator" className="text-blue-600 hover:underline">GPA Projection Calculator</Link></li>
          </ul>

          <h2 id="faq">FAQ</h2>
          {faqItems.map((faq) => (
            <div key={faq.question} className="mb-4">
              <p className="font-semibold">{faq.question}</p>
              <p>{faq.answer}</p>
            </div>
          ))}

          <h2>Authority Resources</h2>
          <ul>
            <li><a href="https://www.collegeboard.org" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">College Board</a></li>
            <li><a href="https://nces.ed.gov" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">NCES</a></li>
            <li><a href="https://www.ed.gov" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">U.S. Department of Education</a></li>
          </ul>

          <h2 id="conclusion">Conclusion</h2>
          <p>Use this junior GPA calculator to calculate junior year GPA accurately, plan your course load, and stay in control of your academic trajectory as college applications approach.</p>
          <p>By tracking grades, credit hours, and weighted points, you can make informed adjustments and pursue a competitive GPA for scholarships and admissions.</p>
          <p className="text-xs text-slate-500 mt-6">Optimized for high performance and search ranking: minimal JS, semantic layout, mobile-first UI.</p>
        </article>
      </div>
    </div>
  );
}

