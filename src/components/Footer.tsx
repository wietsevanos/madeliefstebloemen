import { Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-heading text-xl font-semibold mb-2">Madeliefste Bloemen</h3>
            <p className="text-primary-foreground/70 text-sm">Jouw buurtbloemist in Haarlem</p>
          </div>
          <div>
            <h4 className="font-medium mb-2 text-sm uppercase tracking-wide text-primary-foreground/80">Contact</h4>
            <div className="space-y-1 text-sm text-primary-foreground/70">
              <p>Hoofmanstraat 1, 2014 DP Haarlem</p>
              <a href="tel:0235315809" className="hover:text-primary-foreground transition-colors block">023 531 58 09</a>
              <a href="mailto:madeliefstebloemen@gmail.com" className="hover:text-primary-foreground transition-colors block">madeliefstebloemen@gmail.com</a>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-2 text-sm uppercase tracking-wide text-primary-foreground/80">Volg ons</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="https://www.instagram.com/madeliefstebloemen/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/31651343023" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-primary-foreground/30 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-primary-foreground/70">
          <p>© 2026 Madeliefste Bloemen</p>
          <p>KvK: 52278506</p>
        </div>
        <p className="text-center text-xs text-primary-foreground/50 mt-4">Fotografie: Sanna en Wietse</p>
      </div>
    </footer>
  );
}
