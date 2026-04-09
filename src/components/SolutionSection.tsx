import { MessageSquare, CalendarCheck, Users, RefreshCw } from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const icons = [MessageSquare, CalendarCheck, Users, RefreshCw];

const SolutionSection = () => {
  const ref = useScrollFade();
  const { t } = useLanguage();
  const s = translations.solution;

  return (
    <section id="solucion" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-card/50" />
      <div className="container px-4 max-w-5xl mx-auto relative z-10" ref={ref}>
        <p className="text-sm uppercase tracking-widest text-primary mb-4 text-center font-medium">
          {t(s.label)}
        </p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-6">
          {t(s.title)}
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          {t(s.subtitle)}
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {s.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="bg-background border border-border rounded-xl p-8 card-hover group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{t(item.title)}</h3>
                <p className="text-muted-foreground">{t(item.desc)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
