import { useState, useCallback } from "react";
import { MapPin, Clock, Phone, Star, MessageCircle, Instagram, Truck, CreditCard, Camera, ShoppingBag, Menu, X, ChevronLeft, ChevronRight, Leaf, Flower2, Heart, ArrowLeft, Snowflake, ZoomIn, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import MoederdagBanner from "@/components/MoederdagBanner";
import BoeketVanDeDagBanner from "@/components/BoeketVanDeDagBanner";
import VakantieBanner from "@/components/VakantieBanner";
import FlipCard from "@/components/FlipCard";
import { Daisy, DaisyStem, Sprig, DaisyDivider } from "@/components/Botanical";
import { useReveal } from "@/hooks/use-reveal";

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
import milieuvriendelijkLogo from "@/assets/milieuvriendelijk-logo.png";
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
import trouwerij1 from "@/assets/trouwerij-1.jpg";
import trouwerij2 from "@/assets/trouwerij-2.jpg";
import trouwerij3 from "@/assets/trouwerij-3.jpg";
import trouwerij4 from "@/assets/trouwerij-4.jpg";
import trouwerij5 from "@/assets/trouwerij-5.jpg";
import trouwerij6 from "@/assets/trouwerij-6.jpg";
import trouwerij7 from "@/assets/trouwerij-7.jpg";
import trouwerij8 from "@/assets/trouwerij-8.jpg";
import rouwstukVoorbeeld from "@/assets/local/rouwstuk-voorbeeld.jpg";
import winterstukImage from "@/assets/local/winterstuk.jpg";
import wax1 from "@/assets/local/wax-amaryllis-1.jpg";
import wax2 from "@/assets/local/wax-amaryllis-2.jpg";
import wax3 from "@/assets/local/wax-amaryllis-3.jpg";
import wax4 from "@/assets/local/wax-amaryllis-4.jpg";
import wax5 from "@/assets/local/wax-amaryllis-5.jpg";
import wax6 from "@/assets/local/wax-amaryllis-6.jpg";

const trouwerijImages = [
  { src: trouwerij1, alt: "Bruidsboeket met witte rozen op autokap" },
  { src: trouwerij2, alt: "Bloemstuk met witte rozen en gipskruid op kerkstoel" },
  { src: trouwerij3, alt: "Elegant bruidsboeket met rozen en gipskruid" },
  { src: trouwerij4, alt: "Twee bruidsboeketten bij kerktrap" },
  { src: trouwerij5, alt: "Kerkinterieur met altaar en witte bloemen" },
  { src: trouwerij6, alt: "Vaas met witte bloemen bij altaar" },
  { src: trouwerij7, alt: "Kerkelijke bloemdecoratie bij altaar" },
  { src: trouwerij8, alt: "Complete kerkaankleding met bruidsboeketten" },
];

const waxImages = [
  { src: wax1, alt: "Drie wax-amaryllisbollen met sneeuwpopillustraties in geschenkverpakking, tussen kerstdecoratie" },
  { src: wax2, alt: "Wax-amaryllisbol met sneeuwpop en kerstboom in zwart geschenkdoosje, met groene scheut" },
  { src: wax3, alt: "Wax-amaryllisbol met twee sneeuwpoppen met mokken in zwart geschenkdoosje" },
  { src: wax4, alt: "Wax-amaryllisbol met sneeuwpoppen in winterse kleding in zwart geschenkdoosje" },
  { src: wax5, alt: "Wax-amaryllisbol met Delfts blauw schipmotief in witte displayverpakking" },
  { src: wax6, alt: "Wax-amaryllisbol met Delfts blauw boerentafereel in witte displayverpakking" },
];

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
  const [trouwLightbox, setTrouwLightbox] = useState<number | null>(null);
  const [waxLightbox, setWaxLightbox] = useState<number | null>(null);
  

  const navLinks = [
  { href: "#aanbod", label: "Aanbod" },
  { href: "#bestellen", label: "Bezorging" },
  { href: "#specialiteiten", label: "Specialiteiten" },
  { href: "#hanny-schaft", label: "Hanny Schaft" },
  { href: "#openingstijden", label: "Openingstijden" },
  { href: "#contact", label: "Contact" }];


  useReveal();

  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-header">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#" className="flex items-center gap-2.5 shrink-0">
              <Daisy className="w-7 h-7 botanical-blush" />
              <span className="font-heading text-xl md:text-[1.4rem] leading-none tracking-[0.01em]">
                <span className="text-primary font-medium">Madeliefste</span>{' '}
                <span className="text-blush-deep font-normal">Bloemen</span>
              </span>
            </a>
            
            {/* Nav links - desktop */}
            <nav className="hidden xl:flex items-center gap-9 mx-auto px-10">
              {navLinks.map((link) =>
            <a key={link.href} href={link.href} className="relative text-[0.95rem] font-normal text-foreground/75 hover:text-primary transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-blush-deep after:transition-all hover:after:w-full">{link.label}</a>
            )}
            </nav>

            <div className="flex items-center gap-3 shrink-0">
              <Button variant="warm" size="sm" asChild className="hidden md:inline-flex px-4">
                <Link to="/bestellen" className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4" />
                  <span>Bestel</span>
                </Link>
              </Button>
              <a href="tel:0235315809" aria-label="Bel ons: 023 531 58 09" title="Bel ons"
                className="group relative hidden md:inline-flex w-11 h-11 items-center justify-center rounded-full border border-primary/25 text-primary hover:bg-sage-light transition-colors">
                <Phone className="w-[18px] h-[18px]" strokeWidth={1.6} />
                <span role="tooltip" className="pointer-events-none absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md glass px-2.5 py-1 text-xs text-primary opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">Bel ons</span>
              </a>
              {/* Mobile menu toggle */}
              <button
              className="xl:hidden p-3 text-primary hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu">

                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen &&
      <div className="xl:hidden bg-background border-t border-border">
            <nav className="container-custom py-4 flex flex-col gap-3">
              {navLinks.map((link) =>
          <a
            key={link.href}
            href={link.href}
            className="text-base font-medium text-foreground/85 hover:text-primary transition-colors py-2.5"
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

      {/* Hero Section - Full Screen, header floats on top */}
      <section className="relative min-h-[100svh] md:h-screen flex items-end overflow-hidden">

        <div className="absolute inset-0 z-0">
          <img src={winkelImage} alt="Bloemenzaak Madeliefste van buiten" className="w-full h-full object-cover object-[58%_35%] md:object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/35 via-45% to-transparent md:bg-gradient-to-tr md:from-primary/80 md:via-primary/20 md:to-transparent" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-foreground/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 md:h-32 bg-gradient-to-b from-transparent to-sage-light" />
        </div>
        <DaisyStem className="hidden md:block absolute right-6 lg:right-16 bottom-0 w-24 lg:w-32 h-auto z-10 text-primary-foreground/50 sway" />

        <div className="container-custom relative z-10 text-center md:text-left pb-28 md:pb-36 w-full">
          <div className="flex justify-center md:justify-start mb-4 animate-fade-in-up"><Daisy className="w-10 h-10 text-primary-foreground/80" /></div>
          <h1 className="heading-xl animate-fade-in-up mb-4 text-primary-foreground max-w-3xl">
            Madeliefste Bloemen
          </h1>
          <p className="body-lg animate-fade-in-delay-1 mb-9 text-primary-foreground max-w-xl mx-auto md:mx-0">
            Jouw buurtbloemist in de Hoofmanstraat, Haarlem
          </p>
          
          {/* Main Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 animate-fade-in-delay-2 px-4 sm:px-0">
            <Button
            size="lg"
            variant="warm"
            className="w-full sm:w-auto h-14 px-8 text-base"
            asChild>

              <Link to="/bestellen">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Bestel bloemen
              </Link>
            </Button>
            <Button
            variant="glass-light"
            size="lg"
            className="w-full sm:w-auto h-14 px-8 text-base"
            onClick={() => document.getElementById('aanbod')?.scrollIntoView({ behavior: 'smooth' })}>

              Bekijk ons aanbod
            </Button>
          </div>
        </div>
      </section>

      {/* Meldingen - net onder de hero */}
      <VakantieBanner />
      <MoederdagBanner />
      <BoeketVanDeDagBanner />

      {/* Milieuvriendelijke bloemen - opvallend op de startpagina */}
      <section className="section-gradient-sage py-12 md:py-16">
        <div className="container-custom">
          <div className="relative w-full md:w-fit max-w-full mx-auto bg-card rounded-card p-6 md:p-8 lg:p-12 shadow-[var(--shadow-medium)] ring-1 ring-primary/10 overflow-hidden">

            <div className="relative grid md:grid-cols-[auto_auto] md:justify-center gap-6 md:gap-10 lg:gap-12 items-center">
              <div className="justify-self-center md:justify-self-start">
                <div className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-gradient-to-br from-cream to-sage/15 ring-1 ring-primary/10 shadow-[var(--shadow-soft)] flex items-center justify-center p-5 md:p-6">
                  <img
                    src={milieuvriendelijkLogo}
                    alt="Drie groene blaadjes in een kring: milieuvriendelijk geteelde bloemen"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="min-w-0 text-center md:text-left md:w-fit max-w-xl md:max-w-2xl">
                <span className="inline-block text-xs uppercase tracking-[0.25em] text-muted-foreground font-semibold mb-3">
                  Met zorg voor mens en natuur
                </span>
                <h2 className="font-heading text-[1.4rem] md:text-4xl lg:text-[2.75rem] leading-tight break-words">
                  <span className="text-foreground">Wij verkopen uitsluitend</span>{" "}
                  <span className="md:block">
                    <span className="text-primary">milieuvriendelijke</span>{" "}
                    <span className="text-foreground">bloemen</span>
                  </span>
                </h2>
                <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-xl mx-auto md:mx-0">
                  Bij Madeliefste kiest u voor fraaie, verse bloemen én een beter milieu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Over Nancy Section */}
      <section className="py-14 md:py-20 section-gradient-warm relative overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-16 items-start">
            <div className="relative reveal">
              <div className="absolute inset-0 rounded-card bg-blush/40 translate-x-4 translate-y-4" aria-hidden="true" />
              <img src={nancyImage} alt="Nancy, eigenares van Madeliefste" className="relative w-full aspect-[4/5] object-cover object-center rounded-img shadow-medium" />
            </div>
            <div className="min-w-0 reveal">
              <DaisyDivider className="justify-start mb-4 [&>span:first-child]:hidden" />
              <h2 className="heading-lg mb-6 break-words">Maak kennis met Nancy</h2>
              <div className="space-y-5 body-base text-foreground/85">
                <p>Sinds 1 mei 2008 is Nancy de trotse eigenaar van Madeliefste Bloemen in de Hoofmanstraat. Inmiddels al ruim 18 jaar een vertrouwd gezicht in de buurt, en dat is niet voor niets. Haar passie voor bloemen en oog voor detail maken elke creatie bijzonder.</p>
                <blockquote className="relative rounded-card bg-blush-light px-7 py-7 md:px-10 md:py-8 my-2">
                  <span className="absolute left-5 top-1 font-heading text-6xl leading-none text-blush-dark/70" aria-hidden="true">&ldquo;</span>
                  <p className="relative font-heading italic text-lg md:text-xl leading-relaxed text-primary pl-4">"Ik wil mensen blij maken met verse bloemen voor een eerlijke prijs. Elke creatie maak ik met liefde en aandacht voor detail. Of het nu gaat om een klein boeketje voor op tafel of een groot bloemstuk voor een bijzondere gelegenheid, ik leg overal mijn hart in."</p>
                </blockquote>
                <p>Nancy kiest bewust voor sterke combinaties en doordachte bloemkeuze. Denk aan prachtige seizoensbloemen als amaryllis en tulpen in de winter, zonnebloemen en pioenrozen in de zomer, maar ook bruidsboeketten, rouwstukken en feestelijke kerststukken. Alles wordt met vakmanschap en zorg samengesteld, precies afgestemd op de wensen van de klant.</p>
                <p>De winkel voelt als thuiskomen, en dat komt niet alleen door de bloemen. Hond Kerel, de trouwe viervoeter van Nancy, verwelkomt iedere klant met een kwispel. Het maakt Madeliefste nóg persoonlijker.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ons Aanbod & Galerij Section */}
      <section id="aanbod" className="section-padding section-gradient-sage relative overflow-hidden">
        <Sprig className="hidden md:block absolute -left-8 bottom-10 w-56 opacity-60" />
        <div className="container-custom">
          <DaisyDivider className="mb-4" />
          <h2 className="heading-lg text-center break-words mb-3">Ons Werk</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-lg mx-auto">Van verse seizoensbloemen tot bijzondere creaties, altijd met liefde samengesteld

        </p>
          {(() => {
          // Mix aanbod and galerij images alternately
          const allImages: {src: string;alt: string;label?: string;}[] = [];
          const aanbodMapped = aanbodImages.map((src, i) => ({ src, alt: `Ons aanbod ${i + 1}` }));
          const galerijMapped = galerijImages.map((img) => ({ src: img.src, alt: img.alt }));
          const maxLen = Math.max(aanbodMapped.length, galerijMapped.length);
          for (let i = 0; i < maxLen; i++) {
            if (i < aanbodMapped.length) allImages.push(aanbodMapped[i]);
            if (i < galerijMapped.length) allImages.push(galerijMapped[i]);
          }

          allImages.unshift({
            src: winterstukImage,
            alt: "Kerststuk met dennentakken, rode bloem en rood theelicht op een houten schijf",
            label: "Kerststuk",
          });

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
                <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[230px] gap-3 md:gap-4 reveal">
                  {allImages.slice(0, 9).map((img, index) =>
                <button
                  key={index}
                  onClick={() => setLightboxIndex(index)}
                  className={`overflow-hidden cursor-pointer group relative rounded-img shadow-soft hover:shadow-medium transition-shadow duration-500 ${tileShapes[index]}`}>

                      <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="absolute top-3 right-3 w-9 h-9 rounded-full glass flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"><ZoomIn className="w-4 h-4" strokeWidth={1.6} /></span>
                      {img.label && (
                        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-md glass px-3 py-1.5 text-xs font-semibold tracking-wide text-primary">
                          <Snowflake className="w-3.5 h-3.5" />
                          {img.label}
                        </span>
                      )}
                    </button>
                )}

                  {/* CTA tile als laatste tegel */}
                  <button
                    onClick={() => setLightboxIndex(9)}
                    className="overflow-hidden cursor-pointer group relative rounded-img shadow-medium hover:shadow-hover transition-all duration-500">
                    <img
                      src={allImages[9].src}
                      alt={allImages[9].alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy" />
                    <div className="absolute inset-0 bg-primary/70 group-hover:bg-primary/80 transition-colors duration-500" />
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
                  className="absolute top-4 right-4 w-12 h-12 rounded-full glass-dark flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 z-10" aria-label="Sluiten"
                  onClick={() => setLightboxIndex(null)}>

                      <X className="w-6 h-6" />
                    </button>
                    <button
                  className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-dark flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 z-10" aria-label="Vorige foto"
                  onClick={(e) => {e.stopPropagation();setLightboxIndex((lightboxIndex - 1 + allImages.length) % allImages.length);}}>

                      <ChevronLeft className="w-7 h-7" />
                    </button>
                    <button
                  className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-dark flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 z-10" aria-label="Volgende foto"
                  onClick={(e) => {e.stopPropagation();setLightboxIndex((lightboxIndex + 1) % allImages.length);}}>

                      <ChevronRight className="w-7 h-7" />
                    </button>
                    <img
                  src={allImages[lightboxIndex].src}
                  alt={allImages[lightboxIndex].alt}
                  className="max-h-[85vh] max-w-[90vw] object-contain rounded-img animate-fade-in"
                  onClick={(e) => e.stopPropagation()} />

                    <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-primary-foreground/70 text-sm">
                      {lightboxIndex + 1} / {allImages.length}
                    </span>
                    {allImages[lightboxIndex].label && (
                      <span className="absolute bottom-12 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-md glass px-3.5 py-1.5 text-sm font-semibold tracking-wide text-primary shadow-soft backdrop-blur-sm">
                        <Snowflake className="w-4 h-4" />
                        {allImages[lightboxIndex].label}
                      </span>
                    )}
                  </div>
              }
              </>);

        })()}
        </div>
      </section>

      {/* Trouwerij Section */}
      <section id="trouwerij" className="section-padding section-gradient-blush relative overflow-hidden">
        <DaisyStem className="hidden md:block absolute left-4 lg:left-10 top-16 w-20 lg:w-24 h-auto botanical-blush sway" />
        <div className="container-custom">
          <DaisyDivider className="mb-4" />
          <h2 className="heading-lg text-center break-words mb-4">Trouwerij</h2>
          <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto body-base">
            Met liefde verzorgen wij sfeervolle bloemdecoraties voor bruiloften. Van bruidsboeketten tot complete kerk- en locatieaankleding, ieder arrangement wordt met zorg samengesteld om van jullie bijzondere dag iets onvergetelijks te maken.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 md:auto-rows-[220px] lg:auto-rows-[260px] gap-3 md:gap-5 reveal">
            {trouwerijImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setTrouwLightbox(index)}
                className={`overflow-hidden cursor-pointer group relative rounded-img shadow-soft hover:shadow-medium transition-shadow duration-500 ${index === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square md:aspect-auto"}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            ))}
          </div>

          {/* Lightbox trouwerij */}
          {trouwLightbox !== null && (
            <div className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center" onClick={() => setTrouwLightbox(null)}>
              <button
                className="absolute top-4 right-4 w-12 h-12 rounded-full glass-dark flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 z-10" aria-label="Sluiten"
                onClick={() => setTrouwLightbox(null)}
              >
                <X className="w-6 h-6" />
              </button>
              <button
                className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-dark flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 z-10" aria-label="Vorige foto"
                onClick={(e) => { e.stopPropagation(); setTrouwLightbox((trouwLightbox - 1 + trouwerijImages.length) % trouwerijImages.length); }}
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button
                className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-dark flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 z-10" aria-label="Volgende foto"
                onClick={(e) => { e.stopPropagation(); setTrouwLightbox((trouwLightbox + 1) % trouwerijImages.length); }}
              >
                <ChevronRight className="w-7 h-7" />
              </button>
              <img
                src={trouwerijImages[trouwLightbox].src}
                alt={trouwerijImages[trouwLightbox].alt}
                className="max-h-[85vh] max-w-[90vw] object-contain rounded-img animate-fade-in"
                onClick={(e) => e.stopPropagation()}
              />
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-primary-foreground/70 text-sm">
                {trouwLightbox + 1} / {trouwerijImages.length}
              </span>
            </div>
          )}
        </div>
      </section>



      {/* Wax-amaryllisbollen Section */}
      <section id="wax-amaryllisbollen" className="section-padding section-mint relative overflow-hidden">
        <Sprig className="hidden md:block absolute -right-10 top-12 w-60 opacity-70 -scale-x-100" />
        <div className="container-custom">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 rounded-md glass px-3 py-1.5 text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-blush-deep">
              <Daisy className="w-4 h-4 botanical-blush" />Seizoensfavoriet
            </span>
          </div>
          <h2 className="heading-lg text-center break-words mb-3">Wax-amaryllisbollen</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto body-base">
            Breng sfeer in huis met onze decoratieve wax-amaryllisbollen. Deze bijzondere amaryllissen hebben geen water of potgrond nodig en groeien zelfstandig uit tot prachtige bloemen. Ook erg leuk om cadeau te geven tijdens de feestdagen!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto reveal">
            {waxImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setWaxLightbox(index)}
                className="glass rounded-card p-2 md:p-3 cursor-pointer group text-left hover:-translate-y-1 transition-transform duration-500"
              >
                <div className="relative overflow-hidden rounded-img aspect-[3/4]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <span className="absolute top-3 right-3 w-9 h-9 rounded-full glass flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"><ZoomIn className="w-4 h-4" strokeWidth={1.6} /></span>
                </div>
              </button>
            ))}
          </div>

          {/* Lightbox wax-amaryllisbollen */}
          {waxLightbox !== null && (
            <div className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center" onClick={() => setWaxLightbox(null)}>
              <button
                className="absolute top-4 right-4 w-12 h-12 rounded-full glass-dark flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 z-10" aria-label="Sluiten"
                onClick={() => setWaxLightbox(null)}
              >
                <X className="w-6 h-6" />
              </button>
              <button
                className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-dark flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 z-10" aria-label="Vorige foto"
                onClick={(e) => { e.stopPropagation(); setWaxLightbox((waxLightbox - 1 + waxImages.length) % waxImages.length); }}
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button
                className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-dark flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 z-10" aria-label="Volgende foto"
                onClick={(e) => { e.stopPropagation(); setWaxLightbox((waxLightbox + 1) % waxImages.length); }}
              >
                <ChevronRight className="w-7 h-7" />
              </button>
              <img
                src={waxImages[waxLightbox].src}
                alt={waxImages[waxLightbox].alt}
                className="max-h-[85vh] max-w-[90vw] object-contain rounded-img animate-fade-in"
                onClick={(e) => e.stopPropagation()}
              />
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-primary-foreground/70 text-sm">
                {waxLightbox + 1} / {waxImages.length}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Bezorgservice & Bestellen Section */}
      <section id="bestellen" className="section-padding section-plain relative overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[5fr_7fr] gap-10 lg:gap-16 items-center">
            <div className="text-center lg:text-left reveal min-w-0">
              <img src={bloemenOrnament} alt="Bloemen decoratie" className="w-full max-w-xs mx-auto lg:mx-0 mb-6" />
              <h2 className="heading-lg mb-4 break-words">Bezorgservice <span className="font-body">&</span> Bestellen</h2>
              <p className="text-foreground/80 body-base mb-8">
                Al 18 jaar maken wij met liefde bloemcreaties voor onze klanten. Nu bezorgen wij ook binnen een straal van 15 km rondom de winkel.
              </p>
              <Button variant="warm" size="xl" asChild className="w-full sm:w-auto">
                <Link to="/bestellen" className="flex items-center gap-3">
                  <ShoppingBag className="w-5 h-5" />
                  Bestel bloemen
                </Link>
              </Button>
            </div>

            <div className="reveal min-w-0">
              <ol className="space-y-4">
                {[
                  { Icon: Truck, title: "Bezorgen binnen 15 km", text: "Wij bezorgen binnen een straal van 15 kilometer rondom de winkel." },
                  { Icon: CreditCard, title: "Betalen via Tikkie", text: "U bestelt via de website en ontvangt een Tikkie betaalverzoek. U betaalt dus achteraf." },
                  { Icon: Camera, title: "Bevestiging met foto", text: "Na bezorging ontvangt u een bevestiging van aflevering met een foto." },
                ].map(({ Icon, title, text }, i) => (
                  <li key={title} className="flex gap-5 items-start rounded-card border border-border bg-card/70 p-5 md:p-6">
                    <div className="relative shrink-0">
                      <div className="w-14 h-14 rounded-full bg-sage-light flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                      </div>
                      <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-blush text-primary text-xs font-semibold flex items-center justify-center">{i + 1}</span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-heading font-semibold text-xl mb-1 text-primary">{title}</h3>
                      <p className="text-foreground/75 leading-relaxed">{text}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-4 rounded-card section-gradient-sage p-5 md:p-6 flex gap-4 items-start">
                <Clock className="w-6 h-6 text-primary shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-2 text-primary">Bezorgmomenten</h3>
                  <div className="text-foreground/80 space-y-1">
                    <p>Bestellen kan elke dag: telefonisch of via de site.</p>
                    <p>Wij bezorgen overdag, 's avonds en op zaterdag.</p>
                    <p>Op zondag is bezorging mogelijk in overleg, met een toeslag van €15.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onze Specialiteiten Section */}
      <section id="specialiteiten" className="section-padding section-pink relative overflow-hidden">
        <Sprig className="hidden md:block absolute -left-8 bottom-8 w-56 botanical-blush opacity-60" />
        <div className="container-custom">
          <div className="flex justify-center mb-3"><Daisy className="w-9 h-9 botanical-blush" /></div>
          <h2 className="heading-lg text-center break-words mb-3">Onze Specialiteiten</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-lg mx-auto">
            Waar we écht in uitblinken, met hart en ziel
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
            {/* Rouwstukken - flipcard */}
            <FlipCard
              front={(flip) => (
                <div className="glass rounded-card overflow-hidden flex flex-col h-full border-t-4 border-t-sage">
                  <div className="p-7 text-center flex flex-col flex-1">
                    <div className="w-16 h-16 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-4">
                      <Leaf className="w-7 h-7 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading text-2xl font-medium mb-3 text-primary">Rouwstukken</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Een laatste groet verdient alle aandacht. Nancy maakt met warmte en respect 
                      prachtige rouwstukken die recht doen aan een persoonlijk en waardig afscheid.
                    </p>
                    <button
                      type="button"
                      onClick={flip}
                      className="group mt-4 self-center inline-flex items-center gap-2 rounded-lg border border-primary/25 bg-card/70 px-5 py-2.5 text-sm font-medium text-primary transition-all duration-300 hover:bg-card hover:border-primary/40 active:translate-y-px"
                    >
                      <Camera className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                      Bekijk voorbeeld
                    </button>
                  </div>
                </div>
              )}
              back={(flip) => (
                <div className="glass rounded-card overflow-hidden flex flex-col h-full border-t-4 border-t-sage">
                  <div className="p-4 flex flex-col h-full">
                    <div className="relative rounded-img overflow-hidden flex-1 min-h-[160px]">
                      <img
                        src={rouwstukVoorbeeld}
                        alt="Voorbeeld van een rouwstuk met rozen, anjers en clematis in een houten stam"
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={flip}
                      className="group mt-3 self-center inline-flex items-center gap-2 rounded-lg border border-primary/25 bg-card/70 px-5 py-2.5 text-sm font-medium text-primary transition-all duration-300 hover:bg-card hover:border-primary/40 active:translate-y-px"
                    >
                      <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" strokeWidth={1.5} />
                      Terug
                    </button>
                  </div>
                </div>
              )}
            />

            {/* Boeketten op Maat */}
            <div className="glass rounded-card overflow-hidden flex flex-col h-full border-t-4 border-t-blush-dark hover-lift">
              <div className="p-7 text-center flex flex-col flex-1">
                <div className="w-16 h-16 rounded-full bg-blush/50 flex items-center justify-center mx-auto mb-4">
                  <Flower2 className="w-7 h-7 text-blush-deep" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-2xl font-medium mb-3 text-primary">Boeketten op Maat</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Elk boeket is maatwerk met karakter. Nancy haalt bloemen vers bij de boer 
                  en stelt bijzondere combinaties samen met topkwaliteit én een eerlijke prijs.
                </p>
              </div>
            </div>

            {/* Trouwboeketten */}
            <div className="glass rounded-card overflow-hidden flex flex-col h-full border-t-4 border-t-blush-deep hover-lift">
              <div className="p-7 text-center flex flex-col flex-1">
                <div className="w-16 h-16 rounded-full bg-blush-light flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-7 h-7 text-blush-deep" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-2xl font-medium mb-3 text-primary">Trouwboeketten</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Jouw mooiste dag verdient de mooiste bloemen. Nancy stelt met liefde 
                  bruidsboeketten samen die perfect passen bij jouw droombruiloft.
                </p>
              </div>
            </div>


          </div>
        </div>
      </section>



      {/* Hanny Schaft Section */}
      <section id="hanny-schaft" className="section-padding section-sage-muted">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-10 md:gap-14 items-center">
              {/* Portrait */}
              <div className="md:col-span-2 relative max-w-sm mx-auto w-full">
                <div className="absolute inset-0 rounded-card border border-primary/30 -translate-x-3 translate-y-3 md:-translate-x-4 md:translate-y-4" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-img shadow-medium bg-card p-2">
                  <img
                  src={hannySchaftPortrait}
                  alt="Hannie Schaft"
                  className="w-full h-auto rounded-md grayscale-[20%]" />

                </div>
                {/* Logo badge */}
                <div className="absolute -bottom-6 -right-4 rounded-card glass p-3">
                  <img
                  src={hannySchaftLogoFull}
                  alt="Nationale Hannie Schaft Stichting"
                  className="h-12 w-auto" />

                </div>
              </div>
              
              {/* Content */}
              <div className="md:col-span-3 flex flex-col justify-center text-center md:text-left py-4">
                <h2 className="heading-lg mb-4">Trotse Partner van de Hanny Schaftstichting</h2>
                <div className="space-y-5 text-foreground/80 body-base">
                  <p className="font-heading italic text-xl md:text-2xl leading-relaxed text-primary border-l-2 border-blush-dark pl-5">
                    "Ik vind het heel speciaal dat ik voor de Hanny Schaftstichting de krans mag maken. 
                    Ik ben een echte Hannie Schaft-fan en haar foto staat ook op de toonbank."
                  </p>
                  <p>
                    Nancy is bijzonder trots op deze samenwerking. "Ik kreeg er ook eens een bedankmail 
                    van Job Cohen van. Dan ben ik best trots op mezelf met wat ik bereikt heb."
                  </p>
                  <p className="text-base glass rounded-card text-primary px-5 py-4 mt-2 flex items-center gap-3">
                    <Daisy className="w-5 h-5 shrink-0" />Een eervol samenwerkingsverband waar we bijzonder dankbaar voor zijn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Openingstijden Section */}
      <section id="openingstijden" className="section-padding section-gradient-warm relative overflow-hidden">
        <DaisyStem className="hidden lg:block absolute right-10 bottom-0 w-24 h-auto sway" />
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-sage-light text-primary text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              <Clock className="w-3.5 h-3.5" />
              Wanneer je langs kunt komen
            </div>
            <h2 className="heading-lg mb-3">Openingstijden</h2>
            <p className="text-muted-foreground">
              De winkel is geopend op donderdag, vrijdag en zaterdag. Buiten deze dagen kunt u elke dag telefonisch of via de site bestellen.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border shadow-soft p-6 md:p-10">
              {(() => {
                const days = [
                  { name: "Maandag", hours: null },
                  { name: "Dinsdag", hours: null },
                  { name: "Woensdag", hours: null },
                  { name: "Donderdag", hours: "09:30 – 17:30" },
                  { name: "Vrijdag", hours: "09:30 – 17:30" },
                  { name: "Zaterdag", hours: "09:00 – 17:00" },
                  { name: "Zondag", hours: null },
                ];
                const jsDay = new Date().getDay();
                const todayIndex = jsDay === 0 ? 6 : jsDay - 1;

                return (
                  <div className="divide-y divide-border">
                    {days.map((day, i) => {
                      const isToday = i === todayIndex;
                      const isClosed = day.hours === null;
                      return (
                        <div
                          key={day.name}
                          className={`flex items-center justify-between gap-4 px-4 py-4 text-lg ${
                            isToday ? "bg-blush-light rounded-md" : ""
                          }`}
                        >
                          <span className="text-foreground text-left flex items-center gap-3">
                            <span className={`w-2.5 h-2.5 rounded-full ${isClosed ? "bg-border" : "bg-primary"}`} aria-hidden="true" />
                            {day.name}
                          </span>
                          <span
                            className={`tabular-nums text-right ${
                              isClosed
                                ? "text-muted-foreground"
                                : "text-primary font-medium"
                            }`}
                          >
                            {day.hours ?? "Gesloten"}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                );
              })()}

              <div className="mt-6 rounded-card bg-sage-light px-5 py-4 flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                <p className="text-sm md:text-base leading-relaxed">
                  <span className="font-medium text-foreground">Elke dag bestellen.</span>{" "}
                  Telefonisch of via de site kunt u elke dag verse boeketten, rouw- en trouwboeketten bestellen. Wij stemmen alles persoonlijk met u af.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-muted-foreground text-sm text-center sm:text-left max-w-md">
                  Openingstijden kunnen soms afwijken, bijvoorbeeld rond feestdagen. Twijfel je? Bel gerust even.
                </p>
                <a
                  href="tel:0235315809"
                  className="inline-flex items-center gap-2 h-12 px-5 rounded-lg bg-gradient-to-b from-blush to-blush-dark border border-blush-dark/60 text-primary font-semibold hover:from-blush-light hover:to-blush transition-colors shadow-soft whitespace-nowrap"
                >
                  <Phone className="w-4 h-4" />
                  023 531 5809
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding section-gradient-blush relative overflow-hidden">
        <div className="container-custom">
          <DaisyDivider className="mb-4" />
          <h2 className="heading-lg text-center break-words mb-2">Contact</h2>
          <p className="text-center text-foreground/80 max-w-lg mx-auto mt-3">
            We helpen je graag! Kom langs in de winkel, bel ons of stuur een mailtje.
          </p>
          



















          <div className="grid md:grid-cols-[7fr_5fr] gap-6 lg:gap-8 mt-10 items-stretch reveal">
            {/* Kaart */}
            <div className="glass rounded-card overflow-hidden flex flex-col">
              <div className="relative flex-1 min-h-[320px] md:min-h-[420px]">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.5!2d4.6347!3d52.3884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5ef0eb7f8c0d7%3A0x5c3e9d8e8e8e8e8e!2sHoofmanstraat%201%2C%202014%20DP%20Haarlem!5e1!3m2!1snl!2snl!4v1699000000000!5m2!1snl!2snl&maptype=satellite"
                width="100%"
                height="100%"
                className="absolute inset-0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locatie Madeliefste Bloemen" />
              </div>
              <div className="p-6 md:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-card flex items-center justify-center">
                    <GoogleMapsLogo className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-primary">Vind ons</h3>
                    <p className="text-foreground/80">Hoofmanstraat 1, Haarlem</p>
                  </div>
                </div>
                <Button variant="warm" asChild>
                  <a href="https://maps.google.com/?q=Hoofmanstraat+1+Haarlem" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Route plannen
                  </a>
                </Button>
              </div>
            </div>

            {/* Instagram */}
            <div className="glass rounded-card p-6 md:p-7 flex flex-col">
              <div className="grid grid-cols-3 gap-3 mb-7">
                {galerijImages.slice(0, 3).map((img, i) => (
                  <img key={i} src={img.src} alt={img.alt} loading="lazy" className="block w-full aspect-[3/4] object-cover rounded-md" />
                ))}
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-full bg-blush/60 flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-blush-deep" strokeWidth={1.6} />
                </div>
                <h3 className="font-heading text-xl font-medium text-primary leading-snug">Een kijkje achter de schermen</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Benieuwd wat er dagelijks in de winkel gebeurt? Ontdek de mooiste creaties, seizoensinspiratie en leuke momenten bij Madeliefste.
              </p>
              <Button variant="warm" asChild className="mt-auto w-full">
                <a href="https://www.instagram.com/madeliefstebloemen/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  <Instagram className="w-4 h-4" />
                  @madeliefstebloemen
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding section-plain relative overflow-hidden">
        <Sprig className="hidden md:block absolute -right-10 bottom-6 w-56 opacity-60 -scale-x-100" />
        <div className="container-custom">
          <div className="text-center mb-12">
            <img src={googleLogo} alt="Google" className="h-10 md:h-12 mx-auto mb-3" />
            <div className="flex items-center justify-center gap-1.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-star fill-star" />
              ))}
              <span className="text-base font-medium text-muted-foreground ml-1.5">4,8 gemiddeld</span>
            </div>
            <h2 className="heading-lg">Wat klanten over ons zeggen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="relative rounded-card border border-border bg-card/70 p-7 flex flex-col h-full">
                <Quote className="absolute top-5 right-5 w-8 h-8 text-blush" strokeWidth={1.2} aria-hidden="true" />
                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-star fill-star" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-5 leading-relaxed flex-1">"{review.text}"</p>
                <p className="font-heading text-lg text-primary mt-auto pt-4 border-t border-border">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Mobiele vaste bestel- en belknoppen */}
      <div className="md:hidden fixed bottom-3 inset-x-3 z-40 glass rounded-card p-2 flex gap-2">
        <Button variant="warm" asChild className="flex-1 h-12">
          <Link to="/bestellen" className="flex items-center justify-center gap-2"><ShoppingBag className="w-4 h-4" />Bestel bloemen</Link>
        </Button>
        <a href="tel:0235315809" aria-label="Bel ons: 023 531 58 09" className="w-12 h-12 shrink-0 rounded-full border border-primary/25 bg-card/80 flex items-center justify-center text-primary">
          <Phone className="w-5 h-5" strokeWidth={1.6} />
        </a>
      </div>
      <div className="h-20 md:hidden bg-primary" aria-hidden="true" />
    </div>;
}