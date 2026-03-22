'use client';

import React, { useState, useEffect } from 'react';

type CourseCategory = 'Science' | 'Non-Science';

interface Course {
  id: number;
  name: string;
  credits: number;
  grade: string;
  category: CourseCategory;
}

interface GPAResult {
  overallGPA: number;
  scienceGPA: number;
  totalCredits: number;
  scienceCredits: number;
  totalGradePoints: number;
  scienceGradePoints: number;
  courseBreakdown: Array<{
    name: string;
    grade: string;
    credits: number;
    gradePoints: number;
    category: CourseCategory;
  }>;
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

const scienceCategories: CourseCategory[] = ['Science'];

const exampleCourses: Course[] = [
  { id: 1, name: 'Biology 101', credits: 4, grade: 'A', category: 'Science' },
  { id: 2, name: 'General Chemistry', credits: 4, grade: 'B+', category: 'Science' },
  { id: 3, name: 'Organic Chemistry', credits: 4, grade: 'A-', category: 'Science' },
  { id: 4, name: 'Physics I', credits: 4, grade: 'B', category: 'Science' },
  { id: 5, name: 'Calculus I', credits: 4, grade: 'A', category: 'Science' },
  { id: 6, name: 'English Literature', credits: 3, grade: 'B', category: 'Non-Science' },
];

const MedicalSchoolGPACalculator: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [results, setResults] = useState<GPAResult | null>(null);
  const [nextId, setNextId] = useState(1);

  const calculateGPA = (courseList: Course[]): GPAResult => {
    let totalGradePoints = 0;
    let totalCredits = 0;
    let scienceGradePoints = 0;
    let scienceCredits = 0;

    const courseBreakdown = courseList.map(course => {
      const gradeValue = gradePoints[course.grade] || 0;
      const gradePointsForCourse = gradeValue * course.credits;

      totalGradePoints += gradePointsForCourse;
      totalCredits += course.credits;

      if (scienceCategories.includes(course.category)) {
        scienceGradePoints += gradePointsForCourse;
        scienceCredits += course.credits;
      }

      return {
        name: course.name,
        grade: course.grade,
        credits: course.credits,
        gradePoints: gradePointsForCourse,
        category: course.category,
      };
    });

    const overallGPA = totalCredits > 0 ? totalGradePoints / totalCredits : 0;
    const scienceGPA = scienceCredits > 0 ? scienceGradePoints / scienceCredits : 0;

    return {
      overallGPA: Math.round(overallGPA * 100) / 100,
      scienceGPA: Math.round(scienceGPA * 100) / 100,
      totalCredits,
      scienceCredits,
      totalGradePoints: Math.round(totalGradePoints * 100) / 100,
      scienceGradePoints: Math.round(scienceGradePoints * 100) / 100,
      courseBreakdown,
    };
  };

  useEffect(() => {
    if (courses.length > 0) {
      setResults(calculateGPA(courses));
    } else {
      setResults(null);
    }
  }, [courses]);

  const addCourse = () => {
    const newCourse: Course = {
      id: nextId,
      name: '',
      credits: 3,
      grade: 'A',
      category: 'Science',
    };
    setCourses([...courses, newCourse]);
    setNextId(nextId + 1);
  };

  const removeCourse = (id: number) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  const updateCourse = (id: number, field: keyof Course, value: string | number) => {
    setCourses(courses.map(course =>
      course.id === id ? { ...course, [field]: value } : course
    ));
  };

  const loadExample = () => {
    setCourses(exampleCourses);
    setNextId(exampleCourses.length + 1);
  };

  const resetCalculator = () => {
    setCourses([]);
    setResults(null);
    setNextId(1);
  };

