import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET() {
    const article = await prisma.post.findMany()
    return NextResponse.json(article);
}

export async function DELETE({params}:{params:{id: string}}) {
    let idCheck=parseInt(params.id);
    if(idCheck!=-1){
        const deletePost = await prisma.post.delete({
            where: {
              idPost: idCheck,
            },
          })
        return NextResponse.json({mesage:"Xóa thành công"})
    }else{
        return NextResponse.json({message:"Xóa thất bại"})
    }
}