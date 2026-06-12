import { useState, useCallback } from "react";
import { MapPin, Clock, Phone, Star, MessageCircle, Instagram, Truck, CreditCard, Camera, ShoppingBag, Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import MoederdagBanner from "@/components/MoederdagBanner";
import BoeketVanDeDagBanner from "@/components/BoeketVanDeDagBanner";
import winkelImage from "@/assets/winkel.jpg";
import nancyImage from "@/assets/nancy.jpg";
import boeketGemengdImage from "@/assets/boeket-gemengd.jpg";
import bloemstukImage from "@/assets/bloemstuk.jpg";
import trouwboeketImage from "@/assets/trouwboeket.jpg";
import aanbod1Image from "@/assets/aanbod-1.jpg";
import aanbod2Image from "@/assets/aanbod-2.jpg";
import aanbod3Image from "@/assets/aanbod-3.jpg";
import aanbod4Image from "@/assets/aanbod-4.jpg";
import aanbod5Image from "@/assets/aanbod-5.jpg";
import aanbod6Image from "@/assets/aanbod-6.jpg";
import aanbod7Image from "@/assets/aanbod-7.jpg";
import aanbod8Image from "@/assets/aanbod-8.jpg";
import hannySchaftLogo from "@/assets/hanny-schaft-logo.png";
import hannySchaftLogoFull from "@/assets/hanny-schaft-logo-full.png";
import hannySchaftPortrait from "@/assets/hanny-schaft-portrait.png";
import madeliefsteLogo from "@/assets/madeliefste-logo.png";
import bloemenOrnament from "@/assets/bloemen-ornament.png";
import bloemenOpeningstijden from "@/assets/bloemen-openingstijden.png";
import rozenhartImage from "@/assets/rozenhart.jpg";
import galerij1 from "@/assets/galerij-1.jpg";
import galerij2 from "@/assets/galerij-2.jpg";
import galerij3 from "@/assets/galerij-3.jpg";
import galerij4 from "@/assets/galerij-4.jpg";
import galerij5 from "@/assets/galerij-5.jpg";
import galerij6 from "@/assets/galerij-6.jpg";
import galerij7 from "@/assets/galerij-7.jpg";
import galerij8 from "@/assets/galerij-8.jpg";
import galerij9 from "@/assets/galerij-9.jpg";
import galerij10 from "@/assets/galerij-10.jpg";
import googleLogo from "@/assets/google-logo.png";
import googleReviewsImage from "@/assets/google-reviews.png";

const galerijImages = [
{ src: galerij1, alt: "Bloemstuk met clematis en rozen", tall: false },
{ src: galerij2, alt: "Herfststuk met rozen en bessen", tall: false },
{ src: galerij3, alt: "Kleurrijk bloemstuk op werktafel", tall: false },
{ src: galerij4, alt: "Rood rozenbloemstuk", tall: false },
{ src: galerij5, alt: "Bloemenkrans van rozen", tall: true },
{ src: galerij6, alt: "Hartvormig bloemstuk van rozen", tall: true },
{ src: galerij7, alt: "Hart van rozen in diverse kleuren", tall: false },
{ src: galerij8, alt: "Bloemstuk met clematis en limonium", tall: false },
{ src: galerij9, alt: "Weelderig bloemstuk met rozen", tall: false },
{ src: galerij10, alt: "Bloemenkrans met rozen en clematis", tall: true }];


const aanbodImages = [
aanbod1Image,
aanbod2Image,
aanbod3Image,
aanbod4Image,
aanbod5Image,
aanbod6Image,
aanbod7Image,
aanbod8Image];


// Preload Nancy image
const preloadNancyImage = new Image();
preloadNancyImage.src = nancyImage;
const reviews = [{
  name: "Brenda Smit",
  rating: 5,
  text: "Super gezellig buurtwinkeltje, altijd handig om een bloemetje voor iemand te kopen."
}, {
  name: "Ivonne Steffers",
  rating: 4,
  text: "Gezellige winkel en altijd een vriendelijk woord en vakkundig advies."
}, {
  name: "Ruby Jw",
  rating: 5,
  text: "Echt een fantastische bloemist! Fijne sfeer, hele aardige eigenaresse en prachtige bloemen en decoraties. Hier kom ik graag nog een keertje!"
}];
const GoogleLogo = ({
  className = "w-5 h-5"


}: {className?: string;}) => <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>;

const GoogleMapsLogo = ({
  className = "w-5 h-5"


}: {className?: string;}) => <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#4285F4" d="M12 0C7.31 0 3.5 3.81 3.5 8.5c0 5.56 7.1 13.89 7.41 14.26.31.38.88.38 1.19 0 .31-.37 7.41-8.7 7.41-14.26C19.5 3.81 15.69 0 12 0zm0 11.5c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
    <path fill="#34A853" d="M12 2c3.31 0 6 2.69 6 6.5 0 2.91-2.14 6.79-4.5 10.08V8.5c0-1.38-1.12-2.5-2.5-2.5S8.5 7.12 8.5 8.5v10.08C6.14 15.29 4 11.41 4 8.5 4 4.69 6.69 2 10 2h2z" opacity="0.3" />
  </svg>;

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const navLinks = [
  { href: "#aanbod", label: "Aanbod" },
  { href: "#bestellen", label: "Bezorging" },
  { href: "#specialiteiten", label: "Specialiteiten" },
  { href: "#hanny-schaft", label: "Hanny Schaft" },
  { href: "#openingstijden", label: "Openingstijden" },
  { href: "#contact", label: "Contact" }];


  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm shadow-soft border-b-4 border-gradient-to-r from-blush-dark to-blush" style={{ borderImage: 'linear-gradient(to right, hsl(350 45% 65%), hsl(350 45% 85%)) 1' }}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            <span className="font-heading text-xl font-semibold">
              <span className="text-primary">Madeliefste</span>{' '}
              <span className="text-accent">Bloemen</span>
            </span>
            
            {/* Nav links - desktop */}
            <nav className="hidden md:flex items-center gap-6 mx-auto">
              {navLinks.map((link) =>
            <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{link.label}</a>
            )}
            </nav>

            <div className="flex items-center gap-2 shrink-0">
              <Button variant="warm" size="sm" asChild className="hidden md:inline-flex">
                <Link to="/bestellen" className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4" />
                  <span>Bestel</span>
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild className="hidden md:inline-flex">
                <a href="tel:0235315809" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>Bel ons</span>
                </a>
              </Button>
              {/* Mobile menu toggle */}
              <button
              className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu">

                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen &&
      <div className="md:hidden bg-card border-t border-border">
            <nav className="container-custom py-4 flex flex-col gap-3">
              {navLinks.map((link) =>
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}>

                  {link.label}
                </a>
          )}
              <div className="border-t border-border pt-3 mt-1 flex flex-col gap-2">
                <Button variant="warm" size="sm" asChild className="w-full">
                  <Link to="/bestellen" className="flex items-center justify-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                    <ShoppingBag className="w-4 h-4" />
                    Bestel bloemen
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <a href="tel:0235315809" className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Bel ons – 023 531 58 09
                  </a>
                </Button>
              </div>
            </nav>
          </div>
      }
      </header>

      {/* Moederdag Banner - onder de header */}
      <div className="pt-16 md:pt-20">
        <MoederdagBanner />
      </div>

      {/* Hero Section - Full Screen */}
      <section className="relative h-screen flex items-end">
        <div className="absolute inset-0 z-0">
          <img src={winkelImage} alt="Bloemenzaak Madeliefste van buiten" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
        </div>
        
        <div className="container-custom relative z-10 text-center pb-12 md:pb-16">
          <h1 className="heading-xl animate-fade-in-up mb-3 text-primary-foreground">
            Madeliefste Bloemen
          </h1>
          <p className="body-lg animate-fade-in-delay-1 mb-8 text-primary-foreground/90 max-w-xl mx-auto">
            Jouw buurtbloemist in de Hoofmanstraat, Haarlem
          </p>
          
          {/* Main Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-delay-2 px-4 sm:px-0">
            <Button
            variant="warm"
            size="lg"
            className="w-full sm:w-auto"
            asChild>

              <Link to="/bestellen">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Bestel bloemen
              </Link>
            </Button>
            <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto bg-primary-foreground/20 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/30"
            onClick={() => document.getElementById('aanbod')?.scrollIntoView({ behavior: 'smooth' })}>

              Bekijk ons aanbod
            </Button>
          </div>
        </div>
      </section>

      <BoeketVanDeDagBanner />

      {/* Over Nancy Section */}
      <section className="section-padding section-gradient-warm">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg text-center mb-8">Maak kennis met Nancy</h2>
            <div className="bg-card overflow-hidden shadow-soft">
              <img src={nancyImage} alt="Nancy, eigenares van Madeliefste" className="w-full" />
              <div className="p-6 md:p-8 space-y-4 text-muted-foreground">
                <p>Sinds 1 mei 2008 is Nancy de trotse eigenaar van Madeliefste Bloemen in de Hoofmanstraat. Inmiddels al ruim 18 jaar een vertrouwd gezicht in de buurt,  en dat is niet voor niets. Haar passie voor bloemen en oog voor detail maken elke creatie bijzonder.



              </p>
                <p className="italic border-l-2 border-blush pl-4">"Ik wil mensen blij maken met verse bloemen voor een eerlijke prijs. Elke creatie maak ik met liefde en aandacht voor detail. Of het nu gaat om een klein boeketje voor op tafel of een groot bloemstuk voor een bijzondere gelegenheid, ik leg overal mijn hart in."



              </p>
                <p>
                  Nancy kiest bewust voor sterke combinaties en doordachte bloemkeuze.
                  Denk aan prachtige seizoensbloemen als amaryllis en tulpen in de winter, zonnebloemen en pioenrozen in de zomer, 
                  maar ook bruidsboeketten, rouwstukken en feestelijke kerststukken. Alles wordt met vakmanschap en zorg samengesteld, 
                  precies afgestemd op de wensen van de klant.
                </p>
                <p>De winkel voelt als thuiskomen, en dat komt niet alleen door de bloemen. Hond Kerel, de trouwe viervoeter van Nancy, verwelkomt iedere klant met een kwispel. Het maakt Madeliefste nóg persoonlijker.



              </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ons Aanbod & Galerij Section */}
      <section id="aanbod" className="section-padding section-gradient-sage">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-3">Ons Werk</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-lg mx-auto">Van verse seizoensbloemen tot bijzondere creaties, altijd met liefde samengesteld

        </p>
          {(() => {
          // Mix aanbod and galerij images alternately
          const allImages: {src: string;alt: string;}[] = [];
          const aanbodMapped = aanbodImages.map((src, i) => ({ src, alt: `Ons aanbod ${i + 1}` }));
          const galerijMapped = galerijImages.map((img) => ({ src: img.src, alt: img.alt }));
          const maxLen = Math.max(aanbodMapped.length, galerijMapped.length);
          for (let i = 0; i < maxLen; i++) {
            if (i < aanbodMapped.length) allImages.push(aanbodMapped[i]);
            if (i < galerijMapped.length) allImages.push(galerijMapped[i]);
          }

          // Dynamic grid: 9 photos + 1 CTA tile = 10 tiles, with 2 tall tiles
          // 4 cols × 3 rows = 12 cells; 8 normal (1 cell) + 2 tall (2 cells) + CTA (1 cell) = 12 ✓
          const tileShapes = [
            "row-span-2", // 0 - tall (col 1, rows 1-2)
            "",           // 1
            "",           // 2
            "",           // 3
            "",           // 4
            "row-span-2", // 5 - tall
            "",           // 6
            "",           // 7
            "",           // 8
          ];

          return (
            <>
                <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[180px] gap-3 max-w-5xl mx-auto">
                  {allImages.slice(0, 9).map((img, index) =>
                <button
                  key={index}
                  onClick={() => setLightboxIndex(index)}
                  className={`overflow-hidden cursor-pointer group relative shadow-soft hover:shadow-medium transition-shadow duration-500 ${tileShapes[index]}`}>

                      <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </button>
                )}

                  {/* CTA tile als laatste tegel */}
                  <button
                    onClick={() => setLightboxIndex(9)}
                    className="overflow-hidden cursor-pointer group relative shadow-medium hover:shadow-hover transition-all duration-500">
                    <img
                      src={allImages[9].src}
                      alt={allImages[9].alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/75 to-accent/80 group-hover:from-primary/90 group-hover:to-accent/90 transition-all duration-500" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground p-3 text-center">
                      <Camera className="w-7 h-7 md:w-8 md:h-8 mb-2 group-hover:scale-110 transition-transform duration-500" />
                      <span className="font-heading text-base md:text-lg font-semibold leading-tight">
                        Bekijk al ons werk
                      </span>
                      <span className="text-xs md:text-sm opacity-90 mt-1">
                        {allImages.length} foto's →
                      </span>
                    </div>
                  </button>
                </div>

                {/* Lightbox */}
                {lightboxIndex !== null &&
              <div className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center" onClick={() => setLightboxIndex(null)}>
                    <button
                  className="absolute top-4 right-4 text-primary-foreground/80 hover:text-primary-foreground z-10"
                  onClick={() => setLightboxIndex(null)}>

                      <X className="w-8 h-8" />
                    </button>
                    <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground/80 hover:text-primary-foreground z-10"
                  onClick={(e) => {e.stopPropagation();setLightboxIndex((lightboxIndex - 1 + allImages.length) % allImages.length);}}>

                      <ChevronLeft className="w-10 h-10" />
                    </button>
                    <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground/80 hover:text-primary-foreground z-10"
                  onClick={(e) => {e.stopPropagation();setLightboxIndex((lightboxIndex + 1) % allImages.length);}}>

                      <ChevronRight className="w-10 h-10" />
                    </button>
                    <img
                  src={allImages[lightboxIndex].src}
                  alt={allImages[lightboxIndex].alt}
                  className="max-h-[85vh] max-w-[90vw] object-contain"
                  onClick={(e) => e.stopPropagation()} />

                    <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-primary-foreground/70 text-sm">
                      {lightboxIndex + 1} / {allImages.length}
                    </span>
                  </div>
              }
              </>);

        })()}
        </div>
      </section>

      {/* Bezorgservice & Bestellen Section */}
      <section id="bestellen" className="section-padding section-gradient-cream">
        <div className="container-custom">
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <img src={bloemenOrnament} alt="Bloemen decoratie" className="w-full max-w-sm mx-auto mb-6" />
            <h2 className="heading-lg mb-4">Bezorgservice <span className="font-body">&</span> Bestellen</h2>
            <p className="text-muted-foreground body-base">
              Al 18 jaar maken wij met liefde bloemcreaties voor onze klanten. Nu bezorgen wij ook binnen een straal van 15 km rondom de winkel.
            </p>
          </div>

          {/* 3 kolommen bezorginfo - equal height */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {[
              {
                Icon: Truck,
                title: "Bezorgen binnen 15 km",
                text: "Wij bezorgen binnen een straal van 15 kilometer rondom de winkel.",
              },
              {
                Icon: CreditCard,
                title: "Betalen via Tikkie",
                text: "U bestelt via de website en ontvangt een Tikkie betaalverzoek. U betaalt dus achteraf.",
              },
              {
                Icon: Camera,
                title: "Bevestiging met foto",
                text: "Na bezorging ontvangt u een bevestiging van aflevering met een foto.",
              },
            ].map(({ Icon, title, text }) => (
              <div
                key={title}
                className="bg-card p-8 shadow-soft text-center flex flex-col items-center h-full"
              >
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          {/* Bezorgmomenten - aligned with cards */}
          <div className="max-w-5xl mx-auto bg-card p-8 shadow-soft mb-10">
            <div className="flex items-center gap-2 justify-center mb-4">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="font-heading font-semibold text-lg">Bezorgmomenten</h3>
            </div>
            <div className="text-center text-sm text-muted-foreground space-y-1.5 max-w-xl mx-auto">
              <p>Wij bezorgen overdag, 's avonds en op zaterdag.</p>
              <p>Op zondag is bezorging mogelijk in overleg, met een toeslag van €15.</p>
            </div>
          </div>

          {/* CTA knop */}
          <div className="text-center">
            <Button variant="warm" size="xl" asChild>
              <Link to="/bestellen" className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5" />
                Bestel bloemen
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Onze Specialiteiten Section */}
      <section id="specialiteiten" className="section-padding section-gradient-blush">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-3">Onze Specialiteiten</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-lg mx-auto">
            Waar we écht in uitblinken, met hart en ziel
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Rouwstukken */}
            <div className="bg-card overflow-hidden shadow-soft flex flex-col h-full">
              <div className="p-6 text-center flex flex-col flex-1">
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="font-heading text-lg font-semibold mb-3">Rouwstukken</h3>
                <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                  Een laatste groet verdient alle aandacht. Nancy maakt met warmte en respect 
                  prachtige rouwstukken die recht doen aan een persoonlijk en waardig afscheid.
                </p>
              </div>
            </div>

            {/* Boeketten op Maat */}
            <div className="bg-card overflow-hidden shadow-soft flex flex-col h-full">
              <div className="p-6 text-center flex flex-col flex-1">
                <div className="w-14 h-14 bg-blush/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💐</span>
                </div>
                <h3 className="font-heading text-lg font-semibold mb-3">Boeketten op Maat</h3>
                <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                  Elk boeket is maatwerk met karakter. Nancy haalt bloemen vers bij de boer 
                  en stelt bijzondere combinaties samen met topkwaliteit én een eerlijke prijs.
                </p>
              </div>
            </div>

            {/* Trouwboeketten */}
            <div className="bg-card overflow-hidden shadow-soft flex flex-col h-full">
              <div className="p-6 text-center flex flex-col flex-1">
                <div className="w-14 h-14 bg-blush/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💒</span>
                </div>
                <h3 className="font-heading text-lg font-semibold mb-3">Trouwboeketten</h3>
                <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                  Jouw mooiste dag verdient de mooiste bloemen. Nancy stelt met liefde 
                  bruidsboeketten samen die perfect passen bij jouw droombruiloft.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Hanny Schaft Section */}
      <section id="hanny-schaft" className="section-padding section-gradient-sage">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8 items-stretch">
              {/* Portrait */}
              <div className="md:col-span-2 relative">
                <div className="h-full overflow-hidden shadow-lg">
                  <img
                  src={hannySchaftPortrait}
                  alt="Hannie Schaft"
                  className="w-full h-full object-cover" />

                </div>
                {/* Logo badge */}
                <div className="absolute -top-4 -right-4 shadow-lg p-3" style={{ backgroundColor: '#FDF2F4' }}>
                  <img
                  src={hannySchaftLogoFull}
                  alt="Nationale Hannie Schaft Stichting"
                  className="h-12 w-auto" />

                </div>
              </div>
              
              {/* Content */}
              <div className="md:col-span-3 flex flex-col justify-center text-center md:text-left py-4">
                <h2 className="heading-lg mb-4">Trotse Partner van de Hanny Schaftstichting</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    "Ik vind het heel speciaal dat ik voor de Hanny Schaftstichting de krans mag maken. 
                    Ik ben een echte Hannie Schaft-fan en haar foto staat ook op de toonbank."
                  </p>
                  <p>
                    Nancy is bijzonder trots op deze samenwerking. "Ik kreeg er ook eens een bedankmail 
                    van Job Cohen van. Dan ben ik best trots op mezelf met wat ik bereikt heb."
                  </p>
                  <p className="text-sm italic text-primary-foreground bg-gradient-to-r from-primary to-primary/75 px-4 py-3 mt-2">
                    Een eervol samenwerkingsverband waar we bijzonder dankbaar voor zijn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Openingstijden Section */}
      <section id="openingstijden" className="section-padding section-gradient-warm">
        <div className="container-custom">
          <div className="max-w-xl mx-auto text-center">
            <img src={bloemenOpeningstijden} alt="Bloemen decoratie" className="w-full mb-[-4rem] relative z-10" />
            <div className="bg-card shadow-soft p-6 md:p-8 pt-12 md:pt-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Clock className="w-7 h-7 text-primary" />
                <h2 className="heading-lg">Openingstijden</h2>
              </div>
              {(() => {
                const days = [
                  { name: "Maandag", hours: null },
                  { name: "Dinsdag", hours: "12:00 – 17:30" },
                  { name: "Woensdag", hours: "11:30 – 17:00" },
                  { name: "Donderdag", hours: "09:30 – 17:30" },
                  { name: "Vrijdag", hours: "09:30 – 17:30" },
                  { name: "Zaterdag", hours: "09:00 – 17:00" },
                  { name: "Zondag", hours: null },
                ];
                const jsDay = new Date().getDay();
                const todayIndex = jsDay === 0 ? 6 : jsDay - 1;

                return (
                  <div className="divide-y divide-border/60">
                    {days.map((day, i) => {
                      const isToday = i === todayIndex;
                      const isClosed = day.hours === null;
                      return (
                        <div
                          key={day.name}
                          className={`flex justify-between items-center px-4 py-3.5 -mx-4 rounded-md transition-colors duration-300 ${
                            isToday
                              ? "bg-blush/40"
                              : "hover:bg-muted/40"
                          }`}>
                          <div className="flex items-center gap-2.5 text-left">
                            <span className="text-foreground font-medium">
                              {day.name}
                            </span>
                          </div>
                          <span className={`tabular-nums font-medium ${
                            isClosed
                              ? "text-muted-foreground italic"
                              : "text-primary"
                          }`}>
                            {day.hours ?? "Gesloten"}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                );
              })()}
              <div className="mt-6 pt-4 border-t border-border/60 text-center">
                <p className="text-muted-foreground text-sm">
                  💡 Openingstijden kunnen soms afwijken, bijvoorbeeld rond feestdagen. 
                  Twijfel je? <a href="tel:0235315809" className="text-primary hover:underline font-medium">Bel even</a> en Nancy helpt je verder!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding section-gradient-blush">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-2">Contact</h2>
          <p className="text-center text-muted-foreground mb-4 max-w-lg mx-auto">
            We helpen je graag! Kom langs in de winkel, bel ons of stuur een mailtje.
          </p>
          



















          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
            {/* Location Card */}
            <div className="bg-card overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="p-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-card flex items-center justify-center shadow-sm">
                    <GoogleMapsLogo className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-sm">Vind ons</h3>
                    <p className="text-xs text-muted-foreground">Hoofmanstraat 1, Haarlem</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 min-h-[220px]">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.5!2d4.6347!3d52.3884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5ef0eb7f8c0d7%3A0x5c3e9d8e8e8e8e8e!2sHoofmanstraat%201%2C%202014%20DP%20Haarlem!5e1!3m2!1snl!2snl!4v1699000000000!5m2!1snl!2snl&maptype=satellite"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locatie Madeliefste Bloemen" />
              </div>
              <div className="p-3 text-center">
                <a
                href="https://maps.google.com/?q=Hoofmanstraat+1+Haarlem"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline">
                  Route plannen
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Instagram CTA Card */}
            <div className="bg-card overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center p-6 md:p-8">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center mb-5">
                <Instagram className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading text-lg md:text-xl font-semibold mb-2">Een kijkje achter de schermen</h3>
              <p className="text-muted-foreground leading-relaxed mb-5 max-w-xs text-sm">
                Benieuwd wat er dagelijks in de winkel gebeurt? Ontdek de mooiste creaties, seizoensinspiratie en leuke momenten bij Madeliefste.
              </p>
              <Button variant="outline" asChild>
                <a
                href="https://www.instagram.com/madeliefstebloemen/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2">
                  <Instagram className="w-4 h-4" />
                  @madeliefstebloemen
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding section-gradient-cream">
        <div className="container-custom">
          <div className="text-center mb-10">
            <img src={googleLogo} alt="Google" className="h-10 md:h-12 mx-auto mb-3" />
            <div className="flex items-center justify-center gap-1.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              ))}
              <span className="text-base font-medium text-muted-foreground ml-1.5">4,8 gemiddeld</span>
            </div>
            <h2 className="heading-lg">Wat klanten over ons zeggen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-card p-6 shadow-soft flex flex-col h-full">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic flex-1">"{review.text}"</p>
                <p className="font-medium text-foreground mt-auto pt-2 border-t border-border">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>;
}