'use client';

import React, { useState, useEffect } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import SEOHead from '@/components/SEOHead';
import FAQ from '@/components/FAQ';
import { FAQSchema, ArticleSchema } from '@/components/SchemaMarkup';
import RelatedCalculators from '@/components/RelatedCalculators';

interface PlannedCourse {
  id: number;
  credits: number;
}

export default function TargetGPACalculator() {
  const [currentGPA, setCurrentGPA] = useState<string>('');
  const [completedCredits, setCompletedCredits] = useState<string>('');
  const [targetGPA, setTargetGPA] = useState<string>('');
  const [plannedCourses, setPlannedCourses] = useState<PlannedCourse[]>([
    { id: 1, credits: 3 }
  ]);
  const [results, setResults] = useState<{
    requiredGPA?: number;
    projectedGPA?: number;
    totalPlannedCredits?: number;
  }>({});

  // Calculate target GPA requirements
  const calculateTargetGPA = () => {
    const current = parseFloat(currentGPA);
    const completed = parseFloat(completedCredits);
    const target = parseFloat(targetGPA);

    if (!current || !completed || !target || plannedCourses.length === 0) {
      setResults({});
      return;
    }

    const totalPlannedCredits = plannedCourses.reduce((sum, course) => sum + course.credits, 0);

    // Required GPA formula
    const requiredGPA = (target * (completed + totalPlannedCredits) - current * completed) / totalPlannedCredits;

    // For projected GPA, we'll assume the required GPA is achieved
    const projectedGPA = (current * completed + requiredGPA * totalPlannedCredits) / (completed + totalPlannedCredits);

    setResults({
      requiredGPA: Math.round(requiredGPA * 100) / 100,
      projectedGPA: Math.round(projectedGPA * 100) / 100,
      totalPlannedCredits
    });
  };

  useEffect(() => {
    calculateTargetGPA();
  }, [currentGPA, completedCredits, targetGPA, plannedCourses]);

  const addCourse = () => {
    const newId = Math.max(...plannedCourses.map(c => c.id)) + 1;
    setPlannedCourses([...plannedCourses, { id: newId, credits: 3 }]);
  };

  const removeCourse = (id: number) => {
    if (plannedCourses.length > 1) {
      setPlannedCourses(plannedCourses.filter(course => course.id !== id));
    }
  };

  const updateCourseCredits = (id: number, credits: number) => {
    setPlannedCourses(plannedCourses.map(course =>
      course.id === id ? { ...course, credits } : course
    ));
  };

  const clearCalculator = () => {
    setCurrentGPA('');
    setCompletedCredits('');
    setTargetGPA('');
    setPlannedCourses([{ id: 1, credits: 3 }]);
    setResults({});
  };

  const gradeScaleTable = [
    { grade: 'A', points: 4.0, description: 'Excellent' },
    { grade: 'A-', points: 3.7, description: 'Very Good' },
    { grade: 'B+', points: 3.3, description: 'Good Plus' },
    { grade: 'B', points: 3.0, description: 'Good' },
    { grade: 'B-', points: 2.7, description: 'Satisfactory' },
    { grade: 'C+', points: 2.3, description: 'Adequate Plus' },
    { grade: 'C', points: 2.0, description: 'Adequate' },
    { grade: 'C-', points: 1.7, description: 'Below Average' },
    { grade: 'D', points: 1.0, description: 'Poor' },
    { grade: 'F', points: 0.0, description: 'Failing' },
  ];

  const faqData = [
    {
      question: "How do I calculate my target GPA?",
      answer: "To calculate your target GPA, use our calculator above. Enter your current GPA, completed credits, desired target GPA, and planned courses. The calculator will show you the GPA you need to achieve in your upcoming courses to reach your target."
    },
    {
      question: "What GPA do I need in upcoming courses to reach 3.5?",
      answer: "The GPA you need depends on your current GPA and completed credits. For example, if you have a 3.0 GPA with 30 credits and want to reach 3.5, you would need approximately a 3.8 GPA in your planned courses. Use our calculator for your specific situation."
    },
    {
      question: "Can I achieve my target GPA in one semester?",
      answer: "Yes, it's possible to achieve your target GPA in one semester, but it depends on how many credits you're taking and your current GPA. Generally, taking more credits and earning high grades will help you reach your target faster."
    },
    {
      question: "How many courses do I need to meet my GPA goal?",
      answer: "The number of courses needed depends on your current GPA, target GPA, and the grades you can realistically achieve. Our calculator will show you the minimum GPA needed for your planned courses, or you can add more courses to make your target more achievable."
    },
    {
      question: "What is a realistic target GPA?",
      answer: "A realistic target GPA depends on your current academic standing and circumstances. Generally, improving by 0.2-0.5 points per semester is realistic. For example, going from 3.0 to 3.5 in one semester might require mostly A grades. Consider your study habits and course load when setting targets."
    }
  ];

  return (
    <>
      <SEOHead
        title="Target GPA Calculator – Find Out What You Need to Achieve Your Goal"
        description="Use our Target GPA Calculator to determine the grades you need in upcoming courses to reach your target GPA. Enter your current GPA, completed credits, and planned courses for instant calculation."
        canonical="/gpa-calculators/target-gpa-calculator"
      />

      <ArticleSchema
        headline="Target GPA Calculator – Find Out What You Need to Achieve Your Goal"
        description="Learn how to calculate what GPA you need to achieve your academic goals. Includes target GPA formulas, examples, and strategies for reaching your desired GPA."
        author="GPA Calculator Team"
        datePublished="2024-01-15"
        dateModified="2024-01-15"
      />

      <FAQSchema faqs={faqData} />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'GPA Calculators', href: '/gpa-calculators' },
              { label: 'Target GPA Calculator', href: '/gpa-calculators/target-gpa-calculator' }
            ]}
          />

          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Target GPA Calculator
          </h1>

          {/* Calculator Interface */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="mb-6">
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current GPA
                  </label>
                  <input
                    type="number"
                    value={currentGPA}
                    onChange={(e) => setCurrentGPA(e.target.value)}
                    placeholder="e.g., 3.2"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="0"
                    max="4.0"
                    step="0.01"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Completed Credits
                  </label>
                  <input
                    type="number"
                    value={completedCredits}
                    onChange={(e) => setCompletedCredits(e.target.value)}
                    placeholder="e.g., 30"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="0"
                    step="1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target GPA
                  </label>
                  <input
                    type="number"
                    value={targetGPA}
                    onChange={(e) => setTargetGPA(e.target.value)}
                    placeholder="e.g., 3.5"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="0"
                    max="4.0"
                    step="0.01"
                  />
                </div>
              </div>

              {/* Planned Courses */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Planned Courses</h2>
                {plannedCourses.map((course, index) => (
                  <div key={course.id} className="flex items-center gap-4 mb-3 p-4 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Course {index + 1}:</span>
                    <div className="flex-1">
                      <input
                        type="number"
                        value={course.credits}
                        onChange={(e) => updateCourseCredits(course.id, parseInt(e.target.value) || 0)}
                        placeholder="Credits"
                        className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                        min="1"
                        max="6"
                      />
                      <span className="text-sm text-gray-600 ml-2">credits</span>
                    </div>
                    {plannedCourses.length > 1 && (
                      <button
                        onClick={() => removeCourse(course.id)}
                        className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}

                <button
                  onClick={addCourse}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  Add Course
                </button>
              </div>

              <div className="flex justify-center mb-4">
                <button
                  onClick={clearCalculator}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                >
                  Clear All
                </button>
              </div>

              {/* Results */}
              {results.requiredGPA !== undefined && (
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Required GPA</h3>
                    <p className="text-blue-700">
                      To achieve your target GPA of {targetGPA}, you need to maintain an average GPA of <strong>{results.requiredGPA}</strong> across your planned courses.
                    </p>
                    <p className="text-sm text-blue-600 mt-2">
                      Total planned credits: {results.totalPlannedCredits}
                    </p>
                  </div>

                  {results.projectedGPA !== undefined && (
                    <div className="bg-green-50 border border-green-200 rounded-md p-4">
                      <h3 className="text-lg font-semibold text-green-800 mb-2">Projected GPA</h3>
                      <p className="text-green-700">
                        If you achieve the required GPA, your final GPA will be: <strong>{results.projectedGPA}</strong>
                      </p>
                    </div>
                  )}

                  {results.requiredGPA > 4.0 && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                      <h3 className="text-lg font-semibold text-yellow-800 mb-2">⚠️ Target May Not Be Achievable</h3>
                      <p className="text-yellow-700">
                        The required GPA ({results.requiredGPA}) exceeds 4.0, which is the maximum possible GPA.
                        Consider taking more credits or adjusting your target GPA to make it more realistic.
                      </p>
                    </div>
                  )}

                  {results.requiredGPA <= 4.0 && results.requiredGPA > 3.5 && (
                    <div className="bg-orange-50 border border-orange-200 rounded-md p-4">
                      <h3 className="text-lg font-semibold text-orange-800 mb-2">🎯 Challenging Target</h3>
                      <p className="text-orange-700">
                        You'll need to earn mostly A's to achieve this target. Consider if this goal is realistic for your current situation.
                      </p>
                    </div>
                  )}

                  {results.requiredGPA <= 3.5 && results.requiredGPA > 2.5 && (
                    <div className="bg-green-50 border border-green-200 rounded-md p-4">
                      <h3 className="text-lg font-semibold text-green-800 mb-2">✅ Achievable Target</h3>
                      <p className="text-green-700">
                        This target is within reach with consistent good performance (B+ to A- grades).
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              <li><a href="#what-is-target-gpa" className="text-blue-600 hover:text-blue-800">What is a Target GPA Calculator?</a></li>
              <li><a href="#how-to-calculate" className="text-blue-600 hover:text-blue-800">How to Calculate Your Target GPA</a></li>
              <li><a href="#grade-scale" className="text-blue-600 hover:text-blue-800">GPA Grade Scale Reference</a></li>
              <li><a href="#example-calculation" className="text-blue-600 hover:text-blue-800">Example Target GPA Calculation</a></li>
              <li><a href="#tips-reach-target" className="text-blue-600 hover:text-blue-800">Tips to Reach Your Target GPA</a></li>
              <li><a href="#gpa-importance" className="text-blue-600 hover:text-blue-800">How Target GPA Affects College, Scholarships, and Academic Goals</a></li>
              <li><a href="#faq" className="text-blue-600 hover:text-blue-800">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* SEO Content */}
          <div className="space-y-8">
            <section id="what-is-target-gpa">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What is a Target GPA Calculator?</h2>
              <p className="text-gray-700 mb-4">
                A target GPA calculator is an essential academic planning tool that helps students determine
                exactly what GPA they need to achieve in their upcoming courses to reach their desired final GPA.
                This calculator bridges the gap between your current academic standing and your future goals,
                providing the mathematical precision needed to create realistic study plans and academic objectives.
              </p>
              <p className="text-gray-700 mb-4">
                Whether you're aiming for college admissions, scholarship eligibility, academic honors, or simply
                want to improve your academic standing, our target GPA calculator provides the clarity and
                direction you need to make informed decisions about your educational journey. It transforms
                abstract goals into concrete, actionable targets that guide your academic efforts.
              </p>
            </section>

            <section id="how-to-calculate">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Calculate Your Target GPA</h2>
              <p className="text-gray-700 mb-4">
                Calculating your target GPA involves understanding how your current academic record combines with
                future performance to achieve your desired final GPA. The calculation considers your completed coursework
                and planned courses to determine the exact GPA needed in upcoming classes.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Target GPA Formula</h3>
                <p className="text-gray-700 mb-2"><strong>Required GPA Formula:</strong></p>
                <p className="text-gray-700 mb-4 font-mono bg-white p-2 rounded">
                  Required GPA = (Target GPA × (Completed Credits + Planned Credits) − Current GPA × Completed Credits) ÷ Planned Credits
                </p>

                <p className="text-gray-700 mb-2"><strong>Projected GPA Formula:</strong></p>
                <p className="text-gray-700 mb-4 font-mono bg-white p-2 rounded">
                  Projected GPA = (Current GPA × Completed Credits + Required GPA × Planned Credits) ÷ (Completed Credits + Planned Credits)
                </p>

                <p className="text-gray-700">Where:</p>
                <ul className="text-gray-700 ml-6 mt-2">
                  <li>• Current GPA = Your GPA before new courses</li>
                  <li>• Completed Credits = Total credit hours completed</li>
                  <li>• Target GPA = Desired final GPA</li>
                  <li>• Planned Credits = Credit hours of upcoming courses</li>
                  <li>• Required GPA = GPA needed in planned courses</li>
                </ul>
              </div>

              <p className="text-gray-700 mb-4">
                Our calculator automates these complex calculations, allowing you to experiment with different
                scenarios. You can add or remove courses, adjust credit hours, and see how different targets
                affect your required GPA. This helps you make informed decisions about course selection and
                academic planning.
              </p>
            </section>

            <section id="grade-scale">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">GPA Grade Scale Reference</h2>
              <p className="text-gray-700 mb-6">
                Understanding the GPA grade scale is crucial for interpreting your target GPA calculations.
                This table shows how letter grades convert to GPA points on a standard 4.0 scale, helping you
                understand what grades you need to achieve your target GPA.
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Letter Grade
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        GPA Points
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {gradeScaleTable.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-600">
                          {row.grade}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {row.points}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {row.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mt-4">
                Use this reference table to understand what letter grades correspond to your required GPA.
                For example, if you need a 3.7 GPA, you'll need mostly A- grades. If you need a 3.0 GPA,
                B grades will typically suffice. This helps you set realistic academic goals.
              </p>
            </section>

            <section id="example-calculation">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Example Target GPA Calculation</h2>
              <p className="text-gray-700 mb-4">
                Let's walk through a practical example to demonstrate how the target GPA calculator works.
                This example shows how to calculate what GPA is needed to improve from a 3.2 to a 3.5 GPA.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Example Scenario</h3>
                <ul className="text-blue-800 mb-4">
                  <li>• Current GPA: 3.2</li>
                  <li>• Completed Credits: 30</li>
                  <li>• Target GPA: 3.5</li>
                  <li>• Planned Credits: 6 (two 3-credit courses)</li>
                </ul>

                <h3 className="font-semibold text-blue-900 mb-2">Calculation:</h3>
                <p className="text-blue-700 mb-2 font-mono">
                  Required GPA = (3.5 × (30 + 6) − 3.2 × 30) ÷ 6
                </p>
                <p className="text-blue-700 mb-2 font-mono">
                  Required GPA = (3.5 × 36 − 96) ÷ 6
                </p>
                <p className="text-blue-700 mb-2 font-mono">
                  Required GPA = (126 − 96) ÷ 6 = 30 ÷ 6 = 5.0
                </p>

                <p className="text-blue-700 font-semibold">
                  Result: You would need a 5.0 GPA across 6 credits, which exceeds the maximum possible GPA of 4.0.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Realistic Solution</h3>
              <p className="text-gray-700 mb-4">
                The above calculation shows that reaching a 3.5 GPA from 3.2 with just 6 credits is unrealistic.
                Here's a more achievable scenario:
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-green-900 mb-3">Better Scenario</h3>
                <ul className="text-green-800 mb-4">
                  <li>• Current GPA: 3.2</li>
                  <li>• Completed Credits: 30</li>
                  <li>• Target GPA: 3.5</li>
                  <li>• Planned Credits: 15 (five 3-credit courses)</li>
                </ul>

                <p className="text-green-700 mb-2">
                  <strong>Calculation:</strong> Required GPA = (3.5 × (30 + 15) − 3.2 × 30) ÷ 15
                </p>
                <p className="text-green-700 mb-2">
                  Required GPA = (3.5 × 45 − 96) ÷ 15
                </p>
                <p className="text-green-700 mb-2">
                  Required GPA = (157.5 − 96) ÷ 15 = 61.5 ÷ 15 = 4.1
                </p>

                <p className="text-green-700 font-semibold">
                  Result: You would need a 4.1 GPA average across 15 credits, which is still challenging but more achievable with mostly A grades.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-orange-900 mb-3">Most Realistic Scenario</h3>
                <ul className="text-orange-800 mb-4">
                  <li>• Current GPA: 3.2</li>
                  <li>• Completed Credits: 30</li>
                  <li>• Target GPA: 3.5</li>
                  <li>• Planned Credits: 30 (ten 3-credit courses)</li>
                </ul>

                <p className="text-orange-700 mb-2">
                  <strong>Calculation:</strong> Required GPA = (3.5 × (30 + 30) − 3.2 × 30) ÷ 30
                </p>
                <p className="text-orange-700 mb-2">
                  Required GPA = (3.5 × 60 − 96) ÷ 30
                </p>
                <p className="text-orange-700 mb-2">
                  Required GPA = (210 − 96) ÷ 30 = 114 ÷ 30 = 3.8
                </p>

                <p className="text-orange-700 font-semibold">
                  Result: You would need a 3.8 GPA average across 30 credits, which is achievable with a mix of A and A- grades.
                </p>
              </div>

              <p className="text-gray-700 mb-4">
                These examples demonstrate why taking more credits generally makes target GPA achievement more achievable.
                The calculator allows you to experiment with different combinations of courses and targets to find
                the most realistic path to your academic goals.
              </p>
            </section>

            <section id="tips-reach-target">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tips to Reach Your Target GPA</h2>
              <p className="text-gray-700 mb-4">
                Reaching your target GPA requires strategic planning and consistent effort. Here are practical
                tips to help you achieve the required GPA shown by our calculator and make the most of your academic planning.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Academic Strategies</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Course Selection:</strong> Choose courses you're interested in and good at</li>
                    <li>• <strong>Study Habits:</strong> Develop consistent study routines and time management</li>
                    <li>• <strong>Professor Communication:</strong> Attend office hours and seek help early</li>
                    <li>• <strong>Test Preparation:</strong> Use practice exams and study groups</li>
                    <li>• <strong>Assignment Completion:</strong> Submit work on time and ask for feedback</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Calculator Usage Tips</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Realistic Goals:</strong> Set achievable target GPAs based on your situation</li>
                    <li>• <strong>Credit Planning:</strong> Consider taking more credits for easier targets</li>
                    <li>• <strong>Grade Scenarios:</strong> Experiment with different course combinations</li>
                    <li>• <strong>Long-term Planning:</strong> Plan multiple semesters for major improvements</li>
                    <li>• <strong>Regular Check-ins:</strong> Monitor progress and adjust plans as needed</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Additional Strategies</h3>
              <p className="text-gray-700 mb-4">
                Beyond academics, consider these holistic approaches to reaching your target GPA:
              </p>

              <ul className="space-y-3 text-gray-700 ml-6">
                <li>
                  <strong>Time Management:</strong> Use planners, calendars, and productivity apps to balance coursework
                  with other responsibilities. Effective time management reduces stress and improves academic performance.
                </li>
                <li>
                  <strong>Health and Wellness:</strong> Maintain regular sleep, exercise, and healthy eating habits.
                  Physical and mental well-being directly impact academic success and concentration.
                </li>
                <li>
                  <strong>Academic Resources:</strong> Utilize tutoring services, writing centers, and academic advising.
                  Many colleges offer free resources to help students achieve their GPA goals.
                </li>
                <li>
                  <strong>Study Environment:</strong> Create a dedicated study space free from distractions.
                  Consistent study environments help build better learning habits.
                </li>
                <li>
                  <strong>Goal Setting:</strong> Break large academic goals into smaller, manageable tasks.
                  Regular progress tracking keeps motivation high and provides a sense of accomplishment.
                </li>
              </ul>
            </section>

            <section id="gpa-importance">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Target GPA Affects College, Scholarships, and Academic Goals</h2>
              <p className="text-gray-700 mb-4">
                Setting and achieving a target GPA has far-reaching implications for your educational and professional future.
                Your GPA serves as a key indicator of academic ability and can significantly impact college admissions,
                scholarship opportunities, and career prospects. Understanding how to calculate and work toward your
                target GPA empowers you to make informed decisions about your academic journey.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">College Admissions Impact</h3>
              <p className="text-gray-700 mb-4">
                College admissions officers use GPA as a primary measure of academic preparedness and consistency.
                Knowing your target GPA helps you set realistic goals for college applications and understand
                whether you need to focus on GPA improvement. Different colleges have different GPA expectations,
                and understanding your target GPA helps you target schools where you're competitive.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scholarship Eligibility</h3>
              <p className="text-gray-700 mb-4">
                Most scholarships require minimum GPA thresholds for eligibility and renewal. Academic scholarships
                often have GPA requirements ranging from 2.5 to 4.0, depending on the award amount and competitiveness.
                Using our target GPA calculator helps you determine if you can meet scholarship requirements and
                plan accordingly to maintain or improve your eligibility.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Academic Honors and Recognition</h3>
              <p className="text-gray-700 mb-4">
                Many universities offer academic honors, Dean's List recognition, honor societies, and special academic
                programs that require minimum GPA thresholds. Understanding your target GPA helps you work toward
                these distinctions and enhance your academic resume.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Graduate School and Career Opportunities</h3>
              <p className="text-gray-700 mb-4">
                Graduate programs and professional schools heavily weigh undergraduate GPA in admissions decisions.
                Many employers also consider GPA when evaluating job candidates, especially for entry-level positions
                and internships. Knowing your target GPA helps you set appropriate academic goals and work toward
                the qualifications needed for your desired career path.
              </p>

              <p className="text-gray-700 mb-4">
                Our target GPA calculator empowers you to take control of your academic future. By understanding
                exactly what GPA you need to achieve your goals, you can create realistic study plans, make informed
                course selections, and work strategically toward your educational and career objectives. Whether
                you're aiming for college admission, scholarships, or career advancement, knowing your target GPA
                is the first step toward academic success.
              </p>
            </section>

            <section id="faq">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <FAQ items={faqData} />
            </section>

            {/* Related Calculators */}
            <RelatedCalculators relatedIds={['gpa-improvement-calculator', 'required-gpa-calculator', 'college-gpa-calculator', 'high-school-gpa-calculator', 'weighted-gpa-calculator']} />

            {/* Authority Links */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Resources</h2>
              <p className="text-gray-700 mb-4">
                For more information about GPA calculations and academic planning, visit these authoritative sources:
              </p>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.collegeboard.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    College Board - College planning and admissions resources
                  </a>
                </li>
                <li>
                  <a href="https://nces.ed.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    National Center for Education Statistics - Educational data and research
                  </a>
                </li>
                <li>
                  <a href="https://www.khanacademy.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    Khan Academy - Free educational resources and study help
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
