import connect from "@/db/dbconnect";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { firstname, lastname, email, password } = reqBody;

    //find user
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({ error: "user exists", success: false });
    }
    //salt
    const salt = await bcryptjs.genSalt(10);
    //hash
    const hashedPassword = await bcryptjs.hash(password, salt);
    // new User
    const newUser = new User({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    // console.log(savedUser);

    return NextResponse.json({
      message: "User Register succesfully",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
