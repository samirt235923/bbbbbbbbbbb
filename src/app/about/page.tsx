import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us - GPA Calculator',
  description: 'Learn about GPA Calculator and our mission to help students succeed academically.',
  alternates: {
    canonical: 'https://topgpacalculator.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About GPA Calculator</h1>
          <p className="text-xl text-blue-100">
            Helping students succeed since 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            GPA Calculator is dedicated to helping students understand and improve their academic performance.
            We believe that every student deserves easy access to accurate GPA calculation tools and educational
            resources to guide their academic journey.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-blue-600 mb-3">50+ Free Calculators</h3>
              <p className="text-gray-700">
                From high school GPA to medical school GPA, we have specialized calculators for every situation.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Expert Blog</h3>
              <p className="text-gray-700">
                Read articles from education experts on improving GPA and academic success strategies.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Always Free</h3>
              <p className="text-gray-700">
                No registration, no payments, no hidden fees. Our tools are always free to use.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Accurate & Reliable</h3>
              <p className="text-gray-700">
                Uses standard GPA calculation methods recognized by schools and universities.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-8">
            <li>Simple, intuitive interface that works on all devices</li>
            <li>Instant results without waiting or processing time</li>
            <li>No ads cluttering the calculator interface</li>
            <li>Educational content to help you improve your GPA</li>
            <li>Supporting students globally</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            Have questions or suggestions? We'd love to hear from you!
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* AdSense */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-8 text-center">
            <p className="text-gray-600">Advertisement Space</p>
          </div>
        </div>
      </section>
    </div>
  );
}



