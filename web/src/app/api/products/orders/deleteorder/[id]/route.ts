import connect from "@/db/dbconnect";
import Orders from "@/models/orderModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const id = url.pathname.split("/").pop(); // Extract ID from the URL
    console.log("Deleting order with ID:", id);

    if (!id) {
      return NextResponse.json(
        { error: "Invalid ID", success: false },
        { status: 400 },
      );
    }

    const deletedOrder = await Orders.findByIdAndDelete(id);

    if (!deletedOrder) {
      return NextResponse.json(
        { error: "Order not found", success: false },
        { status: 404 },
      );
    }

    return NextResponse.json({
      message: "Order deleted successfully",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message, success: false },
      { status: 500 },
    );
  }
}
