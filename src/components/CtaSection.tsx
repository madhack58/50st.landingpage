import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const CtaSection = () => {
  const { t } = useLanguage();
  const c = translations.cta;

  return (
    <section id="cta" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container px-4 max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
          {t(c.title1)} <span className="gradient-text">{t(c.titleHighlight)}</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          {t(c.subtitle)}
        </p>
        <Button variant="hero" size="lg" className="text-lg px-10 py-7" asChild>
          <a href="#form-subtitle">
            <Zap size={22} />
            {t(c.button)}
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
