import { Instagram, MessageCircle } from "lucide-react";
import { Daisy, DaisyStem } from "@/components/Botanical";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground pt-16 pb-10">
      <DaisyStem className="absolute -right-4 bottom-0 w-40 md:w-56 h-auto text-primary-foreground/10" />
      <div className="container-custom relative">
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <h3 className="font-heading text-3xl mb-3 flex items-center justify-center md:justify-start gap-2"><Daisy className="w-8 h-8 text-blush" /><span>Madeliefste <span className="italic text-blush">Bloemen</span></span></h3>
            <p className="text-primary-foreground/70 text-sm">Jouw buurtbloemist in Haarlem</p>
          </div>
          <div>
            <h4 className="font-medium mb-2 text-sm uppercase tracking-wide text-primary-foreground/80">Contact</h4>
            <div className="space-y-1 text-base text-primary-foreground/80">
              <p>Hoofmanstraat 1, 2014 DP Haarlem</p>
              <a href="tel:0235315809" className="hover:text-primary-foreground transition-colors block">023 531 58 09</a>
              <a href="mailto:madeliefstebloemen@gmail.com" className="hover:text-primary-foreground transition-colors block">madeliefstebloemen@gmail.com</a>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-2 text-sm uppercase tracking-wide text-primary-foreground/80">Volg ons</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="https://www.instagram.com/madeliefstebloemen/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/85 hover:bg-primary-foreground/10 hover:text-primary-foreground transition-colors">
                <Instagram className="w-6 h-6" strokeWidth={1.5} />
              </a>
              <a href="https://wa.me/31651343023" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/85 hover:bg-primary-foreground/10 hover:text-primary-foreground transition-colors">
                <MessageCircle className="w-6 h-6" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-primary-foreground/30 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-primary-foreground/70">
          <p>© 2026 Madeliefste Bloemen</p>
          <p>Fotografie: Sanna en Wietse</p>
          <p>KvK: 52278506</p>
        </div>
      </div>
    </footer>
  );
}
