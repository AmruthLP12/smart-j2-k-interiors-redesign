import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Healthcare Interior Design | SmartJ2K Interiors',
  description: 'Healing environment design that prioritizes patient comfort and wellness.',
};

export default function HealthcarePage() {
  const features = [
    'Patient-centered design approach',
    'Infection control and hygiene considerations',
    'Wayfinding and accessibility design',
    'Staff efficiency and workflow optimization',
    'Calming color palettes and lighting',
    'Evidence-based design principles',
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary/10 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Healthcare Interior Design</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Design healing environments that prioritize patient comfort, staff efficiency, and wellness outcomes.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">Healing Environments</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Create spaces that support healing and recovery. Our healthcare design expertise focuses on patient outcomes while optimizing operational efficiency.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  From hospitals and clinics to wellness centers and therapy spaces, we design environments that care.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium"
                >
                  Start Your Project <ArrowRight size={20} />
                </Link>
              </div>
              <div className="bg-linear-to-br from-primary/20 to-primary/5 rounded-2xl border border-primary/20 h-96 flex items-center justify-center">
                <img src="/logo.png" alt="Healthcare Design" className="w-2/3 h-auto opacity-80" />
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
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Design for Healing</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let's create a healthcare space that supports positive outcomes for patients and staff alike.
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
