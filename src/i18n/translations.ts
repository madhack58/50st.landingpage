export type Lang = "es" | "en";

export const translations = {
  nav: {
    problema: { es: "Problema", en: "Problem" },
    solucion: { es: "Solución", en: "Solution" },
    proceso: { es: "Proceso", en: "Process" },
    beneficios: { es: "Beneficios", en: "Benefits" },
    nosotros: { es: "Nosotros", en: "About" },
    cta: { es: "Automatizar", en: "Automate" },
  },
  hero: {
    badge: { es: "Automatización con IA para negocios", en: "AI Automation for businesses" },
    title1: { es: "Automatiza tu negocio y", en: "Automate your business and" },
    titleHighlight: { es: "deja de perder clientes", en: "stop losing customers" },
    subtitle: {
      es: "Implementamos sistemas con inteligencia artificial que trabajan por ti 24/7",
      en: "An intelligent assistant that replies to your customers 24/7, manages bookings and automates tasks automatically.",
    },
    ctaPrimary: { es: "Quiero automatizar", en: "Start automating" },
    ctaSecondary: { es: "Ver demo", en: "See demo" },
  },
  problem: {
    label: { es: "El problema", en: "The problem" },
    title1: { es: "Tu negocio no falla por falta de clientes,", en: "Your business doesn't fail because of a lack of clients," },
    titleHighlight: { es: "falla por falta de sistemas", en: "it fails due to a lack of systems" },
    items: [
      { es: "Pierdes clientes por no responder rápido", en: "You lose customers by not responding fast enough" },
      { es: "Haces tareas repetitivas todos los días", en: "You do repetitive tasks every day" },
      { es: "Tu negocio depende 100% de ti", en: "Your business depends 100% on you" },
    ],
  },
  solution: {
    label: { es: "La solución", en: "The solution" },
    title: { es: "Automatizaciones con IA que gestionan tu negocio", en: "AI automations that manage your business" },
    subtitle: {
      es: "Implementamos sistemas inteligentes para que tu negocio funcione sin que tú tengas que estar presente.",
      en: "We implement intelligent systems so your business runs without you having to be present.",
    },
    items: [
      {
        title: { es: "Atención automática", en: "Automatic support" },
        desc: { es: "Responde a tus clientes al instante, 24/7, sin intervención manual.", en: "Reply to your customers instantly, 24/7, with no manual intervention." },
      },
      {
        title: { es: "Gestión de citas", en: "Appointment management" },
        desc: { es: "Automatiza reservas, confirmaciones y recordatorios.", en: "Automate bookings, confirmations and reminders." },
      },
      {
        title: { es: "Captación de leads", en: "Lead capture" },
        desc: { es: "Captura y cualifica leads automáticamente desde cualquier canal.", en: "Capture and qualify leads automatically from any channel." },
      },
      {
        title: { es: "Seguimiento automático", en: "Automatic follow-up" },
        desc: { es: "Workflows inteligentes que hacen follow-up por ti.", en: "Smart workflows that follow up for you." },
      },
    ],
  },
  process: {
    label: { es: "Cómo funciona", en: "How it works" },
    title: { es: "3 pasos para automatizar tu negocio", en: "3 steps to automate your business" },
    steps: [
      {
        title: { es: "Analizamos tu negocio", en: "We analyze your business" },
        desc: { es: "Identificamos los procesos que más tiempo te roban y dónde pierdes clientes.", en: "We identify the processes that waste your time and where you lose customers." },
      },
      {
        title: { es: "Creamos tus automatizaciones", en: "We build your automations" },
        desc: { es: "Diseñamos e implementamos flujos con IA adaptados a tu negocio.", en: "We design and implement AI-powered flows tailored to your business." },
      },
      {
        title: { es: "Tu negocio funciona solo", en: "Your business runs itself" },
        desc: { es: "Los sistemas trabajan 24/7 mientras tú te enfocas en crecer.", en: "Systems work 24/7 while you focus on growing." },
      },
    ],
  },
  benefits: {
    label: { es: "Beneficios", en: "Benefits" },
    title: { es: "Lo que ganas al automatizar", en: "What you gain by automating" },
    items: [
      { title: { es: "Más clientes", en: "More customers" }, desc: { es: "Capta y atiende más clientes sin aumentar tu equipo.", en: "Attract and serve more customers without growing your team." } },
      { title: { es: "Más tiempo libre", en: "More free time" }, desc: { es: "Recupera horas cada semana eliminando tareas repetitivas.", en: "Reclaim hours every week by eliminating repetitive tasks." } },
      { title: { es: "Más ingresos", en: "More revenue" }, desc: { es: "Convierte más leads en ventas con seguimiento automático.", en: "Convert more leads into sales with automatic follow-up." } },
      { title: { es: "Menos estrés", en: "Less stress" }, desc: { es: "Tu negocio funciona incluso cuando tú no estás.", en: "Your business runs even when you're not there." } },
    ],
  },
  demo: {
    label: { es: "Resultado", en: "Result" },
    title: { es: "Así se ve un negocio automatizado", en: "This is what an automated business looks like" },
    dashboard: { es: "50st Dashboard", en: "50st Dashboard" },
    stats: [
      { label: { es: "Leads hoy", en: "Leads today" } },
      { label: { es: "Citas agendadas", en: "Booked appointments" } },
      { label: { es: "Mensajes auto", en: "Auto messages" } },
      { label: { es: "Tasa de cierre", en: "Close rate" } },
    ],
    activityTitle: { es: "Actividad reciente", en: "Recent activity" },
    activities: [
      { text: { es: "Nuevo lead capturado desde Instagram", en: "New lead captured from Instagram" }, time: { es: "Hace 2 min", en: "2 min ago" } },
      { text: { es: "Cita confirmada automáticamente — María López", en: "Appointment auto-confirmed — María López" }, time: { es: "Hace 8 min", en: "8 min ago" } },
      { text: { es: "Follow-up enviado a 12 leads inactivos", en: "Follow-up sent to 12 inactive leads" }, time: { es: "Hace 15 min", en: "15 min ago" } },
      { text: { es: "Workflow de bienvenida activado", en: "Welcome workflow activated" }, time: { es: "Hace 23 min", en: "23 min ago" } },
    ],
  },
  about: {
    label: { es: "Sobre nosotros", en: "About us" },
    description: {
      es: "En 50st Studio ayudamos a negocios a crecer usando automatización e inteligencia artificial, eliminando tareas repetitivas y optimizando procesos. Trabajamos con clínicas, inmobiliarias, restaurantes, pymes y autónomos que quieren escalar sin complicaciones.",
      en: "At 50st Studio we help businesses grow using automation and artificial intelligence, eliminating repetitive tasks and optimizing processes. We work with clinics, real estate, restaurants, SMEs and freelancers who want to scale without complications.",
    },
  },
  cta: {
    title1: { es: "Deja de hacerlo", en: "Stop doing" },
    titleHighlight: { es: "todo tú", en: "everything yourself" },
    subtitle: {
      es: "Tu negocio merece sistemas que trabajen por ti. Da el primer paso hacia la automatización.",
      en: "Your business deserves systems that work for you. Take the first step toward automation.",
    },
    button: { es: "Quiero automatizar mi negocio", en: "I want to automate my business" },
  },
  footer: {
    rights: { es: "Todos los derechos reservados.", en: "All rights reserved." },
  },
  contact: {
    valueLabel: { es: "Automatización", en: "Automation" },
    valueTitle: { es: "¿Qué puedes automatizar?", en: "What can you automate?" },
    automationItems: [
      { es: "Atención al cliente automática", en: "Automatic customer support" },
      { es: "Gestión de citas o reservas", en: "Appointment or booking management" },
      { es: "Respuestas en WhatsApp o Telegram", en: "Replies on WhatsApp or Telegram" },
      { es: "Seguimiento de clientes", en: "Customer follow-up" },
      { es: "Procesos internos repetitivos", en: "Repetitive internal processes" },
    ],
    trustItems: [
      { es: "Soluciones adaptadas a cada negocio", en: "Solutions tailored to each business" },
      { es: "Implementación rápida", en: "Fast implementation" },
      { es: "Sin necesidad de conocimientos técnicos", en: "No technical knowledge needed" },
    ],
    formTitle: { es: "Solicita una demo personalizada para tu negocio", en: "Request a personalized demo for your business" },
    formSubtitle: { es: "Descubre cómo puedes automatizar tareas, ahorrar tiempo y conseguir más clientes sin esfuerzo.", en: "Discover how you can automate tasks, save time and get more customers effortlessly." },
    microcopy: [
      { es: "Sin compromiso", en: "No commitment" },
      { es: "Te enseñamos cómo funcionaría en tu negocio", en: "We show you how it would work for your business" },
      { es: "Configuración personalizada incluida", en: "Personalized setup included" },
    ],
    labelName: { es: "Nombre", en: "Name" },
    placeholderName: { es: "Tu nombre", en: "Your name" },
    labelBusiness: { es: "Tipo de negocio", en: "Business type" },
    placeholderBusiness: { es: "Selecciona tu tipo de negocio", en: "Select your business type" },
    businessOptions: [
      { value: "clinica", label: { es: "Clínica", en: "Clinic" } },
      { value: "restaurante", label: { es: "Restaurante", en: "Restaurant" } },
      { value: "ecommerce", label: { es: "Ecommerce", en: "Ecommerce" } },
      { value: "otro", label: { es: "Otro", en: "Other" } },
    ],
    labelEmail: { es: "Email", en: "Email" },
    placeholderEmail: { es: "tu@email.com", en: "you@email.com" },
    labelPhone: { es: "Teléfono", en: "Phone" },
    placeholderPhone: { es: "+34 600 000 000", en: "+1 555 000 0000" },
    labelMessage: { es: "Mensaje / necesidades", en: "Message / needs" },
    optional: { es: "opcional", en: "optional" },
    placeholderMessage: { es: "Cuéntanos qué te gustaría automatizar...", en: "Tell us what you'd like to automate..." },
    submitButton: { es: "Quiero automatizar mi negocio", en: "I want to automate my business" },
    sending: { es: "Enviando...", en: "Sending..." },
    responseTime: { es: "Te responderemos en menos de 24 horas", en: "We'll get back to you within 24 hours" },
    validationError: { es: "Por favor, completa todos los campos obligatorios", en: "Please fill in all required fields" },
    successToast: { es: "¡Formulario enviado correctamente!", en: "Form submitted successfully!" },
    successTitle: { es: "¡Gracias!", en: "Thank you!" },
    successMessage: { es: "Te contactaremos pronto para mostrarte cómo automatizar tu negocio.", en: "We'll contact you soon to show you how to automate your business." },
    fallbackText: { es: "¿Prefieres probarlo primero?", en: "Prefer to try it first?" },
    fallbackButton: { es: "Probar demo ahora", en: "Try demo now" },
  },
} as const;
