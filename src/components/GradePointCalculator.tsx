'use client';

import { useMemo, useState } from 'react';

type CourseType = 'Regular' | 'Honors' | 'AP';

type GradeKey = 'A' | 'A-' | 'B+' | 'B' | 'B-' | 'C+' | 'C' | 'C-' | 'D' | 'F';

const gradeScale: Record<GradeKey, number> = {
  'A': 4.0,
  'A-': 3.7,
  'B+': 3.3,
  'B': 3.0,
  'B-': 2.7,
  'C+': 2.3,
  'C': 2.0,
  'C-': 1.7,
  'D': 1.0,
  'F': 0.0,
};

const courseBoost: Record<CourseType, number> = {
  Regular: 0,
  Honors: 0.5,
  AP: 1.0,
};

interface Course {
  id: string;
  name: string;
  creditHours: number;
  grade: GradeKey;
  courseType: CourseType;
}

const getPerformanceLabel = (gpa: number | null) => {
  if (gpa === null) return 'No Data';
  if (gpa >= 3.7) return 'Excellent';
  if (gpa >= 3.3) return 'Good';
  if (gpa >= 2.5) return 'Average';
  return 'Needs Improvement';
};

export default function GradePointCalculator() {
  const [courses, setCourses] = useState<Course[]>([
    { id: '1', name: 'Math', creditHours: 3, grade: 'A', courseType: 'Regular' },
    { id: '2', name: 'English', creditHours: 4, grade: 'B+', courseType: 'Regular' },
  ]);

  const totalCredits = useMemo(() => courses.reduce((sum, c) => sum + c.creditHours, 0), [courses]);

  const totalGradePoints = useMemo(() =>
    courses.reduce((sum, c) => sum + gradeScale[c.grade] * c.creditHours, 0),
    [courses]
  );

  const totalWeightedPoints = useMemo(() =>
    courses.reduce((sum, c) => {
      const weightedValue = Math.min(5, gradeScale[c.grade] + courseBoost[c.courseType]);
      return sum + weightedValue * c.creditHours;
    }, 0),
    [courses]
  );

  const gpa = totalCredits > 0 ? Number((totalGradePoints / totalCredits).toFixed(2)) : null;
  const weightedGpa = totalCredits > 0 ? Number((totalWeightedPoints / totalCredits).toFixed(2)) : null;

  const addCourse = () => {
    const nextId = Date.now().toString();
    setCourses([...courses, { id: nextId, name: '', creditHours: 3, grade: 'A', courseType: 'Regular' }]);
  };

  const removeCourse = (id: string) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  const updateCourse = <K extends keyof Course>(id: string, field: K, value: Course[K]) => {
    setCourses((prev) => prev.map((c) => (c.id === id ? { ...c, [field]: value } : c)));
  };

  const resetAll = () => {
    setCourses([{ id: '1', name: '', creditHours: 3, grade: 'A', courseType: 'Regular' }]);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Grade Point Calculator</h2>
        <p className="text-gray-600">Calculate course grade points, total grade points, and GPA in one place.</p>
      </div>

      <div className="space-y-4">
        {courses.map((course) => {
          const gradePoints = Number((gradeScale[course.grade] * course.creditHours).toFixed(2));
          const weightedGradeValue = Math.min(5, gradeScale[course.grade] + courseBoost[course.courseType]);
          const weightedPoints = Number((weightedGradeValue * course.creditHours).toFixed(2));

          return (
            <div key={course.id} className="grid grid-cols-1 md:grid-cols-6 gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-700">Course Name</label>
                <input value={course.name} onChange={(e) => updateCourse(course.id, 'name', e.target.value)} className="mt-1 w-full px-2 py-2 border rounded" placeholder="Course Name" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700">Credit Hours</label>
                <input type="number" min={0} value={course.creditHours} onChange={(e) => updateCourse(course.id, 'creditHours', Number(e.target.value) || 0)} className="mt-1 w-full px-2 py-2 border rounded" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700">Grade</label>
                <select value={course.grade} onChange={(e) => updateCourse(course.id, 'grade', e.target.value as GradeKey)} className="mt-1 w-full px-2 py-2 border rounded">
                  {Object.keys(gradeScale).map((key) => (
                    <option key={key} value={key}>{key}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700">Course Type</label>
                <select value={course.courseType} onChange={(e) => updateCourse(course.id, 'courseType', e.target.value as CourseType)} className="mt-1 w-full px-2 py-2 border rounded">
                  <option value="Regular">Regular</option>
                  <option value="Honors">Honors</option>
                  <option value="AP">AP</option>
                </select>
              </div>

              <div className="pt-6 text-sm text-slate-700">
                <div>Grade Points: {gradePoints}</div>
                <div>Weighted Points: {weightedPoints}</div>
              </div>

              <button onClick={() => removeCourse(course.id)} className="py-2 px-3 min-w-max text-white bg-red-500 rounded hover:bg-red-600 self-end">Remove</button>
            </div>
          );
        })}
      </div>

      <div className="my-4 flex gap-3">
        <button onClick={addCourse} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add Course</button>
        <button onClick={resetAll} className="px-4 py-2 bg-gray-300 text-slate-700 rounded hover:bg-gray-400">Reset</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        <div className="rounded-lg border border-slate-200 p-4 bg-slate-50">
          <div className="text-sm text-slate-500">Total Credits</div>
          <div className="text-2xl font-bold">{totalCredits}</div>
        </div>
        <div className="rounded-lg border border-slate-200 p-4 bg-slate-50">
          <div className="text-sm text-slate-500">Total Grade Points</div>
          <div className="text-2xl font-bold">{totalGradePoints.toFixed(2)}</div>
        </div>
        <div className="rounded-lg border border-slate-200 p-4 bg-slate-50">
          <div className="text-sm text-slate-500">GPA</div>
          <div className="text-2xl font-bold">{gpa !== null ? gpa.toFixed(2) : '--'}</div>
        </div>
        <div className="rounded-lg border border-slate-200 p-4 bg-slate-50">
          <div className="text-sm text-slate-500">Weighted GPA</div>
          <div className="text-2xl font-bold">{weightedGpa !== null ? weightedGpa.toFixed(2) : '--'}</div>
        </div>
      </div>

      <div className="mt-4 p-4 rounded-lg border border-slate-200 bg-slate-50">
        <div className="text-sm text-slate-500">Performance</div>
        <div className="text-xl font-semibold">{getPerformanceLabel(gpa)}</div>
      </div>
    </div>
  );
}
