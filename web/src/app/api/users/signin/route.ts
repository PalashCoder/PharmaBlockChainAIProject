import connect from "@/db/dbconnect";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({
        error: "User Not Exists",
        message: "notexist",
      });
    }
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({
        error: "Not valid Credintial.",
        message: "invalidCredintial",
      });
    }

    const tokenPayLoad = {
      id: user._id,
    };
    const token = jwt.sign(tokenPayLoad, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "Logged In Succesfully",
      success: true,
    });
    response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: "Error occured while signin" + error });
  }
}
