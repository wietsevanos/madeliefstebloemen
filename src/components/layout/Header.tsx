import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Over Nancy", path: "/over" },
  { name: "Diensten", path: "/diensten" },
  { name: "Galerie", path: "/galerie" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm shadow-soft">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-heading text-2xl md:text-3xl font-semibold text-primary">
              Madeliefste
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "font-body text-base transition-colors duration-200 relative py-1",
                  location.pathname === item.path
                    ? "text-primary font-medium"
                    : "text-foreground/80 hover:text-primary"
                )}
              >
                {item.name}
                {location.pathname === item.path && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:0235315809" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-medium">023 531 58 09</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "font-body text-lg py-2 transition-colors duration-200",
                    location.pathname === item.path
                      ? "text-primary font-medium"
                      : "text-foreground/80 hover:text-primary"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:0235315809"
                className="flex items-center gap-2 text-primary font-medium mt-4"
              >
                <Phone className="w-5 h-5" />
                023 531 58 09
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
