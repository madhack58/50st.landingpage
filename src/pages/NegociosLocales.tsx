import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu, X, Bot, Zap, UserX, Clock, Repeat,
  MessageSquare, CalendarCheck, Clock4, Wrench, Smile,
  Send, Reply, ClipboardCheck,
  Sparkles, BellOff, Shield, Timer, Award,
  Stethoscope, UtensilsCrossed, Scissors, Store,
} from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";

const TELEGRAM_LINK = "https://t.me/Fiftyst_studio_bot";

/* ─── Navbar ─── */
const navLinks = [
  { label: "Problema", href: "#problema" },
  { label: "Solución", href: "#solucion" },
  { label: "Demo", href: "#demo" },
  { label: "Cómo funciona", href: "#proceso" },
  { label: "Beneficios", href: "#beneficios" },
];

const LocalNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="font-heading text-xl font-bold tracking-tight">
          <span className="text-foreground">50st</span>{" "}
          <span className="text-primary">Studio</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
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
          {navLinks.map((l) => (
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
const HeroLocal = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    <div className="absolute inset-0 grid-bg" />
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/8 rounded-full blur-[100px]" />

    <div className="container relative z-10 px-4 text-center max-w-4xl mx-auto">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-up">
        <Bot size={16} className="text-primary" />
        <span className="text-sm text-primary font-medium">Automatización IA para negocios locales</span>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold leading-tight mb-6 animate-fade-up-delay-1">
        Automatiza tu negocio y{" "}
        <span className="gradient-text">deja de perder clientes</span>
      </h1>

      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up-delay-2">
        Un asistente inteligente que responde a tus clientes 24/7, gestiona citas, responde dudas y automatiza tareas sin que tengas que hacer nada.
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
  { icon: UserX, text: "Pierdes clientes por no responder a tiempo" },
  { icon: Clock, text: "Te escriben a todas horas y no puedes atender" },
  { icon: Repeat, text: "Pierdes tiempo en tareas repetitivas" },
];

const ProblemLocal = () => {
  const ref = useScrollFade();
  return (
    <section id="problema" className="py-24 md:py-32 relative">
      <div className="container px-4 max-w-4xl mx-auto" ref={ref}>
        <p className="text-sm uppercase tracking-widest text-primary mb-4 text-center font-medium">El problema</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-16 leading-tight">
          Tu negocio pierde clientes{" "}
          <span className="gradient-text">por falta de sistemas</span>
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
  { icon: MessageSquare, text: "Responde automáticamente a tus clientes" },
  { icon: CalendarCheck, text: "Gestiona citas o reservas sin intervención" },
  { icon: Clock4, text: "Funciona 24/7" },
  { icon: Wrench, text: "Reduce trabajo manual" },
  { icon: Smile, text: "Mejora la experiencia del cliente" },
];

const SolutionLocal = () => {
  const ref = useScrollFade();
  return (
    <section id="solucion" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-card/50" />
      <div className="container px-4 max-w-4xl mx-auto relative z-10" ref={ref}>
        <p className="text-sm uppercase tracking-widest text-primary mb-4 text-center font-medium">La solución</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-6">
          Automatiza la atención al cliente con{" "}
          <span className="gradient-text">inteligencia artificial</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          Deja que un asistente inteligente gestione las tareas repetitivas de tu negocio.
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          {solutionItems.map((s, i) => (
            <div key={i} className="bg-background border border-border rounded-xl p-7 card-hover group flex items-start gap-5">
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
const DemoLocal = () => {
  const ref = useScrollFade();
  return (
    <section id="demo" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="container px-4 max-w-3xl mx-auto text-center relative z-10" ref={ref}>
        <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">Demo en vivo</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
          Prueba el asistente{" "}
          <span className="gradient-text">en tiempo real</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          Simula una conversación como si fueras un cliente de un negocio. Verás cómo el asistente gestiona todo por ti.
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
                <p className="text-sm">Hola, quiero reservar una mesa para el sábado</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-2.5 max-w-[80%]">
                <p className="text-sm">¡Hola! Claro, ¿para cuántas personas y a qué hora? 😊</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-primary/15 border border-primary/20 rounded-2xl rounded-br-md px-4 py-2.5 max-w-[80%]">
                <p className="text-sm">Para 4 personas, a las 21:00</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-2.5 max-w-[80%]">
                <p className="text-sm">Perfecto, mesa reservada para 4 el sábado a las 21:00. ¡Os esperamos! ✅</p>
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

/* ─── Casos de uso ─── */
const useCases = [
  { icon: Stethoscope, title: "Clínicas", desc: "Gestión automática de citas médicas" },
  { icon: UtensilsCrossed, title: "Restaurantes", desc: "Reservas automáticas por chat" },
  { icon: Scissors, title: "Peluquerías", desc: "Agenda automática de turnos" },
  { icon: Store, title: "Negocios locales", desc: "Atención al cliente 24/7" },
];

const UseCasesLocal = () => {
  const ref = useScrollFade();
  return (
    <section className="py-24 md:py-32">
      <div className="container px-4 max-w-5xl mx-auto" ref={ref}>
        <p className="text-sm uppercase tracking-widest text-primary mb-4 text-center font-medium">Casos de uso</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-16">
          Funciona para <span className="gradient-text">cualquier negocio</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((u, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 text-center card-hover">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <u.icon size={32} className="text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">{u.title}</h3>
              <p className="text-muted-foreground text-sm">{u.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Cómo funciona ─── */
const steps = [
  { icon: Send, num: "01", title: "El cliente escribe por chat", desc: "A través de WhatsApp, Telegram o tu web, el cliente inicia la conversación." },
  { icon: Reply, num: "02", title: "El asistente responde automáticamente", desc: "La IA entiende lo que necesita y responde al instante." },
  { icon: ClipboardCheck, num: "03", title: "Se gestiona la acción", desc: "Cita, reserva o consulta — todo queda registrado sin intervención manual." },
];

const ProcessLocal = () => {
  const ref = useScrollFade();
  return (
    <section id="proceso" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-card/50" />
      <div className="container px-4 max-w-5xl mx-auto relative z-10" ref={ref}>
        <p className="text-sm uppercase tracking-widest text-primary mb-4 text-center font-medium">Cómo funciona</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-16">
          3 pasos para automatizar tu negocio
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/40 to-transparent" />
              )}
              <div className="w-24 h-24 rounded-2xl bg-background border border-border flex items-center justify-center mx-auto mb-6 relative">
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
  { icon: Sparkles, title: "Más clientes sin esfuerzo", desc: "Capta y atiende clientes automáticamente." },
  { icon: BellOff, title: "Menos interrupciones", desc: "Reduce llamadas y mensajes que consumen tu tiempo." },
  { icon: Shield, title: "Atención 24/7", desc: "Tu negocio responde incluso cuando estás cerrado." },
  { icon: Timer, title: "Ahorro de tiempo", desc: "Elimina tareas repetitivas de tu día a día." },
  { icon: Award, title: "Negocio más profesional", desc: "Ofrece una experiencia moderna a tus clientes." },
];

const BenefitsLocal = () => {
  const ref = useScrollFade();
  return (
    <section id="beneficios" className="py-24 md:py-32">
      <div className="container px-4 max-w-5xl mx-auto" ref={ref}>
        <p className="text-sm uppercase tracking-widest text-primary mb-4 text-center font-medium">Beneficios</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-16">
          Lo que gana tu negocio
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 text-center card-hover">
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
const CtaLocal = () => {
  const ref = useScrollFade();
  return (
    <section id="cta" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="container px-4 max-w-3xl mx-auto text-center relative z-10" ref={ref}>
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
          ¿Quieres automatizar{" "}
          <span className="gradient-text">tu negocio</span>?
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          Da el primer paso. Sin compromiso, sin instalación.
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
const LocalFooter = () => (
  <footer className="border-t border-border py-10">
    <div className="container px-4 text-center">
      <p className="font-heading font-bold text-lg mb-2">
        <span className="text-foreground">50st</span>{" "}
        <span className="text-primary">Studio</span>
      </p>
      <p className="text-sm text-muted-foreground">Automatización inteligente para negocios locales</p>
      <p className="text-xs text-muted-foreground mt-4">
        © {new Date().getFullYear()} 50st Studio. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

/* ─── Page ─── */
const NegociosLocales = () => (
  <div className="min-h-screen">
    <LocalNavbar />
    <HeroLocal />
    <ProblemLocal />
    <SolutionLocal />
    <DemoLocal />
    <UseCasesLocal />
    <ProcessLocal />
    <BenefitsLocal />
    <CtaLocal />
    <LocalFooter />
  </div>
);

export default NegociosLocales;
