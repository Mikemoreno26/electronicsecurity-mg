'use client';
import { useState } from 'react';
export default function Contact(){
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') || ''),
      contact: String(formData.get('contact') || ''),
      message: String(formData.get('message') || ''),
    };
    if (!payload.name || !payload.contact || !payload.message) return;
    try {
      setLoading(true);
      const res = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      setOk(res.ok); form.reset();
    } catch (err) { console.error(err); setOk(false); }
    finally { setLoading(false); }
  }
  return (<section id="contacto" className="section">
    <div className="container grid gap-8 md:grid-cols-2">
      <div className="card">
        <h2 className="text-2xl sm:text-3xl font-bold">Contacto</h2>
        <p className="mt-2 text-white/80">¿Listo para mejorar la seguridad de tu empresa o residencia?</p>
        <ul className="mt-4 space-y-2 text-white/90">
          <li>📍 Managua, Nicaragua</li>
          <li>📞 <a href="https://wa.me/50589272256" target="_blank" className="underline">+505 8927 2256</a></li>
          <li>✉️ <a href="mailto:Gerencia@electronicsecurity-mg.com" className="underline">Gerencia@electronicsecurity-mg.com</a></li>
          <li>🌐 <a href="https://electronicsecurity-mg.com" target="_blank" className="underline">electronicsecurity-mg.com</a></li>
        </ul>
      </div>
      <div className="card">
        <h3 className="font-semibold text-lg">Solicita una visita técnica</h3>
        <p className="mt-2 text-sm text-white/80">Coordinamos diagnóstico en sitio y te entregamos una propuesta con fotografías y recomendaciones.</p>
        <form className="mt-4 grid gap-3" onSubmit={onSubmit}>
          <input name="name" className="rounded-xl bg-white/10 placeholder-white/60 px-4 py-3 outline-none border border-white/10 focus:border-blue-400" placeholder="Nombre y empresa" />
          <input name="contact" className="rounded-xl bg-white/10 placeholder-white/60 px-4 py-3 outline-none border border-white/10 focus:border-blue-400" placeholder="Correo o WhatsApp" />
          <textarea name="message" rows={4} className="rounded-xl bg-white/10 placeholder-white/60 px-4 py-3 outline-none border border-white/10 focus:border-blue-400" placeholder="¿Qué necesitas instalar o mejorar?" />
          <button disabled={loading} type="submit" className="btn bg-amber-500 hover:bg-amber-400 text-black">{loading ? 'Enviando…' : 'Enviar'}</button>
          {ok === true && <p className="text-emerald-300 text-sm">¡Recibido! Te contactaremos pronto.</p>}
          {ok === false && <p className="text-red-300 text-sm">No pudimos enviar tu mensaje. Intenta más tarde.</p>}
        </form>
      </div>
    </div>
  </section>);
}