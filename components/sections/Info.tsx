"use client";
import { motion, useInView } from "framer-motion";
import { ClockIcon } from "@/assets/icons/ClockIcon";
import { DeliveryIcon } from "@/assets/icons/DeliveryIcon";
import { FacebookIcon } from "@/assets/icons/FacebookIcon";
import { InstagramIcon } from "@/assets/icons/InstagramIcon";
import { PhoneIcon } from "@/assets/icons/PhoneIcon";
import { PinIcon } from "@/assets/icons/PinIcon";
import { WhatsIcon } from "@/assets/icons/WhatsIcon";
import Link from "next/link";
import React, { useRef } from "react";

const list = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
  hidden: {
    opacity: 0,
  },
};
const listItem = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", damping: "10", mass: 1, stiffness: 150 },
  },
  hidden: { opacity: 0, x: -100 },
};
const Info = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.section
      initial="hidden"
      animate={isInView && "visible"}
      variants={list}
      ref={ref}
      id="info"
      className="relative w-full min-h-screen bg-fixed bg-top bg-cover flex flex-col md:flex-row  justify-between text-center px-10 py-20 overflow-hidden"
      style={{ backgroundImage: "url(/fondoContact.jpg)" }}
    >
      <div className="absolute inset-0 bg-marron opacity-80 z-0"></div>
      <div className="md:w-1/2 w-full flex flex-col md:text-left text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={
            isInView && {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                ease: "easeIn",
              },
            }
          }
          className="text-4xl md:text-6xl font-bold text-blanco mb-10"
        >
          Ven a Conocernos
        </motion.h2>
        <motion.ul className="text-2xl md:text-3xl font-semibold text-blanco-oscuro space-y-4">
          <motion.li
            variants={listItem}
            className="flex items-center gap-2 w-fit"
          >
            <PinIcon className="w-10" /> Lugones 395, Remedios de Escalada
          </motion.li>
          <motion.li
            variants={listItem}
            className="flex items-center gap-2 w-fit"
          >
            <PhoneIcon className="w-10" /> 4516-0691
          </motion.li>
          <motion.li variants={listItem} className="w-fit">
            <Link
              href="https://api.whatsapp.com/send?phone=541137852214"
              target="_blank"
              className="flex items-center gap-2 motion-safe:transition ease-in-out duration-100 hover:scale-[0.97] hover:opacity-70"
            >
              <WhatsIcon className="w-10" />
              11 3785-2214
            </Link>
          </motion.li>
          <motion.li variants={listItem} className="w-fit">
            <Link
              href="https://www.instagram.com/savoryheladoscafe/"
              target="_blank"
              className="flex items-center gap-2 motion-safe:transition ease-in-out duration-100 hover:scale-[0.97] hover:opacity-70"
            >
              <InstagramIcon className="w-10" />
              SavoryHeladosCafe
            </Link>{" "}
          </motion.li>
          <motion.li variants={listItem} className="w-fit">
            <Link
              href="https://www.facebook.com/SavoryHeladosYCafe/"
              className="flex items-center gap-2 transition ease-in-out duration-100 hover:scale-[0.97] hover:opacity-70"
              target="_blank"
            >
              <FacebookIcon className="w-10" />
              Savory Helados Y Café
            </Link>{" "}
          </motion.li>

          <motion.li variants={listItem} className="w-fit">
            <Link
              href="https://www.pedidosya.com.ar/restaurantes/lanus/savory-helados-y-cafe-323e50f5-b78e-4a0a-b741-ffd23745539b-menu?"
              target="_blank"
              className="flex items-center gap-2 motion-safe:transition ease-in-out duration-100 hover:scale-[0.97] hover:opacity-70"
            >
              <DeliveryIcon className="w-10" />
              Pedidos ya
            </Link>
          </motion.li>
          <motion.li
            variants={listItem}
            className="flex items-center gap-2 w-fit"
          >
            <ClockIcon className="w-10" /> Estamos abiertos:
          </motion.li>
          <motion.ul
            variants={listItem}
            className="ml-6 list-disc list-inside text-xl w-fit"
          >
            <li>Lunes a Viernes: 10am - 12am</li>
            <li>Sábados: 11am - 1:30am</li>
            <li>Domingos: 11am - 12am</li>
          </motion.ul>
        </motion.ul>
      </div>
      <div className="md:w-1/2 w-full flex justify-center items-center md:mt-0 mt-6 z-10">
        <motion.iframe
          variants={listItem}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d354.7877555140993!2d-58.40091272671757!3d-34.72435262311919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccd6b3d13e9b5%3A0x277dec533f08507e!2sSavory!5e0!3m2!1sen!2sar!4v1721487437433!5m2!1sen!2sar"
          // style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg opacity-80 border-8 border-blanco-oscuro w-full h-[350px] md:h-[450px]"
        ></motion.iframe>
      </div>
    </motion.section>
  );
};

export default Info;
