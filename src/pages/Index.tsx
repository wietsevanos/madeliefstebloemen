import { Link } from "react-router-dom";
import { MapPin, Clock, Phone, ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/assets/hero-flowers.jpg";
import nancyImage from "@/assets/nancy.jpg";
import winkelImage from "@/assets/winkel.jpg";
import bouquetImage from "@/assets/bouquet-1.jpg";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Prachtig bloemboeket bij Madeliefste"
            className="image-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-transparent" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl text-primary-foreground">
            <h1 className="heading-xl animate-fade-in-up mb-6 text-balance">
              Madeliefste Bloemen
            </h1>
            <p className="body-lg animate-fade-in-delay-1 mb-4 text-primary-foreground/90">
              Jouw buurtbloemist in de Hoofmanstraat, Haarlem
            </p>
            <p className="body-base animate-fade-in-delay-2 mb-8 text-primary-foreground/80">
              Met passie en vakmanschap maken we verse boeketten, seizoensarrangementen en speciale creaties voor al je bijzondere momenten.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-delay-3">
              <Button variant="warm" size="lg" asChild>
                <Link to="/contact">
                  Contact opnemen
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/20" asChild>
                <Link to="/diensten">
                  Bekijk aanbod
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Opening Hours */}
            <div className="bg-card rounded-xl p-8 shadow-soft hover-lift">
              <div className="w-14 h-14 rounded-full bg-sage/30 flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="heading-md mb-4">Openingstijden</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex justify-between">
                  <span>Dinsdag</span>
                  <span>12:00 – 17:30</span>
                </li>
                <li className="flex justify-between">
                  <span>Wo – Vr</span>
                  <span>09:30 – 17:30</span>
                </li>
                <li className="flex justify-between">
                  <span>Zaterdag</span>
                  <span>09:00 – 17:00</span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-card rounded-xl p-8 shadow-soft hover-lift">
              <div className="w-14 h-14 rounded-full bg-blush/50 flex items-center justify-center mb-6">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="heading-md mb-4">Contact</h3>
              <div className="space-y-3 text-muted-foreground">
                <a href="tel:0235315809" className="block hover:text-primary transition-colors">
                  023 531 58 09
                </a>
                <a href="tel:0651343023" className="block hover:text-primary transition-colors">
                  06 51 34 30 23
                </a>
                <a href="mailto:nancy.stoete@gmail.com" className="block hover:text-primary transition-colors text-sm">
                  nancy.stoete@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="bg-card rounded-xl p-8 shadow-soft hover-lift">
              <div className="w-14 h-14 rounded-full bg-sage/30 flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="heading-md mb-4">Locatie</h3>
              <p className="text-muted-foreground mb-4">
                Hoofmanstraat 1<br />
                2014 DP Haarlem
              </p>
              <a
                href="https://maps.google.com/?q=Hoofmanstraat+1,+2014+DP+Haarlem"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                Bekijk route <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={nancyImage}
                alt="Nancy, eigenares van Madeliefste Bloemen"
                className="rounded-2xl shadow-medium w-full object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blush rounded-full -z-10" />
            </div>
            <div>
              <span className="text-accent font-medium text-lg mb-2 block">Over de eigenares</span>
              <h2 className="heading-lg mb-6">Maak kennis met Nancy</h2>
              <p className="body-base text-muted-foreground mb-6">
                Al meer dan 15 jaar is Nancy de drijvende kracht achter Madeliefste. 
                Wat begon als een stageplek, groeide uit tot een passie die ze elke dag deelt met de buurt.
              </p>
              <p className="body-base text-muted-foreground mb-8">
                "Ik wil mensen blij maken met verse bloemen voor een eerlijke prijs. 
                Elke creatie maak ik met liefde en aandacht voor detail."
              </p>
              <Button asChild>
                <Link to="/over">
                  Lees het hele verhaal
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Preview */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-accent font-medium text-lg mb-2 block">De winkel</span>
              <h2 className="heading-lg mb-6">Een warm welkom in de buurt</h2>
              <p className="body-base text-muted-foreground mb-6">
                In de Hoofmanstraat vind je onze gezellige bloemenzaak. Een plek waar verse bloemen, 
                seizoensplanten en ambachtelijke creaties samenkomen.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Persoonlijke service en vakkundig advies</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Verse seizoensbloemen elke dag</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Speciale opdrachten op maat</span>
                </li>
              </ul>
              <Button variant="outline" asChild>
                <Link to="/galerie">
                  Bekijk de galerie
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative">
              <img
                src={winkelImage}
                alt="De bloemenzaak Madeliefste"
                className="rounded-2xl shadow-medium w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-sage/40 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Iets speciaals in gedachten?</h2>
          <p className="body-lg max-w-2xl mx-auto mb-8 text-primary-foreground/80">
            Van trouwboeketten tot rouwstukken, van verjaardagsboeketten tot kerststukjes – 
            we maken het met liefde voor je.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="warm" size="lg" asChild>
              <Link to="/diensten">
                Bekijk ons aanbod
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/20" asChild>
              <a href="tel:0235315809">
                <Phone className="w-5 h-5" />
                Bel ons direct
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
