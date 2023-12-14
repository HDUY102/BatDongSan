import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import CategorySchema from "./categorySchema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validation = CategorySchema.safeParse(body);
    if (!validation.success) {
      return Response.json(validation.error.errors, { status: 400 });
    } else {
      const newCategory = await prisma.category.create({
        data: {
          categoryName: body.categoryName,
        },
      });
      return NextResponse.json(
        { category: newCategory, message: "Category created successfully" },
        { status: 201 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}
