import { MapPin, Clock, Phone, Star, MessageCircle, Instagram } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
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

const aanbodImages = [
  aanbod1Image,
  aanbod2Image,
  aanbod3Image,
  aanbod4Image,
  aanbod5Image,
  aanbod6Image,
  aanbod7Image,
  aanbod8Image,
];

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
}: {
  className?: string;
}) => <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>;

const GoogleMapsLogo = ({
  className = "w-5 h-5"
}: {
  className?: string;
}) => <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#4285F4" d="M12 0C7.31 0 3.5 3.81 3.5 8.5c0 5.56 7.1 13.89 7.41 14.26.31.38.88.38 1.19 0 .31-.37 7.41-8.7 7.41-14.26C19.5 3.81 15.69 0 12 0zm0 11.5c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
    <path fill="#34A853" d="M12 2c3.31 0 6 2.69 6 6.5 0 2.91-2.14 6.79-4.5 10.08V8.5c0-1.38-1.12-2.5-2.5-2.5S8.5 7.12 8.5 8.5v10.08C6.14 15.29 4 11.41 4 8.5 4 4.69 6.69 2 10 2h2z" opacity="0.3" />
  </svg>;
export default function Index() {
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm shadow-soft border-b-4 border-blush">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            <span className="font-heading text-xl md:text-2xl font-semibold">
              <span className="text-primary">Madeliefste</span>{" "}
              <span className="text-blush-dark">Bloemen</span>
            </span>
            <a href="tel:0235315809" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-medium">023 531 58 09</span>
            </a>
          </div>
        </div>
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
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-delay-2">
            <Button 
              variant="warm" 
              size="lg"
              onClick={() => document.getElementById('aanbod')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Bekijk ons aanbod
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-primary-foreground/20 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/30"
                >
                  <Clock className="w-4 h-4 mr-2" />
                  Openingstijden
                </Button>
              </DialogTrigger>
              <DialogContent className="p-0 border-0 bg-transparent max-w-md">
                <div className="bg-card p-6 shadow-soft text-center rounded-xl">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-lg mb-4">Openingstijden</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-medium">Maandag</span>
                      <span className="text-muted-foreground">Gesloten</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-medium">Dinsdag</span>
                      <span className="text-primary font-medium">12:00 – 17:30</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-medium">Woensdag</span>
                      <span className="text-primary font-medium">09:30 – 17:30</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-medium">Donderdag</span>
                      <span className="text-primary font-medium">09:30 – 17:30</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-medium">Vrijdag</span>
                      <span className="text-primary font-medium">09:30 – 17:30</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-medium">Zaterdag</span>
                      <span className="text-primary font-medium">09:00 – 17:00</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">Zondag</span>
                      <span className="text-muted-foreground">Gesloten</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-2">Hoofmanstraat 1, Haarlem</p>
                    <a href="tel:0235315809" className="text-primary hover:underline font-medium text-sm">
                      <Phone className="w-4 h-4 inline mr-1" />023 531 58 09
                    </a>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
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
                  En vergeet hond Kerel niet, de trouwe viervoeter die elke klant verwelkomt!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ons Aanbod Section - Simple Photo Gallery */}
      <section id="aanbod" className="section-padding">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-3">Ons Aanbod</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-lg mx-auto">
            Van verse seizoensbloemen tot bijzondere planten, altijd met liefde samengesteld
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {aanbodImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-soft">
                <img 
                  src={image} 
                  alt={`Ons aanbod ${index + 1}`} 
                  className="w-full aspect-square object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onze Specialiteiten Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-3">Onze Specialiteiten</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-lg mx-auto">
            Waar we écht in uitblinken, met hart en ziel
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Rouwstukken */}
            <div className="bg-card rounded-xl overflow-hidden shadow-soft">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌿</span>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-4">Rouwstukken</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Een laatste groet verdient alle aandacht. Nancy maakt met warmte en respect 
                  prachtige rouwstukken die recht doen aan wie er niet meer is. 
                  Persoonlijk, liefdevol, en precies zoals het hoort.
                </p>
              </div>
            </div>

            {/* Zelf samengestelde boeketten */}
            <div className="bg-card rounded-xl overflow-hidden shadow-soft">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-blush/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💐</span>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-4">Boeketten op Maat</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Geen standaard bosjes hier! Nancy haalt haar bloemen kort van tevoren 
                  vers bij de boer. Jouw boeket wordt helemaal naar wens samengesteld, 
                  met topkwaliteit én een eerlijke prijs. Vertellen wat je wilt, en wij toveren het tevoorschijn!
                </p>
              </div>
            </div>
          </div>

          {/* Hanny Schaftstichting Partnership */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-card border border-primary/20 rounded-xl p-6 text-center shadow-soft">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl">🤝</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-primary">Trotse Partner</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Madeliefste Bloemen verzorgt met gepaste trots de boeketten voor de{" "}
                <span className="font-semibold text-foreground">Hanny Schaftstichting</span>. 
                Een eervol samenwerkingsverband waar we bijzonder dankbaar voor zijn.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Location & Instagram Combined Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Location Card */}
            <div className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300">
              <div className="p-5 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
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
                  title="Locatie Madeliefste Bloemen" 
                />
              </div>
              <div className="p-4 text-center">
                <a 
                  href="https://maps.google.com/?q=Hoofmanstraat+1+Haarlem" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
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
              className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300 group block"
            >
              <div className="p-5 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center">
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

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container-custom text-center">
          <h3 className="font-heading text-2xl font-semibold mb-4">Madeliefste Bloemen</h3>
          <p className="text-primary-foreground/80 text-sm mb-2">Hoofmanstraat 1, 2014 DP Haarlem</p>
          <p className="text-primary-foreground/80 text-sm mb-4">023 531 58 09</p>
          <div className="flex justify-center gap-4 mb-4">
            <a href="https://www.instagram.com/madeliefstebloemen/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://wa.me/31651343023" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
          <p className="text-primary-foreground/60 text-xs">KvK: 52278506</p>
          <p className="text-primary-foreground/60 text-xs mt-1">© 2024 Madeliefste Bloemen</p>
        </div>
      </footer>
    </div>;
}