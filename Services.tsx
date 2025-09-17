const SERVICES = [
  { t: 'Videovigilancia (CCTV)', d: 'Diseño, instalación y mantenimiento de sistemas de cámaras con monitoreo 24/7.' },
  { t: 'Alarmas de intrusión', d: 'Sistemas cableados/inalámbricos con sensores perimetrales y notificación inmediata.' },
  { t: 'Control de acceso', d: 'Lectores biométricos, tarjetas y torniquetes con software de gestión.' },
  { t: 'Sistemas contra incendios', d: 'Detección y alarmas cumpliendo normativa NFPA.' },
  { t: 'Cableado estructurado', d: 'Redes de voz y datos certificadas, racks y ordenamiento profesional.' },
  { t: 'Energía y respaldo', d: 'Tableros, UPS y soluciones de continuidad operativa.' },
];
export default function Services(){
  return (<section id="servicios" className="section">
    <div className="container">
      <h2 className="text-2xl sm:text-3xl font-bold">Nuestros servicios</h2>
      <p className="mt-2 text-white/80 max-w-2xl">Proyectos llave en mano con estándares internacionales (NFPA, NEC, OSHA).</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <div key={s.t} className="card hover:bg-white/10 transition">
            <div className="h-10 w-10 rounded-lg bg-blue-600/70" />
            <h3 className="mt-4 font-semibold text-lg">{s.t}</h3>
            <p className="mt-2 text-sm text-white/80">{s.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>);
}