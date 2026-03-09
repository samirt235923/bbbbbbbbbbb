import Link from 'next/link';
import { Metadata } from 'next';
import Script from 'next/script';
import LawSchoolGPACalculator from '@/components/LawSchoolGPACalculator';

export const metadata: Metadata = {
  title: 'Law School GPA Calculator – Calculate Your LSAC GPA',
  description: 'Use our Law School GPA Calculator to estimate your GPA for law school applications. Enter your courses, grades, and credits to calculate your LSAC-style GPA.',
};

export default function LawSchoolGPACalculatorPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://topgpacalculator.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "GPA Calculators",
        "item": "https://topgpacalculator.com/gpa-calculators"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Law School GPA Calculator",
        "item": "https://topgpacalculator.com/law-school-gpa-calculator"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What GPA do you need for law school?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most law schools require a minimum GPA of 3.0, but competitive schools typically require 3.4 or higher. For T14 (top 14) law schools, a GPA of 3.6+ is competitive. The average GPA for law school admission ranges from 3.2 for regional schools to 3.8+ for elite law schools."
        }
      },
      {
        "@type": "Question",
        "name": "How do you calculate LSAC GPA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LSAC GPA is calculated by multiplying each course's grade points by credit hours, summing all grade points, then dividing by total credit hours. LSAC uses a specific grade scale where A+ = 4.33, A = 4.0, A- = 3.67, B+ = 3.33, B = 3.0, etc."
        }
      },
      {
        "@type": "Question",
        "name": "Is a 3.7 GPA good for law school?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A 3.7 GPA is excellent for law school admission. It exceeds the median GPA for most law schools and makes you competitive for top-tier schools including many T14 programs, though LSAT score is equally important."
        }
      },
      {
        "@type": "Question",
        "name": "Do law schools recalculate GPA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, law schools recalculate GPA using LSAC standards. LSAC (Law School Admission Council) has specific rules for which grades to include, such as excluding certain pass/fail courses and study abroad grades. Schools will report your LSAC GPA on their materials."
        }
      },
      {
        "@type": "Question",
        "name": "Does LSAC include all college grades?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LSAC includes most undergraduate grades but has specific rules: grades from accredited four-year institutions count, pass/fail courses are excluded, graduate courses are excluded, and some transfer credits may be treated differently depending on the school's policies."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Law School GPA Calculator – Calculate Your LSAC GPA",
    "description": "Use our Law School GPA Calculator to estimate your GPA for law school applications. Enter your courses, grades, and credits to calculate your LSAC-style GPA.",
    "author": {
      "@type": "Organization",
      "name": "GPA Calculator"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GPA Calculator"
    },
    "datePublished": "2024-01-01",
    "dateModified": "2024-01-01"
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Breadcrumb Navigation */}
        <nav className="bg-white border-b border-gray-200 py-3">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li>
                <Link href="/gpa-calculators" className="hover:text-blue-600 transition-colors">
                  GPA Calculators
                </Link>
              </li>
              <li>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li className="text-gray-900 font-medium">Law School GPA Calculator</li>
            </ol>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Table of Contents */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#law-school-gpa-calculator" className="text-blue-600 hover:text-blue-800">Law School GPA Calculator</a></li>
              <li><a href="#what-is-law-school-gpa" className="text-blue-600 hover:text-blue-800">What is Law School GPA</a></li>
              <li><a href="#how-to-calculate-law-school-gpa" className="text-blue-600 hover:text-blue-800">How to Calculate Law School GPA</a></li>
              <li><a href="#lsac-gpa-scale" className="text-blue-600 hover:text-blue-800">LSAC GPA Scale Explained</a></li>
              <li><a href="#example-calculation" className="text-blue-600 hover:text-blue-800">Example of Law School GPA Calculation</a></li>
              <li><a href="#what-gpa-needed" className="text-blue-600 hover:text-blue-800">What GPA Do You Need for Law School</a></li>
              <li><a href="#tips-improve-gpa" className="text-blue-600 hover:text-blue-800">Tips to Improve Your GPA for Law School</a></li>
              <li><a href="#faq" className="text-blue-600 hover:text-blue-800">Frequently Asked Questions</a></li>
              <li><a href="#related-calculators" className="text-blue-600 hover:text-blue-800">Related GPA Calculators</a></li>
            </ul>
          </div>

          {/* Main Heading */}
          <h1 id="law-school-gpa-calculator" className="text-4xl font-bold text-gray-900 mb-6">
            Law School GPA Calculator
          </h1>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Use our free <strong>law school GPA calculator</strong> to estimate your LSAC GPA for law school applications.
            The LSAC (Law School Admission Council) recalculates your GPA using their own standards and grading scale.
            Our calculator uses the official LSAC grading scale so you can see exactly how law schools will evaluate your academic credentials.
          </p>

          {/* Calculator Component */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-12">
            <LawSchoolGPACalculator />
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* What is Law School GPA */}
            <section>
              <h2 id="what-is-law-school-gpa" className="text-3xl font-bold text-gray-900 mb-6">
                What is Law School GPA
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Law school GPA is your Grade Point Average as calculated using LSAC standards, which differ from your institution's GPA.
                When you apply to law school, LSAC recalculates your GPA using their own official grading scale and specific rules about which courses to include.
                This standardized approach ensures fair comparison of applicants from different universities with different grading systems.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The LSAC GPA is one of the two key metrics law schools use to evaluate applicants (the other being the LSAT score).
                Your LSAC GPA, combined with your LSAT score, forms the basis of your Academic Index (AI), which heavily influences admissions decisions.
                Top law schools consider both factors equally important when evaluating your candidacy.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                It's important to understand that your undergraduate institution's GPA and your LSAC GPA may be different.
                LSAC has specific rules about grade inclusions, such as excluding certain pass/fail courses, study abroad courses, and graduate-level courses from standard GPA calculation.
                This is why it's crucial to calculate your expected LSAC GPA early in the application process.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                <p className="text-blue-800 font-medium">
                  💡 <strong>Key Point:</strong> Your LSAC GPA is what law schools see on your application,
                  not your institution's GPA. Understanding this difference is crucial for accurate law school outcome predictions.
                </p>
              </div>
            </section>

            {/* How to Calculate Law School GPA */}
            <section>
              <h2 id="how-to-calculate-law-school-gpa" className="text-3xl font-bold text-gray-900 mb-6">
                How to Calculate Law School GPA
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Calculating your law school GPA involves converting letter grades to LSAC numerical values and applying the formula.
                The process is straightforward once you understand which courses LSAC includes and what grade scale to use.
              </p>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
                <li><strong>Convert grades to LSAC points:</strong> Use the official LSAC scale (A+ = 4.33, A = 4.0, etc.)</li>
                <li><strong>Identify eligible courses:</strong> Only include grades from accredited institutions that count toward your degree</li>
                <li><strong>Multiply grade points by credits:</strong> Calculate quality points for each course</li>
                <li><strong>Sum all eligible grades:</strong> Add up total grade points and total credits</li>
                <li><strong>Divide for final GPA:</strong> Total grade points ÷ total credit hours = your LSAC GPA</li>
              </ol>
              <p className="text-gray-700 mb-4 leading-relaxed">
                LSAC excludes certain courses from GPA calculations, including: pass/fail coursework, courses from study abroad programs,
                graduate-level courses, and transfer credits (depending on the policy of the school granting your degree).
                Understanding these rules helps you calculate the most accurate predicted LSAC GPA.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                For the most accurate LSAC GPA estimate, use only courses from your primary undergraduate institution and apply the official LSAC grading scale.
                Our law school GPA calculator automatically applies these standards for you.
              </p>
            </section>

            {/* LSAC GPA Scale */}
            <section>
              <h2 id="lsac-gpa-scale" className="text-3xl font-bold text-gray-900 mb-6">
                LSAC GPA Scale Explained
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The LSAC GPA scale is slightly different from your university's GPA scale. Notably, LSAC includes an A+ grade worth 4.33 points,
                which is unusual because many universities don't assign A+ grades or count them differently.
                Understanding this scale is essential for predicting your law school application competitiveness.
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Official LSAC Grade Scale</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Letter Grades</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between"><span>A+</span><span className="font-bold">4.33</span></div>
                      <div className="flex justify-between"><span>A</span><span className="font-bold">4.00</span></div>
                      <div className="flex justify-between"><span>A-</span><span className="font-bold">3.67</span></div>
                      <div className="flex justify-between"><span>B+</span><span className="font-bold">3.33</span></div>
                      <div className="flex justify-between"><span>B</span><span className="font-bold">3.00</span></div>
                      <div className="flex justify-between"><span>B-</span><span className="font-bold">2.67</span></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">More Grades</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between"><span>C+</span><span className="font-bold">2.33</span></div>
                      <div className="flex justify-between"><span>C</span><span className="font-bold">2.00</span></div>
                      <div className="flex justify-between"><span>C-</span><span className="font-bold">1.67</span></div>
                      <div className="flex justify-between"><span>D</span><span className="font-bold">1.00</span></div>
                      <div className="flex justify-between"><span>F</span><span className="font-bold">0.00</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The LSAC scale gives universities the flexibility to define their own grade scales as long as they convert them to the LSAC scale.
                This ensures that GPA comparisons are fair across different institutions with different grading systems.
                If your university uses a different grading scale (like +/- modifiers or different point values), LSAC will adjust during recalculation.
              </p>
            </section>

            {/* Example Calculation */}
            <section>
              <h2 id="example-calculation" className="text-3xl font-bold text-gray-900 mb-6">
                Example of Law School GPA Calculation
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Let's walk through a complete law school GPA calculation with typical pre-law courses.
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sample Pre-Law Courses</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left">Course</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Grade</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Grade Points</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Credits</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Quality Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Political Science</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">A</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">4.00</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">3</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">12.00</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Economics</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">B+</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">3.33</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">3</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">9.99</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">History</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">A-</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">3.67</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">4</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">14.68</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-300 px-4 py-2 font-bold" colSpan={4}>TOTALS</td>
                        <td className="border border-gray-300 px-4 py-2 text-center font-bold">36.67</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <p className="text-blue-800 font-medium">
                  🎯 <strong>Final Result:</strong> LSAC GPA = 36.67 ÷ 10 credits = 3.67
                </p>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                This example shows a strong pre-law academic record. A 3.67 LSAC GPA puts the applicant in a competitive position for many law schools.
                Combined with a strong LSAT score, this GPA would be particularly competitive for top-ranked regional and some national law schools.
              </p>
            </section>

            {/* What GPA Do You Need */}
            <section>
              <h2 id="what-gpa-needed" className="text-3xl font-bold text-gray-900 mb-6">
                What GPA Do You Need for Law School
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                GPA requirements for law school vary significantly based on the school's rank and selectivity.
                Most law schools report median LSAC GPAs for their admitted students, giving prospective students a clear picture of competitiveness.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">By School Tier</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">T14 Elite</span>
                      <span className="text-purple-600 font-bold">3.7-4.0</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Top 25</span>
                      <span className="text-blue-600 font-bold">3.5-3.8</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Top 50</span>
                      <span className="text-teal-600 font-bold">3.2-3.6</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Top 100</span>
                      <span className="text-green-600 font-bold">3.0-3.4</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Regional</span>
                      <span className="text-yellow-600 font-bold">2.8-3.2</span>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-purple-900 mb-4">Minimum Requirements</h3>
                  <div className="space-y-3">
                    <p className="text-purple-800">
                      <strong>General Minimum:</strong> 3.0 GPA
                    </p>
                    <p className="text-purple-800">
                      <strong>Competitive (Most Schools):</strong> 3.3-3.5
                    </p>
                    <p className="text-purple-800">
                      <strong>Highly Competitive:</strong> 3.6+
                    </p>
                    <p className="text-purple-800">
                      <strong>Elite Programs:</strong> 3.8+
                    </p>
                    <p className="text-sm text-purple-700 mt-4">
                      Note: These are estimates. Check specific school profiles for exact medians.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                It's important to remember that GPA and LSAT score are equally weighted in law school admissions decisions.
                Law schools want both high-GPA and high-LSAT students, but they also consider each metric independently.
                A lower GPA can be offset by an exceptional LSAT score, and vice versa, though both matter significantly.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Beyond the T14 (top 14 law schools), rankings become less standardized. Regional law schools have different GPA expectations,
                often lower than national schools. However, attending a school with strong connections to your target job market can be valuable
                regardless of national ranking.
              </p>
            </section>

            {/* Tips to Improve GPA */}
            <section>
              <h2 id="tips-improve-gpa" className="text-3xl font-bold text-gray-900 mb-6">
                Tips to Improve Your GPA for Law School
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                If your current GPA is below your target law schools' medians, there are strategic ways to improve your profile.
                Here are actionable tips specifically for pre-law students and law school applicants.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2">📚 Academic Strategies</h3>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Take upper-level courses in your stronger subjects</li>
                      <li>• Enroll in graduate-level courses (LSAC won't count them)</li>
                      <li>• Retake courses to improve grades (check LSAC policy)</li>
                      <li>• Focus on semesters with lighter course loads</li>
                      <li>• Work with academic advisors for course selection</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2">⏰ Time Management</h3>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Allocate extra study time for challenging courses</li>
                      <li>• Form study groups with high-performing students</li>
                      <li>• Attend office hours and seek extra help</li>
                      <li>• Use tutoring services when needed</li>
                      <li>• Balance work, activities, and academics</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2">🎯 Strategic Planning</h3>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Create a realistic law school goal list</li>
                      <li>• Consider taking a gap year to retake courses</li>
                      <li>• Research schools with varied GPA medians</li>
                      <li>• Strengthen other application components</li>
                      <li>• Build relationships for strong recommendations</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2">📖 Long-term Development</h3>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Gain relevant legal experience and internships</li>
                      <li>• Develop strong professional recommendations</li>
                      <li>• Write a compelling personal statement</li>
                      <li>• Prepare thoroughly for LSAT prep</li>
                      <li>• Consider your target practice areas</li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Remember: if you're currently a student, focus on maintaining strong grades going forward. LSAC includes all courses you take,
                so every semester matters. If you've already graduated, you have limited ability to change your GPA unless your school allows
                post-baccalaureate coursework that LSAC can include.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                If your GPA is significantly below target schools, honestly evaluate your options: consider schools that are better fits for your profile,
                explore a gap year to improve your LSAT score, or investigate whether post-baccalaureate coursework is possible at an accredited institution.
                The strongest applications typically present balanced profiles where both GPA and LSAT are competitive for the schools you're targeting.
              </p>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 id="faq" className="text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What GPA do you need for law school?</h3>
                  <p className="text-gray-700">
                    Most law schools require a minimum GPA of 3.0, but competitive schools typically require 3.4 or higher.
                    For T14 (top 14) law schools, a GPA of 3.6+ is competitive. The average GPA for law school admission ranges from 3.2 for regional schools to 3.8+ for elite law schools.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How do you calculate LSAC GPA?</h3>
                  <p className="text-gray-700">
                    LSAC GPA is calculated by multiplying each course's grade points by credit hours, summing all grade points, then dividing by total credit hours.
                    LSAC uses a specific grade scale where A+ = 4.33, A = 4.0, A- = 3.67, B+ = 3.33, B = 3.0, etc.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Is a 3.7 GPA good for law school?</h3>
                  <p className="text-gray-700">
                    A 3.7 GPA is excellent for law school admission. It exceeds the median GPA for most law schools and makes you competitive for top-tier schools including many T14 programs,
                    though LSAT score is equally important.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Do law schools recalculate GPA?</h3>
                  <p className="text-gray-700">
                    Yes, law schools recalculate GPA using LSAC standards. LSAC (Law School Admission Council) has specific rules for which grades to include,
                    such as excluding certain pass/fail courses and study abroad grades. Schools will report your LSAC GPA on their materials.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Does LSAC include all college grades?</h3>
                  <p className="text-gray-700">
                    LSAC includes most undergraduate grades but has specific rules: grades from accredited four-year institutions count, pass/fail courses are excluded,
                    graduate courses are excluded, and some transfer credits may be treated differently depending on the school's policies.
                  </p>
                </div>
              </div>
            </section>

            {/* Related Calculators */}
            <section>
              <h2 id="related-calculators" className="text-3xl font-bold text-gray-900 mb-6">
                Related GPA Calculators
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Explore our other GPA calculators designed to help students at every level track their academic progress and prepare for specialized degree programs.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/gpa-calculators/college-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">College GPA Calculator</h3>
                  <p className="text-gray-600 text-sm">Calculate your college GPA with our easy-to-use tool.</p>
                </Link>
                <Link href="/gpa-calculators/weighted-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">Weighted GPA Calculator</h3>
                  <p className="text-gray-600 text-sm">Calculate GPA with Honors and AP course weighting.</p>
                </Link>
                <Link href="/gpa-calculators/cumulative-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">Cumulative GPA Calculator</h3>
                  <p className="text-gray-600 text-sm">Calculate your overall GPA across multiple semesters.</p>
                </Link>
                <Link href="/gpa-calculators/semester-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">Semester GPA Calculator</h3>
                  <p className="text-gray-600 text-sm">Focus on individual semester performance.</p>
                </Link>
                <Link href="/gpa-calculators/high-school-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">High School GPA Calculator</h3>
                  <p className="text-gray-600 text-sm">Perfect for high school students tracking their academic progress.</p>
                </Link>
                <Link href="/gpa-calculators/5-0-scale-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">5.0 Scale GPA Calculator</h3>
                  <p className="text-gray-600 text-sm">For schools using a 5.0 maximum scale.</p>
                </Link>
              </div>
            </section>

            {/* External Links */}
            <section className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Resources</h3>
              <p className="text-gray-700 mb-4">
                Learn more about law school admissions and LSAC GPA calculations from these trusted sources:
              </p>
              <ul className="space-y-2 text-blue-600">
                <li><a href="https://www.lsac.org" target="_blank" rel="noopener noreferrer" className="hover:underline">LSAC (Law School Admission Council)</a></li>
                <li><a href="https://www.americanbar.org" target="_blank" rel="noopener noreferrer" className="hover:underline">American Bar Association</a></li>
                <li><a href="https://www.collegeboard.org" target="_blank" rel="noopener noreferrer" className="hover:underline">College Board - Law School Information</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}





