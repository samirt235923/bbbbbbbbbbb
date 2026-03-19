'use client';

import { useMemo, useState } from 'react';

interface CourseRow {
  id: string;
  grade: string;
  credits: number;
}

const gradeMap: Record<string, number> = {
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

const defaultRows = [
  { id: 'r1', grade: 'A', credits: 3 },
  { id: 'r2', grade: 'B+', credits: 3 },
  { id: 'r3', grade: 'A-', credits: 3 },
  { id: 'r4', grade: 'B', credits: 3 },
];

export default function QuickGPACalculator() {
  const [isQuickMode, setIsQuickMode] = useState(true);
  const [rows, setRows] = useState<CourseRow[]>(defaultRows);
  const [equalCredit, setEqualCredit] = useState(3);

  const addRow = () => {
    const id = `r${Date.now()}`;
    setRows((prev) => [...prev, { id, grade: 'A', credits: 3 }]);
  };

  const removeRow = (id: string) => {
    setRows((prev) => prev.filter((row) => row.id !== id));
  };

  const updateRow = (id: string, field: 'grade' | 'credits', value: string) => {
    setRows((prev) =>
      prev.map((row) =>
        row.id === id
          ? {
              ...row,
              grade: field === 'grade' ? value : row.grade,
              credits:
                field === 'credits' ? Math.max(0, Math.min(12, Number(value) || 0)) : row.credits,
            }
          : row,
      ),
    );
  };

  const reset = () => {
    setRows(defaultRows);
    setEqualCredit(3);
    setIsQuickMode(true);
  };

  const totalGradePoints = useMemo(() => {
    return rows.reduce((sum, row) => {
      const points = gradeMap[row.grade] ?? 0;
      const credits = isQuickMode ? equalCredit : row.credits || 0;
      return sum + points * credits;
    }, 0);
  }, [rows, isQuickMode, equalCredit]);

  const totalCredits = useMemo(() => {
    if (isQuickMode) return rows.length * equalCredit;
    return rows.reduce((sum, row) => sum + (row.credits || 0), 0);
  }, [rows, isQuickMode, equalCredit]);

  const gpa = totalCredits ? Number((totalGradePoints / totalCredits).toFixed(3)) : 0;
  const averageGradePoints = rows.length ? Number((totalGradePoints / rows.length).toFixed(3)) : 0;

  const quickFormulaText = isQuickMode
    ? 'GPA = Total Grade Points ÷ Total Courses (or equal credit units)'
    : 'GPA = Total Grade Points ÷ Total Credit Hours';

  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200">
      <div className="flex flex-wrap items-center gap-3 justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">Quick GPA Calculator</h2>
        <span className="text-xs rounded-lg bg-green-100 text-green-800 px-2 py-1">Instant Real-Time</span>
      </div>

      <div className="mb-4 flex flex-wrap gap-3 items-center">
        <label className="flex items-center gap-2 text-sm font-medium">
          <input
            type="checkbox"
            checked={isQuickMode}
            onChange={(e) => setIsQuickMode(e.target.checked)}
            className="h-4 w-4"
          />
          Quick Mode (equal credits)
        </label>

        <label className="text-sm font-medium">
          Credit per course
          <input
            type="number"
            min={1}
            max={8}
            value={equalCredit}
            disabled={!isQuickMode}
            onChange={(e) => setEqualCredit(Number(e.target.value) || 1)}
            className="w-16 ml-2 px-2 py-1 border border-gray-300 rounded-lg"
          />
        </label>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-700 border-collapse">
          <thead>
            <tr>
              <th className="px-2 py-2">#</th>
              <th className="px-2 py-2">Grade</th>
              <th className="px-2 py-2">Credits</th>
              <th className="px-2 py-2">Grade Points</th>
              <th className="px-2 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => {
              const credits = isQuickMode ? equalCredit : row.credits;
              const gp = (gradeMap[row.grade] ?? 0) * credits;
              return (
                <tr key={row.id} className="border-t border-gray-200">
                  <td className="px-2 py-2">{index + 1}</td>
                  <td className="px-2 py-2">
                    <select
                      value={row.grade}
                      onChange={(e) => updateRow(row.id, 'grade', e.target.value)}
                      className="rounded-lg border border-gray-300 px-2 py-1"
                    >
                      {Object.keys(gradeMap).map((value) => (
                        <option key={value} value={value}>
                          {value} ({gradeMap[value]})
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-2 py-2">
                    <input
                      type="number"
                      min={1}
                      max={12}
                      value={credits}
                      disabled={isQuickMode}
                      onChange={(e) => updateRow(row.id, 'credits', e.target.value)}
                      className="w-20 rounded-lg border border-gray-300 px-2 py-1"
                    />
                  </td>
                  <td className="px-2 py-2">{gp.toFixed(2)}</td>
                  <td className="px-2 py-2">
                    <button
                      onClick={() => removeRow(row.id)}
                      className="text-red-600 hover:text-red-800 text-xs"
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

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={addRow}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
        >
          Add Course
        </button>
        <button
          onClick={() => setRows(defaultRows)}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg text-sm"
        >
          Auto-generate 4 Courses
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm"
        >
          Reset
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-gray-800">
        <div className="rounded-xl border border-gray-200 p-3">
          <div className="font-semibold">GPA Result</div>
          <div className="text-2xl font-bold text-indigo-600">{isNaN(gpa) ? '0.000' : gpa.toFixed(3)}</div>
        </div>
        <div className="rounded-xl border border-gray-200 p-3">
          <div className="font-semibold">Total Courses</div>
          <div className="text-2xl font-bold text-indigo-600">{rows.length}</div>
        </div>
        <div className="rounded-xl border border-gray-200 p-3">
          <div className="font-semibold">Average Grade Points</div>
          <div className="text-2xl font-bold text-indigo-600">{isNaN(averageGradePoints) ? '0.000' : averageGradePoints.toFixed(3)}</div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700">
        <strong>Formula:</strong> {quickFormulaText}
      </div>
    </div>
  );
}
