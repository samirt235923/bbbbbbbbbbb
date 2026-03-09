// Schema Markup Components for SEO
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

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GPA Calculator',
    url: 'https://topgpacalculator.com',
    description: 'Free GPA calculator for students',
    sameAs: [
      'https://www.facebook.com/gpacalculator',
      'https://www.twitter.com/gpacalculator',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}