  const getGPAMessage = (overallGPA: number, scienceGPA: number) => {
    if (overallGPA >= 3.7 && scienceGPA >= 3.7) {
      return "Excellent! Your GPA profile is highly competitive for top medical schools.";
    } else if (overallGPA >= 3.5 && scienceGPA >= 3.5) {
      return "Strong GPA profile. You're competitive for many medical schools.";
    } else if (overallGPA >= 3.2 && scienceGPA >= 3.2) {
      return "Good GPA profile. Consider schools with lower median GPAs.";
    } else {
      return "Consider retaking courses or exploring post-baccalaureate programs.";
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Calculator Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Medical School GPA Calculator</h2>
        <p className="text-gray-600">Calculate your overall GPA and science GPA for medical school applications</p>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <button
          onClick={addCourse}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add Course
        </button>
        <button
          onClick={loadExample}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Load Example
        </button>
        <button
          onClick={resetCalculator}
          className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Course Input Grid */}
      <div className="grid gap-4 mb-8">
        {courses.map((course) => (
          <div key={course.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <div className="grid md:grid-cols-5 gap-4 items-end">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Course Name
                </label>
                <input
                  type="text"
                  value={course.name}
                  onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Biology 101"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Credits
                </label>
                <input
                  type="number"
                  min="1"
                  max="6"
                  value={course.credits}
                  onChange={(e) => updateCourse(course.id, 'credits', parseInt(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Grade
                </label>
                <select
                  value={course.grade}
                  onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  value={course.category}
                  onChange={(e) => updateCourse(course.id, 'category', e.target.value as CourseCategory)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Science">Science (Biology/Chemistry/Physics/Math)</option>
                  <option value="Non-Science">Non-Science</option>
                </select>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => removeCourse(course.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Results */}
      {results && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-4">GPA Results</h3>

          {/* GPA Summary */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-lg font-bold text-blue-900 mb-2">Overall GPA</p>
              <div className="text-3xl font-bold text-blue-600">{results.overallGPA}</div>
              <div className="text-sm text-blue-700 mt-1">
                {results.totalGradePoints} grade points / {results.totalCredits} credits
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-lg font-bold text-green-900 mb-2">Science GPA</p>
              <div className="text-3xl font-bold text-green-600">{results.scienceGPA}</div>
              <div className="text-sm text-green-700 mt-1">
                {results.scienceGradePoints} grade points / {results.scienceCredits} credits
              </div>
            </div>
          </div>

          {/* GPA Message */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-yellow-800 font-medium">
              {getGPAMessage(results.overallGPA, results.scienceGPA)}
            </p>
          </div>

          {/* Course Breakdown */}
          <div className="overflow-x-auto">
            <p className="text-lg font-bold text-gray-900 mb-3">Course Breakdown</p>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left">Course</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">Grade</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">Credits</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">Grade Points</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">Category</th>
                </tr>
              </thead>
              <tbody>
                {results.courseBreakdown.map((course, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border border-gray-300 px-4 py-2">{course.name}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{course.grade}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{course.credits}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{course.gradePoints}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{course.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Formula Display */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="font-bold text-gray-900 mb-2">Calculation Formula</p>
            <div className="text-sm text-gray-700 space-y-1">
              <div><strong>Overall GPA:</strong> {results.totalGradePoints} ÷ {results.totalCredits} = {results.overallGPA}</div>
              {results.scienceCredits > 0 && (
                <div><strong>Science GPA:</strong> {results.scienceGradePoints} ÷ {results.scienceCredits} = {results.scienceGPA}</div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Help Text */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-bold text-blue-900 mb-2">How to Use This Calculator</h3>
        <ul className="text-blue-800 text-sm space-y-1">
          <li>• Add courses by clicking "Add Course"</li>
          <li>• Enter course name, credit hours, grade, and category</li>
          <li>• Science GPA includes Biology, Chemistry, Physics, and Math courses</li>
          <li>• GPA updates automatically as you enter information</li>
          <li>• Use "Load Example" to see how it works with sample courses</li>
        </ul>
      </div>
    </div>
  );
};

export default MedicalSchoolGPACalculator;





