import Link from 'next/link';
import type { Metadata } from 'next';
import { blogPosts } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Blog - GPA Tips, Strategies & Articles | GPA Calculator',
  description: 'Read expert articles and tips on GPA management, college admissions, scholarships, and improving academic performance.',
  alternates: {
    canonical: 'https://gpacalculator.com/blog',
  },
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'GPA Calculator Blog',
            description: 'Expert articles on GPA and academics',
            url: 'https://gpacalculator.com/blog',
          }),
        }}
      />

      <div className="bg-white">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">GPA Calculator Blog</h1>
            <p className="text-xl text-blue-100">
              Expert tips, strategies, and guides for student success
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="card p-6 hover:shadow-lg transition border-l-4 border-blue-600"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h2 className="text-2xl font-bold text-blue-600 flex-grow">{post.title}</h2>
                    <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                      {post.readTime} min read
                    </span>
                  </div>

                  <div className="text-sm text-gray-500 mb-3">
                    By {post.author} • {new Date(post.publishedDate).toLocaleDateString()}
                  </div>

                  <p className="text-gray-700 mb-4">{post.excerpt}</p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </article>
              ))}
            </div>
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
    </>
  );
}
