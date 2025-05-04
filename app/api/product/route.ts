import { prisma } from "@/lib/prisma";
import { NextServer } from "next/dist/server/next";
import { NextRequest, NextResponse } from "next/server";

//handle rest api get post Delete put
export async function GET(req:NextRequest,res:NextResponse) {
    const result =await prisma.product.findMany({include:{images:true}})
    return NextResponse.json({
        data:result
    })
}