import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import MenuItemModel from "@/models/MenuItemModel";
export async function GET() {
  connectDB();
  try {
    const menuItems = await MenuItemModel.find();
    return NextResponse.json(menuItems);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  await connectDB();
  try {
    const data = await request.json();
    const newMenuItem = new MenuItemModel(data);
    const savedMenuItem = await newMenuItem.save();

    return NextResponse.json(savedMenuItem);
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      {
        status: 400,
      }
    );
  }
}

export async function POSTMultiple(request: NextRequest) {
  await connectDB();

  try {
    const data = await request.json();
    if (!Array.isArray(data)) {
      return NextResponse.json(
        { message: "Expected an array of objects" },
        {
          status: 400,
        }
      );
    }

    const savedItems = await MenuItemModel.insertMany(data);
    return NextResponse.json(savedItems);
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      {
        status: 400,
      }
    );
  }
}
