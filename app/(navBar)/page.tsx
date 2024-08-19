import Adentro from "@/components/sections/Adentro";
import Cafeteria from "@/components/sections/Cafeteria";
import FilaImagenes from "@/components/FilaImagenes";
import Galeria from "@/components/sections/Galeria";
import Heladeria from "@/components/sections/Heladeria";
import Hero from "@/components/sections/Hero";
import Info from "@/components/sections/Info";
import MenuCards from "@/components/sections/MenuCards";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col ">
      <Hero/>
      <MenuCards/>
      <About/>
      <Adentro/>
      <Heladeria/>
      <FilaImagenes/>
      <Cafeteria/>
      <Info/>
      <Galeria/>
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
