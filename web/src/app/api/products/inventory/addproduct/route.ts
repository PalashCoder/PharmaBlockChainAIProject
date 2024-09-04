import connect from "@/db/dbconnect";
import { getData } from "@/helpers/jwtToIdExtraction";
import Inventory from "@/models/inventoryModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { itemname, quantity, visiblestock } = reqBody;

    const userId = await getData(request);

    const newProduct = new Inventory({
      itemname,
      quantity,
      user: userId,
      visiblestock,
    });

    await newProduct.save();

    return NextResponse.json({
      message: "Product Added successfully",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message, success: false });
  }
}
