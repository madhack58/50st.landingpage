import { Search, Cog, Rocket } from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const icons = [Search, Cog, Rocket];
const nums = ["01", "02", "03"];

const ProcessSection = () => {
  const ref = useScrollFade();
  const { t } = useLanguage();
  const p = translations.process;

  return (
    <section id="proceso" className="py-24 md:py-32">
      <div className="container px-4 max-w-5xl mx-auto" ref={ref}>
        <p className="text-sm uppercase tracking-widest text-primary mb-4 text-center font-medium">
          {t(p.label)}
        </p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-16">
          {t(p.title)}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {p.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="relative text-center">
                {i < p.steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/40 to-transparent" />
                )}
                <div className="w-24 h-24 rounded-2xl bg-card border border-border flex items-center justify-center mx-auto mb-6 relative">
                  <span className="absolute -top-3 -right-3 text-xs font-heading font-bold bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">
                    {nums[i]}
                  </span>
                  <Icon size={36} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{t(step.title)}</h3>
                <p className="text-muted-foreground">{t(step.desc)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
