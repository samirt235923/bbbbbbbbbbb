'use client';

import { useEffect, useMemo, useState } from 'react';

type CourseLevel = 'Regular' | 'Honors' | 'AP / Advanced';

type GradeOption = 'A' | 'B' | 'C' | 'D' | 'F';

interface Course {
  id: string;
  name: string;
  credits: string;
  grade: GradeOption;
  level: CourseLevel;
}

const gradeValues: Record<CourseLevel, Record<GradeOption, number>> = {
  Regular: {
    A: 4.0,
    B: 3.0,
    C: 2.0,
    D: 1.0,
    F: 0.0,
  },
  Honors: {
    A: 4.5,
    B: 3.5,
    C: 2.5,
    D: 1.5,
    F: 0.0,
  },
  'AP / Advanced': {
    A: 5.0,
    B: 4.0,
    C: 3.0,
    D: 2.0,
    F: 0.0,
  },
};

export default function GPAWeightCalculator() {
  const [courses, setCourses] = useState<Course[]>([
    { id: '1', name: 'Math (AP)', credits: '3', grade: 'A', level: 'AP / Advanced' },
    { id: '2', name: 'English (Honors)', credits: '4', grade: 'B', level: 'Honors' },
    { id: '3', name: 'History (Regular)', credits: '3', grade: 'A', level: 'Regular' },
  ]);

  const [error, setError] = useState<string | null>(null);

  const computed = useMemo(() => {
    const parsed = courses.map((course) => {
      const credits = parseFloat(course.credits);
      const gradeValue = gradeValues[course.level][course.grade];
      return {
        credits: Number.isFinite(credits) ? credits : NaN,
        gradeValue,
      };
    });

    const invalid = parsed.find((row) => Number.isNaN(row.credits) || row.credits <= 0);
    if (invalid) {
      setError('Make sure all courses have positive credit hours.');
      return { weightedGPA: null, totalCredits: null, totalGradePoints: null };
    }

    setError(null);

    const totalCredits = parsed.reduce((sum, row) => sum + row.credits, 0);
    const totalGradePoints = parsed.reduce((sum, row) => sum + row.gradeValue * row.credits, 0);
    const weightedGPA = totalCredits > 0 ? totalGradePoints / totalCredits : 0;

    return {
      weightedGPA: parseFloat(weightedGPA.toFixed(3)),
      totalCredits: parseFloat(totalCredits.toFixed(2)),
      totalGradePoints: parseFloat(totalGradePoints.toFixed(2)),
    };
  }, [courses]);

  useEffect(() => {
    // keep error up to date by re-evaluating on courses change
  }, [courses]);

  const updateCourse = (id: string, field: keyof Course, value: string) => {
    setCourses((prev) =>
      prev.map((course) => (course.id === id ? { ...course, [field]: value } : course))
    );
  };

  const addCourse = () => {
    const nextId = Math.random().toString(36).slice(2);
    setCourses((prev) =>
      prev.concat({ id: nextId, name: '', credits: '3', grade: 'A', level: 'Regular' })
    );
  };

  const removeCourse = (id: string) => {
    setCourses((prev) => prev.filter((course) => course.id !== id));
  };

  const clearAll = () => {
    setCourses([{ id: '1', name: '', credits: '3', grade: 'A', level: 'Regular' }]);
    setError(null);
  };

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">GPA Weight Calculator</h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter your courses, credit hours, grade, and course level to calculate your weighted GPA.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={addCourse}
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
          >
            + Add course
          </button>
          <button
            onClick={clearAll}
            className="rounded-lg border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="grid gap-4">
        <div className="grid grid-cols-12 gap-3 items-center text-xs text-gray-500 font-semibold">
          <span className="col-span-4">Course</span>
          <span className="col-span-2">Credits</span>
          <span className="col-span-2">Grade</span>
          <span className="col-span-3">Course Level</span>
          <span className="col-span-1 text-right">Remove</span>
        </div>

        {courses.map((course, index) => (
          <div
            key={course.id}
            className="grid grid-cols-12 gap-3 items-center bg-gray-50 rounded-xl p-3"
          >
            <div className="col-span-4">
              <input
                type="text"
                value={course.name}
                onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                placeholder={`Course ${index + 1}`}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="col-span-2">
              <input
                type="number"
                min="0"
                step="0.5"
                value={course.credits}
                onChange={(e) => updateCourse(course.id, 'credits', e.target.value)}
                placeholder="3"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="col-span-2">
              <select
                value={course.grade}
                onChange={(e) => updateCourse(course.id, 'grade', e.target.value as GradeOption)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="F">F</option>
              </select>
            </div>

            <div className="col-span-3">
              <select
                value={course.level}
                onChange={(e) => updateCourse(course.id, 'level', e.target.value as CourseLevel)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value="Regular">Regular</option>
                <option value="Honors">Honors</option>
                <option value="AP / Advanced">AP / Advanced</option>
              </select>
            </div>

            <div className="col-span-1 text-right">
              <button
                onClick={() => removeCourse(course.id)}
                className="inline-flex items-center justify-center rounded-lg border border-transparent bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 hover:bg-red-100 transition"
                aria-label={`Remove course ${index + 1}`}
              >
                ×
              </button>
            </div>
          </div>
        ))}

        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm font-semibold text-gray-700">Results</p>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <p className="text-xs text-gray-500">Weighted GPA</p>
              <p className="text-2xl font-semibold text-gray-900">
                {computed.weightedGPA !== null ? computed.weightedGPA.toFixed(3) : '-'}
              </p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <p className="text-xs text-gray-500">Total Credits</p>
              <p className="text-2xl font-semibold text-gray-900">
                {computed.totalCredits !== null ? computed.totalCredits : '-'}
              </p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <p className="text-xs text-gray-500">Total Grade Points</p>
              <p className="text-2xl font-semibold text-gray-900">
                {computed.totalGradePoints !== null ? computed.totalGradePoints : '-'}
              </p>
            </div>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            The weighted GPA is calculated using the formula: <strong>Total Weighted Grade Points ÷ Total Credit Hours</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
