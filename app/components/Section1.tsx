"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { cn } from "../utils/cn";

// const Card = ({
//   videoSrc,
//   imageSrc,
//   title,
//   additionalClass,
// }: {
//   videoSrc: string;
//   imageSrc: string;
//   title: string;
//   additionalClass?: string;
// }) => {
//   const [hovered, setHovered] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     if (hovered) {
//       videoRef.current?.play();
//     } else if (videoRef.current) {
//       videoRef.current?.pause();
//       videoRef.current.currentTime = 0;
//     }
//   }, [hovered]);
//   return (
//     <Link
//       href=""
//       className="col-span-1 row-span-1 w-full h-[350px] relative bg-marron border-[10px] border-blanco-oscuro flex justify-center items-end overflow-hidden"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <h2 className="z-10 mb-10 px-4 py-2 border-[5px] border-blanco-oscuro w-fit text-blanco">
//         {title}
//       </h2>
//       <Image
//         src={imageSrc}
//         layout="fill"
//         alt=""
//         className={cn(
//           "absolute w-full h-full object-cover inset-0 ",
//           additionalClass
//         )}
//       />
//       <video
//         className="absolute block inset-0 w-full h-full  object-cover object-center opacity-[.1] hover:opacity-100 transition ease-in-out duration-300"
//         ref={videoRef}
//         loop
//         // autoPlay
//         muted
//         disablePictureInPicture
//         disableRemotePlayback
//       >
//         <source src={videoSrc} type="video/mp4" />
//       </video>
//     </Link>
//   );
// };

// const Section1 = () => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   return (
//     <section className="w-full grid grid-cols-4 grid-rows-2 gap-4 px-10 py-20">
//       <Card
//         videoSrc="/Coffe1.mp4"
//         imageSrc="/capuccino-edit.jpg"
//         title="CAFETERIA"
//         additionalClass="hover:hidden"
//       />
//       <Card
//         videoSrc="/Coffe1.mp4"
//         imageSrc="/milshake-varios.jpg"
//         title="BEBIDAS FRIAS"
//         additionalClass="hover:hidden transition-transform duration-500 ease-in-out transform hover:scale-110"
//       />
//       <Card
//         videoSrc="/tortas01.mp4"
//         imageSrc="/tortas01.jpg"
//         title="TORTAS Y DELICIAS"
//         additionalClass="hover:hidden"
//       />
//       <Card
//         videoSrc="/tostados.mp4"
//         imageSrc="/tostadosjyq.jpeg"
//         title="SALADOS"
//         additionalClass="hover:hidden"
//       />
//       <Card
//         videoSrc="/tostones.mp4"
//         imageSrc="/tostones-jugos.webp"
//         title="TOSTONES"
//         additionalClass="hover:hidden"
//       />
//       <Card
//         videoSrc="/sandwich.mp4"
//         imageSrc="/sandwichpollo.jpeg"
//         title="SANDWICHES"
//         additionalClass="hover:hidden"
//       />
//       <Card
//         videoSrc="/sandwich.mp4"
//         imageSrc="/ensalada.jpg"
//         title="ENSALADAS"
//         additionalClass="hover:hidden"
//       />
//       <Card
//         videoSrc="/pote.mp4"
//         imageSrc="/pote.jpeg"
//         title="HELADOS"
//         additionalClass="hover:hidden"
//       />
//       <Card
//         videoSrc="/cubatones.mp4"
//         imageSrc="/cubatones.jpeg"
//         title="POSTRES HELADOS"
//         additionalClass="hover:hidden"
//       />
//     </section>
//   );
// };

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
    <Link
      href=""
      className="col-span-1 row-span-1 w-full h-[350px] relative bg-marron border-[10px] border-blanco-oscuro flex justify-center items-end overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h2 className="z-10 mb-10 px-4 py-2 border-[5px] border-blanco-oscuro w-fit text-blanco">
        {title}
      </h2>
      <Image
        src={imageSrc}
        layout="fill"
        alt=""
        className={cn(
          "absolute w-full h-full object-cover inset-0 transition-transform duration-1000 ease-in-out",
          {
            'hover:scale-125': !videoSrc,
            'hover:hidden': videoSrc,
          },
          additionalClass
        )}
      />
      {videoSrc && (
        <video
          className="absolute block inset-0 w-full h-full object-cover object-center opacity-[.1] hover:opacity-100 transition-opacity ease-in-out duration-300"
          ref={videoRef}
          loop
          muted
          disablePictureInPicture
          disableRemotePlayback
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
    </Link>
  );
};

const Section1 = () => {
  return (
    <section className="w-full grid grid-cols-4 grid-rows-2 gap-4 px-10 py-20">
      <Card
        videoSrc="/Coffe1.mp4"
        imageSrc="/capuccino-edit.jpg"
        title="CAFETERIA"
      />
      <Card
        imageSrc="/milshake-varios.jpg"
        title="BEBIDAS FRIAS"
      />
      <Card
        videoSrc="/tortas01.mp4"
        imageSrc="/tortas01.jpg"
        title="TORTAS Y DELICIAS"
      />
      <Card
        videoSrc="/tostados.mp4"
        imageSrc="/tostadosjyq.jpeg"
        title="SALADOS"
      />
      <Card
        videoSrc="/tostones.mp4"
        imageSrc="/tostones-jugos.webp"
        title="TOSTONES"
      />
      <Card
        videoSrc="/sandwich.mp4"
        imageSrc="/sandwichpollo.jpeg"
        title="SANDWICHES"
      />
      <Card
        imageSrc="/ensalada.jpg"
        title="ENSALADAS"
      />
      <Card
        videoSrc="/pote.mp4"
        imageSrc="/pote.jpeg"
        title="HELADOS"
      />
      <Card
        videoSrc="/cubatones.mp4"
        imageSrc="/cubatones.jpeg"
        title="POSTRES HELADOS"
      />
    </section>
  );
};

export default Section1;
