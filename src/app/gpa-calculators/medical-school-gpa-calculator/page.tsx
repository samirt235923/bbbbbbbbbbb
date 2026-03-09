import Link from 'next/link';
import { Metadata } from 'next';
import Script from 'next/script';
import MedicalSchoolGPACalculator from '@/components/MedicalSchoolGPACalculator';

export const metadata: Metadata = {
  title: 'Medical School GPA Calculator – Calculate Your Pre-Med GPA',
  description: 'Use our Medical School GPA Calculator to calculate your overall GPA and science GPA for medical school applications. Enter courses, grades, and credits to get your GPA instantly.',
};

export default function MedicalSchoolGPACalculatorPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://yourwebsite.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "GPA Calculators",
        "item": "https://yourwebsite.com/gpa-calculators"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Medical School GPA Calculator",
        "item": "https://yourwebsite.com/gpa-calculators/medical-school-gpa-calculator"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What GPA do you need for medical school?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most medical schools require a minimum GPA of 3.0, but competitive schools typically require 3.5 or higher for overall GPA and 3.4+ for science GPA. Top-tier medical schools like Harvard, Johns Hopkins, and Stanford typically require 3.7+ overall and 3.6+ science GPA."
        }
      },
      {
        "@type": "Question",
        "name": "How do you calculate pre med GPA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pre-med GPA is calculated by multiplying each course's grade points by credit hours, summing all grade points, then dividing by total credit hours. Use the standard 4.0 scale where A=4.0, A-=3.7, B+=3.3, etc. AMCAS (American Medical College Application Service) recalculates GPA using their own standards."
        }
      },
      {
        "@type": "Question",
        "name": "What is a good GPA for medical school?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A good GPA for medical school depends on the school tier. For top schools, aim for 3.7+ overall and 3.6+ science GPA. For mid-tier schools, 3.5+ overall and 3.4+ science GPA is competitive. Below-average GPAs can still be competitive with strong MCAT scores and other application components."
        }
      },
      {
        "@type": "Question",
        "name": "Do medical schools look at science GPA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, medical schools heavily weigh science GPA (BCPM GPA). BCPM includes Biology, Chemistry, Physics, and Math courses. Many schools have separate GPA cutoffs for science courses. A strong science GPA is crucial because medical school curricula are science-heavy."
        }
      },
      {
        "@type": "Question",
        "name": "Is a 3.7 GPA good for medical school?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A 3.7 GPA is excellent for medical school admission. It places you in the top quartile of applicants and makes you competitive for most medical schools, including many top programs. Combined with a strong MCAT score, a 3.7 GPA significantly boosts your chances."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Medical School GPA Calculator – Calculate Your Pre-Med GPA",
    "description": "Use our Medical School GPA Calculator to calculate your overall GPA and science GPA for medical school applications. Enter courses, grades, and credits to get your GPA instantly.",
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

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
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
              <li className="text-gray-900 font-medium">Medical School GPA Calculator</li>
            </ol>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Table of Contents */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#medical-school-gpa-calculator" className="text-blue-600 hover:text-blue-800">Medical School GPA Calculator</a></li>
              <li><a href="#what-is-medical-school-gpa" className="text-blue-600 hover:text-blue-800">What is a Medical School GPA</a></li>
              <li><a href="#how-to-calculate-pre-med-gpa" className="text-blue-600 hover:text-blue-800">How to Calculate Pre-Med GPA</a></li>
              <li><a href="#science-gpa-vs-overall-gpa" className="text-blue-600 hover:text-blue-800">Science GPA vs Overall GPA</a></li>
              <li><a href="#medical-school-gpa-requirements" className="text-blue-600 hover:text-blue-800">Medical School GPA Requirements</a></li>
              <li><a href="#example-medical-school-gpa" className="text-blue-600 hover:text-blue-800">Example of Medical School GPA Calculation</a></li>
              <li><a href="#tips-improve-pre-med-gpa" className="text-blue-600 hover:text-blue-800">Tips to Improve Your Pre-Med GPA</a></li>
              <li><a href="#faq" className="text-blue-600 hover:text-blue-800">Frequently Asked Questions</a></li>
              <li><a href="#related-calculators" className="text-blue-600 hover:text-blue-800">Related GPA Calculators</a></li>
            </ul>
          </div>

          {/* Main Heading */}
          <h1 id="medical-school-gpa-calculator" className="text-4xl font-bold text-gray-900 mb-6">
            Medical School GPA Calculator
          </h1>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Use our free <strong>medical school GPA calculator</strong> to calculate your overall GPA and science GPA for medical school applications.
            Our calculator uses the standard 4.0 grading scale and automatically separates science courses (Biology, Chemistry, Physics, Math) to calculate your BCPM GPA.
            This is essential for pre-med students preparing for AMCAS applications and medical school admissions.
          </p>

          {/* Calculator Component */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-12">
            <MedicalSchoolGPACalculator />
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* What is a Medical School GPA */}
            <section>
              <h2 id="what-is-medical-school-gpa" className="text-3xl font-bold text-gray-900 mb-6">
                What is a Medical School GPA
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A medical school GPA is your Grade Point Average as calculated specifically for medical school admissions.
                Unlike your undergraduate institution's GPA, medical schools use standardized calculations through AMCAS (American Medical College Application Service).
                Your GPA is one of the most important factors in medical school admissions, often carrying equal weight with your MCAT score.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Medical schools evaluate two types of GPA: your overall GPA (all undergraduate courses) and your science GPA (BCPM - Biology, Chemistry, Physics, and Math).
                The science GPA is particularly important because medical school curricula are heavily science-based.
                Admissions committees want to ensure applicants can handle rigorous science coursework.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Your GPA doesn't just reflect academic ability - it also demonstrates work ethic, time management, and resilience.
                Medical schools know that pre-med coursework is challenging, so they look for students who can maintain strong academic performance
                while balancing extracurricular activities, research, clinical experience, and leadership roles.
              </p>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
                <p className="text-green-800 font-medium">
                  💡 <strong>Key Point:</strong> Medical schools recalculate your GPA using AMCAS standards,
                  which may differ from your institution's calculation. Always use our medical school GPA calculator to get an accurate estimate.
                </p>
              </div>
            </section>

            {/* How to Calculate Pre-Med GPA */}
            <section>
              <h2 id="how-to-calculate-pre-med-gpa" className="text-3xl font-bold text-gray-900 mb-6">
                How to Calculate Pre-Med GPA
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Calculating your pre-med GPA involves converting letter grades to numerical values and applying the GPA formula.
                The process is straightforward but requires careful attention to which courses are included and how grades are converted.
              </p>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
                <li><strong>Convert grades to points:</strong> Use the standard 4.0 scale (A=4.0, A-=3.7, B+=3.3, etc.)</li>
                <li><strong>Calculate grade points per course:</strong> Multiply grade value by credit hours</li>
                <li><strong>Sum all grade points:</strong> Add up grade points from all eligible courses</li>
                <li><strong>Sum all credit hours:</strong> Add up credit hours from all eligible courses</li>
                <li><strong>Divide for GPA:</strong> Total grade points ÷ total credit hours = your GPA</li>
              </ol>
              <p className="text-gray-700 mb-4 leading-relaxed">
                AMCAS includes all undergraduate courses from accredited institutions, including community colleges and study abroad programs.
                However, they exclude graduate-level courses, pass/fail courses, and some repeated courses.
                Understanding these rules helps you calculate a more accurate pre-med GPA estimate.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                For the most accurate calculation, use only courses from your undergraduate degree and apply the standard grading scale.
                Our medical school GPA calculator automatically handles these calculations for you.
              </p>
            </section>

            {/* Science GPA vs Overall GPA */}
            <section>
              <h2 id="science-gpa-vs-overall-gpa" className="text-3xl font-bold text-gray-900 mb-6">
                Science GPA vs Overall GPA
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Medical schools evaluate both your overall GPA and your science GPA (BCPM GPA) separately.
                While both are important, the science GPA often carries more weight in admissions decisions because medical education is science-intensive.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Overall GPA</h3>
                  <ul className="text-blue-800 space-y-2">
                    <li>• Includes all undergraduate courses</li>
                    <li>• Shows general academic ability</li>
                    <li>• Important for holistic admissions</li>
                    <li>• Helps demonstrate well-roundedness</li>
                    <li>• Typically weighted equally with science GPA</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-green-900 mb-4">Science GPA (BCPM)</h3>
                  <ul className="text-green-800 space-y-2">
                    <li>• Biology, Chemistry, Physics, Math only</li>
                    <li>• Predicts success in medical coursework</li>
                    <li>• Often more heavily weighted</li>
                    <li>• Critical for science-heavy curriculum</li>
                    <li>• Many schools have BCPM minimums</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                BCPM courses include: General Biology, Anatomy, Physiology, Biochemistry, General Chemistry, Organic Chemistry, Physics, Calculus, Statistics.
                Non-science courses like Psychology, Sociology, English, and Foreign Languages count toward your overall GPA but not your science GPA.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Many medical schools have separate GPA cutoffs for BCPM courses. For example, a school might require 3.5 overall GPA and 3.4 science GPA.
                If your science GPA is significantly lower than your overall GPA, it could raise concerns about your ability to handle medical school science courses.
              </p>
            </section>

            {/* Medical School GPA Requirements */}
            <section>
              <h2 id="medical-school-gpa-requirements" className="text-3xl font-bold text-gray-900 mb-6">
                Medical School GPA Requirements
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                GPA requirements for medical school vary significantly by school prestige and selectivity.
                Most schools publish median GPAs for admitted students, giving applicants a clear benchmark for competitiveness.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">By School Tier</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Top 20 Schools</span>
                      <span className="text-purple-600 font-bold">3.7+/3.6+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Top 50 Schools</span>
                      <span className="text-blue-600 font-bold">3.6+/3.5+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Mid-Tier Schools</span>
                      <span className="text-green-600 font-bold">3.5+/3.4+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Lower-Tier Schools</span>
                      <span className="text-yellow-600 font-bold">3.3+/3.2+</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">Overall/Science GPA</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-purple-900 mb-4">Acceptance Rates by GPA</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">3.8+ Overall</span>
                      <span className="text-purple-600 font-bold">~50%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">3.6-3.8 Overall</span>
                      <span className="text-blue-600 font-bold">~25%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">3.4-3.6 Overall</span>
                      <span className="text-green-600 font-bold">~10%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Below 3.4</span>
                      <span className="text-red-600 font-bold">&lt;5%</span>
                    </div>
                  </div>
                  <p className="text-xs text-purple-700 mt-3">Approximate acceptance rates</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                It's important to remember that GPA is only one piece of your medical school application.
                Schools use holistic admissions, considering MCAT scores, clinical experience, research, leadership, and personal statements.
                A lower GPA can be offset by exceptional MCAT performance or compelling extracurricular activities.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Many schools have GPA cutoffs below which applications are automatically screened out.
                However, these cutoffs are typically set at 3.0 or lower, so most applicants with reasonable GPAs can still apply broadly.
                The key is finding the right balance between reach schools and safety schools based on your complete profile.
              </p>
            </section>

            {/* Example Calculation */}
            <section>
              <h2 id="example-medical-school-gpa" className="text-3xl font-bold text-gray-900 mb-6">
                Example of Medical School GPA Calculation
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Let's walk through a complete medical school GPA calculation with typical pre-med courses.
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sample Pre-Med Courses</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left">Course</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Grade</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Grade Points</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Credits</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Quality Points</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Category</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Biology 101</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">A</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">4.00</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">4</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">16.00</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Biology</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">General Chemistry</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">B+</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">3.33</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">4</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">13.32</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Chemistry</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Organic Chemistry</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">A-</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">3.67</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">4</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">14.68</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Chemistry</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Physics I</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">B</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">3.00</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">4</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">12.00</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Physics</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Calculus I</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">A</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">4.00</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">4</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">16.00</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Math</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">English Literature</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">B</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">3.00</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">3</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">9.00</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Other</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-300 px-4 py-2 font-bold" colSpan={5}>TOTALS</td>
                        <td className="border border-gray-300 px-4 py-2 text-center font-bold">81.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="text-lg font-bold text-blue-900 mb-2">Overall GPA</h4>
                  <div className="text-2xl font-bold text-blue-600">3.57</div>
                  <div className="text-sm text-blue-700">81.00 ÷ 23 credits</div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="text-lg font-bold text-green-900 mb-2">Science GPA</h4>
                  <div className="text-2xl font-bold text-green-600">3.62</div>
                  <div className="text-sm text-green-700">72.00 ÷ 20 credits</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                This example shows a competitive pre-med GPA profile. The 3.57 overall GPA and 3.62 science GPA would be competitive
                for many medical schools, especially when combined with a strong MCAT score and extracurricular activities.
              </p>
            </section>

            {/* Tips to Improve GPA */}
            <section>
              <h2 id="tips-improve-pre-med-gpa" className="text-3xl font-bold text-gray-900 mb-6">
                Tips to Improve Your Pre-Med GPA
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                If your current GPA is below your target medical schools' medians, there are strategic ways to strengthen your application.
                Here are evidence-based tips specifically for pre-med students aiming to improve their GPA.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2">📚 Academic Strategies</h3>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Focus on science courses - they matter most</li>
                      <li>• Take courses during your strongest semesters</li>
                      <li>• Consider post-baccalaureate pre-med programs</li>
                      <li>• Retake courses to improve grades (check AMCAS policy)</li>
                      <li>• Take graduate-level science courses if possible</li>
                      <li>• Build relationships with professors for strong letters</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2">⏰ Time Management</h3>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Create a realistic course load (12-15 credits/semester)</li>
                      <li>• Dedicate 2-3 hours of study per credit hour</li>
                      <li>• Join study groups with high-performing students</li>
                      <li>• Use office hours and tutoring services</li>
                      <li>• Balance academics with clinical/research activities</li>
                      <li>• Take care of mental health and avoid burnout</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2">🎯 Strategic Planning</h3>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Research schools with GPA ranges matching your profile</li>
                      <li>• Consider SMP (Special Master's Program) for GPA repair</li>
                      <li>• Focus on upward grade trend in recent semesters</li>
                      <li>• Strengthen other application components (MCAT, activities)</li>
                      <li>• Consider DO schools if MD schools are out of reach</li>
                      <li>• Network with admissions officers and alumni</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2">📖 Long-term Development</h3>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Gain substantial clinical experience (shadowing, volunteering)</li>
                      <li>• Pursue research opportunities and publications</li>
                      <li>• Develop leadership in extracurricular activities</li>
                      <li>• Prepare thoroughly for MCAT with dedicated study time</li>
                      <li>• Craft a compelling personal statement</li>
                      <li>• Secure strong letters of recommendation</li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Remember: medical schools value GPA improvement and upward trends. If you've had a rough start but show strong recent performance,
                admissions committees will take that into account. The key is demonstrating your ability to handle medical school rigor.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Post-baccalaureate programs and Special Master's Programs can be excellent options for GPA repair.
                These programs allow you to take pre-med courses as a non-degree student and can significantly improve your science GPA.
                Many successful applicants use these programs to strengthen their applications.
              </p>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 id="faq" className="text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What GPA do you need for medical school?</h3>
                  <p className="text-gray-700">
                    Most medical schools require a minimum GPA of 3.0, but competitive schools typically require 3.5 or higher for overall GPA and 3.4+ for science GPA.
                    Top-tier medical schools like Harvard, Johns Hopkins, and Stanford typically require 3.7+ overall and 3.6+ science GPA.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How do you calculate pre med GPA?</h3>
                  <p className="text-gray-700">
                    Pre-med GPA is calculated by multiplying each course's grade points by credit hours, summing all grade points, then dividing by total credit hours.
                    Use the standard 4.0 scale where A=4.0, A-=3.7, B+=3.3, etc. AMCAS (American Medical College Application Service) recalculates GPA using their own standards.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What is a good GPA for medical school?</h3>
                  <p className="text-gray-700">
                    A good GPA for medical school depends on the school tier. For top schools, aim for 3.7+ overall and 3.6+ science GPA.
                    For mid-tier schools, 3.5+ overall and 3.4+ science GPA is competitive. Below-average GPAs can still be competitive with strong MCAT scores and other application components.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Do medical schools look at science GPA?</h3>
                  <p className="text-gray-700">
                    Yes, medical schools heavily weigh science GPA (BCPM GPA). BCPM includes Biology, Chemistry, Physics, and Math courses.
                    Many schools have separate GPA cutoffs for science courses. A strong science GPA is crucial because medical school curricula are science-heavy.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Is a 3.7 GPA good for medical school?</h3>
                  <p className="text-gray-700">
                    A 3.7 GPA is excellent for medical school admission. It places you in the top quartile of applicants and makes you competitive for most medical schools,
                    including many top programs. Combined with a strong MCAT score, a 3.7 GPA significantly boosts your chances.
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
                Explore our other specialized GPA calculators designed to help students across different academic paths track their progress and prepare for advanced degrees.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/gpa-calculators/college-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">College GPA Calculator</h3>
                  <p className="text-gray-600 text-sm">Calculate your college GPA with our easy-to-use tool.</p>
                </Link>
                <Link href="/gpa-calculators/nursing-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">Nursing GPA Calculator</h3>
                  <p className="text-gray-600 text-sm">Calculate GPA for nursing school applications.</p>
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
              </div>
            </section>

            {/* External Links */}
            <section className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Resources</h3>
              <p className="text-gray-700 mb-4">
                Learn more about medical school admissions and GPA calculations from these trusted sources:
              </p>
              <ul className="space-y-2 text-blue-600">
                <li><a href="https://students-residents.aamc.org" target="_blank" rel="noopener noreferrer" className="hover:underline">AAMC Students & Residents</a></li>
                <li><a href="https://www.aamc.org" target="_blank" rel="noopener noreferrer" className="hover:underline">Association of American Medical Colleges (AAMC)</a></li>
                <li><a href="https://www.collegeboard.org" target="_blank" rel="noopener noreferrer" className="hover:underline">College Board - Medical School Information</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}