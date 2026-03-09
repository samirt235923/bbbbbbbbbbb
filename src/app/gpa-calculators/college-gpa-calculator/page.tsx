'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { ReactNode } from 'react';

interface Course {
  id: string;
  name: string;
  grade: string;
  creditHours: number;
}

const gradePoints: { [key: string]: number } = {
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

export default function CollegeGPACalculator() {
  const [courses, setCourses] = useState<Course[]>([
    { id: '1', name: 'Biology', grade: 'A', creditHours: 4 },
    { id: '2', name: 'English', grade: 'B', creditHours: 3 },
  ]);
  const [gpa, setGpa] = useState<number | null>(null);
  const [totalCredits, setTotalCredits] = useState(0);
  const [totalGradePoints, setTotalGradePoints] = useState(0);

  const calculateGPA = () => {
    if (courses.length === 0) return;

    let totalPoints = 0;
    let totalCreds = 0;

    courses.forEach((course) => {
      const points = gradePoints[course.grade] || 0;
      totalPoints += points * course.creditHours;
      totalCreds += course.creditHours;
    });

    setTotalGradePoints(totalPoints);
    setTotalCredits(totalCreds);
    const calculatedGPA = totalCreds > 0 ? totalPoints / totalCreds : 0;
    setGpa(parseFloat(calculatedGPA.toFixed(2)));
  };

  const addCourse = () => {
    const newId = Math.random().toString(36).substr(2, 9);
    setCourses([...courses, { id: newId, name: '', grade: 'A', creditHours: 3 }]);
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

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://gpacalculator.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'GPA Calculators',
                item: 'https://gpacalculator.com/gpa-calculators',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'College GPA Calculator',
                item: 'https://gpacalculator.com/gpa-calculators/college-gpa-calculator',
              },
            ],
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is a good GPA in college?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A GPA of 3.5 or higher is generally considered very good in college. Most colleges look for a minimum GPA of 2.0 for standing, 3.0 for solid performance, and 3.5+ for competitive opportunities like scholarships and graduate programs.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I calculate my GPA in college?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'To calculate college GPA: (1) Multiply each grade value by credit hours to get grade points, (2) Sum all grade points, (3) Add all credit hours, (4) Divide total grade points by total credit hours.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is a 3.5 GPA good for college?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, a 3.5 GPA is considered excellent in most colleges and is well above average. It demonstrates strong academic performance and is competitive for scholarships and graduate programs.',
                },
              },
              {
                '@type': 'Question',
                name: 'What GPA is required for Harvard?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Harvard typically looks for applicants with a GPA of 4.0 or near-perfect. However, GPA is just one factor in admissions. Harvard considers the whole application including test scores, extracurriculars, essays, and recommendations.',
                },
              },
              {
                '@type': 'Question',
                name: 'How many credits affect GPA?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'All credits from graded courses affect your GPA. This includes regular courses, honors courses, and electives. Pass/fail courses, audits, and withdrawals typically do not count toward GPA calculation.',
                },
              },
            ],
          }),
        }}
      />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'College GPA Calculator (Accurate & Free) – Calculate Your GPA Online',
            description: 'Use our free College GPA Calculator to calculate your GPA instantly. Enter your courses, grades, and credit hours to get an accurate GPA for college.',
            image: 'https://gpacalculator.com/og-image.png',
            datePublished: '2024-01-01',
            dateModified: '2024-12-01',
            author: {
              '@type': 'Organization',
              name: 'GPA Calculator',
              url: 'https://gpacalculator.com',
            },
            publisher: {
              '@type': 'Organization',
              name: 'GPA Calculator',
              logo: {
                '@type': 'ImageObject',
                url: 'https://gpacalculator.com/logo.png',
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://gpacalculator.com/gpa-calculators/college-gpa-calculator',
            },
          }),
        }}
      />

      <div className="bg-white">
        {/* Breadcrumb Navigation */}
        <div className="max-w-6xl mx-auto px-4 py-4">
          <nav className="text-sm flex gap-2">
            <Link href="/" className="text-blue-600 hover:underline">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/gpa-calculators" className="text-blue-600 hover:underline">
              GPA Calculators
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700">College GPA Calculator</span>
          </nav>
        </div>

        {/* Header Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              College GPA Calculator
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
              Calculate your college GPA instantly and accurately. Enter your courses, grades, and credit hours to get your GPA in seconds.
            </p>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Table of Contents</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li><a href="#calculator" className="text-blue-600 hover:underline">College GPA Calculator</a></li>
                <li><a href="#what-is-gpa" className="text-blue-600 hover:underline">What is a College GPA</a></li>
                <li><a href="#how-to-calculate" className="text-blue-600 hover:underline">How to Calculate College GPA</a></li>
                <li><a href="#gpa-formula" className="text-blue-600 hover:underline">GPA Formula Explained</a></li>
                <li><a href="#example-calculation" className="text-blue-600 hover:underline">Example GPA Calculation</a></li>
              </ul>
              <ul className="space-y-2">
                <li><a href="#gpa-scale" className="text-blue-600 hover:underline">College GPA Scale (4.0 Scale)</a></li>
                <li><a href="#improve-gpa" className="text-blue-600 hover:underline">Tips to Improve Your College GPA</a></li>
                <li><a href="#faq" className="text-blue-600 hover:underline">Frequently Asked Questions</a></li>
                <li><a href="#related-calculators" className="text-blue-600 hover:underline">Related GPA Calculators</a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            {/* Calculator */}
            <div id="calculator" className="bg-gradient-to-b from-blue-50 to-white rounded-lg shadow-lg p-6 md:p-8 border border-blue-200 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Calculate Your College GPA
              </h2>

              <div className="space-y-4 mb-8">
                {courses.map((course, index) => (
                  <div
                    key={course.id}
                    className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition"
                  >
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Course {index + 1}
                      </label>
                      <input
                        type="text"
                        placeholder="Course Name"
                        value={course.name}
                        onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Grade
                      </label>
                      <select
                        value={course.grade}
                        onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
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

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Credit Hours
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="12"
                        placeholder="Credits"
                        value={course.creditHours}
                        onChange={(e) =>
                          updateCourse(course.id, 'creditHours', parseInt(e.target.value) || 0)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>

                    <div className="flex items-end">
                      <button
                        onClick={() => removeCourse(course.id)}
                        disabled={courses.length === 1}
                        className={`w-full px-4 py-2 rounded-md transition text-sm font-semibold ${
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

              <div className="flex flex-col gap-3 mb-8">
                <button
                  onClick={addCourse}
                  className="w-full px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition"
                >
                  + Add Course
                </button>

                <button
                  onClick={calculateGPA}
                  className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-md transition shadow-lg"
                >
                  Calculate College GPA
                </button>
              </div>

              {gpa !== null && (
                <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg text-center border border-green-400">
                  <p className="text-white text-sm mb-2">Your Current College GPA</p>
                  <p className="text-5xl font-bold text-white mb-2">{gpa}</p>
                  <p className="text-green-100 text-sm">
                    {gpa >= 3.8
                      ? '🌟 Excellent - Top tier performance'
                      : gpa >= 3.5
                      ? '⭐ Very Good - Strong academic standing'
                      : gpa >= 3.0
                      ? '👍 Good - Above average performance'
                      : gpa >= 2.5
                      ? '📈 Satisfactory - Room for improvement'
                      : '⚠️ Needs Improvement - Consider tutoring'}
                  </p>
                  <div className="mt-4 text-green-50 text-sm">
                    <p>Total Grade Points: <strong>{totalGradePoints.toFixed(1)}</strong></p>
                    <p>Total Credit Hours: <strong>{totalCredits}</strong></p>
                  </div>
                </div>
              )}
            </div>

            {/* Information Sections */}
            <article className="space-y-8">
              <section id="what-is-gpa">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">What is a College GPA?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A college GPA (Grade Point Average) is a numerical measure of your academic performance in higher education. It represents the average grade you've earned across all your college coursework, typically calculated on a 4.0 scale where 4.0 represents a perfect A grade and 0.0 represents an F grade.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your college GPA serves as a standardized metric that colleges, universities, employers, and graduate programs use to evaluate your academic achievements. Unlike high school GPA which may include weighted courses, college GPA is typically unweighted and focuses purely on your performance in credit-bearing courses.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Maintaining a strong college GPA is crucial for several reasons. It can determine your eligibility for scholarships, academic honors, internships, and graduate school admissions. Many employers also request GPA information during the hiring process, especially for entry-level positions in competitive fields.
                </p>
              </section>

              <section id="how-to-calculate">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">How to Calculate College GPA</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Calculating your college GPA involves a straightforward mathematical process that considers both your grades and the credit hours of each course. This method ensures that courses with more credit hours have a greater impact on your overall GPA, which makes sense since these courses represent more academic work.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The process involves four main steps: First, convert each letter grade to its corresponding grade point value. Second, multiply each grade point value by the number of credit hours for that course to get the grade points earned. Third, sum all the grade points from all courses. Fourth, sum all the credit hours from all courses. Finally, divide the total grade points by the total credit hours to get your GPA.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our free college GPA calculator automates this entire process for you. Simply enter your course names, grades, and credit hours, and the calculator will instantly provide your accurate GPA along with a detailed breakdown of your grade points and credit hours.
                </p>
              </section>

              <section id="gpa-formula">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">GPA Formula Explained</h2>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">College GPA Formula</h3>
                  <p className="text-2xl font-mono text-blue-800 mb-4">
                    GPA = Total Grade Points ÷ Total Credit Hours
                  </p>
                  <p className="text-gray-700 mb-2">Where:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>Grade Points</strong> = Grade Value × Credit Hours</li>
                    <li><strong>Total Grade Points</strong> = Sum of all Grade Points</li>
                    <li><strong>Total Credit Hours</strong> = Sum of all Credit Hours</li>
                  </ul>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This formula ensures that your GPA accurately reflects the quality and quantity of your academic work. Courses with more credit hours naturally have more influence on your GPA, which is appropriate since they represent more learning and effort.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The 4.0 scale is universally recognized in American higher education. Each letter grade corresponds to a specific numerical value, and these values are multiplied by credit hours to determine the contribution of each course to your overall GPA.
                </p>
              </section>

              <section id="example-calculation">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Example GPA Calculation</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Let's walk through a concrete example to illustrate how college GPA calculation works. We'll calculate the GPA for a student who took three courses in a semester.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Sample Semester Courses</h3>
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Course</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Grade</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Grade Value</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Credit Hours</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Grade Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Biology</td>
                        <td className="border border-gray-300 px-4 py-2">A</td>
                        <td className="border border-gray-300 px-4 py-2">4.0</td>
                        <td className="border border-gray-300 px-4 py-2">4</td>
                        <td className="border border-gray-300 px-4 py-2">16.0</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">English</td>
                        <td className="border border-gray-300 px-4 py-2">B</td>
                        <td className="border border-gray-300 px-4 py-2">3.0</td>
                        <td className="border border-gray-300 px-4 py-2">3</td>
                        <td className="border border-gray-300 px-4 py-2">9.0</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Mathematics</td>
                        <td className="border border-gray-300 px-4 py-2">C</td>
                        <td className="border border-gray-300 px-4 py-2">2.0</td>
                        <td className="border border-gray-300 px-4 py-2">4</td>
                        <td className="border border-gray-300 px-4 py-2">8.0</td>
                      </tr>
                      <tr className="bg-blue-50 font-semibold">
                        <td className="border border-gray-300 px-4 py-2" colSpan={4}>Totals</td>
                        <td className="border border-gray-300 px-4 py-2">33.0 Grade Points</td>
                      </tr>
                      <tr className="bg-blue-50 font-semibold">
                        <td className="border border-gray-300 px-4 py-2" colSpan={4}>Total Credit Hours</td>
                        <td className="border border-gray-300 px-4 py-2">11</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Final GPA Calculation</h3>
                  <p className="text-lg text-green-800 mb-2">
                    GPA = 33.0 Grade Points ÷ 11 Credit Hours = <strong>3.0</strong>
                  </p>
                  <p className="text-gray-700">
                    This student earned a 3.0 GPA for the semester, which is a solid B average. The Biology course (4 credits) had more impact on the GPA than the English course (3 credits), demonstrating how credit hours affect the calculation.
                  </p>
                </div>
              </section>

              <section id="gpa-scale">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">College GPA Scale (4.0 Scale)</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The standard college GPA scale uses a 4.0 system where each letter grade corresponds to a specific numerical value. This scale is used by nearly all colleges and universities in the United States and is recognized by employers and graduate programs worldwide.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Grade Point Conversion Chart</h3>
                    <div className="space-y-2">
                      {Object.entries(gradePoints).map(([grade, points]) => (
                        <div key={grade} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <span className="font-semibold text-gray-800">{grade}</span>
                          <span className="text-blue-600 font-mono">{points}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">GPA Ranges and Performance Levels</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 rounded border-l-4 border-green-500">
                        <div className="font-semibold text-green-800">4.0 - 3.8: Excellent</div>
                        <div className="text-sm text-green-700">Summa Cum Laude, Top 5-10% of class</div>
                      </div>
                      <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-500">
                        <div className="font-semibold text-blue-800">3.7 - 3.5: Very Good</div>
                        <div className="text-sm text-blue-700">Magna Cum Laude, Top 15-20% of class</div>
                      </div>
                      <div className="p-3 bg-yellow-50 rounded border-l-4 border-yellow-500">
                        <div className="font-semibold text-yellow-800">3.4 - 3.0: Good</div>
                        <div className="text-sm text-yellow-700">Cum Laude, Above average performance</div>
                      </div>
                      <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-500">
                        <div className="font-semibold text-orange-800">2.9 - 2.5: Satisfactory</div>
                        <div className="text-sm text-orange-700">Meeting minimum requirements</div>
                      </div>
                      <div className="p-3 bg-red-50 rounded border-l-4 border-red-500">
                        <div className="font-semibold text-red-800">Below 2.5: Needs Improvement</div>
                        <div className="text-sm text-red-700">Academic probation possible</div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mt-6">
                  Understanding the GPA scale is crucial for setting academic goals and interpreting your academic standing. Most colleges require a minimum GPA of 2.0 to maintain good standing and graduate. However, competitive programs, scholarships, and graduate schools often require much higher GPAs, typically 3.0 or above.
                </p>
              </section>

              <section id="improve-gpa">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Tips to Improve Your College GPA</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Improving your college GPA requires consistent effort, good study habits, and strategic course selection. Here are practical tips that can help you boost your academic performance and achieve a higher GPA.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h3 className="font-semibold text-blue-800 mb-2">Study Strategies</h3>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Attend all classes and take detailed notes</li>
                        <li>• Form study groups with high-achieving peers</li>
                        <li>• Use active recall and spaced repetition techniques</li>
                        <li>• Start assignments early to avoid last-minute stress</li>
                        <li>• Seek help from professors during office hours</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h3 className="font-semibold text-green-800 mb-2">Time Management</h3>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Create a weekly study schedule</li>
                        <li>• Prioritize difficult subjects first</li>
                        <li>• Balance coursework with self-care</li>
                        <li>• Use productivity tools like calendars and apps</li>
                        <li>• Avoid procrastination with the Pomodoro technique</li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h3 className="font-semibold text-purple-800 mb-2">Course Selection</h3>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Choose professors with good teaching evaluations</li>
                        <li>• Take courses in your strongest subjects first</li>
                        <li>• Balance challenging and easier courses each semester</li>
                        <li>• Consider course load - quality over quantity</li>
                        <li>• Drop courses early if they're too difficult</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h3 className="font-semibold text-orange-800 mb-2">Academic Resources</h3>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Utilize campus tutoring centers</li>
                        <li>• Join academic support programs</li>
                        <li>• Use online resources like Khan Academy</li>
                        <li>• Form relationships with academic advisors</li>
                        <li>• Track your progress regularly</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mt-6">
                  Remember that GPA improvement takes time and consistent effort. Set realistic goals, track your progress, and celebrate small victories along the way. If you're struggling, don't hesitate to seek help from academic advisors, counselors, or tutoring services. Many colleges offer extensive support systems designed to help students succeed academically.
                </p>
              </section>

              {/* FAQ Section */}
              <section id="faq">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <FAQItem
                    question="What is a good GPA in college?"
                    answer={
                      <div>
                        <p className="mb-2">A GPA of 3.5 or higher is generally considered very good in college. Here's a breakdown:</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li><strong>3.5+</strong>: Excellent - Competitive for scholarships and graduate programs</li>
                          <li><strong>3.0-3.4</strong>: Good - Above average performance</li>
                          <li><strong>2.5-2.9</strong>: Satisfactory - Meeting requirements</li>
                          <li><strong>2.0-2.4</strong>: Minimum - Required for good standing</li>
                          <li><strong>Below 2.0</strong>: At risk - May face academic probation</li>
                        </ul>
                      </div>
                    }
                  />
                  <FAQItem
                    question="How do I calculate my GPA in college?"
                    answer={
                      <div>
                        <p className="mb-2">Follow these steps to calculate your college GPA:</p>
                        <ol className="list-decimal list-inside space-y-1">
                          <li>Convert each letter grade to its numerical value (A=4.0, B=3.0, etc.)</li>
                          <li>Multiply each grade value by the course's credit hours</li>
                          <li>Sum all the grade points from all courses</li>
                          <li>Sum all the credit hours from all courses</li>
                          <li>Divide total grade points by total credit hours</li>
                        </ol>
                        <p className="mt-2">Use our free college GPA calculator above to automate this process!</p>
                      </div>
                    }
                  />
                  <FAQItem
                    question="Is a 3.5 GPA good for college?"
                    answer="Yes, a 3.5 GPA is considered excellent in most colleges and universities. It places you in the top 10-15% of your class and demonstrates strong academic performance. A 3.5 GPA is competitive for many scholarships, honors programs, and graduate school admissions. Many employers also view a 3.5 GPA as a strong indicator of academic ability and work ethic."
                  />
                  <FAQItem
                    question="What GPA is required for Harvard?"
                    answer={
                      <div>
                        <p className="mb-2">Harvard University typically admits students with near-perfect GPAs. While there's no official minimum GPA requirement, successful applicants usually have:</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Unweighted GPA: 3.9-4.0 (often 4.0)</li>
                          <li>Weighted GPA: 4.5-5.0 or higher</li>
                          <li>Top 5-10% of their high school class</li>
                        </ul>
                        <p className="mt-2">However, Harvard considers the whole application including standardized test scores, extracurricular activities, essays, recommendations, and personal qualities. GPA is just one factor in their holistic admissions process.</p>
                      </div>
                    }
                  />
                  <FAQItem
                    question="How many credits affect GPA?"
                    answer={
                      <div>
                        <p className="mb-2">All credit-bearing courses with letter grades affect your GPA. This includes:</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Regular academic courses</li>
                          <li>Honors and advanced placement courses</li>
                          <li>Major and minor requirements</li>
                          <li>General education courses</li>
                          <li>Electives</li>
                        </ul>
                        <p className="mt-2">Courses that typically do NOT affect GPA include pass/fail courses, audited courses, incomplete grades (until resolved), and withdrawn courses. The exact policies vary by institution, so check your college's academic catalog for specific rules.</p>
                      </div>
                    }
                  />
                </div>
              </section>

              {/* Related Calculators */}
              <section id="related-calculators">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Related GPA Calculators</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Explore our other specialized GPA calculators designed to help students at different academic levels calculate their grade point averages accurately.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Link href="/gpa-calculators/weighted-gpa-calculator" className="block p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-purple-800 mb-2">Weighted GPA Calculator</h3>
                    <p className="text-purple-700 text-sm">Calculate GPA with weighted courses (Honors, AP, IB)</p>
                  </Link>
                  <Link href="/gpa-calculators/unweighted-gpa-calculator" className="block p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-blue-800 mb-2">Unweighted GPA Calculator</h3>
                    <p className="text-blue-700 text-sm">Simple GPA calculation without weighted courses</p>
                  </Link>
                  <Link href="/gpa-calculators/high-school-gpa-calculator" className="block p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-green-800 mb-2">High School GPA Calculator</h3>
                    <p className="text-green-700 text-sm">Calculate high school GPA with weighted options</p>
                  </Link>
                  <Link href="/gpa-calculators/cumulative-gpa-calculator" className="block p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-orange-800 mb-2">Cumulative GPA Calculator</h3>
                    <p className="text-orange-700 text-sm">Calculate overall GPA across multiple semesters</p>
                  </Link>
                  <Link href="/gpa-calculators/semester-gpa-calculator" className="block p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-lg border border-red-200 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-red-800 mb-2">Semester GPA Calculator</h3>
                    <p className="text-red-700 text-sm">Calculate GPA for a single semester</p>
                  </Link>
                </div>
              </section>

              {/* External Links */}
              <section className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Additional Resources</h2>
                <p className="text-gray-700 mb-4">
                  For more information about college GPA and academic planning, visit these trusted educational resources:
                </p>
                <div className="space-y-2">
                  <a href="https://www.collegeboard.org" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
                    College Board - College Planning Resources
                  </a>
                  <a href="https://nces.ed.gov" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
                    National Center for Education Statistics
                  </a>
                  <a href="https://www.ed.gov" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
                    U.S. Department of Education
                  </a>
                </div>
              </section>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}


