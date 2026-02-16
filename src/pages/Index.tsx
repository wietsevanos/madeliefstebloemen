import { useState } from "react";
import { MapPin, Clock, Phone, Star, MessageCircle, Instagram, Truck, CreditCard, Camera, ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
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
  name: "Maria V.",
  rating: 5,
  text: "Altijd prachtige verse bloemen en geweldig advies van Nancy!"
}, {
  name: "Jan de B.",
  rating: 5,
  text: "De beste bloemist van Haarlem. Persoonlijke service en oog voor detail."
}, {
  name: "Annemiek",
  rating: 5,
  text: "Mijn vaste adres voor alle speciale gelegenheden. Top!"
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

  const navLinks = [
  { href: "#aanbod", label: "Aanbod" },
  { href: "#bestellen", label: "Bezorging" },
  { href: "#specialiteiten", label: "Specialiteiten" },
  { href: "#openingstijden", label: "Openingstijden" },
  { href: "#contact", label: "Contact" }];


  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm shadow-soft border-b-4 border-blush">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            <span className="font-heading text-base sm:text-xl md:text-2xl font-semibold shrink-0 flex items-center gap-1.5 sm:gap-2">
              <img src={madeliefsteLogo} alt="Madeliefste logo" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
              <span><span className="text-primary">Madeliefste</span>{" "}
              <span className="text-blush-dark">Bloemen</span></span>
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

      {/* Over Nancy Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg text-center mb-8">Maak kennis met Nancy</h2>
            <div className="bg-card overflow-hidden shadow-soft">
              <img src={nancyImage} alt="Nancy, eigenares van Madeliefste" className="w-full" />
              <div className="p-6 md:p-8 space-y-4 text-muted-foreground">
                <p>
                  Sinds 1 mei 2008 is Nancy de trotse eigenaar van Madeliefste.
                  Inmiddels al 18 jaar een vertrouwd gezicht in de buurt.
                </p>
                <p>
                  "Ik wil mensen blij maken met verse bloemen voor een eerlijke prijs. 
                  Elke creatie maak ik met liefde en aandacht voor detail."
                </p>
                <p>
                  Nancy kiest bewust voor kwaliteit: geen veldboeketten, maar combinaties die écht werken. 
                  Van bruidsboeketten tot rouwstukken, alles wordt met zorg samengesteld.
                </p>
                <p>
                  En vergeet hond Kerel niet, de trouwe viervoeter die elke klant verwelkomt!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ons Aanbod Section */}
      <section id="aanbod" className="section-padding">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-3">Ons Aanbod</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-lg mx-auto">
            Van verse seizoensbloemen tot bijzondere planten, altijd met liefde samengesteld
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {aanbodImages.map((image, index) =>
          <div key={index} className="overflow-hidden shadow-soft">
                <img
              src={image}
              alt={`Ons aanbod ${index + 1}`}
              className="w-full aspect-square object-cover" />

              </div>
          )}
          </div>
        </div>
      </section>

      {/* Bezorgservice & Bestellen Section */}
      <section id="bestellen" className="section-padding bg-secondary">
        <div className="container-custom">
          <img src={bloemenOrnament} alt="Bloemen decoratie" className="w-full max-w-lg mx-auto mb-8" />
          <h2 className="heading-lg text-center mb-3">Bezorgservice & Bestellen</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Al 18 jaar maken wij met liefde bloemcreaties voor onze klanten. Nu bezorgen wij ook binnen een straal van 15 km rondom de winkel.
          </p>

          {/* 3 kolommen bezorginfo */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            <div className="bg-card p-6 shadow-soft text-center">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Bezorgen binnen 15 km</h3>
              <p className="text-sm text-muted-foreground">
                Wij bezorgen binnen een straal van 15 kilometer rondom de winkel.
              </p>
            </div>
            <div className="bg-card p-6 shadow-soft text-center">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Betalen via Tikkie</h3>
              <p className="text-sm text-muted-foreground">
                U bestelt via de website en ontvangt een Tikkie betaalverzoek. U betaalt dus achteraf.
              </p>
            </div>
            <div className="bg-card p-6 shadow-soft text-center">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Camera className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Bevestiging met foto</h3>
              <p className="text-sm text-muted-foreground">
                Na bezorging ontvangt u een bevestiging van aflevering met een foto.
              </p>
            </div>
          </div>

          {/* Bezorgmomenten - compact */}
          <div className="max-w-xl mx-auto bg-card p-5 shadow-soft mb-12">
            <div className="flex items-center gap-2 justify-center mb-3">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="font-heading font-semibold">Bezorgmomenten</h3>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Wij bezorgen overdag, 's avonds en op zaterdag.
            </p>
            <p className="text-sm text-muted-foreground text-center mt-1">
              Op zondag is bezorging mogelijk in overleg, met een toeslag van €15.
            </p>
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
      <section id="specialiteiten" className="section-padding bg-blush-light">
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
                  prachtige rouwstukken die recht doen aan wie er niet meer is.
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
                  Geen standaard bosjes! Nancy haalt bloemen vers bij de boer. 
                  Jouw boeket wordt naar wens samengesteld, met topkwaliteit én eerlijke prijs.
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

      {/* Galerij Section */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-3">Galerij</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-lg mx-auto">Een greep uit ons werk, elk bloemstuk uniek en met liefde gemaakt


        </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3 max-w-5xl mx-auto">
            {galerijImages.map((img, index) => <div key={index} className="overflow-hidden aspect-square">
                <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy" />

              </div>
          )}
          </div>
        </div>
      </section>

      {/* Hanny Schaft Section */}
      <section className="section-padding bg-card">
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
                  <p className="text-sm italic text-primary bg-blush/20 px-4 py-3 mt-2">
                    Een eervol samenwerkingsverband waar we bijzonder dankbaar voor zijn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Openingstijden Section */}
      <section id="openingstijden" className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-xl mx-auto text-center">
            <img src={bloemenOpeningstijden} alt="Bloemen decoratie" className="w-full mb-[-4rem] relative z-10" />
            <div className="bg-card shadow-soft p-6 md:p-8 pt-12 md:pt-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Clock className="w-7 h-7 text-primary" />
                <h2 className="heading-lg">Openingstijden</h2>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium">Maandag</span>
                  <span className="text-muted-foreground">Gesloten</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium">Dinsdag</span>
                  <span className="text-primary font-medium">12:00 – 17:30</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium">Woensdag</span>
                  <span className="text-primary font-medium">09:30 – 17:30</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium">Donderdag</span>
                  <span className="text-primary font-medium">09:30 – 17:30</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium">Vrijdag</span>
                  <span className="text-primary font-medium">09:30 – 17:30</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium">Zaterdag</span>
                  <span className="text-primary font-medium">09:00 – 17:00</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium">Zondag</span>
                  <span className="text-muted-foreground">Gesloten</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-border text-center">
                <p className="text-muted-foreground text-sm">
                  💡 Openingstijden kunnen soms afwijken, bijvoorbeeld rond feestdagen. 
                  Twijfel je? <a href="tel:0235315809" className="text-primary hover:underline font-medium">Bel even</a> en Nancy helpt je verder!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Instagram Combined Section */}
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Location Card */}
            <div className="bg-card overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300">
              <div className="p-5 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white flex items-center justify-center shadow-sm">
                    <GoogleMapsLogo className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold">Vind ons</h3>
                    <p className="text-sm text-muted-foreground">Hoofmanstraat 1, Haarlem</p>
                  </div>
                </div>
              </div>
              <div className="aspect-video">
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
              <div className="p-4 text-center">
                <a
                href="https://maps.google.com/?q=Hoofmanstraat+1+Haarlem"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline">

                  Route plannen
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Instagram Card */}
            <a
            href="https://www.instagram.com/madeliefstebloemen/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300 group block">

              <div className="p-5 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold">Volg ons</h3>
                    <p className="text-sm text-muted-foreground">@madeliefstebloemen</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-0.5">
                <img src={boeketGemengdImage} alt="Instagram post" className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300" />
                <img src={bloemstukImage} alt="Instagram post" className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300" />
                <img src={trouwboeketImage} alt="Instagram post" className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4 text-center">
                <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:underline">
                  Bekijk profiel op Instagram
                  <Instagram className="w-4 h-4" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GoogleLogo className="w-8 h-8" />
              <h2 className="heading-lg">Reviews</h2>
            </div>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />)}
              <span className="ml-2 text-muted-foreground">5.0 op Google</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => <div key={index} className="bg-card p-6 shadow-soft">
                <div className="flex items-center gap-2 mb-3">
                  <GoogleLogo className="w-4 h-4" />
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />)}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                <p className="font-medium text-foreground">{review.name}</p>
              </div>)}
          </div>
          <div className="text-center mt-8">
            <a href="https://www.google.com/maps/place/Madeliefste+Bloemen/@52.3884,4.6347,17z" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
              <GoogleLogo className="w-4 h-4" />
              Bekijk alle reviews op Google →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
}