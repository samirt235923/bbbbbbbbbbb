'use client';

import React, { useState, useEffect } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import SEOHead from '@/components/SEOHead';
import FAQ from '@/components/FAQ';
import { FAQSchema, ArticleSchema } from '@/components/SchemaMarkup';
import RelatedCalculators from '@/components/RelatedCalculators';

interface Course {
  id: number;
  name: string;
  credits: number;
  grade: string;
  gradePoints: number;
}

export default function TermGPACalculator() {
  const [courses, setCourses] = useState<Course[]>([
    { id: 1, name: 'Course 1', credits: 3, grade: 'A', gradePoints: 4.0 }
  ]);
  const [results, setResults] = useState<{
    termGPA?: number;
    totalCredits?: number;
    totalGradePoints?: number;
    letterGrade?: string;
  }>({});

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
    'F': 0.0
  };

  const gradeOptions = Object.keys(gradeScale);

  // Calculate term GPA
  const calculateTermGPA = () => {
    if (courses.length === 0) {
      setResults({});
      return;
    }

    const totalGradePoints = courses.reduce((sum, course) => sum + (course.gradePoints * course.credits), 0);
    const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);

    if (totalCredits === 0) {
      setResults({});
      return;
    }

    const termGPA = totalGradePoints / totalCredits;

    // Determine letter grade equivalent
    let letterGrade = 'F';
    if (termGPA >= 3.7) letterGrade = 'A';
    else if (termGPA >= 3.3) letterGrade = 'A-';
    else if (termGPA >= 3.0) letterGrade = 'B+';
    else if (termGPA >= 2.7) letterGrade = 'B';
    else if (termGPA >= 2.3) letterGrade = 'B-';
    else if (termGPA >= 2.0) letterGrade = 'C+';
    else if (termGPA >= 1.7) letterGrade = 'C';
    else if (termGPA >= 1.3) letterGrade = 'C-';
    else if (termGPA >= 1.0) letterGrade = 'D';

    setResults({
      termGPA: Math.round(termGPA * 1000) / 1000,
      totalCredits,
      totalGradePoints: Math.round(totalGradePoints * 100) / 100,
      letterGrade
    });
  };

  useEffect(() => {
    calculateTermGPA();
  }, [courses]);

  const addCourse = () => {
    const newId = Math.max(...courses.map(c => c.id)) + 1;
    setCourses([...courses, { id: newId, name: `Course ${newId}`, credits: 3, grade: 'A', gradePoints: 4.0 }]);
  };

  const removeCourse = (id: number) => {
    if (courses.length > 1) {
      setCourses(courses.filter(course => course.id !== id));
    }
  };

  const updateCourse = (id: number, field: keyof Course, value: string | number) => {
    setCourses(courses.map(course => {
      if (course.id === id) {
        const updatedCourse = { ...course, [field]: value };
        if (field === 'grade') {
          updatedCourse.gradePoints = gradeScale[value as keyof typeof gradeScale];
        }
        return updatedCourse;
      }
      return course;
    }));
  };

  const clearCalculator = () => {
    setCourses([{ id: 1, name: 'Course 1', credits: 3, grade: 'A', gradePoints: 4.0 }]);
    setResults({});
  };

  const gradeScaleTable = [
    { grade: 'A', points: 4.0, description: 'Excellent' },
    { grade: 'A-', points: 3.7, description: 'Very Good' },
    { grade: 'B+', points: 3.3, description: 'Good Plus' },
    { grade: 'B', points: 3.0, description: 'Good' },
    { grade: 'B-', points: 2.7, description: 'Satisfactory' },
    { grade: 'C+', points: 2.3, description: 'Adequate Plus' },
    { grade: 'C', points: 2.0, description: 'Adequate' },
    { grade: 'C-', points: 1.7, description: 'Below Average' },
    { grade: 'D', points: 1.0, description: 'Poor' },
    { grade: 'F', points: 0.0, description: 'Failing' },
  ];

  const faqData = [
    {
      question: "How do I calculate my term GPA?",
      answer: "To calculate your term GPA, use our calculator above. Enter each course name, credit hours, and grade. The calculator will automatically calculate your term GPA using the formula: Term GPA = Total Grade Points ÷ Total Credit Hours, where Grade Points = Grade Value × Credit Hours for each course."
    },
    {
      question: "What grades do I need to improve my semester GPA?",
      answer: "To improve your semester GPA, aim for higher grades in your courses. An A (4.0) will significantly boost your GPA, while B grades (3.0) provide moderate improvement. Focus on courses with more credit hours, as they have greater impact on your overall term GPA. Use our calculator to experiment with different grade scenarios."
    },
    {
      question: "Is a 3.0 term GPA good?",
      answer: "A 3.0 term GPA is generally considered good and represents a B average. It's above the typical minimum requirements for many academic programs and scholarships. However, whether it's 'good' depends on your academic goals and institutional standards. Some competitive programs may require higher GPAs (3.5+), while others may accept 3.0 as satisfactory."
    },
    {
      question: "How is term GPA different from cumulative GPA?",
      answer: "Term GPA calculates your grade point average for a single semester or term, while cumulative GPA represents your overall GPA across all completed coursework. Term GPA focuses only on courses taken in a specific period, while cumulative GPA includes all courses from your entire academic career. Both are important for academic planning and progress tracking."
    },
    {
      question: "Can I calculate my GPA for one semester only?",
      answer: "Yes, our term GPA calculator is specifically designed to calculate GPA for a single semester or term. Simply enter the courses, credit hours, and grades for that specific term. This is useful for tracking semester performance, setting goals, and understanding how your grades in individual terms contribute to your overall academic progress."
    }
  ];

  return (
    <>
      <SEOHead
        title="Term GPA Calculator – Calculate Your Semester GPA"
        description="Use our Term GPA Calculator to calculate your GPA for a semester or term. Enter course names, credits, and grades to calculate your term GPA instantly with accurate results."
        canonical="/gpa-calculators/term-gpa-calculator"
      />

      <ArticleSchema
        headline="Term GPA Calculator – Calculate Your Semester GPA"
        description="Learn how to calculate your GPA for a semester or term. Includes term GPA formulas, examples, and strategies for academic success."
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
              { label: 'Term GPA Calculator', href: '/gpa-calculators/term-gpa-calculator' }
            ]}
          />

          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Term GPA Calculator
          </h1>

          {/* Calculator Interface */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Enter Your Courses</h3>
              {courses.map((course, index) => (
                <div key={course.id} className="flex items-center gap-4 mb-3 p-4 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Course {index + 1}:</span>
                  <div className="flex-1 grid grid-cols-3 gap-4">
                    <div>
                      <input
                        type="text"
                        value={course.name}
                        onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                        placeholder="Course Name"
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        value={course.credits}
                        onChange={(e) => updateCourse(course.id, 'credits', parseInt(e.target.value) || 0)}
                        placeholder="Credits"
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                        min="1"
                        max="6"
                      />
                    </div>
                    <div>
                      <select
                        value={course.grade}
                        onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                      >
                        {gradeOptions.map(grade => (
                          <option key={grade} value={grade}>
                            {grade} ({gradeScale[grade as keyof typeof gradeScale]})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  {courses.length > 1 && (
                    <button
                      onClick={() => removeCourse(course.id)}
                      className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}

              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={addCourse}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  Add Course
                </button>
                <button
                  onClick={clearCalculator}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                >
                  Clear All
                </button>
              </div>

              {/* Results */}
              {results.termGPA !== undefined && (
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Term GPA Results</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-blue-700 text-2xl font-bold">
                          {results.termGPA}
                        </p>
                        <p className="text-blue-600 text-sm">Term GPA</p>
                      </div>
                      <div>
                        <p className="text-blue-700 text-xl font-semibold">
                          {results.letterGrade}
                        </p>
                        <p className="text-blue-600 text-sm">Letter Grade Equivalent</p>
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-blue-600">
                      <p>Total Grade Points: {results.totalGradePoints}</p>
                      <p>Total Credits: {results.totalCredits}</p>
                    </div>
                  </div>

                  {/* GPA Quality Indicator */}
                  <div className={`border rounded-md p-4 ${
                    results.termGPA >= 3.7 ? 'bg-green-50 border-green-200' :
                    results.termGPA >= 3.0 ? 'bg-blue-50 border-blue-200' :
                    results.termGPA >= 2.0 ? 'bg-yellow-50 border-yellow-200' :
                    'bg-red-50 border-red-200'
                  }`}>
                    <h3 className="text-lg font-semibold mb-2" style={{
                      color: results.termGPA >= 3.7 ? '#166534' :
                             results.termGPA >= 3.0 ? '#1e40af' :
                             results.termGPA >= 2.0 ? '#92400e' : '#dc2626'
                    }}>
                      GPA Performance Level
                    </h3>
                    <p style={{
                      color: results.termGPA >= 3.7 ? '#166534' :
                             results.termGPA >= 3.0 ? '#1e40af' :
                             results.termGPA >= 2.0 ? '#92400e' : '#dc2626'
                    }}>
                      {results.termGPA >= 3.7 ? 'Excellent performance! You\'re achieving outstanding results.' :
                       results.termGPA >= 3.0 ? 'Good performance! You\'re meeting academic expectations.' :
                       results.termGPA >= 2.0 ? 'Satisfactory performance. Consider strategies to improve.' :
                       'Performance needs improvement. Seek academic support and develop better study habits.'}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              <li><a href="#what-is-term-gpa" className="text-blue-600 hover:text-blue-800">What is a Term GPA</a></li>
              <li><a href="#how-to-calculate" className="text-blue-600 hover:text-blue-800">How to Calculate Your Term GPA</a></li>
              <li><a href="#grade-scale-reference" className="text-blue-600 hover:text-blue-800">GPA Grade Scale Reference</a></li>
              <li><a href="#example-calculation" className="text-blue-600 hover:text-blue-800">Example Term GPA Calculation</a></li>
              <li><a href="#tips-improve" className="text-blue-600 hover:text-blue-800">Tips to Improve Your Term GPA</a></li>
              <li><a href="#term-gpa-impact" className="text-blue-600 hover:text-blue-800">How Term GPA Affects Overall GPA and Academic Planning</a></li>
              <li><a href="#faq" className="text-blue-600 hover:text-blue-800">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* SEO Content */}
          <div className="space-y-8">
            <section id="what-is-term-gpa">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What is a Term GPA</h2>
              <p className="text-gray-700 mb-4">
                A term GPA, also commonly referred to as semester GPA, is a critical academic metric that measures
                your performance during a specific academic period, typically a semester or term. This calculation
                provides a focused snapshot of your academic achievement within a defined timeframe, offering valuable
                insights into your study habits, course mastery, and overall academic progress.
              </p>
              <p className="text-gray-700 mb-4">
                Unlike cumulative GPA which represents your entire academic career, term GPA isolates performance
                within a single academic period. This focused approach allows students, educators, and academic
                advisors to identify strengths, weaknesses, and trends in academic performance. Whether you're
                tracking semester-by-semester progress or preparing for academic reviews, understanding your term
                GPA is essential for making informed decisions about your educational journey.
              </p>
              <p className="text-gray-700 mb-4">
                Term GPA calculations typically span 12-18 weeks of academic instruction, though the exact duration
                varies by institution and academic calendar. During this period, every assignment, quiz, exam, and
                project contributes to your final course grades, which are then weighted by credit hours to determine
                your overall term performance. This system ensures that more demanding courses have appropriate
                influence on your academic record.
              </p>
            </section>

            <section id="how-to-calculate">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Calculate Your Term GPA</h2>
              <p className="text-gray-700 mb-4">
                Calculating your term GPA involves a straightforward mathematical process that combines your course
                grades with their respective credit hours. This weighted average ensures that courses with more
                academic rigor have greater influence on your overall GPA calculation, providing a more accurate
                representation of your academic performance.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Term GPA Formula</h3>
                <p className="text-gray-700 mb-2"><strong>Term GPA = Total Grade Points ÷ Total Credit Hours</strong></p>
                <p className="text-gray-700 mb-4">Where:</p>
                <ul className="text-gray-700 ml-6">
                  <li>• <strong>Grade Points</strong> = Grade Value × Credit Hours (for each course)</li>
                  <li>• <strong>Total Grade Points</strong> = Sum of all Grade Points</li>
                  <li>• <strong>Total Credit Hours</strong> = Sum of all course credit hours</li>
                  <li>• <strong>Grade Value</strong> = GPA points (A=4.0, B=3.0, C=2.0, D=1.0, F=0.0)</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Step-by-Step Calculation Process</h3>
              <ol className="text-gray-700 space-y-2 ml-6">
                <li><strong>1. List Your Courses:</strong> Gather all courses taken during the term with their final grades and credit hours.</li>
                <li><strong>2. Convert Grades to Points:</strong> Use the standard GPA scale to convert letter grades to numerical values.</li>
                <li><strong>3. Calculate Grade Points:</strong> Multiply each course's grade value by its credit hours.</li>
                <li><strong>4. Sum Grade Points:</strong> Add up all the grade points from all courses.</li>
                <li><strong>5. Sum Credit Hours:</strong> Add up the credit hours for all courses.</li>
                <li><strong>6. Divide:</strong> Divide total grade points by total credit hours to get your term GPA.</li>
              </ol>

              <p className="text-gray-700 mb-4">
                Our calculator automates this entire process, allowing you to input your course information and
                receive instant, accurate term GPA calculations. The tool handles all the mathematical heavy lifting,
                ensuring precision while providing immediate feedback on your academic performance.
              </p>
            </section>

            <section id="grade-scale-reference">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">GPA Grade Scale Reference</h2>
              <p className="text-gray-700 mb-6">
                Understanding the GPA grade scale is essential for accurate term GPA calculations. This standard
                4.0 scale, used by most colleges and universities, converts letter grades to numerical values that
                determine your GPA. Each grade represents a specific level of academic achievement and carries
                corresponding GPA points that influence your overall academic record.
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Letter Grade
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        GPA Points
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {gradeScaleTable.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-600">
                          {row.grade}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {row.points}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {row.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mt-4">
                This standardized grading scale ensures consistency across institutions and provides a universal
                method for evaluating academic performance. Understanding how each grade contributes to your term
                GPA helps you set realistic academic goals and make informed decisions about your course load
                and study strategies.
              </p>
            </section>

            <section id="example-calculation">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Example Term GPA Calculation</h2>
              <p className="text-gray-700 mb-4">
                Let's walk through a comprehensive example to demonstrate how term GPA calculation works in practice.
                This example shows a student who completed four courses during a semester, providing a realistic
                scenario for understanding the calculation process and its impact on academic performance.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Semester Course Example</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-300 rounded-lg mb-4">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">Course</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">Grade</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">Credits</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">Grade Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-2 text-sm">Calculus</td>
                        <td className="px-4 py-2 text-sm font-semibold text-blue-600">A (4.0)</td>
                        <td className="px-4 py-2 text-sm">4</td>
                        <td className="px-4 py-2 text-sm font-semibold">16.0</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-2 text-sm">English Literature</td>
                        <td className="px-4 py-2 text-sm font-semibold text-blue-600">B+ (3.3)</td>
                        <td className="px-4 py-2 text-sm">3</td>
                        <td className="px-4 py-2 text-sm font-semibold">9.9</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-2 text-sm">Biology</td>
                        <td className="px-4 py-2 text-sm font-semibold text-blue-600">A- (3.7)</td>
                        <td className="px-4 py-2 text-sm">4</td>
                        <td className="px-4 py-2 text-sm font-semibold">14.8</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-2 text-sm">History</td>
                        <td className="px-4 py-2 text-sm font-semibold text-blue-600">B (3.0)</td>
                        <td className="px-4 py-2 text-sm">3</td>
                        <td className="px-4 py-2 text-sm font-semibold">9.0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="font-semibold text-blue-900 mb-2">Calculation Breakdown:</h4>
                <div className="bg-white p-4 rounded mb-4">
                  <p className="text-blue-700 mb-2">
                    <strong>Total Grade Points:</strong> 16.0 + 9.9 + 14.8 + 9.0 = 49.7
                  </p>
                  <p className="text-blue-700 mb-2">
                    <strong>Total Credit Hours:</strong> 4 + 3 + 4 + 3 = 14
                  </p>
                  <p className="text-blue-700 mb-2">
                    <strong>Term GPA:</strong> 49.7 ÷ 14 = 3.55
                  </p>
                </div>

                <p className="text-blue-700 font-semibold">
                  Result: This student's term GPA is 3.55, which corresponds to an A- letter grade and represents
                  excellent academic performance for the semester.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Understanding the Impact of Different Grades</h3>
              <p className="text-gray-700 mb-4">
                The example above demonstrates how different grades and credit hours affect your term GPA. Notice
                how the 4-credit Calculus course with an A grade contributes 16.0 grade points (4.0 × 4), while the
                3-credit History course with a B grade contributes only 9.0 grade points (3.0 × 3). This weighted
                system ensures that more challenging, higher-credit courses have greater influence on your overall
                term GPA.
              </p>

              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-yellow-900 mb-3">Key Insights from the Example</h3>
                <ul className="text-yellow-800 space-y-2">
                  <li>• <strong>Credit Hours Matter:</strong> Higher-credit courses have more impact on your GPA</li>
                  <li>• <strong>Grade Distribution:</strong> A mix of high and moderate grades can yield excellent results</li>
                  <li>• <strong>Weighted Average:</strong> The system rewards strong performance in challenging courses</li>
                  <li>• <strong>Strategic Planning:</strong> Understanding this helps you prioritize courses and study time</li>
                </ul>
              </div>

              <p className="text-gray-700 mb-4">
                Use our term GPA calculator to experiment with different grade scenarios and understand how various
                combinations of courses and grades will affect your academic performance. This knowledge empowers
                you to make informed decisions about your course load and study strategies throughout the term.
              </p>
            </section>

            <section id="tips-improve">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tips to Improve Your Term GPA</h2>
              <p className="text-gray-700 mb-4">
                Improving your term GPA requires strategic planning, consistent effort, and effective study habits.
                Whether you're aiming to maintain strong academic performance or recover from a challenging semester,
                these practical strategies will help you maximize your term GPA and achieve your academic goals.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Academic Strategies</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Attendance Matters:</strong> Regular class attendance improves understanding and participation grades</li>
                    <li>• <strong>Assignment Completion:</strong> Submit all assignments on time to avoid point deductions</li>
                    <li>• <strong>Study Groups:</strong> Collaborate with peers to deepen understanding of course material</li>
                    <li>• <strong>Office Hours:</strong> Seek clarification from professors when concepts are unclear</li>
                    <li>• <strong>Practice Exams:</strong> Use practice tests to identify weak areas and improve performance</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Time Management</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Course Load Balance:</strong> Don't overload on difficult courses in one term</li>
                    <li>• <strong>Study Schedule:</strong> Create a consistent study routine with dedicated time blocks</li>
                    <li>• <strong>Priority Setting:</strong> Focus on high-impact assignments and exams first</li>
                    <li>• <strong>Break Planning:</strong> Include regular breaks to maintain focus and prevent burnout</li>
                    <li>• <strong>Progress Tracking:</strong> Monitor your performance throughout the term</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Course-Specific Strategies</h3>
              <p className="text-gray-700 mb-4">
                Different courses require different approaches to maximize your term GPA. Tailor your study methods
                to the specific demands of each subject area.
              </p>

              <ul className="space-y-3 text-gray-700 ml-6">
                <li>
                  <strong>STEM Courses (Math, Science, Engineering):</strong> Focus on problem-solving practice and
                  concept mastery. Regular homework completion and tutoring attendance are crucial for success in
                  these quantitative disciplines.
                </li>
                <li>
                  <strong>Humanities Courses (English, History, Languages):</strong> Emphasize reading comprehension,
                  writing skills, and critical analysis. Regular writing practice and participation in class discussions
                  significantly impact grades in these subjects.
                </li>
                <li>
                  <strong>Social Science Courses (Psychology, Sociology, Economics):</strong> Combine memorization
                  with analytical thinking. Understanding theoretical frameworks and applying concepts to real-world
                  examples improves performance in these areas.
                </li>
                <li>
                  <strong>Lab-Based Courses:</strong> Preparation before lab sessions and thorough documentation
                  during experiments are essential. Understanding lab procedures and safety protocols contributes
                  significantly to your lab grade.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Long-term GPA Improvement Strategies</h3>
              <p className="text-gray-700 mb-4">
                Building sustainable academic habits leads to consistent term GPA improvement over time. Focus on
                developing skills and routines that support long-term academic success.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-green-900 mb-3">Sustainable Improvement Techniques</h3>
                <ul className="text-green-800 space-y-2">
                  <li>• <strong>Learning Style Assessment:</strong> Identify and utilize your most effective learning methods</li>
                  <li>• <strong>Resource Utilization:</strong> Take advantage of campus tutoring, writing centers, and academic support</li>
                  <li>• <strong>Health and Wellness:</strong> Maintain physical and mental health to support academic performance</li>
                  <li>• <strong>Goal Setting:</strong> Set specific, measurable academic objectives for each term</li>
                  <li>• <strong>Feedback Integration:</strong> Use instructor feedback to improve future performance</li>
                </ul>
              </div>
            </section>

            <section id="term-gpa-impact">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Term GPA Affects Overall GPA and Academic Planning</h2>
              <p className="text-gray-700 mb-4">
                Your term GPA plays a crucial role in shaping your overall academic trajectory, influencing everything
                from your cumulative GPA to your future opportunities. Understanding how semester performance impacts
                your long-term academic success is essential for effective planning and goal setting.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Impact on Cumulative GPA</h3>
              <p className="text-gray-700 mb-4">
                Your cumulative GPA represents your overall academic performance across all completed coursework.
                Each term GPA contributes to this running average, with the weight of each semester determined by
                the number of credit hours completed. Terms with more credits have greater influence on your
                cumulative GPA, making strategic course selection and consistent performance essential for long-term
                academic success.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Academic Standing and Progress</h3>
              <p className="text-gray-700 mb-4">
                Many institutions use term GPA to determine academic standing, probation status, and eligibility
                for academic honors. Consistently strong term GPAs demonstrate academic stability and progress,
                while fluctuating performance may trigger academic alerts or interventions. Understanding your
                term GPA trends helps you maintain good academic standing and avoid academic difficulties.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scholarship and Financial Aid</h3>
              <p className="text-gray-700 mb-4">
                Scholarships and financial aid packages often include GPA maintenance requirements. Your term GPA
                directly affects your eligibility for renewal of academic scholarships and continued financial support.
                Strong term performance ensures continued access to financial resources that support your education.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Graduate School and Career Opportunities</h3>
              <p className="text-gray-700 mb-4">
                Graduate programs and employers consider both cumulative and recent term GPAs when evaluating
                applications. Strong recent term performance demonstrates current academic capability and commitment.
                Your term GPA trends provide evidence of your academic growth and potential for advanced study or
                professional success.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Academic Planning and Course Selection</h3>
              <p className="text-gray-700 mb-4">
                Understanding term GPA calculations helps you make informed decisions about course load, scheduling,
                and academic priorities. You can strategically plan your semester to balance challenging courses with
                more manageable ones, ensuring steady academic progress and avoiding GPA-damaging overload situations.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Strategic Term GPA Planning</h3>
                <ul className="text-blue-800 space-y-2">
                  <li>• <strong>Balance Course Difficulty:</strong> Mix challenging and manageable courses each term</li>
                  <li>• <strong>Credit Hour Management:</strong> Consider credit load impact on GPA calculations</li>
                  <li>• <strong>Recovery Planning:</strong> Address weak areas while maintaining overall performance</li>
                  <li>• <strong>Long-term Goals:</strong> Align term performance with academic and career objectives</li>
                  <li>• <strong>Progress Monitoring:</strong> Track term GPA trends to ensure steady improvement</li>
                </ul>
              </div>

              <p className="text-gray-700 mb-4">
                Your term GPA is more than just a semester grade—it's a building block of your academic foundation.
                Each term contributes to your overall academic narrative, demonstrating your ability to handle
                increasing academic challenges and maintain consistent performance. By understanding and actively
                managing your term GPA, you create a strong academic record that opens doors to scholarships,
                graduate programs, and career opportunities.
              </p>
            </section>

            <section id="faq">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <FAQ items={faqData} />
            </section>

            {/* Related Calculators */}
            <RelatedCalculators relatedIds={['college-gpa-calculator', 'high-school-gpa-calculator', 'weighted-gpa-calculator', 'final-grade-gpa-calculator', 'gpa-improvement-calculator']} />

            {/* Authority Links */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Resources</h2>
              <p className="text-gray-700 mb-4">
                For more information about GPA calculations and academic planning, visit these authoritative sources:
              </p>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.collegeboard.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    College Board - College planning and admissions resources
                  </a>
                </li>
                <li>
                  <a href="https://nces.ed.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    National Center for Education Statistics - Educational data and research
                  </a>
                </li>
                <li>
                  <a href="https://www.khanacademy.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    Khan Academy - Free educational resources and study help
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}