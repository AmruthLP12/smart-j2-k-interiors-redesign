import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Retail Interior Design | SmartJ2K Interiors',
  description: 'Captivating retail design that elevates brand presence and customer engagement.',
};

export default function RetailPage() {
  const features = [
    'Brand experience design',
    'Customer journey mapping',
    'Product display optimization',
    'Visual merchandising integration',
    'Traffic flow and space efficiency',
    'Lighting and ambiance creation',
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary/10 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Retail Interior Design</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Create captivating retail spaces that elevate brand presence and drive customer engagement and sales.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">Retail Spaces That Sell</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Every retail space tells a story. We design environments that captivate customers, showcase your products, and drive sales through strategic design.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  From boutiques and flagship stores to shopping centers and pop-up spaces, we create retail experiences that resonate.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium"
                >
                  Start Your Project <ArrowRight size={20} />
                </Link>
              </div>
              <div className="bg-linear-to-br from-primary/20 to-primary/5 rounded-2xl border border-primary/20 h-96 flex items-center justify-center">
                <img src="/logo.png" alt="Retail Design" className="w-2/3 h-auto opacity-80" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle className="text-primary shrink-0 mt-1" size={24} />
                  <p className="text-lg text-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Elevate Your Retail Presence</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let's design a retail space that showcases your brand and drives customer engagement.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-semibold text-lg gap-2"
            >
              Schedule a Consultation <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
