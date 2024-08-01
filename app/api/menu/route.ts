import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import MenuItemSchema from "@/models/MenuItem";
export async function GET() {
  connectDB();
  const menuItems = await MenuItemSchema.find();
  return NextResponse.json(menuItems);
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const newMenuItem = new MenuItemSchema(data);
    const savedMenuItem = await newMenuItem.save();

    return NextResponse.json(savedMenuItem);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400
    })
  }
}
