"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Parallax } from "swiper/modules";
import { ArrowRight } from "@/assets/icons/ArrowRight";
import { ArrowLeft } from "@/assets/icons/ArrowLeft";
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
      value: "Cafeteria",
    },
    { imageSrc: "/milkshake-varios.jpg", title: "FRIOS", value: "frios" },
    {
      videoSrc: "/tortas01.mp4",
      imageSrc: "/tortas01.jpg",
      title: "TORTAS Y DELICIAS",
      value: "Tortas_Delicias",
    },
    {
      videoSrc: "/tostados.mp4",
      imageSrc: "/tostadosjyq.jpeg",
      title: "SALADOS CLASICOS",
      value: "Salados_Clasicos",
    },
    {
      videoSrc: "/tostones.mp4",
      imageSrc: "/tostones-jugos.webp",
      title: "TOSTONES",
      value: "Tostones",
    },
    {
      videoSrc: "/sandwich.mp4",
      imageSrc: "/sandwichpollo.jpeg",
      title: "SANDWICHES",
      value: "Sandwiches",
    },
    { imageSrc: "/ensalada.jpg", title: "ENSALADAS", value: "Ensaladas" },
    {
      videoSrc: "/pote.mp4",
      imageSrc: "/pote.jpeg",
      title: "HELADERIA",
      value: "Heladeria",
    },
    {
      videoSrc: "/cubatones.mp4",
      imageSrc: "/cubatones.jpeg",
      title: "POSTRES HELADOS",
      value: "Postres_Helados",
    },
  ];

  return (
    // <section className="min-h-screen w-full px-10 py-20 overflow-hidden bg-[url('/bg-marron.jpg')] bg-fixed bg-cover relative">
    // <section className="min-h-screen w-full px-10 py-20 overflow-hidden bg-marron bg-fixed bg-cover relative">
    <section
      id="menu"
      className="min-h-screen w-full px-10 py-20 overflow-hidden bg-[url('/bg.jpg')] bg-fixed bg-cover relative"
    >
      <div className="absolute inset-0 bg-marron opacity-80 z-0"></div>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeIn",
          },
        }}
        className="relative text-blanco font-bold text-5xl text-center z-20"
      >
        Nosotros Servimos!
      </motion.h2>
      {/* <h2 className="text-5xl text-center">Descubre Nuestro Menu!</h2> */}
      <Swiper
        grabCursor={true}
        slidesPerView={1}
        centeredSlides={false}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          // 1024: {
          //   slidesPerView: 5,
          //   spaceBetween: 50,
          // },
        }}
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
          <SwiperSlide key={card.title} style={{ width: "280px" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 1,
                  ease: "easeIn",
                },
              }}
            >
              <Card
                videoSrc={card.videoSrc}
                imageSrc={card.imageSrc}
                title={card.title}
              />
              <Link
                href={`/menu/?category=${card.value}`}
                className="flex w-fit mx-auto my-6 px-4 rounded py-2 transition duration-300 ease-in-out text-lg font-bold border-4 border-blanco-oscuro bg-marron text-blanco-oscuro hover:scale-95 hover:bg-blanco-oscuro hover:text-marron  
                active:scale-95 active:bg-blanco-oscuro active:text-marron brownButtonShadow
                "
              >
                {card.title}
              </Link>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination relative z-20 mt-4"></div>
      {/* LEFT ARROW */}
      <motion.div
        initial={{ x: 0 }}
        animate={{
          x: 0,
          transition: {
            delay: 1.5,
            duration: 0.5,
            ease: "easeIn",
          },
        }}
        className="z-10 custom-prev absolute left-[0%] top-[20%] cursor-pointer "
      >
        <ArrowLeft className="text-blanco-oscuro w-20 hover:opacity-80 hover:scale-90 active:opacity-80 active:scale-90 transition duration-300 ease-in-out" />
      </motion.div>
      {/* RIGHT ARROW */}
      <motion.div
        initial={{ x: 0 }}
        animate={{
          x: 0,
          transition: {
            delay: 1.5,
            duration: 0.5,
            ease: "easeIn",
          },
        }}
        className="z-10 custom-next absolute right-[-0%] top-[20%] cursor-pointer "
      >
        <ArrowRight className="text-blanco-oscuro w-20 hover:opacity-80 hover:scale-90 active:opacity-80 active:scale-90 transition duration-300 ease-in-out" />
      </motion.div>
    </section>
  );
};

export default MenuCards;
