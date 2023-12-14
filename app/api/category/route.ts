import { NextRequest,NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET() {
    const category = await prisma.category.findMany()
    return NextResponse.json(category);
}