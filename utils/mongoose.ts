import { connect, connection, ConnectOptions } from "mongoose";

let isConnected = false; // Estado de la conexión

export async function connectDB() {
  if (isConnected) {
    console.log("Ya está conectado a MongoDB");
    return;
  }

  if (!process.env.MONGODB_URL) {
    throw new Error("Por favor, defina la variable de entorno MONGODB_URL en su archivo .env.local");
  }

  try {
    const mongoDB = await connect(process.env.MONGODB_URL);
    isConnected = mongoDB.connections[0].readyState === 1;
    console.log("Conectado a la base de datos:", mongoDB.connection.db.databaseName);
  } catch (error) {
    console.error("Error conectando a MongoDB:", error);
  }
}

connection.on("connected", () => {
  console.log("Mongoose está conectado");
});

connection.on("error", (err) => {
  console.log("Error en la conexión de Mongoose:", err);
});
