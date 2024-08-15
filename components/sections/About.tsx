"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="nosotros"
      className="min-h-screen flex flex-col gap-6 items-center justify-between px-10 py-20 bg-blanco-oscuro overflow-hidden"
    >
      {/* Primera fila: Imagen a la izquierda, texto a la derecha */}
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="relative w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                delay: 1,
                duration: 0.5,
                ease: "easeIn",
              },
            }}
            className="rounded-lg w-full h-[400px]"
          >
            <Image
              src="/savory/savory.jpeg" // Reemplaza esta ruta con la imagen real de Savory
              alt="Ambiente acogedor de Savory"
              width={500}
              height={500}
              className="rounded-lg object-cover w-full h-full"
            />
          </motion.div>
        </div>

        <div className="md:w-1/2 w-full text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                ease: "easeIn",
              },
            }}
            className="w-full text-3xl md:text-4xl font-bold text-marron mb-4"
          >
            Bienvenidos a Savory
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 1,
                duration: 0.5,
                ease: "easeIn",
              },
            }}
            className="text-2xl font-medium text-marron-claro mb-4"
          >
            En Savory, no solo ofrecemos los mejores helados y cafés, sino que
            también te brindamos una experiencia única. Estamos abiertos todos
            los días, asegurando que siempre puedas disfrutar de nuestras
            delicias en cualquier momento que lo desees.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 1.5,
                duration: 0.5,
                ease: "easeIn",
              },
            }}
            className="text-2xl font-medium text-marron-claro"
          >
            Con una reputación impecable y opiniones entusiastas de nuestros
            clientes, Savory es el lugar ideal para compartir momentos
            inolvidables con amigos y familiares en un ambiente cálido y
            acogedor.
          </motion.p>
        </div>
      </div>

      {/* Segunda fila: Texto a la izquierda, imagen a la derecha */}
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="md:w-1/2 w-full text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                ease: "easeIn",
              },
            }}
            className="w-full text-3xl md:text-4xl font-bold text-marron mb-4"
          >
            Nuestra Promesa
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 1,
                duration: 0.5,
                ease: "easeIn",
              },
            }}
            className="text-2xl font-medium text-marron-claro mb-4"
          >
            Cada día, nos esforzamos por ofrecer una experiencia excepcional.
            Desde la calidad de nuestros productos hasta el ambiente acogedor,
            en Savory, cada detalle cuenta. ¡Ven y comprueba por ti mismo por
            qué somos la mejor heladería en la ciudad!
          </motion.p>
        </div>

        <div className="relative w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                delay: 1,
                duration: 0.5,
                ease: "easeIn",
              },
            }}
            className="rounded-lg w-full h-[400px]"
          >
            <Image
              src="/savory/fuera.jpeg" // Reemplaza esta ruta con la imagen real de Savory
              alt="Deliciosos helados y cafés de Savory"
              width={500}
              height={500}
              className="rounded-lg object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
