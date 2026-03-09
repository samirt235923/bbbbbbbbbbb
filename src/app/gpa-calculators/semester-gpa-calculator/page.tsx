'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { ReactNode } from 'react';

interface Course {
  id: string;
  name: string;
  creditHours: number;
  grade: string;
}

const gradePoints: { [key: string]: number } = {
  'A+': 4.0, 'A': 4.0, 'A-': 3.7,
  'B+': 3.3, 'B': 3.0, 'B-': 2.7,
  'C+': 2.3, 'C': 2.0, 'C-': 1.7,
  'D+': 1.3, 'D': 1.0, 'D-': 0.7,
  'F': 0.0
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

export default function SemesterGPACalculator() {
  const [courses, setCourses] = useState<Course[]>([
    { id: '1', name: 'Mathematics', creditHours: 3, grade: 'A' },
    { id: '2', name: 'Physics', creditHours: 4, grade: 'B+' },
    { id: '3', name: 'English', creditHours: 3, grade: 'A-' },
  ]);
  const [semesterGPA, setSemesterGPA] = useState<number | null>(null);
  const [totalCredits, setTotalCredits] = useState(0);
  const [semesterName, setSemesterName] = useState('Fall 2024');

  const calculateSemesterGPA = () => {
    if (courses.length === 0) return;

    let totalPoints = 0;
    let totalCreds = 0;

    courses.forEach((course) => {
      const gradePoint = gradePoints[course.grade] || 0;
      totalPoints += gradePoint * course.creditHours;
      totalCreds += course.creditHours;
    });

    setTotalCredits(totalCreds);
    const calculatedGPA = totalCreds > 0 ? totalPoints / totalCreds : 0;
    setSemesterGPA(parseFloat(calculatedGPA.toFixed(2)));
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

  return (
    <>
      <div className="bg-white">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:underline">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/gpa-calculators" className="text-blue-600 hover:underline">GPA Calculators</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700">Semester GPA Calculator</span>
          </nav>
        </div>

        {/* Header Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Semester GPA Calculator
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
              Calculate your GPA for a single semester. Add your courses, credit hours, and grades to get your semester GPA instantly.
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
                  Calculate Your Semester GPA
                </h2>
                <div className="mt-3 md:mt-0">
                  <input
                    type="text"
                    placeholder="Semester Name"
                    value={semesterName}
                    onChange={(e) => setSemesterName(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                  />
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
                        <option value="A+">A+ (4.0)</option>
                        <option value="A">A (4.0)</option>
                        <option value="A-">A- (3.7)</option>
                        <option value="B+">B+ (3.3)</option>
                        <option value="B">B (3.0)</option>
                        <option value="B-">B- (2.7)</option>
                        <option value="C+">C+ (2.3)</option>
                        <option value="C">C (2.0)</option>
                        <option value="C-">C- (1.7)</option>
                        <option value="D+">D+ (1.3)</option>
                        <option value="D">D (1.0)</option>
                        <option value="D-">D- (0.7)</option>
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

                <button
                  onClick={calculateSemesterGPA}
                  className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-md transition shadow-lg"
                >
                  Calculate Semester GPA
                </button>
              </div>

              {/* Result Display */}
              {semesterGPA !== null && (
                <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg text-center border border-green-400">
                  <p className="text-white text-sm mb-2">{semesterName} GPA</p>
                  <p className="text-5xl font-bold text-white mb-2">{semesterGPA}</p>
                  <p className="text-green-100 text-sm mb-4">
                    {semesterGPA >= 3.8
                      ? '🌟 Excellent - Dean\'s List consideration'
                      : semesterGPA >= 3.5
                      ? '⭐ Very Good - Strong academic performance'
                      : semesterGPA >= 3.0
                      ? '👍 Good - Satisfactory performance'
                      : semesterGPA >= 2.0
                      ? '📚 Passing - Room for improvement'
                      : '⚠️ Below average - Seek academic support'}
                  </p>
                  <div className="text-green-50 text-sm">
                    <p>Total Credit Hours: <strong>{totalCredits}</strong></p>
                    <p>Total Grade Points: <strong>{(semesterGPA * totalCredits).toFixed(2)}</strong></p>
                  </div>
                </div>
              )}
            </div>

            {/* Information Sections */}
            <article className="space-y-8 mb-12">
              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">What is Semester GPA?</h2>
                <p className="text-gray-700 leading-relaxed">
                  Your semester GPA is your grade point average for a single academic term. It's calculated by averaging the grade points from all your courses during that semester, weighted by each course's credit hours.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">How to Calculate Semester GPA</h2>
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  <li>Convert each letter grade to its grade point value (A=4.0, B=3.0, etc.)</li>
                  <li>Multiply each course's grade points by its credit hours</li>
                  <li>Add all the weighted grade points together</li>
                  <li>Add all the credit hours together</li>
                  <li>Divide the total grade points by total credit hours</li>
                </ol>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-gray-700 font-semibold">Example:</p>
                  <p className="text-gray-600">Math (3 credits, A) = 3 × 4.0 = 12 grade points</p>
                  <p className="text-gray-600">English (3 credits, B+) = 3 × 3.3 = 9.9 grade points</p>
                  <p className="text-gray-600">Total: (12 + 9.9) ÷ 6 credits = 3.65 GPA</p>
                </div>
              </section>

              {/* Grade Scale Table */}
              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Standard Grade Scale</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-bold text-green-600">A, A+</p>
                    <p className="text-gray-600">4.0 - Excellent</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-bold text-blue-600">A-</p>
                    <p className="text-gray-600">3.7 - Very Good</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-bold text-indigo-600">B+</p>
                    <p className="text-gray-600">3.3 - Good</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-bold text-indigo-600">B</p>
                    <p className="text-gray-600">3.0 - Good</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-bold text-yellow-600">B-</p>
                    <p className="text-gray-600">2.7 - Above Average</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-bold text-yellow-600">C+</p>
                    <p className="text-gray-600">2.3 - Average</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-bold text-orange-600">C</p>
                    <p className="text-gray-600">2.0 - Average</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-bold text-orange-600">C-</p>
                    <p className="text-gray-600">1.7 - Below Average</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-bold text-red-600">D</p>
                    <p className="text-gray-600">1.0 - Passing</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-bold text-red-600">F</p>
                    <p className="text-gray-600">0.0 - Failing</p>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <FAQItem
                    question="How is semester GPA different from cumulative GPA?"
                    answer="Semester GPA only includes courses from one academic term, while cumulative GPA includes all courses from all semesters. Think of semester GPA as a snapshot and cumulative GPA as the full picture."
                  />
                  <FAQItem
                    question="What grades are included in semester GPA?"
                    answer="Semester GPA includes all letter-graded courses you took during that term. Pass/Fail courses, audits, and withdrawals typically don't affect your GPA."
                  />
                  <FAQItem
                    question="How can I improve my semester GPA?"
                    answer="Focus on understanding grading criteria, attend all classes, form study groups, use office hours, and maintain a consistent study schedule. Consider tutoring for challenging subjects."
                  />
                  <FAQItem
                    question="What's the minimum GPA I need?"
                    answer="Most programs require a 2.0 minimum to remain in good standing. Scholarships often require 3.0+, and graduate programs typically look for 3.5+ in your major."
                  />
                </div>
              </section>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}