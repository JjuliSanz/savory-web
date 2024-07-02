"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";

const Card = ({ videoSrc, imageSrc, title }: { videoSrc: string; imageSrc: string; title: string }) => {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (hovered) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
      videoRef.current.currentTime = 0;
    }
  }, [hovered]);
  return (
    <div className="flex flex-col gap-4">
      <Link
        href=""
        className="col-span-1 row-span-1 w-full h-[350px] relative bg-marron border-[10px] border-blanco-oscuro"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src={imageSrc}
          layout="fill"
          alt=""
          className="absolute w-full h-full object-cover inset-0 hover:hidden"
        />
        <video
          className="absolute block inset-0 w-full h-full  object-cover object-center opacity-[.1] hover:opacity-100 transition ease-in-out duration-300"
          ref={videoRef}
          loop
          // autoPlay
          muted
          disablePictureInPicture
          disableRemotePlayback
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </Link>
      {/* <h2 className="absolute left-0 right-0 bottom-10 text-4xl text-center text-blanco-oscuro z-10">
        {title}
      </h2> */}

      <Link href="" className="px-4 py-2 border-[5px] border-blanco-oscuro mx-auto text-blanco">
        {title}
      </Link>
    </div>
  );
};

const Section1 = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <section className="w-full grid grid-cols-3 grid-rows-2 gap-4 px-10 py-20">
      <Card videoSrc="/Coffe1.mp4" imageSrc="/capuccino-edit.jpg" title="CAFETERIA" />
      <Card videoSrc="/Coffe1.mp4" imageSrc="/milshake-varios.jpg" title="BEBIDAS FRIAS" />
      <Card videoSrc="/Coffe1.mp4" imageSrc="/tortas01.jpg" title="TORTAS Y DELICIAS" />
      <Card videoSrc="/tostados.mp4" imageSrc="/tostadosjyq.jpeg" title="SALADOS" />
      <Card videoSrc="/tostones.mp4" imageSrc="/tostones-jugos.webp" title="TOSTONES" />
      <Card videoSrc="/Coffe1.mp4" imageSrc="/capuccino-edit.jpg" title="SANDWICHES " />
      <Card videoSrc="/Coffe1.mp4" imageSrc="/capuccino-edit.jpg" title="HELADOS" />
      <Card videoSrc="/Coffe1.mp4" imageSrc="/capuccino-edit.jpg" title="POSTRES HELADOS" />
    </section>
  );
};

export default Section1;
