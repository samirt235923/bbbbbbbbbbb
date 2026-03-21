/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  productionBrowserSourceMaps: false,
  images: {
    unoptimized: false,
    formats: ['image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.topgpacalculator.com' }],
        destination: 'https://topgpacalculator.com/:path*',
        permanent: true,
      },
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/index.htm', destination: '/', permanent: true },
      { source: '/index.php', destination: '/', permanent: true },
      { source: '/term-gpa-calculator', destination: '/gpa-calculators/term-gpa-calculator', permanent: true },
      { source: '/gpa-projection-calculator', destination: '/gpa-calculators/gpa-projection-calculator', permanent: true },
      { source: '/junior-gpa-calculator', destination: '/gpa-calculators/junior-gpa-calculator', permanent: true },
      { source: '/gpa-improvement-calculator', destination: '/gpa-calculators/gpa-improvement-calculator', permanent: true },
      { source: '/senior-gpa-calculator', destination: '/gpa-calculators/senior-gpa-calculator', permanent: true },
      { source: '/freshman-gpa-calculator', destination: '/gpa-calculators/freshman-gpa-calculator', permanent: true },
      { source: '/semester-gpa-calculator', destination: '/gpa-calculators/semester-gpa-calculator', permanent: true },
      { source: '/high-school-gpa-calculator', destination: '/gpa-calculators/high-school-gpa-calculator', permanent: true },
      { source: '/weighted-gpa-calculator', destination: '/gpa-calculators/weighted-gpa-calculator', permanent: true },
      { source: '/gpa-average-calculator', destination: '/gpa-calculators/gpa-average-calculator', permanent: true },
      { source: '/online-gpa-calculator', destination: '/gpa-calculators/online-gpa-calculator', permanent: true },
      { source: '/college-gpa-calculator', destination: '/gpa-calculators/college-gpa-calculator', permanent: true },
      { source: '/cumulative-gpa-calculator', destination: '/gpa-calculators/cumulative-gpa-calculator', permanent: true },
      { source: '/nursing-gpa-calculator', destination: '/gpa-calculators/nursing-gpa-calculator', permanent: true },
      { source: '/gpa-calculators/middle-school-gpa-calculator', destination: '/gpa-calculators/academic-gpa-calculator', permanent: true },
      { source: '/gpa-calculators/unweighted-gpa-calculator', destination: '/gpa-calculators/4-0-scale-gpa-calculator', permanent: true },
      { source: '/gpa-calculators/gpa-to-percentage-calculator', destination: '/gpa-calculators/gpa-to-percentage-converter', permanent: true },
      { source: '/gpa-calculators/gpa-calculator', destination: '/gpa-calculators/online-gpa-calculator', permanent: true },
    ];
  },
};

module.exports = nextConfig;
