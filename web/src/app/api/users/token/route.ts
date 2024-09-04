import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function GET(request: NextRequest) {
  const token = request.cookies.get("token")?.value || "";
//   console.log(token);
  if (!token) {
    return NextResponse.json({
      message: "User Not Found",
      success: false,
    });
  } else {
    return NextResponse.json({
      message: "User Found",
      success: true,
      data: token,
    });
  }
}
