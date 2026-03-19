'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

interface Course {
  id: string;
  name: string;
  creditHours: number;
  grade: string;
  type: 'Regular' | 'Honors' | 'AP';
}

const gradePoints: Record<string, number> = {
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

const gradeOptions = [
  { value: 'A', label: 'A (4.0)' },
  { value: 'A-', label: 'A- (3.7)' },
  { value: 'B+', label: 'B+ (3.3)' },
  { value: 'B', label: 'B (3.0)' },
  { value: 'B-', label: 'B- (2.7)' },
  { value: 'C+', label: 'C+ (2.3)' },
  { value: 'C', label: 'C (2.0)' },
  { value: 'C-', label: 'C- (1.7)' },
  { value: 'D', label: 'D (1.0)' },
  { value: 'F', label: 'F (0.0)' },
];

const courseTypes = [
  { value: 'Regular', label: 'Regular' },
  { value: 'Honors', label: 'Honors (+0.5)' },
  { value: 'AP', label: 'AP (+1.0)' },
] as const;

const gradeScale = [
  { letter: 'A', points: 4.0, note: 'Excellent' },
  { letter: 'A-', points: 3.7, note: 'Very Good' },
  { letter: 'B+', points: 3.3, note: 'Good' },
  { letter: 'B', points: 3.0, note: 'Good' },
  { letter: 'B-', points: 2.7, note: 'Above Average' },
  { letter: 'C+', points: 2.3, note: 'Average' },
  { letter: 'C', points: 2.0, note: 'Average' },
  { letter: 'C-', points: 1.7, note: 'Below Average' },
  { letter: 'D', points: 1.0, note: 'Passing' },
  { letter: 'F', points: 0.0, note: 'Failing' },
];

const DEFAULT_COURSES: Course[] = [
  { id: 'c1', name: 'Math', creditHours: 3, grade: 'A', type: 'Regular' },
  { id: 'c2', name: 'English', creditHours: 4, grade: 'B+', type: 'Regular' },
  { id: 'c3', name: 'Science', creditHours: 3, grade: 'B', type: 'Honors' },
];

const courseTypeBonus: Record<Course['type'], number> = {
  Regular: 0,
  Honors: 0.5,
  AP: 1.0,
};

const performanceLabel = (gpa: number) => {
  if (gpa >= 3.8) return 'Excellent';
  if (gpa >= 3.3) return 'Very Good';
  if (gpa >= 3.0) return 'Good';
  if (gpa >= 2.0) return 'Average';
  return 'Needs Improvement';
};

export default function SemesterGPACalculatorPage() {
  const [courses, setCourses] = useState<Course[]>(DEFAULT_COURSES);
  const [showWeighted, setShowWeighted] = useState(true);

  const totals = useMemo(() => {
    let totalCredits = 0;
    let totalGradePoints = 0;
    let weightedGradePoints = 0;

    courses.forEach((course) => {
      const credits = Number.isFinite(course.creditHours) ? course.creditHours : 0;
      const base = gradePoints[course.grade] ?? 0;
      const bonus = courseTypeBonus[course.type] ?? 0;
      const weighted = Math.min(5.0, base + bonus);

      if (credits > 0) {
        totalCredits += credits;
        totalGradePoints += base * credits;
        weightedGradePoints += weighted * credits;
      }
    });

    const semesterGPA = totalCredits > 0 ? totalGradePoints / totalCredits : 0;
    const weightedGPA = totalCredits > 0 ? weightedGradePoints / totalCredits : 0;

    return {
      totalCredits,
      totalGradePoints,
      weightedGradePoints,
      semesterGPA,
      weightedGPA,
    };
  }, [courses]);

  const hasInvalid = useMemo(
    () => courses.some((course) => !course.creditHours || course.creditHours <= 0 || !course.grade),
    [courses]
  );

  const addCourse = () => {
    const newId = Math.random().toString(36).slice(2, 10);
    setCourses([
      ...courses,
      { id: newId, name: '', creditHours: 3, grade: 'A', type: 'Regular' },
    ]);
  };

  const removeCourse = (id: string) => {
    if (courses.length === 1) return;
    setCourses(courses.filter((course) => course.id !== id));
  };

  const updateCourse = (id: string, field: keyof Course, value: string | number) => {
    setCourses(courses.map((course) => (course.id === id ? { ...course, [field]: value } : course)));
  };

  const resetCourses = () => setCourses(DEFAULT_COURSES);

  const displayGPA = showWeighted ? totals.weightedGPA : totals.semesterGPA;

  const faqItems = [
    {
      question: 'How do I calculate semester GPA?',
      answer:
        'Add up grade points for each course (grade value multiplied by credit hours), then divide by total credit hours. Our semester GPA calculator does this instantly for a single term.',
    },
    {
      question: 'What is a good semester GPA?',
      answer:
        'A 3.0 or higher is typically considered good. Competitive scholarships and honors programs often look for 3.5 or higher, especially in a college semester GPA calculator context.',
    },
    {
      question: 'Does semester GPA affect cumulative GPA?',
      answer:
        'Yes. Each term is weighted by credit hours and added into your cumulative GPA, so a strong semester can lift your overall average.',
    },
    {
      question: 'How do credit hours affect GPA?',
      answer:
        'Higher credit courses carry more weight. A strong grade in a 4-credit class boosts GPA more than the same grade in a 1-credit class.',
    },
    {
      question: 'Can I improve GPA in one semester?',
      answer:
        'Yes. A high semester GPA, especially with heavier credit hours, can meaningfully increase your cumulative GPA over time.',
    },
  ];

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://topgpacalculator.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'GPA Calculators',
          item: 'https://topgpacalculator.com/gpa-calculators',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Semester GPA Calculator',
          item: 'https://topgpacalculator.com/gpa-calculators/semester-gpa-calculator',
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Semester GPA Calculator',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Web',
      url: 'https://topgpacalculator.com/gpa-calculators/semester-gpa-calculator',
      description:
        'Use this semester GPA calculator to calculate semester GPA for a single term with weighted and unweighted options.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <div className="max-w-6xl mx-auto px-4 py-4">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link>
          <span className="text-slate-400">/</span>
          <Link href="/gpa-calculators" className="text-blue-600 hover:underline">GPA Calculators</Link>
          <span className="text-slate-400">/</span>
          <span className="text-slate-700">Semester GPA Calculator</span>
        </nav>
      </div>

      <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <p className="text-sm uppercase tracking-widest text-blue-200">GPA Tools</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-3">Semester GPA Calculator</h1>
          <p className="text-lg md:text-xl text-blue-100 mt-4 max-w-3xl">
            Use this semester GPA calculator to calculate semester GPA for a single term. It is a fast, modern GPA calculator for semester results with weighted and unweighted options built for high school and college students.
          </p>
        </div>
      </header>

      <main className="py-10">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-10">
            <section className="bg-slate-50 border border-slate-200 rounded-xl p-6" aria-label="Table of contents">
              <h2 className="text-xl font-semibold text-slate-900">Table of Contents</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li><a href="#calculator" className="text-blue-600 hover:underline">Semester GPA Calculator</a></li>
                <li><a href="#what-is-semester-gpa" className="text-blue-600 hover:underline">What Is a Semester GPA</a></li>
                <li><a href="#how-to-calculate" className="text-blue-600 hover:underline">How to Calculate Semester GPA</a></li>
                <li><a href="#formula" className="text-blue-600 hover:underline">Semester GPA Formula Explained</a></li>
                <li><a href="#example" className="text-blue-600 hover:underline">Example Semester GPA Calculation</a></li>
                <li><a href="#grade-scale" className="text-blue-600 hover:underline">Grade Scale (4.0)</a></li>
                <li><a href="#importance" className="text-blue-600 hover:underline">Why Semester GPA Is Important</a></li>
                <li><a href="#faq" className="text-blue-600 hover:underline">FAQ</a></li>
                <li><a href="#related" className="text-blue-600 hover:underline">Related GPA Calculators</a></li>
              </ul>
            </section>

            <section id="calculator" className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Semester GPA Calculator</h2>
                  <p className="text-sm text-slate-600 mt-1">Add courses, enter credits and grades, and see instant updates.</p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <label className="flex items-center gap-2 text-sm text-slate-700">
                    <input
                      type="checkbox"
                      checked={showWeighted}
                      onChange={(event) => setShowWeighted(event.target.checked)}
                      className="h-4 w-4"
                    />
                    Weighted GPA
                  </label>
                  <button
                    type="button"
                    onClick={resetCourses}
                    className="px-4 py-2 text-sm font-semibold border border-slate-300 rounded-lg hover:bg-slate-50"
                  >
                    Reset
                  </button>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {courses.map((course, index) => (
                  <div
                    key={course.id}
                    className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50"
                  >
                    <div className="md:col-span-4">
                      <label className="text-xs font-semibold text-slate-600">Course Name</label>
                      <input
                        type="text"
                        value={course.name}
                        onChange={(event) => updateCourse(course.id, 'name', event.target.value)}
                        placeholder={`Course ${index + 1}`}
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-xs font-semibold text-slate-600">Credit Hours</label>
                      <input
                        type="number"
                        min="0"
                        step="0.5"
                        value={course.creditHours}
                        onChange={(event) => updateCourse(course.id, 'creditHours', Number(event.target.value))}
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label className="text-xs font-semibold text-slate-600">Grade</label>
                      <select
                        value={course.grade}
                        onChange={(event) => updateCourse(course.id, 'grade', event.target.value)}
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white"
                      >
                        {gradeOptions.map((option) => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-xs font-semibold text-slate-600">Course Type</label>
                      <select
                        value={course.type}
                        onChange={(event) => updateCourse(course.id, 'type', event.target.value as Course['type'])}
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white"
                      >
                        {courseTypes.map((type) => (
                          <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="md:col-span-1 flex md:items-end justify-end">
                      <button
                        type="button"
                        onClick={() => removeCourse(course.id)}
                        disabled={courses.length === 1}
                        className={`px-3 py-2 text-sm font-semibold rounded-lg border ${
                          courses.length === 1
                            ? 'border-slate-200 text-slate-400 cursor-not-allowed'
                            : 'border-red-200 text-red-600 hover:bg-red-50'
                        }`}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={addCourse}
                  className="px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  Add Course
                </button>
                <div className="text-sm text-slate-600 self-center">
                  Add unlimited courses, remove rows, and your GPA updates instantly.
                </div>
              </div>

              {hasInvalid && (
                <div className="mt-4 text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-3">
                  Please make sure every course has credit hours greater than 0.
                </div>
              )}

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-xs uppercase tracking-wider text-slate-500">Semester GPA</p>
                  <p className="text-3xl font-bold text-slate-900 mt-2">{totals.semesterGPA.toFixed(2)}</p>
                  <p className="text-sm text-slate-600 mt-1">Performance: {performanceLabel(totals.semesterGPA)}</p>
                </div>
                {showWeighted && (
                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <p className="text-xs uppercase tracking-wider text-slate-500">Weighted GPA</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">{totals.weightedGPA.toFixed(2)}</p>
                    <p className="text-sm text-slate-600 mt-1">Honors +0.5, AP +1.0</p>
                  </div>
                )}
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-xs uppercase tracking-wider text-slate-500">Total Credits</p>
                  <p className="text-3xl font-bold text-slate-900 mt-2">{totals.totalCredits.toFixed(1)}</p>
                  <p className="text-sm text-slate-600 mt-1">Credits count toward your term GPA</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-xs uppercase tracking-wider text-slate-500">Total Grade Points</p>
                  <p className="text-3xl font-bold text-slate-900 mt-2">{totals.totalGradePoints.toFixed(2)}</p>
                  <p className="text-sm text-slate-600 mt-1">Grade value times credit hours</p>
                </div>
              </div>

              <div className="mt-6 text-sm text-slate-600">
                Display GPA: <span className="font-semibold text-slate-900">{displayGPA.toFixed(2)}</span>
              </div>
            </section>

            <section id="what-is-semester-gpa" className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">What Is a Semester GPA</h2>
              <p className="text-slate-700 leading-relaxed">
                A semester GPA is the grade point average for one academic term. It takes every class in that term,
                converts each grade into points, multiplies by credit hours, and then averages those points. This is why
                a semester GPA calculator is so useful: it gives you an accurate snapshot of how you performed in a
                single semester without mixing in grades from other terms.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Students use a semester GPA to track progress across the school year. In college, it is the most common
                way to evaluate academic standing, eligibility for honors, and financial aid. In high school, a single
                term GPA can show growth or highlight areas to improve before the cumulative GPA is updated.
              </p>
              <p className="text-slate-700 leading-relaxed">
                If you are trying to calculate semester GPA for scholarships, internships, or study abroad programs,
                this term-specific average helps you report the exact academic performance for one period. It also
                gives you a clearer view of how your study habits and course load impact results.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Some schools call this a term GPA. In practice, a term GPA calculator and a semester GPA calculator do
                the same job: they isolate one academic period so you can measure your progress without the noise of
                past semesters. That clarity makes it easier to set realistic goals for the next term.
              </p>
            </section>

            <section id="how-to-calculate" className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">How to Calculate Semester GPA</h2>
              <p className="text-slate-700 leading-relaxed">
                To calculate semester GPA, list every course for the term, assign a grade value, and multiply each value
                by the course credit hours. Add those grade points together, then divide by total credits. This process
                works for both high school and college semester GPA calculations.
              </p>
              <ol className="list-decimal list-inside text-slate-700 space-y-2">
                <li>Write down each course and the credit hours for that semester.</li>
                <li>Convert each letter grade to its numeric value on the 4.0 scale.</li>
                <li>Multiply grade value by credit hours to get grade points.</li>
                <li>Sum all grade points.</li>
                <li>Sum all credit hours.</li>
                <li>Divide total grade points by total credit hours.</li>
              </ol>
              <p className="text-slate-700 leading-relaxed">
                This calculator automates those steps with instant updates. It is a GPA calculator for semester use,
                so you can experiment with possible grades and see how each course affects your final term GPA.
              </p>
              <p className="text-slate-700 leading-relaxed">
                If your school uses weighted grades, choose Honors or AP in the course type dropdown. That adds the
                standard bonus so you can see both unweighted and weighted results at the same time. This is helpful
                for a college semester GPA calculator scenario where advanced courses carry more impact.
              </p>
            </section>

            <section id="formula" className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">Semester GPA Formula Explained</h2>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-slate-700 font-semibold">GPA = Total Grade Points / Total Credit Hours</p>
                <p className="text-slate-600 mt-2">Grade Points = Grade Value x Credit Hours</p>
              </div>
              <p className="text-slate-700 leading-relaxed">
                The GPA formula is a weighted average. A 4-credit class counts twice as much as a 2-credit class, so it
                can raise or lower your semester GPA more. That is why tracking credit hours is essential when you
                calculate semester GPA.
              </p>
              <p className="text-slate-700 leading-relaxed">
                If you enable weighted GPA, honors courses add 0.5 and AP courses add 1.0 to the base grade value. This
                optional weighting is useful for students whose schools reward course rigor. A term GPA calculator with
                weighted support gives a more realistic picture of academic performance in advanced classes.
              </p>
              <p className="text-slate-700 leading-relaxed">
                When you calculate semester GPA, always use the same grade scale your school publishes. If your campus
                uses plus and minus grades, stick to those values. If your grades are final but credit hours are not, the
                formula still works as long as you update credits once they are confirmed.
              </p>
            </section>

            <section id="example" className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">Example Semester GPA Calculation</h2>
              <p className="text-slate-700 leading-relaxed">
                Here is a real-world example using the standard 4.0 scale for a single term.
              </p>
              <ul className="text-slate-700 space-y-2">
                <li>Math: A (4.0 x 3 credits) = 12 grade points</li>
                <li>English: B+ (3.3 x 4 credits) = 13.2 grade points</li>
                <li>Science: B (3.0 x 3 credits) = 9 grade points</li>
              </ul>
              <p className="text-slate-700 leading-relaxed">
                Total Grade Points = 34.2. Total Credits = 10. Semester GPA = 34.2 / 10 = 3.42. This is exactly how the
                college semester GPA calculator above works when you enter the same courses.
              </p>
              <p className="text-slate-700 leading-relaxed">
                If one of those courses were Honors or AP, the weighted GPA would be slightly higher. The tool shows
                both totals so you can report the one your school requires and still understand your weighted standing.
              </p>
            </section>

            <section id="grade-scale" className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">Grade Scale (4.0)</h2>
              <p className="text-slate-700 leading-relaxed">
                The 4.0 scale is the most common system in the United States. Use this chart when you calculate semester
                GPA or compare grades between courses.
              </p>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="min-w-full text-sm">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-4 py-2 text-left text-slate-700">Letter Grade</th>
                      <th className="px-4 py-2 text-left text-slate-700">GPA Value</th>
                      <th className="px-4 py-2 text-left text-slate-700">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gradeScale.map((row) => (
                      <tr key={row.letter} className="border-t border-slate-200">
                        <td className="px-4 py-2 font-semibold text-slate-800">{row.letter}</td>
                        <td className="px-4 py-2 text-slate-700">{row.points.toFixed(1)}</td>
                        <td className="px-4 py-2 text-slate-700">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Many schools use plus and minus grading because it gives more precise feedback within each letter grade.
                When you calculate semester GPA, the difference between a B and a B+ can move the final number, especially
                in high credit courses. Always match the scale used on your transcript for the most accurate result.
              </p>
            </section>

            <section id="importance" className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">Why Semester GPA Is Important</h2>
              <p className="text-slate-700 leading-relaxed">
                Your semester GPA is often the quickest signal of academic momentum. A strong term shows that your study
                habits and course choices are working, while a weaker term points to areas to improve. Because it is
                calculated from one semester, it helps you focus on what changed in that time period.
              </p>
              <p className="text-slate-700 leading-relaxed">
                A high semester GPA can raise your cumulative GPA, which is critical for scholarships, honors programs,
                and graduate school preparation. Many scholarship committees ask for a term GPA or require a minimum
                semester average to keep funding, so using a semester GPA calculator early in the term is a smart way
                to stay on track.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Internships and research opportunities also pay attention to semester performance, especially when
                recent grades reflect improvement. A GPA calculator for semester planning helps you target specific
                grades in key courses so you can show a positive trend.
              </p>
              <p className="text-slate-700 leading-relaxed">
                A single strong semester can offset a weaker term from the past. If you are aiming to keep a scholarship
                or reach program requirements, checking your semester GPA early and often gives you time to adjust study
                time, visit office hours, or use tutoring resources before final grades are posted.
              </p>
            </section>

            <section id="faq" className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqItems.map((item) => (
                  <div key={item.question} className="rounded-xl border border-slate-200 bg-white p-4">
                    <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
                    <p className="text-slate-700 mt-2">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="related" className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">Related GPA Calculators</h2>
              <p className="text-slate-700 leading-relaxed">
                Keep planning with these tools. Each link supports the next step after you calculate semester GPA.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/cumulative-gpa-calculator" className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50">
                  Cumulative GPA Calculator
                </Link>
                <Link href="/college-gpa-calculator" className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50">
                  College GPA Calculator
                </Link>
                <Link href="/term-gpa-calculator" className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50">
                  Term GPA Calculator
                </Link>
                <Link href="/gpa-projection-calculator" className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50">
                  GPA Projection Calculator
                </Link>
                <Link href="/gpa-improvement-calculator" className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50">
                  GPA Improvement Calculator
                </Link>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">Trusted Academic Resources</h2>
              <p className="text-slate-700 leading-relaxed">
                For official guidance on grades, testing, and academic standards, explore these authority sources.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.collegeboard.org" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                  College Board
                </a>
                <a href="https://nces.ed.gov" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                  National Center for Education Statistics
                </a>
                <a href="https://www.ed.gov" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                  U.S. Department of Education
                </a>
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Semester GPA Formula</h3>
              <p className="text-slate-700 mt-3">GPA = Total Grade Points / Total Credit Hours</p>
              <p className="text-slate-600 mt-2">Grade Points = Grade Value x Credit Hours</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">Weighted GPA Rules</h3>
              <ul className="mt-3 text-sm text-slate-700 space-y-2">
                <li>Honors: +0.5 grade points</li>
                <li>AP: +1.0 grade points</li>
                <li>Regular: no bonus</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-center text-sm text-slate-500">
              AdSense placement
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
