import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET() {
    const property = await prisma.property.findMany()
    return NextResponse.json(property);
}