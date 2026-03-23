import { Metadata } from 'next';
import Link from 'next/link';
import AcademicGPACalculator from '@/components/AcademicGPACalculator';
import { FAQSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Academic GPA Calculator – Calculate Semester & Cumulative GPA | Top GPACalculator',
  description: 'Free academic GPA calculator for high school and college students. Calculate semester GPA, cumulative GPA with weighted courses. Track academic progress and plan for success.',
  keywords: 'academic gpa calculator, semester gpa calculator, cumulative gpa calculator, weighted gpa calculator, college gpa calculator, high school gpa calculator, grade point average calculator',
  openGraph: {
    title: 'Academic GPA Calculator – Calculate Semester & Cumulative GPA',
    description: 'Free academic GPA calculator for high school and college students. Calculate semester GPA, cumulative GPA with weighted courses. Track academic progress and plan for success.',
    type: 'website',
    url: 'https://topgpacalculator.com/gpa-calculators/academic-gpa-calculator',
    images: [{ 
      url: 'https://topgpacalculator.com/og-images/academic-gpa-calculator.png', 
      width: 1200, 
      height: 630,
      alt: 'Academic GPA Calculator Dashboard'
    }],
    siteName: 'Top GPA Calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Academic GPA Calculator – Calculate Semester & Cumulative GPA',
    description: 'Free academic GPA calculator for high school and college students. Calculate semester GPA, cumulative GPA with weighted courses.',
    images: ['https://topgpacalculator.com/og-images/academic-gpa-calculator.png'],
    creator: '@topgpacalculator',
  },
  alternates: {
    canonical: 'https://topgpacalculator.com/gpa-calculators/academic-gpa-calculator',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification-code',
  },
  category: 'education',
};

const faqItems = [
  { 
    question: 'How do I calculate my academic GPA?', 
    answer: 'To calculate your academic GPA: 1) List all courses with credit hours, 2) Convert letter grades to grade points (A=4.0, B=3.0, etc.), 3) Multiply grade points by credit hours for each course, 4) Sum all grade points and credit hours, 5) Divide total grade points by total credit hours. Our calculator does this automatically for current and cumulative GPA calculations.'
  },
  { 
    question: 'What is the difference between semester GPA and cumulative GPA?', 
    answer: 'Semester GPA only includes courses from a single term, measuring short-term academic performance. Cumulative GPA includes all courses taken throughout your academic career, providing a complete picture of your overall performance. Colleges and employers typically look at cumulative GPA first.'
  },
  { 
    question: 'What is considered a good academic GPA?', 
    answer: 'A "good" GPA varies by context: High School: 3.0+ for college admission, 3.5+ for competitive universities. College: 3.0+ for good standing, 3.5+ for honors/dean\'s list, 3.7+ for graduate school consideration. Graduate School: 3.5+ typically required for doctoral programs. Professional Schools: Medical/Law schools often look for 3.7+.'
  },
  { 
    question: 'How does weighted GPA work for honors and AP courses?', 
    answer: 'Weighted GPA adds bonus points for advanced courses to recognize increased difficulty. Typical bonuses: Honors/Pre-AP: +0.5 points, AP/IB: +1.0 points, Dual Enrollment: +0.5 points. For example, a B (3.0) in an AP course becomes 4.0 weighted. This encourages students to take challenging courses without GPA penalty.'
  },
  { 
    question: 'Can I improve my academic GPA after a bad semester?', 
    answer: 'Yes, you can improve your GPA: 1) Focus on higher-credit courses where good grades have more impact, 2) Retake courses if your school allows grade replacement, 3) Take additional courses and perform well to average out low grades, 4) Use summer sessions to add quality grades, 5) Seek academic support early. Our calculator helps you simulate improvement scenarios.'
  },
  {
    question: 'How do credit hours affect my GPA calculation?',
    answer: 'Credit hours act as weights in GPA calculation. A 4-credit course affects your GPA four times more than a 1-credit course. For example: An A (4.0) in a 4-credit course adds 16 grade points, while the same grade in a 1-credit course adds only 4 points. This is why focusing on major courses with higher credits is crucial.'
  },
  {
    question: 'What grading scales do most colleges use?',
    answer: 'Most U.S. colleges use a 4.0 scale: A (4.0), A- (3.7), B+ (3.3), B (3.0), B- (2.7), C+ (2.3), C (2.0), C- (1.7), D+ (1.3), D (1.0), D- (0.7), F (0.0). Some institutions use plus/minus variations, and graduate programs may use different scales. Always verify with your school\'s specific grading policy.'
  }
];

