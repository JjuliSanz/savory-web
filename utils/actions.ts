// actions.ts
import { MenuItem } from "@/types";
import { revalidatePath } from "next/cache"; // Importa revalidatePath si lo vas a usar
import { NextRequest } from "next/server"; // Si estás usando NextRequest
// Asegúrate de tener la ruta correcta

export const fetchMenuItems = async (category: string): Promise<MenuItem[]> => {
  try {
    const response = await fetch(`/api/menu?category=${category}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Error al cargar el menu");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching menu items:", error);
    throw error; // Throw the error so it can be handled where the function is called
  }
};

export const createMenuItem = async (data: any, selectedCategory: string) => {
  try {
    const res = await fetch("/api/menu", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Error al añadir el producto al menú");
    }

    const menuItem = await res.json();

    return menuItem;
  } catch (error: any) {
    console.log(error);
    throw new Error("Error creating menu item");
  }
};

export const editMenuItem = async (item: MenuItem) => {
  try {
    const response = await fetch(`/api/menu/${item._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    const updatedItem = await response.json();
    console.log(updatedItem, "updatedItem");

    if (!response.ok) {
      throw new Error("Error al editar el menu");
    }


    
  } catch (error) {
    console.error("Error updating item:", error);
  }
};