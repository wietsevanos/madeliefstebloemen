import { useState } from "react";
import { MapPin, Clock, Phone, Star, Heart, Flower2, Gift, TreeDeciduous, Send, MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import winkelImage from "@/assets/winkel.jpg";
import nancyImage from "@/assets/nancy.jpg";
import boeketGemengdImage from "@/assets/boeket-gemengd.jpg";
import bloemstukImage from "@/assets/bloemstuk.jpg";
import trouwboeketImage from "@/assets/trouwboeket.jpg";
import rouwstukImage from "@/assets/rouwstuk.jpg";

const services = [
  { 
    title: "Verse Bloemen", 
    icon: Flower2, 
    image: boeketGemengdImage,
    prices: [
      { item: "Gemengd boeket klein", price: "€12,50" },
      { item: "Gemengd boeket medium", price: "€17,50" },
      { item: "Gemengd boeket groot", price: "€25,00" },
      { item: "Luxe boeket", price: "vanaf €35,00" },
    ]
  },
  { 
    title: "Trouwboeketten", 
    icon: Heart, 
    image: trouwboeketImage,
    prices: [
      { item: "Bruidsboeket classic", price: "vanaf €75,00" },
      { item: "Bruidsboeket luxe", price: "vanaf €125,00" },
      { item: "Corsage bruidegom", price: "€15,00" },
    ]
  },
  { 
    title: "Rouwstukken", 
    icon: TreeDeciduous, 
    image: rouwstukImage,
    prices: [
      { item: "Rouwboeket", price: "vanaf €25,00" },
      { item: "Kistbedekking", price: "vanaf €95,00" },
      { item: "Rouwkrans", price: "vanaf €85,00" },
    ]
  },
  { 
    title: "Seizoensarrangementen", 
    icon: Gift, 
    image: bloemstukImage,
    prices: [
      { item: "Kerststukje", price: "vanaf €18,50" },
      { item: "Kerstkrans", price: "vanaf €35,00" },
      { item: "Seizoensboeket", price: "vanaf €22,50" },
    ]
  },
];

const reviews = [
  { name: "Maria V.", rating: 5, text: "Altijd prachtige verse bloemen en geweldig advies van Nancy!" },
  { name: "Jan de B.", rating: 5, text: "De beste bloemist van Haarlem. Persoonlijke service en oog voor detail." },
  { name: "Annemiek", rating: 5, text: "Mijn vaste adres voor alle speciale gelegenheden. Top!" },
];

const GoogleLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

export default function Index() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Vraag van ${contactForm.name}`);
    const body = encodeURIComponent(`Naam: ${contactForm.name}\nE-mail: ${contactForm.email}\n\nBericht:\n${contactForm.message}`);
    window.location.href = `mailto:nancy.stoete@gmail.com?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm shadow-soft">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            <span className="font-heading text-xl md:text-2xl font-semibold text-primary">
              Madeliefste
            </span>
            <div className="flex items-center gap-3">
              <a 
                href="https://wa.me/31651343023" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 text-white px-3 py-2 rounded-full hover:bg-green-600 transition-colors text-sm font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
              <a href="tel:0235315809" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                <Phone className="w-5 h-5" />
                <span className="font-medium hidden sm:inline">023 531 58 09</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Full Screen */}
      <section className="relative h-screen flex items-end">
        <div className="absolute inset-0 z-0">
          <img
            src={winkelImage}
            alt="Bloemenzaak Madeliefste van buiten"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
        </div>
        
        <div className="container-custom relative z-10 text-center pb-12 md:pb-16">
          <h1 className="heading-xl animate-fade-in-up mb-3 text-primary-foreground">
            Madeliefste Bloemen
          </h1>
          <p className="body-lg animate-fade-in-delay-1 mb-8 text-primary-foreground/90 max-w-xl mx-auto">
            Jouw buurtbloemist in de Hoofmanstraat, Haarlem
          </p>
          
          {/* Two Main Buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-delay-2">
            {/* Over Nancy Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="warm" size="lg">Over Nancy</Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="heading-md text-primary">Maak kennis met Nancy</DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <img 
                    src={nancyImage} 
                    alt="Nancy, eigenares van Madeliefste" 
                    className="w-full rounded-xl"
                  />
                  <div className="space-y-4 text-muted-foreground text-lg">
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
                      Van bruidsboeketten tot rouwstukken, alles wordt met zorg samengesteld.
                    </p>
                    <p>
                      En vergeet hond Kerel niet – de trouwe viervoeter die elke klant verwelkomt!
                    </p>
                  </div>
                  <div className="flex justify-center pt-4">
                    <a 
                      href="https://www.instagram.com/madeliefstebloemen/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity font-medium"
                    >
                      <Instagram className="w-5 h-5" />
                      Volg op Instagram
                    </a>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Contact Form Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="bg-primary-foreground/20 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/30">
                  Stel een Vraag
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg">
                <DialogHeader>
                  <DialogTitle className="heading-md text-primary">Stel een Vraag</DialogTitle>
                </DialogHeader>
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-sage/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Bedankt!</h3>
                    <p className="text-muted-foreground">Je e-mailprogramma wordt geopend om je bericht te versturen.</p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => { setFormSubmitted(false); setContactForm({ name: "", email: "", message: "" }); }}
                    >
                      Nieuwe vraag stellen
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Je naam</label>
                      <Input 
                        placeholder="Naam" 
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Je e-mailadres</label>
                      <Input 
                        type="email"
                        placeholder="email@voorbeeld.nl" 
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Je vraag of bericht</label>
                      <Textarea 
                        placeholder="Waar kunnen we je mee helpen?" 
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        rows={4}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      <Send className="w-4 h-4 mr-2" />
                      Verstuur via e-mail
                    </Button>
                  </form>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Opening Hours - Single compact card */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-md mx-auto bg-card rounded-xl p-6 shadow-soft text-center">
            <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-heading font-semibold text-lg mb-4">Openingstijden</h3>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">Maandag & Zondag gesloten</p>
              <p><span className="font-medium">Di</span> 12:00 – 17:30</p>
              <p><span className="font-medium">Wo – Vr</span> 09:30 – 17:30</p>
              <p><span className="font-medium">Za</span> 09:00 – 17:00</p>
            </div>
            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2">Hoofmanstraat 1, Haarlem</p>
              <a href="tel:0235315809" className="text-primary hover:underline font-medium text-sm">
                <Phone className="w-4 h-4 inline mr-1" />023 531 58 09
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Aanbod Section - On page */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-10">Ons Aanbod</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-card rounded-xl overflow-hidden shadow-soft">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <service.icon className="w-5 h-5 text-accent" />
                    <h3 className="font-heading font-semibold text-foreground">{service.title}</h3>
                  </div>
                  <ul className="space-y-1 text-sm">
                    {service.prices.map((price, idx) => (
                      <li key={idx} className="flex justify-between">
                        <span className="text-muted-foreground">{price.item}</span>
                        <span className="font-medium text-foreground">{price.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-8">
            Indicatieprijzen. Bel of WhatsApp ons voor bestellingen!
          </p>
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
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              ))}
              <span className="ml-2 text-muted-foreground">5.0 op Google</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-soft">
                <div className="flex items-center gap-2 mb-3">
                  <GoogleLogo className="w-4 h-4" />
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                <p className="font-medium text-foreground">{review.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a 
              href="https://www.google.com/maps/place/Madeliefste+Bloemen/@52.3884,4.6347,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <GoogleLogo className="w-4 h-4" />
              Bekijk alle reviews op Google →
            </a>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-3 mb-6">
            <MapPin className="w-6 h-6 text-primary" />
            <h2 className="heading-lg">Vind Ons</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl overflow-hidden border-4 border-primary/30 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.5!2d4.6347!3d52.3884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5ef0eb7f8c0d7%3A0x5c3e9d8e8e8e8e8e!2sHoofmanstraat%201%2C%202014%20DP%20Haarlem!5e1!3m2!1snl!2snl!4v1699000000000!5m2!1snl!2snl&maptype=satellite"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locatie Madeliefste Bloemen"
              />
            </div>
            <p className="text-center text-muted-foreground mt-4">
              Hoofmanstraat 1, 2014 DP Haarlem
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container-custom text-center">
          <h3 className="font-heading text-2xl font-semibold mb-4">Madeliefste Bloemen</h3>
          <div className="flex justify-center gap-4 mb-4">
            <a 
              href="https://www.instagram.com/madeliefstebloemen/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="https://wa.me/31651343023" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
          <p className="text-primary-foreground/60 text-sm">© 2024 Madeliefste Bloemen</p>
        </div>
      </footer>
    </div>
  );
}
