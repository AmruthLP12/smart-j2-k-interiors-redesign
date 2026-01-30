import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';
import { Award, Users, Target, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | SmartJ2K Interiors',
  description: 'Learn about SmartJ2K Interiors and our mission to create extraordinary interior design experiences.',
};

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Client-Focused',
      description: 'Your vision is our priority. We listen, understand, and deliver designs that exceed expectations.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We blend timeless design principles with contemporary trends to create forward-thinking spaces.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of craftsmanship and attention to detail in every project.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with clients, contractors, and partners to bring visions to life seamlessly.',
    },
  ];

  const team = [
    {
      name: 'Priya Sharma',
      role: 'Founder & Lead Designer',
      bio: 'With 15+ years of design experience, Priya leads our creative vision.',
    },
    {
      name: 'Arjun Mehta',
      role: 'Design Director',
      bio: 'Arjun specializes in commercial and hospitality design excellence.',
    },
    {
      name: 'Neha Gupta',
      role: 'Project Manager',
      bio: 'Neha ensures seamless execution and client satisfaction on every project.',
    },
    {
      name: 'Vikram Singh',
      role: 'Design Consultant',
      bio: 'Vikram brings expertise in sustainable and eco-friendly design solutions.',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary/10 to-transparent">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">About SmartJ2K Interiors</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are passionate about creating extraordinary interior spaces that inspire, comfort, and transform lives.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  SmartJ2K Interiors was founded on the belief that great interior design should be accessible to everyone. What started as a small design studio has grown into a full-service interior design firm serving clients across India.
                </p>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Our journey has been defined by our commitment to understanding our clients' needs and delivering designs that exceed expectations. Every project is an opportunity to create something meaningful.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, we continue to innovate and push the boundaries of interior design, creating spaces that are beautiful, functional, and transformative.
                </p>
              </div>
              <div className="bg-linear-to-br from-primary/20 to-primary/5 rounded-2xl border border-primary/20 h-96 flex items-center justify-center">
                <img src="/logo.png" alt="Our Story" className="w-2/3 h-auto opacity-80" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="bg-background border border-border rounded-xl p-8 text-center">
                    <Icon className="text-primary mx-auto mb-4" size={40} />
                    <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition">
                  <div className="h-48 bg-linear-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary/30">{member.name[0]}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-primary mb-2">500+</div>
                <p className="text-lg text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">15+</div>
                <p className="text-lg text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">100%</div>
                <p className="text-lg text-muted-foreground">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">50+</div>
                <p className="text-lg text-muted-foreground">Design Awards</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
