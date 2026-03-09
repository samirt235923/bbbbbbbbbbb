// SEO Head Component for Next.js
interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterHandle?: string;
}

export default function SEOHead({
  title,
  description,
  canonical,
  ogImage = '/og-image.png',
  ogType = 'website',
  twitterHandle = '@gpaCalculator',
}: SEOProps) {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      
      {/* Canonical Tag */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="GPA Calculator" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content={twitterHandle} />
      
      {/* Additional SEO Tags */}
      <meta name="author" content="GPA Calculator Team" />
      <meta name="keywords" content="gpa calculator, gpa tool, calculate gpa, college gpa" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}





