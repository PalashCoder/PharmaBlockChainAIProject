import connect from "@/db/dbconnect";
import { getData } from "@/helpers/jwtToIdExtraction";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const userId = await getData(request);
    const user = await User.findOne({ _id: userId }).select("-password");

    if (!user) {
      return NextResponse.json({
        message: "User Not found",
        success: false,
      });
    }
    return NextResponse.json({
      message: "User Found",
      success: true,
      data: user,
    });
  } catch (error) {
    // console.log(request)
    return NextResponse.json({ error: "Error while going to user" + error });
  }
}
