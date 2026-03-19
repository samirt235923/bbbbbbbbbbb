'use client';

import { useMemo, useState } from 'react';

type Course = {
  id: string;
  name: string;
  semester: string;
  grade: string;
  creditHours: number;
  type: 'Regular' | 'Honors' | 'AP';
};

type SemesterData = {
  name: string;
  courses: Course[];
};

const gradeScale: Record<string, number> = {
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

const courseTypes = ['Regular', 'Honors', 'AP'] as const;

const initialSemester = (): SemesterData => ({
  name: 'Semester 1',
  courses: [
    { id: `${Date.now()}-s0`, name: '', semester: 'Semester 1', grade: 'A', creditHours: 3, type: 'Regular' },
  ],
});

export default function AcademicGPACalculator() {
  const [semesters, setSemesters] = useState<SemesterData[]>([initialSemester()]);
  const [previousGPA, setPreviousGPA] = useState(0);
  const [previousCredits, setPreviousCredits] = useState(0);

  const totals = useMemo(() => {
    const semesterTotals = semesters.map((semester) => {
      const total = semester.courses.reduce(
        (acc, course) => {
          const credits = Math.max(0, course.creditHours);
          const base = gradeScale[course.grade] || 0;
          const bonus = course.type === 'Honors' ? 0.5 : course.type === 'AP' ? 1 : 0;
          const weighted = Math.min(base + bonus, 5.0);

          const coursePoints = base * credits;
          const courseWeightedPoints = weighted * credits;

          return {
            totalCredits: acc.totalCredits + credits,
            totalPoints: acc.totalPoints + coursePoints,
            totalWeighted: acc.totalWeighted + courseWeightedPoints,
          };
        },
        { totalCredits: 0, totalPoints: 0, totalWeighted: 0 }
      );

      return {
        name: semester.name,
        ...total,
        semesterGPA: total.totalCredits ? Number((total.totalPoints / total.totalCredits).toFixed(3)) : 0,
        semesterWeightedGPA: total.totalCredits ? Number((total.totalWeighted / total.totalCredits).toFixed(3)) : 0,
      };
    });

    const totalCredits = semesterTotals.reduce((sum, sem) => sum + sem.totalCredits, 0);
    const totalPoints = semesterTotals.reduce((sum, sem) => sum + sem.totalPoints, 0);

    const currentGPA = totalCredits ? Number((totalPoints / totalCredits).toFixed(3)) : 0;
    const cumulativeCredits = totalCredits + Math.max(0, previousCredits);
    const cumulativePoints = totalPoints + previousGPA * Math.max(0, previousCredits);
    const cumulativeGPA = cumulativeCredits ? Number((cumulativePoints / cumulativeCredits).toFixed(3)) : 0;

    const classification = cumulativeGPA >= 3.7 ? 'Excellent' : cumulativeGPA >= 3.0 ? 'Good' : cumulativeGPA >= 2.0 ? 'Average' : 'Needs Improvement';

    const hasInvalidCourse = semesters.some((semester) =>
      semester.courses.some((course) => course.creditHours <= 0)
    );

    return {
      semesterTotals,
      totalCredits,
      totalPoints: Number(totalPoints.toFixed(2)),
      currentGPA,
      cumulativeGPA,
      classification,
      hasInvalid: hasInvalidCourse,
    };
  }, [semesters, previousCredits, previousGPA]);

  const addSemester = () => setSemesters((prev) => [...prev, { ...initialSemester(), name: `Semester ${prev.length + 1}` }]);

  const removeSemester = (name: string) => {
    if (semesters.length === 1) return;
    setSemesters((prev) => prev.filter((sem) => sem.name !== name));
  };

  const addCourse = (semesterName: string) => {
    setSemesters((prev) =>
      prev.map((sem) =>
        sem.name === semesterName
          ? {
              ...sem,
              courses: [...sem.courses, { id: `${Date.now()}-${Math.random().toString(36).slice(2)}`, name: '', semester: semesterName, grade: 'A', creditHours: 3, type: 'Regular' }],
            }
          : sem
      )
    );
  };

  const removeCourse = (semesterName: string, id: string) => {
    setSemesters((prev) =>
      prev.map((sem) =>
        sem.name === semesterName
          ? { ...sem, courses: sem.courses.length > 1 ? sem.courses.filter((course) => course.id !== id) : sem.courses }
          : sem
      )
    );
  };

  const updateCourse = (semesterName: string, id: string, key: keyof Course, value: any) => {
    setSemesters((prev) =>
      prev.map((sem) =>
        sem.name === semesterName
          ? {
              ...sem,
              courses: sem.courses.map((course) => (course.id === id ? { ...course, [key]: value } : course)),
            }
          : sem
      )
    );
  };

  const resetAll = () => {
    setSemesters([initialSemester()]);
    setPreviousCredits(0);
    setPreviousGPA(0);
  };

  return (
    <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-gray-900">Academic GPA Calculator</h3>
        <p className="text-sm text-gray-600">Professional and flexible calculator for semester, cumulative and weighted academic GPA tracking.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 mb-4">
        <label className="flex flex-col text-sm text-gray-700">
          Previous GPA
          <input
            type="number"
            min="0"
            max="4"
            step="0.01"
            value={previousGPA}
            onChange={(e) => setPreviousGPA(Math.max(0, Math.min(4, Number(e.target.value) || 0)))}
            className="mt-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </label>

        <label className="flex flex-col text-sm text-gray-700">
          Previous Credits
          <input
            type="number"
            min="0"
            step="1"
            value={previousCredits}
            onChange={(e) => setPreviousCredits(Math.max(0, Number(e.target.value) || 0))}
            className="mt-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </label>
      </div>

      {semesters.map((semester) => (
        <div key={semester.name} className="border rounded-xl border-gray-200 p-4 mb-4">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-semibold text-gray-800">{semester.name}</h4>
            {semesters.length > 1 && (
              <button onClick={() => removeSemester(semester.name)} className="text-red-600 hover:text-red-800">Remove Semester</button>
            )}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-gray-100 text-left text-gray-700">
                <tr>
                  <th className="px-2 py-2">Course</th>
                  <th className="px-2 py-2">Credits</th>
                  <th className="px-2 py-2">Grade</th>
                  <th className="px-2 py-2">Type</th>
                  <th className="px-2 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {semester.courses.map((course) => (
                  <tr key={course.id} className="border-t border-gray-200">
                    <td className="px-2 py-2">
                      <input
                        value={course.name}
                        onChange={(e) => updateCourse(semester.name, course.id, 'name', e.target.value)}
                        placeholder="Course name"
                        className="w-full border border-gray-300 rounded-lg px-2 py-1 focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-2 py-2 w-24">
                      <input
                        type="number"
                        min={0}
                        max={30}
                        value={course.creditHours}
                        onChange={(e) => updateCourse(semester.name, course.id, 'creditHours', Number(e.target.value) || 0)}
                        className="w-full border border-gray-300 rounded-lg px-2 py-1 focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-2 py-2 w-24">
                      <select
                        value={course.grade}
                        onChange={(e) => updateCourse(semester.name, course.id, 'grade', e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-2 py-1 focus:ring-2 focus:ring-blue-500"
                      >
                        {Object.keys(gradeScale).map((grade) => (
                          <option key={grade} value={grade}>{grade}</option>
                        ))}
                      </select>
                    </td>
                    <td className="px-2 py-2 w-28">
                      <select
                        value={course.type}
                        onChange={(e) => updateCourse(semester.name, course.id, 'type', e.target.value as Course['type'])}
                        className="w-full border border-gray-300 rounded-lg px-2 py-1 focus:ring-2 focus:ring-blue-500"
                      >
                        {courseTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </td>
                    <td className="px-2 py-2 w-20 text-center">
                      <button
                        onClick={() => removeCourse(semester.name, course.id)}
                        disabled={semester.courses.length === 1}
                        className="text-red-600 disabled:text-gray-300"
                      >Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            onClick={() => addCourse(semester.name)}
            className="mt-3 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >+ Add Course</button>
        </div>
      ))}

      <div className="flex flex-wrap gap-2 mb-4">
        <button onClick={addSemester} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">+ Add Semester</button>
        <button onClick={resetAll} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">Reset</button>
      </div>

      <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-5 mb-4">
        <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
          <p className="text-xs text-blue-600 uppercase tracking-wide">Total Credits</p>
          <p className="text-2xl font-bold">{totals.totalCredits}</p>
        </div>
        <div className="bg-green-50 p-3 rounded-lg border border-green-100">
          <p className="text-xs text-green-600 uppercase tracking-wide">Total Grade Points</p>
          <p className="text-2xl font-bold">{totals.totalPoints}</p>
        </div>
        <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-100">
          <p className="text-xs text-indigo-600 uppercase tracking-wide">Current Semester GPA</p>
          <p className="text-2xl font-bold">{totals.currentGPA.toFixed(3)}</p>
        </div>
        <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
          <p className="text-xs text-purple-600 uppercase tracking-wide">Cumulative GPA</p>
          <p className="text-2xl font-bold">{totals.cumulativeGPA.toFixed(3)}</p>
        </div>
        <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
          <p className="text-xs text-slate-600 uppercase tracking-wide">Classification</p>
          <p className="text-2xl font-bold">{totals.classification}</p>
        </div>
      </div>

      {totals.hasInvalid && <p className="text-sm text-red-600 mb-3">Please ensure all credit hours are positive numbers.</p>}

      <div className="text-sm text-gray-600">
        <p><strong>Course GPA formula:</strong> Grade Points = Grade Value × Credit Hours.</p>
        <p><strong>Semester GPA formula:</strong> Total Grade Points ÷ Total Credit Hours.</p>
        <p><strong>Cumulative GPA formula:</strong> (Previous GPA × Previous Credits + Current Grade Points) ÷ Total Credits.</p>
        <p><strong>Weighted GPA:</strong> Weighted Grade Value = Base Grade + Bonus (Honors +0.5, AP +1.0, capped at 5.0).</p>
      </div>
    </div>
  );
}
