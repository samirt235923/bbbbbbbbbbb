'use client';

import { useMemo, useState } from 'react';

function getLetterGrade(percentage: number) {
  if (percentage >= 90) return 'A';
  if (percentage >= 80) return 'B';
  if (percentage >= 70) return 'C';
  if (percentage >= 60) return 'D';
  return 'F';
}

export default function PercentageToGPACalculator() {
  const [percentage, setPercentage] = useState('87');
  const [gpaScale, setGpaScale] = useState<'4.0' | '5.0' | '10.0' | 'custom' | 'india'>('4.0');
  const [customScale, setCustomScale] = useState('4.0');
  const [courseName, setCourseName] = useState('');
  const [courseType, setCourseType] = useState<'Regular' | 'Honors' | 'AP'>('Regular');

  const numericPercent = Number(percentage);
  const numericCustomScale = Math.max(0, Number(customScale) || 0);

  const baseGpa = useMemo(() => {
    if (Number.isNaN(numericPercent) || numericPercent < 0 || numericPercent > 100) return null;
    switch (gpaScale) {
      case '4.0':
        return (numericPercent / 100) * 4.0;
      case '5.0':
        return (numericPercent / 100) * 5.0;
      case '10.0':
        return numericPercent / 10;
      case 'india':
        return Math.max(0, Math.min(10, ((numericPercent - 0.75) * 10) / 10));
      case 'custom':
        return (numericPercent / 100) * numericCustomScale;
      default:
        return null;
    }
  }, [numericPercent, gpaScale, numericCustomScale]);

  const maxScale = useMemo(() => {
    if (gpaScale === 'custom') return numericCustomScale || 4;
    if (gpaScale === 'india') return 10;
    return Number(gpaScale);
  }, [gpaScale, numericCustomScale]);

  const bonus = courseType === 'Honors' ? 0.5 : courseType === 'AP' ? 1.0 : 0;

  const weightedGpa = useMemo(() => {
    if (baseGpa === null) return null;
    return Math.min(maxScale, baseGpa + bonus);
  }, [baseGpa, bonus, maxScale]);

  const letterGrade = useMemo(() => {
    if (Number.isNaN(numericPercent) || numericPercent < 0 || numericPercent > 100) return '--';
    return getLetterGrade(numericPercent);
  }, [numericPercent]);

  const reset = () => {
    setPercentage('');
    setGpaScale('4.0');
    setCustomScale('4.0');
    setCourseName('');
    setCourseType('Regular');
  };

  return (
    <section id="calculator" className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 shadow-sm">
      <h2 className="text-2xl font-bold mb-4">Fast and Accurate Calculator</h2>
      <div className="grid gap-4 md:grid-cols-2 mb-4">
        <div>
          <label htmlFor="courseName" className="block text-sm font-medium text-gray-700 mb-1">
            Course Name (optional)
          </label>
          <input
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className="w-full rounded-md border-gray-300 p-2"
            placeholder="e.g., AP Chemistry"
          />
        </div>

        <div>
          <label htmlFor="percentage" className="block text-sm font-medium text-gray-700 mb-1">
            Percentage (%)
          </label>
          <input
            id="percentage"
            type="number"
            min="0"
            max="100"
            step="0.1"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
            className="w-full rounded-md border-gray-300 p-2"
            placeholder="e.g., 87"
          />
        </div>

        <div>
          <label htmlFor="gpaScale" className="block text-sm font-medium text-gray-700 mb-1">
            GPA Scale
          </label>
          <select
            id="gpaScale"
            value={gpaScale}
            onChange={(e) => {
              const value = e.target.value as '4.0' | '5.0' | '10.0' | 'custom' | 'india';
              setGpaScale(value);
              if (value !== 'custom') setCustomScale('4.0');
            }}
            className="w-full rounded-md border-gray-300 p-2"
          >
            <option value="4.0">4.0 Scale</option>
            <option value="5.0">5.0 Scale</option>
            <option value="10.0">10.0 Scale</option>
            <option value="india">India/Asia Formula</option>
            <option value="custom">Custom Scale</option>
          </select>
        </div>

        {gpaScale === 'custom' && (
          <div>
            <label htmlFor="customScale" className="block text-sm font-medium text-gray-700 mb-1">
              Custom Scale Value
            </label>
            <input
              id="customScale"
              type="number"
              min="0.1"
              step="0.1"
              value={customScale}
              onChange={(e) => setCustomScale(e.target.value)}
              className="w-full rounded-md border-gray-300 p-2"
              placeholder="e.g., 4.5"
            />
          </div>
        )}

        <div>
          <label htmlFor="courseType" className="block text-sm font-medium text-gray-700 mb-1">
            Weighted Course Option
          </label>
          <select
            id="courseType"
            value={courseType}
            onChange={(e) => setCourseType(e.target.value as 'Regular' | 'Honors' | 'AP')}
            className="w-full rounded-md border-gray-300 p-2"
          >
            <option value="Regular">Regular</option>
            <option value="Honors">Honors (+0.5 GPA)</option>
            <option value="AP">AP (+1.0 GPA)</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-4">
        <div className="rounded-lg bg-blue-50 p-4 border border-blue-200">
          <h3 className="font-semibold text-blue-800">GPA Result</h3>
          <p className="text-2xl font-bold text-blue-900">{baseGpa !== null ? baseGpa.toFixed(2) : '--'}</p>
        </div>
        <div className="rounded-lg bg-purple-50 p-4 border border-purple-200">
          <h3 className="font-semibold text-purple-800">Weighted GPA</h3>
          <p className="text-2xl font-bold text-purple-900">{weightedGpa !== null ? weightedGpa.toFixed(2) : '--'}</p>
        </div>
        <div className="rounded-lg bg-green-50 p-4 border border-green-200">
          <h3 className="font-semibold text-green-800">Letter Grade (4.0 Scale)</h3>
          <p className="text-2xl font-bold text-green-900">{letterGrade}</p>
        </div>
      </div>

      <div className="mt-3 text-right">
        <button
          type="button"
          onClick={reset}
          className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400 text-gray-900"
        >
          Reset
        </button>
      </div>

      <div className="mt-4 p-4 rounded-lg bg-white shadow-sm border border-slate-200">
        <h3 className="text-sm font-semibold text-slate-700">Conversion formulas used</h3>
        <ul className="list-disc pl-5 text-sm text-slate-600">
          <li>Standard 4.0 Scale: GPA = (Percentage ÷ 100) × 4.0</li>
          <li>Standard 5.0 Scale: GPA = (Percentage ÷ 100) × 5.0</li>
          <li>Standard 10.0 Scale: GPA = Percentage ÷ 10</li>
          <li>India/Asia Formula: GPA = (Percentage − 0.75) × 10 ÷ 10</li>
          <li>Custom Scale: GPA = (Percentage ÷ 100) × Custom Scale Value</li>
        </ul>
      </div>
    </section>
  );
}
