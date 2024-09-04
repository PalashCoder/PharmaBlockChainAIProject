import connect from "@/db/dbconnect";
import { getData } from "@/helpers/jwtToIdExtraction";
import Orders from "@/models/orderModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = await getData(request);
    const orders = await Orders.find({ user: userId });
    
    return NextResponse.json({ orders, success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message, success: false });
  }
}
