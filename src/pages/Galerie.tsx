import { useState } from "react";
import { X } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import nancyImage from "@/assets/nancy.jpg";
import winkelImage from "@/assets/winkel.jpg";
import heroFlowers from "@/assets/hero-flowers.jpg";
import bouquetImage from "@/assets/bouquet-1.jpg";
import trouwboeket from "@/assets/trouwboeket.jpg";
import rouwstuk from "@/assets/rouwstuk.jpg";
import kerststuk from "@/assets/kerststuk.jpg";

const galleryImages = [
  { src: heroFlowers, alt: "Prachtig rozenboeket", category: "Boeketten" },
  { src: winkelImage, alt: "De bloemenzaak Madeliefste", category: "Winkel" },
  { src: bouquetImage, alt: "Seizoensboeket met tulpen", category: "Boeketten" },
  { src: trouwboeket, alt: "Romantisch bruidsboeket", category: "Trouwerij" },
  { src: nancyImage, alt: "Nancy aan het werk", category: "Winkel" },
  { src: rouwstuk, alt: "Rouwstuk met lelies", category: "Rouwstukken" },
  { src: kerststuk, alt: "Feestelijk kerststuk", category: "Seizoen" },
];

const categories = ["Alles", "Boeketten", "Winkel", "Trouwerij", "Rouwstukken", "Seizoen"];

export default function Galerie() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("Alles");

  const filteredImages = activeCategory === "Alles" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-medium text-lg mb-2 block animate-fade-in">Impressie</span>
            <h1 className="heading-xl mb-6 animate-fade-in-up">Galerie</h1>
            <p className="body-lg text-muted-foreground animate-fade-in-delay-1">
              Een kijkje in onze winkel en ons werk. Van dagverse boeketten tot bijzondere creaties.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image.src)}
                className="group cursor-pointer overflow-hidden rounded-xl shadow-soft hover-lift"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="image-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="bg-card p-4">
                  <p className="font-medium text-foreground">{image.alt}</p>
                  <p className="text-sm text-muted-foreground">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Vergrote afbeelding"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-hover animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
}
