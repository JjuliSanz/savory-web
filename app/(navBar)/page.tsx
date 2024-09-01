import FilaImagenes from "@/components/FilaImagenes";
import { About, Adentro, Cafeteria, Heladeria, Hero, MenuCards } from "@/components/sections";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col ">
      <Hero />
      <MenuCards />
      {/* <About/>
      <Adentro/>
      <Heladeria/>
      <FilaImagenes/>
      <Cafeteria/> */}

    </main>
  );
}
