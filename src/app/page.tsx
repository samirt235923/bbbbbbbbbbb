import Link from 'next/link';
import GPACalculator from '@/components/GPACalculator';
import { calculatorData } from '@/data/calculators';

export default function Home() {
  const featuredCalculators = calculatorData.slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free GPA Calculator - No Sign Up Required
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight">
                Calculate Your GPA in
                <span className="block gradient-text">Seconds</span>
              </h1>

              <p className="text-lg lg:text-xl text-secondary-600 mb-8 leading-relaxed max-w-2xl">
                Get your college or high school GPA instantly with our free, accurate calculator.
                Perfect for students, parents, and educators across the United States.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link
                  href="/gpa-calculators/college-gpa-calculator"
                  className="btn-primary text-center px-8 py-4 text-lg"
                >
                  Calculate GPA Now
                </Link>
                <Link
                  href="#calculator"
                  className="btn-secondary text-center px-8 py-4 text-lg"
                >
                  Try Calculator Below
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-secondary-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  100% Free
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  100% Accurate
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  Mobile Friendly
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative animate-slide-up">
              <div className="relative bg-white rounded-3xl shadow-large p-8 border border-secondary-200">
                {/* Mock Calculator Interface */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-secondary-900">GPA Calculator</h3>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>

                  {/* Sample Course Inputs */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-secondary-50 rounded-xl p-3">
                        <div className="text-xs text-secondary-500 mb-1">Course</div>
                        <div className="h-2 bg-secondary-200 rounded animate-pulse"></div>
                      </div>
                      <div className="bg-secondary-50 rounded-xl p-3">
                        <div className="text-xs text-secondary-500 mb-1">Grade</div>
                        <div className="h-2 bg-secondary-200 rounded animate-pulse"></div>
                      </div>
                      <div className="bg-secondary-50 rounded-xl p-3">
                        <div className="text-xs text-secondary-500 mb-1">Credits</div>
                        <div className="h-2 bg-secondary-200 rounded animate-pulse"></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-secondary-50 rounded-xl p-3">
                        <div className="h-2 bg-secondary-200 rounded animate-pulse mt-4"></div>
                      </div>
                      <div className="bg-secondary-50 rounded-xl p-3">
                        <div className="h-2 bg-secondary-200 rounded animate-pulse mt-4"></div>
                      </div>
                      <div className="bg-secondary-50 rounded-xl p-3">
                        <div className="h-2 bg-secondary-200 rounded animate-pulse mt-4"></div>
                      </div>
                    </div>
                  </div>

                  {/* Result Display */}
                  <div className="bg-gradient-primary rounded-xl p-6 text-center text-white">
                    <div className="text-sm opacity-90 mb-2">Your GPA</div>
                    <div className="text-4xl font-bold mb-1">3.67</div>
                    <div className="text-sm opacity-90">Excellent Performance!</div>
                  </div>

                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    Calculate GPA
                  </button>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center shadow-lg animate-bounce-subtle">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>

                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-success-500 rounded-full flex items-center justify-center shadow-lg animate-pulse-glow">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Try Our GPA Calculator
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Enter your courses, grades, and credit hours below to calculate your GPA instantly.
              No sign-up required - completely free to use.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <GPACalculator />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Why Choose Our GPA Calculator?
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Join thousands of students who trust our calculator for accurate GPA calculations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-8 text-center group hover:shadow-large transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">Lightning Fast</h3>
              <p className="text-secondary-600 leading-relaxed">
                Get your GPA calculated in seconds with our optimized algorithm. No waiting, no delays.
              </p>
            </div>

            <div className="card p-8 text-center group hover:shadow-large transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-success-500 to-success-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">100% Accurate</h3>
              <p className="text-secondary-600 leading-relaxed">
                Uses the standard 4.0 GPA scale formula used by colleges and universities across the US.
              </p>
            </div>

            <div className="card p-8 text-center group hover:shadow-large transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">Mobile Friendly</h3>
              <p className="text-secondary-600 leading-relaxed">
                Works perfectly on any device - desktop, tablet, or smartphone. Calculate anywhere, anytime.
              </p>
            </div>

            <div className="card p-8 text-center group hover:shadow-large transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">Completely Free</h3>
              <p className="text-secondary-600 leading-relaxed">
                No hidden fees, no premium features, no sign-up required. Free forever for all students.
              </p>
            </div>

            <div className="card p-8 text-center group hover:shadow-large transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-warning-500 to-warning-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">Easy to Use</h3>
              <p className="text-secondary-600 leading-relaxed">
                Simple interface with clear instructions. Perfect for students, parents, and educators.
              </p>
            </div>

            <div className="card p-8 text-center group hover:shadow-large transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-600 to-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">Trusted by Students</h3>
              <p className="text-secondary-600 leading-relaxed">
                Used by thousands of students across the United States for accurate GPA calculations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Popular GPA Calculators
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Choose from our collection of specialized GPA calculators designed for different student needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCalculators.map((calc, index) => (
              <Link
                key={calc.id}
                href={`/gpa-calculators/${calc.id}`}
                className="card-interactive group"
              >
                <div className="p-8">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {calc.name}
                  </h3>
                  <p className="text-secondary-600 leading-relaxed mb-6">
                    {calc.description}
                  </p>
                  <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700">
                    <span>Open Calculator</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/gpa-calculators"
              className="btn-secondary px-8 py-4 text-lg"
            >
              View All Calculators
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl lg:text-5xl font-bold mb-2">50+</div>
              <div className="text-primary-100 text-lg">GPA Calculators</div>
            </div>
            <div className="text-white">
              <div className="text-4xl lg:text-5xl font-bold mb-2">100K+</div>
              <div className="text-primary-100 text-lg">Students Helped</div>
            </div>
            <div className="text-white">
              <div className="text-4xl lg:text-5xl font-bold mb-2">4.9/5</div>
              <div className="text-primary-100 text-lg">User Rating</div>
            </div>
            <div className="text-white">
              <div className="text-4xl lg:text-5xl font-bold mb-2">100%</div>
              <div className="text-primary-100 text-lg">Free Forever</div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              GPA Tips & Guides
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Learn everything you need to know about GPAs, from calculation methods to improvement strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <article className="card group">
              <div className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                  What is GPA?
                </h3>
                <p className="text-secondary-600 leading-relaxed mb-6">
                  Learn about grade point average and how it affects your academic future. Understand the 4.0 scale and weighted vs unweighted GPAs.
                </p>
                <Link href="/blog/what-is-gpa" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                  <span>Read Article</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>

            <article className="card group">
              <div className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-success-500 to-success-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                  How to Improve Your GPA
                </h3>
                <p className="text-secondary-600 leading-relaxed mb-6">
                  Discover proven strategies to boost your GPA and academic performance. From study habits to time management techniques.
                </p>
                <Link href="/blog/how-to-improve-gpa" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                  <span>Read Article</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>

            <article className="card group">
              <div className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-warning-500 to-warning-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                  GPA for Ivy League
                </h3>
                <p className="text-secondary-600 leading-relaxed mb-6">
                  What GPA do you need to get into Ivy League schools? Learn about competitive GPAs and admission requirements.
                </p>
                <Link href="/blog/gpa-for-ivy-league" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                  <span>Read Article</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="btn-secondary px-8 py-4 text-lg"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Calculate Your GPA?
          </h2>
          <p className="text-lg text-primary-100 mb-8 leading-relaxed">
            Join thousands of students who use our free GPA calculator to track their academic progress.
            Get started in seconds - no sign-up required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/gpa-calculators/college-gpa-calculator"
              className="bg-white text-primary-600 hover:bg-primary-50 font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Calculate GPA Now
            </Link>
            <Link
              href="/gpa-calculators"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-xl transition-all duration-200"
            >
              View All Calculators
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}





