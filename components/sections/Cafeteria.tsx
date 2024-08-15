"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cafeteria = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row gap-6 items-center justify-between px-10 py-20 bg-blanco-oscuro">
      {/* Imagenes */}
      <div className="md:w-1/2 w-full mt-6 md:mt-0 flex flex-row gap-4">
        <div className="flex flex-col w-full gap-4 pb-8">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 1,
                duration: 0.5,
                ease: "easeIn",
              },
            }}
            className="relative w-full h-72 "
          >
            <Image
              src="/tostadosjyq.jpeg" // Reemplaza esta ruta con la imagen real de Savory
              alt="Savory Heladería y Cafetería 1"
              fill
              className="rounded-lg object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 1,
                duration: 0.5,
                ease: "easeIn",
              },
            }}
            className="relative w-full h-72 "
          >
            <Image
              src="/milkshake-varios.jpg" // Reemplaza esta ruta con la imagen real de Savory
              alt="Savory Heladería y Cafetería 2"
              fill
              className="rounded-lg object-cover"
            />
          </motion.div>
        </div>
        <div className="flex flex-col w-full gap-4 pt-8">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 1,
                duration: 0.5,
                ease: "easeIn",
              },
            }}
            className="relative w-full h-72 "
          >
            <Image
              src="/tostones-jugos.webp" // Reemplaza esta ruta con la imagen real de Savory
              alt="Savory Heladería y Cafetería 3"
              fill
              className="rounded-lg object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 1,
                duration: 0.5,
                ease: "easeIn",
              },
            }}
            className="relative w-full h-72 "
          >
            <Image
              src="/tortas01.jpg" // Reemplaza esta ruta con la imagen real de Savory
              alt="Savory Heladería y Cafetería 4"
              fill
              className="rounded-lg object-cover"
            />
          </motion.div>
        </div>
      </div>
      <div className="md:w-1/2 w-full flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              ease: "easeIn",
            },
          }}
          className="w-full text-4xl font-bold text-marron mb-4"
        >
          Delicias de la Cafetería en Savory
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 1,
              duration: 0.5,
              ease: "easeIn",
            },
          }}
          className="text-xl font-medium text-marron-claro mb-4 "
        >
          Savory no solo es reconocida por sus deliciosos helados, sino también
          por su variada y exquisita oferta de comidas y bebidas en su
          cafetería. Los clientes pueden disfrutar de una amplia selección de
          tortas y pasteles, perfectos para acompañar con una taza de café o té.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 1.5,
              duration: 0.5,
              ease: "easeIn",
            },
          }}
          className="text-xl font-medium text-marron-claro mb-4 "
        >
          Además ofrecemos una variedad de sándwiches, tanto fríos como
          calientes, que son ideales para un almuerzo rápido o una merienda
          sustanciosa. Entre las opciones de bebidas, los clientes pueden elegir
          entre cafés fríos y calientes, preparados con los mejores granos para
          satisfacer los gustos más exigentes.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 2,
              duration: 0.5,
              ease: "easeIn",
            },
          }}
          className="text-xl font-medium text-marron-claro mb-4"
        >
          Para aquellos con antojos más dulces, contamos con una deliciosa
          selección de panqueques, medialunas, alfajores, budines y muffins,
          todos preparados con ingredientes de alta calidad. O quizás los wraps,
          una opción fresca y ligera, perfecta para cualquier momento del día.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 2.5,
              duration: 0.5,
              ease: "easeIn",
            },
          }}
          className="px-4 py-2 border-4 border-marron text-marron text-xl font-bold rounded hover:scale-95 transition duration-150 ease-in-out hover:bg-marron hover:text-blanco-oscuro bg-blanco-oscuro"
        >
          <Link href="/menu">Menu</Link>
        </motion.button>
      </div>
    </section>
  );
};

export default Cafeteria;
