"use client";
import { calculateTotalPrice, useCartStore } from "@/store/cartStore";
import React, { useState } from "react";
import BrownButton from "../ui/BrownButton";
import Link from "next/link";

const CheckoutForm = () => {
  const { cart } = useCartStore(); // Access cart items
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("efectivo");

  const handleSubmit = () => {
    const cartItems = cart
      .map((item) => `${item.title} x${item.quantity}`)
      .join(", ");
    const totalPrice = calculateTotalPrice(cart);
    const message = `Detalles del pedido:\nNombre: ${name}\nDirección: ${address}\nCelular: ${phone}\nItems: ${cartItems}\nMétodo de pago: ${paymentMethod}\nTotal: $${totalPrice}`;

    // Open WhatsApp with the pre-filled message
    window.open(
      `https://wa.me/541137852214?text=${encodeURIComponent(message)}`
    );
  };
  return (
    <form className="w-[95%] max-w-[800px] p-4 h-full overflow-auto overscroll-contain bg-marron rounded relative text-marron-claro flex flex-col gap-6 font-sans">
      {cart.length > 0 ? (
        <>
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border-4 border-marron-clarito rounded text-2xl font-semibold text-blanco-oscuro placeholder:text-blanco-oscuro bg-marron focus:outline-none focus:border-blanco-oscuro"
            required
          />
          <input
            type="text"
            placeholder="Dirección de entrega"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="p-2 border-4 border-marron-clarito rounded text-2xl font-semibold text-blanco-oscuro placeholder:text-blanco-oscuro bg-marron focus:outline-none focus:border-blanco-oscuro"
            required
          />
          <input
            type="text"
            placeholder="Número de celular"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="p-2 border-4 border-marron-clarito rounded text-2xl font-semibold text-blanco-oscuro placeholder:text-blanco-oscuro bg-marron focus:outline-none focus:border-blanco-oscuro"
            required
          />
          <div className="flex gap-4 text-xl sm:text-2xl font-semibold text-blanco-oscuro">
            <label className="flex gap-2 items-center">
              <input
                type="radio"
                value="efectivo"
                checked={paymentMethod === "efectivo"}
                onChange={() => setPaymentMethod("efectivo")}
                className="appearance-none w-4 h-4 rounded-full border-2 border-blanco focus:outline-none  checked:bg-blanco checked:scale-90"
              />
              Efectivo
            </label>
            <label className="flex gap-2 items-center">
              <input
                type="radio"
                value="transferencia"
                checked={paymentMethod === "transferencia"}
                onChange={() => setPaymentMethod("transferencia")}
                className="appearance-none w-4 h-4 rounded-full border-2 border-blanco focus:outline-none  checked:bg-blanco checked:scale-90"
              />
              Transferencia
            </label>
          </div>

          <div className="flex flex-col gap-4 text-blanco-oscuro">
            <h2 className="text-2xl font-bold">Carrito</h2>
            {cart.map((item) => (
              <div
                key={item.id}
                className="text-xl font-medium flex justify-between items-center border-b border-marron-clarito"
              >
                <span>
                  {item.title} x{item.quantity}
                </span>
                <span className="font-semibold">
                  ${item.price * item.quantity}
                </span>
              </div>
            ))}
            <div className="flex justify-between text-2xl font-semibold">
              <span>Total:</span>
              <span>${calculateTotalPrice(cart)}</span>
            </div>
          </div>

          <div className="flex flex-col 500:flex-row gap-4 min-h-[72px] mt-6 items-center justify-center">
            <BrownButton
              href="/menu?category=Promociones"
              text="Agregar mas productos"
              classNameProps="px-3 py-1 text-xl rounded brownButtonShadow-none min-h-[72px] flex items-center justify-center"
            />
            <button
              type="button"
              onClick={handleSubmit}
              className="w-fit text-xl font-medium bg-green-600 text-blanco px-3 py-1 rounded hover:bg-green-700 transition mx-auto min-h-[72px] flex items-center justify-center"
            >
              Hacer orden via WhatsApp
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col p-4 items-center gap-6">
          <p className="text-2xl font-medium text-center text-blanco-oscuro">
            No hay productos en el carrito
          </p>
          <BrownButton
            href="/menu?category=Promociones"
            text="Menú"
            classNameProps="px-3 py-1 text-xl"
          />
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;
