import { ClockIcon } from "@/assets/icons/ClockIcon";
import { DeliveryIcon } from "@/assets/icons/DeliveryIcon";
import { FacebookIcon } from "@/assets/icons/FacebookIcon";
import { InstagramIcon } from "@/assets/icons/InstagramIcon";
import { LinkIcon } from "@/assets/icons/LinkIcon";
import { PhoneIcon } from "@/assets/icons/PhoneIcon";
import { PinIcon } from "@/assets/icons/PinIcon";
import { WhatsIcon } from "@/assets/icons/WhatsIcon";
import Image from "next/image";

const Section2 = () => {
  return (
    <>
      {/* NUESTRA HISTORIA */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-blanco-oscuro">
        <div className="md:w-1/2 w-full px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-marron mb-4">
            Nuestra Historia
          </h2>
          <p className="text-lg text-gris mb-4">
            Ubicada en Cnel. Lugones, B1826 Lanús, Savory es más que una
            heladería y cafetería, es un lugar donde cada sabor cuenta una
            historia. Desde nuestros humildes comienzos, nos hemos dedicado a
            crear experiencias memorables para nuestros clientes a través de
            nuestros deliciosos helados y cafés.
          </p>
          <p className="text-lg text-gris">
            Con un enfoque en la calidad y la pasión por lo que hacemos, Savory
            se ha convertido en un punto de encuentro para amigos y familias que
            buscan disfrutar de momentos dulces y acogedores en un ambiente
            cálido y amigable.
          </p>
        </div>
        <div className="md:w-1/2 w-full mt-6 md:mt-0 flex gap-4">
          <div className="relative w-1/2 h-96">
            <Image
              src="/savory/savory.jpeg" // Reemplaza esta ruta con la imagen real de Savory
              alt="Savory Heladería y Cafetería 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="relative w-1/2 h-96">
            <Image
              src="/savory/entrada.jpeg" // Reemplaza esta ruta con la segunda imagen real de Savory
              alt="Savory Heladería y Cafetería 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* SECTOR DENTRO */}
      <section className="min-h-screen relative flex flex-col items-center justify-center py-20 px-40  bg-marron">
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            loop
            muted
            autoPlay
            disablePictureInPicture
            disableRemotePlayback
          >
            <source src="/savory/sector-comida-juego.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-marron opacity-70"></div>
        </div>
        {/* Texto */}
        <div className="relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blanco mb-4">
            Espacios de Disfrute y Diversión en Savory
          </h2>
          <p className="text-lg text-blanco-oscuro mb-4">
            Contamos con diversas áreas diseñadas para que los clientes puedan
            disfrutar de sus productos en un ambiente cómodo y acogedor. Dentro
            hay una amplia sección con mesas y sillas, ideal para aquellos que
            buscan un lugar climatizado para relajarse y disfrutar de su helado
            o café.
          </p>
          <p className="text-lg text-blanco-oscuro mb-4">
            También tenemos un sector al aire libre ubicado en la vereda
            alrededor del establecimiento. Este espacio está diseñado para que
            los clientes puedan disfrutar de sus helados y cafés en un ambiente
            fresco y relajado, disfrutando de un momento agradable al exterior.
          </p>
          <p className="text-lg text-blanco-oscuro">
            Además, hemos dedicado un sector especial para los más pequeños,
            donde los niños pueden jugar y divertirse mientras los adultos se
            relajan. Este espacio infantil está equipado con juegos seguros y
            apropiados para diferentes edades, haciendo de Savory un destino
            perfecto para visitas familiares.
          </p>
        </div>
        {/* Imagenes */}
        <div className="w-full relative z-10 flex flex-wrap justify-between mt-10">
          <div className="w-64 h-64 relative">
            <Image
              src="/savory/vereda.jpeg" // Reemplaza esta ruta con la imagen real de Savory
              alt="Savory Heladería y Cafetería 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-64 h-64 relative">
            <Image
              src="/savory/sillones.jpg" // Reemplaza esta ruta con la imagen real de Savory
              alt="Savory Heladería y Cafetería 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-64 h-64 relative">
            <Image
              src="/savory/savory-dentro.jpg" // Reemplaza esta ruta con la imagen real de Savory
              alt="Savory Heladería y Cafetería 3"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* SECTOR FUERA */}
      {/* <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-blanco-oscuro">
        <div className="md:w-1/2 w-full px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-marron mb-4">
            Espacios de Disfrute y Diversión en Savory
          </h2>
          <p className="text-lg text-gris mb-4">
            Savory cuenta con diversas áreas diseñadas para que los clientes
            puedan disfrutar de sus productos en un ambiente cómodo y acogedor.
            Dentro de la heladería y cafetería, hay una amplia sección con mesas
            y sillas, ideal para aquellos que buscan un lugar climatizado para
            relajarse y disfrutar de su helado o café.
          </p>
          <p className="text-lg text-gris">
            Además, Savory ha dedicado un sector especial para los más pequeños,
            donde los niños pueden jugar y divertirse mientras los adultos se
            relajan. Este espacio infantil está equipado con juegos seguros y
            apropiados para diferentes edades, haciendo de Savory un destino
            perfecto para visitas familiares.
          </p>
        </div>
        <div className="md:w-1/2 w-full mt-6 md:mt-0">
          <video
            className="relative w-full h-96 object-cover"
            loop
            muted
            autoPlay
            disablePictureInPicture
            disableRemotePlayback
          >
            <source src="/savory/video-fuera.mp4" type="video/mp4" />
          </video>
        </div>
      </section> */}

      {/* CALIDAD HELADO */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-marron">
        <div className="md:w-1/2 w-full px-4">
          <h2 className="text-4xl font-bold text-blanco mb-4">
            Descubre la Excelencia en Cada Bocado: Nuestro Compromiso con la
            Calidad
          </h2>
          <p className="text-xl font-medium text-marron-clarito mb-4">
            Cada sorbo, cada cucharada de nuestro helado artesanal es una obra
            maestra de sabor y frescura. Nos dedicamos a seleccionar los
            ingredientes más finos y naturales, asegurando que cada lote sea una
            experiencia de indulgencia pura y satisfacción inigualable.
          </p>
          <p className="text-xl font-medium text-marron-clarito mb-4">
            Nuestros helados se elaboran con recetas cuidadosamente
            perfeccionadas. Desde la textura cremosa hasta los sabores intensos
            y auténticos, cada producto que sale de nuestra heladería lleva
            consigo el compromiso de proporcionar lo mejor a nuestros clientes.
          </p>
        </div>
        {/* Imagenes */}
        <div className="md:w-1/2 w-full mt-6 md:mt-0 flex flex-row gap-4">
          <div className="flex flex-col w-full gap-4 pb-8">
            <div className="relative w-full h-72 bg-marron">
              <Image
                src="/sabores.jpeg" // Reemplaza esta ruta con la imagen real de Savory
                alt="Savory Heladería y Cafetería 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="relative w-full h-72 bg-marron">
              <Image
                src="/food/helado.jpeg" // Reemplaza esta ruta con la imagen real de Savory
                alt="Savory Heladería y Cafetería 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-4 pt-8">
            <div className="relative w-full h-72 bg-marron">
              <Image
                src="/food/helado-pote.jpeg" // Reemplaza esta ruta con la imagen real de Savory
                alt="Savory Heladería y Cafetería 3"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="relative w-full h-72 bg-marron">
              <Image
                src="/food/kinder.jpeg" // Reemplaza esta ruta con la imagen real de Savory
                alt="Savory Heladería y Cafetería 4"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CALIDAD COMIDA */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-blanco-oscuro">
        {/* Imagenes */}
        <div className="md:w-1/2 w-full mt-6 md:mt-0 flex flex-row gap-4">
          <div className="flex flex-col w-full gap-4 pb-8">
            <div className="relative w-full h-72 ">
              <Image
                src="/tostadosjyq.jpeg" // Reemplaza esta ruta con la imagen real de Savory
                alt="Savory Heladería y Cafetería 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="relative w-full h-72 ">
              <Image
                src="/milkshake-varios.jpg" // Reemplaza esta ruta con la imagen real de Savory
                alt="Savory Heladería y Cafetería 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-4 pt-8">
            <div className="relative w-full h-72 ">
              <Image
                src="/tostones-jugos.webp" // Reemplaza esta ruta con la imagen real de Savory
                alt="Savory Heladería y Cafetería 3"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="relative w-full h-72 ">
              <Image
                src="/tortas01.jpg" // Reemplaza esta ruta con la imagen real de Savory
                alt="Savory Heladería y Cafetería 4"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full px-4">
          <h2 className="text-4xl font-bold text-marron mb-4 text-center">
            Delicias de la Cafetería en Savory
          </h2>
          <p className="text-xl font-medium text-marron-claro mb-4 text-center">
            Savory no solo es reconocida por sus deliciosos helados, sino
            también por su variada y exquisita oferta de comidas y bebidas en su
            cafetería. Los clientes pueden disfrutar de una amplia selección de
            tortas y pasteles, perfectos para acompañar con una taza de café o
            té.
          </p>
          <p className="text-xl font-medium text-marron-claro mb-4 text-center">
            Además ofrecemos una variedad de sándwiches, tanto fríos como
            calientes, que son ideales para un almuerzo rápido o una merienda
            sustanciosa. Entre las opciones de bebidas, los clientes pueden
            elegir entre cafés fríos y calientes, preparados con los mejores
            granos para satisfacer los gustos más exigentes.
          </p>
          <p className="text-xl font-medium text-marron-claro text-center">
            Para aquellos con antojos más dulces, contamos con una deliciosa
            selección de panqueques, medialunas, alfajores, budines y muffins,
            todos preparados con ingredientes de alta calidad. O quizás los
            wraps, una opción fresca y ligera, perfecta para cualquier momento
            del día.
          </p>
        </div>
      </section>
      {/* Fila de imágenes debajo del texto */}
      <div className="flex flex-row w-full h-auto gap-4 bg-blanco-oscuro ">
        <div className="relative w-1/3 h-80 rounded-lg">
          <Image
            src="/food/alfajor.jpeg"
            alt="Savory Heladería y Cafetería 5"
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>

        <div className="relative w-1/3 h-80 rounded-lg">
          <Image
            src="/food/sandwiches.jpeg"
            alt="Savory Heladería y Cafetería 5"
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>

        <div className="relative w-1/3 h-80 rounded-lg">
          <Image
            src="/capuccino-edit.jpg"
            alt="Savory Heladería y Cafetería 6"
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>
      </div>

      <section
        className="relative min-h-screen bg-fixed bg-center bg-cover flex flex-col md:flex-row  justify-between text-center px-10 py-20"
        style={{ backgroundImage: "url(/food/torta-oreo.jpg)" }}
      >
        <div className="absolute inset-0 bg-marron opacity-70 z-0"></div>
        <div className="md:w-1/2 w-full flex flex-col md:text-left text-center z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-blanco mb-10">
            Ven a Conocernos
          </h2>
          <ul className="text-lg md:text-2xl font-medium text-blanco-oscuro space-y-4">
            <li className="flex items-center gap-2 w-fit">
              <PinIcon /> Lugones 395, Remedios de Escalada
            </li>
            <li className="flex items-center gap-2 w-fit">
              <PhoneIcon /> 4516-0691
            </li>
            <li className="w-fit">
              <a
                href="https://api.whatsapp.com/send?phone=541137852214"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 motion-safe:transition ease-in-out duration-100 hover:scale-[0.97] hover:opacity-70"
              >
                <WhatsIcon />
                11 3785-2214
              </a>
            </li>
            <li className="w-fit">
              <a
                href="https://www.instagram.com/savoryheladoscafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 motion-safe:transition ease-in-out duration-100 hover:scale-[0.97] hover:opacity-70"
              >
                <InstagramIcon />
                SavoryHeladosCafe
              </a>{" "}
            </li>
            <li className="w-fit">
              <a
                href="https://www.facebook.com/SavoryHeladosYCafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 motion-safe:transition ease-in-out duration-100 hover:scale-[0.97] hover:opacity-70"
              >
                <FacebookIcon />
                Savory Helados Y Café
              </a>{" "}
            </li>

            <li className="w-fit">
              <a
                href="https://www.pedidosya.com.ar/restaurantes/lanus/savory-helados-y-cafe-323e50f5-b78e-4a0a-b741-ffd23745539b-menu?"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 motion-safe:transition ease-in-out duration-100 hover:scale-[0.97] hover:opacity-70"
              >
                <DeliveryIcon />
                Pedidos ya
              </a>
            </li>
            <li className="flex items-center gap-2 w-fit">
              <ClockIcon /> Estamos abiertos:
            </li>
            <ul className="ml-6 list-disc list-inside text-xl w-fit">
              <li>Lunes a Viernes: 10am - 12am</li>
              <li>Sábados: 11am - 1:30am</li>
              <li>Domingos: 11am - 12am</li>
            </ul>
          </ul>
        </div>
        <div className="md:w-1/2 w-full flex justify-center items-center md:mt-0 mt-6 z-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d354.7877555140993!2d-58.40091272671757!3d-34.72435262311919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccd6b3d13e9b5%3A0x277dec533f08507e!2sSavory!5e0!3m2!1sen!2sar!4v1721487437433!5m2!1sen!2sar"
            width="100%"
            height="450"
            // style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg opacity-80 border-8 border-blanco-oscuro"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Section2;
