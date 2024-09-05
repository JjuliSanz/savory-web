"use client";
import { CloseIcon } from "@/assets/icons";
import { motion } from "framer-motion";
import Image from "next/image";
import { calculateIndividualPrice, calculateTotalPrice, useCartStore } from "@/store/cartStore";
import { CartIcon } from "@/assets/icons/CartIcon";
import { useState } from "react";
import { TrashIcon } from "@/assets/icons/TrashIcon";
import { PlusIcon } from "@/assets/icons/PlusIcon";
import { MinusIcon } from "@/assets/icons/MinusIcon";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const addToCart = useCartStore((state) => state.addToCart);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const totalPrice = calculateTotalPrice(cart);

  return (
    <>
      <CartIcon
        width={24}
        height={24}
        className="text-blanco-oscuro active:scale-95 active:opacity-70 motion-safe:transition ease-in duration-150"
        onClick={handleCartClick}
      />
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-0">
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="bg-blanco-oscuro w-1/3 max-h-screen pt-1 p-6 overflow-auto overscroll-contain flex flex-col z-10"
          >
            <div className="w-full flex justify-between mb-4">
              <h2 className="text-marron text-4xl font-bold">Carrito</h2>

              <CloseIcon
                width={30}
                className="text-red-500 font-bold hover:scale-95 motion-safe:transition ease-in duration-150 hover:opacity-70 active:scale-95 active:opacity-70"
                onClick={handleCartClick}
              />
            </div>
            {cart.length === 0 ? (
              <p className="text-2xl font-semibold text-marron">
                No hay items en el carrito
              </p>
            ) : (
              cart.map((item) => (
                <>
                  <div className="w-full pb-2 flex gap-2 border-b border-marron-clarito mb-2">
                    <Image
                      src={item.imageSrc}
                      alt=""
                      width={200}
                      height={200}
                      className="object-cover rounded w-20"
                    />
                    <div className="text-marron flex flex-col flex-grow justify-between">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <div className="flex gap-2 items-center">
                        <MinusIcon
                          width={32}
                          height={32}
                          className="text-marron hover:scale-95 motion-safe:transition ease-in duration-150 hover:opacity-70 active:scale-95 active:opacity-70"
                          onClick={() => decreaseQuantity(item.id)}
                        />
                        <p className="text-2xl font-sans font-semibold">
                          {item.quantity}
                        </p>

                        <PlusIcon
                          width={32}
                          height={32}
                          className="text-marron hover:scale-95 motion-safe:transition ease-in duration-150 hover:opacity-70 active:scale-95 active:opacity-70"
                          onClick={() => addToCart(item)}
                        />
                      </div>
                    </div>
                    <div className="text-marron flex flex-col justify-between col-span-1">
                      <span className="font-semibold text-2xl">
                        ${calculateIndividualPrice(item.price, item.quantity)}
                      </span>

                      <TrashIcon
                        width={24}
                        className="cursor-pointer text-red-500 hover:scale-95 motion-safe:transition ease-in duration-150 hover:opacity-70 active:scale-95 active:opacity-70"
                        onClick={() => removeFromCart(item.id)}
                      />
                    </div>
                  </div>
                </>
              ))
            )}
            <div className="w-full text-marron flex justify-between">
              <p className="text-2xl font-semibold">Precio Total:</p>
              <span className="text-2xl font-semibold">${totalPrice}</span>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Cart;
