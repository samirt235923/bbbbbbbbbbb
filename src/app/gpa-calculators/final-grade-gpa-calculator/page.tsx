'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Breadcrumb from '../../../components/Breadcrumb';
import SEOHead from '../../../components/SEOHead';
import FAQ from '../../../components/FAQ';

const FinalGradeGPACalculator: React.FC = () => {
  const [currentGrade, setCurrentGrade] = useState<number>(85);
  const [desiredGrade, setDesiredGrade] = useState<number>(90);
  const [finalWeight, setFinalWeight] = useState<number>(30);
  const [requiredFinal, setRequiredFinal] = useState<number | null>(null);

  const calculateFinalGrade = () => {
    const weight = finalWeight / 100;
    const required = (desiredGrade - currentGrade * (1 - weight)) / weight;
    setRequiredFinal(Math.round(required * 100) / 100);
  };

  const handleCalculate = () => {
    calculateFinalGrade();
  };

  // Instant calculation
  useEffect(() => {
    calculateFinalGrade();
  }, [currentGrade, desiredGrade, finalWeight]);

  const faqData = [
    {
      question: 'How do I calculate my final exam grade?',
      answer: 'To calculate your final exam grade, use the formula: Required Final Exam Grade = (Desired Grade − Current Grade × (1 − Final Weight)) ÷ Final Weight. Input your current course grade, desired final grade, and final exam weight into our calculator for instant results.',
    },
    {
      question: 'What grade do I need on my final exam?',
      answer: 'The grade you need on your final exam depends on your current course grade, desired final grade, and the weight of the final exam. Use our calculator to determine the exact percentage required.',
    },
    {
      question: 'How much is my final exam worth?',
      answer: 'The final exam weight varies by course, typically ranging from 20% to 50% of your total grade. Check your syllabus or ask your instructor for the exact percentage.',
    },
    {
      question: 'Can a final exam change my GPA?',
      answer: 'Yes, final exams can significantly impact your GPA, especially if they carry substantial weight. A strong performance can boost your grade, while a poor one can lower it.',
    },
    {
      question: 'How do teachers calculate final grades?',
      answer: 'Teachers calculate final grades by weighting different components (homework, quizzes, midterms, finals) according to the syllabus. The final grade is usually a weighted average of all assessments.',
    },
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Final Grade GPA Calculator – What Grade Do You Need on Your Final?',
    description: 'Use our Final Grade GPA Calculator to find the grade you need on your final exam to reach your target course grade. Enter your current grade and final exam weight to calculate instantly.',
    author: {
      '@type': 'Organization',
      name: 'GPA Calculator Website',
    },
    publisher: {
      '@type': 'Organization',
      name: 'GPA Calculator Website',
    },
    datePublished: '2024-01-01',
    dateModified: '2024-01-01',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <SEOHead
        title="Final Grade GPA Calculator – What Grade Do You Need on Your Final?"
        description="Use our Final Grade GPA Calculator to find the grade you need on your final exam to reach your target course grade. Enter your current grade and final exam weight to calculate instantly."
        canonical="/gpa-calculators/final-grade-gpa-calculator"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'GPA Calculators', href: '/gpa-calculators' },
            { label: 'Final Grade GPA Calculator', href: '/final-grade-gpa-calculator' },
          ]}
        />

        <h1 className="text-4xl font-bold text-center mb-8">Final Grade GPA Calculator</h1>

        {/* Table of Contents */}
        <div className="bg-gray-100 p-4 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><a href="#calculator" className="text-blue-600 hover:underline">Final Grade Calculator</a></li>
            <li><a href="#formula" className="text-blue-600 hover:underline">Final Grade Formula</a></li>
            <li><a href="#example" className="text-blue-600 hover:underline">Example Calculation</a></li>
            <li><a href="#what-is" className="text-blue-600 hover:underline">What is a Final Grade Calculator</a></li>
            <li><a href="#how-to-calculate" className="text-blue-600 hover:underline">How to Calculate Final Exam Grade</a></li>
            <li><a href="#formula-explained" className="text-blue-600 hover:underline">Final Grade Formula Explained</a></li>
            <li><a href="#gpa-impact" className="text-blue-600 hover:underline">How Final Exams Affect Your GPA</a></li>
            <li><a href="#tips" className="text-blue-600 hover:underline">Tips to Improve Your Final Grade</a></li>
            <li><a href="#faq" className="text-blue-600 hover:underline">Frequently Asked Questions</a></li>
            <li><a href="#related" className="text-blue-600 hover:underline">Related GPA Calculators</a></li>
          </ul>
        </div>

        {/* Calculator */}
        <section id="calculator" className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Calculate Your Required Final Exam Grade</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label htmlFor="currentGrade" className="block text-sm font-medium text-gray-700 mb-2">
                Current Course Grade (%)
              </label>
              <input
                type="number"
                id="currentGrade"
                value={currentGrade}
                onChange={(e) => setCurrentGrade(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="0"
                max="100"
                step="0.1"
              />
            </div>
            <div>
              <label htmlFor="desiredGrade" className="block text-sm font-medium text-gray-700 mb-2">
                Desired Final Course Grade (%)
              </label>
              <input
                type="number"
                id="desiredGrade"
                value={desiredGrade}
                onChange={(e) => setDesiredGrade(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="0"
                max="100"
                step="0.1"
              />
            </div>
            <div>
              <label htmlFor="finalWeight" className="block text-sm font-medium text-gray-700 mb-2">
                Final Exam Weight (%)
              </label>
              <input
                type="number"
                id="finalWeight"
                value={finalWeight}
                onChange={(e) => setFinalWeight(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="0"
                max="100"
                step="0.1"
              />
            </div>
          </div>
          <button
            onClick={handleCalculate}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          >
            Calculate
          </button>
          {requiredFinal !== null && (
            <div className="bg-green-100 p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">Required Final Exam Grade</h3>
              <p className="text-2xl font-bold text-green-600">{requiredFinal}%</p>
              {requiredFinal > 100 && (
                <p className="text-red-600 mt-2">Note: A grade above 100% may not be achievable. Consider retaking the course or speaking with your instructor.</p>
              )}
            </div>
          )}
        </section>

        {/* Formula */}
        <section id="formula" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Final Grade Formula</h2>
          <p className="mb-4">
            The formula to calculate the required final exam grade is:
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-center mb-4">
            Required Final Exam Grade = (Desired Grade − Current Grade × (1 − Final Weight)) ÷ Final Weight
          </div>
          <p>
            Where:<br />
            <strong>Current Grade</strong> = your current course percentage<br />
            <strong>Desired Grade</strong> = your target final course grade<br />
            <strong>Final Weight</strong> = the percentage weight of the final exam
          </p>
        </section>

        {/* Example */}
        <section id="example" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Example Final Grade Calculation</h2>
          <p className="mb-4">
            Let's say your current course grade is 85%, you want a final grade of 90%, and the final exam is worth 30% of your grade.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p><strong>Current Grade:</strong> 85%</p>
            <p><strong>Desired Final Grade:</strong> 90%</p>
            <p><strong>Final Exam Weight:</strong> 30%</p>
          </div>
          <p className="mb-4">
            Using the formula:<br />
            Required Final = (90 − 85 × (1 − 0.30)) ÷ 0.30<br />
            Required Final = (90 − 59.5) ÷ 0.30<br />
            Required Final = 101.67%
          </p>
          <p>
            This means you would need to score 101.67% on your final exam to achieve a 90% overall grade. Since 100% is typically the maximum, you might need to aim for a perfect score or consider other options.
          </p>
        </section>

        {/* SEO Content */}
        <section id="what-is" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What is a Final Grade Calculator</h2>
          <p className="mb-4">
            A final grade calculator is an essential tool for students who want to determine what score they need on their final exam to achieve their desired course grade. Whether you're in high school, college, or graduate school, knowing your required final exam grade can help you plan your study strategy and manage your expectations.
          </p>
          <p className="mb-4">
            Our final grade GPA calculator takes into account your current course grade, your desired final grade, and the weight of the final exam in your overall course assessment. By inputting these values, you can instantly calculate the minimum grade you need to earn on your final exam.
          </p>
          <p>
            This tool is particularly useful for students who are close to their target grade and want to know if they can relax or if they need to intensify their studying efforts. It's also helpful for planning purposes, allowing you to set realistic goals for your final exam preparation.
          </p>
        </section>

        <section id="how-to-calculate" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How to Calculate Final Exam Grade</h2>
          <p className="mb-4">
            Calculating your required final exam grade involves a simple weighted average formula. Here's a step-by-step guide:
          </p>
          <ol className="list-decimal list-inside space-y-2 mb-4">
            <li>Determine your current course grade percentage.</li>
            <li>Decide on your desired final course grade.</li>
            <li>Find out what percentage of your final grade the exam is worth.</li>
            <li>Use the formula: Required Final = (Desired - Current × (1 - Weight)) ÷ Weight</li>
            <li>Interpret the result and plan accordingly.</li>
          </ol>
          <p>
            Our calculator automates this process, providing instant results as you input your values. This saves time and reduces the chance of calculation errors.
          </p>
        </section>

        <section id="formula-explained" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Final Grade Formula Explained</h2>
          <p className="mb-4">
            The final grade formula is based on the concept of weighted averages. Your course grade is typically composed of multiple components (homework, quizzes, midterms, final exam) each with their own weight.
          </p>
          <p className="mb-4">
            The formula works by first calculating what portion of your grade comes from work already completed and what portion comes from the final exam. It then determines what grade on the final exam would be needed to reach your desired overall grade.
          </p>
          <p className="mb-4">
            For example, if your final exam is worth 30% of your grade, then 70% of your grade is already determined by your current performance. The formula finds the grade you need on the remaining 30% to achieve your target.
          </p>
          <p>
            Understanding this formula can help you better comprehend how your grades are calculated and why final exams can be so crucial to your academic success.
          </p>
        </section>

        <section id="gpa-impact" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How Final Exams Affect Your GPA</h2>
          <p className="mb-4">
            Final exams can have a significant impact on your GPA, especially if they carry substantial weight in your course grade. A strong performance on a final exam can boost your overall grade and improve your GPA, while a poor performance can lower it.
          </p>
          <p className="mb-4">
            The impact depends on several factors:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>The weight of the final exam in your course</li>
            <li>Your current grade in the course</li>
            <li>How much your course grade affects your overall GPA</li>
          </ul>
          <p className="mb-4">
            For students with high current grades, final exams might have less impact. However, for those struggling in a course, a good final exam can make the difference between passing and failing.
          </p>
          <p>
            Using a final grade calculator can help you understand the potential impact of your final exam and motivate you to perform well.
          </p>
        </section>

        <section id="tips" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Tips to Improve Your Final Grade</h2>
          <p className="mb-4">
            If your required final exam grade seems challenging, here are some tips to help you improve your performance:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Create a study schedule and stick to it</li>
            <li>Review all course materials, not just recent topics</li>
            <li>Practice with past exams or sample questions</li>
            <li>Get help from tutors, study groups, or your instructor</li>
            <li>Take care of your physical and mental health</li>
            <li>Use active learning techniques like teaching the material to others</li>
          </ul>
          <p className="mb-4">
            Remember, preparation is key. Start studying early and maintain consistent effort throughout the semester to avoid cramming.
          </p>
          <p>
            If you're still concerned about your grade, consider speaking with your instructor about extra credit opportunities or other ways to improve your standing.
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
            <Link href="/gpa-calculators/high-school-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg">
              <h3 className="font-bold mb-2">High School GPA Calculator</h3>
              <p className="text-sm text-gray-600">Track high school performance.</p>
            </Link>
            <Link href="/gpa-calculators/weighted-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg">
              <h3 className="font-bold mb-2">Weighted GPA Calculator</h3>
              <p className="text-sm text-gray-600">Includes Honors/AP weighting.</p>
            </Link>
            <Link href="/gpa-calculators/4-0-scale-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg">
              <h3 className="font-bold mb-2">4.0 Scale GPA Calculator</h3>
              <p className="text-sm text-gray-600">Use standard 4.0 grading.</p>
            </Link>
            <Link href="/gpa-calculators/cumulative-gpa-calculator" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg">
              <h3 className="font-bold mb-2">Cumulative GPA Calculator</h3>
              <p className="text-sm text-gray-600">Combine multiple semesters.</p>
            </Link>
          </div>
        </section>

        {/* External Links */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Learn More</h3>
          <ul className="space-y-2">
            <li><a href="https://www.collegeboard.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">College Board - Official College Planning</a></li>
            <li><a href="https://nces.ed.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">National Center for Education Statistics</a></li>
            <li><a href="https://www.khanacademy.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Khan Academy - Free Educational Resources</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FinalGradeGPACalculator;