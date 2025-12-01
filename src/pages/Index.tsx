import { MapPin, Clock, Phone, Mail, Star, Heart, Flower2, Gift, TreeDeciduous } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import winkelImage from "@/assets/winkel.jpg";
import nancyImage from "@/assets/nancy.jpg";
import bouquetImage from "@/assets/bouquet-1.jpg";
import trouwboeketImage from "@/assets/trouwboeket.jpg";
import rouwstukImage from "@/assets/rouwstuk.jpg";
import kerststukImage from "@/assets/kerststuk.jpg";

const services = [
  { title: "Verse Dagbloemen", description: "Elke dag verse, prachtige bloemen uit de veiling", icon: Flower2, image: bouquetImage },
  { title: "Trouwboeketten", description: "Maak je speciale dag nog mooier met een uniek boeket", icon: Heart, image: trouwboeketImage },
  { title: "Rouwstukken", description: "Met respect en aandacht samengestelde bloemstukken", icon: TreeDeciduous, image: rouwstukImage },
  { title: "Kerststukjes", description: "Sfeervolle arrangementen voor de feestdagen", icon: Gift, image: kerststukImage },
];

const reviews = [
  { name: "Maria V.", rating: 5, text: "Altijd prachtige verse bloemen en geweldig advies van Nancy!" },
  { name: "Jan de B.", rating: 5, text: "De beste bloemist van Haarlem. Persoonlijke service en oog voor detail." },
  { name: "Annemiek", rating: 5, text: "Mijn vaste adres voor alle speciale gelegenheden. Top!" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Simple Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm shadow-soft">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            <span className="font-heading text-xl md:text-2xl font-semibold text-primary">
              Madeliefste
            </span>
            <a href="tel:0235315809" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-medium hidden sm:inline">023 531 58 09</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Shop Image */}
      <section className="relative min-h-[85vh] flex items-center pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src={winkelImage}
            alt="Bloemenzaak Madeliefste van buiten"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
        </div>
        
        <div className="container-custom relative z-10 text-center mt-auto pb-16">
          <h1 className="heading-xl animate-fade-in-up mb-4 text-primary-foreground">
            Madeliefste Bloemen
          </h1>
          <p className="body-lg animate-fade-in-delay-1 mb-8 text-primary-foreground/90 max-w-xl mx-auto">
            Jouw buurtbloemist in de Hoofmanstraat, Haarlem
          </p>
          
          {/* Popup Buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-delay-2">
            {/* Over Nancy Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="warm" size="lg">Over Nancy</Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="heading-md text-primary">Maak kennis met Nancy</DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <img 
                    src={nancyImage} 
                    alt="Nancy, eigenares van Madeliefste" 
                    className="w-full rounded-xl object-cover object-top aspect-[4/3]"
                  />
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Al meer dan 15 jaar is Nancy de drijvende kracht achter Madeliefste. 
                      Wat begon als een stageplek, groeide uit tot een passie die ze elke dag deelt met de buurt.
                    </p>
                    <p>
                      "Ik wil mensen blij maken met verse bloemen voor een eerlijke prijs. 
                      Elke creatie maak ik met liefde en aandacht voor detail."
                    </p>
                    <p>
                      Nancy kiest bewust voor kwaliteit: geen veldboeketten, maar combinaties die écht werken. 
                      En vergeet hond Kerel niet – de trouwe viervoeter die elke klant verwelkomt!
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Aanbod Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="bg-primary-foreground/20 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/30">
                  Bekijk Aanbod
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="heading-md text-primary">Ons Aanbod</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {services.map((service) => (
                    <div key={service.title} className="bg-secondary rounded-xl overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <service.icon className="w-5 h-5 text-accent" />
                          <h3 className="font-heading font-semibold text-foreground">{service.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-center text-muted-foreground mt-4">
                  Bel of mail voor speciale bestellingen!
                </p>
              </DialogContent>
            </Dialog>

            {/* Contact Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="bg-primary-foreground/20 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/30">
                  Contact
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg">
                <DialogHeader>
                  <DialogTitle className="heading-md text-primary">Contact</DialogTitle>
                </DialogHeader>
                <div className="space-y-6 mt-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-sage/30 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Telefoon</h3>
                      <a href="tel:0235315809" className="block text-muted-foreground hover:text-primary transition-colors">023 531 58 09</a>
                      <a href="tel:0651343023" className="block text-muted-foreground hover:text-primary transition-colors">06 51 34 30 23</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blush/50 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                      <a href="mailto:nancy.stoete@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        nancy.stoete@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-sage/30 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Adres</h3>
                      <p className="text-muted-foreground">Hoofmanstraat 1<br />2014 DP Haarlem</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blush/50 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Openingstijden</h3>
                      <ul className="text-muted-foreground space-y-1">
                        <li className="flex justify-between gap-8"><span>Dinsdag</span><span>12:00 – 17:30</span></li>
                        <li className="flex justify-between gap-8"><span>Wo – Vr</span><span>09:30 – 17:30</span></li>
                        <li className="flex justify-between gap-8"><span>Zaterdag</span><span>09:00 – 17:00</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-card rounded-xl p-6 shadow-soft">
              <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold mb-2">Openingstijden</h3>
              <p className="text-sm text-muted-foreground">Di 12:00-17:30 • Wo-Vr 09:30-17:30 • Za 09:00-17:00</p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-soft">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold mb-2">Bel Ons</h3>
              <a href="tel:0235315809" className="text-sm text-muted-foreground hover:text-primary transition-colors">023 531 58 09</a>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-soft">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold mb-2">Locatie</h3>
              <p className="text-sm text-muted-foreground">Hoofmanstraat 1, Haarlem</p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="heading-lg mb-2">Wat klanten zeggen</h2>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              ))}
              <span className="ml-2 text-muted-foreground">op Google</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-soft">
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                <p className="font-medium text-foreground">{review.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a 
              href="https://www.google.com/maps/place/Madeliefste+Bloemen/@52.3884,4.6347,17z/data=!4m8!3m7!1s0x47c5ef0eb7f8c0d7:0x5c3e9d8e8e8e8e8e!8m2!3d52.3884!4d4.6347!9m1!1b1!16s%2Fg%2F1tf7_0_c"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Bekijk alle reviews op Google →
            </a>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="bg-secondary">
        <div className="container-custom py-10">
          <h2 className="heading-lg text-center mb-6">Bezoek ons</h2>
        </div>
        <div className="w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.5!2d4.6347!3d52.3884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5ef0eb7f8c0d7%3A0x5c3e9d8e8e8e8e8e!2sHoofmanstraat%201%2C%202014%20DP%20Haarlem!5e0!3m2!1snl!2snl!4v1699000000000!5m2!1snl!2snl"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Locatie Madeliefste Bloemen"
          />
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-primary text-primary-foreground py-10">
        <div className="container-custom text-center">
          <h3 className="font-heading text-2xl font-semibold mb-4">Madeliefste Bloemen</h3>
          <p className="text-primary-foreground/80 mb-4">Hoofmanstraat 1, 2014 DP Haarlem</p>
          <div className="flex justify-center gap-6 mb-4">
            <a href="tel:0235315809" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              023 531 58 09
            </a>
            <a href="mailto:nancy.stoete@gmail.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              nancy.stoete@gmail.com
            </a>
          </div>
          <p className="text-primary-foreground/60 text-sm">© 2024 Madeliefste Bloemen. Alle rechten voorbehouden.</p>
        </div>
      </footer>
    </div>
  );
}
