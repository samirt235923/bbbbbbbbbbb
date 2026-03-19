'use client';

import React, { useState, useEffect } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import SEOHead from '@/components/SEOHead';
import FAQ from '@/components/FAQ';
import { FAQSchema, ArticleSchema } from '@/components/SchemaMarkup';
import RelatedCalculators from '@/components/RelatedCalculators';

export default function GPAToLetterGradeCalculator() {
  const [gpaValue, setGpaValue] = useState<string>('');
  const [gpaScale, setGpaScale] = useState<string>('4.0');
  const [result, setResult] = useState<{letterGrade?: string; percentage?: number}>({});

  // GPA to Letter Grade conversion function
  const convertGpaToLetterGrade = (gpa: number): string => {
    if (gpa >= 3.85) return 'A';
    if (gpa >= 3.7) return 'A-';
    if (gpa >= 3.3) return 'B+';
    if (gpa >= 3.0) return 'B';
    if (gpa >= 2.7) return 'B-';
    if (gpa >= 2.3) return 'C+';
    if (gpa >= 2.0) return 'C';
    if (gpa >= 1.7) return 'C-';
    if (gpa >= 1.0) return 'D';
    return 'F';
  };

  // Calculate percentage estimate
  const calculatePercentage = (gpa: number, scale: string): number => {
    const scaleNum = parseFloat(scale);
    return (gpa / scaleNum) * 100;
  };

  // Calculate on input change
  useEffect(() => {
    if (gpaValue) {
      const gpa = parseFloat(gpaValue);
      if (!isNaN(gpa) && gpa >= 0) {
        const letterGrade = convertGpaToLetterGrade(gpa);
        const percentage = Math.round(calculatePercentage(gpa, gpaScale) * 100) / 100;
        setResult({ letterGrade, percentage });
      } else {
        setResult({});
      }
    } else {
      setResult({});
    }
  }, [gpaValue, gpaScale]);

  const clearCalculator = () => {
    setGpaValue('');
    setResult({});
  };

  const conversionTable = [
    { gpa: '3.85 – 4.0', grade: 'A' },
    { gpa: '3.7 – 3.84', grade: 'A-' },
    { gpa: '3.3 – 3.69', grade: 'B+' },
    { gpa: '3.0 – 3.29', grade: 'B' },
    { gpa: '2.7 – 2.99', grade: 'B-' },
    { gpa: '2.3 – 2.69', grade: 'C+' },
    { gpa: '2.0 – 2.29', grade: 'C' },
    { gpa: '1.7 – 1.99', grade: 'C-' },
    { gpa: '1.0 – 1.69', grade: 'D' },
    { gpa: 'Below 1.0', grade: 'F' },
  ];

  const referenceTable = [
    { gpa: 4.0, grade: 'A' },
    { gpa: 3.7, grade: 'A-' },
    { gpa: 3.3, grade: 'B+' },
    { gpa: 3.0, grade: 'B' },
    { gpa: 2.7, grade: 'B-' },
    { gpa: 2.3, grade: 'C+' },
    { gpa: 2.0, grade: 'C' },
    { gpa: 1.7, grade: 'C-' },
    { gpa: 1.0, grade: 'D' },
    { gpa: 0.0, grade: 'F' },
  ];

  const faqData = [
    {
      question: "What letter grade is a 3.5 GPA?",
      answer: "A 3.5 GPA corresponds to a B+ letter grade on a standard 4.0 GPA scale. This represents above-average academic performance and is considered a good GPA for most college applications."
    },
    {
      question: "Is a 3.0 GPA a B grade?",
      answer: "Yes, a 3.0 GPA is equivalent to a B letter grade. This is considered good academic standing and meets the minimum requirements for many scholarships and graduate programs."
    },
    {
      question: "How do you convert GPA to letter grade?",
      answer: "GPA to letter grade conversion uses standard ranges: 3.85-4.0 = A, 3.7-3.84 = A-, 3.3-3.69 = B+, 3.0-3.29 = B, and so on. Use our calculator above for instant conversion."
    },
    {
      question: "Is a 4.0 GPA always an A?",
      answer: "Yes, a 4.0 GPA is always equivalent to an A letter grade, representing perfect academic performance. This is the highest possible GPA on a standard 4.0 scale."
    },
    {
      question: "What GPA is considered failing?",
      answer: "A GPA below 1.0 is typically considered failing (F grade). However, individual schools may have different standards. Generally, a GPA below 2.0 indicates academic difficulty."
    }
  ];

  return (
    <>
      <SEOHead
        title="GPA to Letter Grade Calculator – Convert GPA to Letter Grade"
        description="Use our GPA to Letter Grade Calculator to convert GPA into letter grades instantly. Supports common 4.0 GPA scale with accurate grade conversion."
        canonical="/gpa-calculators/gpa-to-letter-grade-calculator"
      />

      <ArticleSchema
        headline="GPA to Letter Grade Calculator – Convert GPA to Letter Grade"
        description="Learn how to convert GPA to letter grades with our comprehensive calculator. Includes conversion tables, examples, and detailed explanations for academic grading systems."
        author="GPA Calculator Team"
        datePublished="2024-01-15"
        dateModified="2024-01-15"
      />

      <FAQSchema faqs={faqData} />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'GPA Calculators', href: '/gpa-calculators' },
              { label: 'GPA to Letter Grade Calculator', href: '/gpa-calculators/gpa-to-letter-grade-calculator' }
            ]}
          />

          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            GPA to Letter Grade Calculator
          </h1>

          {/* Calculator Interface */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="mb-6">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    GPA Value
                  </label>
                  <input
                    type="number"
                    value={gpaValue}
                    onChange={(e) => setGpaValue(e.target.value)}
                    placeholder="Enter GPA (e.g., 3.5)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="0"
                    max={gpaScale === '4.0' ? '4.0' : '5.0'}
                    step="0.01"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    GPA Scale
                  </label>
                  <select
                    value={gpaScale}
                    onChange={(e) => setGpaScale(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="4.0">4.0 GPA Scale</option>
                    <option value="5.0">5.0 GPA Scale</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-center mb-4">
                <button
                  onClick={clearCalculator}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                >
                  Clear
                </button>
              </div>

              {/* Results */}
              {result.letterGrade && (
                <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-4">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Conversion Result</h3>
                  <div className="space-y-2">
                    <p className="text-green-700">
                      GPA {gpaValue} = <strong className="text-xl">{result.letterGrade}</strong> letter grade
                    </p>
                    {result.percentage !== undefined && (
                      <p className="text-green-700">
                        Estimated Percentage: <strong>{result.percentage}%</strong>
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              <li><a href="#what-is-gpa" className="text-blue-600 hover:text-blue-800">What is GPA?</a></li>
              <li><a href="#letter-grades" className="text-blue-600 hover:text-blue-800">What is a Letter Grade?</a></li>
              <li><a href="#conversion-logic" className="text-blue-600 hover:text-blue-800">How GPA Converts to Letter Grades</a></li>
              <li><a href="#conversion-table" className="text-blue-600 hover:text-blue-800">GPA to Letter Grade Chart</a></li>
              <li><a href="#good-gpa" className="text-blue-600 hover:text-blue-800">What is a Good GPA?</a></li>
              <li><a href="#college-use" className="text-blue-600 hover:text-blue-800">How Colleges Use GPA and Letter Grades</a></li>
              <li><a href="#faq" className="text-blue-600 hover:text-blue-800">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* SEO Content */}
          <div className="space-y-8">
            <section id="what-is-gpa">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What is GPA?</h2>
              <p className="text-gray-700 mb-4">
                GPA, or Grade Point Average, is a numerical representation of a student's academic performance
                calculated by assigning point values to letter grades and averaging them across all courses.
                The GPA to letter grade calculator helps students understand how their numerical GPA translates
                to the traditional letter grading system used in most educational institutions.
              </p>
              <p className="text-gray-700 mb-4">
                Most colleges and universities in the United States use a 4.0 scale, where an A is worth 4 points,
                a B is worth 3 points, and so on. Some schools use weighted GPAs that account for honors or AP courses,
                which can result in GPAs above 4.0. Understanding how to convert GPA to letter grades is essential
                for students applying to colleges, scholarships, and graduate programs.
              </p>
            </section>

            <section id="letter-grades">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What is a Letter Grade?</h2>
              <p className="text-gray-700 mb-4">
                Letter grades are the traditional grading system used in most educational institutions worldwide.
                The system uses letters A, B, C, D, and F to represent different levels of academic achievement,
                with A being the highest and F indicating failure. Many schools also use plus and minus modifiers
                (like A-, B+, C-) to provide more granular assessment of student performance.
              </p>
              <p className="text-gray-700 mb-4">
                The letter grade system provides an intuitive way to understand academic performance at a glance.
                Employers, graduate schools, and scholarship committees often look at both GPA and letter grades
                when evaluating applicants. Converting GPA to letter grades helps bridge the gap between numerical
                and traditional grading systems, making it easier for students to communicate their academic achievements.
              </p>
            </section>

            <section id="conversion-logic">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How GPA Converts to Letter Grades</h2>
              <p className="text-gray-700 mb-4">
                GPA to letter grade conversion follows standard ranges that have been established by most
                educational institutions. These ranges provide a consistent way to translate numerical GPAs
                into the familiar letter grading system. The conversion is based on performance thresholds
                that represent different levels of academic achievement.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Standard GPA to Letter Grade Conversion</h3>
                <p className="text-gray-700 mb-4">
                  The conversion uses the following ranges on a 4.0 GPA scale:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>A (3.85 - 4.0):</strong> Excellent performance, represents outstanding achievement</li>
                  <li><strong>A- (3.7 - 3.84):</strong> Very good performance, slightly below excellent</li>
                  <li><strong>B+ (3.3 - 3.69):</strong> Good performance above average</li>
                  <li><strong>B (3.0 - 3.29):</strong> Good performance, meets expectations</li>
                  <li><strong>B- (2.7 - 2.99):</strong> Satisfactory performance</li>
                  <li><strong>C+ (2.3 - 2.69):</strong> Adequate performance</li>
                  <li><strong>C (2.0 - 2.29):</strong> Minimum passing performance</li>
                  <li><strong>C- (1.7 - 1.99):</strong> Below average performance</li>
                  <li><strong>D (1.0 - 1.69):</strong> Poor performance, may not meet requirements</li>
                  <li><strong>F (Below 1.0):</strong> Failing performance</li>
                </ul>
              </div>

              <p className="text-gray-700 mb-4">
                Our GPA to letter grade calculator uses these standard ranges to provide accurate conversions.
                While some schools may have slight variations in their grading scales, these ranges represent
                the most commonly accepted standards in higher education.
              </p>
            </section>

            <section id="conversion-table">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">GPA to Letter Grade Chart</h2>
              <p className="text-gray-700 mb-6">
                Use this comprehensive conversion chart to understand how different GPA values correspond
                to letter grades. This table provides a quick reference for the standard 4.0 GPA scale conversion.
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        GPA Range
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Letter Grade
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {conversionTable.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {row.gpa}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-600">
                          {row.grade}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {row.grade === 'A' ? 'Outstanding achievement' :
                           row.grade === 'A-' ? 'Very good performance' :
                           row.grade === 'B+' ? 'Good performance above average' :
                           row.grade === 'B' ? 'Good performance' :
                           row.grade === 'B-' ? 'Satisfactory performance' :
                           row.grade === 'C+' ? 'Adequate performance' :
                           row.grade === 'C' ? 'Minimum passing' :
                           row.grade === 'C-' ? 'Below average' :
                           row.grade === 'D' ? 'Poor performance' :
                           'Failing performance'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Quick Reference Table</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        GPA
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Letter Grade
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {referenceTable.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {row.gpa}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-600">
                          {row.grade}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="good-gpa">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What is a Good GPA?</h2>
              <p className="text-gray-700 mb-4">
                A "good" GPA depends on your academic goals, field of study, and the specific requirements
                of colleges or programs you're interested in. However, there are some general benchmarks
                that most educational institutions and employers recognize as indicators of academic success.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-xl font-semibold text-green-900 mb-3">Excellent GPA (A Range)</h3>
                  <p className="text-green-700 mb-2"><strong>3.75 - 4.0:</strong> Exceptional performance</p>
                  <p className="text-green-700 mb-2"><strong>Letter Grade:</strong> A or A-</p>
                  <p className="text-green-700">Competitive for top universities and scholarships</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">Good GPA (B Range)</h3>
                  <p className="text-blue-700 mb-2"><strong>3.0 - 3.74:</strong> Above average performance</p>
                  <p className="text-blue-700 mb-2"><strong>Letter Grade:</strong> B+ to B-</p>
                  <p className="text-blue-700">Meets most college admission requirements</p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h3 className="text-xl font-semibold text-yellow-900 mb-3">Average GPA (C Range)</h3>
                  <p className="text-yellow-700 mb-2"><strong>2.0 - 2.99:</strong> Meets minimum requirements</p>
                  <p className="text-yellow-700 mb-2"><strong>Letter Grade:</strong> C+ to C-</p>
                  <p className="text-yellow-700">May limit some opportunities</p>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="text-xl font-semibold text-red-900 mb-3">Below Average GPA (D/F Range)</h3>
                  <p className="text-red-700 mb-2"><strong>Below 2.0:</strong> Academic difficulty</p>
                  <p className="text-red-700 mb-2"><strong>Letter Grade:</strong> D or F</p>
                  <p className="text-red-700">May require academic intervention</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                When evaluating what constitutes a "good" GPA, consider your personal circumstances and goals.
                A 3.5 GPA (B+ average) is generally considered good for most college applications, while
                competitive programs may require a 3.7 or higher. Graduate programs often look for GPAs
                above 3.0, though requirements vary by field and institution.
              </p>
            </section>

            <section id="college-use">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Colleges Use GPA and Letter Grades</h2>
              <p className="text-gray-700 mb-4">
                Colleges and universities use both GPA and letter grades in different ways throughout the
                admissions and academic evaluation process. Understanding how these metrics are applied can
                help students make informed decisions about their academic goals and college applications.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">College Admissions Process</h3>
              <p className="text-gray-700 mb-4">
                During college admissions, admissions officers primarily look at GPA as a standardized measure
                that allows comparison across different high schools with varying grading standards. Letter grades
                provide context for individual courses and help admissions officers understand the rigor of a
                student's curriculum. Both metrics are considered when evaluating academic preparedness.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Academic Standing and Honors</h3>
              <p className="text-gray-700 mb-4">
                Within colleges, GPA is typically used to determine academic standing, eligibility for honors
                programs, and graduation requirements. Letter grades are often used for individual course assessments
                and may influence decisions about academic probation or dismissal. Many universities have minimum
                GPA requirements for maintaining scholarships and participating in extracurricular activities.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Graduate and Professional School Applications</h3>
              <p className="text-gray-700 mb-4">
                Graduate programs and professional schools heavily weigh undergraduate GPA in admissions decisions.
                Many programs have minimum GPA requirements (often 3.0 or higher) and use GPA as a primary screening
                criterion. Letter grades from transcript reviews help admissions committees assess the quality
                and consistency of academic performance across different subject areas.
              </p>

              <p className="text-gray-700 mb-4">
                Understanding how to convert GPA to letter grades can be particularly useful for students applying
                to international institutions or programs that use different grading systems. Our calculator provides
                a reliable way to translate your academic achievements across different evaluation frameworks.
              </p>
            </section>

            <section id="faq">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <FAQ items={faqData} />
            </section>

            {/* Related Calculators */}
            <RelatedCalculators relatedIds={['gpa-percentage-calculator', 'college-gpa-calculator', 'high-school-gpa-calculator', 'weighted-gpa-calculator', '4-0-scale-gpa-calculator']} />

            {/* Authority Links */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Resources</h2>
              <p className="text-gray-700 mb-4">
                For more information about GPA systems and academic grading, visit these authoritative sources:
              </p>
              <ul className="space-y-2">
                <li>
                  <a href="https://nces.ed.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    National Center for Education Statistics (NCES)
                  </a> - Official U.S. education data and statistics
                </li>
                <li>
                  <a href="https://www.collegeboard.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    College Board
                  </a> - Information about college admissions and standardized testing
                </li>
                <li>
                  <a href="https://www.ed.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    U.S. Department of Education
                  </a> - Federal education policies and guidelines
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}