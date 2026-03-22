'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import SEOHead from '@/components/SEOHead';
import { FAQSchema, CalculatorSchema, BreadcrumbSchema, ArticleSchema } from '@/components/SchemaMarkup';

interface Course {
  id: string;
  name: string;
  creditHours: number;
  grade: string;
  courseType: 'Regular' | 'Honors' | 'AP';
}

const gradePoints: { [key: string]: number } = {
  A: 4.0,
  'A-': 3.7,
  'B+': 3.3,
  B: 3.0,
  'B-': 2.7,
  'C+': 2.3,
  C: 2.0,
  'C-': 1.7,
  D: 1.0,
  F: 0.0,
};

const FAQItem = ({ question, answer }: { question: string; answer: ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-500 transition">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 transition flex justify-between items-center font-semibold text-gray-800"
      >
        <span>{question}</span>
        <span className={`text-blue-600 transition ${open ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {open && (
        <div className="px-6 py-4 bg-white text-gray-700 border-t border-gray-200">
          <div>{answer}</div>
        </div>
      )}
    </div>
  );
};

export default function SeniorGPACalculator() {
  const [courses, setCourses] = useState<Course[]>([
    { id: '1', name: 'Finance', creditHours: 3, grade: 'A', courseType: 'Regular' },
    { id: '2', name: 'Business Strategy', creditHours: 4, grade: 'B+', courseType: 'Honors' },
    { id: '3', name: 'Economics', creditHours: 3, grade: 'A-', courseType: 'AP' },
  ]);

  const [totalCredits, setTotalCredits] = useState(0);
  const [totalGradePoints, setTotalGradePoints] = useState(0);
  const [seniorGPA, setSeniorGPA] = useState<number | null>(null);
  const [weightedGPA, setWeightedGPA] = useState<number | null>(null);
  const [useWeighted, setUseWeighted] = useState(true);

  const calculateGPA = () => {
    let credits = 0;
    let rawPoints = 0;
    let weightedPoints = 0;

    courses.forEach((course) => {
      const gradeValue = gradePoints[course.grade] || 0;
      const adjustedValue = gradeValue + (course.courseType === 'Honors' ? 0.5 : course.courseType === 'AP' ? 1.0 : 0);
      const courseCredit = Number(course.creditHours) || 0;

      const coursePoints = gradeValue * courseCredit;
      const courseWeightedPoints = adjustedValue * courseCredit;

      rawPoints += coursePoints;
      weightedPoints += courseWeightedPoints;
      credits += courseCredit;
    });

    setTotalCredits(credits);
    setTotalGradePoints(parseFloat(rawPoints.toFixed(2)));

    const gpaCalc = credits > 0 ? rawPoints / credits : 0;
    setSeniorGPA(parseFloat(gpaCalc.toFixed(2)));

    const weightedCalc = credits > 0 ? weightedPoints / credits : 0;
    setWeightedGPA(parseFloat(weightedCalc.toFixed(2)));
  };

  useEffect(() => {
    calculateGPA();
  }, [courses]);

  const addCourse = () => {
    const newId = Math.random().toString(36).slice(2, 11);
    setCourses((prev) => [...prev, { id: newId, name: '', creditHours: 3, grade: 'A', courseType: 'Regular' }]);
  };

  const removeCourse = (id: string) => {
    if (courses.length <= 1) return;
    setCourses((prev) => prev.filter((course) => course.id !== id));
  };

  const updateCourse = (id: string, field: keyof Course, value: any) => {
    setCourses((prev) =>
      prev.map((course) => (course.id === id ? { ...course, [field]: value } : course))
    );
  };

  const resetCalculator = () => {
    setCourses([
      { id: '1', name: '', creditHours: 3, grade: 'A', courseType: 'Regular' },
    ]);
    setTotalCredits(0);
    setTotalGradePoints(0);
    setSeniorGPA(null);
    setWeightedGPA(null);
    setUseWeighted(true);
  };

  const faqs = [
    {
      question: 'How do I calculate senior GPA?',
      answer:
        'To calculate senior GPA, multiply each class grade value by its credit hours to generate grade points, sum the grade points, then divide by total credit hours. The calculator above updates instantly with each entry.',
    },
    {
      question: 'Is senior GPA important for jobs?',
      answer:
        'Yes. A strong senior GPA shows employers consistent academic achievement and work ethic, especially for entry-level roles and internships. It may be requested during recruitment processes.',
    },
    {
      question: 'What is a good senior GPA?',
      answer:
        'A good senior GPA is typically 3.5 or higher on a 4.0 scale. 3.0+ is acceptable for many programs; 4.0 is exceptional and ideal for competitive scholarships and graduate applications.',
    },
    {
      question: 'Does senior GPA affect graduation?',
      answer:
        'It can. Many colleges require a minimum GPA, often 2.0 or 2.5, for graduation. Failing key senior courses may delay graduation or require retaking classes.',
    },
    {
      question: 'Can senior GPA improve cumulative GPA?',
      answer:
        'Absolutely. Strong senior GPA grades in high-credit courses can raise cumulative GPA, especially if earlier terms had lower performance. Conversely, lower grades may decrease your cumulative score.',
    },
  ];

  return (
    <>
      <SEOHead
        title="Senior GPA Calculator – Calculate Your Final Year GPA"
        description="Use our Senior GPA Calculator to calculate your GPA for your final year. Enter your grades and credit hours to get instant GPA results."
        canonical="/gpa-calculators/senior-gpa-calculator"
      />

      <CalculatorSchema
        title="Senior GPA Calculator"
        description="Senior GPA Calculator for final year students with weighted/unweighted options and instant calculation."
        url="/gpa-calculators/senior-gpa-calculator"
      />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://topgpacalculator.com/' },
          { name: 'GPA Calculators', url: 'https://topgpacalculator.com/gpa-calculators' },
          { name: 'Senior GPA Calculator', url: 'https://topgpacalculator.com/gpa-calculators/senior-gpa-calculator' },
        ]}
      />

      <ArticleSchema
        headline="Senior GPA Calculator"
        description="Senior GPA Calculator page for final year college students with modern calculator UX and deep SEO content."
        author="GPA Calculator"
        datePublished="2026-03-18"
        dateModified="2026-03-18"
      />

      <FAQSchema faqs={faqs} />

      <div className="bg-slate-100 text-gray-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm" aria-label="Breadcrumb">
            <Link href="/" className="text-blue-600 hover:underline">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/gpa-calculators" className="text-blue-600 hover:underline">GPA Calculators</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700">Senior GPA Calculator</span>
          </nav>
        </div>

        <div className="max-w-4xl mx-auto px-4 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="font-semibold text-blue-800 mb-2">Table of Contents</p>
            <ul className="text-sm text-blue-700 space-y-1">
              <li><a href="#calculator" className="hover:underline">Senior GPA Calculator</a></li>
              <li><a href="#what-is" className="hover:underline">What Is a Senior GPA</a></li>
              <li><a href="#how-to-calculate" className="hover:underline">How to Calculate Senior GPA</a></li>
              <li><a href="#formula" className="hover:underline">Senior GPA Formula Explained</a></li>
              <li><a href="#grade-scale" className="hover:underline">Grade Scale</a></li>
              <li><a href="#example" className="hover:underline">Example Senior GPA Calculation</a></li>
              <li><a href="#importance" className="hover:underline">Why Senior GPA Is Important</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
              <li><a href="#related" className="hover:underline">Related GPA Calculators</a></li>
            </ul>
          </div>
        </div>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-16" id="calculator">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Senior GPA Calculator</h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed">
              Senior GPA Calculator is designed to help final-year students accurately calculate senior year GPA and final year college GPA. Start by entering course names, credit hours, and letter grades. The calculator updates instantly and supports weighted GPA for Honors/AP classes.
            </p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-gradient-to-b from-blue-50 to-white rounded-lg shadow-lg p-6 md:p-8 border border-blue-200 mb-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
                <p className="text-3xl font-bold text-gray-800">Senior GPA Calculator</p>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 text-gray-700">Weighted GPA</label>
                  <input
                    type="checkbox"
                    checked={useWeighted}
                    onChange={() => setUseWeighted((prev) => !prev)}
                    className="w-4 h-4 cursor-pointer"
                    aria-label="Toggle weighted GPA"
                  />
                  <button
                    onClick={resetCalculator}
                    className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-md transition"
                  >
                    Reset
                  </button>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {courses.map((course, index) => (
                  <div
                    key={course.id}
                    className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition items-center"
                  >
                    <div className="sm:col-span-4">
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Course Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Advanced Physics"
                        value={course.name}
                        onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Credit Hours</label>
                      <input
                        type="number"
                        min={0.5}
                        step={0.5}
                        value={course.creditHours}
                        onChange={(e) => updateCourse(course.id, 'creditHours', Number(e.target.value) || 0)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Grade</label>
                      <select
                        value={course.grade}
                        onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                      >
                        <option value="A">A</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B">B</option>
                        <option value="B-">B-</option>
                        <option value="C+">C+</option>
                        <option value="C">C</option>
                        <option value="C-">C-</option>
                        <option value="D">D</option>
                        <option value="F">F</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Course Type</label>
                      <select
                        value={course.courseType}
                        onChange={(e) => updateCourse(course.id, 'courseType', e.target.value as Course['courseType'])}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                      >
                        <option value="Regular">Regular</option>
                        <option value="Honors">Honors (+0.5)</option>
                        <option value="AP">AP (+1.0)</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2 flex justify-end items-end">
                      <button
                        onClick={() => removeCourse(course.id)}
                        className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-xs font-semibold"
                        aria-label={`Remove course ${index + 1}`}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={addCourse}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition"
              >
                + Add Course
              </button>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 border border-gray-200 rounded-lg text-center">
                  <p className="text-sm text-gray-500">Total Credits</p>
                  <p className="text-3xl font-bold text-gray-800">{totalCredits.toFixed(1)}</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg text-center">
                  <p className="text-sm text-gray-500">Total Grade Points</p>
                  <p className="text-3xl font-bold text-gray-800">{totalGradePoints.toFixed(2)}</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg text-center">
                  <p className="text-sm text-gray-500">Senior GPA</p>
                  <p className="text-3xl font-bold text-gray-800">{seniorGPA !== null ? seniorGPA.toFixed(2) : '-'}</p>
                </div>
              </div>

              {useWeighted && (
                <div className="mt-4 p-4 border border-yellow-200 rounded-lg bg-yellow-50">
                  <p className="text-sm text-yellow-800">Weighted GPA with Honors/AP boost: {weightedGPA !== null ? weightedGPA.toFixed(2) : '-'}</p>
                </div>
              )}
            </div>

            <section className="space-y-8">
              <article className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
                <h2 id="what-is" className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">What Is a Senior GPA</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Senior GPA refers to the cumulative grade point average for your final year at college (or high school student seniors tracking GPA). It is usually calculated from courses taken in the final year and helps estimate your academic performance when graduating.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This calculator is optimized for seniors who need accurate final-year tracking for graduation planning, college applications, and job readiness. For final-year students, each class counts more toward your immediate future than earlier terms, making a dedicated senior GPA tool invaluable.
                </p>
              </article>

              <article className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
                <h2 id="what-makes-different" className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">What Makes It Different (Senior Focus)</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Senior GPA highlights the performance in your final academic year, separate from cumulative GPA. This is important because final-year courses are often more advanced and can include capstone projects or major-specific requirements.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Regular GPA tracks all years; senior GPA targets only the final year.</li>
                  <li>Universities and employers may weigh senior-year performance more heavily.</li>
                  <li>Weighted vs unweighted GPA matters: Honors/AP courses can increase weighted totals.</li>
                </ul>
              </article>

              <article className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
                <h2 id="how-to-calculate" className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">How the Senior GPA Calculator Works</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This tool calculates your senior GPA instantly as you add or change courses. It tracks course name, credit hours, grade, and course type (Regular, Honors, AP), then applies scoring rules automatically.
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Enter each subject or course name (optional but useful for records).</li>
                  <li>Add assigned credit hours (standard values like 1.0, 3.0, 4.0).</li>
                  <li>Select the letter grade for each course.</li>
                  <li>Choose course type to apply weight (Regular, Honors [+0.5], AP [+1.0]).</li>
                  <li>Read totals for credit hours, grade points, senior GPA, and weighted GPA.</li>
                </ol>
              </article>

              <article className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
                <h2 id="formula" className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Senior GPA Formula Explained</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The formula used by this calculator is standard and transparent: Total grade points divided by total credit hours. This matches academic reporting in most U.S. institutions.
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
                  <p className="font-mono text-gray-800">GPA = Total Grade Points ÷ Total Credit Hours</p>
                  <p className="font-mono text-gray-700">Total Grade Points = Σ(Grade Value × Credit Hours)</p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Grade values follow the 4.0 scale (A=4.0, B+=3.3, etc.). In weighted mode, Honors adds 0.5 and AP adds 1.0 before multiplication by credit hours.
                </p>
              </article>

              <article className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
                <h2 id="grade-scale" className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Grade Scale</h2>
                <p className="text-gray-700 leading-relaxed mb-4">This senior year calculator uses the standard 4.0 scale and calculates weighted benchmarks for honors/AP:</p>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left border border-gray-200">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-3 py-2">Grade</th>
                        <th className="px-3 py-2">Value</th>
                        <th className="px-3 py-2">Weighted (Honors/AP)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {['A','A-','B+','B','B-','C+','C','C-','D','F'].map((g) => (
                        <tr key={g} className="border-t border-gray-200">
                          <td className="px-3 py-2">{g}</td>
                          <td className="px-3 py-2">{gradePoints[g].toFixed(1)}</td>
                          <td className="px-3 py-2">{g === 'A' ? '4.0 / 4.5 / 5.0' : `${(gradePoints[g] + 0.5).toFixed(1)} / ${(gradePoints[g] + 1).toFixed(1)}`}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </article>

              <article className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
                <h2 id="example" className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Example Senior GPA Calculation</h2>
                <p className="text-gray-700 leading-relaxed mb-3">Real-world senior student scenario (5 subjects):</p>
                <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg mb-4">
                  <ul className="list-none space-y-2 text-gray-700">
                    <li><strong>Advanced Biology</strong>: A, 4 credits → 16.0 grade points (weighted AP 20.0)</li>
                    <li><strong>Calculus</strong>: A-, 4 credits → 14.8 grade points (weighted AP 18.0)</li>
                    <li><strong>English Literature</strong>: B+, 3 credits → 9.9 grade points (weighted Honors 10.8)</li>
                    <li><strong>Economics</strong>: B, 3 credits → 9.0 grade points</li>
                    <li><strong>History</strong>: A, 2 credits → 8.0 grade points</li>
                  </ul>
                </div>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Total Grade Points (unweighted):</strong> 57.7 (4+4+3+3+2 credits) = 16.0 + 14.8 + 9.9 + 9.0 + 8.0 = 57.7
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Total Credits:</strong> 16
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Senior GPA:</strong> 57.7 ÷ 16 = 3.61
                </p>
                <p className="font-mono bg-slate-50 border border-slate-200 rounded-lg p-3">
                  Raw formula: (16.0 + 14.8 + 9.9 + 9.0 + 8.0) / 16 = 3.61
                </p>
              </article>

              <article className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
                <h2 id="importance" className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Why Senior GPA Matters</h2>
                <p className="text-gray-700 leading-relaxed mb-4">Senior GPA is often a final indicator of your academic momentum as you apply for graduation, jobs, and further education. The calculator helps students understand these categories quickly:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>College Admissions:</strong> Admissions offices look at senior year performance to evaluate preparedness.</li>
                  <li><strong>Scholarships:</strong> Many awards set minimum senior GPA thresholds.</li>
                  <li><strong>Graduation Requirements:</strong> Requirements usually include a minimum final-year GPA.</li>
                  <li><strong>Career Opportunities:</strong> Employers may request senior GPA for internships and entry-level roles.</li>
                </ul>
              </article>

              <article className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
                <h2 id="features" className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Features of This Senior GPA Calculator</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Accurate weighted GPA calculation (Honors/AP boost).</li>
                  <li>Supports multiple subjects with flexible credit hours.</li>
                  <li>Instant real-time updates without manual refresh.</li>
                  <li>Clear output cards for credits, grade points, and GPA.</li>
                  <li>Mobile-responsive inputs and buttons.</li>
                  <li>Calculated results remain accessible as you modify entries.</li>
                </ul>
              </article>

              <article className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
                <h2 id="tips" className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Tips to Improve Senior GPA</h2>
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg text-gray-700 space-y-2">
                  <p><strong>Study strategies:</strong> schedule weekly review sessions, use active recall, and meet with instructors for feedback.</p>
                  <p><strong>Credit planning:</strong> balance high-credit core courses with lower-credit electives to protect GPA while earning essentials.</p>
                  <p><strong>Course selection tips:</strong> choose classes aligned with your strengths and required major subjects.</p>
                  <p><strong>Time management:</strong> block 2-3 hour study sessions each day and avoid last-minute efforts.</p>
                </div>
              </article>

              <article className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
                <h2 id="comparison" className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Comparison: Senior vs Other GPA Calculators</h2>
                <p className="text-gray-700 leading-relaxed mb-4">A direct comparison helps you choose the right tool for your goal:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-gray-800 mb-2">Senior GPA Calculator</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Final-year focus</li>
                      <li>Weighted GPA support</li>
                      <li>Designed for graduation planning</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-gray-800 mb-2">Simple GPA Calculator</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Lightweight and basic</li>
                      <li>Quick calculations with fewer inputs</li>
                      <li>Ideal for general use</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border border-gray-200 md:col-span-2">
                    <h3 className="font-semibold text-gray-800 mb-2">Quick GPA Calculator</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Fast entry mode for immediate GPA estimates</li>
                      <li>Simplified tracking for ongoing terms</li>
                      <li>Less configuration than senior model</li>
                    </ul>
                  </div>
                </div>
              </article>

              <article className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
                <h2 id="conclusion" className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Conclusion</h2>
                <p className="text-gray-700 leading-relaxed">
                  Use this Senior GPA Calculator to track your final year performance with confidence. The tool's accurate calculations and clear outputs make it easy to plan coursework, set targets, and improve performance as you approach graduation.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Start by filling in your current classes, and use the grade scenario features to simulate improvements. Strong senior GPA can unlock scholarships, graduate school chances, and better career opportunities.
                </p>
              </article>

              <article className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
                <h2 id="related" className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Related GPA Calculators</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  <Link href="/junior-gpa-calculator" className="block bg-white border border-gray-200 rounded-lg p-4 text-center font-medium text-blue-600 hover:bg-blue-50">Junior GPA Calculator</Link>
                  <Link href="/final-semester-gpa-calculator" className="block bg-white border border-gray-200 rounded-lg p-4 text-center font-medium text-blue-600 hover:bg-blue-50">Final Semester GPA Calculator</Link>
                  <Link href="/gpa-projection-calculator" className="block bg-white border border-gray-200 rounded-lg p-4 text-center font-medium text-blue-600 hover:bg-blue-50">GPA Projection Calculator</Link>
                  <Link href="/gpa-improvement-calculator" className="block bg-white border border-gray-200 rounded-lg p-4 text-center font-medium text-blue-600 hover:bg-blue-50">GPA Improvement Calculator</Link>
                  <Link href="/college-gpa-calculator" className="block bg-white border border-gray-200 rounded-lg p-4 text-center font-medium text-blue-600 hover:bg-blue-50">College GPA Calculator</Link>
                </div>
              </article>

              <article className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
                <h2 id="faq" className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-700 leading-relaxed mb-4">Find quick answers to the most common senior GPA questions.</p>
                <div className="space-y-3">
                  {faqs.map((faq) => (
                    <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </article>
            </section>
          </div>
        </section>
      </div>
    </>
  );
}
