import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu, X, Bot, Zap, PhoneOff, Clock, ShieldOff,
  MessageSquare, CalendarCheck, Clock4, PhoneIncoming,
  Send, Reply, CalendarPlus,
  Sparkles, BellOff, Heart, Settings2,
} from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";

const TELEGRAM_LINK = "https://t.me/Fiftyst_studio_bot";

/* ─── Navbar ─── */
const clinicNavLinks = [
  { label: "Problema", href: "#problema" },
  { label: "Solución", href: "#solucion" },
  { label: "Demo", href: "#demo" },
  { label: "Cómo funciona", href: "#proceso" },
  { label: "Beneficios", href: "#beneficios" },
];

const ClinicNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="font-heading text-xl font-bold tracking-tight">
          <span className="text-foreground">50st</span>{" "}
          <span className="text-primary">Studio</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {clinicNavLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <Button variant="hero" size="sm" asChild>
            <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">Probar demo</a>
          </Button>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border pb-6 px-4 animate-fade-up">
          {clinicNavLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <Button variant="hero" className="w-full mt-4" asChild>
            <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Probar demo gratis</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

/* ─── Hero ─── */
const HeroClinic = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    <div className="absolute inset-0 grid-bg" />
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/8 rounded-full blur-[100px]" />

    <div className="container relative z-10 px-4 text-center max-w-4xl mx-auto">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-up">
        <Bot size={16} className="text-primary" />
        <span className="text-sm text-primary font-medium">Asistente IA para clínicas</span>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold leading-tight mb-6 animate-fade-up-delay-1">
        Automatiza las citas de tu clínica y{" "}
        <span className="gradient-text">deja de perder pacientes</span>
      </h1>

      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up-delay-2">
        Un asistente inteligente que responde a tus pacientes 24/7 y agenda citas automáticamente sin llamadas.
      </p>

      <div className="flex flex-col items-center gap-3 animate-fade-up-delay-3">
        <Button variant="hero" size="lg" className="text-lg px-10 py-7" asChild>
          <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
            <Zap size={20} />
            Probar demo gratis
          </a>
        </Button>
        <p className="text-sm text-muted-foreground">No requiere instalación. Pruébalo en 10 segundos.</p>
      </div>
    </div>
  </section>
);

/* ─── Problema ─── */
const problems = [
  { icon: PhoneOff, text: "Pierdes citas por no responder a tiempo" },
  { icon: PhoneIncoming, text: "Recibes demasiadas llamadas cada día" },
  { icon: ShieldOff, text: "No puedes atender fuera de horario" },
];

const ProblemClinic = () => {
  const ref = useScrollFade();
  return (
    <section id="problema" className="py-24 md:py-32 relative">
      <div className="container px-4 max-w-4xl mx-auto" ref={ref}>
        <p className="text-sm uppercase tracking-widest text-primary mb-4 text-center font-medium">El problema</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-16 leading-tight">
          Tu clínica pierde pacientes{" "}
          <span className="gradient-text">por falta de respuesta</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-8 text-center card-hover">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <p.icon size={28} className="text-primary" />
              </div>
              <p className="text-foreground font-medium text-lg">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Solución ─── */
const solutionItems = [
  { icon: MessageSquare, text: "Responde automáticamente a tus pacientes" },
  { icon: CalendarCheck, text: "Agenda citas sin intervención manual" },
  { icon: Clock4, text: "Disponible 24/7" },
  { icon: PhoneIncoming, text: "Reduce llamadas y carga de trabajo" },
];

const SolutionClinic = () => {
  const ref = useScrollFade();
  return (
    <section id="solucion" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-card/50" />
      <div className="container px-4 max-w-4xl mx-auto relative z-10" ref={ref}>
        <p className="text-sm uppercase tracking-widest text-primary mb-4 text-center font-medium">La solución</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-6">
          Nuestro asistente automatiza toda la gestión de citas de tu clínica
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          Olvídate de llamadas, mensajes sin responder y citas perdidas.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {solutionItems.map((s, i) => (
            <div key={i} className="bg-background border border-border rounded-xl p-8 card-hover group flex items-start gap-5">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <s.icon size={24} className="text-primary" />
              </div>
              <p className="text-foreground font-medium text-lg pt-2">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Demo ─── */
const DemoClinic = () => {
  const ref = useScrollFade();
  return (
    <section id="demo" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="container px-4 max-w-3xl mx-auto text-center relative z-10" ref={ref}>
        <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">Demo en vivo</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
          Prueba cómo funciona{" "}
          <span className="gradient-text">en tiempo real</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          Haz clic y simula una conversación como si fueras un paciente. Verás cómo el asistente agenda una cita por ti.
        </p>

        {/* Chat mockup */}
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 max-w-md mx-auto mb-10 text-left glow-accent-sm">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Bot size={20} className="text-primary" />
            </div>
            <div>
              <p className="font-heading font-semibold text-sm">Asistente 50st</p>
              <p className="text-xs text-primary">En línea</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-end">
              <div className="bg-primary/15 border border-primary/20 rounded-2xl rounded-br-md px-4 py-2.5 max-w-[80%]">
                <p className="text-sm">Hola, quiero pedir una cita</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-2.5 max-w-[80%]">
                <p className="text-sm">¡Hola! Claro, ¿para qué día y hora te vendría bien? 😊</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-primary/15 border border-primary/20 rounded-2xl rounded-br-md px-4 py-2.5 max-w-[80%]">
                <p className="text-sm">¿Tienen disponibilidad el martes por la mañana?</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-2.5 max-w-[80%]">
                <p className="text-sm">Sí, tenemos hueco el martes a las 10:00 y a las 11:30. ¿Cuál prefieres?</p>
              </div>
            </div>
          </div>
        </div>

        <Button variant="hero" size="lg" className="text-lg px-10 py-7" asChild>
          <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
            <MessageSquare size={20} />
            Probar asistente ahora
          </a>
        </Button>
      </div>
    </section>
  );
};

/* ─── Cómo funciona ─── */
const steps = [
  { icon: Send, num: "01", title: "El paciente escribe por chat", desc: "A través de WhatsApp, Telegram o tu web, el paciente inicia una conversación." },
  { icon: Reply, num: "02", title: "El asistente responde automáticamente", desc: "La IA entiende lo que necesita y guía al paciente en tiempo real." },
  { icon: CalendarPlus, num: "03", title: "La cita queda agendada", desc: "Sin intervención manual, la cita se registra en tu sistema." },
];

const ProcessClinic = () => {
  const ref = useScrollFade();
  return (
    <section id="proceso" className="py-24 md:py-32">
      <div className="container px-4 max-w-5xl mx-auto" ref={ref}>
        <p className="text-sm uppercase tracking-widest text-primary mb-4 text-center font-medium">Cómo funciona</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-16">
          3 pasos para automatizar tus citas
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/40 to-transparent" />
              )}
              <div className="w-24 h-24 rounded-2xl bg-card border border-border flex items-center justify-center mx-auto mb-6 relative">
                <span className="absolute -top-3 -right-3 text-xs font-heading font-bold bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">
                  {s.num}
                </span>
                <s.icon size={36} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Beneficios ─── */
const benefits = [
  { icon: Sparkles, title: "Más citas sin esfuerzo", desc: "Capta pacientes automáticamente sin mover un dedo." },
  { icon: BellOff, title: "Menos interrupciones", desc: "Reduce llamadas y mensajes que consumen tu tiempo." },
  { icon: Heart, title: "Mejor experiencia del paciente", desc: "Respuestas instantáneas y atención personalizada 24/7." },
  { icon: Settings2, title: "Automatización total", desc: "Todo el proceso de citas gestionado por IA." },
];

const BenefitsClinic = () => {
  const ref = useScrollFade();
  return (
    <section id="beneficios" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-card/50" />
      <div className="container px-4 max-w-5xl mx-auto relative z-10" ref={ref}>
        <p className="text-sm uppercase tracking-widest text-primary mb-4 text-center font-medium">Beneficios</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-16">
          Lo que gana tu clínica
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="bg-background border border-border rounded-xl p-6 text-center card-hover">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <b.icon size={28} className="text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── CTA Final ─── */
const CtaClinic = () => {
  const ref = useScrollFade();
  return (
    <section id="cta" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="container px-4 max-w-3xl mx-auto text-center relative z-10" ref={ref}>
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
          ¿Quieres esto en <span className="gradient-text">tu clínica</span>?
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          Da el primer paso hacia la automatización de citas. Sin compromiso.
        </p>
        <Button variant="hero" size="lg" className="text-lg px-10 py-7" asChild>
          <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
            <Zap size={22} />
            Hablar conmigo
          </a>
        </Button>
      </div>
    </section>
  );
};

/* ─── Footer ─── */
const ClinicFooter = () => (
  <footer className="border-t border-border py-10">
    <div className="container px-4 text-center">
      <p className="font-heading font-bold text-lg mb-2">
        <span className="text-foreground">50st</span>{" "}
        <span className="text-primary">Studio</span>
      </p>
      <p className="text-sm text-muted-foreground">Automatización inteligente para clínicas</p>
      <p className="text-xs text-muted-foreground mt-4">
        © {new Date().getFullYear()} 50st Studio. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

/* ─── Page ─── */
const Clinicas = () => (
  <div className="min-h-screen">
    <ClinicNavbar />
    <HeroClinic />
    <ProblemClinic />
    <SolutionClinic />
    <DemoClinic />
    <ProcessClinic />
    <BenefitsClinic />
    <CtaClinic />
    <ClinicFooter />
  </div>
);

export default Clinicas;
