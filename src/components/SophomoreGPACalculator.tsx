'use client';

import { useMemo, useState } from 'react';

type CourseType = 'Regular' | 'Honors' | 'AP';

interface CourseRow {
  id: string;
  courseName: string;
  credits: number;
  grade: string;
  courseType: CourseType;
}

const gradeValue: Record<string, number> = {
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

const defaultRows: CourseRow[] = [
  { id: 's1', courseName: 'Accounting', credits: 3, grade: 'A', courseType: 'Regular' },
  { id: 's2', courseName: 'Statistics', credits: 4, grade: 'B+', courseType: 'Regular' },
  { id: 's3', courseName: 'Marketing', credits: 3, grade: 'A-', courseType: 'Regular' },
];

const getTypeBoost = (type: CourseType) => {
  if (type === 'Honors') return 0.5;
  if (type === 'AP') return 1.0;
  return 0;
};

export default function SophomoreGPACalculator() {
  const [rows, setRows] = useState<CourseRow[]>(defaultRows);

  const addRow = () => {
    const id = `s${Date.now()}`;
    setRows((prev) => [...prev, { id, courseName: '', credits: 3, grade: 'A', courseType: 'Regular' }]);
  };

  const removeRow = (id: string) => {
    setRows((prev) => prev.filter((row) => row.id !== id));
  };

  const reset = () => setRows(defaultRows);

  const updateRow = (id: string, key: keyof CourseRow, value: string | number) => {
    setRows((prev) =>
      prev.map((row) =>
        row.id !== id
          ? row
          : {
              ...row,
              [key]: key === 'credits' ? Math.max(0, Math.min(12, Number(value) || 0)) : value,
            },
      ),
    );
  };

  const totals = useMemo(() => {
    return rows.reduce(
      (acc, row) => {
        const grade = gradeValue[row.grade] ?? 0;
        const credit = Number(row.credits) || 0;
        const gradePoints = grade * credit;
        const weightedPoints = Math.min(grade + getTypeBoost(row.courseType), 5.0) * credit;
        return {
          totalCredits: acc.totalCredits + credit,
          totalGradePoints: acc.totalGradePoints + gradePoints,
          totalWeightedGradePoints: acc.totalWeightedGradePoints + weightedPoints,
        };
      },
      { totalCredits: 0, totalGradePoints: 0, totalWeightedGradePoints: 0 },
    );
  }, [rows]);

  const gpa = totals.totalCredits ? Number((totals.totalGradePoints / totals.totalCredits).toFixed(3)) : 0;
  const weightedGpa = totals.totalCredits
    ? Number((totals.totalWeightedGradePoints / totals.totalCredits).toFixed(3))
    : 0;

  return (
    <section className="bg-white shadow-sm border border-gray-200 rounded-2xl p-5 md:p-7">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
        <h2 className="text-2xl font-bold text-indigo-800">Sophomore GPA Calculator</h2>
        <p className="text-sm text-gray-600">Instant result for second-year college GPA planning.</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-700 border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-2 py-2">Course Name</th>
              <th className="px-2 py-2">Credits</th>
              <th className="px-2 py-2">Grade</th>
              <th className="px-2 py-2">Type</th>
              <th className="px-2 py-2">Grade Points</th>
              <th className="px-2 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => {
              const baseGrade = gradeValue[row.grade] ?? 0;
              const credit = Number(row.credits) || 0;
              const points = baseGrade * credit;
              return (
                <tr key={row.id} className="border-t border-gray-200">
                  <td className="px-2 py-2">
                    <input
                      type="text"
                      placeholder={`Course ${idx + 1}`}
                      value={row.courseName}
                      onChange={(e) => updateRow(row.id, 'courseName', e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-2 py-1"
                    />
                  </td>
                  <td className="px-2 py-2">
                    <input
                      type="number"
                      min={1}
                      max={12}
                      value={valueOrDefault(row.credits, 0)}
                      onChange={(e) => updateRow(row.id, 'credits', Number(e.target.value))}
                      className="w-20 rounded-lg border border-gray-300 px-2 py-1"
                    />
                  </td>
                  <td className="px-2 py-2">
                    <select
                      value={row.grade}
                      onChange={(e) => updateRow(row.id, 'grade', e.target.value)}
                      className="rounded-lg border border-gray-300 px-2 py-1"
                    >
                      {Object.entries(gradeValue).map(([label, val]) => (
                        <option key={label} value={label}>
                          {label} ({val.toFixed(1)})
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-2 py-2">
                    <select
                      value={row.courseType}
                      onChange={(e) => updateRow(row.id, 'courseType', e.target.value as CourseType)}
                      className="rounded-lg border border-gray-300 px-2 py-1"
                    >
                      <option value="Regular">Regular</option>
                      <option value="Honors">Honors (+0.5)</option>
                      <option value="AP">AP (+1.0)</option>
                    </select>
                  </td>
                  <td className="px-2 py-2">{points.toFixed(2)}</td>
                  <td className="px-2 py-2">
                    <button
                      onClick={() => removeRow(row.id)}
                      className="text-xs font-semibold text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <button
          onClick={addRow}
          className="rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm hover:bg-indigo-700"
        >
          Add Course
        </button>
        <button
          onClick={reset}
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50"
        >
          Reset
        </button>
        <div className="rounded-lg border border-gray-300 p-3 text-sm bg-gray-50">
          <strong>Formula:</strong>
          <p className="mt-1">Sophomore GPA = Total Grade Points ÷ Total Credit Hours</p>
          <p>Grade Points = Grade Value × Credit Hours</p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-gray-200 p-3 bg-slate-50">
          <p className="text-xs text-gray-500">Total Credits</p>
          <p className="text-2xl font-bold text-indigo-700">{totals.totalCredits}</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-3 bg-slate-50">
          <p className="text-xs text-gray-500">Total Grade Points</p>
          <p className="text-2xl font-bold text-indigo-700">{totals.totalGradePoints.toFixed(2)}</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-3 bg-slate-50">
          <p className="text-xs text-gray-500">Sophomore GPA</p>
          <p className="text-2xl font-bold text-indigo-700">{totals.totalCredits ? gpa.toFixed(3) : '0.000'}</p>
        </div>
      </div>

      <div className="mt-3 rounded-xl border border-gray-200 p-3 bg-slate-50">
        <p className="text-xs text-gray-500">Weighted GPA (Honors/AP included)</p>
        <p className="text-xl font-semibold text-indigo-700">{totals.totalCredits ? weightedGpa.toFixed(3) : '0.000'}</p>
      </div>
    </section>
  );
}

function valueOrDefault(value: number | string, fallback: number) {
  if (typeof value === 'number') return value;
  const parsed = Number(value);
  return Number.isNaN(parsed) ? fallback : parsed;
}
