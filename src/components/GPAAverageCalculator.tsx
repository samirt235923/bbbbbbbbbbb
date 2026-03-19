'use client';

import { useEffect, useState } from 'react';

interface Entry {
  id: string;
  gpa: string;
  credits: string;
}

export default function GPAAverageCalculator() {
  const [entries, setEntries] = useState<Entry[]>([
    { id: '1', gpa: '3.5', credits: '3' },
    { id: '2', gpa: '3.8', credits: '3' },
    { id: '3', gpa: '3.2', credits: '3' },
  ]);
  const [weighted, setWeighted] = useState(false);
  const [average, setAverage] = useState<number | null>(null);
  const [totalCredits, setTotalCredits] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateAverage = () => {
    setError(null);
    const parsed = entries.map((entry) => {
      const gpa = parseFloat(entry.gpa.trim());
      const credits = parseFloat(entry.credits.trim());
      return { gpa, credits };
    });

    const invalid = parsed.find(
      (row) =>
        Number.isNaN(row.gpa) ||
        row.gpa < 0 ||
        row.gpa > 4 ||
        (weighted && (Number.isNaN(row.credits) || row.credits <= 0))
    );

    if (invalid) {
      setAverage(null);
      setTotalCredits(null);
      setError('Please enter valid GPA values between 0.0 and 4.0 and, if weighted, positive credit hours.');
      return;
    }

    if (parsed.length === 0) {
      setAverage(null);
      setTotalCredits(null);
      return;
    }

    if (weighted) {
      const totalCredit = parsed.reduce((sum, row) => sum + row.credits, 0);
      const totalPoints = parsed.reduce((sum, row) => sum + row.gpa * row.credits, 0);
      const avg = totalCredit > 0 ? totalPoints / totalCredit : 0;
      setAverage(parseFloat(avg.toFixed(3)));
      setTotalCredits(totalCredit);
    } else {
      const avg = parsed.reduce((sum, row) => sum + row.gpa, 0) / parsed.length;
      setAverage(parseFloat(avg.toFixed(3)));
      setTotalCredits(parsed.length);
    }
  };

  useEffect(() => {
    calculateAverage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entries, weighted]);

  const updateEntry = (id: string, field: 'gpa' | 'credits', value: string) => {
    setEntries((prev) =>
      prev.map((entry) => (entry.id === id ? { ...entry, [field]: value } : entry))
    );
  };

  const addEntry = () => {
    const nextId = Math.random().toString(36).slice(2);
    setEntries((prev) => [...prev, { id: nextId, gpa: '', credits: '3' }]);
  };

  const removeEntry = (id: string) => {
    setEntries((prev) => prev.filter((entry) => entry.id !== id));
  };

  const clearAll = () => {
    setEntries([{ id: '1', gpa: '', credits: '3' }]);
    setAverage(null);
    setTotalCredits(null);
    setError(null);
  };

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">GPA Average Calculator</h2>
        <button
          onClick={() => setWeighted((prev) => !prev)}
          className="text-sm font-semibold px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
          aria-label="Toggle weighted average"
        >
          {weighted ? 'Weighted' : 'Simple'} average
        </button>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-12 gap-3 items-center text-xs text-gray-500 font-semibold">
          <span className="col-span-5">GPA Value</span>
          <span className="col-span-5">Credit Hours</span>
          <span className="col-span-2 text-right">Actions</span>
        </div>

        {entries.map((entry, index) => (
          <div
            key={entry.id}
            className="grid grid-cols-12 gap-3 items-center bg-gray-50 rounded-xl p-3"
          >
            <div className="col-span-5">
              <input
                type="number"
                step="0.01"
                min="0"
                max="4"
                value={entry.gpa}
                onChange={(e) => updateEntry(entry.id, 'gpa', e.target.value)}
                placeholder="3.0"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                aria-label={`GPA value ${index + 1}`}
              />
            </div>
            <div className="col-span-5">
              <input
                type="number"
                step="1"
                min="0"
                value={entry.credits}
                onChange={(e) => updateEntry(entry.id, 'credits', e.target.value)}
                placeholder="3"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                aria-label={`Credit hours ${index + 1}`}
              />
            </div>
            <div className="col-span-2 text-right">
              <button
                onClick={() => removeEntry(entry.id)}
                className="inline-flex items-center justify-center rounded-lg border border-transparent bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 hover:bg-red-100 transition"
                aria-label={`Remove entry ${index + 1}`}
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <div className="flex flex-wrap gap-3">
          <button
            onClick={addEntry}
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
          >
            + Add row
          </button>
          <button
            onClick={clearAll}
            className="rounded-lg border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
          >
            Clear
          </button>
        </div>

        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm font-semibold text-gray-700">Results</p>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <p className="text-xs text-gray-500">Average GPA</p>
              <p className="text-2xl font-semibold text-gray-900">
                {average !== null ? average.toFixed(3) : '-'}
              </p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <p className="text-xs text-gray-500">
                {weighted ? 'Total Credits' : 'Number of Entries'}
              </p>
              <p className="text-2xl font-semibold text-gray-900">
                {totalCredits !== null ? totalCredits : '-'}
              </p>
            </div>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            Tip: The calculator updates instantly as you type. Use the <strong>Weighted</strong> toggle when you want courses with more credit hours to count more.
          </p>
        </div>
      </div>
    </div>
  );
}
