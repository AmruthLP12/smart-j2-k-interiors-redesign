'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import DeveloperCredit from "./DeveloperCredit";



export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img src="/logo.png" alt="SmartJ2K Interiors" className="h-10 w-auto mb-4" />
            <p className="text-muted-foreground text-sm">
              Transforming spaces with premium interior design solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/property-sales" className="text-muted-foreground hover:text-primary transition text-sm">
                  Property Sales
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary transition text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/residential" className="text-muted-foreground hover:text-primary transition text-sm">
                  Residential
                </Link>
              </li>
              <li>
                <Link href="/services/commercial" className="text-muted-foreground hover:text-primary transition text-sm">
                  Commercial
                </Link>
              </li>
              <li>
                <Link href="/services/hospitality" className="text-muted-foreground hover:text-primary transition text-sm">
                  Hospitality
                </Link>
              </li>
              <li>
                <Link href="/services/retail" className="text-muted-foreground hover:text-primary transition text-sm">
                  Retail
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="text-primary mt-1" size={16} />
                <span className="text-muted-foreground text-sm">+91 9845539527 | +91 9989693289</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="text-primary mt-1" size={16} />
                <span className="text-muted-foreground text-sm">SmartJ2Kinteriors@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="text-primary mt-1" size={50} />
                <span className="text-muted-foreground text-sm">Ground Floor, Gopallapa Complex, Ajjagondahalli Road,Valepura, Beside ISKCON Whitefield, Bangalore - 560087</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Border and Copyright */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground text-sm">
            &copy; {currentYear} SmartJ2K Interiors. All rights reserved.
          </p>
          <DeveloperCredit />
        </div>
      </div>
    </footer>
  );
}
