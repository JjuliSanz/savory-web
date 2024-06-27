import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col pt-[50px]">
      <Hero/>
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
