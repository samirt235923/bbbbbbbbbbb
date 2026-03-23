import { Metadata } from 'next';
import Link from 'next/link';
import UniversityGPACalculator from '@/components/UniversityGPACalculator';
import { FAQSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'University GPA Calculator – Calculate College GPA Easily',
  description: 'Use our University GPA Calculator to calculate your semester and cumulative GPA. Enter grades and credit hours for instant results.',
  keywords: 'university gpa calculator, college gpa calculator, calculate university gpa, semester gpa university, cumulative gpa university',
  openGraph: {
    title: 'University GPA Calculator – Calculate College GPA Easily',
    description: 'Use our University GPA Calculator to calculate your semester and cumulative GPA. Enter grades and credit hours for instant results.',
    type: 'website',
    url: 'https://topgpacalculator.com/gpa-calculators/university-gpa-calculator',
    images: [{ url: 'https://topgpacalculator.com/logo.svg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'University GPA Calculator – Calculate College GPA Easily',
    description: 'Use our University GPA Calculator to calculate your semester and cumulative GPA. Enter grades and credit hours for instant results.',
  },
  alternates: {
    canonical: 'https://topgpacalculator.com/gpa-calculators/university-gpa-calculator',
  },
};

const faqItems = [
  { question: 'How do I calculate university GPA?', answer: 'Use this calculator by listing course grades and credit hours. It computes total grade points and divides by total credits for semester GPA, then combines previous totals for cumulative GPA.' },
  { question: 'What is a good GPA in university?', answer: 'A GPA above 3.5 is strong for most universities; 3.7+ is excellent. Your target depends on major and scholarship goals.' },
  { question: 'What is cumulative GPA?', answer: 'Cumulative GPA combines all past graded work with current semester points: (Previous GPA × Previous Credits + Current Grade Points) ÷ Total Credits.' },
  { question: 'Does GPA affect graduation?', answer: 'Yes, most universities require minimum GPA for graduation (typically 2.0 or higher), and higher GPAs impact graduation honors and program relevance.' },
  { question: 'Can I improve my university GPA?', answer: 'Yes: retake classes, raise grades each semester, focus on high-credit classes, and use weighted courses where available. Track progress in the calculator.' },
];

export default function UniversityGPACalculatorPage() {

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      
      <FAQSchema faqs={faqItems} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav aria-label="Breadcrumb" className="text-sm mb-4">
          <ol className="flex flex-wrap gap-2 text-gray-600">
            <li><Link href="/" className="text-blue-600 hover:underline">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/gpa-calculators" className="text-blue-600 hover:underline">GPA Calculators</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-900 font-semibold">University GPA Calculator</li>
          </ol>
        </nav>

        <header className="bg-white p-6 rounded-2xl shadow-sm mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">University GPA Calculator</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            This <strong>university gpa calculator</strong> is tailored for college/university students. Add course names, credit hours, grades, and semester info to calculate semester and cumulative GPA instantly.
          </p>
        </header>

        <section className="bg-white p-6 rounded-2xl shadow-sm mb-8">
          <h2 className="text-2xl font-semibold mb-4">Calculator</h2>
          <UniversityGPACalculator />
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-sm mb-8" id="table-of-contents">
          <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
          <ul className="list-decimal list-inside space-y-2 text-gray-700">
            <li><a href="#what-is" className="text-blue-600 hover:underline">What Is a University GPA</a></li>
            <li><a href="#how-to-calculate" className="text-blue-600 hover:underline">How to Calculate University GPA</a></li>
            <li><a href="#semester-vs-cumulative" className="text-blue-600 hover:underline">Semester vs Cumulative GPA</a></li>
            <li><a href="#formula" className="text-blue-600 hover:underline">University GPA Formula Explained</a></li>
            <li><a href="#why-gpa-matters" className="text-blue-600 hover:underline">Why GPA Matters in University</a></li>
            <li><a href="#related" className="text-blue-600 hover:underline">Related GPA Calculators</a></li>
            <li><a href="#faq" className="text-blue-600 hover:underline">FAQ</a></li>
          </ul>
        </section>

        <article className="bg-white p-6 rounded-2xl shadow-sm prose prose-slate max-w-none">
          <h2 id="what-is">What Is a University GPA</h2>
          <p>
            University GPA is the standard metric that reflects academic performance in college. It is used by academic advisors, employers, graduate programs, and scholarship committees to assess consistency and progress over time. University students track both semester and cumulative GPA for class standing and graduation classification.
          </p>
          <p>
            In a university setting, this metric accounts for course difficulty, credits, and grade values. This page is built for modern students with features like multi-semester support, course-type weights, and cumulative projection so you can plan with confidence.
          </p>

          <h2 id="how-to-calculate">How to Calculate University GPA</h2>
          <ol>
            <li>Enter course names for your semester to keep records organized.</li>
            <li>Set credit hours as provided by your university (typically 1–5). University GPA uses credit-weighting heavily, so this is vital.</li>
            <li>Select letter grade from A–F based on your final result.</li>
            <li>Optionally choose course type as Regular, Honors, or Advanced for weighted points.</li>
            <li>Use the semester picker for multi-semester tracking in the same calculator data set.
            </li>
            <li>Fill previous cumulative credits and GPA to see updated cumulative results automatically.
            </li>
            <li>Use “Add Course” and “Remove” for unlimited rows.
            </li>
            <li>Reset button clears everything for a fresh start.
            </li>
          </ol>

          <h2 id="semester-vs-cumulative">Semester vs Cumulative GPA</h2>
          <p>
            Semester GPA measures performance for a single term (Fall/Spring/Summer), while cumulative GPA averages your entire academic record to date.
          </p>
          <p>
            A strong semester GPA can recover a lower cumulative score over time, and vice versa. Tracking both is essential for monitoring academic goals and meeting university requirements for honors or progression.
          </p>

          <h2 id="formula">University GPA Formula Explained</h2>
          <p>
            The two core formulas used by this calculator are:
          </p>
          <ul>
            <li><strong>Semester GPA</strong>: Total Grade Points ÷ Total Credit Hours</li>
            <li><strong>Cumulative GPA</strong>: (Previous GPA × Previous Credits + Current Grade Points) ÷ Total Credits</li>
          </ul>
          <p>
            Grade points for each course are computed as <strong>Grade Value × Credit Hours</strong>. If course type is Honors or Advanced, an optional weight is added (+0.5 for Honors, +1.0 for Advanced), up to a max of 5.0 per course.
          </p>

          <h2 id="example">Example Calculation</h2>
          <p>
            University example (semester):
          </p>
          <ul>
            <li>Math → A (4.0 × 3) = 12</li>
            <li>Business → B+ (3.3 × 4) = 13.2</li>
            <li>Economics → B (3.0 × 3) = 9</li>
          </ul>
          <p>
            Total Grade Points = 34.2<br />
            Total Credits = 10<br />
            Semester GPA = 34.2 ÷ 10 = 3.42
          </p>
          <p>
            For Cumulative GPA with previous metrics:
            If previous GPA is 3.20 over 30 credits, then cumulative = (3.20×30 + 34.2) ÷ (30 + 10) = 3.29.
          </p>

          <h2 id="why-gpa-matters">Why GPA Matters in University</h2>
          <ul>
            <li><strong>Graduation classification:</strong> Many systems use GPA breaks for First Class, Second Upper, etc.</li>
            <li><strong>Scholarships:</strong> Minimum GPA thresholds often 3.5+, and 4.0 for strict cohorts.</li>
            <li><strong>Internships:</strong> Competitive placements look for strong GPAs to evaluate readiness.</li>
            <li><strong>Job opportunities:</strong> Employers may screen on university GPA, especially internships and entry-level roles.</li>
          </ul>

          <h2 id="related">Related GPA Calculators</h2>
          <ul>
            <li><Link href="/gpa-calculators/college-gpa-calculator" className="text-blue-600 hover:underline">College GPA Calculator</Link></li>
            <li><Link href="/gpa-calculators/cumulative-gpa-calculator" className="text-blue-600 hover:underline">Cumulative GPA Calculator</Link></li>
            <li><Link href="/gpa-calculators/semester-gpa-calculator" className="text-blue-600 hover:underline">Semester GPA Calculator</Link></li>
            <li><Link href="/gpa-calculators/gpa-projection-calculator" className="text-blue-600 hover:underline">GPA Projection Calculator</Link></li>
            <li><Link href="/gpa-calculators/gpa-improvement-calculator" className="text-blue-600 hover:underline">GPA Improvement Calculator</Link></li>
          </ul>

          <h2 id="faq">FAQ</h2>
          {faqItems.map((faq) => (
            <div key={faq.question} className="mb-4">
              <p className="font-semibold">{faq.question}</p>
              <p>{faq.answer}</p>
            </div>
          ))}

          <h2>External Authority Resources</h2>
          <ul>
            <li><a href="https://www.collegeboard.org" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">College Board</a></li>
            <li><a href="https://nces.ed.gov" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">NCES</a></li>
            <li><a href="https://www.ed.gov" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">U.S. Department of Education</a></li>
          </ul>

          <p className="text-xs text-slate-500 mt-6">Optimized for fast load and top university GPA search queries with clean structure, schema, and mobile support.</p>
        </article>
      </div>
    </div>
  );
}

