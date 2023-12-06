import { NextRequest,NextResponse } from "next/server";
import prisma from "@/prisma/client";
import RegisterSchema from "./RegisterSchema";
import { hash } from "bcrypt";

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
        const hashedPassword = await hash(password,3)
        //Check validate for register before adding task to db
        const validation = RegisterSchema.safeParse(body)
        // if(!validation.success){
        //     return Response.json(validation.error.errors,{status:400})
        // }else{
            //add new user to mysql db
            const newUser = await prisma.user.create({
                data: {
                    UserName: username,
                    // PassWord: password
                    PassWord: hashedPassword
                }
            })
            return NextResponse.json({user: newUser, message:"User created successfully"},{status: 201});
        // }
    }catch(error){
        return NextResponse.json({message:"Something went wrong!"},{status: 500});
    }
}