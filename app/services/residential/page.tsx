import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Residential Interior Design | SmartJ2K Interiors',
  description: 'Transform your home with our premium residential interior design services. Create your dream space with expert design solutions.',
};

export default function ResidentialPage() {
  const features = [
    'Custom space planning and layout optimization',
    'Luxury material selection and sourcing',
    'Color consultation and mood creation',
    'Furniture design and curation',
    '3D visualization and renderings',
    'Project management and execution',
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We meet with you to understand your vision, lifestyle, and preferences.',
    },
    {
      step: '02',
      title: 'Concept Development',
      description: 'Our team creates initial design concepts with mood boards and preliminary sketches.',
    },
    {
      step: '03',
      title: '3D Visualization',
      description: 'We present detailed 3D renderings to help you visualize the final design.',
    },
    {
      step: '04',
      title: 'Implementation',
      description: 'Our project team manages all sourcing, contractors, and installation details.',
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
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Residential Interior Design</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Create your dream home with bespoke interior design solutions that reflect your personality and enhance your lifestyle.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">Design Excellence for Your Home</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Your home is more than just a place to live—it's a reflection of who you are. At SmartJ2K Interiors, we specialize in creating residential spaces that are both beautiful and functional, tailored to your unique lifestyle and preferences.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  From apartments and villas to penthouses and luxury estates, we bring creativity, expertise, and attention to detail to every project.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium"
                >
                  Start Your Project <ArrowRight size={20} />
                </Link>
              </div>
              <div className="bg-linear-to-br from-primary/20 to-primary/5 rounded-2xl border border-primary/20 h-96 flex items-center justify-center">
                <img src="/logo.png" alt="Residential Design" className="w-2/3 h-auto opacity-80" />
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
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Ready to Create Your Dream Home?</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let's work together to transform your residential space into something truly extraordinary.
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
