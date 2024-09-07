import CheckoutForm from "@/components/sections/Checkout";

const Checkout = () => {

  return (
    <section className="relative w-full min-h-screen flex flex-col gap-4 items-center px-10 py-10 overflow-hidden z-20 bg-marron">
      <h1 className="text-5xl font-semibold text-blanco-oscuro">Checkout</h1>

      <CheckoutForm/>   
    </section>
  );
};

export default Checkout;
