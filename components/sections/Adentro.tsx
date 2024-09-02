"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import Paragraph from "../Paragraph";
import { container, imageItem, upItem } from "@/variants";
import Title from "../Title";

const ImageCard = ({
  imageSrc,
  imageAlt,
}: {
  imageSrc: string;
  imageAlt: string;
}) => {
  return (
    <motion.div
      variants={imageItem}
      className="w-32 500:w-48 sm:w-60 md:w-64 lg:w-72 xl:w-80 h-32 500:h-48 sm:h-60 md:h-64 lg:h-72 xl:h-80 relative"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={500}
        height={500}
        sizes="(max-width: 450px) 300px, 500px"
        className="w-full h-full rounded-lg object-cover"
      />
    </motion.div>
  );
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
        <Title
          variants={upItem}
          title="Espacios de Disfrute y Diversión"
          classNameProps="text-blanco"
        />
        <Paragraph
          variants={upItem}
          text="Contamos con diversas áreas diseñadas para que los clientes puedan
          disfrutar de sus productos en un ambiente cómodo y acogedor."
          classNameProps="text-blanco-oscuro"
        />
        <Paragraph
          variants={upItem}
          text="Dentro hay una amplia sección con mesas y sillas, ideal para aquellos que
          buscan un lugar climatizado para relajarse y disfrutar de su helado o
          café."
          classNameProps="text-blanco-oscuro"
        />
        <Paragraph
          variants={upItem}
          text="También tenemos un sector al aire libre ubicado en la vereda alrededor del establecimiento diseñado para que los clientes puedan disfrutar en un ambiente fresco y relajado, disfrutando de un momento agradable al exterior."
          classNameProps="text-blanco-oscuro"
        />
        <Paragraph
          variants={upItem}
          text="Además, hemos dedicado un sector especial para los más pequeños, donde los niños pueden jugar y divertirse mientras los adultos se relajan, haciendo de Sávory un destino perfecto para visitas familiares."
          classNameProps="text-blanco-oscuro"
        />
      </div>
      {/* Imagenes */}
      <div className="w-full relative z-10 flex flex-row flex-wrap gap-4 md:gap-6 items-center justify-center mt-10">
        <ImageCard
          imageSrc="/savory/vereda.jpeg"
          imageAlt="Sector en la vereda"
        />
        <ImageCard
          imageSrc="/savory/sillones.jpg"
          imageAlt="Sector con sillones"
        />
        <ImageCard
          imageSrc="/savory/savory-dentro.jpg"
          imageAlt="Sector sillas, mesas y juegos"
        />
      </div>
    </motion.section>
  );
};

export default Adentro;
