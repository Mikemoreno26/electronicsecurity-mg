import { NextResponse } from "next/server";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, contact, message } = body || {};
    if (!name || !contact || !message) {
      return NextResponse.json({ ok: false, error: "Faltan campos" }, { status: 400 });
    }
    const TO = process.env.CONTACT_TO || "Gerencia@electronicsecurity-mg.com";
    const FROM = process.env.CONTACT_FROM || "notificaciones@electronicsecurity-mg.com";
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { "Authorization": `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: FROM, to: [TO], subject: `Nuevo contacto – Electronic Security M.G.`,
          html: `<h2>Nuevo contacto desde la web</h2>
                 <p><b>Nombre:</b> ${name}</p>
                 <p><b>Contacto:</b> ${contact}</p>
                 <p><b>Mensaje:</b><br/>${String(message).replace(/\n/g, "<br/>")}</p>`,
        }),
      });
      if (res.ok) return NextResponse.json({ ok: true });
      const err = await res.text(); console.error("Resend error:", err);
    }
    const FORMSPREE_ID = process.env.FORMSPREE_ID;
    if (FORMSPREE_ID) {
      const fs = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, message, _subject: "Nuevo contacto – Electronic Security M.G.", _replyto: contact }),
      });
      if (fs.ok) return NextResponse.json({ ok: true });
      const err = await fs.text(); console.error("Formspree error:", err);
      return NextResponse.json({ ok: false, error: "No se pudo enviar" }, { status: 500 });
    }
    return NextResponse.json({ ok: false, error: "Sin proveedor de correo configurado" }, { status: 500 });
  } catch (e) { console.error(e); return NextResponse.json({ ok: false, error: "Error interno" }, { status: 500 }); }
}