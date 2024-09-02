import FilaImagenes from "@/components/ui/FilaImagenes";
import Footer from "@/components/ui/Footer";
import { About, Adentro, Cafeteria, Heladeria } from "@/components/sections";
import ToTopButton from "@/components/ToTopButton";

export default function NosotrosPage() {
  return (
    <main className="relative min-h-screen pb-4 w-full flex flex-col ">
      <About />
      <Adentro/>
      <Heladeria/>
      <FilaImagenes/>
      <Cafeteria/>
      <Footer/>
      <ToTopButton/>
    </main>
  );
}
