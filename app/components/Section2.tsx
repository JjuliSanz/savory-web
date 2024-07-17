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
            <source src="/savory/sector-comida-juego.mp4" type="video/mp4" />
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
            Espacios al Aire Libre en Savory
          </h2>
          <p className="text-lg text-blanco-oscuro mb-4">
            Savory ofrece un encantador sector al aire libre ubicado en la
            vereda alrededor del establecimiento. Este espacio está diseñado
            para que los clientes puedan disfrutar de sus helados y cafés en un
            ambiente fresco y relajado.
          </p>
          <p className="text-lg text-blanco-oscuro">
            En esta área, se encuentran sillas individuales y grupales,
            perfectas para acomodar tanto a quienes vienen solos como a grupos
            de amigos o familiares. Además, hay cómodas hamacas para sentarse y
            disfrutar del día de manera más relajada. También se han dispuesto
            mesas, ideales para aquellos que desean tener un lugar donde apoyar
            sus bebidas y postres mientras disfrutan del entorno.
          </p>
          <p className="text-lg text-blanco-oscuro">
            Este espacio al aire libre de Savory es perfecto para aprovechar los
            días soleados y disfrutar de un momento agradable al exterior.
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

      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-marron">
        <div className="md:w-1/2 w-full mt-6 md:mt-0 flex flex-row gap-4">
          <div className="flex flex-col w-full gap-4 pb-8">
            <div className="relative w-full h-48 bg-marron">
              <Image
                src="/tostadosjyq.jpeg" // Reemplaza esta ruta con la imagen real de Savory
                alt="Savory Heladería y Cafetería 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="relative w-full h-48 bg-marron">
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
            <div className="relative w-full h-48 bg-marron">
              <Image
                src="/tortas01.jpg" // Reemplaza esta ruta con la imagen real de Savory
                alt="Savory Heladería y Cafetería 3"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="relative w-full h-48 bg-marron">
              <Image
                src="/tostones-jugos.webp" // Reemplaza esta ruta con la imagen real de Savory
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
          Delicias de la Cafetería en Savory
          </h2>
          <p className="text-lg text-blanco-oscuro mb-4">
            Savory no solo es reconocida por sus deliciosos helados, sino
            también por su variada y exquisita oferta de comidas y bebidas en su
            cafetería. Los clientes pueden disfrutar de una amplia selección de
            tortas y pasteles, perfectos para acompañar con una taza de café o
            té.
          </p>
          <p className="text-lg text-blanco-oscuro">
            La cafetería ofrece una variedad de sándwiches, tanto fríos como
            calientes, que son ideales para un almuerzo rápido o una merienda
            sustanciosa. Entre las opciones de bebidas, los clientes pueden
            elegir entre cafés fríos y calientes, preparados con los mejores
            granos para satisfacer los gustos más exigentes.
          </p>
          <p className="text-lg text-blanco-oscuro">
            Para aquellos con antojos más dulces, Savory cuenta con una
            deliciosa selección de panqueques, medialunas, alfajores, budines y
            muffins, todos preparados con ingredientes de alta calidad. Además,
            los wraps son una opción fresca y ligera, perfecta para cualquier
            momento del día.
          </p>
          <p className="text-lg text-blanco-oscuro">
            Cada visita a la cafetería de Savory promete una experiencia
            culinaria que complementa perfectamente sus famosos helados.
          </p>
        </div>
      </section>
    </>
  );
};

export default Section2;
