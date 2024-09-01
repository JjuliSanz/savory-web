"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Logo from "@/assets/Logo";
import { container, upItem } from "@/variants";
import Link from "next/link";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    videoRef.current?.play();
  }, []);
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={container}
      id="inicio"
      className="relative min-h-[calc(100vh-44px)] h-[calc(100vh-44px)] w-full flex flex-col items-center justify-center overflow-hidden gap-6"
    >
      <div className="blur absolute top-0 left-0 w-full h-full brightness-[.3]">
        <video
          className="w-full h-full object-cover object-center "
          ref={videoRef}
          loop
          controls={false}
          muted
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="flex items-center justify-center z-20 w-[600px]">
        <Logo />
      </div>

      <motion.p
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.8,
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
        className="text-4xl font-medium relative z-10 text-blanco-oscuro"
      >
        Heladería y Cafetería
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1.6,
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
        className="w-fit mx-auto relative"
      >
        <Link
          href="/menu"
          className="flex motion-safe:transition duration-300 ease-in-out text-3xl font-medium rounded bg-marron border-4 border-blanco-oscuro text-blanco-oscuro outline-none focus:outline-none hover:bg-blanco-oscuro hover:text-marron hover:scale-95 brownButtonShadow px-6 py-3"

          // active:bg-marron active:text-blanco-oscuro
        >
          Menú
        </Link>
      </motion.button>
    </motion.section>
  );
};

export default Hero;
