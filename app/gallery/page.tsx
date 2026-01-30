"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { Gallery, filterCategories } from "@/data/gallery";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredGallery =
    activeFilter === "all"
      ? Gallery
      : Gallery.filter((gallery) => gallery.category === activeFilter);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary/10 to-transparent">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our collection of award-winning interior design projects
              across various sectors.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filterCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-2 rounded-lg font-medium transition capitalize ${
                    activeFilter === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-foreground hover:border-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGallery.map((gallery) => (
                <div
                  key={gallery.id}
                  className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition cursor-pointer"
                >
                  <div className="h-72 bg-linear-to-br from-primary/30 to-primary/10 flex items-center justify-center group-hover:from-primary/40 group-hover:to-primary/20 transition relative overflow-hidden">
                    <img src={gallery.src} alt={gallery.title} />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition">
                        <div className="text-center">
                          <p className="text-sm font-medium text-primary-foreground/70">
                            {gallery.category}
                          </p>
                          <p className="text-sm text-primary-foreground">
                            {gallery.year}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition">
                      {gallery.title}
                    </h3>
                    <p className="text-sm text-muted-foreground capitalize mt-1">
                      {gallery.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Inspired by Our Work?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let's discuss how we can bring your interior design vision to
              life.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-semibold text-lg"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
