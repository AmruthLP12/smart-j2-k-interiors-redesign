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
  const expertise = [
    'Premium Villas',
    'Modern Residential Complexes',
    'Boutique Resorts',
    'Ultra-Luxury Apartments',
    'Healthcare Spaces & Hospitals',
    'Hotels, Cafés & Fine-Dining Restaurants',
  ];

  const features = [
    'Master bedroom & guest room design',
    'Kids room styling and functionality',
    'Living and dining area layouts',
    'Kitchen and bathroom customization',
    'Lighting and ambiance creation',
    'Material selection and finishes',
  ];

  const faqs = [
    {
      question: 'How long will it take to complete my home interiors?',
      answer: 'The timeline depends on the size of your home and the scope of work. On average, a 2 or 3 BHK project takes 45 to 60 days from design finalization to handover. We provide a detailed project schedule upfront to ensure transparency.',
    },
    {
      question: 'Can I choose my own materials and finishes?',
      answer: 'Absolutely! We offer a curated selection of premium materials, but you\'re free to select your preferred colors, finishes, and brands. Our designers will guide you with samples and expert recommendations throughout the selection process.',
    },
    {
      question: 'Do you handle everything, or do I need to coordinate with other vendors?',
      answer: 'We provide end-to-end interior design and execution services, so you won\'t have to coordinate with multiple vendors. From carpentry and electrical to painting, plumbing, and decor—we manage everything in-house.',
    },
    {
      question: 'Will you provide 3D designs before execution?',
      answer: 'Yes, we provide detailed 2D layouts and 3D visualizations for all major spaces. This helps you clearly understand the final look and feel before the project begins.',
    },
  ];

  const testimonials = [
    {
      name: 'Homeowner - Whitefield',
      text: 'We approached SmartJ2K Interiors to design our 3BHK apartment in Whitefield. The team was professional, patient, and incredibly creative. From the color palette to the space-saving wardrobes and modular kitchen—they nailed it. It really feels like home now!',
    },
    {
      name: 'Homeowner - Bangalore',
      text: 'What impressed us the most was the team\'s commitment to timelines. We got our interiors done in under 60 days, and the quality exceeded our expectations. The finishes, detailing, and furniture layout are spot on.',
    },
    {
      name: 'Villa Owner - Bangalore',
      text: 'We had a very specific aesthetic in mind—minimal yet warm. The SmartJ2K Interiors designers totally got our vibe. They maximized every corner without clutter. The lighting and textures they used gave our villa a classy, elegant look.',
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
              <p className="text-primary font-semibold mb-2">HOME INTERIORS</p>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">From Dreams to Design,<br />From Vision to Reality</h1>
              <p className="text-xl text-muted-foreground mb-6">Best Interior Designers in Bangalore</p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                At SmartJ2K Interiors, we believe every space has a story to tell—and we're here to design that story with elegance and precision. Our expert team of interior designers takes the time to deeply understand each client's preferences, lifestyle, and functional needs. From material selection and color palettes to lighting, furniture, plumbing, and accessories, we meticulously curate every detail to reflect your vision.
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
            <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Our Interior Design Expertise Includes</h2>
            <p className="text-center text-muted-foreground mb-12">With a blend of creativity and craftsmanship, we bring together luxury, comfort, and functionality to design spaces that feel as good as they look.</p>
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
                <h2 className="text-4xl font-bold text-foreground mb-6">Transforming Spaces Into Elegant Living Experiences</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  At SmartJ2K Interiors, we believe your home should reflect who you are—your dreams, your personality, and your lifestyle. That's why we don't just design interiors—we craft deeply personal spaces that bring comfort, beauty, and functionality together in perfect harmony.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Whether you're moving into a new home or revamping your current space, our expert designers are here to turn your vision into a reality. We create cohesive, luxurious interiors that balance timeless aesthetics with modern utility.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium"
                >
                  Book Appointment <ArrowRight size={20} />
                </Link>
              </div>
              <div className="bg-linear-to-br from-primary/20 to-primary/5 rounded-2xl border border-primary/20 h-96 flex items-center justify-center">
                <img src="/logo.png" alt="Residential Design" className="w-2/3 h-auto opacity-80" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-center">We Provide End-to-End Home Interior Design</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">From cozy master bedrooms to stylish guest rooms and vibrant kids' rooms, we bring comfort, style, and personality into every corner.</p>
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
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-background border border-border rounded-xl p-8">
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                  <p className="text-foreground font-semibold">{testimonial.name}</p>
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
