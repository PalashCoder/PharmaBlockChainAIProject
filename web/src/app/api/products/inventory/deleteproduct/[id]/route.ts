import connect from "@/db/dbconnect";
import Inventory from "@/models/inventoryModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const id = url.pathname.split("/").pop(); // Extract ID from the URL
    console.log("Deleting Product with ID:", id);

    if (!id) {
      return NextResponse.json(
        { error: "Invalid ID", success: false },
        { status: 400 },
      );
    }

    const deletedOrder = await Inventory.findByIdAndDelete(id);

    if (!deletedOrder) {
      return NextResponse.json(
        { error: "Product not found", success: false },
        { status: 404 },
      );
    }

    return NextResponse.json({
      message: "Product deleted successfully",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message, success: false },
      { status: 500 },
    );
  }
}
