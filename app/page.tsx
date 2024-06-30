import Hero from "./components/Hero";
import Section1 from "./components/Section1";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col pt-[50px]">
      <Hero/>
      <Section1/>
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
