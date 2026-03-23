// Schema Markup Components for SEO
import { jsonLdStringify } from '@/lib/jsonLd';
interface FAQItem {
  question: string;
  answer: string;
}

interface SchemaMarkupProps {
  faqs?: FAQItem[];
  title?: string;
  description?: string;
  url?: string;
}

const SITE_URL = 'https://topgpacalculator.com';
const ORG_NAME = 'GPA Calculator';
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO_URL = `${SITE_URL}/logo.svg`;

export function FAQSchema({ faqs, url }: { faqs: FAQItem[]; url?: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    ...(url
      ? {
          '@id': `${url}#faq`,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${url}#webpage`,
          },
        }
      : {}),
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const jsonLd = jsonLdStringify(schema);
  if (!jsonLd) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
}

export function HomePageSchema({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  const normalizedUrl = url.endsWith('/') ? url.slice(0, -1) : url;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: ORG_NAME,
        url: `${SITE_URL}/`,
        logo: LOGO_URL,
        sameAs: [
          'https://www.pinterest.com/topgpacalculator/',
          'https://www.youtube.com/@TopGpaCalculator',
          'https://x.com/topgpacalculato',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        name: ORG_NAME,
        url: `${SITE_URL}/`,
        publisher: {
          '@id': ORG_ID,
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${normalizedUrl}/#webpage`,
        url: `${normalizedUrl}/`,
        name: title,
        description: description,
        inLanguage: 'en-US',
        mainEntity: {
          '@id': `${normalizedUrl}/#app`,
        },
        isPartOf: {
          '@id': WEBSITE_ID,
        },
        publisher: {
          '@id': ORG_ID,
        },
      },
      {
        '@type': 'WebApplication',
        '@id': `${normalizedUrl}/#app`,
        name: ORG_NAME,
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'All',
        url: `${normalizedUrl}/`,
        description: 'Free online GPA calculator for students to calculate grade point average.',
        screenshot: `${SITE_URL}/logo.svg`,
        featureList: [
          'GPA calculation',
          'Weighted GPA support',
          'Semester and cumulative GPA',
          'Target GPA planning',
          'GPA improvement scenarios',
          'Multiple grading scales',
        ],
        isPartOf: {
          '@id': WEBSITE_ID,
        },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      },
    ],
  };

  const jsonLd = jsonLdStringify(schema);
  if (!jsonLd) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
}

export function CalculatorSchema({ title, description, url }: SchemaMarkupProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalApplication',
    name: title,
    description: description,
    url: url,
    applicationCategory: 'EducationalApplication',
  };

  const jsonLd = jsonLdStringify(schema);
  if (!jsonLd) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: ORG_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    description: 'Free GPA calculator for students',
    sameAs: [
      'https://www.facebook.com/gpacalculator',
      'https://www.twitter.com/gpacalculator',
    ],
  };

  const jsonLd = jsonLdStringify(schema);
  if (!jsonLd) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
}

export function WebPageSchema({ title, description, url }: SchemaMarkupProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': url ? `${url}#webpage` : undefined,
    name: title,
    description: description,
    url: url,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      name: ORG_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@id': ORG_ID,
    },
  };

  const jsonLd = jsonLdStringify(schema);
  if (!jsonLd) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  const jsonLd = jsonLdStringify(schema);
  if (!jsonLd) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
}

export function ArticleSchema({
  headline,
  description,
  author,
  datePublished,
  dateModified
}: {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified: string;
}) {
  void headline;
  void description;
  void author;
  void datePublished;
  void dateModified;
  return null;
}





