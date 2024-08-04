import { Schema, model, models } from "mongoose";

const menuModel: Schema = new Schema(
  {
    id: {
      type: Number,
      required: [true, "El id es requerido"],
      unique: [true, "El id debe ser unico"],
    },
    category: {
      type: String,
      required: [true, "La categoria es requerida"],
      trim: true,
    },
    title: {
      type: String,
      required: [true, "El titulo es requerido"],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: false,
      trim: true,
    },
    imageSrc: {
      type: String,
      required: false,
      trim: true,
    },
    price: {
      type: String,
      required: [true, "El precio es requerido"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
export default models.MenuDB || model('MenuDB', menuModel)