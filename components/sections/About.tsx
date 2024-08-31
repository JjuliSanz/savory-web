"use client";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import WhiteButton from "../ui/WhiteButton";
import Paragraph from "../Paragraph";
import { container, leftItem, rightItem } from "@/variants";
import Title from "../Title";

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
          <Title
            variants={rightItem}
            title="Bienvenidos a Sávory"
            classNameProps="text-marron"
          />
          <Paragraph
            variants={rightItem}
            text="Desde la calidad de nuestros productos hasta el ambiente acogedor,
            en Sávory, cada detalle cuenta. Estamos abiertos todos los días,
            asegurando que siempre puedas disfrutar de nuestras delicias en
            cualquier momento que lo desees."
            classNameProps="text-marron-claro"
          />
          <Paragraph
            variants={rightItem}
            text="Con una reputación impecable y opiniones entusiastas de nuestros
            clientes, Sávory es el lugar ideal para compartir momentos
            inolvidables con amigos y familiares en un ambiente cálido y
            acogedor."
            classNameProps="text-marron-claro"
          />
          <Paragraph
            variants={rightItem}
            text="¡Ven y comprueba por ti mismo por qué somos la mejor heladería en la
            ciudad!"
            classNameProps="text-marron-claro"
          />
        </div>
      </div>

      {/* Segunda fila: Texto a la izquierda, imagen a la derecha */}
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="md:w-1/2 w-full text-center flex flex-col gap-4">
          <Title
            variants={leftItem}
            title="Pedidos Fáciles y Convenientes"
            classNameProps="text-marron"
          />
          <Paragraph
            variants={leftItem}
            text="En Sávory, nos aseguramos de que puedas disfrutar de tus productos
            favoritos de manera fácil y conveniente. Tomamos pedidos a través de
            WhatsApp, celular, o teléfono, para que puedas hacer tu pedido desde
            la comodidad de tu hogar o donde te encuentres."
            classNameProps="text-marron-claro"
          />
          <Paragraph
            variants={leftItem}
            text="Además, también estamos disponibles en la plataforma de Pedidos Ya,
            facilitando aún más el proceso de ordenar nuestros helados, cafés, y
            todas las delicias de nuestra cafetería. Ya sea que prefieras
            recoger tu pedido en el local o recibirlo directamente en tu puerta,
            en Sávory estamos listos para atenderte."
            classNameProps="text-marron-claro"
          />
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
