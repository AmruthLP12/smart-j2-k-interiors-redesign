import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Architecture Design Services | SmartJ2K Interiors',
  description: 'Innovative architectural solutions that define spaces and lifestyles. Best architecture designers in Bangalore.',
};

export default function ArchitecturePage() {
  const expertise = [
    'Residential Architecture',
    'Commercial Architecture',
    'Institutional Buildings',
    'Resort & Hospitality Design',
    'Sustainable & Green Architecture',
    'Master Planning & Urban Design',
  ];

  const features = [
    'Innovative layouts and space planning',
    'Stunning façades and exterior design',
    'Harmonious interior spaces',
    'Sustainable building practices',
    'Energy-efficient designs',
    'Detailed construction drawings',
  ];

  const faqs = [
    {
      question: 'Do you offer sustainable design options?',
      answer: 'Yes, we incorporate green building principles and energy-efficient designs in all projects.',
    },
    {
      question: 'Can I be involved in the design process?',
      answer: 'Absolutely. We work closely with clients, integrating their feedback at each stage.',
    },
    {
      question: 'What software do you use for architectural designs?',
      answer: 'We use advanced CAD and BIM software to create precise and realistic designs.',
    },
    {
      question: 'Do you assist with regulatory approvals?',
      answer: 'Yes, we handle all necessary planning permissions and building regulations.',
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
              <p className="text-primary font-semibold mb-2">ARCHITECTURE</p>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Innovative Architectural Solutions<br />That Define Spaces and Lifestyles</h1>
              <p className="text-xl text-muted-foreground mb-6">Best Architecture Designers in Bangalore</p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                At SmartJ2K Interiors, architecture is where creativity meets functionality. Our architectural services blend visionary design with practical solutions tailored to your needs, site, and budget. Our architects focus on creating sustainable, aesthetic, and efficient buildings that harmonize with their surroundings and enhance occupants' experiences.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium"
              >
                Book Appointment <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Our Architectural Expertise Includes</h2>
            <p className="text-center text-muted-foreground mb-12">We specialize in a diverse range of projects including residential, commercial, institutional, and hospitality architecture—each designed with a unique approach.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {expertise.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-lg font-medium text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">Designing Spaces That Inspire and Endure</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Whether you're planning a custom home or a large-scale commercial complex, our architectural team guides you through every step—from initial concepts to detailed plans. We prioritize innovation, sustainability, and aesthetics to deliver designs that stand out and stand strong.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our collaborative approach ensures your vision is realized beautifully and functionally.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium"
                >
                  Book Appointment <ArrowRight size={20} />
                </Link>
              </div>
              <div className="bg-linear-to-br from-primary/20 to-primary/5 rounded-2xl border border-primary/20 h-96 flex items-center justify-center">
                <img src="/logo.png" alt="Architecture Design" className="w-2/3 h-auto opacity-80" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-center">We Provide End-to-End Architecture Services</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">From innovative layouts to stunning façades and harmonious spaces, we design buildings that balance beauty, functionality, and sustainability.</p>
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

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
            <div className="grid gap-6 max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">What Our Clients Say</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-background border border-border rounded-xl p-8">
                <p className="text-muted-foreground mb-6 leading-relaxed italic text-lg">
                  "The architects at SmartJ2K Interiors translated our dream home ideas into stunning, practical designs. Their professionalism and creativity were remarkable."
                </p>
                <p className="text-foreground font-semibold">Homeowner - Bangalore</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Ready to Build Your Vision?</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let's work together to create architectural designs that stand the test of time.
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
