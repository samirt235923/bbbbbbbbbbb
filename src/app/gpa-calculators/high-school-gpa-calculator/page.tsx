import { Metadata } from 'next';
import HighSchoolGPACalculator from '@/components/HighSchoolGPACalculator';

export const metadata: Metadata = {
  title: 'High School GPA Calculator (Free & Accurate) – Calculate Your GPA',
  description: 'Use our free High School GPA Calculator to calculate your GPA instantly. Enter your classes, grades, and credits to get your accurate high school GPA.',
  keywords: 'high school gpa calculator, calculate high school gpa, how to calculate high school gpa, weighted gpa calculator high school, unweighted gpa calculator',
  openGraph: {
    title: 'High School GPA Calculator (Free & Accurate) – Calculate Your GPA',
    description: 'Use our free High School GPA Calculator to calculate your GPA instantly. Enter your classes, grades, and credits to get your accurate high school GPA.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'High School GPA Calculator (Free & Accurate) – Calculate Your GPA',
    description: 'Use our free High School GPA Calculator to calculate your GPA instantly. Enter your classes, grades, and credits to get your accurate high school GPA.',
  },
};

export default function HighSchoolGPACalculatorPage() {
  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Breadcrumb Navigation */}
      <nav className="bg-white border-b border-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center space-x-2 text-sm text-secondary-600">
            <li><a href="/" className="hover:text-primary-600">Home</a></li>
            <li>/</li>
            <li><a href="/gpa-calculators" className="hover:text-primary-600">GPA Calculators</a></li>
            <li>/</li>
            <li className="text-secondary-900 font-medium">High School GPA Calculator</li>
          </ol>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Table of Contents */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-soft">
          <h2 className="text-lg font-bold text-secondary-900 mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#calculator" className="text-primary-600 hover:text-primary-700">High School GPA Calculator</a></li>
            <li><a href="#what-is-gpa" className="text-primary-600 hover:text-primary-700">What is a High School GPA</a></li>
            <li><a href="#how-to-calculate" className="text-primary-600 hover:text-primary-700">How to Calculate High School GPA</a></li>
            <li><a href="#gpa-formula" className="text-primary-600 hover:text-primary-700">GPA Formula Explained</a></li>
            <li><a href="#weighted-vs-unweighted" className="text-primary-600 hover:text-primary-700">Weighted vs Unweighted GPA</a></li>
            <li><a href="#gpa-scale" className="text-primary-600 hover:text-primary-700">High School GPA Scale</a></li>
            <li><a href="#improve-gpa" className="text-primary-600 hover:text-primary-700">Tips to Improve Your High School GPA</a></li>
            <li><a href="#faq" className="text-primary-600 hover:text-primary-700">Frequently Asked Questions</a></li>
            <li><a href="#related-calculators" className="text-primary-600 hover:text-primary-700">Related GPA Calculators</a></li>
          </ul>
        </div>

        {/* Main Content */}
        <article className="prose prose-lg max-w-none">
          {/* H1 */}
          <h1 id="calculator" className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
            High School GPA Calculator
          </h1>

          {/* Introduction */}
          <p className="text-lg text-secondary-700 mb-8 leading-relaxed">
            Use our free <strong>high school GPA calculator</strong> to calculate your GPA instantly and accurately.
            Whether you're a freshman, sophomore, junior, or senior, this tool helps you track your academic progress
            and understand how to calculate high school GPA. Simply enter your classes, grades, and credit hours to get
            your unweighted or weighted GPA in seconds.
          </p>

          {/* Calculator Component */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-large border border-secondary-200">
            <HighSchoolGPACalculator />
          </div>

          {/* Example Calculation */}
          <div className="bg-primary-50 rounded-xl p-6 mb-8 border border-primary-200">
            <h3 className="text-xl font-bold text-secondary-900 mb-4">Example Calculation</h3>
            <p className="text-secondary-700 mb-4">
              Let's say you have these courses:
            </p>
            <ul className="list-disc list-inside text-secondary-700 mb-4 space-y-1">
              <li>Math: A (4.0) × 3 credits = 12 grade points</li>
              <li>English: B (3.0) × 3 credits = 9 grade points</li>
              <li>Science: A (4.0) × 4 credits = 16 grade points</li>
            </ul>
            <p className="text-secondary-700 mb-4">
              <strong>Total Grade Points:</strong> 12 + 9 + 16 = 37<br />
              <strong>Total Credits:</strong> 3 + 3 + 4 = 10<br />
              <strong>GPA:</strong> 37 ÷ 10 = 3.7
            </p>
          </div>

          {/* SEO Content Sections */}
          <section>
            <h2 id="what-is-gpa" className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-4">
              What is a High School GPA
            </h2>
            <p className="text-secondary-700 mb-4 leading-relaxed">
              A high school GPA, or Grade Point Average, is a numerical representation of your academic performance
              during your four years of high school. It's calculated on a scale from 0.0 to 4.0 (or higher for weighted GPAs)
              and serves as a standardized way for colleges and universities to compare students from different schools.
            </p>
            <p className="text-secondary-700 mb-4 leading-relaxed">
              Your GPA reflects the grades you've earned in all your courses, weighted by the credit hours of each class.
              It's one of the most important factors colleges consider during the admissions process, alongside standardized
              test scores, extracurricular activities, and personal essays. A high school GPA calculator helps you understand
              how your grades translate into this crucial metric.
            </p>
            <p className="text-secondary-700 mb-4 leading-relaxed">
              Understanding your high school GPA is crucial because it can open doors to scholarships, college admissions,
              and future opportunities. A strong GPA demonstrates your commitment to academic excellence and your ability
              to handle challenging coursework. Whether you're aiming for Ivy League schools or community college, knowing
              how to calculate high school GPA accurately is essential for academic planning.
            </p>
            <p className="text-secondary-700 mb-6 leading-relaxed">
              Different schools may calculate GPA differently, so it's important to understand your school's specific
              system. Some use weighted GPAs that give extra points for honors and AP courses, while others stick to
              the standard unweighted scale. Our high school GPA calculator accommodates both systems to ensure accuracy.
            </p>
          </section>

          <section>
            <h2 id="how-to-calculate" className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-4">
              How to Calculate High School GPA
            </h2>
            <p className="text-secondary-700 mb-4 leading-relaxed">
              Calculating your high school GPA is straightforward once you understand the process. Here's a step-by-step
              guide on how to calculate high school GPA:
            </p>
            <ol className="list-decimal list-inside text-secondary-700 mb-6 space-y-2">
              <li><strong>List all your courses:</strong> Make a list of every class you've taken, including the grade earned and credit hours.</li>
              <li><strong>Convert grades to grade points:</strong> Use the standard GPA scale (A=4.0, B=3.0, etc.) to convert letter grades to numbers.</li>
              <li><strong>Calculate grade points for each course:</strong> Multiply the grade points by the credit hours for each class.</li>
              <li><strong>Sum the total grade points:</strong> Add up all the grade points from step 3.</li>
              <li><strong>Sum the total credit hours:</strong> Add up all the credit hours from your courses.</li>
              <li><strong>Divide total grade points by total credits:</strong> This gives you your GPA.</li>
            </ol>
            <p className="text-secondary-700 mb-4 leading-relaxed">
              Our high school GPA calculator automates this process for you, but understanding the calculation helps
              you make informed decisions about your academic goals. For example, if you're considering whether to take
              an extra credit course or drop a class, knowing how it affects your GPA can guide your choices.
            </p>
            <p className="text-secondary-700 mb-4 leading-relaxed">
              Remember that different schools may have different policies. Some schools include all courses in GPA calculation,
              while others might exclude certain classes like physical education or electives. Always check with your
              school's guidance office to understand their specific GPA calculation method.
            </p>
            <p className="text-secondary-700 mb-6 leading-relaxed">
              Using a high school GPA calculator regularly throughout the year can help you track your progress and
              identify areas where you might need to improve. It's also useful for predicting your final GPA based on
              current grades and upcoming courses.
            </p>
          </section>

          <section>
            <h2 id="gpa-formula" className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-4">
              GPA Formula Explained
            </h2>
            <div className="bg-secondary-50 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-secondary-900 mb-3">The GPA Formula</h3>
              <p className="text-secondary-700 mb-4 font-mono text-center text-lg">
                GPA = Total Grade Points ÷ Total Credit Hours
              </p>
              <p className="text-secondary-700 mb-4">
                Where: Grade Points = Grade Value × Credit Hours
              </p>
            </div>
            <p className="text-secondary-700 mb-4 leading-relaxed">
              The GPA formula is simple but powerful. Each course contributes to your overall GPA based on both the
              grade you earned and the credit hours the course is worth. Higher-level courses (like AP or Honors)
              typically carry more weight in your GPA calculation.
            </p>
            <p className="text-secondary-700 mb-4 leading-relaxed">
              For example, an A in a 3-credit course contributes 12 grade points (4.0 × 3), while an A in a 4-credit
              course contributes 16 grade points (4.0 × 4). This ensures that more challenging courses have a greater
              impact on your GPA. Our high school GPA calculator handles these calculations automatically, saving you
              time and reducing errors.
            </p>
            <p className="text-secondary-700 mb-4 leading-relaxed">
              Understanding the GPA formula helps you make strategic decisions about your course load. If you're
              considering taking an AP class that might result in a B+ instead of an A in a regular class, you can
              calculate whether the weighted points will benefit your overall GPA.
            </p>
            <p className="text-secondary-700 mb-6 leading-relaxed">
              The formula ensures fairness by weighting courses appropriately. A student who takes challenging courses
              and earns good grades is rewarded, while the system prevents grade inflation from easy courses.
            </p>
          </section>

          <section>
            <h2 id="weighted-vs-unweighted" className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-4">
              Weighted vs Unweighted GPA
            </h2>
            <p className="text-secondary-700 mb-4 leading-relaxed">
              There are two main types of GPA calculations: weighted and unweighted. Understanding the difference
              between weighted and unweighted GPA is important when comparing GPAs from different schools.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl p-6 border border-secondary-200">
                <h3 className="text-lg font-bold text-secondary-900 mb-3">Unweighted GPA</h3>
                <p className="text-secondary-700 mb-3">
                  Standard 4.0 scale where all courses are treated equally:
                </p>
                <ul className="text-secondary-700 space-y-1">
                  <li>A = 4.0</li>
                  <li>B = 3.0</li>
                  <li>C = 2.0</li>
                  <li>D = 1.0</li>
                  <li>F = 0.0</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-secondary-200">
                <h3 className="text-lg font-bold text-secondary-900 mb-3">Weighted GPA</h3>
                <p className="text-secondary-700 mb-3">
                  Honors/AP courses add extra points:
                </p>
                <ul className="text-secondary-700 space-y-1">
                  <li>Honors A = 5.0</li>
                  <li>AP A = 5.0</li>
                  <li>Regular A = 4.0</li>
                  <li>Regular B = 3.0</li>
                </ul>
              </div>
            </div>
            <p className="text-secondary-700 mb-4 leading-relaxed">
              Weighted GPAs allow students to earn higher than a 4.0 by taking challenging courses. This system
              rewards academic rigor and helps colleges distinguish between students who take easy courses and
              those who challenge themselves with advanced coursework.
            </p>
            <p className="text-secondary-700 mb-4 leading-relaxed">
              For example, if you earn an A in an AP Calculus course (4 credits), it would contribute 20 grade points
              to your weighted GPA (5.0 × 4), compared to 16 points for a regular A (4.0 × 4). This extra weight
              reflects the increased difficulty of advanced placement courses.
            </p>
            <p className="text-secondary-700 mb-4 leading-relaxed">
              When colleges review applications, they often look at both weighted and unweighted GPAs to get a complete
              picture of a student's academic performance. A high weighted GPA shows that a student has challenged
              themselves academically, while the unweighted GPA provides a standardized comparison.
            </p>
            <p className="text-secondary-700 mb-6 leading-relaxed">
              Our high school GPA calculator supports both weighted and unweighted calculations, allowing you to
              toggle between the two systems based on your school's requirements.
            </p>
          </section>

          <section>
            <h2 id="gpa-scale" className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-4">
              High School GPA Scale
            </h2>
            <p className="text-secondary-700 mb-4 leading-relaxed">
              The standard high school GPA scale uses a 4.0 system with plus and minus grades. Here's the complete
              breakdown:
            </p>
            <div className="bg-white rounded-xl p-6 mb-6 border border-secondary-200 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-secondary-200">
                    <th className="text-left py-2 px-4 font-bold text-secondary-900">Letter Grade</th>
                    <th className="text-left py-2 px-4 font-bold text-secondary-900">Grade Points</th>
                    <th className="text-left py-2 px-4 font-bold text-secondary-900">Percentage Range</th>
                    <th className="text-left py-2 px-4 font-bold text-secondary-900">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-secondary-100">
                    <td className="py-2 px-4 font-semibold">A</td>
                    <td className="py-2 px-4">4.0</td>
                    <td className="py-2 px-4">93-100%</td>
                    <td className="py-2 px-4">Excellent</td>
                  </tr>
                  <tr className="border-b border-secondary-100">
                    <td className="py-2 px-4 font-semibold">A-</td>
                    <td className="py-2 px-4">3.7</td>
                    <td className="py-2 px-4">90-92%</td>
                    <td className="py-2 px-4">Excellent</td>
                  </tr>
                  <tr className="border-b border-secondary-100">
                    <td className="py-2 px-4 font-semibold">B+</td>
                    <td className="py-2 px-4">3.3</td>
                    <td className="py-2 px-4">87-89%</td>
                    <td className="py-2 px-4">Good</td>
                  </tr>
                  <tr className="border-b border-secondary-100">
                    <td className="py-2 px-4 font-semibold">B</td>
                    <td className="py-2 px-4">3.0</td>
                    <td className="py-2 px-4">83-86%</td>
                    <td className="py-2 px-4">Good</td>
                  </tr>
                  <tr className="border-b border-secondary-100">
                    <td className="py-2 px-4 font-semibold">B-</td>
                    <td className="py-2 px-4">2.7</td>
                    <td className="py-2 px-4">80-82%</td>
                    <td className="py-2 px-4">Good</td>
                  </tr>
                  <tr className="border-b border-secondary-100">
                    <td className="py-2 px-4 font-semibold">C+</td>
                    <td className="py-2 px-4">2.3</td>
                    <td className="py-2 px-4">77-79%</td>
                    <td className="py-2 px-4">Satisfactory</td>
                  </tr>
                  <tr className="border-b border-secondary-100">
                    <td className="py-2 px-4 font-semibold">C</td>
                    <td className="py-2 px-4">2.0</td>
                    <td className="py-2 px-4">73-76%</td>
                    <td className="py-2 px-4">Satisfactory</td>
                  </tr>
                  <tr className="border-b border-secondary-100">
                    <td className="py-2 px-4 font-semibold">C-</td>
                    <td className="py-2 px-4">1.7</td>
                    <td className="py-2 px-4">70-72%</td>
                    <td className="py-2 px-4">Satisfactory</td>
                  </tr>
                  <tr className="border-b border-secondary-100">
                    <td className="py-2 px-4 font-semibold">D</td>
                    <td className="py-2 px-4">1.0</td>
                    <td className="py-2 px-4">60-69%</td>
                    <td className="py-2 px-4">Passing</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-semibold">F</td>
                    <td className="py-2 px-4">0.0</td>
                    <td className="py-2 px-4">0-59%</td>
                    <td className="py-2 px-4">Failing</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-secondary-700 mb-4 leading-relaxed">
              This scale is used by most high schools in the United States. Some schools may use different scales,
              so it's important to check with your school's guidance counselor if you're unsure about their specific
              grading system.
            </p>
            <p className="text-secondary-700 mb-4 leading-relaxed">
              The plus/minus system provides more granularity in GPA calculations. For instance, an A- (3.7) is
              slightly less valuable than an A (4.0), which accurately reflects the small difference in academic
              performance. This system helps colleges make more precise distinctions between applicants.
            </p>
            <p className="text-secondary-700 mb-6 leading-relaxed">
              When using our high school GPA calculator, make sure to select the correct grade from the dropdown
              menu to ensure accurate calculations. The calculator automatically converts these letter grades to
              the appropriate numerical values.
            </p>
          </section>

          <section>
            <h2 id="improve-gpa" className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-4">
              Tips to Improve Your High School GPA
            </h2>
            <p className="text-secondary-700 mb-4 leading-relaxed">
              Improving your high school GPA takes time and consistent effort. Here are practical tips to help
              you boost your academic performance:
            </p>
            <ul className="list-disc list-inside text-secondary-700 mb-6 space-y-2">
              <li><strong>Stay organized:</strong> Use a planner to track assignments, tests, and deadlines.</li>
              <li><strong>Attend all classes:</strong> Regular attendance is crucial for understanding material and earning participation points.</li>
              <li><strong>Take good notes:</strong> Develop a note-taking system that works for you during lectures.</li>
              <li><strong>Study regularly:</strong> Don't cram; review material consistently throughout the semester.</li>
              <li><strong>Seek help when needed:</strong> Talk to teachers, tutors, or classmates when you're struggling.</li>
              <li><strong>Take challenging courses:</strong> Honors and AP classes can boost your weighted GPA.</li>
              <li><strong>Balance your workload:</strong> Don't overload yourself; quality over quantity matters.</li>
              <li><strong>Get enough sleep:</strong> Adequate rest improves focus and academic performance.</li>
              <li><strong>Join study groups:</strong> Collaborate with peers to deepen understanding of complex topics.</li>
              <li><strong>Use academic resources:</strong> Take advantage of tutoring centers, online resources, and office hours.</li>
              <li><strong>Set realistic goals:</strong> Break down large assignments into manageable tasks.</li>
              <li><strong>Review past mistakes:</strong> Learn from test corrections and quizzes to avoid repeating errors.</li>
            </ul>
            <p className="text-secondary-700 mb-4 leading-relaxed">
              Remember, improving your GPA is a marathon, not a sprint. Small, consistent improvements over time
              will yield the best results. Use our high school GPA calculator regularly to track your progress.
            </p>
            <p className="text-secondary-700 mb-4 leading-relaxed">
              If you're struggling with a particular subject, don't hesitate to ask for help early. Many schools
              offer free tutoring services, and addressing issues promptly can prevent small problems from becoming
              major setbacks.
            </p>
            <p className="text-secondary-700 mb-6 leading-relaxed">
              Finally, maintain a positive attitude toward learning. When you enjoy what you're studying, academic
              success becomes more achievable. Find ways to connect classroom material to real-world applications
              to make learning more engaging and meaningful.
            </p>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-secondary-200">
                <h3 className="text-lg font-bold text-secondary-900 mb-3">What is a good GPA in high school?</h3>
                <p className="text-secondary-700 leading-relaxed">
                  A good high school GPA depends on your goals. For college admissions, a GPA of 3.0 or higher is generally
                  considered good, while top colleges often look for GPAs of 3.5 or higher. A GPA of 4.0 or above (weighted)
                  is excellent and demonstrates outstanding academic achievement.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-secondary-200">
                <h3 className="text-lg font-bold text-secondary-900 mb-3">How do I calculate my high school GPA?</h3>
                <p className="text-secondary-700 leading-relaxed">
                  To calculate your high school GPA, multiply each course's grade points by its credit hours, sum these
                  values, then divide by the total credit hours. Our free high school GPA calculator does this automatically
                  for you. Simply enter your courses, grades, and credits to get instant results.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-secondary-200">
                <h3 className="text-lg font-bold text-secondary-900 mb-3">Is a 3.8 GPA good in high school?</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Yes, a 3.8 GPA is excellent in high school. It places you in the top 10-15% of your class and makes
                  you a strong candidate for most colleges and universities. Many selective schools consider a 3.8 GPA
                  competitive for admission.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-secondary-200">
                <h3 className="text-lg font-bold text-secondary-900 mb-3">What GPA is needed for college admission?</h3>
                <p className="text-secondary-700 leading-relaxed">
                  GPA requirements vary by college. Community colleges typically accept students with a 2.0 GPA or higher,
                  while four-year universities often require a 2.5-3.0 GPA. Selective colleges like Ivy League schools
                  typically look for GPAs of 3.5 or higher. Always check specific requirements for your target schools.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-secondary-200">
                <h3 className="text-lg font-bold text-secondary-900 mb-3">What is the difference between weighted and unweighted GPA?</h3>
                <p className="text-secondary-700 leading-relaxed">
                  An unweighted GPA uses a standard 4.0 scale where all courses are treated equally. A weighted GPA
                  adds extra points for honors and AP courses (typically +1 point), allowing students to earn above
                  a 4.0. Weighted GPAs reward academic rigor and help colleges distinguish between regular and advanced coursework.
                </p>
              </div>
            </div>
          </section>

          {/* Related Calculators */}
          <section id="related-calculators" className="mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-6">
              Related GPA Calculators
            </h2>
            <p className="text-secondary-700 mb-6 leading-relaxed">
              Explore our other GPA calculators designed for different academic needs:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="/gpa-calculators/college-gpa-calculator" className="card-interactive group">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                    College GPA Calculator
                  </h3>
                  <p className="text-secondary-600 text-sm leading-relaxed">
                    Calculate your college GPA with our comprehensive calculator for undergraduate students.
                  </p>
                </div>
              </a>
              <a href="/gpa-calculators/weighted-gpa-calculator" className="card-interactive group">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                    Weighted GPA Calculator
                  </h3>
                  <p className="text-secondary-600 text-sm leading-relaxed">
                    Calculate weighted GPAs for honors and AP courses with extra grade points.
                  </p>
                </div>
              </a>
              <a href="/gpa-calculators/unweighted-gpa-calculator" className="card-interactive group">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                    Unweighted GPA Calculator
                  </h3>
                  <p className="text-secondary-600 text-sm leading-relaxed">
                    Calculate unweighted GPAs using the standard 4.0 scale for all courses.
                  </p>
                </div>
              </a>
              <a href="/gpa-calculators/cumulative-gpa-calculator" className="card-interactive group">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                    Cumulative GPA Calculator
                  </h3>
                  <p className="text-secondary-600 text-sm leading-relaxed">
                    Calculate your overall cumulative GPA across multiple semesters or years.
                  </p>
                </div>
              </a>
              <a href="/gpa-calculators/semester-gpa-calculator" className="card-interactive group">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                    Semester GPA Calculator
                  </h3>
                  <p className="text-secondary-600 text-sm leading-relaxed">
                    Calculate your GPA for a specific semester or grading period.
                  </p>
                </div>
              </a>
            </div>
          </section>

          {/* External Links */}
          <div className="bg-secondary-50 rounded-xl p-6 mb-8 border border-secondary-200">
            <h3 className="text-lg font-bold text-secondary-900 mb-3">Learn More About GPA</h3>
            <p className="text-secondary-700 mb-4">
              For more information about GPA calculations and college admissions, visit these trusted educational resources:
            </p>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.collegeboard.org" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">College Board - Official SAT and GPA Information</a></li>
              <li><a href="https://nces.ed.gov" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">National Center for Education Statistics</a></li>
              <li><a href="https://www.ed.gov" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">U.S. Department of Education</a></li>
            </ul>
          </div>
        </article>
      </div>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "High School GPA Calculator",
              "description": "Free high school GPA calculator to calculate your GPA instantly with accurate formulas.",
              "url": "https://toptopgpacalculator.com/gpa-calculators/high-school-gpa-calculator",
              "applicationCategory": "EducationalApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is a good GPA in high school?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A good high school GPA depends on your goals. For college admissions, a GPA of 3.0 or higher is generally considered good, while top colleges often look for GPAs of 3.5 or higher."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I calculate my high school GPA?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To calculate your high school GPA, multiply each course's grade points by its credit hours, sum these values, then divide by the total credit hours."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is a 3.8 GPA good in high school?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, a 3.8 GPA is excellent in high school. It places you in the top 10-15% of your class and makes you a strong candidate for most colleges."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What GPA is needed for college admission?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "GPA requirements vary by college. Community colleges typically accept students with a 2.0 GPA or higher, while four-year universities often require a 2.5-3.0 GPA."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the difference between weighted and unweighted GPA?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "An unweighted GPA uses a standard 4.0 scale where all courses are treated equally. A weighted GPA adds extra points for honors and AP courses."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "High School GPA Calculator (Free & Accurate) – Calculate Your GPA",
              "description": "Use our free High School GPA Calculator to calculate your GPA instantly. Enter your classes, grades, and credits to get your accurate high school GPA.",
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
            }
          ])
        }}
      />
    </div>
  );
}




