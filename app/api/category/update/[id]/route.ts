import { NextRequest,NextResponse } from "next/server";
import prisma from "@/prisma/client";

//Put selected category
export async function PUT(request:NextRequest,{params}:{params:{id: string}}) {
    try{
        const body = await request.json();
        let idCheck=parseInt(params.id);
        //check category already exists
        const existingPostById= await prisma.category.findUnique({
            where:{
                idCategory : idCheck
            }    
        });
        if(!existingPostById){
            return NextResponse.json({user: null, message:"Category with this id does not exist"},
            {status:409})
        }
        //update category to mysql db
        const updateCate = await prisma.category.update({
            where: {
                idCategory: idCheck,
            },
            data:{
                categoryName: body.categoryName
            }
        })
        return NextResponse.json({user: updateCate, message:"Category updated successfully"},{status: 202});
    }catch(error){
        return NextResponse.json({message:"Something went wrong!"},{status: 500});
    }
}