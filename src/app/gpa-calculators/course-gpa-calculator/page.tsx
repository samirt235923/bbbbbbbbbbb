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
  courseGPA: number;
}

export default function CourseGPACalculator() {
  const [courses, setCourses] = useState<Course[]>([
    { id: 1, name: 'Course 1', credits: 3, grade: 'A', gradePoints: 4.0, courseGPA: 4.0 }
  ]);
  const [results, setResults] = useState<{
    overallGPA?: number;
    totalCredits?: number;
    totalGradePoints?: number;
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

  // Calculate course GPA and overall GPA
  const calculateGPAs = () => {
    if (courses.length === 0) {
      setResults({});
      return;
    }

    // Update individual course GPAs
    const updatedCourses = courses.map(course => ({
      ...course,
      courseGPA: course.gradePoints
    }));

    setCourses(updatedCourses);

    // Calculate overall GPA
    const totalGradePoints = updatedCourses.reduce((sum, course) => sum + (course.gradePoints * course.credits), 0);
    const totalCredits = updatedCourses.reduce((sum, course) => sum + course.credits, 0);

    if (totalCredits === 0) {
      setResults({});
      return;
    }

    const overallGPA = totalGradePoints / totalCredits;

    setResults({
      overallGPA: Math.round(overallGPA * 1000) / 1000,
      totalCredits,
      totalGradePoints: Math.round(totalGradePoints * 100) / 100
    });
  };

  useEffect(() => {
    calculateGPAs();
  }, [courses]);

  const addCourse = () => {
    const newId = Math.max(...courses.map(c => c.id)) + 1;
    setCourses([...courses, { id: newId, name: `Course ${newId}`, credits: 3, grade: 'A', gradePoints: 4.0, courseGPA: 4.0 }]);
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
          updatedCourse.courseGPA = gradeScale[value as keyof typeof gradeScale];
        }
        return updatedCourse;
      }
      return course;
    }));
  };

  const clearCalculator = () => {
    setCourses([{ id: 1, name: 'Course 1', credits: 3, grade: 'A', gradePoints: 4.0, courseGPA: 4.0 }]);
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
      question: "How do I calculate my GPA for a course?",
      answer: "To calculate your GPA for a single course, use our calculator above. Enter the course name, credit hours, and your grade. The calculator will instantly show your course GPA using the standard 4.0 scale (A=4.0, B=3.0, etc.). For multiple courses, it calculates the overall GPA across all entered courses."
    },
    {
      question: "What is a good GPA for a single class?",
      answer: "A good GPA for a single class depends on your academic goals and the course difficulty. Generally, an A (4.0) or A- (3.7) is considered excellent, B+ (3.3) or B (3.0) is good, C+ (2.3) or C (2.0) is satisfactory, and anything below C- (1.7) may need improvement. Your target GPA should align with your overall academic objectives."
    },
    {
      question: "Can one course affect my overall GPA significantly?",
      answer: "Yes, one course can significantly affect your overall GPA, especially if it has many credit hours. Higher-credit courses have more weight in GPA calculations. For example, earning an F in a 4-credit course will have a much greater negative impact than an F in a 1-credit course. Always consider credit hours when prioritizing courses."
    },
    {
      question: "How do I convert my course grade to GPA?",
      answer: "Convert your letter grade to GPA using the standard 4.0 scale: A=4.0, A-=3.7, B+=3.3, B=3.0, B-=2.7, C+=2.3, C=2.0, C-=1.7, D=1.0, F=0.0. Our calculator does this automatically - just select your letter grade and it will show the corresponding GPA points."
    },
    {
      question: "Is A in one course equal to 4.0 GPA?",
      answer: "Yes, an A grade in any course equals 4.0 GPA points on the standard 4.0 scale. However, the impact on your overall GPA depends on the course's credit hours. A 4.0 in a 4-credit course contributes 16 grade points, while a 4.0 in a 1-credit course contributes only 4 grade points. Credit hours determine the weight of each grade."
    }
  ];

  return (
    <>
      <SEOHead
        title="Course GPA Calculator – Calculate GPA for a Single Course"
        description="Use our Course GPA Calculator to calculate the GPA for an individual course. Enter your grade and credit hours to find your course GPA instantly with accurate results."
        canonical="/gpa-calculators/course-gpa-calculator"
      />

      <ArticleSchema
        headline="Course GPA Calculator – Calculate GPA for a Single Course"
        description="Learn how to calculate GPA for individual courses. Includes course GPA formulas, examples, and strategies for academic success."
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
              { label: 'Course GPA Calculator', href: '/gpa-calculators/course-gpa-calculator' }
            ]}
          />

          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Course GPA Calculator
          </h1>

          {/* Calculator Interface */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Enter Your Course Information</h2>
              {courses.map((course, index) => (
                <div key={course.id} className="flex items-center gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
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
                  <div className="text-sm text-gray-600 min-w-[80px] text-center">
                    GPA: {course.courseGPA}
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
              {results.overallGPA !== undefined && (
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Overall GPA Results</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-blue-700 text-2xl font-bold">
                          {results.overallGPA}
                        </p>
                        <p className="text-blue-600 text-sm">Overall GPA</p>
                      </div>
                      <div>
                        <p className="text-blue-700 text-xl font-semibold">
                          {results.overallGPA >= 3.7 ? 'A' :
                           results.overallGPA >= 3.3 ? 'A-' :
                           results.overallGPA >= 3.0 ? 'B+' :
                           results.overallGPA >= 2.7 ? 'B' :
                           results.overallGPA >= 2.3 ? 'B-' :
                           results.overallGPA >= 2.0 ? 'C+' :
                           results.overallGPA >= 1.7 ? 'C' :
                           results.overallGPA >= 1.3 ? 'C-' :
                           results.overallGPA >= 1.0 ? 'D' : 'F'}
                        </p>
                        <p className="text-blue-600 text-sm">Letter Grade Equivalent</p>
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-blue-600">
                      <p>Total Grade Points: {results.totalGradePoints}</p>
                      <p>Total Credits: {results.totalCredits}</p>
                    </div>
                  </div>

                  {/* Individual Course Results */}
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Individual Course GPAs</h3>
                    <div className="space-y-2">
                      {courses.map((course) => (
                        <div key={course.id} className="flex justify-between items-center p-2 bg-white rounded">
                          <span className="text-sm font-medium">{course.name}</span>
                          <div className="text-sm text-gray-600">
                            Grade: {course.grade} ({course.gradePoints}) | GPA: {course.courseGPA}
                          </div>
                        </div>
                      ))}
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
              <li><a href="#what-is-course-gpa" className="text-blue-600 hover:text-blue-800">What is a Course GPA</a></li>
              <li><a href="#how-to-calculate" className="text-blue-600 hover:text-blue-800">How to Calculate Course GPA</a></li>
              <li><a href="#grade-scale-reference" className="text-blue-600 hover:text-blue-800">GPA Grade Scale Reference</a></li>
              <li><a href="#example-calculation" className="text-blue-600 hover:text-blue-800">Example Course GPA Calculation</a></li>
              <li><a href="#tips-improve" className="text-blue-600 hover:text-blue-800">Tips to Improve Course GPA</a></li>
              <li><a href="#course-gpa-impact" className="text-blue-600 hover:text-blue-800">How Course GPA Affects Overall GPA</a></li>
              <li><a href="#faq" className="text-blue-600 hover:text-blue-800">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* SEO Content */}
          <div className="space-y-8">
            <section id="what-is-course-gpa">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What is a Course GPA</h2>
              <p className="text-gray-700 mb-4">
                A course GPA represents the grade point average for an individual course, providing a focused
                evaluation of your performance in a single class. This metric converts your letter grade into
                a numerical value on the standard 4.0 scale, allowing for precise academic assessment and
                comparison across different courses and subjects.
              </p>
              <p className="text-gray-700 mb-4">
                Understanding your course GPA is essential for academic planning and performance tracking.
                Each course contributes to your overall GPA based on both the grade earned and the credit
                hours assigned to the course. Higher-credit courses naturally have more significant impact
                on your cumulative GPA, making it crucial to prioritize performance in these classes.
              </p>
              <p className="text-gray-700 mb-4">
                Course GPA calculations help students identify academic strengths and weaknesses at the
                individual course level. This granular approach enables targeted improvement strategies,
                allowing you to focus efforts where they will have the most significant impact on your
                overall academic success. Whether you're aiming for academic honors, maintaining scholarship
                eligibility, or simply striving for personal excellence, understanding your course GPA is
                the foundation of effective academic management.
              </p>
            </section>

            <section id="how-to-calculate">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Calculate Course GPA</h2>
              <p className="text-gray-700 mb-4">
                Calculating course GPA involves converting your letter grade to the corresponding numerical
                value on the 4.0 scale. For individual courses, the calculation is straightforward, but
                when combining multiple courses, credit hours play a crucial role in determining the overall GPA.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Course GPA Formulas</h3>
                <p className="text-gray-700 mb-2"><strong>Single Course GPA:</strong></p>
                <p className="text-gray-700 mb-4 font-mono bg-white p-2 rounded">
                  Course GPA = Grade Value
                </p>
                <p className="text-gray-700 mb-2"><strong>Multiple Courses GPA:</strong></p>
                <p className="text-gray-700 mb-4 font-mono bg-white p-2 rounded">
                  Overall GPA = Sum of (Grade Value × Credit Hours) ÷ Total Credit Hours
                </p>

                <p className="text-gray-700">Where:</p>
                <ul className="text-gray-700 ml-6">
                  <li>• <strong>Grade Value</strong> = GPA points (A=4.0, B=3.0, C=2.0, D=1.0, F=0.0)</li>
                  <li>• <strong>Credit Hours</strong> = Number of credits for each course</li>
                  <li>• <strong>Total Credit Hours</strong> = Sum of all course credits</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Step-by-Step Calculation Process</h3>
              <ol className="text-gray-700 space-y-2 ml-6">
                <li><strong>1. Identify Your Grade:</strong> Determine your letter grade for the course.</li>
                <li><strong>2. Convert to GPA Points:</strong> Use the standard scale to convert letter grade to numerical value.</li>
                <li><strong>3. Note Credit Hours:</strong> Record the number of credit hours for the course.</li>
                <li><strong>4. Calculate Grade Points:</strong> Multiply GPA value by credit hours (for overall GPA).</li>
                <li><strong>5. Sum Values:</strong> Add grade points and credit hours across all courses.</li>
                <li><strong>6. Divide:</strong> Divide total grade points by total credit hours for overall GPA.</li>
              </ol>

              <p className="text-gray-700 mb-4">
                Our calculator automates this entire process, providing instant and accurate course GPA
                calculations. Simply enter your course information, and the tool handles all the mathematical
                conversions and calculations automatically.
              </p>
            </section>

            <section id="grade-scale-reference">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">GPA Grade Scale Reference</h2>
              <p className="text-gray-700 mb-6">
                The GPA grade scale provides a standardized method for converting letter grades to numerical
                values. This universal 4.0 scale ensures consistency across institutions and allows for
                accurate academic performance evaluation. Understanding this scale is essential for
                interpreting your course GPA and making informed academic decisions.
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
                This standardized grading scale ensures fair and consistent evaluation across all academic
                disciplines. Each grade level represents a specific range of academic achievement, allowing
                for precise GPA calculations and performance assessment.
              </p>
            </section>

            <section id="example-calculation">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Example Course GPA Calculation</h2>
              <p className="text-gray-700 mb-4">
                Let's explore comprehensive examples to demonstrate how course GPA calculations work in
                practice. These examples show both single-course and multiple-course scenarios to illustrate
                the calculation process and the impact of credit hours on overall GPA.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Single Course Example</h3>
                <div className="bg-white p-4 rounded mb-4">
                  <p className="text-blue-700 mb-2"><strong>Course:</strong> Calculus</p>
                  <p className="text-blue-700 mb-2"><strong>Grade:</strong> A (4.0 GPA points)</p>
                  <p className="text-blue-700 mb-2"><strong>Credit Hours:</strong> 4</p>
                  <p className="text-blue-700 mb-2"><strong>Course GPA:</strong> 4.0</p>
                </div>
                <p className="text-blue-700">
                  For a single course, the GPA is simply the grade value (4.0 for an A). This represents
                  excellent performance in that specific course.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-green-900 mb-3">Multiple Courses Example</h3>
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
                        <td className="px-4 py-2 text-sm">Mathematics</td>
                        <td className="px-4 py-2 text-sm font-semibold text-blue-600">A (4.0)</td>
                        <td className="px-4 py-2 text-sm">3</td>
                        <td className="px-4 py-2 text-sm font-semibold">12.0</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-2 text-sm">English Literature</td>
                        <td className="px-4 py-2 text-sm font-semibold text-blue-600">B+ (3.3)</td>
                        <td className="px-4 py-2 text-sm">4</td>
                        <td className="px-4 py-2 text-sm font-semibold">13.2</td>
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

                <h4 className="font-semibold text-green-900 mb-2">Overall GPA Calculation:</h4>
                <div className="bg-white p-4 rounded mb-4">
                  <p className="text-green-700 mb-2">
                    <strong>Total Grade Points:</strong> 12.0 + 13.2 + 14.8 + 9.0 = 49.0
                  </p>
                  <p className="text-green-700 mb-2">
                    <strong>Total Credit Hours:</strong> 3 + 4 + 4 + 3 = 14
                  </p>
                  <p className="text-green-700 mb-2">
                    <strong>Overall GPA:</strong> 49.0 ÷ 14 = 3.5
                  </p>
                </div>

                <p className="text-green-700">
                  This student's overall GPA across these four courses is 3.5, which corresponds to a B+ letter grade.
                  Notice how the 4-credit courses (English and Biology) have greater influence on the final GPA than
                  the 3-credit courses (Mathematics and History).
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Insights from the Examples</h3>
              <p className="text-gray-700 mb-4">
                These examples demonstrate several important principles of course GPA calculations:
              </p>

              <ul className="space-y-2 text-gray-700 ml-6">
                <li>• <strong>Credit Hours Matter:</strong> Higher-credit courses have more significant impact on overall GPA</li>
                <li>• <strong>Grade Distribution:</strong> A mix of high and moderate grades can yield strong overall results</li>
                <li>• <strong>Single Course Focus:</strong> Individual course GPAs show performance in specific subjects</li>
                <li>• <strong>Weighted Average:</strong> The system rewards strong performance in challenging, high-credit courses</li>
              </ul>
            </section>

            <section id="tips-improve">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tips to Improve Course GPA</h2>
              <p className="text-gray-700 mb-4">
                Improving your course GPA requires focused effort, effective study strategies, and consistent
                academic habits. Whether you're aiming to boost performance in a specific course or maintain
                strong grades across multiple classes, these practical strategies will help you achieve your goals.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Study Strategies</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Regular Attendance:</strong> Attend all classes to stay current with material</li>
                    <li>• <strong>Active Participation:</strong> Engage in class discussions and ask questions</li>
                    <li>• <strong>Note-Taking:</strong> Develop effective note-taking methods for each course</li>
                    <li>• <strong>Study Groups:</strong> Collaborate with peers to deepen understanding</li>
                    <li>• <strong>Office Hours:</strong> Seek clarification from instructors when needed</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Time Management</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Assignment Planning:</strong> Break large assignments into manageable tasks</li>
                    <li>• <strong>Study Schedule:</strong> Create consistent study routines for each course</li>
                    <li>• <strong>Priority Setting:</strong> Focus on high-impact assignments and exams</li>
                    <li>• <strong>Test Preparation:</strong> Use practice exams and review sessions</li>
                    <li>• <strong>Progress Tracking:</strong> Monitor your performance throughout the course</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Course-Specific Improvement Techniques</h3>
              <p className="text-gray-700 mb-4">
                Different subjects require tailored approaches to maximize your course GPA. Adapt your study
                methods to the specific demands of each academic discipline.
              </p>

              <ul className="space-y-3 text-gray-700 ml-6">
                <li>
                  <strong>STEM Courses (Math, Science, Engineering):</strong> Focus on problem-solving practice
                  and concept mastery. Regular homework completion and seeking help early are crucial for success
                  in quantitative disciplines.
                </li>
                <li>
                  <strong>Humanities Courses (English, History, Languages):</strong> Emphasize reading comprehension,
                  writing skills, and critical analysis. Regular writing practice and participation in discussions
                  significantly impact grades.
                </li>
                <li>
                  <strong>Social Science Courses (Psychology, Sociology, Economics):</strong> Combine memorization
                  with analytical thinking. Understanding theoretical frameworks and applying concepts to real-world
                  examples improves performance.
                </li>
                <li>
                  <strong>Lab-Based Courses:</strong> Preparation before lab sessions and thorough documentation
                  during experiments are essential. Understanding procedures and safety protocols contributes
                  significantly to lab grades.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Long-term GPA Enhancement Strategies</h3>
              <p className="text-gray-700 mb-4">
                Building sustainable academic habits leads to consistent course GPA improvement over time.
                Focus on developing skills and routines that support ongoing academic excellence.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Sustainable Improvement Techniques</h3>
                <ul className="text-blue-800 space-y-2">
                  <li>• <strong>Learning Style Assessment:</strong> Identify and utilize your most effective learning methods</li>
                  <li>• <strong>Resource Utilization:</strong> Take advantage of tutoring services and academic support</li>
                  <li>• <strong>Feedback Integration:</strong> Use instructor feedback to improve future performance</li>
                  <li>• <strong>Goal Setting:</strong> Set specific, measurable objectives for each course</li>
                  <li>• <strong>Health and Wellness:</strong> Maintain physical and mental health to support academic performance</li>
                </ul>
              </div>
            </section>

            <section id="course-gpa-impact">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Course GPA Affects Overall GPA</h2>
              <p className="text-gray-700 mb-4">
                Your course GPA plays a crucial role in determining your overall academic performance and future
                opportunities. Understanding how individual course grades contribute to your cumulative GPA is
                essential for effective academic planning and long-term success.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Credit Hours and GPA Weight</h3>
              <p className="text-gray-700 mb-4">
                Credit hours determine the weight of each course in your overall GPA calculation. Higher-credit
                courses have more significant impact on your cumulative GPA than lower-credit courses. For example,
                earning an A in a 4-credit course contributes 16 grade points, while an A in a 1-credit course
                contributes only 4 grade points. Strategic course selection and performance prioritization are
                essential for maximizing your overall GPA.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cumulative GPA Calculation</h3>
              <p className="text-gray-700 mb-4">
                Your cumulative GPA represents your overall academic performance across all completed coursework.
                Each course GPA contributes to this running average based on both the grade earned and credit
                hours. Understanding this relationship helps you make informed decisions about course selection
                and academic priorities throughout your educational journey.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Academic Standing and Opportunities</h3>
              <p className="text-gray-700 mb-4">
                Strong course GPAs contribute to good academic standing, scholarship eligibility, and access
                to competitive programs. Individual course performance can significantly impact your academic
                record, especially in major-related courses or prerequisite classes. Maintaining consistent
                performance across courses strengthens your overall academic profile.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Major and Career Implications</h3>
              <p className="text-gray-700 mb-4">
                Course GPAs in major-related subjects often carry additional weight in academic evaluations.
                Strong performance in core courses demonstrates subject mastery and preparation for advanced
                study. Graduate programs and employers frequently consider both overall GPA and performance
                in relevant coursework when making admissions and hiring decisions.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategic Academic Planning</h3>
              <p className="text-gray-700 mb-4">
                Understanding course GPA impact enables strategic academic planning. You can prioritize courses
                based on credit hours, difficulty level, and importance to your academic goals. This knowledge
                helps you balance challenging courses with more manageable ones while maintaining overall GPA strength.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-green-900 mb-3">Course GPA Planning Strategies</h3>
                <ul className="text-green-800 space-y-2">
                  <li>• <strong>Credit Hour Awareness:</strong> Prioritize performance in higher-credit courses</li>
                  <li>• <strong>Course Load Balance:</strong> Mix challenging and manageable courses strategically</li>
                  <li>• <strong>Major Course Focus:</strong> Excel in courses related to your field of study</li>
                  <li>• <strong>Prerequisite Performance:</strong> Strong grades in prerequisites open advanced opportunities</li>
                  <li>• <strong>Recovery Planning:</strong> Address weak performance early to minimize GPA impact</li>
                </ul>
              </div>

              <p className="text-gray-700 mb-4">
                Your course GPA is more than just a single grade—it's a building block of your academic foundation.
                Each course contributes to your overall academic narrative, demonstrating your ability to handle
                diverse subjects and maintain consistent performance. By understanding and actively managing your
                course GPAs, you create a strong academic record that supports your educational and career aspirations.
              </p>
            </section>

            <section id="faq">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <FAQ items={faqData} />
            </section>

            {/* Related Calculators */}
            <RelatedCalculators relatedIds={['term-gpa-calculator', 'semester-gpa-calculator', 'college-gpa-calculator', 'high-school-gpa-calculator', 'weighted-gpa-calculator']} />

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
