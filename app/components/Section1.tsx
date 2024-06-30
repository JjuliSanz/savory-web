"use client";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";

const Card = ({ videoSrc, title }: { videoSrc: string; title: string }) => {
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
    <Link
      href=""
      className="col-span-1 row-span-1 w-full h-[300px] flex justify-center items-center relative bg-marron"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <video
        className="absolute inset-0 w-full h-full block object-cover object-center opacity-[.1] hover:opacity-100 transition ease-in-out duration-300"
        ref={videoRef}
        loop
        // autoPlay
        muted
        disablePictureInPicture
        disableRemotePlayback
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <h2 className="text-4xl text-center text-blanco-oscuro z-10">{title}</h2>
    </Link>
  );
};

const Section1 = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <section className="w-full grid grid-cols-3 grid-rows-2 gap-4 p-10">
      <Card videoSrc="/Coffe1.mp4" title="CAFETERIA" />
      <Card videoSrc="/Coffe1.mp4" title="FRIOS" />
      <Card videoSrc="/Coffe1.mp4" title="TORTAS Y DELICIAS" />
      <Card videoSrc="/Coffe1.mp4" title="SANDWICHES SALADOS" />
      <Card videoSrc="/Coffe1.mp4" title="HELADOS" />
      <Card videoSrc="/Coffe1.mp4" title="POSTRES HELADOS" />
    </section>
  );
};

export default Section1;
