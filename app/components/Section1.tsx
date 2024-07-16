"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { cn } from "../utils/cn";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Parallax } from "swiper/modules";
const Card = ({
  videoSrc,
  imageSrc,
  title,
  additionalClass,
}: {
  videoSrc?: string; // videoSrc puede ser opcional
  imageSrc: string;
  title: string;
  additionalClass?: string;
}) => {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (hovered && videoSrc) {
      videoRef.current?.play();
    } else if (videoRef.current) {
      videoRef.current?.pause();
      videoRef.current.currentTime = 0;
    }
  }, [hovered, videoSrc]);

  return (
    <div
      className="w-full h-[350px] relative bg-marron border-[10px] border-blanco-oscuro flex justify-center items-end overflow-hidden rounded"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={imageSrc}
        layout="fill"
        alt=""
        className={cn(
          "absolute w-full h-full object-cover inset-0 transition-transform duration-1000 ease-in-out pointer-events-none",
          {
            "scale-125": !videoSrc && hovered === true,
          },
          additionalClass
        )}
      />
      {videoSrc && (
        <video
          className={`absolute block inset-0 w-full h-full object-cover object-center  ${
            hovered === true ? "opacity-100" : "opacity-0"
          }  transition-opacity ease-in-out duration-300 pointer-events-none`}
          ref={videoRef}
          loop
          muted
          disablePictureInPicture
          disableRemotePlayback
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

const Section1 = () => {
  const cards = [
    {
      videoSrc: "/Coffe1.mp4",
      imageSrc: "/capuccino-edit.jpg",
      title: "CAFETERIA",
    },
    { imageSrc: "/milshake-varios.jpg", title: "BEBIDAS FRIAS" },
    {
      videoSrc: "/tortas01.mp4",
      imageSrc: "/tortas01.jpg",
      title: "TORTAS Y DELICIAS",
    },
    {
      videoSrc: "/tostados.mp4",
      imageSrc: "/tostadosjyq.jpeg",
      title: "SALADOS",
    },
    {
      videoSrc: "/tostones.mp4",
      imageSrc: "/tostones-jugos.webp",
      title: "TOSTONES",
    },
    {
      videoSrc: "/sandwich.mp4",
      imageSrc: "/sandwichpollo.jpeg",
      title: "SANDWICHES",
    },
    { imageSrc: "/ensalada.jpg", title: "ENSALADAS" },
    { videoSrc: "/pote.mp4", imageSrc: "/pote.jpeg", title: "HELADOS" },
    {
      videoSrc: "/cubatones.mp4",
      imageSrc: "/cubatones.jpeg",
      title: "POSTRES HELADOS",
    },
  ];

  return (
    <section className="w-full px-20 py-40 overflow-hidden relative">
      <h2 className="text-5xl text-center">Descubre nuestro menu!</h2>
      <Swiper
        grabCursor={true}
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={30}
        slidesOffsetBefore={0}
        pagination={{
          clickable: true,
          el: ".custom-pagination", // Clase personalizada para la paginación
        }}
        navigation={{
          nextEl: ".custom-next", // Clase personalizada para el botón de siguiente
          prevEl: ".custom-prev", // Clase personalizada para el botón de anterior
        }}
        parallax={true}
        modules={[Pagination, Navigation, Parallax]}
        className="w-full relative bg-transparent mt-20"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.title} style={{ width: "auto" }}>
            <Card
              videoSrc={card.videoSrc}
              imageSrc={card.imageSrc}
              title={card.title}
            />
            <Link href="" className="block mx-auto mt-6 px-4 py-2 transition duration-300 ease-in-out border-[5px] border-blanco-oscuro w-fit text-blanco hover:scale-95 hover:bg-marron ">
              {card.title}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination mt-4"></div>
      <div className="custom-prev absolute left-5 top-[50%] bg-transparent text-marron text-6xl p-2 rounded-full cursor-pointer hover:opacity-80 hover:scale-90 transition duration-300 ease-in-out">
        &#10094;
      </div>
      <div className="custom-next absolute right-5 top-[50%] bg-transparent text-marron text-6xl p-2 rounded-full cursor-pointer hover:opacity-80 hover:scale-90 transition duration-300 ease-in-out">
        &#10095;
      </div>
    </section>
  );
};

export default Section1;
