"use server";

import MenuDB from "@/models/MenuModel";
import { MenuItem, State, User } from "@/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { connectDB } from "./mongoose";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import bcrypt from "bcrypt";
import Users from "@/models/UsersModel";

export const getMenuItems = async (category: string) => {
  try {
    await connectDB();
    // Filtra los elementos del menú por la categoría proporcionada
    const menuItems = await MenuDB.find({ category: category }).sort({ id: 1 });
    const formattedMenuItems = menuItems.map((item) => ({
      ...item.toObject(), // Convierte el documento de Mongoose a un objeto simple
      createdAt: item.createdAt.toISOString(), // Convierte `createdAt` a string
      updatedAt: item.updatedAt.toISOString(), // Convierte `updatedAt` a string
    }));

    return formattedMenuItems;
  } catch (error) {
    console.error("Error fetching menu items:", error);
    throw new Error("Failed to fetch menu items");
  }
};

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
  category: z.string().min(1, { message: "Ingrese una categoría válida" }),
  title: z
    .string()
    .min(1, { message: "Ingrese un título válido" })
    .max(60, { message: "El titulo no puede exeder los 60 caracteres" }),
  description: z.string().optional(), // Descripción opcional
  imageSrc: z.string().min(1, { message: "La imagen es obligatoria" }), // Imagen obligatoria
  price: z
  .string()
  .min(1, { message: "El precio no puede estar vacío" })
  .regex(/^(\d+(\.\d{1,2})?|-)?$/, {
    message: "El precio debe ser un número válido o '-'",
  }),
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
      message: "Missing Fields. Failed to Create Menu Item.",
    };
  }

  const { id, category, title, description, imageSrc, price } =
    validatedFields.data;

  try {
    await connectDB();

    await MenuDB.create({
      id: id,
      category: category,
      title: title,
      description: description,
      imageSrc: imageSrc,
      price: price,
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Menu Item.",
    };
  }

  revalidatePath("/dashboard");
  redirect(`/dashboard?category=${category}`);

  return {
    ...prevState,
    message: "Menu Item Created Successfully.",
  };
};

export const updateMenuItem = async (
  _id: string,
  prevState: any,
  formData: FormData
) => {
  await connectDB();
  // Obtener y mostrar todos los datos de FormData
  // console.log(_id);
  // console.log("FormData entries:");
  // formData.forEach((value, key) => {
  //   console.log(`${key}: ${value}`);
  // });
  // Validar los campos del formulario
  const validatedFields = FormSchema.safeParse({
    _id,
    id: formData.get("id"),
    category: formData.get("category"),
    title: formData.get("title"),
    description: formData.get("description"),
    imageSrc: formData.get("imageSrc"),
    price: formData.get("price"),
  });

  if (!validatedFields.success) {
    console.log("Validation failed:", validatedFields.error);
    const errorDetails = validatedFields.error.flatten();
    console.log("Field errors:", errorDetails.fieldErrors);

    return {
      errors: errorDetails.fieldErrors,
      message: "Missing Fields. Failed to Update Menu Item.",
    };
  }

  const { id, category, title, description, imageSrc, price } =
    validatedFields.data;

  // Verificar si el id ya está en uso por otro documento
  const existingItem = await MenuDB.findOne({ id });
  if (existingItem && existingItem._id.toString() !== _id) {
    console.log("Id ya esta en uso");
    return {
      errors: { id: ["El ID ya está en uso por otro ítem."] },
      message: "ID Conflict",
    };
  }

  try {
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
    return {
      ...prevState,
      message: "Menu Item Updated Successfully.",
    };
  } catch (error) {
    return {
      message: "Database Error: Failed to Update Menu Item.",
    };
  }
  revalidatePath("/dashboard");
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

const RegisterSchema = z
  .object({
    email: z.string().email("Email inválido"),
    name: z.string().min(1, "Nombre es requerido"),
    password: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
    confirmPassword: z
      .string()
      .min(6, "La confirmación de contraseña debe tener al menos 6 caracteres"),
    role: z.enum(["admin", "user"]).optional(), // Agrega validación para el rol (opcional)
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export async function createUser(prevState: any, formData: FormData) {
  const validatedFields = RegisterSchema.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
    role: formData.get("role"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create User.",
    };
  }

  const { email, name, password, role } = validatedFields.data;

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    await connectDB();
    await Users.create({
      email,
      name,
      password: hashedPassword,
      role,
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Menu Item.",
    };
  }

  revalidatePath("/login");
  redirect(`/login`);

  return {
    ...prevState,
    message: "Menu Item Created Successfully.",
  };
}

export async function authenticate(prevState: any, formData: FormData) {
  try {
    await signIn("google", formData, { redirect: "/dashboard" });
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Menu Item.",
    };
  }

  return {
    ...prevState,
    message: "Menu Item Created Successfully.",
  };
}

export const getUsers = async (): Promise<User[]> => {
  try {
    await connectDB();
    const usersList = await Users.find();
    return usersList;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export async function getUser(email: string): Promise<User | undefined> {
  try {
    await connectDB();
    const user = await Users.findOne({ email });
    return user || undefined;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export const deleteUser = async (_id: string) => {
  try {
    await connectDB();
    await Users.findByIdAndDelete(_id);
    revalidatePath("/dashboard/usuarios");
    redirect("/dashboard/usuarios");
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};

const signInSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});
