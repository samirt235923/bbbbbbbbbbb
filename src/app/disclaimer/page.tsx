import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer - GPA Calculator',
  description: 'Disclaimer page for GPA Calculator, including affiliate, earnings, and liability notices.',
  alternates: {
    canonical: 'https://topgpacalculator.com/disclaimer',
  },
};

export default function DisclaimerPage() {
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-6 text-sm text-gray-600">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link> / Disclaimer
        </div>

        <header className="bg-white shadow rounded-2xl p-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Disclaimer</h1>
          <p className="text-gray-600 mt-2">Last updated: {today}</p>
        </header>

        <article className="bg-white shadow rounded-2xl p-6 prose prose-slate max-w-none">
          <h2>Welcome to GPA Calculator</h2>
          <p>
            This disclaimer explains the purpose of our site and the terms of use. By using GPA Calculator, you agree to the following conditions.
          </p>

          <h2>Affiliate Disclaimer</h2>
          <p>
            Some of the links on this website are affiliate links. This means that we may earn a small commission if you click on a link and make a purchase, at no additional cost to you. These commissions help support the maintenance and growth of this website.
          </p>
          <p>
            We only recommend products, services, or tools that we believe may provide value to our users.
          </p>

          <h2>Earnings Disclaimer</h2>
          <p>
            Any earnings, income statements, or examples presented on this website are for informational purposes only. They are not guarantees of results.
          </p>
          <p>
            Your success depends on many factors, including your skills, experience, effort, and individual circumstances. We do not guarantee that you will achieve similar results.
          </p>

          <h2>Educational Purpose Only</h2>
          <p>
            All content, tools, and calculators provided on this website are intended for educational and informational purposes only.
          </p>
          <p>
            While we strive to provide accurate calculations and information, we do not guarantee the completeness, reliability, or accuracy of any content.
          </p>

          <h2>No Professional Advice</h2>
          <p>
            The information on this website should not be considered academic, financial, or professional advice.
          </p>
          <p>
            You should always consult with a qualified professional or your educational institution for official GPA calculations and academic decisions.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            Under no circumstances shall GPA Calculator, its owners, or contributors be held liable for any direct, indirect, incidental, or consequential damages resulting from:
          </p>
          <ul>
            <li>Use of this website</li>
            <li>Reliance on any information provided</li>
            <li>Errors in calculations or content</li>
          </ul>

          <h2>External Links Disclaimer</h2>
          <p>
            This website may contain links to external websites that are not provided or maintained by us.
          </p>
          <p>
            We do not guarantee the accuracy, relevance, or completeness of any information on these external websites.
          </p>

          <h2>Use at Your Own Risk</h2>
          <p>
            By using this website, you agree that you are doing so at your own risk.
          </p>

          <h2>Consent</h2>
          <p>
            By using our website, you hereby consent to this disclaimer and agree to its terms.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Disclaimer, you can contact us at:
          </p>
          <p>
            <strong>Email:</strong> privacy@topgpacalculator.com<br />
            <strong>Contact Page:</strong> <Link href="/contact" className="text-blue-600 hover:underline">/contact</Link>
          </p>
        </article>
      </div>
    </div>
  );
}
