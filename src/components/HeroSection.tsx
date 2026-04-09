import { Button } from "@/components/ui/button";
import { Bot, Zap, MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const HeroSection = () => {
  const { t } = useLanguage();
  const h = translations.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/8 rounded-full blur-[100px]" />

      <div className="container relative z-10 px-4 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-up">
          <Bot size={16} className="text-primary" />
          <span className="text-sm text-primary font-medium">{t(h.badge)}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold leading-tight mb-6 animate-fade-up-delay-1">
          {t(h.title1)}{" "}
          <span className="gradient-text">{t(h.titleHighlight)}</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up-delay-2">
          {t(h.subtitle)}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up-delay-3">
          <Button variant="hero" size="lg" className="text-lg px-10 py-7 w-full sm:w-auto" asChild>
            <a href="#form-subtitle">
              <Zap size={20} />
              {t(h.ctaPrimary)}
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" className="text-lg px-10 py-7 w-full sm:w-auto" asChild>
            <a href="https://t.me/Fiftyst_studio_bot" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={20} />
              {t(h.ctaSecondary)}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
