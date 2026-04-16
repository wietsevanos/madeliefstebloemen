import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import OrderForm from "@/components/OrderForm";
import MoederdagBanner from "@/components/MoederdagBanner";
import Footer from "@/components/Footer";
import bloemenOrnament from "@/assets/bloemen-ornament.png";
import madeliefsteLogo from "@/assets/madeliefste-logo.png";

export default function Bestellen() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-blush/20 to-secondary">
      {/* Header */}
      <header className="bg-card/95 shadow-soft border-b-4 border-blush">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="font-heading text-xl md:text-2xl font-semibold flex items-center gap-2">
              <img src={madeliefsteLogo} alt="Madeliefste logo" className="w-8 h-8 md:w-10 md:h-10" />
              <span><span className="text-primary">Madeliefste</span>{" "}
              <span className="text-blush-dark">Bloemen</span></span>
            </Link>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Terug
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <MoederdagBanner />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-lg mx-auto">
            <div className="bg-card p-6 md:p-10 shadow-soft">
              <img src={bloemenOrnament} alt="Bloemen decoratie" className="w-full max-w-md mx-auto mb-6 px-4" />
              <h1 className="heading-lg text-center mb-2">Plaats uw bestelling</h1>
              <p className="text-center text-muted-foreground mb-10 text-sm">
                Vul hieronder uw gegevens in. Wij nemen persoonlijk contact met u op om alles af te stemmen.
              </p>
              <OrderForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
