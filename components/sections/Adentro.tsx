"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Adentro = () => {
  return (
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
          className="text-4xl md:text-5xl font-bold text-blanco mb-4"
        >
          Espacios de Disfrute y Diversión en Savory
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
          className="text-lg text-blanco-oscuro mb-4"
        >
          Contamos con diversas áreas diseñadas para que los clientes puedan
          disfrutar de sus productos en un ambiente cómodo y acogedor. Dentro
          hay una amplia sección con mesas y sillas, ideal para aquellos que
          buscan un lugar climatizado para relajarse y disfrutar de su helado o
          café.
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
          className="text-lg text-blanco-oscuro mb-4"
        >
          También tenemos un sector al aire libre ubicado en la vereda alrededor
          del establecimiento. Este espacio está diseñado para que los clientes
          puedan disfrutar de sus helados y cafés en un ambiente fresco y
          relajado, disfrutando de un momento agradable al exterior.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 2,
              duration: 0.5,
              ease: "easeIn",
            },
          }}
          className="text-lg text-blanco-oscuro"
        >
          Además, hemos dedicado un sector especial para los más pequeños, donde
          los niños pueden jugar y divertirse mientras los adultos se relajan.
          Este espacio infantil está equipado con juegos seguros y apropiados
          para diferentes edades, haciendo de Savory un destino perfecto para
          visitas familiares.
        </motion.p>
      </div>
      {/* Imagenes */}
      <div className="w-full relative z-10 flex flex-wrap justify-between mt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              delay: 2.5,
              duration: 0.5,
              ease: "easeIn",
            },
          }}
          className="w-64 h-64 relative"
        >
          <Image
            src="/savory/vereda.jpeg" // Reemplaza esta ruta con la imagen real de Savory
            alt="Savory Heladería y Cafetería 1"
            fill
            className="rounded-lg object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              delay: 2.5,
              duration: 0.5,
              ease: "easeIn",
            },
          }}
          className="w-64 h-64 relative"
        >
          <Image
            src="/savory/sillones.jpg" // Reemplaza esta ruta con la imagen real de Savory
            alt="Savory Heladería y Cafetería 2"
            fill
            className="rounded-lg object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              delay: 2.5,
              duration: 0.5,
              ease: "easeIn",
            },
          }}
          className="w-64 h-64 relative"
        >
          <Image
            src="/savory/savory-dentro.jpg" // Reemplaza esta ruta con la imagen real de Savory
            alt="Savory Heladería y Cafetería 3"
            fill
            className="rounded-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Adentro;
