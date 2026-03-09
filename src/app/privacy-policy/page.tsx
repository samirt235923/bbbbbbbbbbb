import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - GPA Calculator',
  description: 'Privacy policy for GPA Calculator. Learn how we protect your information.',
  alternates: {
    canonical: 'https://gpacalculator.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-blue-100">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">1. Introduction</h2>
          <p className="text-gray-700 mb-6">
            Welcome to GPA Calculator ("we," "us," "our," or "Company"). We are committed to protecting your
            privacy and ensuring you have a positive experience on our website.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">2. Information We Collect</h2>
          <p className="text-gray-700 mb-6">
            We collect information you provide directly to us, such as when you:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Use our GPA calculator</li>
            <li>Contact us via email or contact form</li>
            <li>Subscribe to our newsletter</li>
            <li>Browse our website</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-700 mb-6">
            We use the information we collect for various purposes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>To provide and improve our services</li>
            <li>To respond to your inquiries</li>
            <li>To send service-related announcements</li>
            <li>To analyze site usage and trends</li>
            <li>To improve website functionality</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">4. Data Security</h2>
          <p className="text-gray-700 mb-6">
            We implement appropriate technical and organizational measures to protect your personal information
            against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">5. Third-Party Services</h2>
          <p className="text-gray-700 mb-6">
            Our website may include links to third-party websites and services. We are not responsible for the
            privacy practices of external sites. Please review their privacy policies before providing any
            information.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">6. Google Analytics</h2>
          <p className="text-gray-700 mb-6">
            We use Google Analytics to analyze website traffic. Google Analytics uses cookies to track page
            views and user interactions. For more information, please visit the Google Analytics privacy
            policy.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">7. Cookies</h2>
          <p className="text-gray-700 mb-6">
            We may use cookies to enhance your experience. Most web browsers automatically accept cookies, but
            you can usually modify your browser settings to refuse cookies or receive a warning before a cookie
            is saved.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">8. Children's Privacy</h2>
          <p className="text-gray-700 mb-6">
            Our website is designed for educational purposes and may be accessed by students of all ages. We do
            not knowingly collect personal information from children under 13 without parental consent.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">9. Changes to Privacy Policy</h2>
          <p className="text-gray-700 mb-6">
            We reserve the right to update this privacy policy at any time. We will notify you of any changes
            by posting the new policy on this page and updating the "Last Updated" date.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">10. Contact Us</h2>
          <p className="text-gray-700 mb-6">
            If you have any questions or concerns about our privacy policy, please contact us at:
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> privacy@gpacalculator.com
          </p>
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
