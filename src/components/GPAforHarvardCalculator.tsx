'use client';

import { useMemo, useState } from 'react';

type GradeOption =
  | 'A'
  | 'A-'
  | 'B+'
  | 'B'
  | 'B-'
  | 'C+'
  | 'C'
  | 'C-'
  | 'D'
  | 'F';

type CourseLevel = 'Regular' | 'Honors' | 'AP / Advanced';

interface Course {
  id: string;
  name: string;
  credits: string;
  grade: GradeOption;
  level: CourseLevel;
}

const gradeValues: Record<GradeOption, number> = {
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

const levelWeights: Record<CourseLevel, number> = {
  Regular: 0,
  Honors: 0.5,
  'AP / Advanced': 1.0,
};

function formatNumber(value: number | null) {
  if (value === null) return '-';
  return value.toFixed(3);
}

export default function HarvardGPACalculator() {
  const [courses, setCourses] = useState<Course[]>([
    { id: '1', name: 'Math (AP)', credits: '4', grade: 'A', level: 'AP / Advanced' },
    { id: '2', name: 'English (Honors)', credits: '3', grade: 'A-', level: 'Honors' },
    { id: '3', name: 'History', credits: '3', grade: 'B+', level: 'Regular' },
  ]);
  const [showWeighted, setShowWeighted] = useState(true);

  const computed = useMemo(() => {
    const parsed = courses.map((course) => {
      const credits = parseFloat(course.credits);
      const gradeValue = gradeValues[course.grade];
      const level = course.level ?? 'Regular';
      const weightBonus = levelWeights[level];
      const weightedGradeValue = Math.min(gradeValue + weightBonus, 5.0);

      return {
        credits: Number.isFinite(credits) ? credits : NaN,
        gradeValue,
        weightedGradeValue,
      };
    });

    const invalid = parsed.find((row) => Number.isNaN(row.credits) || row.credits <= 0);
    if (invalid) {
      return {
        error: 'Please enter valid credit hours (greater than 0) for every course.',
        unweightedGpa: null,
        weightedGpa: null,
        totalCredits: null,
        totalGradePoints: null,
        totalWeightedGradePoints: null,
        competitiveness: null,
      };
    }

    const totalCredits = parsed.reduce((sum, row) => sum + row.credits, 0);
    const totalGradePoints = parsed.reduce((sum, row) => sum + row.gradeValue * row.credits, 0);
    const totalWeightedGradePoints = parsed.reduce(
      (sum, row) => sum + row.weightedGradeValue * row.credits,
      0
    );

    const unweightedGpa = totalCredits > 0 ? totalGradePoints / totalCredits : 0;
    const weightedGpa = totalCredits > 0 ? totalWeightedGradePoints / totalCredits : 0;

    const competitiveness = (() => {
      if (totalCredits === 0) return null;
      if (unweightedGpa >= 3.9) {
        return 'Your GPA is competitive for top universities like Harvard. Continue challenging yourself with rigorous coursework and strong grades.';
      }
      if (unweightedGpa >= 3.7) {
        return 'Your GPA is solid, but you may need strong extracurriculars, essays, and test scores to stand out for Harvard admission.';
      }
      return 'Your GPA is below the typical range for Harvard. Focus on improving grades and academic rigor to strengthen your application.';
    })();

    return {
      error: null,
      unweightedGpa: parseFloat(unweightedGpa.toFixed(3)),
      weightedGpa: parseFloat(weightedGpa.toFixed(3)),
      totalCredits: parseFloat(totalCredits.toFixed(2)),
      totalGradePoints: parseFloat(totalGradePoints.toFixed(2)),
      totalWeightedGradePoints: parseFloat(totalWeightedGradePoints.toFixed(2)),
      competitiveness,
    };
  }, [courses]);

  const updateCourse = (id: string, field: keyof Course, value: string) => {
    setCourses((prev) =>
      prev.map((course) => (course.id === id ? { ...course, [field]: value } : course))
    );
  };

  const addCourse = () => {
    setCourses((prev) =>
      prev.concat({ id: Math.random().toString(36).slice(2), name: '', credits: '3', grade: 'A', level: 'Regular' })
    );
  };

  const removeCourse = (id: string) => {
    setCourses((prev) => prev.filter((course) => course.id !== id));
  };

  const clearAll = () => {
    setCourses([{ id: '1', name: '', credits: '3', grade: 'A', level: 'Regular' }]);
    setShowWeighted(true);
  };

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Harvard GPA Calculator</h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter your course grades, credits, and course level to estimate your GPA for Harvard admission.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
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
          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              checked={showWeighted}
              onChange={(e) => setShowWeighted(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            Include weighted GPA (Honors & AP)
          </label>
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

        {computed.error && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {computed.error}
          </div>
        )}

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm font-semibold text-gray-700">Calculated Results</p>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <p className="text-xs text-gray-500">Unweighted GPA</p>
              <p className="text-2xl font-semibold text-gray-900">{formatNumber(computed.unweightedGpa)}</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <p className="text-xs text-gray-500">Weighted GPA</p>
              <p className="text-2xl font-semibold text-gray-900">
                {showWeighted ? formatNumber(computed.weightedGpa) : '–––'}
              </p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <p className="text-xs text-gray-500">Total Credits</p>
              <p className="text-2xl font-semibold text-gray-900">{formatNumber(computed.totalCredits)}</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            GPA formula: <strong>Total Grade Points ÷ Total Credit Hours</strong>.
          </p>

          {computed.competitiveness && (
            <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900">
              <p className="font-semibold">Admission Indicator</p>
              <p className="mt-1">{computed.competitiveness}</p>
            </div>
          )}
        </div>

        <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-4">
          <h3 className="text-sm font-semibold text-gray-800">How weighted GPA works</h3>
          <p className="mt-2 text-sm text-gray-600">
            Weighted GPA gives extra points for honors and advanced courses. Harvard evaluates GPA on an unweighted 4.0 scale, but knowing how rigor impacts your weighted GPA can help you plan a stronger application.
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700">
              <thead>
                <tr>
                  <th className="border-b border-gray-200 px-3 py-2">Course Level</th>
                  <th className="border-b border-gray-200 px-3 py-2">A</th>
                  <th className="border-b border-gray-200 px-3 py-2">B</th>
                  <th className="border-b border-gray-200 px-3 py-2">C</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-gray-200 px-3 py-2">Regular</td>
                  <td className="border-b border-gray-200 px-3 py-2">4.0</td>
                  <td className="border-b border-gray-200 px-3 py-2">3.0</td>
                  <td className="border-b border-gray-200 px-3 py-2">2.0</td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 px-3 py-2">Honors</td>
                  <td className="border-b border-gray-200 px-3 py-2">4.5</td>
                  <td className="border-b border-gray-200 px-3 py-2">3.5</td>
                  <td className="border-b border-gray-200 px-3 py-2">2.5</td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 px-3 py-2">AP / Advanced</td>
                  <td className="border-b border-gray-200 px-3 py-2">5.0</td>
                  <td className="border-b border-gray-200 px-3 py-2">4.0</td>
                  <td className="border-b border-gray-200 px-3 py-2">3.0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
