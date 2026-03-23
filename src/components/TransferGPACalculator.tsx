'use client';

import { useState, useEffect } from 'react';

interface Course {
  id: number;
  name: string;
  credits: number;
  grade: string;
}

const gradeScale: { [key: string]: number } = {
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

export default function TransferGPACalculator() {
  const [previousCourses, setPreviousCourses] = useState<Course[]>([
    { id: 1, name: '', credits: 3, grade: 'A' }
  ]);
  const [newCourses, setNewCourses] = useState<Course[]>([
    { id: 1, name: '', credits: 3, grade: 'A' }
  ]);

  const [results, setResults] = useState({
    previousGPA: 0,
    previousCredits: 0,
    newGPA: 0,
    newCredits: 0,
    combinedGPA: 0,
    totalCredits: 0,
  });

  const calculateGPA = (courses: Course[]) => {
    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach(course => {
      if (course.name.trim() && course.credits > 0) {
        const gradeValue = gradeScale[course.grade] || 0;
        totalPoints += gradeValue * course.credits;
        totalCredits += course.credits;
      }
    });

    const gpa = totalCredits > 0 ? totalPoints / totalCredits : 0;
    return { gpa: parseFloat(gpa.toFixed(2)), credits: totalCredits };
  };

  useEffect(() => {
    const previous = calculateGPA(previousCourses);
    const newCalc = calculateGPA(newCourses);

    const combinedPoints = (previous.gpa * previous.credits) + (newCalc.gpa * newCalc.credits);
    const combinedCredits = previous.credits + newCalc.credits;
    const combinedGPA = combinedCredits > 0 ? combinedPoints / combinedCredits : 0;

    setResults({
      previousGPA: previous.gpa,
      previousCredits: previous.credits,
      newGPA: newCalc.gpa,
      newCredits: newCalc.credits,
      combinedGPA: parseFloat(combinedGPA.toFixed(2)),
      totalCredits: combinedCredits,
    });
  }, [previousCourses, newCourses]);

  const addCourse = (section: 'previous' | 'new') => {
    const newId = Date.now();
    const newCourse: Course = { id: newId, name: '', credits: 3, grade: 'A' };

    if (section === 'previous') {
      setPreviousCourses([...previousCourses, newCourse]);
    } else {
      setNewCourses([...newCourses, newCourse]);
    }
  };

  const removeCourse = (section: 'previous' | 'new', id: number) => {
    if (section === 'previous') {
      setPreviousCourses(previousCourses.filter(course => course.id !== id));
    } else {
      setNewCourses(newCourses.filter(course => course.id !== id));
    }
  };

  const updateCourse = (section: 'previous' | 'new', id: number, field: keyof Course, value: string | number) => {
    const updateCourses = (courses: Course[]) =>
      courses.map(course =>
        course.id === id ? { ...course, [field]: value } : course
      );

    if (section === 'previous') {
      setPreviousCourses(updateCourses(previousCourses));
    } else {
      setNewCourses(updateCourses(newCourses));
    }
  };

  const CourseSection = ({ title, courses, section }: { title: string; courses: Course[]; section: 'previous' | 'new' }) => (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-4">
        {courses.map((course, index) => (
          <div key={course.id} className="flex flex-wrap gap-4 items-end p-4 bg-gray-50 rounded-lg">
            <div className="flex-1 min-w-0">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Course Name
              </label>
              <input
                type="text"
                value={course.name}
                onChange={(e) => updateCourse(section, course.id, 'name', e.target.value)}
                placeholder={`Course ${index + 1}`}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="w-24">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Credits
              </label>
              <input
                type="number"
                min="0"
                max="6"
                value={course.credits}
                onChange={(e) => updateCourse(section, course.id, 'credits', parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="w-20">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Grade
              </label>
              <select
                value={course.grade}
                onChange={(e) => updateCourse(section, course.id, 'grade', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {Object.keys(gradeScale).map(grade => (
                  <option key={grade} value={grade}>{grade}</option>
                ))}
              </select>
            </div>
            {courses.length > 1 && (
              <button
                onClick={() => removeCourse(section, course.id)}
                className="px-3 py-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            )}
          </div>
        ))}
        <button
          onClick={() => addCourse(section)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Course
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Grade Conversion Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="border px-4 py-2 text-left">Letter Grade</th>
                <th className="border px-4 py-2 text-center">GPA Value</th>
                <th className="border px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(gradeScale).map(([grade, value]) => (
                <tr key={grade}>
                  <td className="border px-4 py-2 font-medium">{grade}</td>
                  <td className="border px-4 py-2 text-center">{value}</td>
                  <td className="border px-4 py-2">
                    {value >= 3.7 ? 'Excellent' :
                     value >= 3.0 ? 'Good' :
                     value >= 2.0 ? 'Satisfactory' :
                     value >= 1.0 ? 'Poor' : 'Fail'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <CourseSection title="Previous College Courses" courses={previousCourses} section="previous" />
      <CourseSection title="New College Courses" courses={newCourses} section="new" />

      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">GPA Results</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold">{results.previousGPA}</div>
            <div className="text-sm opacity-90">Previous GPA</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{results.newGPA}</div>
            <div className="text-sm opacity-90">New GPA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">{results.combinedGPA}</div>
            <div className="text-sm opacity-90">Combined GPA</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{results.totalCredits}</div>
            <div className="text-sm opacity-90">Total Credits</div>
          </div>
        </div>
      </div>
    </div>
  );
}
