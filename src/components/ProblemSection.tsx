import { AlertTriangle, Clock, UserX } from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const icons = [UserX, Clock, AlertTriangle];

const ProblemSection = () => {
  const ref = useScrollFade();
  const { t } = useLanguage();
  const p = translations.problem;

  return (
    <section id="problema" className="py-24 md:py-32 relative">
      <div className="container px-4 max-w-4xl mx-auto" ref={ref}>
        <p className="text-sm uppercase tracking-widest text-primary mb-4 text-center font-medium">
          {t(p.label)}
        </p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-16 leading-tight">
          {t(p.title1)}{" "}
          <span className="gradient-text">{t(p.titleHighlight)}</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {p.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="bg-card border border-border rounded-xl p-8 text-center card-hover">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Icon size={28} className="text-primary" />
                </div>
                <p className="text-foreground font-medium text-lg">{t(item)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
