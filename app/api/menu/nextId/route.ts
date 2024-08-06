import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import MenuDB from "@/models/MenuModel";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    // Encuentra el mayor ID actual
    const highestId = await MenuDB.findOne()
      .sort({ id: -1 })
      .exec();

    // El siguiente ID será el mayor + 1 o 1 si no hay ítems
    const nextId = highestId ? highestId.id + 1 : 1;

    return NextResponse.json({ nextId });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
