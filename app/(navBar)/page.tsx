
import FilaImagenes from "@/components/FilaImagenes";
import { About, Adentro, Cafeteria, Contacto, Galeria, Heladeria, Hero, MenuCards } from "@/components/sections";

import ToTopButton from "@/components/ToTopButton";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col ">
      <Hero />
      <MenuCards />
      <About />
      <Adentro />
      <Heladeria />
      <FilaImagenes />
      <Cafeteria />
      <Contacto />
      <Galeria />

      <ToTopButton extraClass="" />
    </main>
  );
}

{
  /* <Image
          width={1360}
          height={800}
          alt="home"
          className="absolute top-0 left-0 object-cover z-[-10] w-full h-full"
          src="/entrada.jpeg"
        /> */
}
