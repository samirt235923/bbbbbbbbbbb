'use client';

import { useMemo, useState } from 'react';

type Course = {
  id: string;
  name: string;
  semester: 'Fall' | 'Spring' | 'Summer';
  grade: string;
  creditHours: number;
  courseType: 'Regular' | 'Honors' | 'Advanced';
};

const gradeValues: Record<string, number> = {
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

const semesters = ['Fall', 'Spring', 'Summer'] as const;

const courseTypes = ['Regular', 'Honors', 'Advanced'] as const;

const createCourse = (): Course => ({
  id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
  name: '',
  semester: 'Fall',
  grade: 'A',
  creditHours: 3,
  courseType: 'Regular',
});

export default function UniversityGPACalculator() {
  const [courses, setCourses] = useState<Course[]>([createCourse()]);
  const [prevCredits, setPrevCredits] = useState(0);
  const [prevGpa, setPrevGpa] = useState(0);

  const totals = useMemo(() => {
    const summary = courses.reduce(
      (acc, course) => {
        const credits = Number(course.creditHours) || 0;
        const baseGrade = gradeValues[course.grade] ?? 0;
        const bonus = course.courseType === 'Honors' ? 0.5 : course.courseType === 'Advanced' ? 1.0 : 0;
        const adjustedGrade = Math.min(baseGrade + bonus, 5.0);

        const gradePoints = baseGrade * credits;
        const weightedPoints = adjustedGrade * credits;

        acc.semester[course.semester].credits += credits;
        acc.semester[course.semester].points += gradePoints;
        acc.semester[course.semester].weightedPoints += weightedPoints;

        acc.totalCredits += credits;
        acc.totalGradePoints += gradePoints;
        acc.totalWeightedPoints += weightedPoints;

        return acc;
      },
      {
        semester: {
          Fall: { credits: 0, points: 0, weightedPoints: 0 },
          Spring: { credits: 0, points: 0, weightedPoints: 0 },
          Summer: { credits: 0, points: 0, weightedPoints: 0 },
        },
        totalCredits: 0,
        totalGradePoints: 0,
        totalWeightedPoints: 0,
      }
    );

    const semesterGPA = (s: 'Fall' | 'Spring' | 'Summer') => {
      const sem = summary.semester[s];
      return sem.credits > 0 ? Number((sem.points / sem.credits).toFixed(3)) : 0;
    };

    const semGPAs = {
      Fall: semesterGPA('Fall'),
      Spring: semesterGPA('Spring'),
      Summer: semesterGPA('Summer'),
    };

    const currGPA = summary.totalCredits > 0 ? Number((summary.totalGradePoints / summary.totalCredits).toFixed(3)) : 0;

    const cumulativeCredits = Number(prevCredits) + summary.totalCredits;
    const cumulativePoints = prevGpa * Number(prevCredits) + summary.totalGradePoints;
    const cumulativeGPA = cumulativeCredits > 0 ? Number((cumulativePoints / cumulativeCredits).toFixed(3)) : 0;

    const classification = (gpaValue: number) => {
      if (gpaValue >= 3.7) return 'First Class';
      if (gpaValue >= 3.0) return 'Second Class (Upper)';
      if (gpaValue >= 2.0) return 'Second Class (Lower)';
      if (gpaValue >= 1.0) return 'Third Class';
      return 'Fail/Below Standard';
    };

    return {
      summary,
      semesterGPAs: semGPAs,
      currentGPA: currGPA,
      cumulativeGPA,
      totalCredits: summary.totalCredits,
      totalGradePoints: Number(summary.totalGradePoints.toFixed(2)),
      performance: classification(cumulativeGPA),
      hasInvalid: courses.some((course) => Number(course.creditHours) <= 0),
    };
  }, [courses, prevCredits, prevGpa]);

  const addCourse = () => setCourses((prev) => [...prev, createCourse()]);
  const removeCourse = (id: string) => setCourses((prev) => (prev.length > 1 ? prev.filter((course) => course.id !== id) : prev));
  const resetCalculator = () => {
    setCourses([createCourse()]);
    setPrevCredits(0);
    setPrevGpa(0);
  };

  const updateCourse = <K extends keyof Course>(id: string, key: K, value: Course[K]) => {
    setCourses((prev) => prev.map((course) => (course.id === id ? { ...course, [key]: value } : course)));
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 md:p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900">University GPA Calculator</h3>
        <p className="text-sm text-gray-600">Calculate semester GPA and cumulative university GPA with course weight and semester tracking.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 mb-5">
        <label className="flex flex-col text-sm text-gray-700">
          Previous Cumulative Credits
          <input
            type="number"
            min={0}
            value={prevCredits}
            onChange={(e) => setPrevCredits(Math.max(0, Number(e.target.value) || 0))}
            className="mt-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="flex flex-col text-sm text-gray-700">
          Previous Cumulative GPA
          <input
            type="number"
            min={0}
            max={4}
            step={0.01}
            value={prevGpa}
            onChange={(e) => setPrevGpa(Math.max(0, Math.min(4, Number(e.target.value) || 0)))}
            className="mt-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </label>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-700">
              <th className="px-2 py-2">Course Name</th>
              <th className="px-2 py-2">Semester</th>
              <th className="px-2 py-2">Credit Hours</th>
              <th className="px-2 py-2">Grade</th>
              <th className="px-2 py-2">Course Type</th>
              <th className="px-2 py-2">Remove</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={course.id} className="border-t border-gray-200">
                <td className="px-2 py-2">
                  <input
                    value={course.name}
                    onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                    placeholder={`Course ${index + 1}`}
                    className="w-full border border-gray-300 rounded-lg px-2 py-1 focus:ring-2 focus:ring-blue-500"
                  />
                </td>
                <td className="px-2 py-2 w-28">
                  <select
                    value={course.semester}
                    onChange={(e) => updateCourse(course.id, 'semester', e.target.value as Course['semester'])}
                    className="w-full border border-gray-300 rounded-lg px-2 py-1 focus:ring-2 focus:ring-blue-500"
                  >
                    {semesters.map((sem) => (
                      <option key={sem} value={sem}>{sem}</option>
                    ))}
                  </select>
                </td>
                <td className="px-2 py-2 w-24">
                  <input
                    type="number"
                    min={1}
                    max={20}
                    value={course.creditHours}
                    onChange={(e) => updateCourse(course.id, 'creditHours', Number(e.target.value) || 0)}
                    className="w-full border border-gray-300 rounded-lg px-2 py-1 focus:ring-2 focus:ring-blue-500"
                  />
                </td>
                <td className="px-2 py-2 w-28">
                  <select
                    value={course.grade}
                    onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-2 py-1 focus:ring-2 focus:ring-blue-500"
                  >
                    {Object.keys(gradeValues).map((grade) => (
                      <option key={grade} value={grade}>{grade} ({gradeValues[grade].toFixed(1)})</option>
                    ))}
                  </select>
                </td>
                <td className="px-2 py-2 w-28">
                  <select
                    value={course.courseType}
                    onChange={(e) => updateCourse(course.id, 'courseType', e.target.value as Course['courseType'])}
                    className="w-full border border-gray-300 rounded-lg px-2 py-1 focus:ring-2 focus:ring-blue-500"
                  >
                    {courseTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </td>
                <td className="px-2 py-2 w-20 text-center">
                  <button
                    onClick={() => removeCourse(course.id)}
                    disabled={courses.length === 1}
                    className="text-red-600 disabled:text-gray-300"
                  >Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button onClick={addCourse} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">+ Add Course</button>
        <button onClick={resetCalculator} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">Reset</button>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
          <p className="text-xs font-bold uppercase text-blue-700">Total Credits</p>
          <p className="text-2xl font-bold text-blue-900">{totals.totalCredits}</p>
        </div>
        <div className="bg-green-50 p-3 rounded-lg border border-green-100">
          <p className="text-xs font-bold uppercase text-green-700">Total Grade Points</p>
          <p className="text-2xl font-bold text-green-900">{totals.totalGradePoints}</p>
        </div>
        <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-100">
          <p className="text-xs font-bold uppercase text-indigo-700">Semester GPA (All)</p>
          <p className="text-2xl font-bold text-indigo-900">{totals.currentGPA.toFixed(3)}</p>
        </div>
        <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
          <p className="text-xs font-bold uppercase text-purple-700">Cumulative GPA</p>
          <p className="text-2xl font-bold text-purple-900">{totals.cumulativeGPA.toFixed(3)}</p>
        </div>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <div className="bg-white p-3 rounded-lg border border-gray-200">
          <p className="text-xs text-gray-600 uppercase">Fall GPA</p>
          <p className="text-xl font-semibold">{totals.semesterGPAs.Fall.toFixed(3)}</p>
        </div>
        <div className="bg-white p-3 rounded-lg border border-gray-200">
          <p className="text-xs text-gray-600 uppercase">Spring GPA</p>
          <p className="text-xl font-semibold">{totals.semesterGPAs.Spring.toFixed(3)}</p>
        </div>
        <div className="bg-white p-3 rounded-lg border border-gray-200">
          <p className="text-xs text-gray-600 uppercase">Summer GPA</p>
          <p className="text-xl font-semibold">{totals.semesterGPAs.Summer.toFixed(3)}</p>
        </div>
      </div>

      <div className="mt-4 p-3 bg-slate-50 border border-slate-200 rounded-lg">
        <p className="text-sm text-gray-700">Graduation classification estimate: <strong>{totals.performance}</strong></p>
        {totals.hasInvalid && <p className="text-sm text-red-600">Please enter valid credits greater than 0.</p>}
      </div>

      <div className="mt-4 text-sm text-gray-600">
        <p><strong>Semester GPA formula:</strong> Total Grade Points ÷ Total Credit Hours.</p>
        <p><strong>Cumulative GPA formula:</strong> (Previous GPA × Previous Credits + Current Grade Points) ÷ Total Credits.</p>
      </div>
    </div>
  );
}
