import connect from "@/db/dbconnect";
import { getData } from "@/helpers/jwtToIdExtraction";
import Orders from "@/models/orderModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = await getData(request);
    const quickorders = await Orders.find({
      user: userId,
      quickdelivery: true,
    });

    return NextResponse.json({ quickorders, success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message, success: false });
  }
}
