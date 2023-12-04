import { NextRequest,NextResponse } from "next/server";
import prisma from "@/prisma/client";

//get all post
export async function GET(request:NextRequest) {
    const article = await prisma.post.findMany()
    return NextResponse.json(article);
}

//post one post
// export async function POST(request:NextRequest) {
//     const body = await request.json();

//     //Check validate for task before adding task to db
//     const validation = ArticleSchema.safeParse(body)
//     //If the data isn't validate, return 400 and error message
//     if(!validation.success){
//         return Response.json(validation.error.errors,{status:400})
//     }else{
//         //add new task to mysql db
//         const article = await prisma.post.create({
//             data: {
//                 User_idUser: body.User_idUser,
//                 Title: body.Title,
//                 Content: body.Content
//             },
//         })
//         return NextResponse.json(article,{status:201});
//     }
// }