import { Bell, Users, BarChart3, CheckCircle2, MessageSquare, Calendar } from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const statIcons = [Users, Calendar, MessageSquare, BarChart3];
const statValues = ["47", "23", "156", "68%"];
const statChanges = ["+12%", "+8%", "+34%", "+5%"];

const DemoSection = () => {
  const ref = useScrollFade();
  const { t } = useLanguage();
  const d = translations.demo;

  return (
    <section className="py-24 md:py-32">
      <div className="container px-4 max-w-6xl mx-auto" ref={ref}>
        <p className="text-sm uppercase tracking-widest text-primary mb-4 text-center font-medium">
          {t(d.label)}
        </p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-16">
          {t(d.title)}
        </h2>

        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 glow-accent-sm">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="font-heading font-semibold text-sm">{t(d.dashboard)}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Bell size={14} className="text-primary" />
              </div>
              <div className="w-8 h-8 rounded-full bg-muted" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {d.stats.map((stat, i) => {
              const Icon = statIcons[i];
              return (
                <div key={i} className="bg-background rounded-xl border border-border p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Icon size={16} className="text-muted-foreground" />
                    <span className="text-xs text-primary font-medium">{statChanges[i]}</span>
                  </div>
                  <p className="text-2xl font-heading font-bold">{statValues[i]}</p>
                  <p className="text-xs text-muted-foreground mt-1">{t(stat.label)}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-background rounded-xl border border-border p-5">
            <p className="text-sm font-heading font-semibold mb-4">{t(d.activityTitle)}</p>
            <div className="space-y-3">
              {d.activities.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm truncate">{t(item.text)}</p>
                    <p className="text-xs text-muted-foreground">{t(item.time)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
