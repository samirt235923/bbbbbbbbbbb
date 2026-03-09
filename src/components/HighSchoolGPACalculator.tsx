'use client';

import { useState } from 'react';

interface Subject {
  id: string;
  name: string;
  grade: string;
  credits: number;
  isWeighted: boolean;
}

interface GPAResult {
  gpa: number;
  totalPoints: number;
  totalCredits: number;
  breakdown: Array<{
    id: string;
    name: string;
    grade: string;
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

const exampleCourses: Subject[] = [
  { id: '1', name: 'Mathematics (Honors)', grade: 'A', credits: 4, isWeighted: true },
  { id: '2', name: 'English I', grade: 'A-', credits: 3, isWeighted: false },
  { id: '3', name: 'Biology (AP)', grade: 'B+', credits: 4, isWeighted: true },
  { id: '4', name: 'World History', grade: 'A', credits: 3, isWeighted: false },
  { id: '5', name: 'Physical Education', grade: 'A', credits: 1, isWeighted: false },
];

export default function HighSchoolGPACalculator() {
  const [subjects, setSubjects] = useState<Subject[]>([
    { id: '1', name: '', grade: 'A', credits: 3, isWeighted: false },
  ]);
  const [isWeightedMode, setIsWeightedMode] = useState(false);
  const [gpaResult, setGpaResult] = useState<GPAResult | null>(null);

  const calculateGPA = () => {
    if (subjects.length === 0) return;

    let totalPoints = 0;
    let totalCredits = 0;
    const breakdown = subjects.map((subject) => {
      let points = gradePoints[subject.grade] || 0;

      // Apply weighted bonus if enabled and subject is weighted
      if (isWeightedMode && subject.isWeighted) {
        points += 1;
      }

      const coursePoints = points * subject.credits;
      totalPoints += coursePoints;
      totalCredits += subject.credits;

      return {
        id: subject.id,
        name: subject.name || `Course ${subjects.indexOf(subject) + 1}`,
        grade: subject.grade,
        gradePoints: points,
        credits: subject.credits,
        coursePoints: coursePoints,
        percentage: 0, // Will be calculated after totalPoints is known
      };
    });

    // Calculate percentages
    breakdown.forEach((item) => {
      item.percentage = totalCredits > 0 ? (item.credits / totalCredits) * 100 : 0;
    });

    const calculatedGPA = totalCredits > 0 ? totalPoints / totalCredits : 0;
    
    setGpaResult({
      gpa: parseFloat(calculatedGPA.toFixed(3)),
      totalPoints,
      totalCredits,
      breakdown,
    });
  };

  const loadExampleData = () => {
    setSubjects(exampleCourses.map((course) => ({ ...course, id: Math.random().toString(36).substr(2, 9) })));
    setIsWeightedMode(true);
    setGpaResult(null);
  };

  const resetCalculator = () => {
    setSubjects([{ id: '1', name: '', grade: 'A', credits: 3, isWeighted: false }]);
    setIsWeightedMode(false);
    setGpaResult(null);
  };

  const addSubject = () => {
    const newId = Math.random().toString(36).substr(2, 9);
    setSubjects([...subjects, { id: newId, name: '', grade: 'A', credits: 3, isWeighted: false }]);
  };

  const removeSubject = (id: string) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter((subject) => subject.id !== id));
    }
  };

  const updateSubject = (id: string, field: keyof Subject, value: any) => {
    setSubjects(
      subjects.map((subject) =>
        subject.id === id ? { ...subject, [field]: value } : subject
      )
    );
  };

  const getGPAMessage = (gpa: number) => {
    if (gpa >= 3.9) return { message: 'Outstanding Academic Achievement! 🌟', color: 'bg-green-500', textColor: 'text-green-700', icon: '⭐' };
    if (gpa >= 3.7) return { message: 'Excellent Performance! 📈', color: 'bg-blue-500', textColor: 'text-blue-700', icon: '✨' };
    if (gpa >= 3.5) return { message: 'Very Good Performance 👏', color: 'bg-blue-400', textColor: 'text-blue-600', icon: '👍' };
    if (gpa >= 3.0) return { message: 'Good Academic Progress 📚', color: 'bg-teal-500', textColor: 'text-teal-700', icon: '📚' };
    if (gpa >= 2.5) return { message: 'Satisfactory Performance ✓', color: 'bg-amber-500', textColor: 'text-amber-700', icon: '✓' };
    if (gpa >= 2.0) return { message: 'Average Performance', color: 'bg-yellow-500', textColor: 'text-yellow-700', icon: '→' };
    return { message: 'Room for Improvement - Keep Trying! 💪', color: 'bg-orange-500', textColor: 'text-orange-700', icon: '💪' };
  };

  return (
    <div className="space-y-6">
      {/* Header with Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between bg-gradient-to-r from-primary-50 to-primary-100 p-4 rounded-2xl border border-primary-200">
        <div>
          <h3 className="font-bold text-secondary-900 text-lg mb-1">High School GPA Calculator</h3>
          <p className="text-sm text-secondary-600">Add your courses and grades to calculate your GPA instantly</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <button
            onClick={loadExampleData}
            className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors text-sm whitespace-nowrap"
          >
            📊 Load Example
          </button>
          <button
            onClick={resetCalculator}
            className="px-4 py-2 bg-secondary-300 hover:bg-secondary-400 text-secondary-900 font-medium rounded-lg transition-colors text-sm whitespace-nowrap"
          >
            🔄 Reset
          </button>
        </div>
      </div>

      {/* Weighted GPA Toggle */}
      <div className="flex items-center justify-between p-4 bg-secondary-50 rounded-2xl border border-secondary-200 hover:border-primary-300 transition-colors">
        <div>
          <h3 className="font-semibold text-secondary-900 text-lg">Weighted GPA Mode</h3>
          <p className="text-sm text-secondary-600 mt-1">
            Honors/AP courses: +1 grade point (e.g., Honors A = 5.0)
          </p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isWeightedMode}
            onChange={(e) => {
              setIsWeightedMode(e.target.checked);
              setGpaResult(null);
            }}
          />
          <div className="w-14 h-7 bg-secondary-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary-600 shadow-md"></div>
        </label>
      </div>

      {/* GPA Scale Reference */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-white rounded-xl p-3 border border-secondary-200 text-center">
          <div className="text-xs text-secondary-600 font-medium">A</div>
          <div className="text-xl font-bold text-primary-600">4.0</div>
          <div className="text-xs text-secondary-500">Excellent</div>
        </div>
        <div className="bg-white rounded-xl p-3 border border-secondary-200 text-center">
          <div className="text-xs text-secondary-600 font-medium">B</div>
          <div className="text-xl font-bold text-accent-600">3.0</div>
          <div className="text-xs text-secondary-500">Good</div>
        </div>
        <div className="bg-white rounded-xl p-3 border border-secondary-200 text-center">
          <div className="text-xs text-secondary-600 font-medium">C</div>
          <div className="text-xl font-bold text-warning-600">2.0</div>
          <div className="text-xs text-secondary-500">Average</div>
        </div>
        <div className="bg-white rounded-xl p-3 border border-secondary-200 text-center">
          <div className="text-xs text-secondary-600 font-medium">F</div>
          <div className="text-xl font-bold text-red-600">0.0</div>
          <div className="text-xs text-secondary-500">Failing</div>
        </div>
      </div>

      {/* Subjects Input */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-secondary-900">Your Courses</h3>
          <span className="text-sm text-secondary-600 bg-secondary-100 px-3 py-1 rounded-full">{subjects.length} course{subjects.length !== 1 ? 's' : ''}</span>
        </div>

        {subjects.map((subject, index) => (
          <div
            key={subject.id}
            className="relative bg-white rounded-2xl p-6 border border-secondary-200 hover:border-primary-400 hover:shadow-md transition-all duration-200 group"
          >
            {/* Subject Number Badge */}
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg text-white font-bold text-sm">
              {index + 1}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
              {/* Subject Name */}
              <div className="md:col-span-3">
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Course Name <span className="text-secondary-400">(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., Honors Algebra II"
                  value={subject.name}
                  onChange={(e) => updateSubject(subject.id, 'name', e.target.value)}
                  className="w-full px-4 py-3 bg-secondary-50 border border-secondary-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-secondary-900 placeholder-secondary-400 text-sm"
                />
              </div>

              {/* Grade */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Grade
                </label>
                <select
                  value={subject.grade}
                  onChange={(e) => {
                    updateSubject(subject.id, 'grade', e.target.value);
                    setGpaResult(null); // Reset GPA when grade changes
                  }}
                  className="w-full px-4 py-3 bg-secondary-50 border border-secondary-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-secondary-900 appearance-none cursor-pointer text-sm font-medium"
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
              <div className="md:col-span-1.5">
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Credits
                </label>
                <input
                  type="number"
                  min="0.5"
                  max="12"
                  step="0.5"
                  placeholder="3"
                  value={subject.credits}
                  onChange={(e) => {
                    updateSubject(subject.id, 'credits', parseFloat(e.target.value) || 0);
                    setGpaResult(null); // Reset GPA when credits change
                  }}
                  className="w-full px-4 py-3 bg-secondary-50 border border-secondary-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-secondary-900 placeholder-secondary-400 text-sm"
                />
              </div>

              {/* Weighted Toggle (only show if weighted mode is enabled) */}
              {isWeightedMode && (
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">
                    Honors/AP
                  </label>
                  <label className="relative inline-flex items-center cursor-pointer w-full">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={subject.isWeighted}
                      onChange={(e) => {
                        updateSubject(subject.id, 'isWeighted', e.target.checked);
                        setGpaResult(null); // Reset GPA when weighted status changes
                      }}
                    />
                    <div className="w-14 h-7 bg-secondary-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
                </div>
              )}

              {/* Remove Button */}
              <div className={isWeightedMode ? 'md:col-span-2' : 'md:col-span-3.5'}>
                <button
                  onClick={() => removeSubject(subject.id)}
                  disabled={subjects.length === 1}
                  className="w-full px-4 py-3 bg-red-500 hover:bg-red-600 disabled:bg-secondary-300 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:transform-none text-sm"
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
          onClick={addSubject}
          className="flex-1 px-6 py-4 bg-secondary-200 hover:bg-secondary-300 text-secondary-900 font-bold rounded-2xl transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2 text-lg"
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
          className="flex-1 px-6 py-4 bg-gradient-primary hover:shadow-lg text-white font-bold rounded-2xl transition-all duration-200 shadow-md transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 text-lg"
        >
          <span className="flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Calculate GPA
          </span>
        </button>
      </div>

      {/* GPA Result */}
      {gpaResult && (
        <div className="space-y-6 animate-fade-in">
          {/* Main GPA Display */}
          <div className={`${getGPAMessage(gpaResult.gpa).color} rounded-3xl p-8 lg:p-12 text-center text-white shadow-xl`}>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                GPA Calculated Successfully
              </div>

              <div className="mb-6">
                <div className="text-white/90 text-lg mb-2 font-semibold">Your {isWeightedMode ? 'Weighted' : 'Unweighted'} GPA</div>
                <div className="text-7xl lg:text-8xl font-black mb-4 drop-shadow-lg">{gpaResult.gpa.toFixed(2)}</div>
                <div className="text-2xl font-bold">
                  {getGPAMessage(gpaResult.gpa).message}
                </div>
              </div>

              {/* GPA Scale Indicator */}
              <div className="max-w-md mx-auto mt-8">
                <div className="flex justify-between text-xs text-white/80 mb-3 font-semibold">
                  <span>0.0</span>
                  <span>{isWeightedMode ? '5.0' : '4.0'}</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-4">
                  <div
                    className="bg-white h-4 rounded-full transition-all duration-1000 ease-out shadow-lg"
                    style={{ width: `${(gpaResult.gpa / (isWeightedMode ? 5 : 4)) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* GPA Benchmarks */}
          <div className="bg-white rounded-2xl p-6 border border-secondary-200">
            <h4 className="font-bold text-secondary-900 mb-4 text-lg">📊 GPA Benchmarks</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className={`p-3 rounded-lg text-center ${gpaResult.gpa >= 3.9 ? 'bg-green-100 border border-green-300' : 'bg-secondary-50 border border-secondary-200'}`}>
                <div className="text-sm font-bold text-secondary-900">3.9+</div>
                <div className="text-xs text-secondary-600">Excellent</div>
              </div>
              <div className={`p-3 rounded-lg text-center ${gpaResult.gpa >= 3.5 && gpaResult.gpa < 3.9 ? 'bg-blue-100 border border-blue-300' : 'bg-secondary-50 border border-secondary-200'}`}>
                <div className="text-sm font-bold text-secondary-900">3.5-3.9</div>
                <div className="text-xs text-secondary-600">Very Good</div>
              </div>
              <div className={`p-3 rounded-lg text-center ${gpaResult.gpa >= 3.0 && gpaResult.gpa < 3.5 ? 'bg-teal-100 border border-teal-300' : 'bg-secondary-50 border border-secondary-200'}`}>
                <div className="text-sm font-bold text-secondary-900">3.0-3.5</div>
                <div className="text-xs text-secondary-600">Good</div>
              </div>
              <div className={`p-3 rounded-lg text-center ${gpaResult.gpa < 3.0 ? 'bg-amber-100 border border-amber-300' : 'bg-secondary-50 border border-secondary-200'}`}>
                <div className="text-sm font-bold text-secondary-900">Below 3.0</div>
                <div className="text-xs text-secondary-600">Average</div>
              </div>
            </div>
          </div>

          {/* Course Breakdown */}
          <div className="bg-white rounded-2xl p-6 border border-secondary-200 overflow-x-auto">
            <h4 className="font-bold text-secondary-900 mb-4 text-lg">📈 Grade Breakdown</h4>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-primary-300">
                  <th className="text-left py-3 px-4 font-bold text-secondary-900">Course</th>
                  <th className="text-center py-3 px-4 font-bold text-secondary-900">Grade</th>
                  <th className="text-center py-3 px-4 font-bold text-secondary-900">Points</th>
                  <th className="text-center py-3 px-4 font-bold text-secondary-900">Credits</th>
                  <th className="text-center py-3 px-4 font-bold text-secondary-900">Total Points</th>
                  <th className="text-center py-3 px-4 font-bold text-secondary-900">Weight</th>
                </tr>
              </thead>
              <tbody>
                {gpaResult.breakdown.map((course, index) => (
                  <tr key={course.id} className={index % 2 === 0 ? 'bg-secondary-50' : 'bg-white'}>
                    <td className="py-3 px-4 font-semibold text-secondary-900 text-left">{course.name}</td>
                    <td className="py-3 px-4 text-center">
                      <span className="inline-block bg-primary-100 text-primary-700 px-2 py-1 rounded font-bold">
                        {course.grade}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center font-semibold text-secondary-900">{course.gradePoints.toFixed(1)}</td>
                    <td className="py-3 px-4 text-center font-semibold text-secondary-900">{course.credits}</td>
                    <td className="py-3 px-4 text-center font-bold text-primary-600">{course.coursePoints.toFixed(1)}</td>
                    <td className="py-3 px-4 text-center text-secondary-700">{course.percentage.toFixed(1)}%</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-primary-300 bg-primary-50">
                  <td colSpan={2} className="py-3 px-4 font-bold text-secondary-900">TOTAL</td>
                  <td className="py-3 px-4 text-center font-bold text-primary-600">—</td>
                  <td className="py-3 px-4 text-center font-bold text-primary-600">{gpaResult.totalCredits}</td>
                  <td className="py-3 px-4 text-center font-bold text-primary-600">{gpaResult.totalPoints.toFixed(1)}</td>
                  <td className="py-3 px-4 text-center font-bold text-primary-600">100%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Formula Display */}
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-6 border border-primary-200">
            <h4 className="font-bold text-secondary-900 mb-4 text-lg">🧮 GPA Calculation Formula</h4>
            <div className="space-y-3 text-secondary-700">
              <div className="font-mono bg-white rounded-lg p-4 text-center text-lg font-bold text-primary-600 border border-secondary-200">
                GPA = {gpaResult.totalPoints.toFixed(1)} ÷ {gpaResult.totalCredits} = <span className="text-2xl">{gpaResult.gpa.toFixed(3)}</span>
              </div>
              <p className="text-sm text-secondary-600">
                <strong>Formula:</strong> Sum of (Grade Points × Credit Hours) ÷ Total Credit Hours
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
            <h4 className="font-bold text-secondary-900 mb-2">💡 How to Use This Calculator</h4>
            <ul className="text-secondary-700 text-sm space-y-1 list-disc list-inside">
              <li>Enter each course name (optional) and select the grade you earned</li>
              <li>Add credit hours for each course (typically 3-4 credits)</li>
              <li>Toggle weighted mode if you want to include Honors/AP bonuses</li>
              <li>Click "Calculate GPA" to see your instant results and breakdown</li>
              <li>Use "Load Example" to see how the calculator works</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}



