'use client';

import { useMemo, useState } from 'react';

type CourseLevel = 'Regular' | 'Honors' | 'AP';

interface UpcomingCourse {
  id: string;
  name: string;
  credits: number;
  estimatedGrade: number;
  level: CourseLevel;
}


const levelBonus: Record<CourseLevel, number> = {
  Regular: 0,
  Honors: 0.5,
  AP: 1.0,
};

function toLetterGrade(mathGpa: number) {
  if (mathGpa >= 3.85) return 'A';
  if (mathGpa >= 3.55) return 'A-';
  if (mathGpa >= 3.15) return 'B+';
  if (mathGpa >= 2.85) return 'B';
  if (mathGpa >= 2.55) return 'B-';
  if (mathGpa >= 2.15) return 'C+';
  if (mathGpa >= 1.85) return 'C';
  if (mathGpa >= 1.55) return 'C-';
  if (mathGpa >= 1.05) return 'D';
  return 'F';
}

export default function GpaGoalCalculator() {
  const [currentGPA, setCurrentGPA] = useState('3.2');
  const [currentCredits, setCurrentCredits] = useState('30');
  const [targetGPA, setTargetGPA] = useState('3.5');
  const [weighted, setWeighted] = useState(false);

  const [courses, setCourses] = useState<UpcomingCourse[]>([
    { id: 'c1', name: 'Math', credits: 3, estimatedGrade: 4.0, level: 'Regular' },
    { id: 'c2', name: 'English', credits: 3, estimatedGrade: 4.0, level: 'Regular' },
  ]);

  const upcomingCredits = useMemo(
    () => courses.reduce((sum, c) => sum + c.credits, 0),
    [courses]
  );

  const priorQualityPoints = useMemo(() => {
    const cGPA = parseFloat(currentGPA);
    const cCredits = parseFloat(currentCredits);
    if (Number.isNaN(cGPA) || Number.isNaN(cCredits) || cCredits <= 0) return 0;
    return cGPA * cCredits;
  }, [currentGPA, currentCredits]);

  const requiredGPA = useMemo(() => {
    const target = parseFloat(targetGPA);
    const currentC = parseFloat(currentCredits);
    if (Number.isNaN(target) || Number.isNaN(currentC) || target < 0 || target > 4.0 || upcomingCredits <= 0) return null;

    const needed = ((target * (currentC + upcomingCredits)) - (priorQualityPoints)) / upcomingCredits;
    if (needed < 0) return 0;
    return Math.min(4.0, Math.max(0, Number(needed.toFixed(2))));
  }, [targetGPA, currentCredits, priorQualityPoints, upcomingCredits]);

  const projectedGPA = useMemo(() => {
    const currentC = parseFloat(currentCredits);
    if (Number.isNaN(currentC) || currentC < 0 || upcomingCredits <= 0) return null;
    const combinedQualityPoints = priorQualityPoints + courses.reduce((sum, course) => {
      const base = course.estimatedGrade;
      const bonus = weighted ? levelBonus[course.level] : 0;
      const effective = Math.min(5.0, base + bonus);
      return sum + effective * course.credits;
    }, 0);
    const totalCredits = currentC + upcomingCredits;
    const value = combinedQualityPoints / totalCredits;
    return Number(value.toFixed(2));
  }, [priorQualityPoints, currentCredits, courses, weighted, upcomingCredits]);

  const requiredGradeText = useMemo(() => {
    if (requiredGPA === null) return 'Enter data to calculate required grade.';
    if (requiredGPA > 4.0) return 'Target unreachable with current plan (requires >4.0).';
    const letter = toLetterGrade(requiredGPA);
    return `You need an average GPA of ${requiredGPA} (approx. ${letter}).`;
  }, [requiredGPA]);

  const achievementStatus = useMemo(() => {
    if (projectedGPA === null || requiredGPA === null) return 'Enter values to evaluate status.';
    if (projectedGPA >= parseFloat(targetGPA)) return 'On Track';
    return 'Below Target';
  }, [projectedGPA, requiredGPA, targetGPA]);

  const addCourse = () => {
    setCourses((prev) => [
      ...prev,
      { id: `c${Date.now()}`, name: `Course ${prev.length + 1}`, credits: 3, estimatedGrade: 4.0, level: 'Regular' },
    ]);
  };

  const removeCourse = (id: string) => {
    setCourses((prev) => prev.filter((c) => c.id !== id));
  };

  const updateCourse = <K extends keyof UpcomingCourse>(id: string, key: K, value: UpcomingCourse[K]) => {
    setCourses((prev) => prev.map((course) => (course.id === id ? { ...course, [key]: value } : course)));
  };

  const resetAll = () => {
    setCurrentGPA('');
    setCurrentCredits('');
    setTargetGPA('');
    setWeighted(false);
    setCourses([{ id: 'c1', name: 'Math', credits: 3, estimatedGrade: 4.0, level: 'Regular' }]);
  };

  const getGoalClass = () => {
    if (achievementStatus === 'On Track') return 'bg-emerald-100 text-emerald-800';
    if (achievementStatus === 'Below Target') return 'bg-amber-100 text-amber-800';
    return 'bg-slate-100 text-slate-800';
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-900">GPA Goal Calculator</h2>
        <p className="text-sm text-slate-600">Plan your cumulative GPA and find out exactly what grades you need to meet your target.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Current GPA</span>
          <input value={currentGPA} onChange={(e) => setCurrentGPA(e.target.value)} type="number" step="0.01" min="0" max="4" className="mt-1 block w-full px-3 py-2 border rounded-md" placeholder="3.2" />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Current Total Credits</span>
          <input value={currentCredits} onChange={(e) => setCurrentCredits(e.target.value)} type="number" step="1" min="0" className="mt-1 block w-full px-3 py-2 border rounded-md" placeholder="30" />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Target GPA</span>
          <input value={targetGPA} onChange={(e) => setTargetGPA(e.target.value)} type="number" step="0.01" min="0" max="4" className="mt-1 block w-full px-3 py-2 border rounded-md" placeholder="3.5" />
        </label>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <input type="checkbox" checked={weighted} onChange={(e) => setWeighted(e.target.checked)} id="weighted" className="h-4 w-4 text-blue-600" />
        <label htmlFor="weighted" className="text-sm text-slate-700">Enable weighted GPA (Honors +0.5, AP +1.0)</label>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-slate-800">Upcoming Courses</h3>
          <button onClick={addCourse} className="px-3 py-1 text-sm border rounded-md text-blue-600 border-blue-300 hover:bg-blue-50">Add Course</button>
        </div>

        <div className="space-y-3">
          {courses.map((course) => (
            <div key={course.id} className="grid grid-cols-1 md:grid-cols-5 gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200 items-end">
              <input type="text" placeholder="Course name" value={course.name} onChange={(e) => updateCourse(course.id, 'name', e.target.value)} className="px-2 py-2 border rounded-md" />
              <input type="number" placeholder="Credits" min="1" max="6" value={course.credits} onChange={(e) => updateCourse(course.id, 'credits', Number(e.target.value) || 0)} className="px-2 py-2 border rounded-md" />
              <input type="number" placeholder="Estimated grade" min="0" max="4" step="0.01" value={course.estimatedGrade} onChange={(e) => updateCourse(course.id, 'estimatedGrade', Number(e.target.value) || 0)} className="px-2 py-2 border rounded-md" />
              <select value={course.level} onChange={(e) => updateCourse(course.id, 'level', e.target.value as CourseLevel)} className="px-2 py-2 border rounded-md">
                <option value="Regular">Regular</option>
                <option value="Honors">Honors (+0.5)</option>
                <option value="AP">AP (+1.0)</option>
              </select>
              <button onClick={() => removeCourse(course.id)} className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">Remove</button>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        <div className="rounded-lg bg-indigo-50 p-4">
          <div className="text-2xl font-bold">{upcomingCredits}</div>
          <div className="text-sm text-slate-600">Upcoming Credits</div>
        </div>
        <div className="rounded-lg bg-indigo-50 p-4">
          <div className="text-2xl font-bold">{requiredGPA === null ? '—' : requiredGPA.toFixed(2)}</div>
          <div className="text-sm text-slate-600">Required Upcoming GPA</div>
        </div>
        <div className="rounded-lg bg-indigo-50 p-4">
          <div className="text-2xl font-bold">{projectedGPA === null ? '—' : projectedGPA.toFixed(2)}</div>
          <div className="text-sm text-slate-600">Projected Cumulative GPA</div>
        </div>
        <div className={`rounded-lg p-4 ${getGoalClass()}`}>
          <div className="text-sm font-semibold">Achievement Status</div>
          <div className="text-xl font-bold">{achievementStatus}</div>
        </div>
      </div>

      <div className="bg-slate-100 p-4 rounded-lg mb-6">
        <p className="text-slate-700">{requiredGradeText}</p>
      </div>

      <button onClick={resetAll} className="w-full py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700">Reset Calculator</button>
    </div>
  );
}
