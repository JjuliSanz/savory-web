"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Orquesta las animaciones con un retraso de 0.5 segundos entre cada elemento
    },
  },
};

const upItem = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 10,
      mass: 1,
      stiffness: 150,
      duration: 0.5,
    },
  },
};

const imageItem = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 10,
      mass: 1,
      stiffness: 150,
      duration: 0.5,
    },
  },
};

const Adentro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView && "visible"}
      variants={container}
      className="min-h-screen relative flex flex-col items-center justify-center py-20 px-10  bg-marron"
    >
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
      <div className="w-full relative z-10 text-center flex flex-col gap-4">
        <motion.h2
          variants={upItem}
          className="w-full text-3xl md:text-5xl font-bold text-blanco "
        >
          Espacios de Disfrute y Diversión
        </motion.h2>
        <motion.p
          variants={upItem}
          className="text-2xl font-medium text-blanco-oscuro "
        >
          Contamos con diversas áreas diseñadas para que los clientes puedan
          disfrutar de sus productos en un ambiente cómodo y acogedor. Dentro
          hay una amplia sección con mesas y sillas, ideal para aquellos que
          buscan un lugar climatizado para relajarse y disfrutar de su helado o
          café.
        </motion.p>
        <motion.p
          variants={upItem}
          className="text-2xl font-medium text-blanco-oscuro "
        >
          También tenemos un sector al aire libre ubicado en la vereda alrededor
          del establecimiento. Este espacio está diseñado para que los clientes
          puedan disfrutar de sus helados y cafés en un ambiente fresco y
          relajado, disfrutando de un momento agradable al exterior.
        </motion.p>
        <motion.p
          variants={upItem}
          className="text-2xl font-medium text-blanco-oscuro"
        >
          Además, hemos dedicado un sector especial para los más pequeños, donde
          los niños pueden jugar y divertirse mientras los adultos se relajan.
          Este espacio infantil está equipado con juegos seguros y apropiados
          para diferentes edades, haciendo de Savory un destino perfecto para
          visitas familiares.
        </motion.p>
      </div>
      {/* Imagenes */}
      <div className="w-full relative z-10 flex flex-row flex-wrap max-md:gap-4 items-center justify-center mt-10">
        <motion.div variants={imageItem} className="w-32 md:w-64 h-32 md:h-64 relative">
          <Image
            src="/savory/vereda.jpeg" // Reemplaza esta ruta con la imagen real de Savory
            alt="Savory Heladería y Cafetería 1"
            width={500}
            height={500}
            className="w-full h-full rounded-lg object-cover"
          />
        </motion.div>
        <motion.div variants={imageItem} className="w-32 md:w-64 h-32 md:h-64 relative">
          <Image
            src="/savory/sillones.jpg" // Reemplaza esta ruta con la imagen real de Savory
            alt="Savory Heladería y Cafetería 2"
            width={500}
            height={500}
            className="w-full h-full rounded-lg object-cover"
          />
        </motion.div>
        <motion.div variants={imageItem} className="w-32 md:w-64 h-32 md:h-64 relative">
          <Image
            src="/savory/savory-dentro.jpg" // Reemplaza esta ruta con la imagen real de Savory
            alt="Savory Heladería y Cafetería 3"
            width={500}
            height={500}
            className="w-full h-full rounded-lg object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Adentro;
