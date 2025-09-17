const PKG = [
  { name: 'Instalación + Mantenimiento', price: 'Desde $', desc: 'Plan esencial para negocios y residenciales.' },
  { name: 'Monitoreo & Soporte', price: 'Desde $', desc: 'Soporte continuo y respuesta prioritaria.' },
  { name: 'Inspecciones Anuales', price: 'Desde $', desc: 'Revisión técnica, reportes y recomendaciones.' },
];
export default function Packages(){
  return (<section id="paquetes" className="section">
    <div className="container">
      <h2 className="text-2xl sm:text-3xl font-bold">Paquetes de servicio</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {PKG.map((p, i) => (
          <div key={p.name} className={"card " + (i===1 ? "border-amber-400/60 shadow-xl shadow-amber-900/20" : "")}>
            <h3 className="font-semibold text-lg">{p.name}</h3>
            <p className="mt-1 text-sm text-white/70">{p.desc}</p>
            <div className="mt-4 text-3xl font-bold text-amber-300">{p.price}<span className="text-sm font-normal text-white/70"> / proyecto</span></div>
            <a href="#contacto" className="mt-4 btn bg-amber-500 hover:bg-amber-400 text-black">Solicitar cotización</a>
          </div>
        ))}
      </div>
    </div>
  </section>);
}