import { NextRequest,NextResponse } from "next/server";
import prisma from "@/prisma/client";
import RegisterSchema from "./RegisterSchema";

export async function GET(request:NextRequest) {
    const register = await prisma.user.findMany()
    return NextResponse.json(register);
}
export async function POST(request:NextRequest) {
    try{
        const body = await request.json();
        const {username,password}=body;
        //check if username already exists
        const existingUserByUsername = await prisma.user.findFirst({
            where:{
                UserName : username
            }    
        });
        if(existingUserByUsername){
            return NextResponse.json({user: null, message:"User with this username already exists"},
            {status:409})
        }
        //Check validate for register before adding task to db
        const validation = RegisterSchema.safeParse(body)
        if(!validation.success){
            return Response.json(validation.error.errors,{status:400})
        }else{
            //add new user to mysql db
            const newUser = await prisma.user.create({
                data: {
                    UserName: username,
                    PassWord: body.PassWord
                }
            })
            return NextResponse.json({user: newUser, message:"User created successfully"},{status: 201});
        }
    }catch(error){
        return NextResponse.json({message:"Something went wrong!"},{status: 500});
    }
}