import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const nav = translations.nav;

  const navLinks = [
    { label: t(nav.problema), href: "#problema" },
    { label: t(nav.solucion), href: "#solucion" },
    { label: t(nav.proceso), href: "#proceso" },
    { label: t(nav.beneficios), href: "#beneficios" },
    { label: t(nav.nosotros), href: "#nosotros" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <img 
            src="/St.png" 
            alt="50st Studio" 
            className="h-10 w-auto"
          />
          <span className="hidden sm:inline font-heading font-bold tracking-tight">
            <span className="text-foreground">50st</span>{" "}
            <span className="text-primary">Studio</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <LanguageToggle />
          <Button variant="hero" size="sm" asChild>
            <a href="#cta">{t(nav.cta)}</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-3">
          <LanguageToggle />
          <button
            className="text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border pb-6 px-4 animate-fade-up">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button variant="hero" className="w-full mt-4" asChild>
            <a href="#cta" onClick={() => setOpen(false)}>{t(nav.cta)}</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
