import Adentro from "./sections/Adentro";
import Cafeteria from "./sections/Cafeteria";
import FilaImagenes from "./components/FilaImagenes";
import Galeria from "./sections/Galeria";
import Heladeria from "./sections/Heladeria";
import Hero from "./sections/Hero";
import Info from "./sections/Info";
import MenuCards from "./sections/MenuCards";
import About from "./sections/About";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col pt-[50px]">
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
