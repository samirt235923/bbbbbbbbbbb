'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Breadcrumb from '../../../components/Breadcrumb';
import SEOHead from '../../../components/SEOHead';
import FAQ from '../../../components/FAQ';
import { FAQSchema, CalculatorSchema, OrganizationSchema, BreadcrumbSchema, ArticleSchema } from '../../../components/SchemaMarkup';

interface Course {
  id: number;
  name: string;
  credits: number;
  grade: string;
  type: string;
}

const FreshmanGpaCalculator: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([
    { id: 1, name: 'English Composition', credits: 3, grade: 'A', type: 'Regular' },
    { id: 2, name: 'Biology', credits: 4, grade: 'B+', type: 'Regular' },
    { id: 3, name: 'Mathematics', credits: 3, grade: 'A-', type: 'Regular' },
  ]);
  const [calculatedGpa, setCalculatedGpa] = useState<number | null>(null);
  const [totalCredits, setTotalCredits] = useState<number>(0);
  const [totalGradePoints, setTotalGradePoints] = useState<number>(0);

  const gradeScale = {
    'A': 4.0,
    'A-': 3.7,
    'B+': 3.3,
    'B': 3.0,
    'B-': 2.7,
    'C+': 2.3,
    'C': 2.0,
    'C-': 1.7,
    'D': 1.0,
    'F': 0.0,
  };

  const courseTypes = ['Regular', 'Honors', 'AP'];

  const addCourse = () => {
    const newId = Math.max(...courses.map(c => c.id), 0) + 1;
    setCourses([...courses, { id: newId, name: '', credits: 3, grade: 'A', type: 'Regular' }]);
  };

  const removeCourse = (id: number) => {
    if (courses.length > 1) {
      setCourses(courses.filter(course => course.id !== id));
    }
  };

  const updateCourse = (id: number, field: keyof Course, value: string | number) => {
    setCourses(courses.map(course =>
      course.id === id ? { ...course, [field]: value } : course
    ));
  };

  const calculateGpa = () => {
    let totalPoints = 0;
    let totalCreds = 0;

    courses.forEach(course => {
      const gradeValue = gradeScale[course.grade as keyof typeof gradeScale] || 0;
      totalPoints += gradeValue * course.credits;
      totalCreds += course.credits;
    });

    const gpa = totalCreds > 0 ? totalPoints / totalCreds : 0;
    setCalculatedGpa(Math.round(gpa * 100) / 100);
    setTotalCredits(totalCreds);
    setTotalGradePoints(Math.round(totalPoints * 10) / 10);
  };

  const resetCalculator = () => {
    setCourses([
      { id: 1, name: 'English Composition', credits: 3, grade: 'A', type: 'Regular' },
      { id: 2, name: 'Biology', credits: 4, grade: 'B+', type: 'Regular' },
      { id: 3, name: 'Mathematics', credits: 3, grade: 'A-', type: 'Regular' },
    ]);
    setCalculatedGpa(null);
  };

  useEffect(() => {
    calculateGpa();
  }, [courses]);

  const faqData = [
    {
      question: 'How do I calculate freshman GPA?',
      answer: 'To calculate your freshman GPA, multiply each course grade point value by the credit hours, sum all grade points, then divide by total credit hours. Use our calculator above to automatically perform these calculations.',
    },
    {
      question: 'Is freshman GPA important for college?',
      answer: 'Yes, freshman GPA is very important. It establishes your academic foundation, affects scholarships, internships, and graduate school applications. A strong freshman GPA can open many opportunities throughout your college career.',
    },
    {
      question: 'What is a good freshman GPA?',
      answer: 'A good freshman GPA is typically 3.0 or higher. Excellent GPAs (3.5+) can qualify for honors programs and competitive scholarships. Aim for consistency and improvement throughout your first year.',
    },
    {
      question: 'Can freshman GPA affect scholarships?',
      answer: 'Yes, freshman GPA significantly affects scholarship eligibility. Many scholarships require minimum GPAs, and your freshman year performance can determine renewal of existing scholarships and eligibility for new ones.',
    },
    {
      question: 'How many credits affect GPA?',
      answer: 'All credit hours from graded courses affect your GPA. Typically, freshman students take 12-18 credit hours per semester. The more credits you take, the more your grades impact your overall GPA.',
    },
  ];

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'GPA Calculators', url: '/gpa-calculators' },
    { name: 'Freshman GPA Calculator', url: '/freshman-gpa-calculator' },
  ];

  return (
    <>
      <SEOHead
        title="Freshman GPA Calculator – Calculate Your First Year GPA"
        description="Use our Freshman GPA Calculator to calculate your GPA for your first year in college. Enter course grades and credit hours to get instant results."
        canonical="/gpa-calculators/freshman-gpa-calculator"
      />
      <FAQSchema faqs={faqData} />
      <CalculatorSchema
        title="Freshman GPA Calculator"
        description="Calculate your freshman year GPA with our easy-to-use online calculator."
        url="https://topgpacalculator.com/freshman-gpa-calculator"
      />
      <OrganizationSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Freshman GPA Calculator – Calculate Your First Year GPA"
        description="Use our Freshman GPA Calculator to calculate your GPA for your first year in college. Enter course grades and credit hours to get instant results."
        author="GPA Calculator Team"
        datePublished="2024-01-01"
        dateModified="2026-03-14"
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'GPA Calculators', href: '/gpa-calculators' },
            { label: 'Freshman GPA Calculator', href: '/freshman-gpa-calculator' },
          ]}
        />

        <h1 className="text-4xl font-bold text-center mb-8">Freshman GPA Calculator</h1>

        {/* Table of Contents */}
        <div className="bg-gray-100 p-4 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><a href="#calculator" className="text-blue-600 hover:underline">GPA Calculator</a></li>
            <li><a href="#formula" className="text-blue-600 hover:underline">Freshman GPA Formula</a></li>
            <li><a href="#grade-scale" className="text-blue-600 hover:underline">Grade Scale</a></li>
            <li><a href="#what-is" className="text-blue-600 hover:underline">What Is a Freshman GPA</a></li>
            <li><a href="#how-calculate" className="text-blue-600 hover:underline">How to Calculate Freshman GPA</a></li>
            <li><a href="#example" className="text-blue-600 hover:underline">Example Freshman GPA Calculation</a></li>
            <li><a href="#importance" className="text-blue-600 hover:underline">Why Freshman GPA Is Important</a></li>
            <li><a href="#faq" className="text-blue-600 hover:underline">Frequently Asked Questions</a></li>
            <li><a href="#related" className="text-blue-600 hover:underline">Related GPA Calculators</a></li>
          </ul>
        </div>

        {/* Calculator */}
        <section id="calculator" className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Calculate Your Freshman GPA</h2>

          {/* Course Inputs */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Your First Year Courses</h3>
            {courses.map((course) => (
              <div key={course.id} className="flex flex-wrap gap-4 items-end mb-4 p-4 border border-gray-200 rounded-lg">
                <div className="flex-1 min-w-0">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Course Name
                  </label>
                  <input
                    type="text"
                    value={course.name}
                    onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., English Composition"
                  />
                </div>
                <div className="w-20">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Credits
                  </label>
                  <input
                    type="number"
                    value={course.credits}
                    onChange={(e) => updateCourse(course.id, 'credits', Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="0"
                    max="6"
                    step="0.5"
                  />
                </div>
                <div className="w-20">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Grade
                  </label>
                  <select
                    value={course.grade}
                    onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="A">A (4.0)</option>
                    <option value="A-">A- (3.7)</option>
                    <option value="B+">B+ (3.3)</option>
                    <option value="B">B (3.0)</option>
                    <option value="B-">B- (2.7)</option>
                    <option value="C+">C+ (2.3)</option>
                    <option value="C">C (2.0)</option>
                    <option value="C-">C- (1.7)</option>
                    <option value="D">D (1.0)</option>
                    <option value="F">F (0.0)</option>
                  </select>
                </div>
                <div className="w-24">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type
                  </label>
                  <select
                    value={course.type}
                    onChange={(e) => updateCourse(course.id, 'type', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {courseTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                {courses.length > 1 && (
                  <button
                    onClick={() => removeCourse(course.id)}
                    className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <div className="flex gap-4">
              <button
                onClick={addCourse}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Add Course
              </button>
              <button
                onClick={resetCalculator}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Reset Calculator
              </button>
            </div>
          </div>

          {/* Results */}
          {calculatedGpa !== null && (
            <div className="bg-green-100 p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">Your Freshman GPA Results</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">{calculatedGpa}</p>
              <div className="text-xs text-gray-600">
                <p>Total Credits: {totalCredits}</p>
                <p>Total Grade Points: {totalGradePoints}</p>
              </div>
            </div>
          )}
        </section>

        {/* GPA Formula */}
        <section id="formula" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Freshman GPA Formula</h2>
          <p className="mb-4">
            Freshman GPA = Total Grade Points ÷ Total Credit Hours
          </p>
          <p className="mb-4">
            Where Grade Points = Grade Value × Credit Hours
          </p>
          <p>
            This formula calculates your cumulative GPA for your first year by weighting each grade by the number of credit hours for that course.
          </p>
        </section>

        {/* Grade Scale */}
        <section id="grade-scale" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">GPA Grade Scale Reference Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Grade</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">GPA Value</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-2">A</td>
                  <td className="border border-gray-300 px-4 py-2">4.0</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">A-</td>
                  <td className="border border-gray-300 px-4 py-2">3.7</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-2">B+</td>
                  <td className="border border-gray-300 px-4 py-2">3.3</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">B</td>
                  <td className="border border-gray-300 px-4 py-2">3.0</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-2">B-</td>
                  <td className="border border-gray-300 px-4 py-2">2.7</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">C+</td>
                  <td className="border border-gray-300 px-4 py-2">2.3</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-2">C</td>
                  <td className="border border-gray-300 px-4 py-2">2.0</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">C-</td>
                  <td className="border border-gray-300 px-4 py-2">1.7</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-2">D</td>
                  <td className="border border-gray-300 px-4 py-2">1.0</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">F</td>
                  <td className="border border-gray-300 px-4 py-2">0.0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Example Calculation */}
        <section id="example" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Example Freshman GPA Calculation</h2>
          <p className="mb-4">
            Let's calculate GPA for a freshman student with these courses:
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <ul className="space-y-2">
              <li>English Composition (A, 3 credits): 4.0 × 3 = 12 grade points</li>
              <li>Biology (B+, 4 credits): 3.3 × 4 = 13.2 grade points</li>
              <li>Mathematics (A-, 3 credits): 3.7 × 3 = 11.1 grade points</li>
            </ul>
          </div>
          <p className="mb-4">
            Total Grade Points = 12 + 13.2 + 11.1 = 36.3
          </p>
          <p className="mb-4">
            Total Credits = 3 + 4 + 3 = 10
          </p>
          <p className="mb-4">
            Freshman GPA = 36.3 ÷ 10 = 3.63
          </p>
        </section>

        {/* What Is a Freshman GPA */}
        <section id="what-is" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What Is a Freshman GPA</h2>
          <p className="mb-4">
            A freshman GPA is your Grade Point Average calculated from all courses taken during your first year of college. It represents your academic performance in your initial college semester(s) and serves as the foundation for your overall college GPA.
          </p>
          <p className="mb-4">
            Freshman year is crucial because it sets the tone for your entire college experience. Your freshman GPA will appear on your transcript and influence many important aspects of your college journey, including academic standing, scholarship eligibility, and future opportunities.
          </p>
          <p>
            Unlike high school GPA, college GPA calculations are standardized across institutions, making it easier to understand and compare academic performance. Most colleges use the 4.0 scale, though some may use weighted scales for honors or AP courses.
          </p>
        </section>

        {/* How to Calculate Freshman GPA */}
        <section id="how-calculate" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How to Calculate Freshman GPA</h2>
          <p className="mb-4">
            Calculating your freshman GPA involves converting letter grades to numerical values and weighting them by credit hours. Here's the step-by-step process:
          </p>
          <ol className="list-decimal list-inside space-y-2 mb-4">
            <li>Convert each letter grade to its numerical equivalent (A=4.0, B=3.0, etc.)</li>
            <li>Multiply each grade value by the number of credit hours for that course</li>
            <li>Sum all the grade points from all your courses</li>
            <li>Sum all the credit hours you attempted</li>
            <li>Divide total grade points by total credit hours</li>
          </ol>
          <p className="mb-4">
            For example, if you earn an A (4.0) in a 3-credit course, you get 12 grade points. If you earn a B+ (3.3) in a 4-credit course, you get 13.2 grade points.
          </p>
          <p>
            Our calculator above automates this process, allowing you to quickly calculate your freshman GPA by simply entering your course information.
          </p>
        </section>

        {/* Why Freshman GPA Is Important */}
        <section id="importance" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why Freshman GPA Is Important</h2>
          <p className="mb-4">
            Your freshman GPA plays a critical role in your college success and future opportunities. Here's why it matters:
          </p>
          <h3 className="text-xl font-semibold mb-2">Scholarships and Financial Aid</h3>
          <p className="mb-4">
            Many scholarships require minimum GPA thresholds, and your freshman performance can determine eligibility for renewal of existing awards and qualification for new scholarships. A strong freshman GPA can save you thousands of dollars in tuition costs.
          </p>
          <h3 className="text-xl font-semibold mb-2">Internships and Job Opportunities</h3>
          <p className="mb-4">
            Employers and internship programs often review GPA when considering candidates. A solid freshman GPA demonstrates your ability to handle college-level coursework and can make you more competitive for valuable work experience opportunities.
          </p>
          <h3 className="text-xl font-semibold mb-2">Graduate School Applications</h3>
          <p className="mb-4">
            Graduate and professional schools consider your entire academic record, but your freshman year performance sets expectations for your college career. A strong start can open doors to advanced degree programs and competitive fellowships.
          </p>
          <h3 className="text-xl font-semibold mb-2">Academic Standing and Honors</h3>
          <p className="mb-4">
            Colleges use GPA to determine academic standing, probation status, and eligibility for honors programs. Maintaining a good freshman GPA helps you stay in good academic standing and may qualify you for honors societies or special academic programs.
          </p>
          <h3 className="text-xl font-semibold mb-2">Transfer Opportunities</h3>
          <p className="mb-4">
            If you plan to transfer to another institution, your freshman GPA will be a key factor in admissions decisions. A strong academic start makes you more attractive to competitive programs and can improve your chances of transferring to your dream school.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-8">
          <FAQ items={faqData} />
        </section>

        {/* Related Calculators */}
        <section id="related" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related GPA Calculators</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/college-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg">
              <h3 className="font-bold mb-2">College GPA Calculator</h3>
              <p className="text-sm text-gray-600">Calculate your overall college GPA.</p>
            </Link>
            <Link href="/term-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg">
              <h3 className="font-bold mb-2">Term GPA Calculator</h3>
              <p className="text-sm text-gray-600">Calculate GPA for a single term.</p>
            </Link>
            <Link href="/gpa-improvement-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg">
              <h3 className="font-bold mb-2">GPA Improvement Calculator</h3>
              <p className="text-sm text-gray-600">Plan strategies to raise your GPA.</p>
            </Link>
            <Link href="/gpa-projection-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg">
              <h3 className="font-bold mb-2">GPA Projection Calculator</h3>
              <p className="text-sm text-gray-600">Predict your future GPA.</p>
            </Link>
            <Link href="/credit-hour-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg">
              <h3 className="font-bold mb-2">Credit Hour GPA Calculator</h3>
              <p className="text-sm text-gray-600">Calculate GPA with credit weighting.</p>
            </Link>
          </div>
        </section>

        {/* External Links */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Additional Resources</h3>
          <ul className="space-y-2">
            <li><a href="https://www.collegeboard.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">College Board - College Planning Resources</a></li>
            <li><a href="https://nces.ed.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">National Center for Education Statistics</a></li>
            <li><a href="https://www.ed.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">U.S. Department of Education</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FreshmanGpaCalculator;