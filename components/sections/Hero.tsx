"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Logo from "@/assets/Logo";
import { container, upItem } from "@/variants";
import Link from "next/link";

const Hero = () => {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const video3Ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    video1Ref.current?.play();
    if (video2Ref.current) {
      video2Ref.current.play();
      video2Ref.current.playbackRate = 1.25;
    }
    if (video3Ref.current) {
      video3Ref.current.play();
      video3Ref.current.playbackRate = 1.25;
    }
  }, []);
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={container}
      id="inicio"
      className="relative min-h-[calc(100vh-44px)] h-[calc(100vh-44px)] w-full flex flex-col items-center justify-center overflow-hidden gap-6"
    >
      <div className="blur absolute top-0 left-0 w-full h-full brightness-[.3] flex">
        <video
          className="w-full md:w-1/3 h-full object-cover object-center "
          ref={video1Ref}
          loop
          controls={false}
          muted
        >
          <source src="/heroVideo.mp4" type="video/mp4" />
        </video>
        <video
          className="hidden md:block w-1/3 h-full object-cover object-center "
          ref={video2Ref}
          loop
          controls={false}
          muted
        >
          <source src="/heroVideo2.mp4" type="video/mp4" />
        </video>
        <video
          className="hidden md:block w-1/3 h-full object-cover object-center "
          ref={video3Ref}
          loop
          controls={false}
          muted
        >
          <source src="/heroVideo3.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="flex items-center justify-center z-20 w-[300px] sm:w-[600px]">
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
