import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import MenuDB from "@/models/MenuModel";
// export async function GET() {
//   await connectDB();
//   try {
//     const menuItems = await MenuItemModel.find();
//     return NextResponse.json(menuItems);
//   } catch (error: any) {
//     return NextResponse.json({ message: error.message }, { status: 500 });
//   }
// }

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const url = new URL(request.url);
    const category = url.searchParams.get("category");

    const query = category ? { category } : {};

    const menuItems = await MenuDB.find(query);

    return NextResponse.json(menuItems);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const data = await request.json();

    if (Array.isArray(data)) {
      const savedMenuItems = await MenuDB.insertMany(data);
      
      return NextResponse.json(savedMenuItems);
    } else {
      const newMenuItem = new MenuDB(data);
      const savedMenuItem = await newMenuItem.save();

      return NextResponse.json(savedMenuItem);
    }
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

    const savedItems = await MenuDB.insertMany(data);
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
