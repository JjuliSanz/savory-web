"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import BrownButton from "../ui/BrownButton";
import Paragraph from "../Paragraph";
import { container, rightItem, upItem } from "@/variants";
import Title from "../Title";

const Heladeria = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView && "visible"}
      variants={container}
      className="min-h-screen flex flex-col md:flex-row gap-6 items-center justify-between px-10 py-20 bg-marron overflow-hidden"
    >
      <div className="md:w-1/2 w-full flex flex-col items-center gap-4">
        <Title
          variants={upItem}
          title="Descubre la Excelencia en Cada Bocado: Nuestro Compromiso con la
          Calidad"
          classNameProps="text-blanco"
        />
        <Paragraph
          variants={upItem}
          text="Cada sorbo, cada cucharada de nuestro helado artesanal es una obra
          maestra de sabor y frescura. Nos dedicamos a seleccionar los
          ingredientes más finos y naturales, asegurando que cada lote sea una
          experiencia de indulgencia pura y satisfacción inigualable."
          classNameProps="text-blanco-oscuro"
        />
        <Paragraph
          variants={upItem}
          text="Nuestros helados se elaboran con recetas cuidadosamente
          perfeccionadas. Desde la textura cremosa hasta los sabores intensos y
          auténticos, cada producto que sale de nuestra heladería lleva consigo
          el compromiso de proporcionar lo mejor a nuestros clientes."
          classNameProps="text-blanco-oscuro"
        />
        <BrownButton href="/menu" text="Menú" classNameProps="px-4 py-2" />
      </div>
      {/* Imagenes */}
      <div className="md:w-1/2 w-full mt-6 md:mt-0 flex flex-row gap-4">
        <div className="flex flex-col w-full gap-4">
          <motion.div
            variants={rightItem}
            className="relative w-full h-48 md:h-72 bg-marron"
          >
            <Image
              src="/sabores.jpeg"
              alt="Savory Heladería y Cafetería 1"
              width={1000}
              height={1000}
              sizes="(max-width: 500px), 500px, 1000px"
              className="rounded-lg object-cover w-full h-full"
            />
          </motion.div>
          <motion.div
            variants={rightItem}
            className="relative w-full h-48 md:h-72 bg-marron"
          >
            <Image
              src="/food/helado.jpeg"
              alt="Savory Heladería y Cafetería 2"
              width={1000}
              height={1000}
              sizes="(max-width: 500px), 500px, 1000px"
              className="rounded-lg object-cover w-full h-full"
            />
          </motion.div>
        </div>
        <motion.div className="flex flex-col w-full">
          <motion.video
            variants={rightItem}
            className="w-full h-full object-cover rounded-lg"
            loop
            muted
            autoPlay
            disablePictureInPicture
            disableRemotePlayback
          >
            <source src="/video.mp4" type="video/mp4" />
          </motion.video>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Heladeria;
