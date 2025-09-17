const SECTORS = ['Bancos & Oficinas', 'Constructoras', 'Educación & Salud', 'Residenciales premium'];
export default function Sectors(){
  return (<section id="sectores" className="section">
    <div className="container">
      <h2 className="text-2xl sm:text-3xl font-bold">Sectores que atendemos</h2>
      <p className="mt-2 text-white/80 max-w-2xl">Corporativo, construcción e inmobiliario, educación y salud, y residenciales de alto nivel.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SECTORS.map((t) => (
          <div key={t} className="card">
            <div className="h-10 w-10 rounded-lg bg-amber-500/70" />
            <h3 className="mt-3 font-semibold">{t}</h3>
            <p className="mt-1 text-sm text-white/80">Soluciones de seguridad adaptadas a cada entorno.</p>
          </div>
        ))}
      </div>
    </div>
  </section>);
}