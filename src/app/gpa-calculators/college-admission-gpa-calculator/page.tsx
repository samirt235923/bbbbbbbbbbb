'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Breadcrumb from '../../../components/Breadcrumb';
import FAQ from '../../../components/FAQ';
import { FAQSchema } from '@/components/SchemaMarkup';

interface Course {
  id: number;
  name: string;
  credits: number;
  grade: string;
}

const CollegeAdmissionGpaCalculator: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([
    { id: 1, name: 'Math', credits: 4, grade: 'A' },
    { id: 2, name: 'English', credits: 3, grade: 'B+' },
    { id: 3, name: 'History', credits: 3, grade: 'A' },
  ]);
  const [satScore, setSatScore] = useState<number | null>(null);
  const [actScore, setActScore] = useState<number | null>(null);
  const [collegeSelectivity, setCollegeSelectivity] = useState<string>('medium');
  const [calculatedGpa, setCalculatedGpa] = useState<number | null>(null);
  const [admissionChance, setAdmissionChance] = useState<string>('');

  const gradeScale = {
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

  const addCourse = () => {
    const newId = Math.max(...courses.map(c => c.id), 0) + 1;
    setCourses([...courses, { id: newId, name: '', credits: 3, grade: 'A' }]);
  };

  const removeCourse = (id: number) => {
    if (courses.length > 1) {
      setCourses(courses.filter(course => course.id !== id));
    }
  };

  const updateCourse = (id: number, field: keyof Course, value: string | number) => {
    setCourses(courses.map(course =>
      course.id === id ? { ...course, [field]: value } : course
    ));
  };

  const calculateGpa = () => {
    let totalGradePoints = 0;
    let totalCredits = 0;

    courses.forEach(course => {
      const gradeValue = gradeScale[course.grade as keyof typeof gradeScale] || 0;
      totalGradePoints += gradeValue * course.credits;
      totalCredits += course.credits;
    });

    const gpa = totalCredits > 0 ? totalGradePoints / totalCredits : 0;
    setCalculatedGpa(Math.round(gpa * 100) / 100);

    // Calculate admission chance
    let chance = '';
    if (gpa >= 3.8) {
      chance = 'Strong admission chances - Competitive for top universities';
    } else if (gpa >= 3.3) {
      chance = 'Moderate admission chances - Good for many universities';
    } else if (gpa >= 3.0) {
      chance = 'Average admission chances - Consider safety schools';
    } else {
      chance = 'Limited options - Focus on improvement or alternative paths';
    }

    // Adjust based on test scores and selectivity
    if (satScore || actScore) {
      const testScore = satScore ? (satScore - 1000) / 500 : actScore ? (actScore - 20) / 16 : 0;
      if (testScore > 0.8 && gpa >= 3.5) {
        chance += ' (Strong test scores boost your profile)';
      } else if (testScore < 0.4 && gpa < 3.5) {
        chance += ' (Consider test prep or retakes)';
      }
    }

    if (collegeSelectivity === 'high' && gpa < 3.8) {
      chance += ' (High selectivity schools typically require 3.8+ GPA)';
    } else if (collegeSelectivity === 'low' && gpa >= 3.0) {
      chance += ' (Lower selectivity schools are more accessible)';
    }

    setAdmissionChance(chance);
  };

  useEffect(() => {
    calculateGpa();
  }, [courses, satScore, actScore, collegeSelectivity]);

  const faqData = [
    {
      question: 'What GPA do you need for college admission?',
      answer: 'College GPA requirements vary by school, but most colleges look for a minimum 3.0 GPA. Highly selective schools typically require 3.8+ GPA, while less selective schools may accept 2.5+ GPA. Your target GPA depends on your chosen colleges.',
    },
    {
      question: 'Is a 3.5 GPA good for college?',
      answer: 'A 3.5 GPA is generally considered good for college admission. It places you in a competitive range for many universities, though top-tier schools often prefer 3.8+ GPA. A 3.5 GPA combined with strong test scores and extracurriculars can lead to good admission outcomes.',
    },
    {
      question: 'Do colleges only look at GPA?',
      answer: 'No, colleges consider GPA as part of a holistic admissions process. They also evaluate standardized test scores (SAT/ACT), extracurricular activities, essays, letters of recommendation, and personal circumstances. GPA is important but not the only factor.',
    },
    {
      question: 'Is GPA more important than SAT or ACT?',
      answer: 'Neither GPA nor standardized tests are universally more important - it depends on the college. Some schools are test-optional and weight GPA more heavily, while others consider test scores equally. Generally, both are important components of your academic profile.',
    },
    {
      question: 'What GPA do Ivy League schools require?',
      answer: 'Ivy League schools typically look for GPA ranges of 3.8-4.0. However, admission is extremely competitive and GPA is just one factor. Many admitted students have perfect or near-perfect GPAs, but exceptional achievements in other areas can compensate for slightly lower GPAs.',
    },
  ];

  return (
    <>
      
      <FAQSchema faqs={faqData} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'GPA Calculators', href: '/gpa-calculators' },
            { label: 'College Admission GPA Calculator', href: '/college-admission-gpa-calculator' },
          ]}
        />

        <h1 className="text-4xl font-bold text-center mb-8">College Admission GPA Calculator</h1>

        {/* Table of Contents */}
        <div className="bg-gray-100 p-4 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><a href="#calculator" className="text-blue-600 hover:underline">GPA Calculator</a></li>
            <li><a href="#admission-guide" className="text-blue-600 hover:underline">College Admission GPA Guide</a></li>
            <li><a href="#what-is" className="text-blue-600 hover:underline">What is a College Admission GPA</a></li>
            <li><a href="#how-to-calculate" className="text-blue-600 hover:underline">How to Calculate GPA for College Admission</a></li>
            <li><a href="#what-gpa-colleges" className="text-blue-600 hover:underline">What GPA Do Colleges Look For</a></li>
            <li><a href="#example" className="text-blue-600 hover:underline">Example College Admission GPA Calculation</a></li>
            <li><a href="#gpa-vs-tests" className="text-blue-600 hover:underline">GPA vs SAT vs ACT in College Admission</a></li>
            <li><a href="#tips" className="text-blue-600 hover:underline">Tips to Improve Your GPA Before Applying to College</a></li>
            <li><a href="#faq" className="text-blue-600 hover:underline">Frequently Asked Questions</a></li>
            <li><a href="#related" className="text-blue-600 hover:underline">Related GPA Calculators</a></li>
          </ul>
        </div>

        {/* Calculator */}
        <section id="calculator" className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Calculate Your College Admission GPA</h2>

          {/* Course Inputs */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Your Courses</h3>
            {courses.map((course) => (
              <div key={course.id} className="flex flex-wrap gap-4 items-end mb-4 p-4 border border-gray-200 rounded-lg">
                <div className="flex-1 min-w-0">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Course Name
                  </label>
                  <input
                    type="text"
                    value={course.name}
                    onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Algebra I"
                  />
                </div>
                <div className="w-24">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Credits
                  </label>
                  <input
                    type="number"
                    value={course.credits}
                    onChange={(e) => updateCourse(course.id, 'credits', Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="0"
                    max="6"
                    step="0.5"
                  />
                </div>
                <div className="w-20">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Grade
                  </label>
                  <select
                    value={course.grade}
                    onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="A">A (4.0)</option>
                    <option value="A-">A- (3.7)</option>
                    <option value="B+">B+ (3.3)</option>
                    <option value="B">B (3.0)</option>
                    <option value="B-">B- (2.7)</option>
                    <option value="C+">C+ (2.3)</option>
                    <option value="C">C (2.0)</option>
                    <option value="C-">C- (1.7)</option>
                    <option value="D">D (1.0)</option>
                    <option value="F">F (0.0)</option>
                  </select>
                </div>
                {courses.length > 1 && (
                  <button
                    onClick={() => removeCourse(course.id)}
                    className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={addCourse}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Add Course
            </button>
          </div>

          {/* Optional Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                SAT Score (Optional)
              </label>
              <input
                type="number"
                value={satScore || ''}
                onChange={(e) => setSatScore(e.target.value ? Number(e.target.value) : null)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="400"
                max="1600"
                placeholder="400-1600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ACT Score (Optional)
              </label>
              <input
                type="number"
                value={actScore || ''}
                onChange={(e) => setActScore(e.target.value ? Number(e.target.value) : null)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="1"
                max="36"
                placeholder="1-36"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target College Selectivity
              </label>
              <select
                value={collegeSelectivity}
                onChange={(e) => setCollegeSelectivity(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="low">Low Selectivity</option>
                <option value="medium">Medium Selectivity</option>
                <option value="high">High Selectivity</option>
              </select>
            </div>
          </div>

          {/* Results */}
          {calculatedGpa !== null && (
            <div className="bg-green-100 p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">Your Calculated GPA</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">{calculatedGpa}</p>
              <p className="text-sm text-gray-700 mb-2">{admissionChance}</p>
              <div className="text-xs text-gray-600">
                <p>Total Credits: {courses.reduce((sum, course) => sum + course.credits, 0)}</p>
                <p>Total Grade Points: {courses.reduce((sum, course) => sum + (gradeScale[course.grade as keyof typeof gradeScale] || 0) * course.credits, 0).toFixed(1)}</p>
              </div>
            </div>
          )}
        </section>

        {/* College Admission GPA Guide */}
        <section id="admission-guide" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">College Admission GPA Guide</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">GPA Range</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Admission Outlook</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-2">3.8 – 4.0</td>
                  <td className="border border-gray-300 px-4 py-2">Competitive for top universities and Ivy League schools</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">3.5 – 3.7</td>
                  <td className="border border-gray-300 px-4 py-2">Good chances for most universities and selective colleges</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-2">3.0 – 3.4</td>
                  <td className="border border-gray-300 px-4 py-2">Average admission chances for state universities</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">2.5 – 2.9</td>
                  <td className="border border-gray-300 px-4 py-2">Limited options, consider community colleges or trade schools</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-2">Below 2.5</td>
                  <td className="border border-gray-300 px-4 py-2">Very limited options, focus on academic improvement</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SEO Content */}
        <section id="what-is" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What is a College Admission GPA</h2>
          <p className="mb-4">
            A college admission GPA is your Grade Point Average calculated from your high school coursework. It's one of the most important factors colleges consider when reviewing your application. Your GPA represents your academic performance over time and helps admissions officers assess your ability to handle college-level work.
          </p>
          <p className="mb-4">
            Most colleges use a 4.0 scale where an A is worth 4 points, a B is worth 3 points, and so on. Some schools use weighted GPAs that give extra points for honors or AP courses. Your GPA is calculated by dividing your total grade points by your total credit hours.
          </p>
          <p>
            While GPA is crucial, colleges also consider standardized test scores, extracurricular activities, essays, and letters of recommendation. A strong GPA can open doors, but exceptional achievements in other areas can sometimes compensate for a lower GPA.
          </p>
        </section>

        <section id="how-to-calculate" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How to Calculate GPA for College Admission</h2>
          <p className="mb-4">
            Calculating your GPA for college admission involves converting your letter grades to numerical values and weighting them by credit hours. Here's the basic formula:
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p className="font-semibold">GPA = Total Grade Points ÷ Total Credit Hours</p>
            <p className="text-sm mt-2">Grade Points = Grade Value × Credit Hours</p>
          </div>
          <p className="mb-4">
            The standard 4.0 scale assigns these values:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>A = 4.0 grade points</li>
            <li>A- = 3.7 grade points</li>
            <li>B+ = 3.3 grade points</li>
            <li>B = 3.0 grade points</li>
            <li>B- = 2.7 grade points</li>
            <li>C+ = 2.3 grade points</li>
            <li>C = 2.0 grade points</li>
            <li>And so on...</li>
          </ul>
          <p>
            Multiply each grade value by the course's credit hours, sum all grade points, and divide by total credits. Our calculator does this automatically for you.
          </p>
        </section>

        <section id="what-gpa-colleges" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What GPA Do Colleges Look For</h2>
          <p className="mb-4">
            College GPA requirements vary widely depending on the selectivity of the institution. Here's what different types of colleges typically look for:
          </p>
          <h3 className="text-xl font-semibold mb-2">Highly Selective Colleges (Ivy League, Stanford, MIT)</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Average admitted student GPA: 3.8-4.0</li>
            <li>Most admitted students have near-perfect GPAs</li>
            <li>Competition is extremely high</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Selective Colleges (Top 50 schools)</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Average admitted student GPA: 3.5-3.8</li>
            <li>Strong academic record expected</li>
            <li>Other application components are crucial</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">State Universities</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Average admitted student GPA: 3.0-3.5</li>
            <li>More flexibility in admissions</li>
            <li>In-state residency can help</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Community Colleges and Open Admission Schools</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Minimum GPA requirements are low or nonexistent</li>
            <li>Focus on enrollment rather than selection</li>
            <li>Great option for academic improvement</li>
          </ul>
        </section>

        <section id="example" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Example College Admission GPA Calculation</h2>
          <p className="mb-4">
            Let's calculate the GPA for a student with these courses:
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <ul className="space-y-2">
              <li>Math: A (4.0) × 4 credits = 16 grade points</li>
              <li>English: B+ (3.3) × 3 credits = 9.9 grade points</li>
              <li>History: A (4.0) × 3 credits = 12 grade points</li>
              <li>Science: B (3.0) × 4 credits = 12 grade points</li>
              <li>Art: A- (3.7) × 2 credits = 7.4 grade points</li>
            </ul>
          </div>
          <p className="mb-4">
            Total Grade Points = 16 + 9.9 + 12 + 12 + 7.4 = 57.3
          </p>
          <p className="mb-4">
            Total Credits = 4 + 3 + 3 + 4 + 2 = 16
          </p>
          <p className="mb-4">
            GPA = 57.3 ÷ 16 = 3.58
          </p>
          <p>
            This student has a 3.58 GPA, which would be competitive for many colleges and universities. With strong test scores and extracurricular activities, this GPA could lead to admission at selective schools.
          </p>
        </section>

        <section id="gpa-vs-tests" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">GPA vs SAT vs ACT in College Admission</h2>
          <p className="mb-4">
            Colleges use a holistic admissions process that considers multiple factors. Here's how GPA, SAT, and ACT scores typically factor in:
          </p>
          <h3 className="text-xl font-semibold mb-2">GPA (Academic Performance)</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Shows consistent academic achievement over time</li>
            <li>Most heavily weighted factor at many schools</li>
            <li>Reflects ability to handle rigorous coursework</li>
            <li>Difficult to change once high school is complete</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">SAT/ACT Scores (Standardized Testing)</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Provides standardized comparison across schools</li>
            <li>Measures test-taking ability and content knowledge</li>
            <li>Can be improved with preparation and retakes</li>
            <li>Some schools are test-optional</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">The Holistic Picture</h3>
          <p className="mb-4">
            Most colleges consider GPA as the most important academic factor, followed closely by standardized test scores. However, exceptional performance in one area can sometimes compensate for weaker performance in another.
          </p>
          <p>
            For example, a student with a 3.3 GPA but excellent SAT scores (1500+) and outstanding extracurricular achievements might still gain admission to selective schools. Conversely, a student with a perfect GPA but low test scores might be admitted if the school is test-optional.
          </p>
        </section>

        <section id="tips" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Tips to Improve Your GPA Before Applying to College</h2>
          <p className="mb-4">
            If your current GPA isn't where you want it to be for college admission, here are strategies to improve it:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Focus on current courses:</strong> Put extra effort into your remaining classes to boost your GPA</li>
            <li><strong>Seek extra credit:</strong> Ask teachers about opportunities for extra credit work</li>
            <li><strong>Take weighted courses:</strong> Honors or AP courses can boost your weighted GPA</li>
            <li><strong>Get tutoring:</strong> Extra help in challenging subjects can improve your grades</li>
            <li><strong>Improve study habits:</strong> Better organization and study techniques lead to better grades</li>
            <li><strong>Consider grade replacement:</strong> Some schools allow retaking courses to replace grades</li>
            <li><strong>Address underlying issues:</strong> If struggling, talk to counselors about academic support</li>
          </ul>
          <p>
            Remember that colleges consider your GPA trend. Showing improvement over time can be just as important as your final GPA. If improvement isn't possible, focus on strengthening other aspects of your application.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-8">
          <FAQ items={faqData} />
        </section>

        {/* Related Calculators */}
        <section id="related" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related GPA Calculators</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/gpa-calculators/college-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg">
              <h3 className="font-bold mb-2">College GPA Calculator</h3>
              <p className="text-sm text-gray-600">General GPA computations.</p>
            </Link>
            <Link href="/gpa-calculators/sat-to-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg">
              <h3 className="font-bold mb-2">SAT to GPA Calculator</h3>
              <p className="text-sm text-gray-600">Convert SAT scores to GPA.</p>
            </Link>
            <Link href="/gpa-calculators/act-to-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg">
              <h3 className="font-bold mb-2">ACT to GPA Calculator</h3>
              <p className="text-sm text-gray-600">Convert ACT scores to GPA.</p>
            </Link>
            <Link href="/gpa-calculators/high-school-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg">
              <h3 className="font-bold mb-2">High School GPA Calculator</h3>
              <p className="text-sm text-gray-600">Track high school performance.</p>
            </Link>
            <Link href="/gpa-calculators/weighted-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg">
              <h3 className="font-bold mb-2">Weighted GPA Calculator</h3>
              <p className="text-sm text-gray-600">Includes Honors/AP weighting.</p>
            </Link>
          </div>
        </section>

        {/* External Links */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Learn More</h3>
          <ul className="space-y-2">
            <li><a href="https://www.collegeboard.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">College Board - College Planning Resources</a></li>
            <li><a href="https://nces.ed.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">National Center for Education Statistics</a></li>
            <li><a href="https://www.commonapp.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Common App - College Application Platform</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CollegeAdmissionGpaCalculator;



