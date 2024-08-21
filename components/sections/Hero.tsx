"use client";
import React, { useEffect, useRef } from "react";
import Button from "../Button";
import Image from "next/image";
import WhiteButton from "../ui/WhiteButton";
import BrownButton from "../ui/BrownButton";

const buttonVariants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.5,
      duration: 0.5,
      ease: "easeIn",
    },
  }
}

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    videoRef.current?.play();
  }, []);
  return (
    <section id="inicio" className="relative min-h-[calc(100vh-44px)] h-[calc(100vh-44px)] w-full flex flex-col items-center justify-center overflow-hidden">
      {/* <div className="absolute inset-0  z-0 ">
        <Image
          src="/entrada.jpeg"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div> */}
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

      <h1 className="text-2xl md:text-9xl font-bold text-blanco font-serif z-10 row-span-1">
        SAVORY
      </h1>

      <p className="text-4xl font-sans text-blanco-oscuro">HELADERIA & CAFETERIA</p>

      <BrownButton href="/menu" text="Menu" classNameProps="px-6 py-3"/>
    </section>
  );
};

export default Hero;
