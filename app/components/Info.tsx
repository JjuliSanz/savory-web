import { ClockIcon } from "@/assets/icons/ClockIcon";
import { DeliveryIcon } from "@/assets/icons/DeliveryIcon";
import { FacebookIcon } from "@/assets/icons/FacebookIcon";
import { InstagramIcon } from "@/assets/icons/InstagramIcon";
import { PhoneIcon } from "@/assets/icons/PhoneIcon";
import { PinIcon } from "@/assets/icons/PinIcon";
import { WhatsIcon } from "@/assets/icons/WhatsIcon";
import React from "react";

const Info = () => {
  return (
    <section
      className="relative min-h-screen bg-fixed bg-center bg-cover flex flex-col md:flex-row  justify-between text-center px-10 py-20"
      style={{ backgroundImage: "url(/food/torta-oreo.jpg)" }}
    >
      <div className="absolute inset-0 bg-marron opacity-70 z-0"></div>
      <div className="md:w-1/2 w-full flex flex-col md:text-left text-center z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-blanco mb-10">
          Ven a Conocernos
        </h2>
        <ul className="text-lg md:text-2xl font-medium text-blanco-oscuro space-y-4">
          <li className="flex items-center gap-2 w-fit">
            <PinIcon /> Lugones 395, Remedios de Escalada
          </li>
          <li className="flex items-center gap-2 w-fit">
            <PhoneIcon /> 4516-0691
          </li>
          <li className="w-fit">
            <a
              href="https://api.whatsapp.com/send?phone=541137852214"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 motion-safe:transition ease-in-out duration-100 hover:scale-[0.97] hover:opacity-70"
            >
              <WhatsIcon />
              11 3785-2214
            </a>
          </li>
          <li className="w-fit">
            <a
              href="https://www.instagram.com/savoryheladoscafe/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 motion-safe:transition ease-in-out duration-100 hover:scale-[0.97] hover:opacity-70"
            >
              <InstagramIcon />
              SavoryHeladosCafe
            </a>{" "}
          </li>
          <li className="w-fit">
            <a
              href="https://www.facebook.com/SavoryHeladosYCafe/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition ease-in-out duration-100 hover:scale-[0.97] hover:opacity-70"
            >
              <FacebookIcon />
              Savory Helados Y Café
            </a>{" "}
          </li>

          <li className="w-fit">
            <a
              href="https://www.pedidosya.com.ar/restaurantes/lanus/savory-helados-y-cafe-323e50f5-b78e-4a0a-b741-ffd23745539b-menu?"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 motion-safe:transition ease-in-out duration-100 hover:scale-[0.97] hover:opacity-70"
            >
              <DeliveryIcon />
              Pedidos ya
            </a>
          </li>
          <li className="flex items-center gap-2 w-fit">
            <ClockIcon /> Estamos abiertos:
          </li>
          <ul className="ml-6 list-disc list-inside text-xl w-fit">
            <li>Lunes a Viernes: 10am - 12am</li>
            <li>Sábados: 11am - 1:30am</li>
            <li>Domingos: 11am - 12am</li>
          </ul>
        </ul>
      </div>
      <div className="md:w-1/2 w-full flex justify-center items-center md:mt-0 mt-6 z-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d354.7877555140993!2d-58.40091272671757!3d-34.72435262311919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccd6b3d13e9b5%3A0x277dec533f08507e!2sSavory!5e0!3m2!1sen!2sar!4v1721487437433!5m2!1sen!2sar"
          width="100%"
          height="450"
          // style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg opacity-80 border-8 border-blanco-oscuro"
        ></iframe>
      </div>
    </section>
  );
};

export default Info;
