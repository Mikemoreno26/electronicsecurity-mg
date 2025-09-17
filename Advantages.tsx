const ADV = [
  { t: 'Experiencia comprobada', d: 'Más de X proyectos entregados con garantía y soporte técnico documentado.' },
  { t: 'Cumplimiento normativo', d: 'Buenas prácticas y estándares internacionales (NFPA, NEC, OSHA).' },
  { t: 'Atención personalizada', d: 'Acompañamiento desde el diseño hasta la post‑venta, con soporte bilingüe.' },
  { t: 'Calidad y tecnología', d: 'Equipos confiables, integración con software y apps móviles.' },
];
export default function Advantages(){
  return (<section id="ventajas" className="section">
    <div className="container">
      <h2 className="text-2xl sm:text-3xl font-bold">¿Por qué elegirnos?</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {ADV.map((v) => (
          <div key={v.t} className="card">
            <div className="h-10 w-10 rounded-lg bg-emerald-500/70" />
            <h3 className="mt-4 font-semibold text-lg">{v.t}</h3>
            <p className="mt-2 text-sm text-white/80">{v.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>);
}