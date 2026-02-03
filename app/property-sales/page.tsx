"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PropertySalesPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const properties = [
    {
      id: 1,
      name: "Luxury Residential Complex",
      location: "Bangalore, Whitefield",
      price: "₹95 Lakhs - ₹2.5 Cr",
      bedrooms: "2-5",
      bathrooms: "2-4",
      area: "1200-4000 sqft",
      image: "/images/sales/sales1.jpeg",
      type: "residential",
      description:
        "Premium 5-story residential complex with modern architecture, spacious balconies, and lush green surroundings.",
      features: [
        "Modern Architecture",
        "Balconies",
        "Green Spaces",
        "Parking",
        "Security",
      ],
    },
    {
      id: 2,
      name: "Contemporary Mixed-Use Building",
      location: "Bangalore, East Zone",
      price: "₹1.2 Cr - ₹3 Cr",
      bedrooms: "2-4",
      bathrooms: "2-3",
      area: "1400-3500 sqft",
      image: "/images/sales/sales2.jpeg",
      type: "residential",
      description:
        "Contemporary 4-story building combining residential units with ground-floor commercial space. Modern design with premium finishes.",
      features: [
        "Ground Floor Commercial",
        "Modern Finishes",
        "Retail Space",
        "Residential Units",
        "Prime Location",
      ],
    },
    {
      id: 3,
      name: "Modern Urban Apartment",
      location: "Bangalore, Central Zone",
      price: "₹80 Lakhs - ₹2 Cr",
      bedrooms: "1-4",
      bathrooms: "1-3",
      area: "800-3000 sqft",
      image: "/images/sales/sales3.jpeg",
      type: "apartment",
      description:
        "Stylish 4-story apartment with unique architectural design, combining wood and stone elements for contemporary elegance.",
      features: [
        "Unique Design",
        "Parking",
        "Security",
        "Modern Amenities",
        "Excellent Connectivity",
      ],
    },
    {
      id: 4,
      name: "Under-Construction Premium Project",
      location: "Bangalore, North Zone",
      price: "₹70 Lakhs - ₹1.8 Cr",
      bedrooms: "2-5",
      bathrooms: "2-4",
      area: "1100-3800 sqft",
      image: "/images/sales/sales4.jpeg",
      type: "under-construction",
      description:
        "Upcoming premium residential project with modern structural design. Investment opportunity with excellent ROI potential.",
      features: [
        "Pre-Launch Pricing",
        "Modern Structure",
        "Payment Plans",
        "Investment Opportunity",
        "Future Ready",
      ],
    },
    {
      id: 5,
      name: "Elegant Contemporary Residence",
      location: "Bangalore, South Zone",
      price: "₹90 Lakhs - ₹2.2 Cr",
      bedrooms: "2-4",
      bathrooms: "2-3",
      area: "1300-3600 sqft",
      image: "/images/sales/sales5.jpeg",
      type: "residential",
      description:
        "Elegantly designed 5-story residential building with contemporary aesthetics, spacious units, and modern amenities.",
      features: [
        "Contemporary Design",
        "Spacious Units",
        "Balconies",
        "Parking Spaces",
        "Community Spaces",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      title: "Home Owner",
      text: "SmartJ2K Interiors not only designed our home beautifully but also helped us find the perfect property. Their expertise in both sales and interiors is unmatched!",
    },
    {
      name: "Priya Sharma",
      title: "Property Investor",
      text: "The team provided excellent guidance throughout the property investment process. Their knowledge of Bangalore market is impressive.",
    },
    {
      name: "Amit Patel",
      title: "Young Professional",
      text: "From choosing the right property to designing my interiors, SmartJ2K Interiors provided end-to-end support. Highly recommended!",
    },
  ];

  const filteredProperties =
    selectedFilter === "all"
      ? properties
      : properties.filter((p) => p.type === selectedFilter);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary/10 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-primary font-semibold mb-2">PROPERTY SALES</p>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
                Find Your Dream Property
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Discover premium residential and commercial properties in
                Bangalore with world-class interiors
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                At SmartJ2K Interiors, we offer comprehensive property solutions
                combining real estate sales with premium interior design
                services. Whether you are looking for a perfect home or a smart
                investment, we have curated properties designed to exceed your
                expectations.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Why Choose SmartJ2K for Property Sales
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background border border-border rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  Expert Curation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Handpicked properties meeting our strict quality standards for
                  design and construction excellence.
                </p>
              </div>
              <div className="bg-background border border-border rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  Integrated Services
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Seamless combination of property sales with professional
                  interior design and construction services.
                </p>
              </div>
              <div className="bg-background border border-border rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  Market Expertise
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deep knowledge of Bangalore's real estate market with access
                  to premium properties across all zones.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { label: "All Properties", value: "all" },
                { label: "Residential", value: "residential" },
                { label: "Apartments", value: "apartment" },
                { label: "Under Construction", value: "under-construction" },
              ].map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setSelectedFilter(filter.value)}
                  className={`px-6 py-2 rounded-lg font-medium transition ${
                    selectedFilter === filter.value
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-foreground hover:border-primary"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Properties Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredProperties.map((property) => (
                <div
                  key={property.id}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition group"
                >
                  {/* Image Container */}
                  <div className="relative h-64 w-full overflow-hidden bg-background">
                    <Image
                      src={property.image}
                      alt={property.name}
                      width={1200}
                      height={1200}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold">
                      {property.type === "under-construction"
                        ? "Pre-Launch"
                        : "Available"}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {property.name}
                    </h3>
                    <div className="flex items-center gap-2 text-primary mb-4">
                      <MapPin size={18} />
                      <p className="text-sm">{property.location}</p>
                    </div>

                    <div className="mb-6 pb-6 border-b border-border">
                      <p className="text-3xl font-bold text-primary mb-2">
                        {property.price}
                      </p>
                      <p className="text-muted-foreground">
                        {property.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-lg font-bold text-foreground">
                          {property.bedrooms}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Bedrooms
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-foreground">
                          {property.bathrooms}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Bathrooms
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-foreground">
                          {property.area}
                        </div>
                        <p className="text-xs text-muted-foreground">Area</p>
                      </div>
                    </div>

                    {/* Property Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {property.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link
                      href="/contact"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium"
                    >
                      Inquire Now <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Investment Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Prime Location Selection
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Properties strategically located in high-growth areas of
                    Bangalore with excellent connectivity and appreciation
                    potential.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Modern Architecture
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Contemporary designs that appeal to modern homeowners and
                    ensure strong rental returns and resale value.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Integrated Interior Design
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Optional premium interior design services to maximize
                    property value and create move-in-ready homes.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Expert Guidance
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Personalized consultation on property selection, investment
                    potential, and interior customization options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-6 max-w-3xl mx-auto">
              {[
                {
                  q: "What are the payment options available?",
                  a: "We offer flexible payment plans including 20% upfront, construction-linked disbursement, and possession payment options for most projects.",
                },
                {
                  q: "Can I customize the interior design?",
                  a: "Yes! We offer comprehensive interior design services. You can choose to buy the property as-is or opt for our premium interior design and execution services.",
                },
                {
                  q: "What is the expected appreciation?",
                  a: "Based on market trends, properties in our portfolio typically appreciate 8-12% annually depending on location and market conditions.",
                },
                {
                  q: "Are there financing options available?",
                  a: "Yes, we can connect you with leading financial institutions for home loans with competitive rates and minimal documentation.",
                },
                {
                  q: "What is the resale potential?",
                  a: "Our properties are located in high-demand areas with strong resale potential. Modern architecture and premium finishes ensure excellent market value retention.",
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-xl p-8"
                >
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-background border border-border rounded-xl p-8"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-5 h-5 bg-primary rounded-full flex items-center justify-center"
                      >
                        <span className="text-primary-foreground text-xs font-bold">
                          ★
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="text-foreground font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-primary">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Invest in Your Future?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Schedule a consultation with our expert team to explore properties
              that match your needs and investment goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-semibold text-lg gap-2"
            >
              Schedule Free Consultation <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
