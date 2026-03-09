'use client';

import { useState } from 'react';

interface Course {
  id: string;
  name: string;
  grade: string;
  credits: number;
  level: 'regular' | 'honors' | 'ap';
}

const gradePoints: { [key: string]: { [key: string]: number } } = {
  regular: {
    'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7,
    'C+': 2.3, 'C': 2.0, 'C-': 1.7, 'D': 1.0, 'F': 0.0
  },
  honors: {
    'A': 4.5, 'A-': 4.2, 'B+': 3.8, 'B': 3.5, 'B-': 3.2,
    'C+': 2.8, 'C': 2.5, 'C-': 2.2, 'D': 1.5, 'F': 0.0
  },
  ap: {
    'A': 5.0, 'A-': 4.7, 'B+': 4.3, 'B': 4.0, 'B-': 3.7,
    'C+': 3.3, 'C': 3.0, 'C-': 2.7, 'D': 2.0, 'F': 0.0
  }
};

export default function FivePointZeroGPACalculator() {
  const [courses, setCourses] = useState<Course[]>([
    { id: '1', name: '', grade: 'A', credits: 3, level: 'regular' },
  ]);
  const [gpa, setGpa] = useState<number | null>(null);

  const calculateGPA = () => {
    if (courses.length === 0) return;

    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach((course) => {
      const points = gradePoints[course.level][course.grade] || 0;
      totalPoints += points * course.credits;
      totalCredits += course.credits;
    });

    const calculatedGPA = totalCredits > 0 ? totalPoints / totalCredits : 0;
    setGpa(parseFloat(calculatedGPA.toFixed(2)));
  };

  const addCourse = () => {
    const newId = Math.random().toString(36).substr(2, 9);
    setCourses([...courses, { id: newId, name: '', grade: 'A', credits: 3, level: 'regular' }]);
  };

  const removeCourse = (id: string) => {
    if (courses.length > 1) {
      setCourses(courses.filter((course) => course.id !== id));
    }
  };

  const updateCourse = (id: string, field: keyof Course, value: any) => {
    setCourses(
      courses.map((course) =>
        course.id === id ? { ...course, [field]: value } : course
      )
    );
  };

  const getGPAMessage = (gpa: number) => {
    if (gpa >= 4.5) return { message: 'Outstanding Performance!', color: 'success' };
    if (gpa >= 4.0) return { message: 'Excellent Performance!', color: 'primary' };
    if (gpa >= 3.5) return { message: 'Very Good Performance!', color: 'accent' };
    if (gpa >= 3.0) return { message: 'Good Performance!', color: 'warning' };
    return { message: 'Room for Improvement', color: 'secondary' };
  };

  return (
    <div className="space-y-6">
      {/* Calculator Form */}
      <div className="bg-white rounded-xl p-6 shadow-soft border border-secondary-200">
        <h2 className="text-2xl font-bold text-secondary-900 mb-6">5.0 Scale GPA Calculator</h2>

        <div className="space-y-4">
          {courses.map((course, index) => (
            <div key={course.id} className="flex flex-col sm:flex-row gap-4 p-4 bg-secondary-50 rounded-lg border border-secondary-200">
              <div className="flex-1">
                <label className="block text-sm font-medium text-secondary-700 mb-1">
                  Course Name
                </label>
                <input
                  type="text"
                  value={course.name}
                  onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                  placeholder={`Course ${index + 1}`}
                  className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div className="w-full sm:w-24">
                <label className="block text-sm font-medium text-secondary-700 mb-1">
                  Credits
                </label>
                <input
                  type="number"
                  min="0.5"
                  step="0.5"
                  value={course.credits}
                  onChange={(e) => updateCourse(course.id, 'credits', parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div className="w-full sm:w-24">
                <label className="block text-sm font-medium text-secondary-700 mb-1">
                  Grade
                </label>
                <select
                  value={course.grade}
                  onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                  className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
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

              <div className="w-full sm:w-32">
                <label className="block text-sm font-medium text-secondary-700 mb-1">
                  Course Level
                </label>
                <select
                  value={course.level}
                  onChange={(e) => updateCourse(course.id, 'level', e.target.value)}
                  className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="regular">Regular</option>
                  <option value="honors">Honors</option>
                  <option value="ap">AP</option>
                </select>
              </div>

              {courses.length > 1 && (
                <div className="flex items-end">
                  <button
                    onClick={() => removeCourse(course.id)}
                    className="px-3 py-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md transition-colors"
                    title="Remove course"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button
            onClick={addCourse}
            className="flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add Another Course
          </button>

          <button
            onClick={calculateGPA}
            className="flex-1 px-6 py-2 bg-accent-600 text-white rounded-md hover:bg-accent-700 transition-colors font-semibold"
          >
            Calculate 5.0 Scale GPA
          </button>
        </div>

        {/* GPA Result */}
        {gpa !== null && (
          <div className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-200">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Your 5.0 Scale GPA</h3>
              <div className="text-4xl font-bold text-primary-600 mb-2">{gpa}</div>
              <div className={`text-sm font-medium ${
                getGPAMessage(gpa).color === 'success' ? 'text-green-600' :
                getGPAMessage(gpa).color === 'primary' ? 'text-primary-600' :
                getGPAMessage(gpa).color === 'accent' ? 'text-accent-600' :
                getGPAMessage(gpa).color === 'warning' ? 'text-yellow-600' :
                'text-secondary-600'
              }`}>
                {getGPAMessage(gpa).message}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}



