import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Sectors from "./components/Sectors";
import Advantages from "./components/Advantages";
import Packages from "./components/Packages";
import Contact from "./components/Contact";
export default function Page(){
  return (<div className="min-h-screen text-white">
    <Header /><Hero /><Services /><Sectors /><Advantages /><Packages /><Contact />
    <footer className="border-t border-white/10 py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
        <div>© {new Date().getFullYear()} Electronic Security M.G. · Managua, Nicaragua</div>
        <div className="flex items-center gap-4">
          <a href="https://electronicsecurity-mg.com" target="_blank" className="hover:text-white">Sitio web</a>
          <a href="https://wa.me/50589272256" target="_blank" className="hover:text-white">WhatsApp</a>
          <a href="mailto:Gerencia@electronicsecurity-mg.com" className="hover:text-white">Correo</a>
        </div>
      </div>
    </footer>
  </div>);
}