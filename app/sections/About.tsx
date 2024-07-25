import { ClockIcon } from "@/assets/icons/ClockIcon";
import { DeliveryIcon } from "@/assets/icons/DeliveryIcon";
import { FacebookIcon } from "@/assets/icons/FacebookIcon";
import { InstagramIcon } from "@/assets/icons/InstagramIcon";
import { LinkIcon } from "@/assets/icons/LinkIcon";
import { PhoneIcon } from "@/assets/icons/PhoneIcon";
import { PinIcon } from "@/assets/icons/PinIcon";
import { WhatsIcon } from "@/assets/icons/WhatsIcon";
import Image from "next/image";

const About = () => {
  return (
    <section id="nosotros" className="min-h-screen flex flex-col md:flex-row gap-6 items-center justify-between px-10 py-20 bg-blanco-oscuro">
      <div className="relative w-full md:w-1/3">
        <Image
          src="/savory/savory.jpeg" // Reemplaza esta ruta con la imagen real de Savory
          alt="Savory Heladería y Cafetería 1"
          width={500}
          height={500}
          className="rounded-lg object-cover w-full h-[500px]"
        />
      </div>

      <div className="md:w-1/3 w-full">
        <h2 className="w-full text-3xl md:text-4xl font-bold text-marron mb-4">
          Nosotros
        </h2>
        <p className="text-lg font-medium text-marron-claro mb-4">
          Ubicada en Cnel. Lugones, B1826 Lanús, Savory es más que una heladería
          y cafetería, es un lugar donde cada sabor cuenta una historia. Desde
          nuestros humildes comienzos, nos hemos dedicado a crear experiencias
          memorables para nuestros clientes a través de nuestros deliciosos
          helados y cafés.
        </p>
        <p className="text-lg font-medium text-marron-claro">
          Con un enfoque en la calidad y la pasión por lo que hacemos, Savory se
          ha convertido en un punto de encuentro para amigos y familias que
          buscan disfrutar de momentos dulces y acogedores en un ambiente cálido
          y amigable.
        </p>
      </div>

      <div className="relative w-full md:w-1/3 ">
        <Image
          src="/savory/fuera.jpeg" // Reemplaza esta ruta con la imagen real de Savory
          alt="Savory Heladería y Cafetería 1"
          width={500}
          height={500}
          className="rounded-lg object-cover w-full h-[500px]"
        />
      </div>
    </section>
  );
};

export default About;