const quickStats = [
  { label: 'Grade Scale', value: '4.0 / 5.0', icon: '📊' },
  { label: 'Course Levels', value: '5 Types', icon: '📚' },
  { label: 'Grade Options', value: '13 Grades', icon: '✅' },
  { label: 'Calculation Modes', value: 'Semester & Cumulative', icon: '🔄' },
];

const relatedCalculators = [
  { href: "/gpa-calculators/high-school-gpa-calculator", name: "High School GPA", icon: "🏫", description: "For 9-12 grade students" },
  { href: "/gpa-calculators/college-gpa-calculator", name: "College GPA", icon: "🎓", description: "University level calculations" },
  { href: "/gpa-calculators/cumulative-gpa-calculator", name: "Cumulative GPA", icon: "📈", description: "Multi-term average" },
  { href: "/gpa-calculators/semester-gpa-calculator", name: "Semester GPA", icon: "📅", description: "Single term focus" },
  { href: "/gpa-calculators/weighted-gpa-calculator", name: "Weighted GPA", icon: "⚖️", description: "With course difficulty bonus" },
  { href: "/gpa-calculators/gpa-improvement-calculator", name: "GPA Improvement", icon: "🚀", description: "Plan your path forward" },
  { href: "/gpa-calculators/target-gpa-calculator", name: "Target GPA", icon: "🎯", description: "Set and achieve goals" },
  { href: "/gpa-calculators/middle-school-gpa-calculator", name: "Middle School GPA", icon: "📖", description: "Grades 6-8" },
];

