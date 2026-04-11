import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MessageSquare,
  CalendarCheck,
  Send,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Rocket,
  Settings,
  Users,
  Repeat,
  Phone,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { toast } from "sonner";
import { useScrollFade } from "@/hooks/useScrollFade";

const ContactSection = () => {
  const { t } = useLanguage();
  const c = translations.contact;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    businessType: "",
    email: "",
    phone: "",
    message: "",
  });

  const automationItems = c.automationItems;
  const trustItems = c.trustItems;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.businessType || !form.email || !form.phone) {
      toast.error(t(c.validationError));
      return;
    }
    setIsSubmitting(true);

    try {
      const response = await fetch("https://n8n-latest-jnm7.onrender.com/webhook/lead_form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: form.name,
          negocio: form.businessType,
          email: form.email,
          telefono: form.phone,
          mensaje: form.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        toast.success(t(c.successToast));
        setForm({
          name: "",
          businessType: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error al enviar el formulario. Por favor, intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeValue = useScrollFade();
  const fadeTrust = useScrollFade();
  const fadeForm = useScrollFade();
  const fadeCta = useScrollFade();

  return (
    <section id="contacto" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[180px]" />

      <div className="container px-4 max-w-6xl mx-auto relative z-10">
        {/* ── Value Proposition ── */}
        <div ref={fadeValue} className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            {t(c.valueLabel)}
          </span>
          <h2 id="automatizacion" className="text-3xl md:text-5xl font-heading font-bold mb-6">
            {t(c.valueTitle)}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto mt-10">
            {automationItems.map((item, i) => {
              const icons = [MessageSquare, CalendarCheck, Phone, Users, Repeat];
              const Icon = icons[i % icons.length];
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card/60 border border-border/50"
                >
                  <Icon size={20} className="text-primary shrink-0" />
                  <span className="text-sm text-foreground">{t(item)}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Trust / Authority ── */}
        <div ref={fadeTrust} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {trustItems.map((item, i) => {
            const icons = [Settings, Rocket, ShieldCheck];
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="text-center p-6 rounded-2xl bg-card/40 border border-border/40"
              >
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-primary" />
                </div>
                <p className="font-semibold text-foreground">{t(item)}</p>
              </div>
            );
          })}
        </div>

        {/* ── Form Section ── */}
        <div ref={fadeForm} className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {t(c.formTitle)}
            </h2>
            <p id="form-subtitle" className="text-muted-foreground text-lg">{t(c.formSubtitle)}</p>
          </div>

          {submitted ? (
            <div className="text-center py-16 px-6 rounded-2xl bg-card/60 border border-primary/30">
              <CheckCircle2 size={56} className="text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-heading font-bold mb-2">
                {t(c.successTitle)}
              </h3>
              <p className="text-muted-foreground">{t(c.successMessage)}</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5 p-6 md:p-10 rounded-2xl bg-card/60 border border-border/50 backdrop-blur-sm"
            >
              {/* Copilot: Make this form send data via POST to a webhook (n8n compatible).
              Include fields: nombre, negocio, email, telefono, mensaje */}
              {/* Microcopy badges */}
              <div className="flex flex-wrap gap-3 justify-center mb-4">
                {c.microcopy.map((mc, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full"
                  >
                    <CheckCircle2 size={12} />
                    {t(mc)}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">{t(c.labelName)} *</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t(c.placeholderName)}
                    className="h-12 bg-muted/40 border-border"
                    maxLength={100}
                    required
                  />
                </div>

                {/* Business Type */}
                <div className="space-y-2">
                  <Label>{t(c.labelBusiness)} *</Label>
                  <Select
                    value={form.businessType}
                    onValueChange={(v) => setForm({ ...form, businessType: v })}
                  >
                    <SelectTrigger className="h-12 bg-muted/40 border-border">
                      <SelectValue placeholder={t(c.placeholderBusiness)} />
                    </SelectTrigger>
                    <SelectContent>
                      {c.businessOptions.map((opt, i) => (
                        <SelectItem key={i} value={opt.value}>
                          {t(opt.label)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">{t(c.labelEmail)} *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={t(c.placeholderEmail)}
                    className="h-12 bg-muted/40 border-border"
                    maxLength={255}
                    required
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">{t(c.labelPhone)} *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder={t(c.placeholderPhone)}
                    className="h-12 bg-muted/40 border-border"
                    maxLength={20}
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">
                  {t(c.labelMessage)} <span className="text-muted-foreground font-normal">({t(c.optional)})</span>
                </Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={t(c.placeholderMessage)}
                  className="bg-muted/40 border-border min-h-[100px]"
                  maxLength={1000}
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full text-lg py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">{t(c.sending)}</span>
                ) : (
                  <>
                    <Send size={20} />
                    {t(c.submitButton)}
                  </>
                )}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                {t(c.responseTime)}
              </p>
            </form>
          )}
        </div>

        {/* ── Fallback CTA ── */}
        <div ref={fadeCta} className="text-center mt-20">
          <p className="text-lg text-muted-foreground mb-4">{t(c.fallbackText)}</p>
          <Button variant="hero-outline" size="lg" className="text-lg px-8 py-6" asChild>
            <a href="https://t.me/Fiftyst_studio_bot" target="_blank" rel="noopener noreferrer">
              <Zap size={20} />
              {t(c.fallbackButton)}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
