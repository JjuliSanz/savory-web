import Footer from "@/components/ui/Footer";
import { Galeria } from "@/components/sections";

export default function GaleriaPage() {
  return (
    <main className="relative min-h-screen pb-4 w-full flex flex-col ">
      <Galeria />
      <Footer/>
    </main>
  );
}