export default function AcademicGPACalculatorPage() {
  const baseUrl = 'https://topgpacalculator.com/gpa-calculators/academic-gpa-calculator';

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen text-slate-900">
      {/* Structured Data */}
      <FAQSchema faqs={faqItems} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-sm mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-gray-600">
            <li>
              <Link href="/" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1">
                <span>🏠</span> Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-400">›</li>
            <li>
              <Link href="/gpa-calculators" className="text-blue-600 hover:text-blue-800 hover:underline">
                GPA Calculators
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-400">›</li>
            <li className="text-gray-900 font-semibold" aria-current="page">
              Academic GPA Calculator
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl p-8 mb-8 shadow-xl">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Academic GPA Calculator
            </h1>
            <p className="text-xl md:text-2xl mb-6 opacity-90">
              Track Your Academic Performance • Calculate Semester & Cumulative GPA
            </p>
            <p className="text-lg mb-8 text-white/90">
              The most comprehensive <strong className="text-white font-bold">academic GPA calculator</strong> for high school and college students. 
              Support for weighted courses, multiple grading systems, and real-time cumulative GPA tracking.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#calculator" 
                className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg hover:shadow-xl"
              >
                Try Calculator →
              </a>
              <a 
                href="#how-to-calculate" 
                className="px-6 py-3 bg-indigo-500 text-white rounded-lg font-semibold hover:bg-indigo-400 transition border border-indigo-400"
              >
                Learn How It Works
              </a>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/20">
            {quickStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
                <div className="text-lg font-bold">{stat.value}</div>
              </div>
            ))}
          </div>
        </header>

        {/* Table of Contents */}
        <section className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 mb-8" id="table-of-contents">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-3xl">📋</span> Quick Navigation
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: "#calculator", label: "Calculator", icon: "🧮" },
              { href: "#what-is", label: "What Is Academic GPA", icon: "📚" },
              { href: "#how-to-calculate", label: "How to Calculate", icon: "📝" },
              { href: "#formula", label: "Formula", icon: "➕" },
              { href: "#semester-vs-cumulative", label: "Semester vs Cumulative", icon: "🔄" },
              { href: "#importance", label: "Importance", icon: "⭐" },
              { href: "#faq", label: "FAQ", icon: "❓" },
              { href: "#related", label: "Related Tools", icon: "🔗" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition border border-gray-100"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Main Calculator Section */}
        <section id="calculator" className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <span className="text-3xl">🧮</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Interactive Academic GPA Calculator</h2>
              <p className="text-gray-600">Calculate semester and cumulative GPA with weighted course support</p>
            </div>
          </div>
          <AcademicGPACalculator />
          
          {/* Calculator Tips */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold flex items-center gap-2 mb-2">
              <span>💡</span> Pro Tips:
            </h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Add your previous GPA and credits for accurate cumulative calculation</li>
              <li>Use "Add Semester" to track multiple terms</li>
              <li>Toggle weighted GPA for Honors/AP course bonuses</li>
              <li>Experiment with "what-if" scenarios to plan improvements</li>
            </ul>
          </div>
        </section>

        {/* Main Content Article */}
        <article className="prose prose-slate max-w-none">
          {/* What Is Academic GPA */}
          <section id="what-is" className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-3xl">📚</span> What Is Academic GPA?
            </h2>
            <p className="text-lg leading-relaxed">
              Academic GPA (Grade Point Average) is a standardized measure of your academic performance, 
              calculated by averaging the grade points earned across all your courses, weighted by credit hours. 
              It serves as a universal metric that colleges, universities, and employers use to evaluate student achievement.
            </p>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Key Components:</h3>
                <ul className="list-disc list-inside">
                  <li>Course grades (converted to points)</li>
                  <li>Credit hours (course weight)</li>
                  <li>Course level (Regular/Honors/AP)</li>
                  <li>Time period (semester/cumulative)</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Common Uses:</h3>
                <ul className="list-disc list-inside">
                  <li>College admissions decisions</li>
                  <li>Scholarship eligibility</li>
                  <li>Academic standing determination</li>
                  <li>Graduate school applications</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How to Calculate */}
          <section id="how-to-calculate" className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-3xl">📝</span> How to Calculate Academic GPA
            </h2>
            <div className="space-y-4">
              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                <h3 className="font-semibold text-lg mb-3">Step-by-Step Process:</h3>
                <ol className="list-decimal list-inside space-y-3">
                  <li className="pl-2">
                    <span className="font-semibold">List All Courses:</span> Include every course with its credit hours and final letter grade.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold">Convert Grades to Points:</span> Use the standard 4.0 scale (A=4.0, B=3.0, C=2.0, D=1.0, F=0.0).
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold">Calculate Grade Points:</span> Multiply grade value by credit hours for each course.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold">Sum Everything:</span> Add all grade points and all credit hours separately.
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold">Divide:</span> Total grade points ÷ total credit hours = Your GPA.
                  </li>
                </ol>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <h3 className="font-semibold text-lg mb-3">Example Calculation:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-mono text-sm">Mathematics (4 credits, A = 4.0)</p>
                    <p className="font-mono text-sm">→ 4.0 × 4 = 16.0 points</p>
                    <p className="font-mono text-sm">English (3 credits, B+ = 3.3)</p>
                    <p className="font-mono text-sm">→ 3.3 × 3 = 9.9 points</p>
                  </div>
                  <div>
                    <p className="font-mono text-sm">Total Points: 16.0 + 9.9 = 25.9</p>
                    <p className="font-mono text-sm">Total Credits: 4 + 3 = 7</p>
                    <p className="font-mono text-sm font-bold">GPA = 25.9 ÷ 7 = 3.70</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Formula Section */}
          <section id="formula" className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-3xl">➕</span> Academic GPA Formula Explained
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-3">Basic Formula:</h3>
                <div className="bg-white p-3 rounded border font-mono mb-2">
                  GPA = (Grade Points) ÷ (Total Credits)
                </div>
                <div className="bg-white p-3 rounded border font-mono">
                  Grade Points = Grade Value × Credit Hours
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-3">Cumulative Formula:</h3>
                <div className="bg-white p-3 rounded border font-mono text-sm">
                  Cumulative GPA = (Previous GPA × Previous Credits + Current Grade Points) ÷ Total Credits
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg md:col-span-2">
                <h3 className="font-semibold mb-3">Weighted Formula:</h3>
                <div className="bg-white p-3 rounded border font-mono">
                  Weighted Points = (Grade Value + Course Bonus) × Credit Hours
                </div>
                <p className="text-sm mt-2">Course Bonuses: Honors (+0.5), AP/IB (+1.0), Dual Credit (+0.5)</p>
              </div>
            </div>
          </section>

          {/* Semester vs Cumulative */}
          <section id="semester-vs-cumulative" className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-3xl">🔄</span> Semester GPA vs Cumulative GPA
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-lg mb-3 text-blue-800">📅 Semester GPA</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Includes only courses from one term</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Measures short-term academic performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Used for dean's list, term honors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Shows improvement or decline patterns</span>
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="font-semibold text-lg mb-3 text-green-800">📊 Cumulative GPA</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Includes all courses taken</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Overall academic track record</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Primary metric for college admissions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Required for graduation eligibility</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Importance Section */}
          <section id="importance" className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-3xl">⭐</span> Why Academic GPA Matters
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  icon: "🎓",
                  title: "College Admissions",
                  description: "GPA is typically the #1 factor in admissions decisions"
                },
                {
                  icon: "💰",
                  title: "Scholarships",
                  description: "Many merit-based scholarships require 3.5+ GPA"
                },
                {
                  icon: "🏆",
                  title: "Academic Honors",
                  description: "Dean's list, cum laude, and honors programs"
                },
                {
                  icon: "💼",
                  title: "Career Opportunities",
                  description: "Internships and early career positions often request GPA"
                }
              ].map((item) => (
                <div key={item.title} className="p-4 bg-gray-50 rounded-lg text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-3xl">❓</span> Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqItems.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                  <p className="font-semibold text-lg mb-2 flex items-start gap-2">
                    <span className="text-blue-600">Q{index + 1}:</span>
                    {faq.question}
                  </p>
                  <p className="text-gray-700 pl-8">
                    <span className="text-green-600 font-semibold mr-2">A:</span>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Calculators */}
          <section id="related" className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-3xl">🔗</span> Related GPA Calculators
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedCalculators.map((calc) => (
                <Link
                  key={calc.href}
                  href={calc.href}
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition border border-gray-200 hover:border-blue-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{calc.icon}</span>
                    <span className="font-semibold">{calc.name}</span>
                  </div>
                  <p className="text-sm text-gray-600">{calc.description}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* External Resources */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-3xl">📎</span> Official Educational Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a 
                href="https://www.collegeboard.org" 
                target="_blank" 
                rel="noreferrer"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition border text-center"
              >
                <div className="text-3xl mb-2">📘</div>
                <div className="font-semibold mb-1">College Board</div>
                <div className="text-sm text-gray-600">SAT, AP, College Planning</div>
              </a>
              <a 
                href="https://nces.ed.gov" 
                target="_blank" 
                rel="noreferrer"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition border text-center"
              >
                <div className="text-3xl mb-2">📊</div>
                <div className="font-semibold mb-1">NCES</div>
                <div className="text-sm text-gray-600">Education Statistics</div>
              </a>
              <a 
                href="https://www.ed.gov" 
                target="_blank" 
                rel="noreferrer"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition border text-center"
              >
                <div className="text-3xl mb-2">🏛️</div>
                <div className="font-semibold mb-1">U.S. Dept of Education</div>
                <div className="text-sm text-gray-600">Federal Education Resources</div>
              </a>
            </div>
          </section>
        </article>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 border-t pt-8 mt-8">
          <p className="mb-2">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
          <p>
            This calculator is for informational purposes. Always verify with your school's specific grading policy.
          </p>
          <p className="mt-4">
            © {new Date().getFullYear()} Top GPA Calculator. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
