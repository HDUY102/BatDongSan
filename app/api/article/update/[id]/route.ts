import { NextRequest,NextResponse } from "next/server";
import prisma from "@/prisma/client";

//Put selected post
export async function PUT(request:NextRequest,{params}:{params:{id: string}}) {
    try{
        const body = await request.json();
        let idCheck=parseInt(params.id);
        //check if post already exists
        const existingPostById= await prisma.post.findUnique({
            where:{
                idPost : idCheck
            }    
        });
        if(!existingPostById){
            return NextResponse.json({user: null, message:"Post with this id does not exist"},
            {status:409})
        }
        //update post to mysql db
        const updatePost = await prisma.post.update({
            where: {
                idPost: idCheck,
            },
            data:{
                User_idUser: body.User_idUser,
                Category_idCategory: body.Category_idCategory,
                Title: body.Title,
                Content: body.Content
            }
        })
        return NextResponse.json({user: updatePost, message:"Post updated successfully"},{status: 202});
    }catch(error){
        return NextResponse.json({message:"Something went wrong!"},{status: 500});
    }
}