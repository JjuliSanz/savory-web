import Adentro from "./components/Adentro";
import Cafeteria from "./components/Cafeteria";
import FilaImagenes from "./components/FilaImagenes";
import Galeria from "./components/Galeria";
import Heladeria from "./components/Heladeria";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Section1 from "./components/Section1";
import About from "./components/About";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col pt-[50px]">
      <Hero/>
      <Section1/>
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
