'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQsPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: 'What is the process for starting a project with SmartJ2K Interiors?',
      answer:
        'Our process begins with an initial consultation where we discuss your vision, requirements, and budget. We then create design concepts, develop 3D visualizations, and finally manage the implementation phase. Each step involves your feedback and approval.',
    },
    {
      id: 2,
      question: 'How long does a typical interior design project take?',
      answer:
        'Project timelines vary based on scope and complexity. Residential projects typically take 2-4 months, while commercial projects can range from 3-8 months. We provide a detailed timeline during the discovery phase.',
    },
    {
      id: 3,
      question: 'What services are included in your design packages?',
      answer:
        'Our services include space planning, color consultation, furniture selection, 3D visualizations, sourcing, and project management. We offer different package levels to suit various budgets and project needs.',
    },
    {
      id: 4,
      question: 'Do you work with clients remotely?',
      answer:
        'Yes, we work with clients both locally and remotely. We use virtual consultations, digital mood boards, and 3D visualizations to collaborate effectively regardless of location.',
    },
    {
      id: 5,
      question: 'Can you work within a specific budget?',
      answer:
        'Absolutely. We believe great design should be accessible to everyone. During our initial consultation, we discuss your budget and create design solutions that maximize value while maintaining quality.',
    },
    {
      id: 6,
      question: 'Do you offer sustainability and eco-friendly design options?',
      answer:
        'Yes, we are committed to sustainable design practices. We source eco-friendly materials, recommend energy-efficient solutions, and design spaces that minimize environmental impact.',
    },
    {
      id: 7,
      question: 'What happens after the design is completed?',
      answer:
        'We provide comprehensive project management services including contractor coordination, material sourcing, quality control, and site supervision. We ensure your project is delivered on time and within budget.',
    },
    {
      id: 8,
      question: 'Can you redesign an existing space?',
      answer:
        'Yes, we specialize in both new design and redesign projects. We can refresh your existing space by updating certain elements or provide a complete transformation.',
    },
  ];

  const toggleOpen = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary/10 to-transparent">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our services and design process.
            </p>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition"
                >
                  <button
                    onClick={() => toggleOpen(faq.id)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-secondary/30 transition"
                  >
                    <h3 className="text-lg font-semibold text-foreground pr-4">{faq.question}</h3>
                    <ChevronDown
                      className={`text-primary shrink-0 transition-transform ${
                        openId === faq.id ? 'rotate-180' : ''
                      }`}
                      size={24}
                    />
                  </button>
                  {openId === faq.id && (
                    <div className="px-6 pb-4 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Still Have Questions?</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Get in touch with our team. We're here to help and answer any questions you might have.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-semibold text-lg"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
