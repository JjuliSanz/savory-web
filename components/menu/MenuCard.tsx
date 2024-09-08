"use client";
import { motion } from "framer-motion";
import { MenuItem } from "@/types";
import Image from "next/image";
import { useCartStore } from "@/store/cartStore";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.5,
    },
  },
};

const MenuCard = ({ item }: { item: MenuItem }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    const cartItem = {
      id: item._id, // or item.id if you prefer to use the numeric id
      title: item.title,
      price: parseFloat(item.price), // Assuming the price is stored as a string
      imageSrc: item.imageSrc,
      quantity: 1,
      totalPrice: parseFloat(item.price),
    };
    addToCart(cartItem);
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      key={item._id}
      variants={itemVariants}
      className="bg-marron rounded-lg flex flex-col"
    >
      <div className="relative w-full min-h-60 max-h-60">
        <Image
          src={item.imageSrc}
          alt={item.title}
          width={500}
          height={500}
          sizes="(max-width: 450px) 300px, 500px"
          loading="lazy"
          className="object-cover w-full h-full rounded-t-lg"
        />
      </div>
      <div className="w-full flex flex-col grow justify-between gap-4 p-4 min-h-[150px]">
        <div className="flex flex-col gap-2">
          <h3 className="text-blanco text-3xl md:text-2xl lg:text-3xl font-semibold">
            {item.title}
          </h3>
          {item.description && (
            <p className="text-blanco-oscuro font-medium text-2xl md:text-xl lg:text-2xl">
              {item.description}
            </p>
          )}
        </div>
        <div className="w-full flex justify-between items-center">
          <button
            onClick={handleAddToCart}
            className="px-4 py-1 w-fit flex motion-safe:transition duration-300 ease-in-out text-xl font-medium text-blanco-oscuro rounded bg-marron hover:bg-blanco-oscuro border border-blanco-oscuro hover:text-marron outline-none focus:outline-none hover:scale-95 active:scale-95"
          >
            Agregar al carrito
          </button>
          <p className="text-end text-blanco-oscuro font-semibold text-2xl md:text-xl lg:text-2xl">
            {item.price} $
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;
