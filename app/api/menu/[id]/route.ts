import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/utils/mongoose";
import MenuDB from "@/models/MenuModel";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const menuItemFound = await MenuDB.findById(params.id);

    if (!menuItemFound)
      return NextResponse.json(
        { message: "menu item not found" },
        { status: 404 }
      );

    return NextResponse.json(menuItemFound);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const deletedMenuItem = await MenuDB.findByIdAndDelete(params.id);

    if (!deletedMenuItem)
      return NextResponse.json(
        { message: "menu item not found" },
        { status: 404 }
      );

    return NextResponse.json(deletedMenuItem);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const data = await request.json();
    const updatedMenuItem = await MenuDB.findByIdAndUpdate(params.id, data, {
      new: true,
    });
    return NextResponse.json(updatedMenuItem);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
