import { Link } from "react-router-dom";
import { ArrowRight, Heart, Star, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import nancyImage from "@/assets/nancy.jpg";
import winkelImage from "@/assets/winkel.jpg";
import bouquetImage from "@/assets/bouquet-1.jpg";

export default function Over() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-medium text-lg mb-2 block animate-fade-in">Het verhaal</span>
            <h1 className="heading-xl mb-6 animate-fade-in-up">Over Nancy & Madeliefste</h1>
            <p className="body-lg text-muted-foreground animate-fade-in-delay-1">
              Een passie voor bloemen die begon als stage en uitgroeide tot een buurtinstituut in Haarlem.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section 1 */}
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
              <h2 className="heading-lg mb-6">Liefde op het eerste gezicht</h2>
              <p className="body-base text-muted-foreground mb-6">
                Vijftien jaar geleden kwam Nancy voor het eerst binnen bij de bloemenzaak in de Hoofmanstraat. 
                Het was eigenlijk voor een stage, maar ze voelde zich direct thuis tussen de verse bloemen en de 
                warme sfeer van de winkel.
              </p>
              <p className="body-base text-muted-foreground mb-6">
                "Ik wist meteen: dit is wat ik wil doen," vertelt Nancy. "De geur van verse bloemen, 
                het contact met de klanten, de creativiteit – alles klopte."
              </p>
              <p className="body-base text-muted-foreground">
                Na een periode van persoonlijke groei besloot Nancy de stap te wagen: ze volgde een opleiding 
                en nam uiteindelijk de winkel over. Een droom die werkelijkheid werd.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Star className="w-12 h-12 text-accent mx-auto mb-6" />
            <blockquote className="heading-md mb-6 italic">
              "Ik wil mensen blij maken met verse bloemen voor een eerlijke prijs. 
              Elke creatie maak ik met liefde en aandacht voor detail."
            </blockquote>
            <p className="text-primary-foreground/70">— Nancy, eigenares Madeliefste</p>
          </div>
        </div>
      </section>

      {/* Story Section 2 */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="heading-lg mb-6">Vakmanschap & kwaliteit</h2>
              <p className="body-base text-muted-foreground mb-6">
                Nancy gelooft in kwaliteit boven kwantiteit. Daarom maakt ze bewust geen veldboeketten – 
                bloemen uit verschillende families hebben verschillende verzorging nodig.
              </p>
              <p className="body-base text-muted-foreground mb-6">
                "Een boeket moet lang mooi blijven. Door bloemen te combineren die dezelfde verzorging nodig hebben, 
                garandeer ik dat mijn klanten lang plezier hebben van hun aankoop."
              </p>
              <p className="body-base text-muted-foreground">
                Seizoensbloemen zijn Nancy's grote favoriet. Van tulpen en narcissen in het voorjaar tot 
                prachtige amaryllissen in de winter – ze werkt het liefst met wat de natuur op dat moment te bieden heeft.
              </p>
            </div>
            <div className="order-1 lg:order-2 relative">
              <img
                src={bouquetImage}
                alt="Seizoensboeket met tulpen en narcissen"
                className="rounded-2xl shadow-medium w-full object-cover aspect-[4/5]"
              />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-sage/40 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section 3 - Community */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={winkelImage}
                alt="De winkel van Madeliefste"
                className="rounded-2xl shadow-medium w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-blush rounded-full -z-10" />
            </div>
            <div>
              <h2 className="heading-lg mb-6">Midden in de buurt</h2>
              <p className="body-base text-muted-foreground mb-6">
                Madeliefste is meer dan een bloemenzaak – het is een ontmoetingsplek in de wijk. 
                Buurtbewoners komen niet alleen voor bloemen, maar ook voor een praatje, een kopje koffie, 
                of om hun hond Kerel te begroeten die vaak in de winkel te vinden is.
              </p>
              <p className="body-base text-muted-foreground mb-6">
                "Soms brengen klanten chocolademelk of een stuk appeltaart langs," lacht Nancy. 
                "Grappig genoeg nooit bloemen – die hebben ze hier natuurlijk genoeg!"
              </p>
              <p className="body-base text-muted-foreground">
                Deze warme band met de buurt maakt het werk extra bijzonder. Van verjaardagen tot begrafenissen, 
                van trouwerijen tot geboortes – Nancy is er bij de belangrijke momenten in het leven van haar klanten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Projects */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-accent font-medium text-lg mb-2 block">Trots op</span>
            <h2 className="heading-lg">Bijzondere opdrachten</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-soft text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-3">Hanny Schaft Herdenking</h3>
              <p className="text-muted-foreground">
                Elk jaar maakt Nancy met trots de krans voor de Hanny Schaftstichting – 
                een eervolle opdracht die haar zeer na aan het hart ligt.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-8 shadow-soft text-center">
              <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-3">Trouwboeketten</h3>
              <p className="text-muted-foreground">
                Van romantische rozen tot wilde veldbloemen – elk bruidsboeket wordt 
                met uiterste zorg en in overleg met de bruid samengesteld.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-8 shadow-soft text-center">
              <Star className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-3">Rouwstukken</h3>
              <p className="text-muted-foreground">
                Met respect en aandacht creëert Nancy gepersonaliseerde rouwstukken 
                die een waardig afscheid ondersteunen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Kom langs voor een praatje</h2>
          <p className="body-lg max-w-2xl mx-auto mb-8 text-primary-foreground/80">
            Benieuwd naar Nancy en haar bloemen? Kom gezellig langs in de Hoofmanstraat – 
            wie weet treffen we elkaar bij een kopje koffie!
          </p>
          <Button variant="warm" size="lg" asChild>
            <Link to="/contact">
              Bezoek ons
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
