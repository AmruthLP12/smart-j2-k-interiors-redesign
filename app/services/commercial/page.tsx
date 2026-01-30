import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Commercial Interior Design | SmartJ2K Interiors',
  description: 'Professional commercial interior design services that enhance productivity and reflect your brand identity.',
};

export default function CommercialPage() {
  const features = [
    'Office space planning and workflow optimization',
    'Brand identity integration into design',
    'Workspace flexibility and adaptability',
    'Sustainable and eco-friendly design',
    'Technology integration solutions',
    'Employee wellness space design',
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We analyze your business needs, company culture, and strategic goals.',
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'We develop a comprehensive design strategy aligned with your business objectives.',
    },
    {
      step: '03',
      title: 'Design',
      description: 'Our team creates detailed designs that balance functionality with aesthetics.',
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'We manage the complete rollout ensuring minimal disruption to your operations.',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary/10 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Commercial Interior Design</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Design inspiring workspaces that enhance productivity and reflect your brand identity with our expert commercial interior design services.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">Workspace Design That Works</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Your commercial space is an extension of your brand. We create work environments that inspire creativity, foster collaboration, and enhance productivity while maintaining your corporate identity.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  From corporate offices to startup spaces, retail environments to hospitality venues, we deliver designs that make a lasting impression.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium"
                >
                  Start Your Project <ArrowRight size={20} />
                </Link>
              </div>
              <div className="bg-linear-to-br from-primary/20 to-primary/5 rounded-2xl border border-primary/20 h-96 flex items-center justify-center">
                <img src="/logo.png" alt="Commercial Design" className="w-2/3 h-auto opacity-80" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
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

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Design Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-8">
                  <div className="text-4xl font-bold text-primary mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Transform Your Workspace Today</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let's create a commercial space that empowers your team and impresses your clients.
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
