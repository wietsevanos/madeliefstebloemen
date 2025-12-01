import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-4">Madeliefste</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Jouw buurtbloemist in de Hoofmanstraat, Haarlem. Met liefde en vakmanschap maken we elke gelegenheid mooier.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:0235315809" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>023 531 58 09</span>
                </a>
              </li>
              <li>
                <a href="tel:0651343023" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>06 51 34 30 23</span>
                </a>
              </li>
              <li>
                <a href="mailto:nancy.stoete@gmail.com" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>nancy.stoete@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Hoofmanstraat 1<br />2014 DP Haarlem</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Openingstijden</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Maandag: Gesloten</span>
              </li>
              <li className="text-sm pl-6">Dinsdag: 12:00 – 17:30</li>
              <li className="text-sm pl-6">Woensdag – Vrijdag: 09:30 – 17:30</li>
              <li className="text-sm pl-6">Zaterdag: 09:00 – 17:00</li>
              <li className="text-sm pl-6">Zondag: Gesloten</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Navigatie</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/over" className="hover:text-accent transition-colors">Over Nancy</Link>
              </li>
              <li>
                <Link to="/diensten" className="hover:text-accent transition-colors">Diensten</Link>
              </li>
              <li>
                <Link to="/galerie" className="hover:text-accent transition-colors">Galerie</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/70">
          <p>© {new Date().getFullYear()} Madeliefste Bloemen. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}
