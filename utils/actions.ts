import MenuModel from "@/models/MenuModel";
import { MenuItem } from "@/types";
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export const fetchMenuItems = async (
  category: string,
  search?: string
): Promise<MenuItem[]> => {
  try {
    const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/api/menu`);
    url.searchParams.append("category", category);
    if (search) {
      url.searchParams.append("search", search);
    }
    const response = await fetch(url.toString(), {
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/menu`, {
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
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/menu/${item._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    const updatedItem = await response.json();
    console.log(updatedItem, "updatedItem");

    if (!response.ok) {
      throw new Error("Error al editar el menu");
    }
  } catch (error) {
    console.error("Error updating item:", error);
  }
};

export const deleteMenuItem = async (item: MenuItem) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/menu/${item._id}`,
      {
        method: "DELETE",
      }
    );

    if (!res.ok) {
      throw new Error(`Error al borrar el item seleccionado`);
    }
  } catch (error) {
    console.error("Error deleting item:", error);
    throw new Error("Hubo un error al borrar el item seleccionado");
  }
};

