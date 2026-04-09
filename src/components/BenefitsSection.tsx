import { TrendingUp, Clock, DollarSign, Heart } from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const icons = [TrendingUp, Clock, DollarSign, Heart];

const BenefitsSection = () => {
  const ref = useScrollFade();
  const { t } = useLanguage();
  const b = translations.benefits;

  return (
    <section id="beneficios" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-card/50" />
      <div className="container px-4 max-w-5xl mx-auto relative z-10" ref={ref}>
        <p className="text-sm uppercase tracking-widest text-primary mb-4 text-center font-medium">
          {t(b.label)}
        </p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-16">
          {t(b.title)}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {b.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="bg-background border border-border rounded-xl p-6 text-center card-hover">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">{t(item.title)}</h3>
                <p className="text-muted-foreground text-sm">{t(item.desc)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
