'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import SEOHead from '@/components/SEOHead';
import { FAQSchema, CalculatorSchema } from '@/components/SchemaMarkup';

interface Course {
  id: string;
  name: string;
  creditHours: number;
  grade: string;
}

const gradePoints: { [key: string]: number } = {
  'A': 4.0, 'A-': 3.7,
  'B+': 3.3, 'B': 3.0, 'B-': 2.7,
  'C+': 2.3, 'C': 2.0, 'C-': 1.7,
  'D': 1.0, 'F': 0.0
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

export default function FinalSemesterGPACalculator() {
  const [courses, setCourses] = useState<Course[]>([
    { id: '1', name: 'Mathematics', creditHours: 3, grade: 'A' },
    { id: '2', name: 'English', creditHours: 4, grade: 'B+' },
    { id: '3', name: 'Economics', creditHours: 3, grade: 'A-' },
  ]);
  const [finalSemesterGPA, setFinalSemesterGPA] = useState<number | null>(null);
  const [totalCredits, setTotalCredits] = useState(0);
  const [totalGradePoints, setTotalGradePoints] = useState(0);

  const calculateFinalSemesterGPA = () => {
    if (courses.length === 0) return;

    let totalPoints = 0;
    let totalCreds = 0;

    courses.forEach((course) => {
      const gradePoint = gradePoints[course.grade] || 0;
      totalPoints += gradePoint * course.creditHours;
      totalCreds += course.creditHours;
    });

    setTotalCredits(totalCreds);
    setTotalGradePoints(parseFloat(totalPoints.toFixed(2)));
    const calculatedGPA = totalCreds > 0 ? totalPoints / totalCreds : 0;
    setFinalSemesterGPA(parseFloat(calculatedGPA.toFixed(2)));
  };

  const addCourse = () => {
    const newId = Math.random().toString(36).substr(2, 9);
    setCourses([...courses, { id: newId, name: '', creditHours: 3, grade: 'A' }]);
  };

  const removeCourse = (id: string) => {
    if (courses.length > 1) {
      setCourses(courses.filter((course) => course.id !== id));
    }
  };

  const updateCourse = (id: string, field: string, value: any) => {
    setCourses(
      courses.map((course) =>
        course.id === id ? { ...course, [field]: value } : course
      )
    );
  };

  const resetCalculator = () => {
    setCourses([
      { id: '1', name: '', creditHours: 3, grade: 'A' },
    ]);
    setFinalSemesterGPA(null);
    setTotalCredits(0);
    setTotalGradePoints(0);
  };

  // Auto-calculate on course changes
  useEffect(() => {
    calculateFinalSemesterGPA();
  }, [courses]);

  const faqs = [
    {
      question: "How do I calculate my final semester GPA?",
      answer: "To calculate your final semester GPA, multiply each course's grade points by its credit hours, sum all the weighted grade points, and divide by the total credit hours. Use our calculator above to do this automatically."
    },
    {
      question: "Does final semester GPA affect cumulative GPA?",
      answer: "Yes, your final semester GPA contributes to your overall cumulative GPA. Each semester's GPA is weighted by its credit hours when calculating your cumulative GPA across all academic terms."
    },
    {
      question: "What is a good final semester GPA?",
      answer: "A good final semester GPA depends on your goals. A 3.5+ is excellent and may qualify for honors or scholarships. A 3.0+ is good for most programs. A 2.0+ is typically the minimum to maintain good academic standing."
    },
    {
      question: "How do credit hours affect GPA?",
      answer: "Credit hours determine how much weight each course carries in your GPA calculation. Higher credit courses have more impact on your GPA than lower credit courses."
    },
    {
      question: "Can final semester grades improve overall GPA?",
      answer: "Yes, strong final semester grades can improve your cumulative GPA, especially if you take more credit hours in your final semester. However, poor grades can also lower your overall GPA."
    }
  ];

  return (
    <>
      <SEOHead
        title="Final Semester GPA Calculator – Calculate Your Final Term GPA"
        description="Use our Final Semester GPA Calculator to calculate your GPA for the final semester. Enter your course grades and credit hours to get accurate GPA results instantly."
        canonical="/gpa-calculators/final-semester-gpa-calculator"
      />

      <CalculatorSchema
        title="Final Semester GPA Calculator"
        description="Calculate your final semester GPA with our easy-to-use calculator. Enter grades and credit hours for accurate results."
        url="/gpa-calculators/final-semester-gpa-calculator"
      />

      <FAQSchema faqs={faqs} />

      <div className="bg-white">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:underline">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/gpa-calculators" className="text-blue-600 hover:underline">GPA Calculators</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700">Final Semester GPA Calculator</span>
          </nav>
        </div>

        {/* Table of Contents */}
        <div className="max-w-6xl mx-auto px-4 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="font-semibold text-blue-800 mb-2">Table of Contents</p>
            <ul className="text-sm text-blue-700 space-y-1">
              <li><a href="#calculator" className="hover:underline">Final Semester GPA Calculator</a></li>
              <li><a href="#what-is" className="hover:underline">What Is a Final Semester GPA</a></li>
              <li><a href="#how-to-calculate" className="hover:underline">How to Calculate Final Semester GPA</a></li>
              <li><a href="#formula" className="hover:underline">Final Semester GPA Formula Explained</a></li>
              <li><a href="#example" className="hover:underline">Example Final Semester GPA Calculation</a></li>
              <li><a href="#importance" className="hover:underline">Why Final Semester GPA Is Important</a></li>
              <li><a href="#faq" className="hover:underline">Frequently Asked Questions</a></li>
              <li><a href="#related" className="hover:underline">Related GPA Calculators</a></li>
            </ul>
          </div>
        </div>

        {/* Header Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h1 id="calculator" className="text-4xl md:text-5xl font-bold mb-4">
              Final Semester GPA Calculator
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
              Calculate your final semester GPA with ease. Enter your course grades and credit hours to determine your final term GPA instantly. Perfect for students planning their academic closure.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            {/* Calculator */}
            <div className="bg-gradient-to-b from-blue-50 to-white rounded-lg shadow-lg p-6 md:p-8 border border-blue-200 mb-12">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-800">
                  Calculate Your Final Semester GPA
                </h2>
                <div className="mt-3 md:mt-0 flex gap-2">
                  <button
                    onClick={resetCalculator}
                    className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-md transition"
                  >
                    Reset
                  </button>
                </div>
              </div>

              {/* Courses List */}
              <div className="space-y-4 mb-8">
                {courses.map((course, index) => (
                  <div
                    key={course.id}
                    className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition items-center"
                  >
                    <div className="sm:col-span-5">
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Course {index + 1}
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Mathematics"
                        value={course.name}
                        onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Credits
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="6"
                        placeholder="3"
                        value={course.creditHours}
                        onChange={(e) => updateCourse(course.id, 'creditHours', parseInt(e.target.value) || 0)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>

                    <div className="sm:col-span-3">
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Grade
                      </label>
                      <select
                        value={course.grade}
                        onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
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

                    <div className="sm:col-span-2 flex justify-end">
                      <button
                        onClick={() => removeCourse(course.id)}
                        disabled={courses.length === 1}
                        className={`px-4 py-2 rounded-md transition text-sm font-semibold ${
                          courses.length === 1
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-red-500 hover:bg-red-600 text-white'
                        }`}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <button
                  onClick={addCourse}
                  className="flex-1 px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition"
                >
                  + Add Course
                </button>
              </div>

              {/* Result Display */}
              {finalSemesterGPA !== null && (
                <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg text-center border border-green-400">
                  <p className="text-white text-sm mb-2">Final Semester GPA</p>
                  <p className="text-5xl font-bold text-white mb-2">{finalSemesterGPA}</p>
                  <p className="text-green-100 text-sm mb-4">
                    {finalSemesterGPA >= 3.8
                      ? '🌟 Excellent - Outstanding final semester'
                      : finalSemesterGPA >= 3.5
                      ? '⭐ Very Good - Strong academic finish'
                      : finalSemesterGPA >= 3.0
                      ? '👍 Good - Solid final semester performance'
                      : finalSemesterGPA >= 2.0
                      ? '📚 Passing - Completed degree requirements'
                      : '⚠️ Below average - Consider academic support'}
                  </p>
                  <div className="text-green-50 text-sm">
                    <p>Total Credit Hours: <strong>{totalCredits}</strong></p>
                    <p>Total Grade Points: <strong>{totalGradePoints}</strong></p>
                  </div>
                </div>
              )}
            </div>

            {/* Information Sections */}
            <article className="space-y-8 mb-12">
              <section>
                <h2 id="what-is" className="text-3xl font-bold text-gray-800 mb-4">What Is a Final Semester GPA</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your final semester GPA represents your grade point average for your last academic term before graduation. It's calculated using the same formula as any other semester GPA, but it holds special significance as it can impact your overall academic record, graduation honors, and future opportunities.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The final semester GPA is particularly important for students who may have struggled earlier in their academic career and want to end on a strong note, or for those aiming for academic honors like cum laude, magna cum laude, or summa cum laude designations.
                </p>
              </section>

              <section>
                <h2 id="how-to-calculate" className="text-3xl font-bold text-gray-800 mb-4">How to Calculate Final Semester GPA</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Calculating your final semester GPA involves a straightforward process that takes into account both your grades and the credit hours for each course. Here's how to do it manually:
                </p>
                <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-4">
                  <li>Convert each letter grade to its corresponding grade point value using the standard 4.0 scale</li>
                  <li>Multiply each course's grade points by its credit hours to get the weighted grade points</li>
                  <li>Sum all the weighted grade points from all courses</li>
                  <li>Sum all the credit hours from all courses</li>
                  <li>Divide the total weighted grade points by the total credit hours</li>
                </ol>
                <p className="text-gray-700 leading-relaxed">
                  Our calculator above automates this process, but understanding the manual calculation helps you verify the results and better comprehend how your grades impact your GPA.
                </p>
              </section>

              <section>
                <h2 id="formula" className="text-3xl font-bold text-gray-800 mb-4">Final Semester GPA Formula Explained</h2>
                <div className="bg-blue-50 p-6 rounded-lg mb-4">
                  <p className="text-xl font-semibold text-blue-800 mb-2">Final Semester GPA = Total Grade Points ÷ Total Credit Hours</p>
                  <p className="text-gray-700">Where: Grade Points = Grade Value × Credit Hours</p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The formula is simple but powerful. Each course contributes to your GPA based on both its grade and its credit weight. Higher credit courses have more influence on your final GPA than lower credit courses.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  For example, an A in a 4-credit course contributes 16 grade points (4.0 × 4), while an A in a 2-credit course only contributes 8 grade points (4.0 × 2). This weighted system ensures that more rigorous courses have appropriate impact on your academic record.
                </p>
              </section>

              {/* Grade Scale Table */}
              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Standard 4.0 GPA Grade Scale</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Letter Grade</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Grade Points</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border border-gray-300 px-4 py-2 font-semibold text-green-600">A</td><td className="border border-gray-300 px-4 py-2">4.0</td><td className="border border-gray-300 px-4 py-2">Excellent</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2 font-semibold text-blue-600">A-</td><td className="border border-gray-300 px-4 py-2">3.7</td><td className="border border-gray-300 px-4 py-2">Very Good</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2 font-semibold text-indigo-600">B+</td><td className="border border-gray-300 px-4 py-2">3.3</td><td className="border border-gray-300 px-4 py-2">Good</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2 font-semibold text-indigo-600">B</td><td className="border border-gray-300 px-4 py-2">3.0</td><td className="border border-gray-300 px-4 py-2">Good</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2 font-semibold text-yellow-600">B-</td><td className="border border-gray-300 px-4 py-2">2.7</td><td className="border border-gray-300 px-4 py-2">Above Average</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2 font-semibold text-yellow-600">C+</td><td className="border border-gray-300 px-4 py-2">2.3</td><td className="border border-gray-300 px-4 py-2">Average</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2 font-semibold text-orange-600">C</td><td className="border border-gray-300 px-4 py-2">2.0</td><td className="border border-gray-300 px-4 py-2">Average</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2 font-semibold text-orange-600">C-</td><td className="border border-gray-300 px-4 py-2">1.7</td><td className="border border-gray-300 px-4 py-2">Below Average</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2 font-semibold text-red-600">D</td><td className="border border-gray-300 px-4 py-2">1.0</td><td className="border border-gray-300 px-4 py-2">Passing</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2 font-semibold text-red-600">F</td><td className="border border-gray-300 px-4 py-2">0.0</td><td className="border border-gray-300 px-4 py-2">Failing</td></tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 id="example" className="text-3xl font-bold text-gray-800 mb-4">Example Final Semester GPA Calculation</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Let's walk through a complete example of calculating a final semester GPA. We'll use three courses with different grades and credit hours:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-white p-4 rounded border">
                      <h3 className="font-semibold text-gray-800">Mathematics</h3>
                      <p className="text-gray-600">Grade: A (4.0)</p>
                      <p className="text-gray-600">Credits: 3</p>
                      <p className="text-blue-600 font-semibold">Grade Points: 4.0 × 3 = 12</p>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h3 className="font-semibold text-gray-800">English</h3>
                      <p className="text-gray-600">Grade: B+ (3.3)</p>
                      <p className="text-gray-600">Credits: 4</p>
                      <p className="text-blue-600 font-semibold">Grade Points: 3.3 × 4 = 13.2</p>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h3 className="font-semibold text-gray-800">Economics</h3>
                      <p className="text-gray-600">Grade: A- (3.7)</p>
                      <p className="text-gray-600">Credits: 3</p>
                      <p className="text-blue-600 font-semibold">Grade Points: 3.7 × 3 = 11.1</p>
                    </div>
                  </div>
                  <div className="bg-blue-100 p-4 rounded">
                    <p className="text-gray-800 font-semibold">Calculation:</p>
                    <p className="text-gray-700">Total Grade Points = 12 + 13.2 + 11.1 = 36.3</p>
                    <p className="text-gray-700">Total Credit Hours = 3 + 4 + 3 = 10</p>
                    <p className="text-blue-800 font-bold text-lg">Final Semester GPA = 36.3 ÷ 10 = 3.63</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  This example demonstrates how the GPA calculation works. Notice how the 4-credit English course has more impact on the final GPA than the 3-credit courses, even though the Economics course received a higher letter grade.
                </p>
              </section>

              <section>
                <h2 id="importance" className="text-3xl font-bold text-gray-800 mb-4">Why Final Semester GPA Is Important</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your final semester GPA carries significant weight in several important areas of your academic and professional life. Here's why it matters:
                </p>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">🎓 Graduation Honors</h3>
                    <p className="text-gray-700">Many colleges award Latin honors (cum laude, magna cum laude, summa cum laude) based on your cumulative GPA at graduation. A strong final semester can help you achieve these prestigious designations.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">💰 Scholarships and Financial Aid</h3>
                    <p className="text-gray-700">Some scholarships require maintaining a minimum GPA. A strong final semester GPA can help you retain funding or qualify for additional awards.</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">📈 Academic Records</h3>
                    <p className="text-gray-700">Your final semester GPA appears on your official transcript and can influence graduate school admissions, job applications, and professional licensing.</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-orange-800 mb-2">🚀 Future Opportunities</h3>
                    <p className="text-gray-700">Employers and graduate programs often look at recent academic performance. A strong final semester demonstrates your ability to perform under pressure and finish strong.</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4">
                  While your final semester GPA is important, remember that it's just one part of your overall academic record. Focus on consistent performance throughout your college career for the best results.
                </p>
              </section>

              {/* FAQ Section */}
              <section id="faq">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <FAQItem
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div>
              </section>

              {/* Related Calculators */}
              <section id="related">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Related GPA Calculators</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Explore our other GPA calculators to help with all aspects of your academic planning:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Link href="/gpa-calculators/term-gpa-calculator" className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition">
                    <h3 className="font-semibold text-blue-800 mb-2">Term GPA Calculator</h3>
                    <p className="text-gray-700 text-sm">Calculate GPA for any academic term</p>
                  </Link>
                  <Link href="/gpa-calculators/college-gpa-calculator" className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition">
                    <h3 className="font-semibold text-blue-800 mb-2">College GPA Calculator</h3>
                    <p className="text-gray-700 text-sm">Calculate overall college GPA</p>
                  </Link>
                  <Link href="/gpa-calculators/gpa-projection-calculator" className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition">
                    <h3 className="font-semibold text-blue-800 mb-2">GPA Projection Calculator</h3>
                    <p className="text-gray-700 text-sm">Project future GPA based on planned grades</p>
                  </Link>
                  <Link href="/gpa-calculators/gpa-improvement-calculator" className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition">
                    <h3 className="font-semibold text-blue-800 mb-2">GPA Improvement Calculator</h3>
                    <p className="text-gray-700 text-sm">Plan how to improve your GPA</p>
                  </Link>
                  <Link href="/gpa-calculators/credit-hour-gpa-calculator" className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition">
                    <h3 className="font-semibold text-blue-800 mb-2">Credit Hour GPA Calculator</h3>
                    <p className="text-gray-700 text-sm">Calculate GPA with credit hour weighting</p>
                  </Link>
                </div>
              </section>

              {/* External Links */}
              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Additional Resources</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For more information about GPA calculations and academic planning, visit these trusted educational resources:
                </p>
                <ul className="space-y-2">
                  <li><a href="https://www.collegeboard.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">College Board - Higher Education Resources</a></li>
                  <li><a href="https://nces.ed.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">National Center for Education Statistics</a></li>
                  <li><a href="https://www.ed.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">U.S. Department of Education</a></li>
                </ul>
              </section>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}
