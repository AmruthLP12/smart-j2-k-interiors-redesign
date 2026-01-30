'use client';

import { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = '919876543210'; // Replace with actual number
  const whatsappMessage = 'Hi! I would like to know more about SmartJ2K Interiors services.';
  const phoneNumber = '+919876543210';

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating buttons menu */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 flex flex-col gap-3 animate-in fade-in zoom-in-75 duration-200">
          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-colors duration-200 group"
            aria-label="Contact us on WhatsApp"
          >
            <MessageCircle size={20} />
            <span className="text-sm font-medium hidden sm:inline">WhatsApp</span>
          </a>

          {/* Phone Call Button */}
          <button
            onClick={handlePhoneCall}
            className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg transition-colors duration-200"
            aria-label="Call us"
          >
            <Phone size={20} />
            <span className="text-sm font-medium hidden sm:inline">Call</span>
          </button>
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Open contact menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <div className="flex gap-1">
            <MessageCircle size={20} />
            <Phone size={20} />
          </div>
        )}
      </button>
    </div>
  );
}
