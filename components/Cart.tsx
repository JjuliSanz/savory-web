"use client";
import { CloseIcon } from "@/assets/icons";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  calculateIndividualPrice,
  calculateTotalItems,
  calculateTotalPrice,
  CartState,
  useCartStore,
} from "@/store/cartStore";
import { CartIcon } from "@/assets/icons/CartIcon";
import { TrashIcon } from "@/assets/icons/TrashIcon";
import { PlusIcon } from "@/assets/icons/PlusIcon";
import { MinusIcon } from "@/assets/icons/MinusIcon";
import { cn } from "@/utils/cn";
import WhiteButton from "./ui/WhiteButton";
import { useShallow } from "zustand/react/shallow";

const Cart = ({ classNameProp }: { classNameProp: string }) => {
  const { cart, isCartOpen } = useCartStore(
    useShallow((state: CartState) => ({
      cart: state.cart,
      isCartOpen: state.isCartOpen,
    }))
  );
  const { addToCart, removeFromCart, decreaseQuantity, openCart, closeCart } =
    useCartStore();

  const totalPrice = calculateTotalPrice(cart);
  const totalItems = calculateTotalItems(cart);

  return (
    <AnimatePresence mode="sync">
      <div className={cn(`relative`, classNameProp)}>
        <CartIcon
          width={24}
          height={24}
          className="text-blanco-oscuro cursor-pointer hover:scale-95 hover:opacity-70 active:scale-95 active:opacity-70 transition ease-in duration-150"
          onClick={isCartOpen ? closeCart : openCart}
        />
        {totalItems > 0 && (
          <div className="absolute -top-2 -right-2 bg-red-600 text-blanco text-xs font-sans font-medium rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems}
          </div>
        )}
      </div>
      {isCartOpen && (
        <motion.div
          key="cart-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          onClick={closeCart}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-0"
        >
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 0, opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="bg-blanco-oscuro/90 w-full sm:w-1/3 max-h-screen p-6 overflow-auto overscroll-contain flex flex-col gap-6 z-10 "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex justify-between ">
              <h2 className="text-marron text-4xl font-bold">Carrito</h2>

              <CloseIcon
                width={30}
                className="text-red-500 cursor-pointer font-bold hover:scale-95 transition ease-in duration-150 hover:opacity-70 active:scale-95 active:opacity-70"
                onClick={closeCart}
              />
            </div>
            {cart.length === 0 ? (
              <p className="text-2xl font-semibold text-marron">
                No hay items en el carrito
              </p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="w-full pb-2 flex gap-2 border-b border-marron-clarito"
                >
                  <Image
                    src={item.imageSrc}
                    alt=""
                    width={200}
                    height={200}
                    className="object-cover rounded w-20 h-20"
                  />
                  <div className="text-marron flex flex-col flex-grow justify-between">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <div className="flex gap-2 items-center">
                      <MinusIcon
                        width={32}
                        height={32}
                        className="text-marron hover:scale-95 transition ease-in duration-150 hover:opacity-70 active:scale-95 active:opacity-70"
                        onClick={() => decreaseQuantity(item.id)}
                      />
                      <p className="text-2xl font-sans font-semibold">
                        {item.quantity}
                      </p>

                      <PlusIcon
                        width={32}
                        height={32}
                        className="text-marron hover:scale-95 transition ease-in duration-150 hover:opacity-70 active:scale-95 active:opacity-70"
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
                      className="cursor-pointer text-red-500 hover:scale-95 transition ease-in duration-150 hover:opacity-70 active:scale-95 active:opacity-70"
                      onClick={() => removeFromCart(item.id)}
                    />
                  </div>
                </div>
              ))
            )}
            <div className="w-full text-marron flex justify-between">
              <p className="text-2xl font-semibold">Precio Total:</p>
              <span className="text-2xl font-semibold">${totalPrice}</span>
            </div>
            {cart.length > 0 && (
              <WhiteButton
                href="/checkout"
                text="Hacer pedido"
                classNameProps="px-3 py-1"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cart;
