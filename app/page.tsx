import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const services = [
    {
      title: 'Residential',
      description: 'Create your dream home with bespoke interior solutions tailored to your lifestyle.',
      icon: '🏠',
      href: '/services/residential',
    },
    {
      title: 'Commercial',
      description: 'Design inspiring workspaces that enhance productivity and reflect your brand identity.',
      icon: '🏢',
      href: '/services/commercial',
    },
    {
      title: 'Hospitality',
      description: 'Craft exceptional guest experiences with luxury hospitality design.',
      icon: '🏨',
      href: '/services/hospitality',
    },
    {
      title: 'Healthcare',
      description: 'Design healing environments that prioritize patient comfort and wellness.',
      icon: '🏥',
      href: '/services/healthcare',
    },
    {
      title: 'Retail',
      description: 'Create captivating retail spaces that elevate brand presence and customer engagement.',
      icon: '🛍️',
      href: '/services/retail',
    },
    {
      title: 'Educational',
      description: 'Design innovative learning environments that inspire creativity and collaboration.',
      icon: '🎓',
      href: '/services/educational',
    },
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern Urban Residence',
      category: 'Residential',
      image: '/images/gallery/Gallery3.jpg',
    },
    {
      id: 2,
      title: 'Corporate Office Design',
      category: 'Commercial',
      image: '/images/gallery/Gallery4.jpg',

    },
    {
      id: 3,
      title: 'Luxury Hotel Suite',
      category: 'Hospitality',
      image: '/images/gallery/Gallery5.jpg',

    },
    {
      id: 4,
      title: 'Medical Center Redesign',
      category: 'Healthcare',
      image: '/images/gallery/Gallery6.jpg',

    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="text-primary" size={20} />
                  <span className="text-primary font-medium">Premium Interior Design</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Transform Your Space Into Something Extraordinary
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  SmartJ2K Interiors specializes in creating sophisticated, functional, and beautiful spaces that reflect your vision and elevate your lifestyle.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium gap-2"
                  >
                    Get Started <ArrowRight size={20} />
                  </Link>
                  <Link
                    href="/gallery"
                    className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition font-medium gap-2"
                  >
                    View Portfolio
                  </Link>
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="w-full max-w-md h-96 bg-linear-to-br from-primary/20 to-primary/5 rounded-2xl border border-primary/20 flex items-center justify-center overflow-hidden">
                  <Image width={40} height={40} src="/images/gallery/Gallery2.jpg" alt="SmartJ2K Interiors" className="w-full h-full opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
              <p className="text-lg text-muted-foreground">Showcasing our finest interior design work</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-background rounded-xl overflow-hidden border border-border hover:border-primary transition group cursor-pointer"
                >
                  <div className="h-64 bg-linear-to-br from-primary/30 to-primary/10 flex items-center justify-center group-hover:from-primary/40 group-hover:to-primary/20 transition">
                    <Image height={40} width={40} src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full opacity-70 " />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-primary font-medium mb-2">{project.category}</p>
                    <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition font-medium"
              >
                View All Projects <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
              <p className="text-lg text-muted-foreground">Comprehensive interior design solutions for every need</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group bg-card border border-border rounded-xl p-8 hover:border-primary hover:bg-card/80 transition cursor-pointer"
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Ready to Transform Your Space?</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let's collaborate to create an interior design that perfectly matches your vision and lifestyle.
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
