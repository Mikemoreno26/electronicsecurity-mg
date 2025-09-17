import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Electronic Security M.G.",
  description: "Soluciones integrales en seguridad electrónica y cableado estructurado en Nicaragua.",
  openGraph: { title: "Electronic Security M.G.", description: "Seguridad electrónica y cableado estructurado." },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="es"><body>{children}</body></html>);
}