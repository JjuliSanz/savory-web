"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import WhiteButton from "../ui/WhiteButton";
import Paragraph from "../Paragraph";
import { container, leftItem, rightItem, upItem } from "@/variants";
import Title from "../Title";

const Cafeteria = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView && "visible"}
      variants={container}
      className="min-h-screen flex flex-col md:flex-row gap-6 items-center justify-between px-10 py-20 bg-blanco-oscuro"
    >
      {/* Imagenes */}
      <div className="md:w-1/2 w-full mt-6 md:mt-0 flex flex-row gap-4">
        <div className="flex flex-col w-full gap-4 pb-8">
          <motion.div
            variants={leftItem}
            className="relative w-full h-48 md:h-72 "
          >
            <Image
              src="/tostadosjyq.jpeg" 
              alt="Savory Heladería y Cafetería 1"
              width={1000}
              height={1000}
              sizes="(max-width: 500px), 500px, 1000px"
              className="w-full h-full rounded-lg object-cover"
            />
          </motion.div>
          <motion.div
            variants={leftItem}
            className="relative w-full h-48 md:h-72 "
          >
            <Image
              src="/milkshake-varios.jpg" 
              alt="Savory Heladería y Cafetería 2"
              width={1000}
              height={1000}
              sizes="(max-width: 500px), 500px, 1000px"
              className="w-full h-full rounded-lg object-cover"
            />
          </motion.div>
        </div>
        {/* RIGHT COLUMN */}
        <div className="flex flex-col w-full gap-4 pt-8">
          <motion.div
            variants={rightItem}
            className="relative w-full h-48 md:h-72 "
          >
            <Image
              src="/tostones-jugos.webp" 
              alt="Savory Heladería y Cafetería 3"
              width={1000}
              height={1000}
              sizes="(max-width: 500px), 500px, 1000px"
              className="w-full h-full rounded-lg object-cover"
            />
          </motion.div>
          <motion.div
            variants={rightItem}
            className="relative w-full h-48 md:h-72 "
          >
            <Image
              src="/tortas01.jpg" 
              alt="Savory Heladería y Cafetería 4"
              width={1000}
              height={1000}
              sizes="(max-width: 500px), 500px, 1000px"
              className="w-full h-full rounded-lg object-cover"
            />
          </motion.div>
        </div>
      </div>
      <div className="md:w-1/2 w-full flex flex-col items-center gap-4">
        <Title
          variants={upItem}
          title="Delicias de la Cafetería en Sávory"
          classNameProps="text-marron"
        />
        <Paragraph
          variants={upItem}
          text="Sávory no solo es reconocida por sus deliciosos helados, sino también
          por su variada y exquisita oferta de comidas y bebidas en su
          cafetería. Los clientes pueden disfrutar de una amplia selección de
          tortas y pasteles, perfectos para acompañar con una taza de café o té."
          classNameProps="text-marron-claro"
        />
        <Paragraph
          variants={upItem}
          text="Además ofrecemos una variedad de sándwiches, tanto fríos como
          calientes, que son ideales para un almuerzo rápido o una merienda
          sustanciosa. Entre las opciones de bebidas, los clientes pueden elegir
          entre cafés fríos y calientes, preparados con los mejores granos para
          satisfacer los gustos más exigentes."
          classNameProps="text-marron-claro"
        />
        <Paragraph
          variants={upItem}
          text="Para aquellos con antojos más dulces, contamos con una deliciosa
          selección de panqueques, medialunas, alfajores, budines y muffins,
          todos preparados con ingredientes de alta calidad. O quizás los wraps,
          una opción fresca y ligera, perfecta para cualquier momento del día."
          classNameProps="text-marron-claro"
        />
        <WhiteButton text="Menú" href="/menu" classNameProps="px-4 py-2" />
      </div>
    </motion.section>
  );
};

export default Cafeteria;
