import Link from 'next/link';
import { Metadata } from 'next';
import Script from 'next/script';
import WeightedGPACalculator from '@/components/WeightedGPACalculator';

export const metadata: Metadata = {
  title: 'Weighted GPA Calculator – Free & Accurate GPA Tool',
  description: 'Use our Weighted GPA Calculator to calculate your GPA with Honors and AP classes. Enter courses, grades, and credit hours to get your weighted GPA instantly.',
};

export default function WeightedGPACalculatorPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://toptopgpacalculator.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "GPA Calculators",
        "item": "https://toptopgpacalculator.com/gpa-calculators"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Weighted GPA Calculator",
        "item": "https://toptopgpacalculator.com/weighted-gpa-calculator"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a weighted GPA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A weighted GPA is a grading system that gives extra points for challenging courses like Honors, AP, or IB classes. Regular classes use a 4.0 scale, while weighted courses can go above 4.0, rewarding students for taking advanced coursework."
        }
      },
      {
        "@type": "Question",
        "name": "How do you calculate weighted GPA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To calculate weighted GPA, multiply each course's grade points (plus weight bonus) by credit hours, sum them up, then divide by total credit hours. The formula is: Weighted GPA = Total Weighted Grade Points ÷ Total Credit Hours."
        }
      },
      {
        "@type": "Question",
        "name": "Is weighted GPA higher than 4.0?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, weighted GPA can exceed 4.0. Honors classes typically add 0.5 points (A = 4.5), while AP/IB classes add 1.0 point (A = 5.0). This allows students taking advanced courses to achieve GPAs above the standard 4.0 maximum."
        }
      },
      {
        "@type": "Question",
        "name": "Do AP classes increase GPA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, AP classes increase GPA by adding 1.0 extra point to each grade. For example, an A in an AP class is worth 5.0 instead of 4.0. This rewards students for taking college-level coursework in high school."
        }
      },
      {
        "@type": "Question",
        "name": "What is a good weighted GPA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A good weighted GPA depends on your goals. For college admissions, aim for 4.0 or higher. Top students often achieve 4.5+ by taking multiple AP courses. Remember, colleges consider the rigor of your coursework alongside your GPA."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Weighted GPA Calculator – Free & Accurate GPA Tool",
    "description": "Use our Weighted GPA Calculator to calculate your GPA with Honors and AP classes. Enter courses, grades, and credit hours to get your weighted GPA instantly.",
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
              <li className="text-gray-900 font-medium">Weighted GPA Calculator</li>
            </ol>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Table of Contents */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#weighted-gpa-calculator" className="text-blue-600 hover:text-blue-800">Weighted GPA Calculator</a></li>
              <li><a href="#what-is-weighted-gpa" className="text-blue-600 hover:text-blue-800">What is Weighted GPA</a></li>
              <li><a href="#how-to-calculate-weighted-gpa" className="text-blue-600 hover:text-blue-800">How to Calculate Weighted GPA</a></li>
              <li><a href="#weighted-vs-unweighted-gpa" className="text-blue-600 hover:text-blue-800">Weighted vs Unweighted GPA</a></li>
              <li><a href="#weighted-gpa-formula" className="text-blue-600 hover:text-blue-800">Weighted GPA Formula</a></li>
              <li><a href="#example-weighted-gpa" className="text-blue-600 hover:text-blue-800">Example of Weighted GPA Calculation</a></li>
              <li><a href="#tips-improve-weighted-gpa" className="text-blue-600 hover:text-blue-800">Tips to Improve Your Weighted GPA</a></li>
              <li><a href="#faq" className="text-blue-600 hover:text-blue-800">Frequently Asked Questions</a></li>
              <li><a href="#related-calculators" className="text-blue-600 hover:text-blue-800">Related GPA Calculators</a></li>
            </ul>
          </div>

          {/* Main Heading */}
          <h1 id="weighted-gpa-calculator" className="text-4xl font-bold text-gray-900 mb-6">
            Weighted GPA Calculator
          </h1>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Use our free <strong>weighted GPA calculator</strong> to accurately calculate your GPA with Honors and AP classes.
            Simply enter your courses, grades, credit hours, and course levels to get instant results.
            Our calculator uses the correct weighted GPA formula and supports unlimited courses.
          </p>

          {/* Calculator Component */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-12">
            <WeightedGPACalculator />
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* What is Weighted GPA */}
            <section>
              <h2 id="what-is-weighted-gpa" className="text-3xl font-bold text-gray-900 mb-6">
                What is Weighted GPA
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A weighted GPA is an academic grading system that rewards students for taking more challenging courses.
                Unlike traditional unweighted GPAs that max out at 4.0, weighted GPAs can exceed this limit,
                giving extra grade points for advanced coursework like Honors, Advanced Placement (AP), and International Baccalaureate (IB) classes.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The weighted GPA system was designed to encourage high school students to challenge themselves academically.
                By taking more rigorous courses, students can achieve GPAs higher than 4.0, which better reflects their academic abilities
                and preparation for college-level work. This system is particularly common in competitive high schools and
                is often required by colleges and universities when evaluating applications.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                In a weighted GPA system, regular courses maintain the standard 4.0 scale (A = 4.0, B = 3.0, etc.),
                while advanced courses receive bonus points. Honors classes typically add 0.5 points to each grade,
                and AP/IB classes add 1.0 point. This means an A in an AP class is worth 5.0 points instead of 4.0.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                <p className="text-blue-800 font-medium">
                  💡 <strong>Key Point:</strong> Weighted GPAs provide a more accurate representation of academic achievement
                  by accounting for course difficulty and rigor.
                </p>
              </div>
            </section>

            {/* How to Calculate Weighted GPA */}
            <section>
              <h2 id="how-to-calculate-weighted-gpa" className="text-3xl font-bold text-gray-900 mb-6">
                How to Calculate Weighted GPA
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Calculating a weighted GPA requires understanding how to apply the weighting system to your grades.
                The process involves converting letter grades to numerical values, adding appropriate weight bonuses,
                multiplying by credit hours, and then dividing by total credits.
              </p>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
                <li><strong>Determine the base grade points:</strong> Convert your letter grade to the standard 4.0 scale</li>
                <li><strong>Add the weight bonus:</strong> Add 0.5 for Honors classes or 1.0 for AP/IB classes</li>
                <li><strong>Multiply by credit hours:</strong> Calculate weighted grade points for each course</li>
                <li><strong>Sum all weighted grade points:</strong> Add up the totals from all courses</li>
                <li><strong>Divide by total credit hours:</strong> Get your final weighted GPA</li>
              </ol>
              <p className="text-gray-700 mb-4 leading-relaxed">
                For example, an A in a regular 3-credit course is worth 12 points (4.0 × 3).
                The same A in an AP 3-credit course is worth 15 points (5.0 × 3).
                This difference rewards students for taking more challenging coursework.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                It's important to note that not all schools use the same weighting system.
                Some schools may use different bonus values or have unique policies for certain courses.
                Always check with your school's guidance counselor to understand their specific weighted GPA calculation method.
              </p>
            </section>

            {/* Weighted vs Unweighted GPA */}
            <section>
              <h2 id="weighted-vs-unweighted-gpa" className="text-3xl font-bold text-gray-900 mb-6">
                Weighted vs Unweighted GPA
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Understanding the difference between weighted and unweighted GPA is crucial for students,
                parents, and college admissions officers. Both systems measure academic performance,
                but they approach grading from different perspectives.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Unweighted GPA</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Standard 4.0 scale maximum</li>
                    <li>• All courses treated equally</li>
                    <li>• A = 4.0, B = 3.0, C = 2.0, etc.</li>
                    <li>• Easier to compare across schools</li>
                    <li>• Doesn't reward course difficulty</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Weighted GPA</h3>
                  <ul className="space-y-2 text-blue-800">
                    <li>• Can exceed 4.0 (up to 5.0+)</li>
                    <li>• Rewards challenging coursework</li>
                    <li>• Honors/AP courses get bonus points</li>
                    <li>• More accurate academic measure</li>
                    <li>• Preferred by competitive colleges</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Unweighted GPAs provide a straightforward comparison of grades across different schools and curricula.
                However, they don't account for the fact that an A in an AP Calculus course represents a higher level
                of achievement than an A in a regular math course. Weighted GPAs address this limitation by giving
                extra credit for academic rigor.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                When colleges review applications, they often look at both weighted and unweighted GPAs.
                A high weighted GPA (4.5+) combined with a challenging course load demonstrates that a student
                is not only achieving excellent grades but also pushing themselves academically.
                This combination is particularly impressive to admissions officers.
              </p>
            </section>

            {/* Weighted GPA Formula */}
            <section>
              <h2 id="weighted-gpa-formula" className="text-3xl font-bold text-gray-900 mb-6">
                Weighted GPA Formula
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The weighted GPA formula is mathematically precise and accounts for both grade performance
                and course difficulty. Here's the complete formula:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Weighted GPA Formula</h3>
                  <div className="text-3xl font-mono bg-white rounded-lg p-4 border border-gray-300 mb-4">
                    Weighted GPA = Σ(Grade Points + Weight) × Credits ÷ Total Credits
                  </div>
                  <p className="text-gray-600">Where Σ represents the sum of all courses</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Let's break down each component of the formula:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li><strong>Grade Points:</strong> The numerical value of your letter grade (A = 4.0, B = 3.0, etc.)</li>
                <li><strong>Weight:</strong> Bonus points added for course difficulty (0.5 for Honors, 1.0 for AP/IB)</li>
                <li><strong>Credits:</strong> The number of credit hours for each course</li>
                <li><strong>Total Credits:</strong> Sum of credit hours from all courses</li>
              </ul>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The formula ensures that courses with more credits have a greater impact on your overall GPA,
                and that challenging courses receive appropriate recognition through the weighting system.
              </p>
            </section>

            {/* Example Calculation */}
            <section>
              <h2 id="example-weighted-gpa" className="text-3xl font-bold text-gray-900 mb-6">
                Example of Weighted GPA Calculation
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Let's walk through a complete weighted GPA calculation with three courses to illustrate how the formula works in practice.
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sample Courses</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left">Course</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Grade</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Level</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Credits</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Grade Points</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Weight</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Weighted Points</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Total Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">AP Calculus</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">A</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">AP</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">4</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">4.0</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">+1.0</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">5.0</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">20.0</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Honors English</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">B+</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Honors</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">3</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">3.3</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">+0.5</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">3.8</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">11.4</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Regular Biology</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">A-</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Regular</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">3</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">3.7</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">+0.0</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">3.7</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">11.1</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-300 px-4 py-2 font-bold" colSpan={7}>TOTALS</td>
                        <td className="border border-gray-300 px-4 py-2 text-center font-bold">42.5</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                <p className="text-green-800 font-medium">
                  🎯 <strong>Final Result:</strong> Weighted GPA = 42.5 total points ÷ 10 total credits = 4.25
                </p>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                This example demonstrates how the weighted GPA system rewards students for taking challenging courses.
                The AP Calculus course contributed significantly more to the GPA than the regular Biology course,
                even though both received A-range grades. This accurately reflects the higher level of academic achievement
                required for advanced coursework.
              </p>
            </section>

            {/* Tips to Improve Weighted GPA */}
            <section>
              <h2 id="tips-improve-weighted-gpa" className="text-3xl font-bold text-gray-900 mb-6">
                Tips to Improve Your Weighted GPA
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Improving your weighted GPA requires strategic planning and consistent effort.
                Here are proven strategies to boost your academic performance in weighted courses.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2">📚 Course Selection Strategy</h3>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Take AP/IB courses in subjects you're strong in</li>
                      <li>• Balance your course load to avoid burnout</li>
                      <li>• Consider course difficulty vs. your schedule</li>
                      <li>• Talk to counselors about course sequencing</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2">⏰ Time Management</h3>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Create a study schedule for each AP course</li>
                      <li>• Dedicate extra time for challenging subjects</li>
                      <li>• Use active recall and spaced repetition</li>
                      <li>• Join study groups for peer learning</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2">🎯 Performance Optimization</h3>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Focus on understanding concepts, not just grades</li>
                      <li>• Complete all assignments and participate in class</li>
                      <li>• Prepare thoroughly for exams and quizzes</li>
                      <li>• Seek help early when struggling</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2">🏆 Long-term Planning</h3>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Build up to AP courses gradually</li>
                      <li>• Maintain strong grades in regular courses too</li>
                      <li>• Consider summer preparation programs</li>
                      <li>• Track your GPA progress regularly</li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Remember that quality over quantity matters. It's better to excel in 3 AP courses than to struggle in 5.
                Colleges value genuine academic achievement and intellectual curiosity over a high GPA achieved through
                overwhelming course loads. Focus on subjects that interest you and align with your future goals.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Regular GPA tracking using our weighted GPA calculator can help you monitor your progress and make
                informed decisions about course selections. Use it to experiment with different grade scenarios and
                understand how various outcomes will impact your overall academic profile.
              </p>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 id="faq" className="text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What is a weighted GPA?</h3>
                  <p className="text-gray-700">
                    A weighted GPA is a grading system that gives extra points for challenging courses like Honors, AP, or IB classes.
                    Regular classes use a 4.0 scale, while weighted courses can go above 4.0, rewarding students for taking advanced coursework.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How do you calculate weighted GPA?</h3>
                  <p className="text-gray-700">
                    To calculate weighted GPA, multiply each course's grade points (plus weight bonus) by credit hours, sum them up,
                    then divide by total credit hours. The formula is: Weighted GPA = Total Weighted Grade Points ÷ Total Credit Hours.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Is weighted GPA higher than 4.0?</h3>
                  <p className="text-gray-700">
                    Yes, weighted GPA can exceed 4.0. Honors classes typically add 0.5 points (A = 4.5), while AP/IB classes add 1.0 point (A = 5.0).
                    This allows students taking advanced courses to achieve GPAs above the standard 4.0 maximum.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Do AP classes increase GPA?</h3>
                  <p className="text-gray-700">
                    Yes, AP classes increase GPA by adding 1.0 extra point to each grade. For example, an A in an AP class is worth 5.0 instead of 4.0.
                    This rewards students for taking college-level coursework in high school.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What is a good weighted GPA?</h3>
                  <p className="text-gray-700">
                    A good weighted GPA depends on your goals. For college admissions, aim for 4.0 or higher. Top students often achieve 4.5+ by taking multiple AP courses.
                    Remember, colleges consider the rigor of your coursework alongside your GPA.
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
                Explore our other GPA calculators designed to help students at every level track their academic progress.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/gpa-calculators/college-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">College GPA Calculator</h3>
                  <p className="text-gray-600 text-sm">Calculate your college GPA with our easy-to-use tool.</p>
                </Link>
                <Link href="/gpa-calculators/high-school-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">High School GPA Calculator</h3>
                  <p className="text-gray-600 text-sm">Perfect for high school students tracking their academic progress.</p>
                </Link>
                <Link href="/gpa-calculators/unweighted-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">Unweighted GPA Calculator</h3>
                  <p className="text-gray-600 text-sm">Calculate GPA using the standard 4.0 scale.</p>
                </Link>
                <Link href="/gpa-calculators/5-0-scale-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">5.0 Scale GPA Calculator</h3>
                  <p className="text-gray-600 text-sm">For schools using a 5.0 maximum scale.</p>
                </Link>
                <Link href="/gpa-calculators/cumulative-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">Cumulative GPA Calculator</h3>
                  <p className="text-gray-600 text-sm">Calculate your overall GPA across multiple semesters.</p>
                </Link>
                <Link href="/gpa-calculators/semester-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">Semester GPA Calculator</h3>
                  <p className="text-gray-600 text-sm">Focus on individual semester performance.</p>
                </Link>
              </div>
            </section>

            {/* External Links */}
            <section className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Resources</h3>
              <p className="text-gray-700 mb-4">
                Learn more about GPA calculations and college admissions from these trusted educational sources:
              </p>
              <ul className="space-y-2 text-blue-600">
                <li><a href="https://www.collegeboard.org" target="_blank" rel="noopener noreferrer" className="hover:underline">College Board - AP Program Information</a></li>
                <li><a href="https://nces.ed.gov" target="_blank" rel="noopener noreferrer" className="hover:underline">National Center for Education Statistics</a></li>
                <li><a href="https://www.ed.gov" target="_blank" rel="noopener noreferrer" className="hover:underline">U.S. Department of Education</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}




