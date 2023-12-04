import { NextRequest,NextResponse } from "next/server";
import prisma from "@/prisma/client";
import ArticleSchema from "@/app/admin/articlemanage/addarticle/api/addarticle/ArticleSchema";

//get all post
export async function GET(request:NextRequest) {
    const article = await prisma.post.findMany()
    return NextResponse.json(article);
}

//post one post
export async function POST(request:NextRequest) {
    try{
        const body = await request.json();

        //Check validate for post before adding task to db
        const validation = ArticleSchema.safeParse(body)
        if(!validation.success){
            //If the data isn't validate, return 400 and error message
            return Response.json(validation.error.errors,{status:400})
        }else{
            //add new post to mysql db
            const newArticle = await prisma.post.create({
                data:{
                    User_idUser: body.User_idUser,
                    Category_idCategory: body.Category_idCategory,
                    Title: body.Title,
                    Content: body.Content,
                    date: new Date()
                }
            })
            return NextResponse.json({post: newArticle,message:"Post created successfully"},{status:201});
        }
    }catch(error){
        return NextResponse.json({message:"Something went wrong!"},{status: 500});
    }
}