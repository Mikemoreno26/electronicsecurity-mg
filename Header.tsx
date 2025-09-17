export default function Header(){
  return (<header className="sticky top-0 z-50 backdrop-blur bg-white/5 border-b border-white/10">
    <div className="container h-16 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 ring-2 ring-white/30" />
        <span className="font-semibold tracking-wide">Electronic Security M.G.</span>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <a href="#servicios" className="opacity-90 hover:opacity-100">Servicios</a>
        <a href="#sectores" className="opacity-90 hover:opacity-100">Sectores</a>
        <a href="#ventajas" className="opacity-90 hover:opacity-100">¿Por qué elegirnos?</a>
        <a href="#paquetes" className="opacity-90 hover:opacity-100">Paquetes</a>
        <a href="#contacto" className="opacity-90 hover:opacity-100">Contacto</a>
      </nav>
      <a href="https://wa.me/50589272256" target="_blank" className="hidden sm:inline-flex btn btn-primary">WhatsApp</a>
    </div>
  </header>);
}