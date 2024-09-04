import connect from "@/db/dbconnect";
import { getData } from "@/helpers/jwtToIdExtraction";
import Orders from "@/models/orderModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { itemname, quantity, quickdelivery, expecteddelivery } = reqBody;

    const userId = await getData(request);

    const newOrder = new Orders({
      itemname,
      quantity,
      quickdelivery,
      user: userId,
      expecteddelivery,
    });

    await newOrder.save();

    return NextResponse.json({
      message: "Order placed successfully",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message, success: false });
  }
}
