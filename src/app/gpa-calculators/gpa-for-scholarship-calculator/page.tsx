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
}

const GpaForScholarshipCalculator: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([
    { id: 1, name: 'Biology', credits: 4, grade: 'A' },
    { id: 2, name: 'Chemistry', credits: 3, grade: 'B+' },
    { id: 3, name: 'Mathematics', credits: 3, grade: 'A-' },
  ]);
  const [scholarshipMinGpa, setScholarshipMinGpa] = useState<number>(3.5);
  const [calculatedGpa, setCalculatedGpa] = useState<number | null>(null);
  const [totalCredits, setTotalCredits] = useState<number>(0);
  const [totalGradePoints, setTotalGradePoints] = useState<number>(0);
  const [eligibility, setEligibility] = useState<string>('');

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

  const addCourse = () => {
    const newId = Math.max(...courses.map(c => c.id), 0) + 1;
    setCourses([...courses, { id: newId, name: '', credits: 3, grade: 'A' }]);
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

    // Determine eligibility
    if (gpa >= scholarshipMinGpa) {
      setEligibility(`Eligible - Your GPA (${gpa.toFixed(2)}) meets or exceeds the requirement (${scholarshipMinGpa})`);
    } else {
      setEligibility(`Not Eligible - Your GPA (${gpa.toFixed(2)}) is below the requirement (${scholarshipMinGpa}). Consider GPA improvement strategies.`);
    }
  };

  const resetCalculator = () => {
    setCourses([
      { id: 1, name: 'Biology', credits: 4, grade: 'A' },
      { id: 2, name: 'Chemistry', credits: 3, grade: 'B+' },
      { id: 3, name: 'Mathematics', credits: 3, grade: 'A-' },
    ]);
    setCalculatedGpa(null);
    setEligibility('');
  };

  useEffect(() => {
    calculateGpa();
  }, [courses, scholarshipMinGpa]);

  const faqData = [
    {
      question: 'What GPA do you need for scholarships?',
      answer: 'Scholarship GPA requirements vary widely. Basic scholarships typically require 2.5-3.0 GPA, merit scholarships need 3.0-3.5 GPA, competitive scholarships require 3.5-3.8 GPA, and elite scholarships demand 3.8+ GPA. Always check specific scholarship requirements.',
    },
    {
      question: 'Is a 3.5 GPA good for scholarships?',
      answer: 'Yes, a 3.5 GPA is excellent for scholarships. It qualifies you for most merit-based scholarships, competitive academic awards, and many prestigious scholarship programs. With a 3.5 GPA, you have access to a wide range of scholarship opportunities.',
    },
    {
      question: 'Can a 3.0 GPA get scholarships?',
      answer: 'Yes, a 3.0 GPA can qualify for many scholarships. While you may not be eligible for the most competitive merit scholarships, numerous scholarships, grants, and awards are available for students with GPAs in the 3.0 range, especially when combined with other qualifications.',
    },
    {
      question: 'How do scholarships calculate GPA?',
      answer: 'Scholarships typically calculate GPA using the standard formula: total grade points divided by total credit hours. Grade points are assigned as A=4.0, A-=3.7, B+=3.3, etc. Some scholarships use weighted GPA that accounts for honors/AP courses, while others use unweighted GPA.',
    },
    {
      question: 'What is the minimum GPA for merit scholarships?',
      answer: 'The minimum GPA for merit scholarships varies, but most require at least 3.0 GPA. Competitive merit scholarships often require 3.5+ GPA, while elite scholarships may require 3.8+ GPA. Some scholarships have lower minimums (2.5-3.0) but consider other factors like extracurricular activities.',
    },
  ];

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'GPA Calculators', url: '/gpa-calculators' },
    { name: 'GPA for Scholarship Calculator', url: '/gpa-for-scholarship-calculator' },
  ];

  return (
    <>
      <SEOHead
        title="GPA for Scholarship Calculator – Check Scholarship Eligibility"
        description="Use our GPA for Scholarship Calculator to estimate if you qualify for scholarships. Enter course grades and credit hours to calculate your GPA instantly."
      />
      <FAQSchema faqs={faqData} />
      <CalculatorSchema
        title="GPA for Scholarship Calculator"
        description="Calculate your GPA and check scholarship eligibility with our free online calculator."
        url="https://topgpacalculator.com/gpa-for-scholarship-calculator"
      />
      <OrganizationSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="GPA for Scholarship Calculator – Check Scholarship Eligibility"
        description="Use our GPA for Scholarship Calculator to estimate if you qualify for scholarships. Enter course grades and credit hours to calculate your GPA instantly."
        author="GPA Calculator Team"
        datePublished="2024-01-01"
        dateModified="2026-03-14"
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'GPA Calculators', href: '/gpa-calculators' },
            { label: 'GPA for Scholarship Calculator', href: '/gpa-for-scholarship-calculator' },
          ]}
        />

        <h1 className="text-4xl font-bold text-center mb-8">GPA for Scholarship Calculator</h1>

        {/* Table of Contents */}
        <div className="bg-gray-100 p-4 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><a href="#calculator" className="text-blue-600 hover:underline">GPA Calculator</a></li>
            <li><a href="#formula" className="text-blue-600 hover:underline">GPA Formula</a></li>
            <li><a href="#grade-scale" className="text-blue-600 hover:underline">Grade Scale</a></li>
            <li><a href="#requirements" className="text-blue-600 hover:underline">Scholarship GPA Requirements</a></li>
            <li><a href="#what-gpa" className="text-blue-600 hover:underline">What GPA Do You Need for Scholarships</a></li>
            <li><a href="#how-calculate" className="text-blue-600 hover:underline">How to Calculate GPA for Scholarships</a></li>
            <li><a href="#improve-gpa" className="text-blue-600 hover:underline">How to Increase Your GPA for Scholarships</a></li>
            <li><a href="#types" className="text-blue-600 hover:underline">Types of Scholarships Based on GPA</a></li>
            <li><a href="#example" className="text-blue-600 hover:underline">Example GPA Calculation</a></li>
            <li><a href="#faq" className="text-blue-600 hover:underline">Frequently Asked Questions</a></li>
            <li><a href="#related" className="text-blue-600 hover:underline">Related GPA Calculators</a></li>
          </ul>
        </div>

        {/* Calculator */}
        <section id="calculator" className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Calculate Your GPA for Scholarship Eligibility</h2>

          {/* Scholarship Minimum GPA Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Scholarship Minimum GPA Requirement (Optional)
            </label>
            <select
              value={scholarshipMinGpa}
              onChange={(e) => setScholarshipMinGpa(Number(e.target.value))}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={2.5}>2.5</option>
              <option value={3.0}>3.0</option>
              <option value={3.5}>3.5</option>
              <option value={3.7}>3.7</option>
              <option value={3.8}>3.8</option>
              <option value={4.0}>4.0</option>
            </select>
          </div>

          {/* Course Inputs */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Your Courses</h3>
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
                    placeholder="e.g., Biology"
                  />
                </div>
                <div className="w-24">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Credit Hours
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
              <h3 className="text-lg font-semibold mb-2">Your GPA Results</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">{calculatedGpa}</p>
              <p className="text-sm text-gray-700 mb-2">{eligibility}</p>
              <div className="text-xs text-gray-600">
                <p>Total Credits: {totalCredits}</p>
                <p>Total Grade Points: {totalGradePoints}</p>
              </div>
            </div>
          )}
        </section>

        {/* GPA Formula */}
        <section id="formula" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">GPA Formula</h2>
          <p className="mb-4">
            GPA = Total Grade Points ÷ Total Credit Hours
          </p>
          <p className="mb-4">
            Where Grade Points = Grade Value × Credit Hours
          </p>
          <p>
            This formula calculates your cumulative GPA by weighting each grade by the number of credit hours for that course.
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
          <h2 className="text-2xl font-semibold mb-4">Example GPA Calculation</h2>
          <p className="mb-4">
            Let's calculate GPA for a student with these courses:
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <ul className="space-y-2">
              <li>Biology (A, 4 credits): 4.0 × 4 = 16 grade points</li>
              <li>Chemistry (B+, 3 credits): 3.3 × 3 = 9.9 grade points</li>
              <li>Mathematics (A-, 3 credits): 3.7 × 3 = 11.1 grade points</li>
            </ul>
          </div>
          <p className="mb-4">
            Total Grade Points = 16 + 9.9 + 11.1 = 37
          </p>
          <p className="mb-4">
            Total Credits = 4 + 3 + 3 = 10
          </p>
          <p className="mb-4">
            GPA = 37 ÷ 10 = 3.7
          </p>
        </section>

        {/* Scholarship GPA Requirements */}
        <section id="requirements" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Scholarship GPA Requirements</h2>
          <p className="mb-4">
            Scholarship committees evaluate more than just GPA. They also consider extracurricular activities, leadership experience, community service, standardized test scores, and personal essays. However, GPA remains a critical eligibility factor.
          </p>
          <p className="mb-4">
            Typical scholarship GPA ranges include:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Merit scholarships:</strong> 3.5 – 4.0 GPA</li>
            <li><strong>Academic scholarships:</strong> 3.0 – 3.5 GPA</li>
            <li><strong>General scholarships:</strong> 2.5 – 3.0 GPA</li>
          </ul>
        </section>

        {/* What GPA Do You Need */}
        <section id="what-gpa" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What GPA Do You Need for Scholarships</h2>
          <p className="mb-4">
            The GPA required for scholarships varies significantly depending on the type and competitiveness of the award. Understanding these requirements helps you set realistic goals and identify suitable scholarship opportunities.
          </p>
          <h3 className="text-xl font-semibold mb-2">Basic Scholarships (2.5-3.0 GPA)</h3>
          <p className="mb-4">
            Many entry-level scholarships have minimum GPA requirements of 2.5 to 3.0. These include community-based awards, local organization scholarships, and some university departmental scholarships. While these may offer smaller amounts, they often have fewer applicants and higher acceptance rates.
          </p>
          <h3 className="text-xl font-semibold mb-2">Merit Scholarships (3.0-3.5 GPA)</h3>
          <p className="mb-4">
            Merit-based scholarships typically require a GPA between 3.0 and 3.5. These awards recognize academic achievement and are offered by universities, corporations, and foundations. They may be renewable for multiple years if you maintain the required GPA.
          </p>
          <h3 className="text-xl font-semibold mb-2">Competitive Scholarships (3.5-3.8 GPA)</h3>
          <p className="mb-4">
            Highly competitive scholarships, including national awards and prestigious university scholarships, often require GPAs of 3.5 to 3.8. These scholarships attract large numbers of applicants and may include full-tuition awards or full-ride scholarships.
          </p>
          <h3 className="text-xl font-semibold mb-2">Elite Scholarships (3.8+ GPA)</h3>
          <p className="mb-4">
            The most prestigious scholarships, such as Rhodes Scholarships, Gates Scholarships, and some Ivy League merit awards, require near-perfect GPAs of 3.8 or higher. These extremely competitive awards consider GPA as one of many factors in a holistic review process.
          </p>
        </section>

        {/* How to Calculate GPA */}
        <section id="how-calculate" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How to Calculate GPA for Scholarships</h2>
          <p className="mb-4">
            Calculating GPA for scholarship applications involves converting letter grades to numerical values and weighting them by credit hours. Most scholarships use unweighted GPA, but some consider weighted GPA for honors or AP courses.
          </p>
          <ol className="list-decimal list-inside space-y-2 mb-4">
            <li>Convert each letter grade to its numerical equivalent using the standard 4.0 scale</li>
            <li>Multiply each grade value by the course's credit hours to get grade points</li>
            <li>Sum all grade points from all courses</li>
            <li>Sum all credit hours attempted</li>
            <li>Divide total grade points by total credit hours</li>
          </ol>
          <p className="mb-4">
            For example, an A in a 3-credit course contributes 12 grade points (4.0 × 3), while a B+ in a 4-credit course contributes 13.2 grade points (3.3 × 4).
          </p>
          <p>
            Use our calculator above to automatically perform these calculations and check your eligibility against common scholarship GPA requirements.
          </p>
        </section>

        {/* How to Increase GPA */}
        <section id="improve-gpa" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How to Increase Your GPA for Scholarships</h2>
          <p className="mb-4">
            If your current GPA falls below scholarship requirements, there are several strategies to improve it before graduation. Focus on both immediate improvements and long-term academic success.
          </p>
          <h3 className="text-xl font-semibold mb-2">Academic Strategies</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Retake courses:</strong> Many schools allow grade replacement for repeated courses</li>
            <li><strong>Take honors/AP courses:</strong> These can boost weighted GPA even with same letter grades</li>
            <li><strong>Complete extra credit:</strong> Additional assignments can improve current semester grades</li>
            <li><strong>Seek tutoring:</strong> Academic support can help in challenging subjects</li>
            <li><strong>Improve study habits:</strong> Better time management and study techniques lead to higher grades</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Time Management Tips</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Create a study schedule and stick to it</li>
            <li>Prioritize difficult subjects early in the week</li>
            <li>Break large assignments into smaller tasks</li>
            <li>Minimize distractions during study time</li>
            <li>Get adequate sleep and maintain healthy habits</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Long-term Planning</h3>
          <p className="mb-4">
            Start improving your GPA as early as possible. Scholarship committees often look at GPA trends, so showing consistent improvement can be as important as your final GPA. Consider summer courses or online classes to boost your GPA before applying for scholarships.
          </p>
        </section>

        {/* Types of Scholarships */}
        <section id="types" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Types of Scholarships Based on GPA</h2>
          <p className="mb-4">
            Scholarships come in various forms, each with different GPA requirements and eligibility criteria. Understanding these categories helps you identify the most suitable opportunities for your academic profile.
          </p>
          <h3 className="text-xl font-semibold mb-2">Merit-Based Scholarships</h3>
          <p className="mb-4">
            Awarded based on academic achievement, typically requiring GPAs of 3.0 or higher. These scholarships recognize excellence in coursework and may be renewable for multiple years.
          </p>
          <h3 className="text-xl font-semibold mb-2">Academic Excellence Awards</h3>
          <p className="mb-4">
            Prestigious awards for students with exceptional GPAs (usually 3.5+). These often include full-tuition coverage and may be offered by universities or national organizations.
          </p>
          <h3 className="text-xl font-semibold mb-2">Departmental Scholarships</h3>
          <p className="mb-4">
            Offered by specific academic departments, these scholarships may have lower GPA requirements but prioritize students pursuing certain majors or fields of study.
          </p>
          <h3 className="text-xl font-semibold mb-2">University Scholarships</h3>
          <p className="mb-4">
            Institutional awards with varying GPA requirements. Some universities offer automatic scholarships based on GPA thresholds, while others consider GPA as part of a holistic review.
          </p>
          <h3 className="text-xl font-semibold mb-2">National Scholarships</h3>
          <p className="mb-4">
            Competitive awards like the National Merit Scholarship or Gates Scholarship, which typically require very high GPAs (3.8+) along with other outstanding qualifications.
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
            <Link href="/gpa-improvement-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg">
              <h3 className="font-bold mb-2">GPA Improvement Calculator</h3>
              <p className="text-sm text-gray-600">Plan strategies to raise your GPA.</p>
            </Link>
            <Link href="/gpa-projection-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg">
              <h3 className="font-bold mb-2">GPA Projection Calculator</h3>
              <p className="text-sm text-gray-600">Predict your future GPA.</p>
            </Link>
            <Link href="/required-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg">
              <h3 className="font-bold mb-2">Required GPA Calculator</h3>
              <p className="text-sm text-gray-600">Find GPA needed for specific goals.</p>
            </Link>
            <Link href="/term-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg">
              <h3 className="font-bold mb-2">Term GPA Calculator</h3>
              <p className="text-sm text-gray-600">Calculate GPA for a single term.</p>
            </Link>
          </div>
        </section>

        {/* External Links */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Additional Resources</h3>
          <ul className="space-y-2">
            <li><a href="https://www.collegeboard.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">College Board - Scholarship Search</a></li>
            <li><a href="https://studentaid.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Federal Student Aid - Scholarship Information</a></li>
            <li><a href="https://nces.ed.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">National Center for Education Statistics</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default GpaForScholarshipCalculator;
