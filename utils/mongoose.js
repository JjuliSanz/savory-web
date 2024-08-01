import { connect, connection } from "mongoose";

const connected = {
  isConnected: false
}
export async function connectDB() {
  if (connected.isConnected) return

  const mongoDB = await connect("mongodb://localhost/savory");
  console.log(mongoDB.connection.db.databaseName);
  connected.isConnected = mongoDB.connections[0].readyState
}

connection.on('connected', () => {
  console.log('Mongoose is conected')
})

connection.on('error', (err) => {
  console.log('Mongoose connection error', err)
})
