"use server";

import MenuDB from "@/models/MenuModel";
import { MenuItem } from "@/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export const getMenuItemById = async (id: string): Promise<MenuItem> => {
  const menuItem = await MenuDB.findById(id).exec();
  if (!menuItem) {
    throw new Error("Menu item not found");
  }
  return menuItem;
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
  const highestId = await MenuDB.findOne().sort({ id: -1 }).exec();
  const data = highestId ? highestId.id + 1 : 1;
  console.log(data)
  const nextId = data.json();
  return nextId;
};

export const addTest = async (formData: FormData) => {
  const rawFormData = {
    id: formData.get("id"),
    category: formData.get("category"),
    title: formData.get("title"),
    description: formData.get("description"),
    imageSrc: formData.get("imageSrc"),
    price: formData.get("price"),
  };
  const { id, category, title, description, imageSrc, price } =
    CreateMenuItem.parse({
      id: formData.get("id"),
      category: formData.get("category"),
      title: formData.get("title"),
      description: formData.get("description"),
      imageSrc: formData.get("imageSrc"),
      price: formData.get("price"),
    });

  const newMenuItem = await MenuDB.create({
    id: id,
    category: category,
    title: title,
    description: description,
    imageSrc: imageSrc,
    price: price,
  });
  revalidatePath("/dashboard/secciones");
  redirect(`/dashboard/secciones?category=${category}`);
  return newMenuItem;
};

export const addMenuItem = async (formData: FormData) => {
  const itemTitle = formData.get("title");
  const itemDescription = formData.get("description");
  const itemPrice = formData.get("price");
  const itemImageSrc = formData.get("imageSrc");
  const itemCategory = formData.get("category");

  try {
    const newMenuItem = await MenuDB.create({
      title: itemTitle,
      description: itemDescription,
      price: itemPrice,
      imageSrc: itemImageSrc,
      category: itemCategory,
    });

    revalidatePath("/dashboard");
    return newMenuItem;
  } catch (error) {
    console.error("Error al crear el ítem del menú:", error);
    throw new Error("Error creating menu item");
  }
};

export const updateMenuItem = async (_id: string, formData: FormData) => {
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

  const updatedMenuItem = await MenuDB.findByIdAndUpdate(
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

  return updatedMenuItem;
};

export const deleteMenuItem = async (_id: string) => {
  await MenuDB.findByIdAndDelete(_id);
  revalidatePath("/dashboard/usuarios");
};
