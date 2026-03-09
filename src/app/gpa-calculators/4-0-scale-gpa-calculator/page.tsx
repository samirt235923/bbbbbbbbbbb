import Link from 'next/link';
import { Metadata } from 'next';
import Script from 'next/script';
import FourPointZeroGPACalculator from '@/components/FourPointZeroGPACalculator';

export const metadata: Metadata = {
  title: '4.0 GPA Calculator – Calculate GPA on a 4.0 Scale',
  description: 'Use our 4.0 GPA Calculator to calculate your GPA using the standard 4.0 grading scale. Enter courses, credits, and grades to instantly calculate your GPA.',
};

export default function FourPointZeroGpaPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type":"ListItem","position":1,"name":"Home","item":"https://toptopgpacalculator.com"},
      {"@type":"ListItem","position":2,"name":"GPA Calculators","item":"https://toptopgpacalculator.com/gpa-calculators"},
      {"@type":"ListItem","position":3,"name":"4.0 Scale GPA Calculator","item":"https://toptopgpacalculator.com/gpa-calculators/4-0-scale-gpa-calculator"}
    ]
  };

  const faqSchema = {
    "@context":"https://schema.org",
    "@type":"FAQPage",
    "mainEntity":[
      {"@type":"Question","name":"How do you calculate GPA on a 4.0 scale?","acceptedAnswer":{"@type":"Answer","text":"Multiply each course grade value by credits, sum grade points and divide by total credits. The standard 4.0 scale assigns A=4.0, A-=3.7, etc."}},
      {"@type":"Question","name":"What is a 3.5 GPA on a 4.0 scale?","acceptedAnswer":{"@type":"Answer","text":"A 3.5 GPA is above average, roughly corresponding to mostly Bs with some As. It is considered good for many programs."}},
      {"@type":"Question","name":"Is 4.0 the highest GPA?","acceptedAnswer":{"@type":"Answer","text":"On an unweighted 4.0 scale, 4.0 is the maximum. Some schools use weighted scales where 4.3 or 5.0 is possible for honors/AP courses."}},
      {"@type":"Question","name":"What is a good GPA on a 4.0 scale?","acceptedAnswer":{"@type":"Answer","text":"A GPA of 3.5 or higher is generally strong. Top institutions often look for 3.7+."}},
      {"@type":"Question","name":"How do colleges calculate GPA?","acceptedAnswer":{"@type":"Answer","text":"Colleges convert letter grades to numerical values, weight them by credit hours, then average across all courses. Policies vary by institution regarding plus/minus grades and repeat courses."}}
    ]
  };

  const articleSchema = {
    "@context":"https://schema.org",
    "@type":"Article",
    "headline":"4.0 GPA Calculator – Calculate GPA on a 4.0 Scale",
    "description":"Use our 4.0 GPA Calculator to calculate your GPA using the standard 4.0 grading scale. Enter courses, credits, and grades to instantly calculate your GPA.",
    "author":{"@type":"Organization","name":"GPA Calculator"},
    "publisher":{"@type":"Organization","name":"GPA Calculator"},
    "datePublished":"2024-01-01","dateModified":"2024-01-01"
  };

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbSchema)}}/>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}}/>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(articleSchema)}}/>

      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-red-50">
        <nav className="bg-white border-b border-gray-200 py-3">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/></svg></li>
              <li><Link href="/gpa-calculators" className="hover:text-blue-600">GPA Calculators</Link></li>
              <li><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/></svg></li>
              <li className="text-gray-900 font-medium">4.0 Scale GPA Calculator</li>
            </ol>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#calculator" className="text-blue-600 hover:text-blue-800">Calculator</a></li>
              <li><a href="#what-is-4-0-scale" className="text-blue-600 hover:text-blue-800">What is a 4.0 GPA Scale</a></li>
              <li><a href="#how-to-calculate" className="text-blue-600 hover:text-blue-800">How to Calculate GPA on a 4.0 Scale</a></li>
              <li><a href="#formula" className="text-blue-600 hover:text-blue-800">Formula Explained</a></li>
              <li><a href="#example" className="text-blue-600 hover:text-blue-800">Example Calculation</a></li>
              <li><a href="#difference" className="text-blue-600 hover:text-blue-800">4.0 vs 5.0 Scale</a></li>
              <li><a href="#good-gpa" className="text-blue-600 hover:text-blue-800">What is a Good GPA</a></li>
              <li><a href="#faq" className="text-blue-600 hover:text-blue-800">FAQ</a></li>
              <li><a href="#related" className="text-blue-600 hover:text-blue-800">Related Calculators</a></li>
            </ul>
          </div>

          <h1 id="calculator" className="text-4xl font-bold text-gray-900 mb-6">4.0 Scale GPA Calculator</h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">Use our <strong>4.0 GPA calculator</strong> to compute your GPA with the standard unweighted 4.0 scale. This tool updates instantly as you enter course names, credits, and grades.</p>
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-12">
            <FourPointZeroGPACalculator />
          </div>

          <div className="space-y-12">
            <section id="what-is-4-0-scale">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is a 4.0 GPA Scale</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">The 4.0 GPA scale is the most common grading system in U.S. colleges. An A equals 4.0 points, B equals 3.0, and so on. Some institutions use plus/minus modifiers to more precisely reflect performance.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">On this scale, 4.0 is the highest possible GPA and represents straight A's. It's widely used by admissions offices, employers, and scholarship committees as a quick indicator of academic success.</p>
            </section>

            <section id="how-to-calculate">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Calculate GPA on a 4.0 Scale</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
                <li>Assign each letter grade its numerical value from the 4.0 scale.</li>
                <li>Multiply the grade value by the course credit hours to obtain grade points.</li>
                <li>Add all grade points together.</li>
                <li>Add all credit hours together.</li>
                <li>Divide total grade points by total credits to get your GPA.</li>
              </ol>
              <p className="text-gray-700 mb-4 leading-relaxed">The calculator above performs these steps automatically for you.</p>
            </section>

            <section id="formula">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">4.0 GPA Formula Explained</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">The universal formula is:</p>
              <p className="text-gray-700 mb-4 leading-relaxed font-mono">GPA = Total Grade Points ÷ Total Credit Hours</p>
              <p className="text-gray-700 mb-4 leading-relaxed">Grade points for each course equal the grade value multiplied by credits.</p>
            </section>

            <section id="example">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Example of GPA Calculation on a 4.0 Scale</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Consider these courses:</p>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border px-4 py-2 text-left">Course</th>
                        <th className="border px-4 py-2 text-center">Grade</th>
                        <th className="border px-4 py-2 text-center">Grade Value</th>
                        <th className="border px-4 py-2 text-center">Credits</th>
                        <th className="border px-4 py-2 text-center">Grade Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border px-4 py-2">Math</td><td className="border px-4 py-2 text-center">A</td><td className="border px-4 py-2 text-center">4.0</td><td className="border px-4 py-2 text-center">3</td><td className="border px-4 py-2 text-center">12.00</td></tr>
                      <tr><td className="border px-4 py-2">English</td><td className="border px-4 py-2 text-center">B+</td><td className="border px-4 py-2 text-center">3.3</td><td className="border px-4 py-2 text-center">3</td><td className="border px-4 py-2 text-center">9.90</td></tr>
                      <tr><td className="border px-4 py-2">History</td><td className="border px-4 py-2 text-center">B</td><td className="border px-4 py-2 text-center">3.0</td><td className="border px-4 py-2 text-center">4</td><td className="border px-4 py-2 text-center">12.00</td></tr>
                      <tr className="bg-blue-50"><td className="border px-4 py-2 font-bold" colSpan={4}>TOTALS</td><td className="border px-4 py-2 text-center font-bold">33.90</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">Total grade points 33.9 divided by 10 credits equals a <strong>3.39 GPA</strong>.</p>
            </section>

            <section id="difference">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Difference Between 4.0 and 5.0 GPA Scales</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">A 4.0 scale is unweighted; all courses count equally. A 5.0 scale or higher is weighted—honors and AP courses are worth extra points. Use this calculator for the unweighted 4.0 standard.</p>
            </section>

            <section id="good-gpa">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is a Good GPA on a 4.0 Scale</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">A GPA of 3.5+ is strong; 3.7+ is very competitive. Anything above 3.0 is respectable and keeps most academic and scholarship options open.</p>
            </section>

            <section id="faq">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How do you calculate GPA on a 4.0 scale?</h3>
                  <p className="text-gray-700">Multiply grade values by credits, add grade points, divide by total credits using the standard 4.0 scale (A=4.0, etc.).</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What is a 3.5 GPA on a 4.0 scale?</h3>
                  <p className="text-gray-700">A 3.5 GPA indicates mostly As and Bs; it's above average and often meets honors program requirements.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Is 4.0 the highest GPA?</h3>
                  <p className="text-gray-700">Yes, on an unweighted 4.0 scale. Weighted scales may allow higher values for advanced courses.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What is a good GPA on a 4.0 scale?</h3>
                  <p className="text-gray-700">Generally, 3.5+ is strong; 3.7+ is excellent. Good depends on your goals and institution standards.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How do colleges calculate GPA?</h3>
                  <p className="text-gray-700">Colleges convert letter grades to numbers, weight by credits, average all courses. Policies vary on repeats and grade forgiveness.</p>
                </div>
              </div>
            </section>

            <section id="related">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Related GPA Calculators</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/gpa-calculators/college-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg"><h3 className="font-bold text-gray-900 mb-2">College GPA Calculator</h3><p className="text-gray-600 text-sm">General college GPA tool.</p></Link>
                <Link href="/gpa-calculators/weighted-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg"><h3 className="font-bold text-gray-900 mb-2">Weighted GPA Calculator</h3><p className="text-gray-600 text-sm">Use Honors/AP weighting.</p></Link>
                <Link href="/gpa-calculators/5-0-scale-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg"><h3 className="font-bold text-gray-900 mb-2">5.0 Scale GPA Calculator</h3><p className="text-gray-600 text-sm">For schools using a 5.0 scale.</p></Link>
                <Link href="/gpa-calculators/high-school-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg"><h3 className="font-bold text-gray-900 mb-2">High School GPA Calculator</h3><p className="text-gray-600 text-sm">Track high school grades.</p></Link>
                <Link href="/gpa-calculators/cumulative-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg"><h3 className="font-bold text-gray-900 mb-2">Cumulative GPA Calculator</h3><p className="text-gray-600 text-sm">Combine multiple semesters.</p></Link>
              </div>
            </section>

            <section className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Resources</h3>
              <p className="text-gray-700 mb-4">Learn more from these trusted sites:</p>
              <ul className="space-y-2 text-blue-600">
                <li><a href="https://www.collegeboard.org" target="_blank" rel="noopener noreferrer" className="hover:underline">College Board</a></li>
                <li><a href="https://nces.ed.gov" target="_blank" rel="noopener noreferrer" className="hover:underline">NCES</a></li>
                <li><a href="https://www.khanacademy.org" target="_blank" rel="noopener noreferrer" className="hover:underline">Khan Academy</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}




