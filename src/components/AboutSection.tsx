import { useScrollFade } from "@/hooks/useScrollFade";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const AboutSection = () => {
  const ref = useScrollFade();
  const { t } = useLanguage();
  const a = translations.about;

  return (
    <section id="nosotros" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-card/50" />
      <div className="container px-4 max-w-3xl mx-auto text-center relative z-10" ref={ref}>
        <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">
          {t(a.label)}
        </p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
          50st <span className="gradient-text">Studio</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {t(a.description)}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
