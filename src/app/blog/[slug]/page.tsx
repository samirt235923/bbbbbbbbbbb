import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog';
import Breadcrumb from '@/components/Breadcrumb';
import { jsonLdStringify } from '@/lib/jsonLd';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {};
  }

  const url = `https://topgpacalculator.com/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: url,
      type: 'article',
      publishedTime: post.publishedDate,
      authors: [post.author],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title, href: `/blog/${post.slug}` },
  ];

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: 'https://topgpacalculator.com/logo.svg',
    datePublished: post.publishedDate,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'GPA Calculator',
    },
  };
  const blogPostingJsonLd = jsonLdStringify(blogPostingSchema);

  return (
    <>
      {blogPostingJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: blogPostingJsonLd,
          }}
        />
      )}

      <div className="bg-white">
        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Header */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex gap-4 text-blue-100">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
              <span>•</span>
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="md:col-span-2">
              <article className="prose prose-lg max-w-none">
                <p className="text-xl leading-relaxed text-gray-700 mb-6">
                  {post.excerpt}
                </p>

                {/<\/?[a-z][\s\S]*>/i.test(post.content) ? (
                  <div
                    className="text-gray-700"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                ) : (
                  post.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 mb-6">
                      {paragraph}
                    </p>
                  ))
                )}

                <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">Actionable Recommendations</h2>
                <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
                  <li>Create a study schedule and stick to it consistently</li>
                  <li>Attend all classes and take organized notes</li>
                  <li>Form or join study groups for peer learning</li>
                  <li>Seek help from tutors or office hours early</li>
                  <li>Stay organized with assignments and deadlines</li>
                  <li>Take care of your mental and physical health</li>
                  <li>Review material regularly throughout the semester</li>
                  <li>Use our GPA calculator to track your progress</li>
                </ol>

                <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">Conclusion</h2>
                <p className="text-gray-700 mb-6">
                  By implementing these strategies and maintaining focus on your academic goals, you can
                  significantly improve your GPA and set yourself up for success in your future endeavors.
                  Remember that improvement takes time and consistency—be patient with yourself and celebrate
                  small victories along the way.
                </p>
              </article>

              {/* AdSense */}
              <div className="mt-12 p-8 bg-gray-100 border-2 border-gray-300 rounded-lg text-center">
                <p className="text-gray-600">Advertisement Space</p>
              </div>

              {/* Related Posts */}
              <section className="mt-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Related Articles</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedPosts.map((relPost) => (
                    <Link
                      key={relPost.id}
                      href={`/blog/${relPost.slug}`}
                      className="card p-4 hover:shadow-lg transition"
                    >
                      <p className="font-bold text-blue-600 mb-2">{relPost.title}</p>
                      <p className="text-sm text-gray-600">{relPost.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              {/* Article Info */}
              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200 mb-8 sticky top-20">
                <h3 className="text-lg font-bold text-blue-900 mb-4">Article Info</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <strong>Author:</strong> {post.author}
                  </li>
                  <li>
                    <strong>Published:</strong> {new Date(post.publishedDate).toLocaleDateString()}
                  </li>
                  <li>
                    <strong>Read Time:</strong> {post.readTime} min
                  </li>
                  <li>
                    <strong>Category:</strong> <span className="bg-blue-200 px-2 py-1 rounded">GPA Tips</span>
                  </li>
                </ul>
              </div>

              {/* Popular Calculators */}
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Popular Calculators</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/gpa-calculators/college-gpa-calculator" className="text-blue-600 hover:underline">
                      College GPA
                    </Link>
                  </li>
                  <li>
                    <Link href="/gpa-calculators/high-school-gpa-calculator" className="text-blue-600 hover:underline">
                      High School GPA
                    </Link>
                  </li>
                  <li>
                    <Link href="/gpa-calculators/weighted-gpa-calculator" className="text-blue-600 hover:underline">
                      Weighted GPA
                    </Link>
                  </li>
                  <li>
                    <Link href="/gpa-calculators/gpa-improvement-calculator" className="text-blue-600 hover:underline">
                      GPA Improvement
                    </Link>
                  </li>
                </ul>
              </div>

              {/* AdSense Sidebar */}
              <div className="bg-gray-100 p-6 rounded-lg border-2 border-gray-300 text-center">
                <p className="text-gray-600 text-sm">Advertisement Space</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
