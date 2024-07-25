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

const MenuCards = () => {
  const cards = [
    {
      videoSrc: "/Coffe1.mp4",
      imageSrc: "/capuccino-edit.jpg",
      title: "CAFETERIA",
      value: "cafeteria",
    },
    { imageSrc: "/milkshake-varios.jpg", title: "FRIOS", value: "frios" },
    {
      videoSrc: "/tortas01.mp4",
      imageSrc: "/tortas01.jpg",
      title: "TORTAS Y DELICIAS",
      value: "tortas_delicias",
    },
    {
      videoSrc: "/tostados.mp4",
      imageSrc: "/tostadosjyq.jpeg",
      title: "SALADOS CLASICOS",
      value: "salados_clasicos",
    },
    {
      videoSrc: "/tostones.mp4",
      imageSrc: "/tostones-jugos.webp",
      title: "TOSTONES",
      value: "tostones",
    },
    {
      videoSrc: "/sandwich.mp4",
      imageSrc: "/sandwichpollo.jpeg",
      title: "SANDWICHES",
      value: "sandwiches",
    },
    { imageSrc: "/ensalada.jpg", title: "ENSALADAS", value: "ensaladas" },
    {
      videoSrc: "/pote.mp4",
      imageSrc: "/pote.jpeg",
      title: "HELADERIA",
      value: "heladeria",
    },
    {
      videoSrc: "/cubatones.mp4",
      imageSrc: "/cubatones.jpeg",
      title: "POSTRES HELADOS",
      value: "postres_helados",
    },
  ];

  return (
    <section className="min-h-screen w-full px-10 py-20 overflow-hidden bg-[url('/bg-marron.jpg')] bg-fixed bg-cover relative">
      {/* <div className="absolute inset-0 bg-marron opacity-50 z-0"></div> */}
      <h2 className="text-blanco font-bold text-5xl text-center z-10">
        Nosotros Servimos!
      </h2>
      {/* <h2 className="text-5xl text-center">Descubre Nuestro Menu!</h2> */}
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
        className="w-full relative bg-transparent mt-20 z-10"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.title} style={{ width: "auto" }}>
            <Card
              videoSrc={card.videoSrc}
              imageSrc={card.imageSrc}
              title={card.title}
            />
            <Link
              href={`/menu/?value=${card.value}`}
              className="block mx-auto mt-6 px-4 rounded py-2 transition duration-150 ease-in-out border-4 border-blanco-oscuro w-fit text-blanco hover:scale-95 bg-marron "
            >
              {card.title}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination mt-4"></div>
      <div className="z-10 custom-prev absolute left-5 top-[50%] bg-transparent text-marron text-7xl p-2 rounded-full cursor-pointer hover:opacity-80 hover:scale-90 transition duration-300 ease-in-out">
        &#10094;
      </div>
      <div className="z-10 custom-next absolute right-5 top-[50%] bg-transparent text-marron text-7xl p-2 rounded-full cursor-pointer hover:opacity-80 hover:scale-90 transition duration-300 ease-in-out">
        &#10095;
      </div>
    </section>
  );
};

export default MenuCards;
