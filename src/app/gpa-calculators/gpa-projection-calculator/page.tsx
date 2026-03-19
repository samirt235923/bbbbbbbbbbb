'use client';

import React, { useState, useEffect } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import SEOHead from '@/components/SEOHead';
import FAQ from '@/components/FAQ';
import { FAQSchema, ArticleSchema } from '@/components/SchemaMarkup';
import RelatedCalculators from '@/components/RelatedCalculators';

interface PlannedCourse {
  id: number;
  credits: number;
  grade: string;
  gradePoints: number;
}

export default function GPAProjectionCalculator() {
  const [currentGPA, setCurrentGPA] = useState<string>('');
  const [completedCredits, setCompletedCredits] = useState<string>('');
  const [plannedCourses, setPlannedCourses] = useState<PlannedCourse[]>([
    { id: 1, credits: 3, grade: 'A', gradePoints: 4.0 }
  ]);
  const [results, setResults] = useState<{
    projectedGPA?: number;
    totalPlannedCredits?: number;
    gpaChange?: number;
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

  // Calculate projected GPA
  const calculateProjectedGPA = () => {
    const current = parseFloat(currentGPA);
    const completed = parseFloat(completedCredits);

    if (!current || !completed || plannedCourses.length === 0) {
      setResults({});
      return;
    }

    const totalPlannedCredits = plannedCourses.reduce((sum, course) => sum + course.credits, 0);
    const totalPlannedPoints = plannedCourses.reduce((sum, course) => sum + (course.gradePoints * course.credits), 0);

    // Projected GPA Formula
    const projectedGPA = (current * completed + totalPlannedPoints) / (completed + totalPlannedCredits);
    const gpaChange = projectedGPA - current;

    // Determine letter grade equivalent
    let letterGrade = 'F';
    if (projectedGPA >= 3.7) letterGrade = 'A';
    else if (projectedGPA >= 3.3) letterGrade = 'A-';
    else if (projectedGPA >= 3.0) letterGrade = 'B+';
    else if (projectedGPA >= 2.7) letterGrade = 'B';
    else if (projectedGPA >= 2.3) letterGrade = 'B-';
    else if (projectedGPA >= 2.0) letterGrade = 'C+';
    else if (projectedGPA >= 1.7) letterGrade = 'C';
    else if (projectedGPA >= 1.3) letterGrade = 'C-';
    else if (projectedGPA >= 1.0) letterGrade = 'D';

    setResults({
      projectedGPA: Math.round(projectedGPA * 1000) / 1000,
      totalPlannedCredits,
      gpaChange: Math.round(gpaChange * 1000) / 1000,
      letterGrade
    });
  };

  useEffect(() => {
    calculateProjectedGPA();
  }, [currentGPA, completedCredits, plannedCourses]);

  const addCourse = () => {
    const newId = Math.max(...plannedCourses.map(c => c.id)) + 1;
    setPlannedCourses([...plannedCourses, { id: newId, credits: 3, grade: 'A', gradePoints: 4.0 }]);
  };

  const removeCourse = (id: number) => {
    if (plannedCourses.length > 1) {
      setPlannedCourses(plannedCourses.filter(course => course.id !== id));
    }
  };

  const updateCourseCredits = (id: number, credits: number) => {
    setPlannedCourses(plannedCourses.map(course =>
      course.id === id ? { ...course, credits } : course
    ));
  };

  const updateCourseGrade = (id: number, grade: string) => {
    const gradePoints = gradeScale[grade as keyof typeof gradeScale];
    setPlannedCourses(plannedCourses.map(course =>
      course.id === id ? { ...course, grade, gradePoints } : course
    ));
  };

  const clearCalculator = () => {
    setCurrentGPA('');
    setCompletedCredits('');
    setPlannedCourses([{ id: 1, credits: 3, grade: 'A', gradePoints: 4.0 }]);
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
      question: "How do I calculate my projected GPA?",
      answer: "To calculate your projected GPA, use our calculator above. Enter your current GPA, completed credits, and add your planned courses with expected grades. The calculator will instantly show your projected GPA using the formula: Projected GPA = (Current GPA × Completed Credits + Sum of (Planned Course Grade × Planned Credits)) ÷ (Completed Credits + Total Planned Credits)."
    },
    {
      question: "Can I raise my GPA in one semester?",
      answer: "Yes, it's possible to raise your GPA in one semester, but it depends on your current GPA and the number of credits you're taking. Generally, taking more credits and earning high grades (A's and A-'s) will have the biggest impact on improving your GPA. Use our calculator to see how different grade scenarios affect your projected GPA."
    },
    {
      question: "What grades do I need to achieve a projected GPA of 3.5?",
      answer: "The grades you need depend on your current GPA and completed credits. For example, if you have a 3.0 GPA with 30 credits and want to reach 3.5, you would need mostly A grades (3.7-4.0) in your upcoming courses. Use our GPA projection calculator to determine the exact grade requirements for your specific situation."
    },
    {
      question: "Is it possible to reach a 4.0 GPA in one semester?",
      answer: "Reaching a perfect 4.0 GPA in one semester is challenging and depends on your current GPA and course load. If you have a lower current GPA, you would need to earn straight A's in all your courses. While possible, it's more realistic to aim for gradual improvement over multiple semesters. Our calculator can help you determine if a 4.0 is achievable in your situation."
    },
    {
      question: "How many credits do I need to reach my target GPA?",
      answer: "The number of credits needed depends on your current GPA, target GPA, and expected grades. Generally, taking more credits allows for more gradual GPA improvement. For example, improving from 3.0 to 3.5 might require 15-30 credits of A/A- grades. Use our calculator to experiment with different credit loads and grade scenarios to find the best path to your target GPA."
    }
  ];

  return (
    <>
      <SEOHead
        title="GPA Projection Calculator – Estimate Your Future GPA"
        description="Use our GPA Projection Calculator to estimate your future GPA based on current grades and planned courses. Enter your current GPA, completed credits, and planned courses for instant calculation."
        canonical="/gpa-calculators/gpa-projection-calculator"
      />

      <ArticleSchema
        headline="GPA Projection Calculator – Estimate Your Future GPA"
        description="Learn how to project your GPA for upcoming semesters. Includes GPA projection formulas, examples, and strategies for academic planning."
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
              { label: 'GPA Projection Calculator', href: '/gpa-calculators/gpa-projection-calculator' }
            ]}
          />

          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            GPA Projection Calculator
          </h1>

          {/* Calculator Interface */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="mb-6">
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current GPA
                  </label>
                  <input
                    type="number"
                    value={currentGPA}
                    onChange={(e) => setCurrentGPA(e.target.value)}
                    placeholder="e.g., 3.2"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="0"
                    max="4.0"
                    step="0.01"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Completed Credits
                  </label>
                  <input
                    type="number"
                    value={completedCredits}
                    onChange={(e) => setCompletedCredits(e.target.value)}
                    placeholder="e.g., 30"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="0"
                    step="1"
                  />
                </div>
              </div>

              {/* Planned Courses */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Planned Courses</h3>
                {plannedCourses.map((course, index) => (
                  <div key={course.id} className="flex items-center gap-4 mb-3 p-4 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Course {index + 1}:</span>
                    <div className="flex-1 grid grid-cols-2 gap-4">
                      <div>
                        <input
                          type="number"
                          value={course.credits}
                          onChange={(e) => updateCourseCredits(course.id, parseInt(e.target.value) || 0)}
                          placeholder="Credits"
                          className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                          min="1"
                          max="6"
                        />
                        <span className="text-xs text-gray-600 ml-1">credits</span>
                      </div>
                      <div>
                        <select
                          value={course.grade}
                          onChange={(e) => updateCourseGrade(course.id, e.target.value)}
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
                    {plannedCourses.length > 1 && (
                      <button
                        onClick={() => removeCourse(course.id)}
                        className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}

                <button
                  onClick={addCourse}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  Add Course
                </button>
              </div>

              <div className="flex justify-center mb-4">
                <button
                  onClick={clearCalculator}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                >
                  Clear All
                </button>
              </div>

              {/* Results */}
              {results.projectedGPA !== undefined && (
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Projected GPA</h3>
                    <p className="text-blue-700 text-2xl font-bold">
                      {results.projectedGPA}
                    </p>
                    <p className="text-blue-600 text-sm mt-1">
                      Equivalent to approximately {results.letterGrade} letter grade
                    </p>
                    <p className="text-blue-600 text-sm">
                      Total planned credits: {results.totalPlannedCredits}
                    </p>
                  </div>

                  {results.gpaChange !== undefined && (
                    <div className={`border rounded-md p-4 ${
                      results.gpaChange > 0 ? 'bg-green-50 border-green-200' :
                      results.gpaChange < 0 ? 'bg-red-50 border-red-200' :
                      'bg-gray-50 border-gray-200'
                    }`}>
                      <h3 className="text-lg font-semibold mb-2" style={{
                        color: results.gpaChange > 0 ? '#166534' :
                               results.gpaChange < 0 ? '#dc2626' : '#374151'
                      }}>
                        GPA Change
                      </h3>
                      <p style={{
                        color: results.gpaChange > 0 ? '#166534' :
                               results.gpaChange < 0 ? '#dc2626' : '#374151'
                      }}>
                        {results.gpaChange > 0 ? '+' : ''}{results.gpaChange} from current GPA
                      </p>
                    </div>
                  )}

                  {/* GPA Progress Bar */}
                  <div className="bg-white border border-gray-200 rounded-md p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">GPA Progress Visualization</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Current GPA: {currentGPA || '0'}</span>
                        <span>Projected: {results.projectedGPA}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                          className="bg-blue-600 h-4 rounded-full transition-all duration-300"
                          style={{ width: `${Math.min((results.projectedGPA / 4.0) * 100, 100)}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>0.0</span>
                        <span>1.0</span>
                        <span>2.0</span>
                        <span>3.0</span>
                        <span>4.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              <li><a href="#what-is-gpa-projection" className="text-blue-600 hover:text-blue-800">What is a GPA Projection Calculator?</a></li>
              <li><a href="#how-to-project" className="text-blue-600 hover:text-blue-800">How to Project Your GPA</a></li>
              <li><a href="#grade-scale-reference" className="text-blue-600 hover:text-blue-800">GPA Grade Scale Reference</a></li>
              <li><a href="#example-projection" className="text-blue-600 hover:text-blue-800">Example GPA Projection</a></li>
              <li><a href="#tips-achieve" className="text-blue-600 hover:text-blue-800">Tips to Achieve Your Projected GPA</a></li>
              <li><a href="#projected-gpa-importance" className="text-blue-600 hover:text-blue-800">How Projected GPA Affects College, Scholarships, and Academic Planning</a></li>
              <li><a href="#faq" className="text-blue-600 hover:text-blue-800">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* SEO Content */}
          <div className="space-y-8">
            <section id="what-is-gpa-projection">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What is a GPA Projection Calculator?</h2>
              <p className="text-gray-700 mb-4">
                A GPA projection calculator is an essential academic planning tool that helps students estimate their
                future grade point average based on their current academic performance and planned course grades.
                This powerful calculator bridges the gap between your present academic standing and your anticipated
                future performance, providing valuable insights for academic planning and goal setting.
              </p>
              <p className="text-gray-700 mb-4">
                Whether you're planning for college admissions, scholarship applications, academic honors, or simply
                want to understand how your upcoming semester will impact your overall GPA, our GPA projection calculator
                offers the precision and clarity you need. It transforms hypothetical grade scenarios into concrete
                GPA projections, empowering you to make informed decisions about your academic journey.
              </p>
              <p className="text-gray-700 mb-4">
                The calculator uses sophisticated mathematical formulas to combine your current GPA with expected
                grades in planned courses, providing instant projections that help you understand the academic
                implications of different grade scenarios. This tool is particularly valuable for students who want
                to maintain or improve their academic standing, plan for competitive programs, or simply understand
                how their coursework choices affect their overall academic profile.
              </p>
            </section>

            <section id="how-to-project">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Project Your GPA</h2>
              <p className="text-gray-700 mb-4">
                Projecting your GPA involves understanding how your current academic record combines with future
                performance to create an estimated final GPA. The calculation considers your completed coursework
                and incorporates expected grades from upcoming courses to provide an accurate projection of your
                academic standing.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">GPA Projection Formula</h3>
                <p className="text-gray-700 mb-2"><strong>Projected GPA Formula:</strong></p>
                <p className="text-gray-700 mb-4 font-mono bg-white p-2 rounded">
                  Projected GPA = (Current GPA × Completed Credits + Sum of (Planned Course Grade × Planned Credits)) ÷ (Completed Credits + Total Planned Credits)
                </p>

                <p className="text-gray-700">Where:</p>
                <ul className="text-gray-700 ml-6 mt-2">
                  <li>• Current GPA = Your GPA before new courses</li>
                  <li>• Completed Credits = Total credit hours completed</li>
                  <li>• Planned Course Grade = Expected grade points for each course (4.0 for A, 3.0 for B, etc.)</li>
                  <li>• Planned Credits = Credit hours for each planned course</li>
                  <li>• Total Planned Credits = Sum of all planned course credits</li>
                </ul>
              </div>

              <p className="text-gray-700 mb-4">
                Our calculator automates these complex calculations, allowing you to experiment with different
                grade scenarios instantly. You can add multiple courses, adjust expected grades, and see how
                different combinations affect your projected GPA. This helps you make strategic decisions about
                course selection and academic planning.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Step-by-Step GPA Projection Process</h3>
              <ol className="text-gray-700 space-y-2 ml-6">
                <li><strong>1. Gather Your Current Information:</strong> Collect your current GPA and total completed credit hours from your academic records.</li>
                <li><strong>2. Plan Your Courses:</strong> List the courses you plan to take, including their credit hours and your expected grades.</li>
                <li><strong>3. Input Data:</strong> Enter your current GPA, completed credits, and planned courses into the calculator.</li>
                <li><strong>4. Review Projections:</strong> Analyze the projected GPA and consider how different grade scenarios impact your results.</li>
                <li><strong>5. Adjust Plans:</strong> Modify your course selections or grade expectations based on your academic goals.</li>
              </ol>
            </section>

            <section id="grade-scale-reference">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">GPA Grade Scale Reference</h2>
              <p className="text-gray-700 mb-6">
                Understanding the GPA grade scale is crucial for accurate GPA projections. This standard 4.0 scale
                shows how letter grades convert to GPA points, helping you make informed decisions about your
                academic planning and understand the impact of different grade scenarios on your projected GPA.
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
                Use this reference table to understand how different letter grades affect your GPA projections.
                For example, an A (4.0) will significantly boost your projected GPA, while a B (3.0) provides
                moderate improvement. This helps you set realistic grade expectations and understand the
                mathematical impact of your academic performance.
              </p>
            </section>

            <section id="example-projection">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Example GPA Projection</h2>
              <p className="text-gray-700 mb-4">
                Let's walk through a comprehensive example to demonstrate how the GPA projection calculator works.
                This example shows how to project GPA for a student planning their upcoming semester with multiple courses.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">GPA Projection Example</h3>
                <ul className="text-blue-800 mb-4">
                  <li>• Current GPA: 3.2</li>
                  <li>• Completed Credits: 30</li>
                  <li>• Planned Course 1: Calculus (3 credits), Expected Grade: A (4.0)</li>
                  <li>• Planned Course 2: English Literature (3 credits), Expected Grade: B+ (3.3)</li>
                  <li>• Planned Course 3: Biology (4 credits), Expected Grade: A- (3.7)</li>
                </ul>

                <h4 className="font-semibold text-blue-900 mb-2">Step-by-Step Calculation:</h4>
                <p className="text-blue-700 mb-2">
                  <strong>Step 1:</strong> Calculate points from current GPA<br/>
                  Current Points = 3.2 × 30 = 96 points
                </p>
                <p className="text-blue-700 mb-2">
                  <strong>Step 2:</strong> Calculate points from planned courses<br/>
                  Calculus: 4.0 × 3 = 12 points<br/>
                  English: 3.3 × 3 = 9.9 points<br/>
                  Biology: 3.7 × 4 = 14.8 points<br/>
                  Total Planned Points = 12 + 9.9 + 14.8 = 36.7 points
                </p>
                <p className="text-blue-700 mb-2">
                  <strong>Step 3:</strong> Calculate total credits<br/>
                  Total Credits = 30 + 3 + 3 + 4 = 40 credits
                </p>
                <p className="text-blue-700 mb-2">
                  <strong>Step 4:</strong> Calculate projected GPA<br/>
                  Projected GPA = (96 + 36.7) ÷ 40 = 132.7 ÷ 40 = 3.3175 ≈ 3.32
                </p>

                <p className="text-blue-700 font-semibold">
                  Result: The student's projected GPA after completing these courses would be approximately 3.32,
                  representing a 0.12 point improvement from their current 3.2 GPA.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Alternative Scenarios</h3>
              <p className="text-gray-700 mb-4">
                Let's explore how different grade scenarios affect the projected GPA using the same example:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Best Case Scenario (All A's)</h4>
                  <p className="text-green-700">
                    Calculus: 4.0 × 3 = 12<br/>
                    English: 4.0 × 3 = 12<br/>
                    Biology: 4.0 × 4 = 16<br/>
                    <strong>Total Planned Points: 40</strong><br/>
                    <strong>Projected GPA: (96 + 40) ÷ 40 = 136 ÷ 40 = 3.40</strong>
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">Mixed Grades Scenario</h4>
                  <p className="text-orange-700">
                    Calculus: 3.7 × 3 = 11.1<br/>
                    English: 3.0 × 3 = 9<br/>
                    Biology: 3.3 × 4 = 13.2<br/>
                    <strong>Total Planned Points: 33.3</strong><br/>
                    <strong>Projected GPA: (96 + 33.3) ÷ 40 = 129.3 ÷ 40 = 3.23</strong>
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                These examples demonstrate how the GPA projection calculator allows you to experiment with
                different grade scenarios. By adjusting expected grades for each course, you can see exactly
                how your academic decisions impact your projected GPA, helping you set realistic goals and
                make informed course selections.
              </p>
            </section>

            <section id="tips-achieve">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tips to Achieve Your Projected GPA</h2>
              <p className="text-gray-700 mb-4">
                Achieving your projected GPA requires strategic planning, consistent effort, and effective
                study habits. Whether you're aiming to maintain your current GPA or achieve significant
                improvement, these practical tips will help you reach your academic goals and make the most
                of your GPA projection planning.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Academic Strategies</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Course Load Management:</strong> Balance challenging courses with manageable ones</li>
                    <li>• <strong>Study Time Allocation:</strong> Dedicate more time to courses with lower expected grades</li>
                    <li>• <strong>Professor Communication:</strong> Attend office hours and seek clarification early</li>
                    <li>• <strong>Assignment Planning:</strong> Break large assignments into manageable tasks</li>
                    <li>• <strong>Test Preparation:</strong> Use practice exams and study groups for difficult subjects</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Lifestyle Factors</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Sleep Schedule:</strong> Maintain 7-9 hours of sleep for optimal cognitive function</li>
                    <li>• <strong>Nutrition:</strong> Eat balanced meals to sustain energy and concentration</li>
                    <li>• <strong>Exercise:</strong> Regular physical activity improves focus and reduces stress</li>
                    <li>• <strong>Stress Management:</strong> Use relaxation techniques and time management tools</li>
                    <li>• <strong>Support Network:</strong> Connect with study groups and academic advisors</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">GPA Projection Best Practices</h3>
              <p className="text-gray-700 mb-4">
                Maximize the effectiveness of your GPA projection planning with these advanced strategies:
              </p>

              <ul className="space-y-3 text-gray-700 ml-6">
                <li>
                  <strong>Realistic Grade Expectations:</strong> Base your projected grades on past performance in similar courses
                  rather than overly optimistic assumptions. Consider your workload, course difficulty, and personal circumstances
                  when setting grade expectations.
                </li>
                <li>
                  <strong>Regular Progress Monitoring:</strong> Don't wait until the end of the semester to check your progress.
                  Use the calculator throughout the term to adjust your study strategies and ensure you're on track to meet
                  your projected GPA goals.
                </li>
                <li>
                  <strong>Contingency Planning:</strong> Have backup plans for different grade scenarios. If you encounter
                  difficulties in a course, know how alternative grades will affect your projected GPA and have strategies
                  to compensate in other courses.
                </li>
                <li>
                  <strong>Long-term Academic Planning:</strong> Use GPA projections not just for one semester, but for your
                  entire academic career. Consider how your projected GPA will affect college admissions, scholarships,
                  and future opportunities.
                </li>
                <li>
                  <strong>Resource Utilization:</strong> Take advantage of academic resources like tutoring services,
                  writing centers, and academic advising. These resources can help you achieve the grades needed to
                  meet your projected GPA targets.
                </li>
              </ul>
            </section>

            <section id="projected-gpa-importance">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Projected GPA Affects College, Scholarships, and Academic Planning</h2>
              <p className="text-gray-700 mb-4">
                Your projected GPA plays a crucial role in shaping your academic and professional future. Understanding
                how your anticipated academic performance influences college admissions, scholarship opportunities,
                and long-term career goals empowers you to make strategic decisions that align with your aspirations.
                GPA projections provide the foresight needed to navigate competitive academic landscapes successfully.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">College Admissions Impact</h3>
              <p className="text-gray-700 mb-4">
                College admissions officers heavily weigh GPA when evaluating applications. Your projected GPA helps
                you understand whether you're on track to meet the GPA requirements of your target schools. Many
                competitive programs have minimum GPA thresholds, and knowing your projected GPA allows you to make
                informed decisions about course selection, extracurricular activities, and application strategies.
                Early awareness of your projected academic trajectory enables you to address any gaps before it's
                too late in the admissions process.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scholarship and Financial Aid</h3>
              <p className="text-gray-700 mb-4">
                Scholarships and financial aid packages often have GPA maintenance requirements. Academic scholarships
                typically require minimum GPA thresholds for both initial eligibility and renewal. By understanding
                your projected GPA, you can assess whether you're likely to maintain the required GPA for scholarship
                retention. This foresight allows you to develop strategies to protect your financial aid and avoid
                the stress of losing scholarships due to GPA shortfalls.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Academic Honors and Recognition</h3>
              <p className="text-gray-700 mb-4">
                Many universities offer academic honors, Dean's List recognition, honor societies, and special academic
                programs that require specific GPA thresholds. Your projected GPA helps you determine whether you're
                on track to qualify for these distinctions. This information allows you to adjust your academic efforts
                to achieve the recognition and opportunities that come with academic excellence.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Graduate School and Professional Programs</h3>
              <p className="text-gray-700 mb-4">
                Graduate programs, professional schools (law, medicine, business), and competitive fellowships heavily
                consider undergraduate GPA in admissions decisions. Your projected GPA provides insight into whether
                you're building the academic record needed for advanced study. Early awareness of your projected
                academic trajectory allows you to make course selections and develop study strategies that will
                position you competitively for graduate admissions.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Career Opportunities and Employment</h3>
              <p className="text-gray-700 mb-4">
                Many employers, especially in competitive fields, consider GPA when evaluating job candidates for
                internships, entry-level positions, and professional programs. Your projected GPA helps you understand
                how your academic performance will impact your job market competitiveness. This awareness enables you
                to focus on building a strong academic record that will support your career aspirations and open
                doors to desirable employment opportunities.
              </p>

              <p className="text-gray-700 mb-4">
                Understanding your projected GPA transforms academic planning from guesswork into strategic decision-making.
                By using GPA projection tools to anticipate your academic trajectory, you can make informed choices about
                course selection, study habits, and extracurricular commitments. This proactive approach ensures that
                your academic efforts align with your long-term goals, maximizing your chances of success in college
                admissions, scholarship competitions, and future career opportunities. GPA projections empower you to
                take control of your academic destiny and build the foundation for a successful future.
              </p>
            </section>

            <section id="faq">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <FAQ items={faqData} />
            </section>

            {/* Related Calculators */}
            <RelatedCalculators relatedIds={['gpa-improvement-calculator', 'required-gpa-calculator', 'target-gpa-calculator', 'college-gpa-calculator', 'high-school-gpa-calculator']} />

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