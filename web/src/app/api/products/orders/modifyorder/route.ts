import connect from "@/db/dbconnect";
import { getData } from "@/helpers/jwtToIdExtraction";
import Orders from "@/models/orderModel";
import { NextRequest, NextResponse } from "next/server";

connect();

//Have to work later

export async function PATCH(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { itemname, quantity, quickdelivery } = reqBody;

    // const userId = await getData(request);

    const newOrder = Orders.updateOne({
      itemname,
      quantity,
      quickdelivery,
    });

    // await newOrder.save();

    return NextResponse.json({
      message: "Order Edited successfully",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message, success: false });
  }
}
