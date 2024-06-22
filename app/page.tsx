import Image from "next/image";
import Navbar from "./components/Navbar";
import Button from "./components/Button";

export default function Home() {
  return (
    <main className="relative min-h-[calc(100vh-50px)] mt-[50px] grid grid-flow-col grid-rows-4 justify-center">
      <div className="absolute inset-0 bg-cover bg-center bg-[url('/entrada.jpeg')] blur z-0 brightness-[.3]"></div>

      {/* <div className="bg-gradient-to-b from-transparent from-10% to-marron-clarito to-10% w-28 z-10 " /> */}

      {/* <div className="flex flex-col gap-2 bg-gradient-to-b from-transparent from-25% to-marron-clarito to-25%">
          <h1 className="text-9xl font-bold text-blanco font-serif ">SAVORY</h1>
          <h2 className="text-5xl text-marron">HELADERIA Y CAFETERIA</h2>
        </div> */}
      <h1 className="text-9xl font-bold text-blanco font-serif z-10 row-span-1">
        SAVORY
      </h1>
      {/* <div className="flex flex-row z-10 w-full row-start-3 row-span-2">
        <div className="bg-marron-clarito w-28 z-10 " />
        <div className="w-full flex flex-col bg-slate-600">
          <div className="w-full h-20 bg-marron-clarito" />
          
        </div>
        <div className="bg-marron-clarito w-28 z-10 " />
      </div> */}
      <div className="flex flex-row items-end z-10 w-full bg-blanco row-start-3 row-span-2 ">
        <div className="bg-marron-clarito p-24 mx-auto">
          <Button classNameProps="" />
        </div>
      </div>

      {/* <div className="bg-gradient-to-b from-transparent from-10% to-marron-clarito to-10% w-28 z-10 " /> */}
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
