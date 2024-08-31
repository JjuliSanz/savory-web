import Footer from "@/components/Footer";
import { Contacto } from "@/components/sections";

export default function ContactoPage() {
  return (
    <main className="relative min-h-screen pb-4 w-full flex flex-col bg-fixed bg-top bg-cover bg-[url(/fondoContact.jpg)]">
      <div className="absolute inset-0 bg-marron opacity-80 z-0"></div>
      <Contacto />
      <Footer/>
    </main>
  );
}