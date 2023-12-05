import { NextRequest,NextResponse } from "next/server";
import prisma from "@/prisma/client";

//Get selected post
export async function GET(request:NextRequest,{params}:{params:{id: string}}) {
    let idCheck=parseInt(params.id);
    const article = await prisma.post.findUnique({
        where:{
            idPost: idCheck,
        }
    })
    return NextResponse.json(article);
}
export async function PUT(request:NextRequest,{params}:{params:{id: string}}) {
    let idCheck=parseInt(params.id);
    if(idCheck!=-1){
        const body = await request.json();
        const updatePost = await prisma.post.update({
            where: {
              idPost: idCheck,
            },
            data:{
                User_idUser: body.User_idUser,
                Title: body.Title,
                Content: body.Content
            }
          })
          return NextResponse.json(updatePost);

    }else{
        return NextResponse.json({message:"Cập nhật thất bại"})
    }
}