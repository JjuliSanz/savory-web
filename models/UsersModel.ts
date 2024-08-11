import { Schema, model, models } from "mongoose";

const usersSchema: Schema = new Schema({
  email: {
    type: String,
    lowercase: true,
    trim: true,
    required: [true, "El email es requerido"],
  },
  name: {
    type: String,
    trim: true,
    required: [true, "El nombre es requerido"],
  },
  password: {
    type: String,
    required: [true, "La contraseña es requerida"],
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
});

const Users = models.Users || model('Users', usersSchema);
export default Users;
