import connect from "@/db/dbconnect";
import { NextResponse } from "next/server";

connect();

export async function GET() {
  try {
    const response = NextResponse.json({
      message: "Logged out succesfully",
      success: true,
    });
    response.cookies.set("token", " ", {
      httpOnly: true,
      expires: new Date(0),
    });
    return response;
  } catch (error) {
    return NextResponse.json({
      error: "Error occured while Logging out" + error,
    });
  }
}
