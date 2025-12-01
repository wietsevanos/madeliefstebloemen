import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

export default function Contact() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-medium text-lg mb-2 block animate-fade-in">Neem contact op</span>
            <h1 className="heading-xl mb-6 animate-fade-in-up">Contact</h1>
            <p className="body-lg text-muted-foreground animate-fade-in-delay-1">
              Vragen, bestellingen of gewoon even langskomen? Je bent altijd welkom!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="bg-card rounded-xl p-8 shadow-soft hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-sage/30 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-3">Telefoon</h3>
                    <a
                      href="tel:0235315809"
                      className="block text-lg text-primary hover:underline mb-2"
                    >
                      023 531 58 09
                    </a>
                    <a
                      href="tel:0651343023"
                      className="block text-lg text-primary hover:underline"
                    >
                      06 51 34 30 23
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-card rounded-xl p-8 shadow-soft hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-blush/50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-3">E-mail</h3>
                    <a
                      href="mailto:nancy.stoete@gmail.com"
                      className="text-lg text-primary hover:underline"
                    >
                      nancy.stoete@gmail.com
                    </a>
                    <p className="text-muted-foreground mt-2">
                      We reageren meestal binnen 24 uur.
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-card rounded-xl p-8 shadow-soft hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-sage/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-3">Adres</h3>
                    <address className="text-lg not-italic text-foreground mb-3">
                      Hoofmanstraat 1<br />
                      2014 DP Haarlem
                    </address>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://maps.google.com/?q=Hoofmanstraat+1,+2014+DP+Haarlem"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Route plannen
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-card rounded-xl p-8 shadow-soft hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-blush/50 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-heading text-xl font-semibold mb-4">Openingstijden</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Maandag</span>
                        <span className="font-medium">Gesloten</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Dinsdag</span>
                        <span className="font-medium">12:00 – 17:30</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Woensdag</span>
                        <span className="font-medium">09:30 – 17:30</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Donderdag</span>
                        <span className="font-medium">09:30 – 17:30</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Vrijdag</span>
                        <span className="font-medium">09:30 – 17:30</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Zaterdag</span>
                        <span className="font-medium">09:00 – 17:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Zondag</span>
                        <span className="font-medium">Gesloten</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="lg:sticky lg:top-28 h-fit">
              <div className="bg-card rounded-xl overflow-hidden shadow-soft">
                <iframe
                  title="Locatie Madeliefste Bloemen"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.8762898445824!2d4.634!3d52.384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5ef6a1a0b0001%3A0x0!2sHoofmanstraat%201%2C%202014%20DP%20Haarlem!5e0!3m2!1snl!2snl!4v1700000000000!5m2!1snl!2snl"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-2">Madeliefste Bloemen</h3>
                  <p className="text-muted-foreground">
                    Gevestigd in de gezellige Hoofmanstraat, midden in de buurt. 
                    Parkeren kan in de omliggende straten.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Direct contact?</h2>
          <p className="body-lg max-w-2xl mx-auto mb-8 text-primary-foreground/80">
            Bel ons gerust – we helpen je graag met advies of nemen je bestelling op.
          </p>
          <Button variant="warm" size="lg" asChild>
            <a href="tel:0235315809">
              <Phone className="w-5 h-5" />
              023 531 58 09
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
