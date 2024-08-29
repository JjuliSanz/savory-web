import FilaImagenes from "@/components/FilaImagenes";
import { About, Adentro, Cafeteria, Heladeria } from "@/components/sections";

export default function NosotrosPage() {
  return (
    <main className="relative min-h-screen w-full flex flex-col ">
      <About />
      <Adentro/>
      <Heladeria/>
      <FilaImagenes/>
      <Cafeteria/>
    </main>
  );
}
