"use client";
import { useState } from "react";
import Image from "next/image";
import { cafeteria, promociones, tortas_delicias } from "@/constants";
import { MenuType } from "@/types";

const menuTabs: MenuType[] = [
  {
    title: "Promociones",
    value: "promociones",
    data: promociones,
  },
  {
    title: "Cafetería",
    value: "cafeteria",
    data: cafeteria,
  },
  {
    title: "Tortas y Delicias",
    value: "tortas y delicias",
    data: tortas_delicias,
  },
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("promociones");

  return (
    <main className="mt-[50px] min-h-screen bg-blanco-oscuro">
      <nav className="flex justify-center p-4 bg-marron shadow-md">
        <ul className="flex gap-4">
          {menuTabs.map((category) => (
            <li
              key={category.value}
              className={`cursor-pointer ${
                selectedCategory === category.value
                  ? "text-blanco-oscuro"
                  : "text-marron-claro"
              }`}
              onClick={() => setSelectedCategory(category.value)}
            >
              {category.title.charAt(0).toUpperCase() + category.title.slice(1)}
            </li>
          ))}
        </ul>
      </nav>
      <section className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {menuTabs
            .find((category) => category.value === selectedCategory)
            ?.data.map((item, index) => (
              <div key={index} className="bg-marron rounded-lg flex flex-col">
                <div className="relative w-full h-60 ">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full rounded-t-lg"
                  />
                </div>
                <div className="w-full flex flex-col grow justify-between gap-4 p-4">
                  <div className="flex flex-col ">
                    <h3 className="text-blanco text-lg font-bold">
                      {item.title}
                    </h3>
                    {item.ingredients && (
                      <p className="text-blanco-oscuro font-bold text-sm">
                        {item.ingredients}
                      </p>
                    )}
                  </div>
                  <p className="text-blanco-oscuro font-bold text-base">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}
