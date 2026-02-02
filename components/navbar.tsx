'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    { name: 'Residential', href: '/services/residential' },
    { name: 'Commercial Interiors', href: '/services/commercial' },
    { name: 'Architecture', href: '/services/architecture' },
    { name: 'Construction', href: '/services/construction' },
    { name: "Sales", href: "/services/sales" },
    { name: 'Hospitality', href: '/services/hospitality' },
    { name: 'Healthcare', href: '/services/healthcare' },
    { name: 'Retail', href: '/services/retail' },
    { name: 'Educational', href: '/services/educational' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="SmartJ2K Interiors" className="h-12 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition">
              Home
            </Link>
            <div className="group relative">
              <button className="text-foreground hover:text-primary transition">
                Services
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-2 text-foreground hover:text-primary hover:bg-secondary/50 first:rounded-t-lg last:rounded-b-lg transition"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/about" className="text-foreground hover:text-primary transition">
              About
            </Link>
            <Link href="/gallery" className="text-foreground hover:text-primary transition">
              Gallery
            </Link>
            <Link href="/faqs" className="text-foreground hover:text-primary transition">
              FAQs
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-2 text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <div className="px-4 py-2">
              <p className="text-foreground font-medium mb-2">Services</p>
              <div className="space-y-1 pl-4">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block text-foreground hover:text-primary text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/about"
              className="block px-4 py-2 text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/gallery"
              className="block px-4 py-2 text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/blog"
              className="block px-4 py-2 text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/faqs"
              className="block px-4 py-2 text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              FAQs
            </Link>
            <Link
              href="/contact"
              className="block mx-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-center hover:opacity-90"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
