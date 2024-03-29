import { NextResponse,NextRequest } from "next/server";
import prisma from "@/prisma/client";

export async function DELETE(request: NextRequest, {params}:{params:{id:string}}){
    let idCheck = parseInt(params.id)
    if(idCheck!=-1){
        const deleteUser = await prisma.user.delete({
            where:{
                idUser: idCheck
            }
        })
        return NextResponse.json({mesage:"Xóa thành công"})
    }else{
        return NextResponse.json({message:"Xóa thất bại"})
    }
}