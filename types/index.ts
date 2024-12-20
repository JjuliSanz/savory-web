import { Types } from "mongoose";

export type MenuItem = {
  _id: string;
  id: number;
  category?: string;
  imageSrc: string;
  title: string;
  description?: string;
  price: string;
  createdAt?: string;
  updatedAt?: string;
};

export type MenuType = {
  title: string;
  value: string;
  data: MenuItem[];
};

export type MenuTab = {
  title: string;
  value: string;
};

export type State = {
  errors?: {
    id?: number[];
    category?: string[];
    imageSrc?: string[];
    title?: string[];
    description?: string[];
    price?: string[];
  }
  message?: string | null;
}

export type User = {
  _id: string;
  email: string;
  name: string;
  password: string;
  role: string;
}