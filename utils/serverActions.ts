"use server";

import MenuDB from "@/models/MenuModel";
import { MenuItem } from "@/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { connectDB } from "./mongoose";

export const getMenuItemById = async (id: string): Promise<MenuItem> => {
  try {
    await connectDB();
    const menuItem = await MenuDB.findById(id).exec();
    if (!menuItem) {
      throw new Error("Menu item not found");
    }
    return menuItem;
  } catch (error) {
    console.error("Error fetching menu item by ID:", error);
    throw error; 
  }
};

const FormSchema = z.object({
  _id: z.string(),
  id: z.coerce.number(),
  category: z.string(),
  title: z.string(),
  description: z.string(),
  imageSrc: z.string(),
  price: z.string(),
});

const CreateMenuItem = FormSchema.omit({ _id: true });

export const getLastId = async () => {
  try {
    await connectDB();
    const highestId = await MenuDB.findOne().sort({ id: -1 }).exec();
    const nextId = highestId ? highestId.id + 1 : 1;
    return nextId;
  } catch (error) {
    console.error("Error fetching the last ID:", error);
    throw error;
  }
};

export const addMenuItem = async (formData: FormData) => {
  try {
    await connectDB();
    const { id, category, title, description, imageSrc, price } =
      CreateMenuItem.parse({
        id: formData.get("id"),
        category: formData.get("category"),
        title: formData.get("title"),
        description: formData.get("description"),
        imageSrc: formData.get("imageSrc"),
        price: formData.get("price"),
      });

    await MenuDB.create({
      id: id,
      category: category,
      title: title,
      description: description,
      imageSrc: imageSrc,
      price: price,
    });

    revalidatePath("/dashboard/menu");
    redirect(`/dashboard/menu?category=${category}`);
  } catch (error) {
    console.error("Error adding menu item:", error);
    throw error;
  }
};

export const updateMenuItem = async (_id: string, formData: FormData) => {
  try {
    await connectDB();
    const { id, category, title, description, imageSrc, price } =
      FormSchema.parse({
        _id: _id, // Make sure _id is also parsed and validated
        id: formData.get("id"),
        category: formData.get("category"),
        title: formData.get("title"),
        description: formData.get("description"),
        imageSrc: formData.get("imageSrc"),
        price: formData.get("price"),
      });

    await MenuDB.findByIdAndUpdate(
      _id,
      {
        id: id,
        category: category,
        title: title,
        description: description,
        imageSrc: imageSrc,
        price: price,
      },
      { new: true }
    );

    revalidatePath("/dashboard/usuarios");
    redirect("/dashboard/usuarios");
  } catch (error) {
    console.error("Error updating menu item:", error);
    throw error;
  }
};

export const deleteMenuItem = async (_id: string) => {
  try {
    await connectDB();
    await MenuDB.findByIdAndDelete(_id);
    revalidatePath("/dashboard/usuarios");
  } catch (error) {
    console.error("Error deleting menu item:", error);
    throw error;
  }
};
