import { NextRequest,NextResponse } from "next/server";
import prisma from "@/prisma/client";
import ArticleSchema from "./ArticleSchema";

//post one post
export async function POST(request:NextRequest) {
    try{
        const body = await request.json();
        const user = await prisma.user.findFirst({
            where: {
              UserName: body.User_idUser,
            },
          });
        if (user === null) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }
        const validation = ArticleSchema.safeParse(body)
        if(!validation.success){
            return Response.json(validation.error.errors,{status:400})
        }else{
            const newArticle = await prisma.post.create({
                data:{
                    // User_idUser: body.User_idUser,
                    User_idUser: user.idUser,
                    Category_idCategory: body.Category_idCategory,
                    Title: body.Title,
                    Content: body.Content,
                    Date: new Date()
                }
            })
            return NextResponse.json({post: newArticle,message:"Post created successfully"},{status:201});
        }
    }catch(error){
        return NextResponse.json({message:"Something went wrong!"},{status: 500});
    }
}