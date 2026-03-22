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
                <h2 className="text-3xl font-bold text-gray-800 mb-4">What Is a Cumulative GPA?</h2>
                <p className="text-gray-700 leading-relaxed">
                  A <strong>cumulative GPA</strong> is your overall grade point average across every
                  term you have completed. Instead of looking at one semester, it blends all semesters
                  and all credit hours into a single number. This makes it the most common GPA that
                  colleges, scholarship committees, and academic programs use when they review your
                  record.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The key idea is that credits matter. A 4-credit course affects your cumulative GPA
                  more than a 1-credit course because it represents more of your total academic work.
                  That is why a cumulative GPA calculator always asks for both <strong>GPA</strong> and
                  <strong> credit hours</strong> for each term.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">How the Cumulative GPA Calculator Works</h2>
                <p className="text-gray-700 leading-relaxed">
                  This calculator uses a weighted average. Each term is weighted by the number of
                  credits, so larger semesters have more influence. The math is simple, but doing it
                  by hand can be time‑consuming. The calculator saves time and avoids mistakes.
                </p>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">The Formula (Simple Version)</h3>
                <p className="text-gray-700 leading-relaxed">
                  For each semester: <strong>Semester GPA × Credit Hours = Quality Points</strong>.
                  Add all quality points together, then divide by the total credits. That final number
                  is your cumulative GPA.
                </p>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Why Credit Hours Matter</h3>
                <p className="text-gray-700 leading-relaxed">
                  Credit hours show the size of a course. A semester with 18 credits carries more weight
                  than a semester with 12 credits. Without credits, your GPA would be inaccurate.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Step‑by‑Step: Calculate Cumulative GPA</h2>
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  <li>List every semester you have completed so far.</li>
                  <li>Write the GPA for each semester from your transcript.</li>
                  <li>Add the total credit hours for each semester.</li>
                  <li>Multiply each semester GPA by its credit hours.</li>
                  <li>Add all results together.</li>
                  <li>Divide by the total credits across all semesters.</li>
                </ol>
                <p className="text-gray-700 leading-relaxed">
                  The calculator does these steps instantly, but understanding the method helps you
                  check your results and set realistic goals.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Practical Example (Real Numbers)</h2>
                <p className="text-gray-700 leading-relaxed">
                  Imagine you completed three semesters with the following results:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Fall: GPA 3.20 with 15 credits</li>
                  <li>Spring: GPA 3.70 with 16 credits</li>
                  <li>Summer: GPA 3.40 with 6 credits</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Multiply each GPA by its credits: 3.20×15 = 48.0, 3.70×16 = 59.2, 3.40×6 = 20.4.
                  Add the points: 48.0 + 59.2 + 20.4 = 127.6. Total credits are 15 + 16 + 6 = 37.
                  Your cumulative GPA is 127.6 ÷ 37 = <strong>3.45</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This example shows why the calculator is useful. Without weighting, the average would
                  be different and less accurate.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Cumulative GPA vs Semester GPA</h2>
                <p className="text-gray-700 leading-relaxed">
                  Students often mix these terms. A <strong>semester GPA</strong> reflects performance
                  in one term only. A <strong>cumulative GPA</strong> combines every term. Colleges
                  usually care more about cumulative GPA because it shows long‑term consistency.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Semester GPA:</strong> One term only. Changes quickly.</li>
                  <li><strong>Cumulative GPA:</strong> All terms combined. Changes slowly over time.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  If you had a low first semester, your cumulative GPA may stay lower for a while even
                  if later semesters improve. That is normal and expected.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">How to Use This Cumulative GPA Calculator</h2>
                <p className="text-gray-700 leading-relaxed">
                  Using the calculator is simple. Enter one row per semester, then press the calculate
                  button. You can add as many semesters as you need and remove any you entered by mistake.
                </p>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Best Tips for Accurate Results</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Use the GPA shown on your transcript, not a rounded estimate.</li>
                  <li>Enter the exact credit hours for each term.</li>
                  <li>If your school uses a different scale (like 5.0), use those GPAs consistently.</li>
                  <li>Include all completed terms to get a true cumulative GPA.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Common Mistakes Students Make</h2>
                <p className="text-gray-700 leading-relaxed">
                  Small errors can lead to a wrong cumulative GPA. Here are the most common mistakes
                  and how to avoid them:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Forgetting credits:</strong> GPA is weighted, so credits must be included.</li>
                  <li><strong>Mixing scales:</strong> Do not mix a 4.0 GPA with a 5.0 GPA in one calculation.</li>
                  <li><strong>Rounding too early:</strong> Use full values, then round at the end.</li>
                  <li><strong>Skipping terms:</strong> Leaving out a semester makes the result inaccurate.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">How to Improve Your Cumulative GPA</h2>
                <p className="text-gray-700 leading-relaxed">
                  Improving your cumulative GPA takes time because it includes all past grades. The
                  more credits you already have, the slower your cumulative GPA changes. That does
                  not mean improvement is impossible. It just means you need a clear plan.
                </p>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Practical Strategies</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Focus on high‑credit classes first because they carry more weight.</li>
                  <li>Retake a course only if your school replaces old grades.</li>
                  <li>Meet professors early for feedback and clarification.</li>
                  <li>Use consistent weekly study blocks instead of last‑minute cramming.</li>
                  <li>Track your progress each term with this calculator.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  If you want a detailed plan, set a goal GPA and calculate how many strong semesters
                  you need. Seeing the numbers can keep you motivated and realistic.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Who Should Use a Cumulative GPA Calculator?</h2>
                <p className="text-gray-700 leading-relaxed">
                  This tool is useful for high school students, college students, transfer students,
                  and even parents helping with academic planning. It is especially helpful when you
                  need to check eligibility for scholarships, honors programs, or academic probation
                  rules.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Whether you are aiming for a scholarship or just tracking progress, your cumulative
                  GPA gives a clear picture of where you stand right now.
                </p>
              </section>

              {/* FAQ Section */}
              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <FAQItem
                    question="What is a good cumulative GPA in college?"
                    answer="A cumulative GPA of 3.0 is generally solid, 3.5 is very strong, and 3.8+ is excellent. Requirements vary by school, scholarship, and program."
                  />
                  <FAQItem
                    question="Does cumulative GPA include failed or withdrawn classes?"
                    answer="Failed classes usually count as a 0.0 and lower your GPA. Withdrawals are often excluded, but policies vary by school, so check your handbook."
                  />
                  <FAQItem
                    question="Can I raise my cumulative GPA quickly?"
                    answer="Cumulative GPA changes slowly because it includes all past credits. The fastest way to improve is earning strong grades in higher‑credit courses."
                  />
                  <FAQItem
                    question="Should I use semester GPA or cumulative GPA on applications?"
                    answer="Most applications ask for cumulative GPA. Use semester GPA only if a form specifically requests it."
                  />
                  <FAQItem
                    question="Is the calculator accurate for weighted GPAs?"
                    answer="Yes, as long as you enter your semester GPAs on the same scale your school uses. Do not mix weighted and unweighted values."
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





