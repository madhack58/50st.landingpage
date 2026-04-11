const Footer = () => {
  return (
    <footer className="border-t border-border/70 bg-background/95 py-14">
      <div className="container px-4 mx-auto grid gap-10 md:grid-cols-5">
        {/* Brand */}
        <div className="space-y-4">
          <a href="#" className="inline-flex items-center gap-3">
            <img src="/St.png" alt="50st Studio" className="h-10 w-auto" />
            <span className="font-heading text-lg font-semibold tracking-tight">
              50st Studio
            </span>
          </a>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Automatización de negocios con IA para ahorrar tiempo y aumentar clientes.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Navegación
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#automatizacion" className="text-foreground hover:text-primary transition-colors">
                Servicios
              </a>
            </li>
            <li>
              <a href="#cta" className="text-foreground hover:text-primary transition-colors">
                Cómo funciona
              </a>
            </li>
            <li>
              <a href="#cta" className="text-foreground hover:text-primary transition-colors">
                Demo
              </a>
            </li>
            <li>
              <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Contacto
          </h3>
          <div className="text-sm space-y-2">
            <a href="mailto:50.street.urb@gmail.com" className="block text-foreground hover:text-primary transition-colors">
              50.street.urb@gmail.com
            </a>
            <a href="https://t.me/Fiftyst_studio_bot" target="_blank" rel="noreferrer" className="block text-foreground hover:text-primary transition-colors">
              Telegram
            </a>
          </div>
        </div>

        {/* Social */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Síguenos
          </h3>
          <div className="text-sm space-y-2">
            <a href="https://instagram.com/50st.studio" target="_blank" rel="noreferrer" className="block text-foreground hover:text-primary transition-colors">
              Instagram: @50st.studio
            </a>
            <a href="https://tiktok.com/@50st.studio" target="_blank" rel="noreferrer" className="block text-foreground hover:text-primary transition-colors">
              TikTok: 50st.studio
            </a>
          </div>
        </div>

        {/* Legal */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Legal
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="/privacidad.html" className="text-foreground hover:text-primary transition-colors">
                Política de privacidad
              </a>
            </li>
            <li>
              <a href="/cookies.html" className="text-foreground hover:text-primary transition-colors">
                Cookies
              </a>
            </li>
            <li>
              <a href="/aviso-legal.html" className="text-foreground hover:text-primary transition-colors">
                Aviso legal
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container px-4 mx-auto mt-10 border-t border-border/70 pt-6 text-sm text-muted-foreground text-center">
        © {new Date().getFullYear()} 50st Studio. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
