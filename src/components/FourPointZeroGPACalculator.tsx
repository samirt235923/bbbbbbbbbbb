'use client';

import React, { useState, useEffect } from 'react';

interface Course {
  id: number;
  name: string;
  credits: number;
  grade: string;
}

interface GPAResult {
  gpa: number;
  totalCredits: number;
  totalGradePoints: number;
  courseBreakdown: Array<{
    name: string;
    grade: string;
    credits: number;
    gradePoints: number;
  }>;
}

const gradePointsMap: { [key: string]: number } = {
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

const exampleCourses: Course[] = [
  { id: 1, name: 'Math', credits: 3, grade: 'A' },
  { id: 2, name: 'English', credits: 3, grade: 'B+' },
  { id: 3, name: 'History', credits: 4, grade: 'B' },
];

const FourPointZeroGPACalculator: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [results, setResults] = useState<GPAResult | null>(null);
  const [nextId, setNextId] = useState(1);

  const calculateGPA = (courseList: Course[]): GPAResult => {
    let totalGradePoints = 0;
    let totalCredits = 0;

    const breakdown = courseList.map(course => {
      const gp = gradePointsMap[course.grade] || 0;
      const gradePts = gp * course.credits;
      totalGradePoints += gradePts;
      totalCredits += course.credits;
      return {
        name: course.name,
        grade: course.grade,
        credits: course.credits,
        gradePoints: Math.round(gradePts * 100) / 100,
      };
    });

    const gpa = totalCredits > 0 ? totalGradePoints / totalCredits : 0;
    return {
      gpa: Math.round(gpa * 100) / 100,
      totalCredits,
      totalGradePoints: Math.round(totalGradePoints * 100) / 100,
      courseBreakdown: breakdown,
    };
  };

  useEffect(() => {
    setResults(calculateGPA(courses));
  }, [courses]);

  const addCourse = () => {
    setCourses([...courses, { id: nextId, name: '', credits: 3, grade: 'A' }]);
    setNextId(nextId + 1);
  };
  const removeCourse = (id: number) => {
    setCourses(courses.filter(c => c.id !== id));
  };
  const updateCourse = (id: number, field: keyof Course, value: string | number) => {
    setCourses(courses.map(c => c.id === id ? { ...c, [field]: value } : c));
  };
  const loadExample = () => {
    setCourses(exampleCourses);
    setNextId(exampleCourses.length + 1);
  };
  const resetCalc = () => {
    setCourses([]);
    setResults(null);
    setNextId(1);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">4.0 Scale GPA Calculator</h2>
        <p className="text-gray-600">Use the standard 4.0 scale to compute your GPA instantly.</p>
      </div>

      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <button onClick={addCourse} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Add Course</button>
        <button onClick={loadExample} className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">Load Example</button>
        <button onClick={resetCalc} className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700">Reset</button>
      </div>

      <div className="grid gap-4 mb-8">
        {courses.map(course => (
          <div key={course.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <div className="grid md:grid-cols-4 gap-4 items-end">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Course Name</label>
                <input type="text" value={course.name} onChange={e => updateCourse(course.id, 'name', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Credits</label>
                <input type="number" min="1" max="6" value={course.credits} onChange={e => updateCourse(course.id, 'credits', parseInt(e.target.value) || 0)} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Grade</label>
                <select value={course.grade} onChange={e => updateCourse(course.id, 'grade', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md">
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
              <div className="flex items-center">
                <button onClick={() => removeCourse(course.id)} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {results && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Results</h3>
          <div className="text-3xl font-bold text-blue-600 mb-2">{results.gpa}</div>
          <div className="text-sm text-gray-700 mb-4">{results.totalGradePoints} grade points / {results.totalCredits} credits</div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border px-4 py-2 text-left">Course</th>
                  <th className="border px-4 py-2 text-center">Grade</th>
                  <th className="border px-4 py-2 text-center">Credits</th>
                  <th className="border px-4 py-2 text-center">Grade Points</th>
                </tr>
              </thead>
              <tbody>
                {results.courseBreakdown.map((c, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border px-4 py-2">{c.name}</td>
                    <td className="border px-4 py-2 text-center">{c.grade}</td>
                    <td className="border px-4 py-2 text-center">{c.credits}</td>
                    <td className="border px-4 py-2 text-center">{c.gradePoints}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-bold text-blue-900 mb-2">Legend</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300">
            <thead><tr className="bg-gray-50"><th className="border px-4 py-2 text-left">Grade</th><th className="border px-4 py-2 text-center">Value</th></tr></thead>
            <tbody>
              <tr><td className="border px-4 py-2">A</td><td className="border px-4 py-2 text-center">4.0</td></tr>
              <tr><td className="border px-4 py-2">A-</td><td className="border px-4 py-2 text-center">3.7</td></tr>
              <tr><td className="border px-4 py-2">B+</td><td className="border px-4 py-2 text-center">3.3</td></tr>
              <tr><td className="border px-4 py-2">B</td><td className="border px-4 py-2 text-center">3.0</td></tr>
              <tr><td className="border px-4 py-2">B-</td><td className="border px-4 py-2 text-center">2.7</td></tr>
              <tr><td className="border px-4 py-2">C+</td><td className="border px-4 py-2 text-center">2.3</td></tr>
              <tr><td className="border px-4 py-2">C</td><td className="border px-4 py-2 text-center">2.0</td></tr>
              <tr><td className="border px-4 py-2">C-</td><td className="border px-4 py-2 text-center">1.7</td></tr>
              <tr><td className="border px-4 py-2">D+</td><td className="border px-4 py-2 text-center">1.3</td></tr>
              <tr><td className="border px-4 py-2">D</td><td className="border px-4 py-2 text-center">1.0</td></tr>
              <tr><td className="border px-4 py-2">F</td><td className="border px-4 py-2 text-center">0.0</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-blue-800">Use this table to convert letter grades to grade point values on a 4.0 scale.</p>
      </div>
    </div>
  );
};

export default FourPointZeroGPACalculator;





