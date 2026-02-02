"use client";

import React from "react";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary/10 to-transparent">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Let's discuss your interior design project. Reach out to our team
              today.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Contact Info Cards */}
              <div className="bg-card border border-border rounded-xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Phone</h3>
                </div>
                <p className="text-muted-foreground mb-2">
                  Call us during business hours
                </p>
                <p className="text-lg text-primary font-semibold">
                  +91 9845539527
                </p>
                <p className="text-lg text-primary font-semibold">
                  +91 9989693289
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Email</h3>
                </div>
                <p className="text-muted-foreground mb-2">
                  We'll respond within 24 hours
                </p>
                <p className="text-lg text-primary font-semibold">
                  SmartJ2Kinteriors@gmail.com
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Location
                  </h3>
                </div>
                <p className="text-muted-foreground mb-2">Visit our office</p>
                <p className="text-lg text-primary font-semibold">
                  Ground Floor, Gopallapa Complex, Ajjagondahalli Road,Valepura,
                  Beside ISKCON Whitefield, Bangalore - 560087
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Send us a Message
                </h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-primary/10 border border-primary rounded-lg">
                    <p className="text-primary font-medium">
                      Thank you for your message! We'll get back to you soon.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition"
                        placeholder="Your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition"
                        placeholder="Your phone"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition"
                      >
                        <option value="">Select a service</option>
                        <option value="residential">Residential Design</option>
                        <option value="commercial">Commercial Design</option>
                        <option value="hospitality">Hospitality Design</option>
                        <option value="healthcare">Healthcare Design</option>
                        <option value="retail">Retail Design</option>
                        <option value="educational">Educational Design</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-semibold flex items-center justify-center gap-2"
                  >
                    Send Message <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Find Us
            </h2>

            <div className="bg-linear-to-br from-primary/20 to-primary/5 border border-primary/20 rounded-xl overflow-hidden h-96">
              <iframe
                title="SmartJ2K Interiors Location"
                src="https://www.google.com/maps?q=Ground%20Floor,%20Gopallapa%20Complex,%20Ajjagondahalli%20Road,%20Valepura,%20Beside%20ISKCON%20Whitefield,%20Bangalore%20560087&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="text-center mt-4">
              <p className="text-lg text-muted-foreground font-medium">
                SmartJ2K Interiors
              </p>
              <p className="text-muted-foreground">
                Ground Floor, Gopallapa Complex, Ajjagondahalli Road, Valepura,
                Beside ISKCON Whitefield, Bangalore - 560087
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
