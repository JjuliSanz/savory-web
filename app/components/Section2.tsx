import Image from "next/image";

const Section2 = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-blanco-oscuro">
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
        <div className="md:w-1/2 w-full mt-6 md:mt-0">
          <div className="relative w-full h-96">
            <Image
              src="/savory/savory.jpeg" // Reemplaza esta ruta con la imagen real de Savory
              alt="Savory Heladería y Cafetería"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-blanco-oscuro">
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
        <div className="md:w-1/2 w-full mt-6 md:mt-0">
          <video
            className="relative w-full h-96 object-cover"
            loop
            muted
            autoPlay
            disablePictureInPicture
            disableRemotePlayback
          >
            <source src="/savory/sector-comida-juego.mp4" type="video/mp4"/>
          </video>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-marron">
        <div className="md:w-1/2 w-full mt-6 md:mt-0 flex flex-row gap-4">
          <div className="flex flex-col w-full gap-4 pb-8">
            <div className="relative w-full h-48 bg-marron">
              <Image
                src="/savory/savory.jpeg" // Reemplaza esta ruta con la imagen real de Savory
                alt="Savory Heladería y Cafetería 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="relative w-full h-48 bg-marron">
              <Image
                src="/savory/sillones.jpg" // Reemplaza esta ruta con la imagen real de Savory
                alt="Savory Heladería y Cafetería 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-4 pt-8">
            <div className="relative w-full h-48 bg-marron">
              <Image
                src="/savory/savory-lado.jpeg" // Reemplaza esta ruta con la imagen real de Savory
                alt="Savory Heladería y Cafetería 3"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="relative w-full h-48 bg-marron">
              <Image
                src="/savory/savory-dentro.jpg" // Reemplaza esta ruta con la imagen real de Savory
                alt="Savory Heladería y Cafetería 4"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-blanco mb-4">
            Nuestra Historia
          </h2>
          <p className="text-lg text-blanco-oscuro mb-4">
            Ubicada en Cnel. Lugones, B1826 Lanús, Savory es más que una
            heladería y cafetería, es un lugar donde cada sabor cuenta una
            historia. Desde nuestros humildes comienzos, nos hemos dedicado a
            crear experiencias memorables para nuestros clientes a través de
            nuestros deliciosos helados y cafés.
          </p>
          <p className="text-lg text-blanco-oscuro">
            Con un enfoque en la calidad y la pasión por lo que hacemos, Savory
            se ha convertido en un punto de encuentro para amigos y familias que
            buscan disfrutar de momentos dulces y acogedores en un ambiente
            cálido y amigable.
          </p>
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-blanco-oscuro">
        <div className="md:w-1/2 w-full px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-marron mb-4">
            Descubre la Excelencia en Cada Bocado: Nuestro Compromiso con la
            Calidad
          </h2>
          <p className="text-lg text-marron-clarito mb-4">
            En Savory, la calidad es el corazón de todo lo que hacemos. Cada
            sorbo, cada cucharada de nuestro helado artesanal es una obra
            maestra de sabor y frescura. Nos dedicamos a seleccionar los
            ingredientes más finos y naturales, asegurando que cada lote sea una
            experiencia de indulgencia pura y satisfacción inigualable.
          </p>
          <p className="text-lg text-marron-clarito">
            Nuestros helados se elaboran con recetas cuidadosamente
            perfeccionadas. Desde la textura cremosa hasta los sabores intensos
            y auténticos, cada producto que sale de nuestra heladería lleva
            consigo el compromiso de proporcionar lo mejor a nuestros clientes.
          </p>
          <p className="text-lg text-marron-clarito">
            Nos enorgullece ofrecer una variedad de opciones para todos los
            gustos y preferencias, desde los clásicos favoritos hasta
            innovadoras creaciones que despiertan los sentidos. Cada helado es
            una expresión de nuestro compromiso con la excelencia y la pasión
            por deleitar paladares exigentes.
          </p>
        </div>
        <div className="md:w-1/2 w-full mt-6 md:mt-0 flex flex-row gap-4">
          <div className="flex flex-col w-full gap-4 pb-8">
            <div className="relative w-full h-48 bg-marron">
              <Image
                src="/food/chocotorta.jpeg" // Reemplaza esta ruta con la imagen real de Savory
                alt="Savory Heladería y Cafetería 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="relative w-full h-48 bg-marron">
              <Image
                src="/food/combo-entrada.jpeg" // Reemplaza esta ruta con la imagen real de Savory
                alt="Savory Heladería y Cafetería 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-4 pt-8">
            <div className="relative w-full h-48 bg-marron">
              <Image
                src="/food/helado-pote.jpeg" // Reemplaza esta ruta con la imagen real de Savory
                alt="Savory Heladería y Cafetería 3"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="relative w-full h-48 bg-marron">
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
    </>
  );
};

export default Section2;
