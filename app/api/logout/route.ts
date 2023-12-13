import { NextRequest, NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.next();
  response.cookies.delete("token");
  (response as any).redirect('/login');
  return response;
}
