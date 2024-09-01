"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { cn } from "../../utils/cn";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Parallax } from "swiper/modules";
import { ArrowRight } from "@/assets/icons/ArrowRight";
import { ArrowLeft } from "@/assets/icons/ArrowLeft";
import Footer from "../Footer";
import { container, leftItem, rightItem, upItem } from "@/variants";

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
        width={500}
        height={500}
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
      title: "Cafetería",
      value: "Cafeteria",
    },
    { imageSrc: "/milkshake-varios.jpg", title: "Fríos", value: "frios" },
    {
      videoSrc: "/tortas01.mp4",
      imageSrc: "/tortas01.jpg",
      title: "Tortas y Delicias",
      value: "Tortas_Delicias",
    },
    {
      videoSrc: "/tostados.mp4",
      imageSrc: "/tostadosjyq.jpeg",
      title: "Salados",
      value: "Salados_Clasicos",
    },
    {
      videoSrc: "/tostones.mp4",
      imageSrc: "/tostones-jugos.webp",
      title: "Tostones",
      value: "Tostones",
    },
    {
      videoSrc: "/sandwich.mp4",
      imageSrc: "/sandwichpollo.jpeg",
      title: "Sandwiches",
      value: "Sandwiches",
    },
    { imageSrc: "/ensalada.jpg", title: "Ensaladas", value: "Ensaladas" },
    {
      videoSrc: "/pote.mp4",
      imageSrc: "/pote.jpeg",
      title: "Heladería",
      value: "Heladeria",
    },
    {
      videoSrc: "/cubatones.mp4",
      imageSrc: "/cubatones.jpeg",
      title: "Postres Helados",
      value: "Postres_Helados",
    },
  ];
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.section
      id="menu"
      ref={ref}
      initial="hidden"
      animate={isInView && "visible"}
      variants={container}
      className="min-h-screen w-full px-10 pt-20 pb-4 overflow-hidden bg-[url('/bg.jpg')] bg-fixed bg-cover relative"
    >
      <div className="absolute inset-0 bg-marron opacity-80 z-0"></div>
      <motion.h2
        variants={upItem}
        className="relative text-blanco text-4xl md:text-5xl font-bold text-center z-20"
      >
        Nosotros Servimos!
      </motion.h2>
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
        }}
        slidesOffsetBefore={0}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        parallax={true}
        modules={[Pagination, Navigation, Parallax]}
        className="w-full relative bg-transparent mt-20 z-10"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.title} style={{ width: "280px" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView && {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1,
                    ease: "easeInOut",
                  },
                }
              }
            >
              <Card
                videoSrc={card.videoSrc}
                imageSrc={card.imageSrc}
                title={card.title}
              />
              <Link
                href={`/menu/?category=${card.value}`}
                className="flex w-fit mx-auto my-6 px-4 rounded py-2 transition duration-300 ease-in-out text-3xl font-medium border-4 border-blanco-oscuro bg-marron text-blanco-oscuro hover:scale-95 hover:bg-blanco-oscuro hover:text-marron  
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
        variants={leftItem}
        className="z-10 custom-prev absolute left-[0%] top-[15%] cursor-pointer "
      >
        <ArrowLeft className="text-blanco-oscuro w-20 hover:opacity-80 hover:scale-90 active:opacity-80 active:scale-90 transition duration-300 ease-in-out" />
      </motion.div>
      {/* RIGHT ARROW */}
      <motion.div
        variants={rightItem}
        className="z-10 custom-next absolute right-[-0%] top-[15%] cursor-pointer "
      >
        <ArrowRight className="text-blanco-oscuro w-20 hover:opacity-80 hover:scale-90 active:opacity-80 active:scale-90 transition duration-300 ease-in-out" />
      </motion.div>
      <Footer />
    </motion.section>
  );
};

export default MenuCards;
