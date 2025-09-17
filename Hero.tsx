export default function Hero(){
  return (<section className="relative overflow-hidden">
    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400 via-blue-700 to-transparent" />
    <div className="container py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
          Soluciones integrales en <span className="text-blue-300">seguridad electrónica</span> y <span className="text-blue-300">cableado estructurado</span>
        </h1>
        <p className="mt-4 text-white/90 max-w-xl">Diseño, instalación y mantenimiento para clientes corporativos, constructoras y residenciales de alto nivel en Nicaragua.</p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href="#contacto" className="btn btn-primary">Cotizar ahora</a>
          <a href="mailto:Gerencia@electronicsecurity-mg.com" className="btn btn-ghost">Escríbenos</a>
        </div>
        <div className="mt-6 flex items-center gap-4 text-sm text-white/80">
          <div className="h-2 w-2 rounded-full bg-amber-400" /><span>Atención en Managua, Nicaragua · Respuesta rápida</span>
        </div>
      </div>
      <div className="relative">
        <div className="aspect-[4/3] rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/20 grid place-items-center p-6">
          <div className="text-center">
            <div className="mx-auto h-24 w-24 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-700 ring-4 ring-white/20" />
            <p className="mt-4 text-sm text-white/80">Ilustración/imagen principal (CCTV y control de acceso)</p>
          </div>
        </div>
      </div>
    </div>
  </section>);
}