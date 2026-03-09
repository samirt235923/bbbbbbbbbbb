import Link from 'next/link';
import { Metadata } from 'next';
import Script from 'next/script';
import NursingGPACalculator from '@/components/NursingGPACalculator';

export const metadata: Metadata = {
  title: 'Nursing GPA Calculator – Free Tool for Nursing School Applicants',
  description: 'Use our Nursing GPA Calculator to calculate your GPA for nursing school applications. Enter courses, grades, and credit hours to get your accurate nursing GPA instantly.',
};

export default function NursingGPACalculatorPage() {
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
        "name": "Nursing GPA Calculator",
        "item": "https://topgpacalculator.com/nursing-gpa-calculator"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What GPA do you need for nursing school?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most nursing programs require a minimum GPA of 3.0, though competitive programs often require 3.5 or higher. The average GPA for nursing school admission is around 3.5-3.7, with top programs requiring 3.8+."
        }
      },
      {
        "@type": "Question",
        "name": "How do I calculate my nursing GPA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To calculate nursing GPA, multiply each course's grade points by credit hours, sum all the grade points, then divide by total credit hours. Use our nursing GPA calculator for accurate, instant results."
        }
      },
      {
        "@type": "Question",
        "name": "Is a 3.5 GPA good for nursing school?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A 3.5 GPA is generally considered good for nursing school admission. It's above the minimum requirement for most programs and competitive for many schools, though top-tier programs may prefer higher GPAs."
        }
      },
      {
        "@type": "Question",
        "name": "Do science classes affect nursing GPA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, science classes significantly affect nursing GPA. Many programs calculate a separate science GPA for prerequisite courses like Biology, Chemistry, Anatomy, and Physiology. A strong science GPA is crucial for nursing school admission."
        }
      },
      {
        "@type": "Question",
        "name": "What is the average GPA for nursing school admission?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The average GPA for nursing school admission varies by program type and competitiveness. For ADN programs, it's around 3.2-3.5; for BSN programs, 3.4-3.7; and for competitive programs like Nurse Practitioner, 3.7+."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Nursing GPA Calculator – Free Tool for Nursing School Applicants",
    "description": "Use our Nursing GPA Calculator to calculate your GPA for nursing school applications. Enter courses, grades, and credit hours to get your accurate nursing GPA instantly.",
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

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
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
              <li className="text-gray-900 font-medium">Nursing GPA Calculator</li>
            </ol>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Table of Contents */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#nursing-gpa-calculator" className="text-blue-600 hover:text-blue-800">Nursing GPA Calculator</a></li>
              <li><a href="#what-is-nursing-gpa" className="text-blue-600 hover:text-blue-800">What is a Nursing GPA</a></li>
              <li><a href="#how-to-calculate-nursing-gpa" className="text-blue-600 hover:text-blue-800">How to Calculate Nursing GPA</a></li>
              <li><a href="#nursing-school-gpa-requirements" className="text-blue-600 hover:text-blue-800">Nursing School GPA Requirements</a></li>
              <li><a href="#science-gpa-vs-overall-gpa" className="text-blue-600 hover:text-blue-800">Science GPA vs Overall GPA</a></li>
              <li><a href="#nursing-gpa-formula" className="text-blue-600 hover:text-blue-800">Nursing GPA Formula</a></li>
              <li><a href="#example-nursing-gpa" className="text-blue-600 hover:text-blue-800">Example of Nursing GPA Calculation</a></li>
              <li><a href="#tips-improve-nursing-gpa" className="text-blue-600 hover:text-blue-800">Tips to Improve Your Nursing GPA</a></li>
              <li><a href="#faq" className="text-blue-600 hover:text-blue-800">Frequently Asked Questions</a></li>
              <li><a href="#related-calculators" className="text-blue-600 hover:text-blue-800">Related GPA Calculators</a></li>
            </ul>
          </div>

          {/* Main Heading */}
          <h1 id="nursing-gpa-calculator" className="text-4xl font-bold text-gray-900 mb-6">
            Nursing GPA Calculator
          </h1>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Use our free <strong>nursing GPA calculator</strong> to accurately calculate your GPA for nursing school applications.
            Whether you're applying to ADN, BSN, or graduate nursing programs, our calculator helps you determine your
            competitiveness with instant results, including optional science GPA calculations.
          </p>

          {/* Calculator Component */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-12">
            <NursingGPACalculator />
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* What is a Nursing GPA */}
            <section>
              <h2 id="what-is-nursing-gpa" className="text-3xl font-bold text-gray-900 mb-6">
                What is a Nursing GPA
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A nursing GPA is your Grade Point Average calculated specifically for nursing school admissions.
                Unlike general college GPAs, nursing programs often evaluate applicants based on both overall GPA
                and prerequisite science GPA. This specialized calculation helps nursing schools assess your academic
                preparedness for the rigorous coursework and clinical requirements of nursing education.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Nursing programs are highly competitive, and your GPA serves as a critical indicator of your ability
                to handle the demanding curriculum. Most programs require a minimum GPA of 3.0, though competitive
                programs often expect 3.5 or higher. The nursing GPA calculation typically includes all college-level
                coursework, with special attention paid to science prerequisite courses.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                When applying to nursing school, you'll often need to submit both your cumulative GPA and your
                science prerequisite GPA. The science GPA is calculated using only the grades from required science
                courses like Biology, Chemistry, Anatomy, Physiology, and Microbiology. This separate calculation
                helps admissions committees evaluate your performance in the foundational sciences that are crucial
                for nursing practice.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                <p className="text-blue-800 font-medium">
                  💡 <strong>Key Point:</strong> Nursing GPAs are calculated using the standard 4.0 scale,
                  but many programs also require a separate science prerequisite GPA calculation.
                </p>
              </div>
            </section>

            {/* How to Calculate Nursing GPA */}
            <section>
              <h2 id="how-to-calculate-nursing-gpa" className="text-3xl font-bold text-gray-900 mb-6">
                How to Calculate Nursing GPA
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Calculating your nursing GPA involves converting letter grades to numerical values and applying
                the standard GPA formula. The process is straightforward but requires careful attention to course
                credits and grade values. Here's how nursing schools typically calculate GPAs:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
                <li><strong>Convert grades to points:</strong> Use the standard 4.0 scale (A=4.0, B=3.0, etc.)</li>
                <li><strong>Multiply by credits:</strong> Calculate grade points for each course</li>
                <li><strong>Sum all grade points:</strong> Add up the totals from all courses</li>
                <li><strong>Sum all credits:</strong> Add up the credit hours from all courses</li>
                <li><strong>Divide to get GPA:</strong> Total grade points ÷ total credits</li>
              </ol>
              <p className="text-gray-700 mb-4 leading-relaxed">
                For science GPA calculations, repeat the same process but only include science prerequisite courses.
                Most nursing programs require a minimum science GPA of 3.0, though competitive programs prefer 3.5 or higher.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                It's important to note that nursing programs may have different policies regarding which courses
                to include in GPA calculations. Some programs include all college coursework, while others focus
                on the most recent grades or specific prerequisite courses. Always check with your target programs
                for their specific GPA calculation requirements.
              </p>
            </section>

            {/* Nursing School GPA Requirements */}
            <section>
              <h2 id="nursing-school-gpa-requirements" className="text-3xl font-bold text-gray-900 mb-6">
                Nursing School GPA Requirements
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                GPA requirements for nursing school vary significantly depending on the type of program and its competitiveness.
                Understanding these requirements is crucial for aspiring nursing students to set realistic goals and
                create effective academic plans. Here's a breakdown of typical GPA expectations:
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Program Types & GPA Ranges</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">ADN Programs:</span>
                      <span className="text-blue-600 font-bold">3.0 - 3.5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">BSN Programs:</span>
                      <span className="text-blue-600 font-bold">3.2 - 3.7</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Accelerated BSN:</span>
                      <span className="text-blue-600 font-bold">3.5 - 3.8</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Graduate Programs:</span>
                      <span className="text-blue-600 font-bold">3.5 - 4.0</span>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-green-900 mb-4">Science GPA Requirements</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Minimum Required:</span>
                      <span className="text-green-600 font-bold">3.0</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Competitive:</span>
                      <span className="text-green-600 font-bold">3.5+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Top Programs:</span>
                      <span className="text-green-600 font-bold">3.7+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Elite Programs:</span>
                      <span className="text-green-600 font-bold">3.8+</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                ADN (Associate Degree in Nursing) programs typically have the lowest GPA requirements, while
                competitive BSN programs and graduate nursing programs require higher GPAs. Many programs also
                have minimum requirements for science prerequisite courses specifically.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Keep in mind that GPA is just one factor in nursing school admissions. Other important considerations
                include prerequisite coursework completion, TEAS scores, letters of recommendation, personal statements,
                and clinical experience. Some programs use a holistic admissions process that weighs multiple factors
                beyond just GPA.
              </p>
            </section>

            {/* Science GPA vs Overall GPA */}
            <section>
              <h2 id="science-gpa-vs-overall-gpa" className="text-3xl font-bold text-gray-900 mb-6">
                Science GPA vs Overall GPA
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Understanding the difference between science GPA and overall GPA is crucial for nursing school applicants.
                While both metrics are important, they serve different purposes in the admissions process and
                can significantly impact your competitiveness as an applicant.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Overall GPA</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Includes all college coursework</li>
                    <li>• Shows general academic ability</li>
                    <li>• Minimum 3.0 for most programs</li>
                    <li>• Affects overall competitiveness</li>
                    <li>• Can be improved with any courses</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-green-900 mb-4">Science GPA</h3>
                  <ul className="space-y-2 text-green-800">
                    <li>• Only science prerequisite courses</li>
                    <li>• Critical for nursing admissions</li>
                    <li>• Minimum 3.0-3.5 for most programs</li>
                    <li>• Often more heavily weighted</li>
                    <li>• Harder to improve once completed</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Science GPA is typically calculated from required prerequisite courses such as:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                <li>General Biology (and lab)</li>
                <li>General Chemistry (and lab)</li>
                <li>Anatomy & Physiology I & II (and labs)</li>
                <li>Microbiology (and lab)</li>
                <li>Organic Chemistry (sometimes required)</li>
                <li>Statistics (sometimes included)</li>
              </ul>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Many nursing programs consider science GPA more heavily than overall GPA because it directly
                assesses your ability to succeed in the science-intensive nursing curriculum. A strong science
                GPA demonstrates your aptitude for the biological and chemical concepts that form the foundation
                of nursing practice.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                If your science GPA is lower than your overall GPA, consider retaking science courses to improve
                it. Many programs allow grade replacement or will accept the higher grade when calculating your
                science GPA. However, policies vary by institution, so check with your target programs.
              </p>
            </section>

            {/* Nursing GPA Formula */}
            <section>
              <h2 id="nursing-gpa-formula" className="text-3xl font-bold text-gray-900 mb-6">
                Nursing GPA Formula
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The nursing GPA formula is identical to the standard college GPA calculation but applied specifically
                to nursing school admissions. The formula ensures fair evaluation of academic performance across
                different course loads and credit systems.
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Nursing GPA Formula</h3>
                  <div className="text-3xl font-mono bg-white rounded-lg p-4 border border-gray-300 mb-4">
                    Nursing GPA = Σ(Grade Points × Credits) ÷ Total Credits
                  </div>
                  <p className="text-gray-600">Where Σ represents the sum of all courses</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The formula components are:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li><strong>Grade Points:</strong> Numerical value assigned to letter grades (A=4.0, A-=3.7, B+=3.3, B=3.0, etc.)</li>
                <li><strong>Credits:</strong> The number of credit hours for each course</li>
                <li><strong>Grade Points × Credits:</strong> The quality points earned for each course</li>
                <li><strong>Total Credits:</strong> Sum of credit hours from all included courses</li>
              </ul>
              <p className="text-gray-700 mb-4 leading-relaxed">
                For science GPA calculations, the same formula applies but only includes science prerequisite courses.
                This separate calculation helps nursing programs assess your performance in the foundational sciences
                that are essential for nursing education.
              </p>
            </section>

            {/* Example Calculation */}
            <section>
              <h2 id="example-nursing-gpa" className="text-3xl font-bold text-gray-900 mb-6">
                Example of Nursing GPA Calculation
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Let's walk through a complete nursing GPA calculation with typical prerequisite courses.
                This example includes both overall GPA and science GPA calculations.
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sample Nursing Prerequisites</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left">Course</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Grade</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Credits</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Grade Points</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Quality Points</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Science Course</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Anatomy & Physiology I</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">A</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">4</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">4.0</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">16.0</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">✓</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Microbiology</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">B+</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">3</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">3.3</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">9.9</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">✓</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">English Composition</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">A-</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">3</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">3.7</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">11.1</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">—</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Psychology</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">B</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">3</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">3.0</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">9.0</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">—</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Chemistry</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">A</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">4</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">4.0</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">16.0</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">✓</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-300 px-4 py-2 font-bold" colSpan={4}>OVERALL TOTALS</td>
                        <td className="border border-gray-300 px-4 py-2 text-center font-bold">62.0</td>
                        <td className="border border-gray-300 px-4 py-2 text-center font-bold">17 credits</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="border border-gray-300 px-4 py-2 font-bold" colSpan={4}>SCIENCE TOTALS</td>
                        <td className="border border-gray-300 px-4 py-2 text-center font-bold">41.9</td>
                        <td className="border border-gray-300 px-4 py-2 text-center font-bold">11 credits</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                <p className="text-green-800 font-medium">
                  🎯 <strong>Final Results:</strong> Overall GPA = 62.0 ÷ 17 = 3.65 | Science GPA = 41.9 ÷ 11 = 3.81
                </p>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                This example demonstrates how science courses can significantly impact your nursing school competitiveness.
                The student has a strong overall GPA of 3.65, but an even stronger science GPA of 3.81, which would be
                very competitive for most nursing programs. Notice how the science GPA is calculated using only the
                science prerequisite courses, providing a focused assessment of performance in key foundational courses.
              </p>
            </section>

            {/* Tips to Improve Nursing GPA */}
            <section>
              <h2 id="tips-improve-nursing-gpa" className="text-3xl font-bold text-gray-900 mb-6">
                Tips to Improve Your Nursing GPA
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Improving your GPA for nursing school requires strategic planning and consistent effort.
                Here are proven strategies specifically tailored for nursing students and pre-nursing majors.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2">📚 Science Course Strategies</h3>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Take science prerequisites early in your academic career</li>
                      <li>• Consider summer courses for lighter course loads</li>
                      <li>• Use tutoring services for challenging science courses</li>
                      <li>• Form study groups with other nursing students</li>
                      <li>• Attend office hours regularly for science professors</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2">⏰ Time Management</h3>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Create a study schedule that includes science labs</li>
                      <li>• Balance clinical requirements with coursework</li>
                      <li>• Use active learning techniques for science courses</li>
                      <li>• Take advantage of academic support services</li>
                      <li>• Monitor your GPA progress regularly</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2">🎯 Course Selection</h3>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Research program-specific prerequisite requirements</li>
                      <li>• Take courses that interest you and align with nursing</li>
                      <li>• Consider course difficulty and professor ratings</li>
                      <li>• Plan your course sequence strategically</li>
                      <li>• Include electives that support your nursing goals</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2">🏆 Long-term Planning</h3>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Meet with academic advisors regularly</li>
                      <li>• Join pre-nursing clubs and organizations</li>
                      <li>• Gain healthcare experience to strengthen applications</li>
                      <li>• Prepare for standardized tests (TEAS, HESI)</li>
                      <li>• Build relationships with nursing faculty</li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Remember that nursing school admissions are holistic. While GPA is important, programs also consider
                your personal statement, letters of recommendation, clinical experience, and interview performance.
                Focus on developing well-rounded skills and experiences that demonstrate your commitment to nursing.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                If you have a lower GPA, consider programs that offer conditional admission or bridge programs.
                Many students successfully enter nursing school after improving their GPAs through post-baccalaureate
                programs or by retaking prerequisite courses. Persistence and dedication are key qualities that
                nursing programs value in their students.
              </p>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 id="faq" className="text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What GPA do you need for nursing school?</h3>
                  <p className="text-gray-700">
                    Most nursing programs require a minimum GPA of 3.0, though competitive programs often require 3.5 or higher.
                    The average GPA for nursing school admission is around 3.5-3.7, with top programs requiring 3.8+.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How do I calculate my nursing GPA?</h3>
                  <p className="text-gray-700">
                    To calculate nursing GPA, multiply each course's grade points by credit hours, sum all the grade points,
                    then divide by total credit hours. Use our nursing GPA calculator for accurate, instant results.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Is a 3.5 GPA good for nursing school?</h3>
                  <p className="text-gray-700">
                    A 3.5 GPA is generally considered good for nursing school admission. It's above the minimum requirement
                    for most programs and competitive for many schools, though top-tier programs may prefer higher GPAs.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Do science classes affect nursing GPA?</h3>
                  <p className="text-gray-700">
                    Yes, science classes significantly affect nursing GPA. Many programs calculate a separate science GPA
                    for prerequisite courses like Biology, Chemistry, Anatomy, and Physiology. A strong science GPA is crucial for nursing school admission.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What is the average GPA for nursing school admission?</h3>
                  <p className="text-gray-700">
                    The average GPA for nursing school admission varies by program type and competitiveness. For ADN programs,
                    it's around 3.2-3.5; for BSN programs, 3.4-3.7; and for competitive programs like Nurse Practitioner, 3.7+.
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
                Learn more about nursing education and GPA requirements from these trusted sources:
              </p>
              <ul className="space-y-2 text-blue-600">
                <li><a href="https://www.aacnnursing.org" target="_blank" rel="noopener noreferrer" className="hover:underline">American Association of Colleges of Nursing (AACN)</a></li>
                <li><a href="https://www.ncsbn.org" target="_blank" rel="noopener noreferrer" className="hover:underline">National Council of State Boards of Nursing (NCSBN)</a></li>
                <li><a href="https://www.collegeboard.org" target="_blank" rel="noopener noreferrer" className="hover:underline">College Board - Nursing Program Information</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}





