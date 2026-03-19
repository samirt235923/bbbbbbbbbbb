'use client';

import { useMemo, useState } from 'react';

type Course = {
  id: string;
  name: string;
  grade: string;
  creditHours: number;
};

const gradeScale4: Record<string, number> = {
  A: 4.0,
  'A-': 3.7,
  'B+': 3.3,
  B: 3.0,
  'B-': 2.7,
  'C+': 2.3,
  C: 2.0,
  'C-': 1.7,
  D: 1.0,
  F: 0.0,
};

const gradeScale4PlusMinus: Record<string, number> = {
  A: 4.0,
  'A-': 3.7,
  'B+': 3.3,
  B: 3.0,
  'B-': 2.7,
  'C+': 2.3,
  C: 2.0,
  'C-': 1.7,
  'D+': 1.3,
  D: 1.0,
  'D-': 0.7,
  F: 0.0,
};

const emptyCourse = () => ({ id: `${Date.now()}-${Math.random()}`, name: '', grade: 'A', creditHours: 3 });

export default function SimpleGPACalculator() {
  const [courses, setCourses] = useState<Course[]>([emptyCourse()]);
  const [usePlusMinus, setUsePlusMinus] = useState(false);

  const gradeOptions = usePlusMinus
    ? Object.keys(gradeScale4PlusMinus)
    : ['A', 'B', 'C', 'D', 'F'];

  const scale = usePlusMinus ? gradeScale4PlusMinus : gradeScale4;

  const totals = useMemo(() => {
    const total = courses.reduce(
      (acc, course) => {
        const credit = Number(course.creditHours) || 0;
        const gradeValue = scale[course.grade] ?? 0;
        const validCredit = credit >= 0 ? credit : 0;
        const gradePoints = gradeValue * validCredit;

        return {
          totalCredits: acc.totalCredits + validCredit,
          totalGradePoints: acc.totalGradePoints + gradePoints,
        };
      },
      { totalCredits: 0, totalGradePoints: 0 }
    );

    const gpa = total.totalCredits > 0 ? total.totalGradePoints / total.totalCredits : 0;

    return {
      ...total,
      gpa: Number(gpa.toFixed(2)),
    };
  }, [courses, scale]);

  const addCourse = () => setCourses((prev) => [...prev, emptyCourse()]);

  const removeCourse = (id: string) => {
    if (courses.length === 1) return;
    setCourses((prev) => prev.filter((course) => course.id !== id));
  };

  const resetCourses = () => setCourses([emptyCourse()]);

  const updateCourse = (id: string, key: keyof Course, value: string | number) => {
    setCourses((prev) =>
      prev.map((course) =>
        course.id === id
          ? {
              ...course,
              [key]: key === 'creditHours' ? Math.max(0, Math.min(30, Number(value))) : value,
            }
          : course
      )
    );
  };

  const isInvalid = courses.some((course) => !course.grade || Number(course.creditHours) <= 0);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 md:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <h3 className="text-xl font-bold text-gray-900">Simple GPA Calculator</h3>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={usePlusMinus}
              onChange={() => setUsePlusMinus((v) => !v)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            Use +/- grades
          </label>
        </div>
      </div>

      <div className="mb-3 text-sm text-gray-600">GPA is recalculated instantly as you type; no buttons needed.</div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-700">
              <th className="px-2 py-2">Course (optional)</th>
              <th className="px-2 py-2">Credits</th>
              <th className="px-2 py-2">Grade</th>
              <th className="px-2 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, idx) => (
              <tr key={course.id} className="border-t border-gray-200">
                <td className="px-2 py-2">
                  <input
                    type="text"
                    value={course.name}
                    onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                    placeholder={`Course ${idx + 1}`}
                    className="w-full border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </td>
                <td className="px-2 py-2 w-24">
                  <input
                    type="number"
                    min={1}
                    max={30}
                    value={course.creditHours}
                    onChange={(e) => updateCourse(course.id, 'creditHours', Number(e.target.value) || 0)}
                    className="w-full border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </td>
                <td className="px-2 py-2 w-40">
                  <select
                    value={course.grade}
                    onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {gradeOptions.map((grade) => (
                      <option key={grade} value={grade}>
                        {grade} ({scale[grade] ?? '0.0'})
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-2 py-2 w-24">
                  <button
                    onClick={() => removeCourse(course.id)}
                    disabled={courses.length === 1}
                    className="text-red-600 disabled:text-gray-400"
                    aria-label={`Remove course ${idx + 1}`}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        <button
          onClick={addCourse}
          className="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700"
        >
          + Add course row
        </button>
        <button
          onClick={resetCourses}
          className="px-3 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm font-semibold hover:bg-gray-200"
        >
          Reset
        </button>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg p-3 bg-blue-50 border border-blue-100">
          <p className="text-xs text-gray-600 uppercase font-semibold">Total Credits</p>
          <p className="text-2xl font-bold text-blue-900">{totals.totalCredits.toFixed(2)}</p>
        </div>
        <div className="rounded-lg p-3 bg-green-50 border border-green-100">
          <p className="text-xs text-gray-600 uppercase font-semibold">Total Grade Points</p>
          <p className="text-2xl font-bold text-green-900">{totals.totalGradePoints.toFixed(2)}</p>
        </div>
        <div className="rounded-lg p-3 bg-indigo-50 border border-indigo-100">
          <p className="text-xs text-gray-600 uppercase font-semibold">GPA Result</p>
          <p className="text-2xl font-bold text-indigo-900">{isInvalid ? 'Check inputs' : totals.gpa.toFixed(2)}</p>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        <p>
          Formula: <strong>GPA = Total Grade Points ÷ Total Credit Hours</strong>
        </p>
        <p>
          Grade Points = Grade Value × Credit Hours
        </p>
      </div>

      <div className="mt-3 text-xs text-gray-500">
        {isInvalid ? 'Some fields need valid credits and grades for accurate result.' : 'Your GPA updates instantly as you enter grades and credits.'}
      </div>
    </div>
  );
}
