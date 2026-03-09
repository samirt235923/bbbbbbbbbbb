const fs = require('fs');
const path = require('path');

// Import calculator and blog data
const calculators = require('./src/data/calculators').calculatorData;
const blogPosts = require('./src/data/blog').blogPosts;

const DOMAIN = 'https://topgpacalculator.com';

function generateSitemap() {
  const staticPages = [
    '/',
    '/gpa-calculators',
    '/blog',
    '/about',
    '/contact',
    '/privacy-policy',
  ];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Add static pages
  staticPages.forEach((route) => {
    xml += '  <url>\n';
    xml += `    <loc>${DOMAIN}${route}</loc>\n`;
    xml += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
    xml += '    <changefreq>weekly</changefreq>\n';
    xml += '    <priority>0.8</priority>\n';
    xml += '  </url>\n';
  });

  // Add calculator pages
  calculators.forEach((calc) => {
    xml += '  <url>\n';
    xml += `    <loc>${DOMAIN}/gpa-calculators/${calc.id}</loc>\n`;
    xml += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
    xml += '    <changefreq>monthly</changefreq>\n';
    xml += '    <priority>0.7</priority>\n';
    xml += '  </url>\n';
  });

  // Add blog pages
  blogPosts.forEach((post) => {
    xml += '  <url>\n';
    xml += `    <loc>${DOMAIN}/blog/${post.slug}</loc>\n`;
    xml += `    <lastmod>${post.publishedDate}</lastmod>\n`;
    xml += '    <changefreq>monthly</changefreq>\n';
    xml += '    <priority>0.7</priority>\n';
    xml += '  </url>\n';
  });

  xml += '</urlset>';

  // Write sitemap
  const publicDir = path.join(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml);
  console.log(`✓ Generated sitemap.xml with ${staticPages.length + calculators.length + blogPosts.length} URLs`);
}

function generateRobotsTxt() {
  let robotsTxt = 'User-agent: *\n';
  robotsTxt += 'Allow: /\n';
  robotsTxt += 'Disallow: /admin\n';
  robotsTxt += 'Disallow: /api\n';
  robotsTxt += '\n';
  robotsTxt += `Sitemap: ${DOMAIN}/sitemap.xml\n`;

  const publicDir = path.join(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
  console.log('✓ Generated robots.txt');
}

// Run generators
try {
  generateSitemap();
  generateRobotsTxt();
  console.log('\n✓ Sitemap and robots.txt generated successfully!');
} catch (error) {
  console.error('Error generating sitemap:', error);
  process.exit(1);
}
