"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Button from "../Button";
import WhiteButton from "../ui/WhiteButton";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Orquesta las animaciones con un retraso de 0.5 segundos entre cada elemento
    },
  },
};

const leftItem = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 10,
      mass: 1,
      stiffness: 150,
      duration: 0.3,
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



const rightItem = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 10,
      mass: 1,
      stiffness: 150,
      duration: 0.3,
    },
  },
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView && "visible"}
      variants={container}
      id="nosotros"
      className="min-h-screen flex flex-col gap-6 items-center justify-between px-10 py-20 bg-blanco-oscuro overflow-hidden"
    >
      {/* Primera fila: Imagen a la izquierda, texto a la derecha */}
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="relative w-full md:w-1/2">
          <motion.div
            variants={leftItem}
            className="rounded-lg w-full h-[300px] md:h-[400px]"
          >
            <Image
              src="/savory/savory.jpeg"
              alt="Ambiente acogedor de Savory"
              width={1000}
              height={1000}
              className="rounded-lg object-cover w-full h-full"
            />
          </motion.div>
        </div>

        <div className="md:w-1/2 w-full text-center flex flex-col gap-4">
          <motion.h2
            variants={rightItem}
            className="w-full text-3xl md:text-4xl font-bold text-marron "
          >
            Bienvenidos a Savory
          </motion.h2>
          <motion.p
            variants={rightItem}
            className="text-2xl font-medium text-marron-claro "
          >
            Desde la calidad de nuestros productos hasta el ambiente acogedor,
            en Savory, cada detalle cuenta. Estamos abiertos todos los días,
            asegurando que siempre puedas disfrutar de nuestras delicias en
            cualquier momento que lo desees.
          </motion.p>
          <motion.p
            variants={rightItem}
            className="text-2xl font-medium text-marron-claro"
          >
            Con una reputación impecable y opiniones entusiastas de nuestros
            clientes, Savory es el lugar ideal para compartir momentos
            inolvidables con amigos y familiares en un ambiente cálido y
            acogedor.
          </motion.p>
          <motion.p
            variants={rightItem}
            className="text-2xl font-medium text-marron-claro"
          >
            ¡Ven y comprueba por ti mismo por qué somos la mejor heladería en la
            ciudad!
          </motion.p>
        </div>
      </div>

      {/* Segunda fila: Texto a la izquierda, imagen a la derecha */}
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="md:w-1/2 w-full text-center">
          <motion.h2
            variants={leftItem}
            className="w-full text-3xl md:text-4xl font-bold text-marron mb-4"
          >
            Pedidos Fáciles y Convenientes
          </motion.h2>
          <motion.p
            variants={leftItem}
            className="text-2xl font-medium text-marron-claro mb-4"
          >
            En Savory, nos aseguramos de que puedas disfrutar de tus productos
            favoritos de manera fácil y conveniente. Tomamos pedidos a través de
            WhatsApp, celular, o teléfono, para que puedas hacer tu pedido desde
            la comodidad de tu hogar o donde te encuentres.
          </motion.p>

          <motion.p
            variants={leftItem}
            className="text-2xl font-medium text-marron-claro mb-4"
          >
            Además, también estamos disponibles en la plataforma de Pedidos Ya,
            facilitando aún más el proceso de ordenar nuestros helados, cafés, y
            todas las delicias de nuestra cafetería. Ya sea que prefieras
            recoger tu pedido en el local o recibirlo directamente en tu puerta,
            en Savory estamos listos para atenderte.
          </motion.p>
          <WhiteButton
            classNameProps="px-4 py-2"
            text="Contacto"
            href="/#contacto"
          />
        </div>

        <div className="relative w-full md:w-1/2">
          <motion.div
            variants={rightItem}
            className="rounded-lg w-full h-[300px] md:h-[400px]"
          >
            <Image
              src="/savory/fuera.jpeg"
              alt="Deliciosos helados y cafés de Savory"
              width={1000}
              height={1000}
              className="rounded-lg object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
