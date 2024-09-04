import connect from "@/db/dbconnect";
import { getData } from "@/helpers/jwtToIdExtraction";
import Inventory from "@/models/inventoryModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = await getData(request);
    const inventorydata = await Inventory.find({ user: userId });

    return NextResponse.json({ inventorydata, success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message, success: false });
  }
}
