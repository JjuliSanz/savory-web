"use server";

import MenuDB from "@/models/MenuModel";
import { MenuItem, State } from "@/types";
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
  id: z.coerce.number({
    invalid_type_error: "El id ya existe",
  }),
  category: z.string({ invalid_type_error: "Ingrese una categoria valida" }),
  title: z.string({ invalid_type_error: "Ingrese un titulo valido" }),
  description: z.string(),
  imageSrc: z.string({ invalid_type_error: "La imagen es obligatoria" }),
  price: z.string({ invalid_type_error: "El precio no puede ser 0" }),
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

export const addMenuItem = async (prevState: any, formData: FormData) => {
  await connectDB();
  // Validate form fields using Zod
  const validatedFields = CreateMenuItem.safeParse({
    id: formData.get("id"),
    category: formData.get("category"),
    title: formData.get("title"),
    description: formData.get("description"),
    imageSrc: formData.get("imageSrc"),
    price: formData.get("price"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }

  const { id, category, title, description, imageSrc, price } =
    validatedFields.data;

  try {
    await MenuDB.create({
      id: id,
      category: category,
      title: title,
      description: description,
      imageSrc: imageSrc,
      price: price,
    });
    revalidatePath("/dashboard");
    redirect(`/dashboard?category=${category}`);
    
    return {
      ...prevState,
      message: "Menu Item Created Successfully.",
    };
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Menu Item.",
    };
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

    revalidatePath("/dashboard");
    redirect(`/dashboard?category=${category}`);
  } catch (error) {
    console.error("Error updating menu item:", error);
    throw error;
  }
};

export const deleteMenuItem = async (_id: string) => {
  try {
    await connectDB();
    await MenuDB.findByIdAndDelete(_id);
    revalidatePath("/dashboard");
  } catch (error) {
    console.error("Error deleting menu item:", error);
    throw error;
  }
};

const RegisterSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  name: z.string().min(1, {
    message: "Please enter your name",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
  confirmPassword: z.string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
});
