import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/utils/mongoose";
import MenuItemModel from "@/models/MenuItemModel";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    connectDB();
    const menuItemFound = await MenuItemModel.findById(params.id);

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
    const deletedMenuItem = await MenuItemModel.findByIdAndDelete(params.id);

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
    const data = await request.json();
    const updatedMenuItem = await MenuItemModel.findByIdAndUpdate(params.id, data, {
      new: true,
    });
    return NextResponse.json(updatedMenuItem);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
