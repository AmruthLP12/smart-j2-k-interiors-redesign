import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Construction Services | SmartJ2K Interiors',
  description: 'Professional construction services with precision, quality, and excellence. Best construction company in Bangalore.',
};

export default function ConstructionPage() {
  const expertise = [
    'Residential Buildings',
    'Commercial Complexes',
    'Industrial Facilities',
    'Institutional Buildings',
    'Infrastructure Projects',
    'Renovations & Extensions',
  ];

  const features = [
    'Solid foundations and structure',
    'Quality MEP (Mechanical, Electrical, Plumbing)',
    'Flawless finishing work',
    'Safety and compliance management',
    'Project timeline adherence',
    'Quality control at every stage',
  ];

  const faqs = [
    {
      question: 'What construction services do you provide?',
      answer: 'We cover end-to-end construction including foundation work, structural framing, finishing, MEP (Mechanical, Electrical, Plumbing), and landscaping.',
    },
    {
      question: 'How do you ensure project timelines?',
      answer: 'Through careful planning, resource management, and regular progress monitoring, we keep projects on track.',
    },
    {
      question: 'Can I visit the site during construction?',
      answer: 'Yes, client visits are encouraged and coordinated for safety.',
    },
    {
      question: 'What safety measures do you follow?',
      answer: 'We strictly adhere to all safety regulations and conduct regular site audits.',
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
              <p className="text-primary font-semibold mb-2">CONSTRUCTIONS</p>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Building Foundations<br />For Your Vision with Precision and Integrity</h1>
              <p className="text-xl text-muted-foreground mb-6">Best Construction Company in Bangalore</p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                At SmartJ2K Interiors, construction is the backbone of everything we do. Our construction services combine technical expertise, quality materials, and project management excellence to bring architectural designs to life. From residential homes to commercial complexes, our skilled teams oversee every phase of construction with meticulous attention to detail.
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
            <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Our Construction Expertise Includes</h2>
            <p className="text-center text-muted-foreground mb-12">Safety, transparency, and communication are core to our approach. We employ cutting-edge technology and sustainable building practices.</p>
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
                <h2 className="text-4xl font-bold text-foreground mb-6">Turning Blueprints Into Reality, Seamlessly</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Whether you're breaking ground on a new project or need an expert construction partner for your ongoing developments, SmartJ2K Interiors is committed to excellence. Our project managers ensure smooth coordination across all trades, constant quality checks, and timely delivery.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our transparent communication keeps you informed at every stage, with no compromises on quality or safety standards.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium"
                >
                  Book Appointment <ArrowRight size={20} />
                </Link>
              </div>
              <div className="bg-linear-to-br from-primary/20 to-primary/5 rounded-2xl border border-primary/20 h-96 flex items-center justify-center">
                <img src="/logo.png" alt="Construction Services" className="w-2/3 h-auto opacity-80" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-center">We Provide End-to-End Construction Services</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">From solid foundations to flawless finishes and everything in between, we build with precision, strength, and care to bring your vision to life.</p>
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
                  "SmartJ2K Interiors's construction team delivered our residential project with outstanding quality and professionalism. Their attention to detail and commitment to deadlines was impressive."
                </p>
                <p className="text-foreground font-semibold">Homeowner - Bangalore</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Ready to Start Your Construction Project?</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let's build something exceptional together with quality, safety, and excellence.
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
