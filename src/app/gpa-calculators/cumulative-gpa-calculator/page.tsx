'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { ReactNode } from 'react';

interface Semester {
  id: string;
  name: string;
  gpa: number;
  creditHours: number;
}

const FAQItem = ({ question, answer }: { question: string; answer: ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-500 transition">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 transition flex justify-between items-center font-semibold text-gray-800"
      >
        <span>{question}</span>
        <span className={`text-blue-600 transition ${open ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {open && (
        <div className="px-6 py-4 bg-white text-gray-700 border-t border-gray-200">
          <div>{answer}</div>
        </div>
      )}
    </div>
  );
};

export default function CumulativeGPACalculator() {
  const [semesters, setSemesters] = useState<Semester[]>([
    { id: '1', name: 'Fall 2023', gpa: 3.5, creditHours: 15 },
    { id: '2', name: 'Spring 2024', gpa: 3.7, creditHours: 16 },
  ]);
  const [cumulativeGPA, setCumulativeGPA] = useState<number | null>(null);
  const [totalCredits, setTotalCredits] = useState(0);

  const calculateCumulativeGPA = () => {
    if (semesters.length === 0) return;

    let totalPoints = 0;
    let totalCreds = 0;

    semesters.forEach((semester) => {
      totalPoints += semester.gpa * semester.creditHours;
      totalCreds += semester.creditHours;
    });

    setTotalCredits(totalCreds);
    const calculatedGPA = totalCreds > 0 ? totalPoints / totalCreds : 0;
    setCumulativeGPA(parseFloat(calculatedGPA.toFixed(2)));
  };

  const addSemester = () => {
    const newId = Math.random().toString(36).substr(2, 9);
    setSemesters([...semesters, { id: newId, name: '', gpa: 3.0, creditHours: 12 }]);
  };

  const removeSemester = (id: string) => {
    if (semesters.length > 1) {
      setSemesters(semesters.filter((semester) => semester.id !== id));
    }
  };

  const updateSemester = (id: string, field: string, value: any) => {
    setSemesters(
      semesters.map((semester) =>
        semester.id === id ? { ...semester, [field]: value } : semester
      )
    );
  };

  return (
    <>
      <div className="bg-white">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:underline">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/gpa-calculators" className="text-blue-600 hover:underline">GPA Calculators</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700">Cumulative GPA Calculator</span>
          </nav>
        </div>

        {/* Header Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cumulative GPA Calculator
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
              Calculate your overall GPA across all semesters. Enter your semester GPAs and credit hours to get your cumulative GPA.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            {/* Calculator */}
            <div className="bg-gradient-to-b from-blue-50 to-white rounded-lg shadow-lg p-6 md:p-8 border border-blue-200 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Calculate Your Cumulative GPA
              </h2>

              <div className="space-y-4 mb-8">
                {semesters.map((semester, index) => (
                  <div
                    key={semester.id}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition"
                  >
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Semester {index + 1}
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Fall 2023"
                        value={semester.name}
                        onChange={(e) => updateSemester(semester.id, 'name', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        GPA
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="4"
                        step="0.01"
                        placeholder="3.5"
                        value={semester.gpa}
                        onChange={(e) => updateSemester(semester.id, 'gpa', parseFloat(e.target.value) || 0)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>

                    <div className="flex items-end gap-2">
                      <div className="flex-1">
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Credits
                        </label>
                        <input
                          type="number"
                          min="1"
                          placeholder="12"
                          value={semester.creditHours}
                          onChange={(e) => updateSemester(semester.id, 'creditHours', parseInt(e.target.value) || 0)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        />
                      </div>
                      <button
                        onClick={() => removeSemester(semester.id)}
                        disabled={semesters.length === 1}
                        className={`px-4 py-2 rounded-md transition text-sm font-semibold ${
                          semesters.length === 1
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-red-500 hover:bg-red-600 text-white'
                        }`}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 mb-8">
                <button
                  onClick={addSemester}
                  className="w-full px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition"
                >
                  + Add Semester
                </button>

                <button
                  onClick={calculateCumulativeGPA}
                  className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-md transition shadow-lg"
                >
                  Calculate Cumulative GPA
                </button>
              </div>

              {cumulativeGPA !== null && (
                <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg text-center border border-green-400">
                  <p className="text-white text-sm mb-2">Your Cumulative GPA</p>
                  <p className="text-5xl font-bold text-white mb-2">{cumulativeGPA}</p>
                  <p className="text-green-100 text-sm mb-4">
                    {cumulativeGPA >= 3.8
                      ? '🌟 Excellent - Top tier performance'
                      : cumulativeGPA >= 3.5
                      ? '⭐ Very Good - Strong academic standing'
                      : cumulativeGPA >= 3.0
                      ? '👍 Good - Above average performance'
                      : 'Room for improvement'}
                  </p>
                  <div className="text-green-50 text-sm">
                    <p>Total Credit Hours: <strong>{totalCredits}</strong></p>
                  </div>
                </div>
              )}
            </div>

            {/* Information Sections */}
            <article className="space-y-8 mb-12">
              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">What is Cumulative GPA?</h2>
                <p className="text-gray-700 leading-relaxed">
                  Your cumulative GPA is your overall grade point average across all semesters and years of study. It's calculated by combining your GPA from each semester weighted by the number of credits in that semester.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">How to Calculate Cumulative GPA</h2>
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  <li>Get your GPA for each semester</li>
                  <li>Get the credit hours for each semester</li>
                  <li>Multiply each semester's GPA by its credit hours</li>
                  <li>Add all the weighted GPAs together</li>
                  <li>Divide by the total number of credits</li>
                </ol>
              </section>

              {/* FAQ Section */}
              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <FAQItem
                    question="What is a good cumulative GPA?"
                    answer="A cumulative GPA of 3.5 or higher is considered very good. Most colleges look for a 2.0 minimum for standing, 3.0 for solid performance, and 3.5+ for competitive opportunities."
                  />
                  <FAQItem
                    question="How do colleges calculate cumulative GPA?"
                    answer="Colleges calculate cumulative GPA by combining all your semester GPAs weighted by credit hours. This is the same calculation our calculator performs."
                  />
                  <FAQItem
                    question="Can cumulative GPA go down?"
                    answer="Yes, if you have semesters with lower GPAs, they can bring down your overall cumulative GPA when combined with previous semesters."
                  />
                </div>
              </section>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}



