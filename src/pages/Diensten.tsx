import { Link } from "react-router-dom";
import { Phone, ArrowRight, Flower2, Heart, Star, Gift, TreePine, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import bouquetImage from "@/assets/bouquet-1.jpg";
import trouwboeket from "@/assets/trouwboeket.jpg";
import rouwstuk from "@/assets/rouwstuk.jpg";
import kerststuk from "@/assets/kerststuk.jpg";

const services = [
  {
    icon: Flower2,
    title: "Verse Dagbloemen",
    description: "Elke dag verse bloemen, zorgvuldig geselecteerd voor kwaliteit en houdbaarheid. Van klassieke rozen tot bijzondere seizoensbloemen.",
    image: bouquetImage,
  },
  {
    icon: Sparkles,
    title: "Seizoensboeketten",
    description: "Tulpen in het voorjaar, zonnebloemen in de zomer, chrysanten in de herfst en amaryllissen in de winter. Werk met de mooiste bloemen van het seizoen.",
    image: bouquetImage,
  },
  {
    icon: Heart,
    title: "Trouwboeketten",
    description: "Jouw grote dag verdient perfecte bloemen. In overleg creëren we een uniek bruidsboeket en bloemwerk dat past bij jullie stijl en thema.",
    image: trouwboeket,
  },
  {
    icon: Star,
    title: "Rouwstukken",
    description: "Met respect en vakmanschap maken we gepersonaliseerde rouwstukken. Een waardig laatste eerbetoon, afgestemd op de wensen van de nabestaanden.",
    image: rouwstuk,
  },
  {
    icon: Gift,
    title: "Speciale Opdrachten",
    description: "Een jubileum, opening of evenement? We maken unieke arrangementen op maat, van klein tot groot, voor elk speciaal moment.",
    image: bouquetImage,
  },
  {
    icon: TreePine,
    title: "Kerststukjes",
    description: "Vanaf november verkopen we sfeervolle kerststukjes en arrangementen. Met kaarsen, dennengroen en feestelijke accenten wordt het meteen gezellig.",
    image: kerststuk,
  },
];

export default function Diensten() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-medium text-lg mb-2 block animate-fade-in">Ons aanbod</span>
            <h1 className="heading-xl mb-6 animate-fade-in-up">Diensten & Producten</h1>
            <p className="body-lg text-muted-foreground animate-fade-in-delay-1">
              Van dagverse bloemen tot speciale opdrachten – bij Madeliefste vind je alles voor elk moment.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-card rounded-2xl overflow-hidden shadow-soft hover-lift group"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="image-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-sage/30 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-2xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href="tel:0235315809">
                        <Phone className="w-4 h-4" />
                        Bellen
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href="mailto:nancy.stoete@gmail.com">
                        Mailen
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-accent font-medium text-lg mb-2 block">Hoe werkt het?</span>
            <h2 className="heading-lg">Bestellen bij Madeliefste</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-heading font-semibold">
                1
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Neem contact op</h3>
              <p className="text-muted-foreground">
                Bel of mail ons met je wensen. Vertel wat de gelegenheid is en welke stijl je in gedachten hebt.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-heading font-semibold">
                2
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Persoonlijk advies</h3>
              <p className="text-muted-foreground">
                Nancy denkt met je mee en geeft advies over bloemen, kleuren en vormen die het beste passen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-heading font-semibold">
                3
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Afhalen of bezorgen</h3>
              <p className="text-muted-foreground">
                Haal je bestelling op in de winkel of vraag naar de mogelijkheden voor bezorging in de omgeving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Klaar om te bestellen?</h2>
          <p className="body-lg max-w-2xl mx-auto mb-8 text-primary-foreground/80">
            Neem contact op en vertel ons wat je zoekt. We helpen je graag aan het perfecte bloemstuk!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="warm" size="lg" asChild>
              <a href="tel:0235315809">
                <Phone className="w-5 h-5" />
                023 531 58 09
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/20" asChild>
              <Link to="/contact">
                Naar contact
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
