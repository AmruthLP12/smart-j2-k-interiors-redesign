import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | SmartJ2K Interiors',
  description: 'Read our latest insights on interior design trends, tips, and inspiration.',
};

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: 'Top Interior Design Trends for 2024',
      excerpt: 'Explore the latest interior design trends that are shaping modern spaces this year.',
      category: 'Trends',
      date: 'January 15, 2024',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'How to Choose the Perfect Color Palette',
      excerpt: 'A comprehensive guide to selecting colors that enhance your space and reflect your personality.',
      category: 'Design Tips',
      date: 'January 10, 2024',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'Maximizing Small Spaces: Design Solutions',
      excerpt: 'Discover creative strategies to make the most of limited space with smart design choices.',
      category: 'Small Spaces',
      date: 'January 5, 2024',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'Sustainable Interior Design: The Future',
      excerpt: 'Learn how eco-friendly design practices can create beautiful and responsible spaces.',
      category: 'Sustainability',
      date: 'December 28, 2023',
      readTime: '8 min read',
    },
    {
      id: 5,
      title: 'The Psychology of Interior Design Colors',
      excerpt: 'Understand how colors affect mood and how to use them strategically in your space.',
      category: 'Psychology',
      date: 'December 20, 2023',
      readTime: '6 min read',
    },
    {
      id: 6,
      title: 'Mixing Styles: Creating Your Unique Aesthetic',
      excerpt: 'Learn how to blend different design styles to create a cohesive and personalized interior.',
      category: 'Design Tips',
      date: 'December 15, 2023',
      readTime: '7 min read',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary/10 to-transparent">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Design Insights & Tips</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest interior design trends, tips, and inspiration for your projects.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.id} className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition group cursor-pointer">
                  <div className="h-48 bg-linear-to-br from-primary/30 to-primary/10 flex items-center justify-center group-hover:from-primary/40 group-hover:to-primary/20 transition">
                    <span className="text-5xl font-bold text-primary/30">📝</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">{post.category}</span>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition">{post.title}</h2>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar size={14} />
                        {post.date}
                      </div>
                      <div className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition">
                        Read <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest design tips, trends, and inspiration delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
