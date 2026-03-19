'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import SEOHead from '@/components/SEOHead';
import { BreadcrumbSchema, ArticleSchema, FAQSchema, CalculatorSchema } from '@/components/SchemaMarkup';

type CourseLevel = 'Regular' | 'Honors' | 'AP' | 'IB' | 'Dual Credit';

interface CourseRow {
  id: string;
  name: string;
  credits: number;
  grade: string;
  level: CourseLevel;
}

const gradeMap: Record<string, number> = {
  'A+': 4.0,
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

const levelBonus: Record<CourseLevel, number> = {
  Regular: 0,
  Honors: 0.5,
  AP: 1.0,
  IB: 1.0,
  'Dual Credit': 0.5,
};

const initialRows: CourseRow[] = [
  { id: 'c1', name: 'Mathematics', credits: 4, grade: 'A', level: 'Regular' },
  { id: 'c2', name: 'English Literature', credits: 3, grade: 'B+', level: 'Honors' },
  { id: 'c3', name: 'Biology', credits: 4, grade: 'B', level: 'Regular' },
  { id: 'c4', name: 'History', credits: 3, grade: 'A-', level: 'AP' },
];

const performanceLabel = (gpa: number) => {
  if (gpa >= 3.7) return '🏆 Excellent - Honor Roll Status';
  if (gpa >= 3.3) return '📚 Good - Above Average';
  if (gpa >= 2.7) return '👍 Satisfactory - Meets Expectations';
  if (gpa >= 2.0) return '⚠️ Average - Needs Improvement';
  if (gpa > 0) return '❗ Below Average - Academic Support Recommended';
  return '📊 No Data Available';
};

const getGPAColor = (gpa: number) => {
  if (gpa >= 3.5) return 'text-green-600';
  if (gpa >= 2.5) return 'text-yellow-600';
  if (gpa > 0) return 'text-red-600';
  return 'text-gray-600';
};

const faq = [
  { 
    question: 'How do I calculate my student GPA accurately?', 
    answer: 'To calculate your GPA accurately: 1) List all courses with credit hours, 2) Convert letter grades to grade points (A=4.0, B=3.0, etc.), 3) Multiply grade points by credit hours, 4) Sum total grade points and total credits, 5) Divide total grade points by total credits. Our calculator handles this automatically for you.' 
  },
  { 
    question: 'What is the difference between weighted and unweighted GPA?', 
    answer: 'Unweighted GPA uses a 4.0 scale regardless of course difficulty. Weighted GPA adds extra points (typically +0.5 for Honors, +1.0 for AP/IB) to recognize advanced coursework difficulty. Most competitive colleges recalculate GPA using their own weighted system.' 
  },
  { 
    question: 'What GPA do I need for college admission?', 
    answer: 'College GPA requirements vary: Community colleges often accept 2.0+, state universities typically look for 2.5-3.0, competitive universities want 3.5+, and Ivy League schools average 3.9+. However, admissions consider course rigor, extracurriculars, and test scores alongside GPA.' 
  },
  { 
    question: 'How can I raise my GPA quickly?', 
    answer: 'To raise your GPA: 1) Focus on core classes with higher credit values, 2) Seek tutoring for challenging subjects, 3) Consider retaking courses if your school allows grade replacement, 4) Balance challenging courses with manageable ones, 5) Communicate with teachers about improvement opportunities.' 
  },
  { 
    question: 'Do colleges prefer weighted or unweighted GPA?', 
    answer: 'Colleges typically review both. They use unweighted GPA to compare students universally, while weighted GPA demonstrates course rigor. Many colleges recalculate GPA using their own methodology, considering both the numerical value and the difficulty of courses taken.' 
  },
  {
    question: 'How do credit hours affect my GPA?',
    answer: 'Credit hours act as multipliers in GPA calculation. A 4-credit course affects your GPA four times more than a 1-credit course. This means performing well in high-credit classes (like core subjects) has a greater positive impact than doing well in low-credit electives.'
  }
];

export default function StudentGPACalculator() {
  const [rows, setRows] = useState<CourseRow[]>(initialRows);
  const [useWeighted, setUseWeighted] = useState<boolean>(true);
  const [targetGPA, setTargetGPA] = useState<number>(3.5);

  const addRow = () => {
    const newId = `c${Date.now()}`;
    setRows((prev) => [...prev, { id: newId, name: '', credits: 3, grade: 'A', level: 'Regular' }]);
  };

  const removeRow = (id: string) => {
    setRows((prev) => (prev.length === 1 ? prev : prev.filter((row) => row.id !== id)));
  };

  const updateRow = (id: string, field: keyof CourseRow, value: string | number) => {
    setRows((prev) => prev.map((row) => (row.id === id ? { ...row, [field]: field === 'credits' ? Math.max(0.5, Math.min(6, Number(value))) : value } : row)));
  };

  const totals = useMemo(() => {
    let totalCredits = 0;
    let totalGradePoints = 0;
    let totalWeightedPoints = 0;

    rows.forEach((row) => {
      const credit = Number(row.credits) || 0;
      const base = gradeMap[row.grade] ?? 0;
      const weighted = useWeighted ? Math.min(base + levelBonus[row.level], 5.0) : base;

      totalCredits += credit;
      totalGradePoints += base * credit;
      totalWeightedPoints += weighted * credit;
    });

    return {
      totalCredits,
      totalGradePoints,
      totalWeightedPoints,
    };
  }, [rows, useWeighted]);

  const currentGpa = totals.totalCredits ? totals.totalGradePoints / totals.totalCredits : 0;
  const weightedGpa = totals.totalCredits ? totals.totalWeightedPoints / totals.totalCredits : 0;
  const finalGpa = useWeighted ? weightedGpa : currentGpa;

  // Calculate needed grades to reach target GPA
  const gpaNeeded = useMemo(() => {
    if (totals.totalCredits === 0) return 0;
    const currentTotalPoints = useWeighted ? totals.totalWeightedPoints : totals.totalGradePoints;
    const targetTotalPoints = targetGPA * totals.totalCredits;
    const neededPoints = targetTotalPoints - currentTotalPoints;
    return neededPoints;
  }, [totals, targetGPA, useWeighted]);

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Student GPA Calculator – Accurate GPA Calculator for High School & College',
    description: 'Free student GPA calculator with weighted and unweighted options. Calculate your high school or college GPA instantly. Track academic progress and plan for college admissions.',
    author: { '@type': 'Person', name: 'GPA Calculator Team' },
    publisher: { '@type': 'Organization', name: 'Top GPA Calculator' },
    datePublished: '2026-03-18',
    dateModified: new Date().toISOString().split('T')[0],
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://topgpacalculator.com/gpa-calculators/student-gpa-calculator' },
  };

  return (
    <>
      <SEOHead
        title="Student GPA Calculator – Accurate GPA Calculator for High School & College"
        description="Free student GPA calculator with weighted and unweighted options. Calculate your high school or college GPA instantly. Track academic progress and plan for college admissions."
        canonical="/gpa-calculators/student-gpa-calculator"
      />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://topgpacalculator.com/' },
          { name: 'GPA Calculators', url: 'https://topgpacalculator.com/gpa-calculators' },
          { name: 'Student GPA Calculator', url: 'https://topgpacalculator.com/gpa-calculators/student-gpa-calculator' },
        ]}
      />

      <ArticleSchema
        headline="Student GPA Calculator – Accurate GPA Calculator for High School & College"
        description="Free student GPA calculator with weighted and unweighted options. Calculate your high school or college GPA instantly. Track academic progress and plan for college admissions."
        author="GPA Calculator Team"
        datePublished="2026-03-18"
        dateModified={new Date().toISOString().split('T')[0]}
      />

      <CalculatorSchema
        title="Student GPA Calculator"
        description="Interactive online student GPA calculator for high school and college with weighted and unweighted options. Includes grade tracking and goal planning features."
        url="/gpa-calculators/student-gpa-calculator"
      />

      <FAQSchema faqs={faq} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm mb-4" aria-label="Breadcrumb">
          <ol className="flex flex-wrap gap-2 text-gray-600">
            <li><Link href="/" className="text-blue-600 hover:underline">Home</Link></li>
            <li>/</li>
            <li><Link href="/gpa-calculators" className="text-blue-600 hover:underline">GPA Calculators</Link></li>
            <li>/</li>
            <li className="font-semibold text-gray-900">Student GPA Calculator</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700 text-white rounded-2xl p-8 mb-8 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Student GPA Calculator</h1>
          <p className="text-xl max-w-3xl mb-4">
            Accurately calculate your high school or college GPA with our advanced calculator. 
            Support for <strong>weighted</strong> and <strong>unweighted</strong> GPA, multiple course levels, and real-time calculations.
          </p>
          <div className="flex flex-wrap gap-3 text-sm bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <span className="px-3 py-1 bg-white/20 rounded-full">✓ 4.0 Scale</span>
            <span className="px-3 py-1 bg-white/20 rounded-full">✓ Honors/AP/IB Support</span>
            <span className="px-3 py-1 bg-white/20 rounded-full">✓ Credit Hours</span>
            <span className="px-3 py-1 bg-white/20 rounded-full">✓ Goal Tracking</span>
            <span className="px-3 py-1 bg-white/20 rounded-full">✓ Performance Analysis</span>
          </div>
        </header>

        {/* Quick Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-700">4.0</div>
            <div className="text-sm text-gray-600">Unweighted Scale</div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-700">5.0</div>
            <div className="text-sm text-gray-600">Weighted Scale</div>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-700">5</div>
            <div className="text-sm text-gray-600">Course Levels</div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-amber-700">13</div>
            <div className="text-sm text-gray-600">Grade Options</div>
          </div>
        </div>

        {/* Table of Contents */}
        <section className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 mb-8" id="table-of-contents">
          <h2 className="text-2xl font-bold mb-4">Quick Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <a href="#calculator" className="text-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition">📊 Calculator</a>
            <a href="#formulas" className="text-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition">🧮 Formulas</a>
            <a href="#grade-scale" className="text-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition">📋 Grade Scale</a>
            <a href="#example" className="text-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition">📝 Examples</a>
            <a href="#content" className="text-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition">📚 Guide</a>
            <a href="#faq" className="text-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition">❓ FAQ</a>
            <a href="#related" className="text-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition">🔗 Related</a>
            <a href="#resources" className="text-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition">📎 Resources</a>
          </div>
        </section>

        {/* Main Calculator Section */}
        <section id="calculator" className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-3 justify-between items-start md:items-center mb-6">
            <h2 className="text-2xl font-bold">Interactive GPA Calculator</h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <label htmlFor="weighted-toggle" className="text-sm font-medium text-gray-700">Weighted GPA</label>
                <div className="relative inline-block w-12 h-6">
                  <input 
                    type="checkbox" 
                    id="weighted-toggle"
                    checked={useWeighted} 
                    onChange={(e) => setUseWeighted(e.target.checked)} 
                    className="sr-only peer"
                  />
                  <div className="w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-600 peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </div>
              </div>
              <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {useWeighted ? 'Weighted (5.0 scale)' : 'Unweighted (4.0 scale)'}
              </div>
            </div>
          </div>

          {/* Course Entry Table */}
          <div className="overflow-x-auto mb-4 border border-gray-200 rounded-lg">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credits</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade Points</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weighted Points</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {rows.map((row) => {
                  const base = gradeMap[row.grade] ?? 0;
                  const weighted = useWeighted ? Math.min(base + levelBonus[row.level], 5.0) : base;
                  return (
                    <tr key={row.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <input 
                          type="text" 
                          value={row.name} 
                          onChange={(e) => updateRow(row.id, 'name', e.target.value)} 
                          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                          placeholder="e.g. Algebra II"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input 
                          type="number" 
                          min={0.5} 
                          max={6} 
                          step={0.5}
                          value={row.credits} 
                          onChange={(e) => updateRow(row.id, 'credits', Number(e.target.value))} 
                          className="w-20 rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500" 
                        />
                      </td>
                      <td className="px-4 py-3">
                        <select 
                          value={row.grade} 
                          onChange={(e) => updateRow(row.id, 'grade', e.target.value)} 
                          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        >
                          {Object.keys(gradeMap).map((grade) => (
                            <option key={grade} value={grade}>{grade}</option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-3">
                        <select 
                          value={row.level} 
                          onChange={(e) => updateRow(row.id, 'level', e.target.value as CourseLevel)} 
                          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="Regular">Regular</option>
                          <option value="Honors">Honors (+0.5)</option>
                          <option value="AP">AP (+1.0)</option>
                          <option value="IB">IB (+1.0)</option>
                          <option value="Dual Credit">Dual Credit (+0.5)</option>
                        </select>
                      </td>
                      <td className="px-4 py-3 font-mono">{(base * row.credits).toFixed(2)}</td>
                      <td className="px-4 py-3 font-mono">{(weighted * row.credits).toFixed(2)}</td>
                      <td className="px-4 py-3">
                        <button 
                          onClick={() => removeRow(row.id)} 
                          className="text-red-600 hover:text-red-800 hover:underline text-sm"
                          disabled={rows.length === 1}
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

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button 
              onClick={addRow} 
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
            >
              <span>➕</span> Add Course
            </button>
            <button 
              onClick={() => setRows(initialRows)} 
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
            >
              Reset to Example
            </button>
            <button 
              onClick={() => setRows([])} 
              className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition"
            >
              Clear All
            </button>
          </div>

          {/* Results Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl">
              <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider">Total Credits</p>
              <p className="text-3xl font-bold text-blue-800">{totals.totalCredits.toFixed(1)}</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl">
              <p className="text-xs text-green-600 font-semibold uppercase tracking-wider">Grade Points</p>
              <p className="text-3xl font-bold text-green-800">{totals.totalGradePoints.toFixed(2)}</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl">
              <p className="text-xs text-purple-600 font-semibold uppercase tracking-wider">Unweighted GPA</p>
              <p className="text-3xl font-bold text-purple-800">{currentGpa.toFixed(2)}</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 rounded-xl">
              <p className="text-xs text-amber-600 font-semibold uppercase tracking-wider">Weighted GPA</p>
              <p className="text-3xl font-bold text-amber-800">{weightedGpa.toFixed(2)}</p>
            </div>
            <div className={`p-4 bg-gradient-to-br rounded-xl border ${
              finalGpa >= 3.5 ? 'from-green-50 to-green-100 border-green-200' :
              finalGpa >= 2.5 ? 'from-yellow-50 to-yellow-100 border-yellow-200' :
              'from-red-50 to-red-100 border-red-200'
            }`}>
              <p className="text-xs font-semibold uppercase tracking-wider">Final {useWeighted ? 'Weighted' : 'Unweighted'} GPA</p>
              <p className={`text-4xl font-bold ${getGPAColor(finalGpa)}`}>{finalGpa.toFixed(2)}</p>
            </div>
          </div>

          {/* Performance Indicator */}
          <div className="mb-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-semibold">Performance Level:</span>
              <span className={`text-lg font-bold ${
                finalGpa >= 3.7 ? 'text-green-600' :
                finalGpa >= 3.3 ? 'text-blue-600' :
                finalGpa >= 2.7 ? 'text-yellow-600' :
                'text-red-600'
              }`}>{performanceLabel(finalGpa)}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className={`h-3 rounded-full ${
                  finalGpa >= 3.5 ? 'bg-green-500' :
                  finalGpa >= 2.5 ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}
                style={{ width: `${(finalGpa / 4.0) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* GPA Goal Setting */}
          <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
            <h3 className="font-semibold text-lg mb-3">🎯 GPA Goal Planner</h3>
            <div className="flex flex-wrap items-center gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Target GPA:</label>
                <select 
                  value={targetGPA} 
                  onChange={(e) => setTargetGPA(Number(e.target.value))}
                  className="rounded-md border border-gray-300 px-3 py-2"
                >
                  <option value="2.0">2.0 (Minimum)</option>
                  <option value="2.5">2.5 (Average)</option>
                  <option value="3.0">3.0 (Good)</option>
                  <option value="3.5">3.5 (Honors)</option>
                  <option value="3.7">3.7 (High Honors)</option>
                  <option value="4.0">4.0 (Perfect)</option>
                </select>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600 mb-1">Additional points needed:</p>
                <p className={`text-2xl font-bold ${gpaNeeded > 0 ? 'text-red-600' : 'text-green-600'}`}>
                  {gpaNeeded > 0 ? `Need ${gpaNeeded.toFixed(2)} more points` : '✓ Target achievable'}
                </p>
                {gpaNeeded > 0 && (
                  <p className="text-sm text-gray-600">
                    You need an average of {(gpaNeeded / totals.totalCredits).toFixed(2)} GPA on remaining credits
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Formulas Section */}
        <section id="formulas" className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">GPA Calculation Formulas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Basic GPA Formula</h3>
              <p className="font-mono bg-white p-3 rounded border mb-2">GPA = Total Grade Points ÷ Total Credit Hours</p>
              <p className="font-mono bg-white p-3 rounded border">Grade Points = Grade Value × Credit Hours</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Weighted GPA Formula</h3>
              <p className="font-mono bg-white p-3 rounded border">Weighted Points = (Grade Value + Level Bonus) × Credit Hours</p>
              <p className="text-sm mt-2">Level Bonuses: Honors (+0.5), AP/IB (+1.0), Dual Credit (+0.5)</p>
            </div>
          </div>
        </section>

        {/* Grade Scale Section */}
        <section id="grade-scale" className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Grade Conversion Scale</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(gradeMap).map(([grade, value]) => (
              <div key={grade} className="flex justify-between p-3 bg-gray-50 rounded-lg border">
                <span className="font-semibold">{grade}</span>
                <span className="font-mono">{value.toFixed(1)}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Example Calculation */}
        <section id="example" className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Step-by-Step Example</h2>
          <div className="space-y-2">
            <p className="font-semibold">Sample Semester:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Mathematics (4 credits, A = 4.0): 4.0 × 4 = 16.0 points</li>
              <li>English Literature (3 credits, B+ = 3.3): 3.3 × 3 = 9.9 points</li>
              <li>Biology (4 credits, B = 3.0): 3.0 × 4 = 12.0 points</li>
              <li>History (3 credits, A- = 3.7): 3.7 × 3 = 11.1 points</li>
            </ul>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p><strong>Total Grade Points:</strong> 16.0 + 9.9 + 12.0 + 11.1 = 49.0</p>
              <p><strong>Total Credits:</strong> 4 + 3 + 4 + 3 = 14</p>
              <p><strong>Final GPA:</strong> 49.0 ÷ 14 = 3.5</p>
            </div>
          </div>
        </section>

        {/* Educational Content */}
        <section id="content" className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 mb-8 prose max-w-none">
          <h2>Understanding Your Student GPA: Comprehensive Guide</h2>

          <p className="text-gray-700">This section is your in-depth reference for GPA strategy, course planning, and actionable improvement tips. We organize the content with clear headings so you can scan fast and apply quickly.</p>

          <h3>1. What is GPA and Why It Matters</h3>
          <p>A Grade Point Average (GPA) is a standardized number that condenses your grades into a single metric, usually between 0.0 and 4.0 (unweighted) or up to 5.0 (weighted). Schools, colleges, scholarships, and employers use it to gauge academic consistency and readiness.</p>
          <p>Key uses:</p>
          <ul>
            <li>College admissions screening</li>
            <li>Scholarship qualification</li>
            <li>Academic honors and probation decisions</li>
            <li>Competitive internship and job applications</li>
          </ul>

          <h3>2. How GPA Is Calculated (Formulas)</h3>
          <p>Use these formulas in our calculator for instant accuracy.</p>
          <h4>Unweighted GPA</h4>
          <p><code>Unweighted GPA = (Sum of (Grade Value × Credits)) ÷ (Total Credits)</code></p>
          <h4>Weighted GPA</h4>
          <p><code>Weighted GPA = (Sum of ((Grade Value + Level Bonus) × Credits)) ÷ (Total Credits)</code></p>
          <p>Level bonus values in this calculator:<br/>Regular 0, Honors +0.5, AP/IB +1.0, Dual Credit +0.5.</p>

          <h3>3. The Difference Between Term, Cumulative, and Final GPA</h3>
          <ul>
            <li><strong>Term GPA:</strong> One grading period.</li>
            <li><strong>Cumulative GPA:</strong> Combined semesters/years.</li>
            <li><strong>Target GPA:</strong> Your goal value used for planning and grade improvements.</li>
          </ul>

          <h3>4. Step-by-Step Improvement Plan</h3>
          <h4>Step A: Audit Your Current Record</h4>
          <p>List each class, grade, level, and credits. Use this calculator to identify the greatest leverage points.</p>
          <h4>Step B: Prioritize High-Impact Courses</h4>
          <p>Focus on 3-5 credits and advanced classes, since they move your GPA faster.</p>
          <h4>Step C: Set Realistic Weekly Study Habits</h4>
          <p>Track progress weekly; allocate more time to courses where actual grade can still improve.</p>
          <h4>Step D: Calculate Minimum Required Averages for Target GPA</h4>
          <p>Your target is now part of this calculator: watch <strong>“Additional points needed”</strong> and aim to reduce that gap each semester.</p>

          <h3>5. When to Use Weighted vs Unweighted GPA</h3>
          <p>Use unweighted to compare across schools. Use weighted to spotlight course challenge. A strong profile includes both.</p>

          <h3>6. Real-World Example with Headings</h3>
          <h4>Example: Spring Semester (6 classes)</h4>
          <ol>
            <li>Algebra II (4 credits, A, Regular) = 16 points</li>
            <li>English (3 credits, B+, Honors) = 12.6 base + 1.5 bonus = 14.1 weighted</li>
            <li>Biology (4 credits, B, Regular) = 12 points</li>
            <li>History (3 credits, A-, AP) = 11.1 base + 3.0 bonus = 14.1 weighted</li>
          </ol>
          <p>This page’s built-in calculator makes these computations instantly and updates your goal projection.</p>

          <h3>7. Content Optimization Tips (SEO-friendly headings you asked for)</h3>
          <ul>
            <li>Keep H1/H2 concise and keyword-rich: "Student GPA Calculator" / "How to Calculate and Improve Student GPA".</li>
            <li>Use H3 for subtopics like "Weighted vs Unweighted" and "Step-by-Step Example".</li>
            <li>Insert at least one keyword per section naturally, e.g. "high school GPA", "college GPA", "GPA calculator".</li>
            <li>Include an FAQ block (already present) with schema markup for visibility.</li>
          </ul>

          <h3>8. Final Remarks</h3>
          <p>To ensure your browser renders this refreshed content, hard reload (Ctrl+Shift+R), clear cache, or open in incognito and confirm at <code>/gpa-calculators/student-gpa-calculator</code>.</p>
          <p>Once clear, the content should show improved heading structure and ranking-ready analysis.</p>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                <p className="font-semibold text-lg mb-2">{item.question}</p>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Calculators */}
        <section id="related" className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Related GPA Calculators</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { href: "/high-school-gpa-calculator", name: "High School GPA", icon: "🏫" },
              { href: "/college-gpa-calculator", name: "College GPA", icon: "🎓" },
              { href: "/weighted-gpa-calculator", name: "Weighted GPA", icon: "⚖️" },
              { href: "/cumulative-gpa-calculator", name: "Cumulative GPA", icon: "📊" },
              { href: "/gpa-improvement-calculator", name: "GPA Improvement", icon: "📈" },
              { href: "/semester-gpa-calculator", name: "Semester GPA", icon: "📅" },
              { href: "/middle-school-gpa-calculator", name: "Middle School GPA", icon: "📚" },
              { href: "/ap-gpa-calculator", name: "AP GPA Calculator", icon: "⭐" },
              { href: "/honors-gpa-calculator", name: "Honors GPA", icon: "🏆" },
              { href: "/target-gpa-calculator", name: "Target GPA", icon: "🎯" },
            ].map((calc) => (
              <Link 
                key={calc.href} 
                href={calc.href} 
                className="block p-3 bg-gray-50 border border-gray-200 rounded-lg hover:shadow-md hover:bg-blue-50 transition text-center"
              >
                <div className="text-2xl mb-1">{calc.icon}</div>
                <div className="text-sm font-medium">{calc.name}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Official Resources</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a 
              href="https://www.collegeboard.org" 
              target="_blank" 
              rel="noreferrer"
              className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition border"
            >
              <div className="font-semibold mb-1">College Board</div>
              <div className="text-sm text-gray-600">Official SAT, AP, and college planning resources</div>
            </a>
            <a 
              href="https://nces.ed.gov" 
              target="_blank" 
              rel="noreferrer"
              className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition border"
            >
              <div className="font-semibold mb-1">NCES</div>
              <div className="text-sm text-gray-600">National Center for Education Statistics</div>
            </a>
            <a 
              href="https://www.ed.gov" 
              target="_blank" 
              rel="noreferrer"
              className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition border"
            >
              <div className="font-semibold mb-1">U.S. Department of Education</div>
              <div className="text-sm text-gray-600">Federal education policies and resources</div>
            </a>
          </div>
        </section>

        {/* Footer Note */}
        <div className="text-center text-sm text-gray-500 border-t pt-8">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          <p className="mt-2">This calculator is for informational purposes. Always verify with your school's specific grading policy.</p>
        </div>
      </div>
    </>
  );
}