'use client';

import { useState } from 'react';

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
  'D+': 1.3,
  'D': 1.0,
  'F': 0.0,
};

export default function GPACalculator() {
  const [courses, setCourses] = useState<Course[]>([
    { id: '1', name: '', grade: 'A', creditHours: 3 },
  ]);
  const [gpa, setGpa] = useState<number | null>(null);

  const calculateGPA = () => {
    if (courses.length === 0) return;

    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach((course) => {
      const points = gradePoints[course.grade] || 0;
      totalPoints += points * course.creditHours;
      totalCredits += course.creditHours;
    });

    const calculatedGPA = totalCredits > 0 ? totalPoints / totalCredits : 0;
    setGpa(parseFloat(calculatedGPA.toFixed(2)));
  };

  const addCourse = () => {
    const newId = Math.random().toString(36).substr(2, 9);
    setCourses([...courses, { id: newId, name: '', grade: 'A', creditHours: 3 }]);
  };

  const removeCourse = (id: string) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const updateCourse = (id: string, field: string, value: any) => {
    setCourses(
      courses.map((course) =>
        course.id === id ? { ...course, [field]: value } : course
      )
    );
  };

  const getGPAMessage = (gpa: number) => {
    if (gpa >= 3.8) return { message: 'Excellent Performance!', color: 'success' };
    if (gpa >= 3.5) return { message: 'Very Good Performance!', color: 'primary' };
    if (gpa >= 3.0) return { message: 'Good Performance!', color: 'accent' };
    if (gpa >= 2.5) return { message: 'Satisfactory Performance', color: 'warning' };
    return { message: 'Room for Improvement', color: 'secondary' };
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="card p-8 lg:p-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
            GPA Calculator
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Enter your course information below to calculate your GPA instantly.
            Add multiple courses and get accurate results using the standard 4.0 scale.
          </p>
        </div>

        {/* Course Input Section */}
        <div className="space-y-6 mb-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-secondary-900">Your Courses</h3>
            <div className="text-sm text-secondary-500">
              {courses.length} course{courses.length !== 1 ? 's' : ''} added
            </div>
          </div>

          {courses.map((course, index) => (
            <div
              key={course.id}
              className="relative bg-secondary-50 rounded-2xl p-6 border border-secondary-200 hover:border-primary-300 transition-all duration-200 group"
            >
              {/* Course Number Badge */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">{index + 1}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                {/* Course Name */}
                <div className="md:col-span-4">
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">
                    Course Name <span className="text-secondary-400">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Introduction to Psychology"
                    value={course.name}
                    onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-secondary-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-secondary-900 placeholder-secondary-400"
                  />
                </div>

                {/* Grade */}
                <div className="md:col-span-3">
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">
                    Grade
                  </label>
                  <select
                    value={course.grade}
                    onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-secondary-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-secondary-900 appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: 'right 0.5rem center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '1.5em 1.5em',
                      paddingRight: '2.5rem'
                    }}
                  >
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
                    <option value="F">F (0.0)</option>
                  </select>
                </div>

                {/* Credit Hours */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">
                    Credits
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="12"
                    placeholder="3"
                    value={course.creditHours}
                    onChange={(e) =>
                      updateCourse(course.id, 'creditHours', parseInt(e.target.value) || 0)
                    }
                    className="w-full px-4 py-3 bg-white border border-secondary-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-secondary-900 placeholder-secondary-400"
                  />
                </div>

                {/* Remove Button */}
                <div className="md:col-span-3">
                  <button
                    onClick={() => removeCourse(course.id)}
                    className="w-full px-4 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Remove
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <button
            onClick={addCourse}
            className="flex-1 btn-secondary text-center px-6 py-4 text-lg font-semibold"
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Another Course
            </span>
          </button>

          <button
            onClick={calculateGPA}
            className="flex-1 btn-primary text-center px-6 py-4 text-lg font-semibold"
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Calculate GPA
            </span>
          </button>
        </div>

        {/* GPA Result */}
        {gpa !== null && (
          <div className="bg-gradient-primary rounded-3xl p-8 lg:p-12 text-center text-white shadow-large">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                GPA Calculated Successfully
              </div>

              <div className="mb-4">
                <div className="text-primary-100 text-lg mb-2">Your GPA</div>
                <div className="text-6xl lg:text-7xl font-bold mb-2">{gpa}</div>
                <div className="text-xl font-semibold">
                  {getGPAMessage(gpa).message}
                </div>
              </div>

              {/* GPA Scale Indicator */}
              <div className="max-w-md mx-auto mt-8">
                <div className="flex justify-between text-xs text-primary-200 mb-2">
                  <span>0.0</span>
                  <span>4.0</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div
                    className="bg-white h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${(gpa / 4) * 100}%` }}
                  ></div>
                </div>
                <div className="text-xs text-primary-200 mt-2">
                  Standard 4.0 GPA Scale
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Help Text */}
        <div className="mt-8 p-6 bg-secondary-50 rounded-2xl border border-secondary-200">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-secondary-900 mb-2">How GPA is Calculated</h4>
              <p className="text-secondary-600 text-sm leading-relaxed">
                Your GPA is calculated by multiplying each course's grade points by its credit hours,
                summing these values, and dividing by the total credit hours. This uses the standard
                4.0 GPA scale used by colleges and universities across the United States.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





