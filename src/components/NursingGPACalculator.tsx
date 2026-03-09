'use client';

import { useState } from 'react';

interface Course {
  id: string;
  name: string;
  grade: string;
  credits: number;
  courseType: string;
  isScience: boolean;
}

interface GPAResult {
  overallGPA: number;
  scienceGPA: number | null;
  totalPoints: number;
  totalCredits: number;
  sciencePoints: number;
  scienceCredits: number;
  breakdown: Array<{
    id: string;
    name: string;
    grade: string;
    courseType: string;
    isScience: boolean;
    gradePoints: number;
    credits: number;
    coursePoints: number;
    percentage: number;
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

const exampleCourses: Course[] = [
  { id: '1', name: 'Anatomy & Physiology I', grade: 'A', credits: 4, courseType: 'Science Prerequisite', isScience: true },
  { id: '2', name: 'Microbiology', grade: 'B+', credits: 3, courseType: 'Science Prerequisite', isScience: true },
  { id: '3', name: 'English Composition', grade: 'A-', credits: 3, courseType: 'General Education', isScience: false },
  { id: '4', name: 'Psychology', grade: 'B', credits: 3, courseType: 'General Education', isScience: false },
  { id: '5', name: 'Chemistry', grade: 'A', credits: 4, courseType: 'Science Prerequisite', isScience: true },
];

export default function NursingGPACalculator() {
  const [courses, setCourses] = useState<Course[]>([
    { id: '1', name: '', grade: 'A', credits: 3, courseType: 'General Education', isScience: false },
  ]);
  const [gpaResult, setGpaResult] = useState<GPAResult | null>(null);
  const [showScienceGPA, setShowScienceGPA] = useState(false);

  const calculateGPA = () => {
    if (courses.length === 0) return;

    let totalPoints = 0;
    let totalCredits = 0;
    let sciencePoints = 0;
    let scienceCredits = 0;

    const breakdown = courses.map((course) => {
      const points = gradePoints[course.grade] || 0;
      const coursePoints = points * course.credits;
      totalPoints += coursePoints;
      totalCredits += course.credits;

      if (course.isScience) {
        sciencePoints += coursePoints;
        scienceCredits += course.credits;
      }

      return {
        id: course.id,
        name: course.name || `Course ${courses.indexOf(course) + 1}`,
        grade: course.grade,
        courseType: course.courseType,
        isScience: course.isScience,
        gradePoints: points,
        credits: course.credits,
        coursePoints: coursePoints,
        percentage: 0, // Will be calculated after totalPoints is known
      };
    });

    // Calculate percentages
    breakdown.forEach((item) => {
      item.percentage = totalCredits > 0 ? (item.credits / totalCredits) * 100 : 0;
    });

    const overallGPA = totalCredits > 0 ? totalPoints / totalCredits : 0;
    const calculatedScienceGPA = scienceCredits > 0 ? sciencePoints / scienceCredits : null;

    setGpaResult({
      overallGPA: parseFloat(overallGPA.toFixed(3)),
      scienceGPA: calculatedScienceGPA ? parseFloat(calculatedScienceGPA.toFixed(3)) : null,
      totalPoints,
      totalCredits,
      sciencePoints,
      scienceCredits,
      breakdown,
    });
  };

  const loadExampleData = () => {
    setCourses(exampleCourses.map((course) => ({ ...course, id: Math.random().toString(36).substr(2, 9) })));
    setShowScienceGPA(true);
    setGpaResult(null);
  };

  const resetCalculator = () => {
    setCourses([{ id: '1', name: '', grade: 'A', credits: 3, courseType: 'General Education', isScience: false }]);
    setShowScienceGPA(false);
    setGpaResult(null);
  };

  const addCourse = () => {
    const newId = Math.random().toString(36).substr(2, 9);
    setCourses([...courses, { id: newId, name: '', grade: 'A', credits: 3, courseType: 'General Education', isScience: false }]);
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
    if (gpa >= 3.8) return { message: 'Excellent! Strong Nursing School Candidate 🎓', color: 'bg-green-500', textColor: 'text-green-700', icon: '🏆' };
    if (gpa >= 3.5) return { message: 'Very Good! Competitive for Many Programs 💪', color: 'bg-blue-500', textColor: 'text-blue-700', icon: '💎' };
    if (gpa >= 3.2) return { message: 'Good Performance - Consider Improvement 📚', color: 'bg-blue-400', textColor: 'text-blue-600', icon: '📚' };
    if (gpa >= 3.0) return { message: 'Minimum Threshold - Focus on Strengths 🎯', color: 'bg-teal-500', textColor: 'text-teal-700', icon: '✓' };
    if (gpa >= 2.5) return { message: 'Below Average - GPA Improvement Needed 📈', color: 'bg-yellow-500', textColor: 'text-yellow-700', icon: '📈' };
    return { message: 'Significant Improvement Recommended 💪', color: 'bg-orange-500', textColor: 'text-orange-700', icon: '💪' };
  };

  return (
    <div className="space-y-6">
      {/* Header with Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-2xl border border-blue-200">
        <div>
          <h3 className="font-bold text-gray-900 text-lg mb-1">Nursing GPA Calculator</h3>
          <p className="text-sm text-gray-600">Calculate your GPA for nursing school applications</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <button
            onClick={loadExampleData}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-sm whitespace-nowrap"
          >
            📊 Load Example
          </button>
          <button
            onClick={resetCalculator}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-900 font-medium rounded-lg transition-colors text-sm whitespace-nowrap"
          >
            🔄 Reset
          </button>
        </div>
      </div>

      {/* Science GPA Toggle */}
      <div className="flex items-center justify-between p-4 bg-green-50 rounded-2xl border border-green-200 hover:border-blue-300 transition-colors">
        <div>
          <h3 className="font-semibold text-gray-900 text-lg">Calculate Science GPA</h3>
          <p className="text-sm text-gray-600 mt-1">
            Many nursing programs require a separate science GPA calculation
          </p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={showScienceGPA}
            onChange={(e) => setShowScienceGPA(e.target.checked)}
          />
          <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600 shadow-md"></div>
        </label>
      </div>

      {/* GPA Scale Reference */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-white rounded-xl p-3 border border-gray-200 text-center">
          <div className="text-xs text-gray-600 font-medium">A</div>
          <div className="text-xl font-bold text-blue-600">4.0</div>
          <div className="text-xs text-gray-500">Excellent</div>
        </div>
        <div className="bg-white rounded-xl p-3 border border-gray-200 text-center">
          <div className="text-xs text-gray-600 font-medium">B</div>
          <div className="text-xl font-bold text-green-600">3.0</div>
          <div className="text-xs text-gray-500">Good</div>
        </div>
        <div className="bg-white rounded-xl p-3 border border-gray-200 text-center">
          <div className="text-xs text-gray-600 font-medium">C</div>
          <div className="text-xl font-bold text-yellow-600">2.0</div>
          <div className="text-xs text-gray-500">Average</div>
        </div>
        <div className="bg-white rounded-xl p-3 border border-gray-200 text-center">
          <div className="text-xs text-gray-600 font-medium">F</div>
          <div className="text-xl font-bold text-red-600">0.0</div>
          <div className="text-xs text-gray-500">Failing</div>
        </div>
      </div>

      {/* Courses Input */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-900">Your Courses</h3>
          <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">{courses.length} course{courses.length !== 1 ? 's' : ''}</span>
        </div>

        {courses.map((course, index) => (
          <div
            key={course.id}
            className="relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all duration-200 group"
          >
            {/* Course Number Badge */}
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center shadow-lg text-white font-bold text-sm">
              {index + 1}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
              {/* Course Name */}
              <div className="md:col-span-3">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Course Name <span className="text-gray-400">(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., Anatomy & Physiology"
                  value={course.name}
                  onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-400 text-sm"
                />
              </div>

              {/* Grade */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Grade
                </label>
                <select
                  value={course.grade}
                  onChange={(e) => {
                    updateCourse(course.id, 'grade', e.target.value);
                    setGpaResult(null);
                  }}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900 appearance-none cursor-pointer text-sm font-medium"
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
                  <option value="D">D (1.0)</option>
                  <option value="F">F (0.0)</option>
                </select>
              </div>

              {/* Credits */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Credits
                </label>
                <input
                  type="number"
                  min="0.5"
                  max="12"
                  step="0.5"
                  placeholder="3"
                  value={course.credits}
                  onChange={(e) => {
                    updateCourse(course.id, 'credits', parseFloat(e.target.value) || 0);
                    setGpaResult(null);
                  }}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-400 text-sm"
                />
              </div>

              {/* Course Type */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Course Type
                </label>
                <select
                  value={course.courseType}
                  onChange={(e) => updateCourse(course.id, 'courseType', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900 appearance-none cursor-pointer text-sm"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.5rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em',
                    paddingRight: '2.5rem'
                  }}
                >
                  <option value="General Education">General Education</option>
                  <option value="Science Prerequisite">Science Prerequisite</option>
                  <option value="Nursing Core">Nursing Core</option>
                </select>
              </div>

              {/* Science Course Toggle */}
              {showScienceGPA && (
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Science Course
                  </label>
                  <label className="relative inline-flex items-center cursor-pointer w-full">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={course.isScience}
                      onChange={(e) => updateCourse(course.id, 'isScience', e.target.checked)}
                    />
                    <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-600"></div>
                  </label>
                </div>
              )}

              {/* Remove Button */}
              <div className={showScienceGPA ? 'md:col-span-1' : 'md:col-span-3'}>
                <button
                  onClick={() => removeCourse(course.id)}
                  disabled={courses.length === 1}
                  className="w-full px-4 py-3 bg-red-500 hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:transform-none text-sm"
                >
                  <span className="flex items-center justify-center gap-1">
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
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={addCourse}
          className="flex-1 px-6 py-4 bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold rounded-2xl transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 text-lg"
        >
          <span className="flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add Another Course
          </span>
        </button>

        <button
          onClick={calculateGPA}
          className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 to-green-600 hover:shadow-lg text-white font-bold rounded-2xl transition-all duration-200 shadow-md transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg"
        >
          <span className="flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Calculate Nursing GPA
          </span>
        </button>
      </div>

      {/* GPA Result */}
      {gpaResult && (
        <div className="space-y-6 animate-fade-in">
          {/* Main GPA Display */}
          <div className={`${getGPAMessage(gpaResult.overallGPA).color} rounded-3xl p-8 lg:p-12 text-center text-white shadow-xl`}>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Nursing GPA Calculated Successfully
              </div>

              <div className="mb-6">
                <div className="text-white/90 text-lg mb-2 font-semibold">Your Overall GPA</div>
                <div className="text-7xl lg:text-8xl font-black mb-4 drop-shadow-lg">{gpaResult.overallGPA.toFixed(2)}</div>
                <div className="text-2xl font-bold">
                  {getGPAMessage(gpaResult.overallGPA).message}
                </div>
              </div>

              {/* Science GPA Display */}
              {gpaResult.scienceGPA !== null && (
                <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <div className="text-white/90 text-lg mb-2 font-semibold">Science GPA</div>
                  <div className="text-4xl font-bold mb-2">{gpaResult.scienceGPA.toFixed(2)}</div>
                  <div className="text-sm text-white/80">
                    Based on {gpaResult.scienceCredits} science credit hours
                  </div>
                </div>
              )}

              {/* GPA Scale Indicator */}
              <div className="max-w-md mx-auto mt-8">
                <div className="flex justify-between text-xs text-white/80 mb-3 font-semibold">
                  <span>0.0</span>
                  <span>4.0</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-4">
                  <div
                    className="bg-white h-4 rounded-full transition-all duration-1000 ease-out shadow-lg"
                    style={{ width: `${(gpaResult.overallGPA / 4) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* GPA Benchmarks */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-4 text-lg">📊 Nursing School GPA Benchmarks</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className={`p-3 rounded-lg text-center ${gpaResult.overallGPA >= 3.8 ? 'bg-green-100 border border-green-300' : 'bg-gray-50 border border-gray-200'}`}>
                <div className="text-sm font-bold text-gray-900">3.8+</div>
                <div className="text-xs text-gray-600">Highly Competitive</div>
              </div>
              <div className={`p-3 rounded-lg text-center ${gpaResult.overallGPA >= 3.5 && gpaResult.overallGPA < 3.8 ? 'bg-blue-100 border border-blue-300' : 'bg-gray-50 border border-gray-200'}`}>
                <div className="text-sm font-bold text-gray-900">3.5-3.8</div>
                <div className="text-xs text-gray-600">Very Competitive</div>
              </div>
              <div className={`p-3 rounded-lg text-center ${gpaResult.overallGPA >= 3.2 && gpaResult.overallGPA < 3.5 ? 'bg-yellow-100 border border-yellow-300' : 'bg-gray-50 border border-gray-200'}`}>
                <div className="text-sm font-bold text-gray-900">3.2-3.5</div>
                <div className="text-xs text-gray-600">Moderately Competitive</div>
              </div>
              <div className={`p-3 rounded-lg text-center ${gpaResult.overallGPA < 3.2 ? 'bg-red-100 border border-red-300' : 'bg-gray-50 border border-gray-200'}`}>
                <div className="text-sm font-bold text-gray-900">Below 3.2</div>
                <div className="text-xs text-gray-600">Less Competitive</div>
              </div>
            </div>
          </div>

          {/* Course Breakdown */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 overflow-x-auto">
            <h4 className="font-bold text-gray-900 mb-4 text-lg">📈 Grade Breakdown</h4>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-blue-300">
                  <th className="text-left py-3 px-4 font-bold text-gray-900">Course</th>
                  <th className="text-center py-3 px-4 font-bold text-gray-900">Grade</th>
                  <th className="text-center py-3 px-4 font-bold text-gray-900">Type</th>
                  <th className="text-center py-3 px-4 font-bold text-gray-900">Science</th>
                  <th className="text-center py-3 px-4 font-bold text-gray-900">Points</th>
                  <th className="text-center py-3 px-4 font-bold text-gray-900">Credits</th>
                  <th className="text-center py-3 px-4 font-bold text-gray-900">Total Points</th>
                  <th className="text-center py-3 px-4 font-bold text-gray-900">Weight %</th>
                </tr>
              </thead>
              <tbody>
                {gpaResult.breakdown.map((course, index) => (
                  <tr key={course.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 px-4 font-semibold text-gray-900 text-left">{course.name}</td>
                    <td className="py-3 px-4 text-center">
                      <span className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded font-bold">
                        {course.grade}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={`inline-block px-2 py-1 rounded font-bold text-xs ${
                        course.courseType === 'Science Prerequisite' ? 'bg-green-100 text-green-700' :
                        course.courseType === 'Nursing Core' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {course.courseType}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      {course.isScience ? (
                        <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded font-bold text-xs">✓</span>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center font-semibold text-gray-900">{course.gradePoints.toFixed(1)}</td>
                    <td className="py-3 px-4 text-center font-semibold text-gray-900">{course.credits}</td>
                    <td className="py-3 px-4 text-center font-bold text-blue-600">{course.coursePoints.toFixed(1)}</td>
                    <td className="py-3 px-4 text-center text-gray-700">{course.percentage.toFixed(1)}%</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-blue-300 bg-blue-50">
                  <td colSpan={6} className="py-3 px-4 font-bold text-gray-900">OVERALL TOTAL</td>
                  <td className="py-3 px-4 text-center font-bold text-blue-600">{gpaResult.totalPoints.toFixed(1)}</td>
                  <td className="py-3 px-4 text-center font-bold text-blue-600">100%</td>
                </tr>
                {gpaResult.scienceCredits > 0 && (
                  <tr className="border-t border-green-300 bg-green-50">
                    <td colSpan={6} className="py-3 px-4 font-bold text-green-900">SCIENCE TOTAL</td>
                    <td className="py-3 px-4 text-center font-bold text-green-600">{gpaResult.sciencePoints.toFixed(1)}</td>
                    <td className="py-3 px-4 text-center font-bold text-green-600">{((gpaResult.scienceCredits / gpaResult.totalCredits) * 100).toFixed(1)}%</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Formula Display */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 border border-blue-200">
            <h4 className="font-bold text-gray-900 mb-4 text-lg">🧮 Nursing GPA Calculation Formula</h4>
            <div className="space-y-3 text-gray-700">
              <div className="font-mono bg-white rounded-lg p-4 text-center text-lg font-bold text-blue-600 border border-gray-200 mb-4">
                Overall GPA = {gpaResult.totalPoints.toFixed(1)} ÷ {gpaResult.totalCredits} = <span className="text-2xl">{gpaResult.overallGPA.toFixed(3)}</span>
              </div>
              {gpaResult.scienceGPA && (
                <div className="font-mono bg-white rounded-lg p-4 text-center text-lg font-bold text-green-600 border border-gray-200 mb-4">
                  Science GPA = {gpaResult.sciencePoints.toFixed(1)} ÷ {gpaResult.scienceCredits} = <span className="text-2xl">{gpaResult.scienceGPA.toFixed(3)}</span>
                </div>
              )}
              <p className="text-sm text-gray-600">
                <strong>Formula:</strong> GPA = Σ(Grade Points × Credits) ÷ Total Credits
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Help Text */}
      <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-3.5 h-3.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-2">💡 How to Use This Calculator</h4>
            <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
              <li>Enter each course with its grade and credit hours</li>
              <li>Select course type (General Education, Science Prerequisite, or Nursing Core)</li>
              <li>Enable Science GPA calculation if needed for your nursing program</li>
              <li>Mark science courses (Biology, Chemistry, Anatomy, etc.) as science courses</li>
              <li>Click "Calculate Nursing GPA" to see instant results and detailed breakdown</li>
              <li>Use "Load Example" to see how the calculator works with sample nursing courses</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}




