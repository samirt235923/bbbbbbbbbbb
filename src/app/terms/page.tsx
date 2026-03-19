import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service - Top GPA Calculator',
  description: 'Read the terms and conditions for using Top GPA Calculator. This page explains legal use, disclaimers, and privacy compliance.',
  keywords: 'terms of service, terms and conditions, gpa calculator terms, user agreement',
  alternates: {
    canonical: 'https://topgpacalculator.com/terms',
  },
};

export default function TermsPage() {
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-6 text-sm text-gray-600">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link> / Terms of Service
        </div>

        <header className="bg-white shadow rounded-2xl p-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Terms of Service</h1>
          <p className="text-gray-600 mt-2">Last updated: {today}</p>
        </header>

        <article className="bg-white shadow rounded-2xl p-6 prose prose-slate max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using <strong>Top GPA Calculator</strong> at <strong>https://topgpacalculator.com</strong>, you agree to these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our website.
          </p>

          <h2>2. Changes to These Terms</h2>
          <p>
            We may revise these Terms at any time. Significant changes will be posted on this page with a new effective date. Your continued use after changes means you accept the updated Terms.
          </p>

          <h2>3. Use of Services</h2>
          <p>
            Our GPA calculators are provided for educational purposes and personal planning only. Results are estimates and should not replace official academic records or institutional calculations.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            All content, design, logos, and software on this site are the property of Top GPA Calculator and protected by copyright and trademark laws. Unauthorized use is prohibited.
          </p>

          <h2>5. No Warranties</h2>
          <p>
            We provide the Service "as is" without any warranties. We do not guarantee accuracy, reliability, or continuous availability.
          </p>

          <h2>6. Affiliate Disclaimer</h2>
          <p>
            Some links on this site may be affiliate links. This means we may earn a commission if you click through and make a purchase at no extra cost to you. We only promote products and services that we believe are helpful and relevant to our visitors.
          </p>

          <h2>7. Earnings Disclaimer</h2>
          <p>
            Any earnings examples or outcomes shared on this site are only estimates. We cannot guarantee that you will achieve any specific results, and your success depends on your effort, experience, and local conditions.
          </p>

          <h2>8. General Liability Disclaimer</h2>
          <p>
            Top GPA Calculator is not responsible for any losses or damages arising from the use of our content, tools, or services. You assume full responsibility for decisions made based on the information provided on this site.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Top GPA Calculator will not be liable for any indirect, incidental, special, or consequential damages arising out of your use of the site.
          </p>

          <h2>10. User Content and Conduct</h2>
          <p>
            Users are responsible for any information they submit. You agree not to use the site for illegal purposes or to interfere with others' use.
          </p>

          <h2>8. Privacy</h2>
          <p>
            Use of our site is also governed by our <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>. Please review this policy to understand how we collect, use, and share your data.
          </p>

          <h2>9. Termination</h2>
          <p>
            We may terminate or suspend access to the Service at any time without prior notice if we suspect violation of these terms.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the jurisdiction in which the company operates. If any provision is unenforceable, the remainder remains in effect.
          </p>

          <h2>11. Contact</h2>
          <p>
            For questions about these Terms, contact us through the <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link> page.
          </p>

          <p className="text-sm text-gray-500 mt-8">
            Disclaimer: This page provides general terms and is not a substitute for legal advice.
          </p>
        </article>
      </div>
    </div>
  );
}
