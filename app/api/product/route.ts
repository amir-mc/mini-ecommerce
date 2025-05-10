import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    console.log(req)
    try {
        const result = await prisma.product.findMany({include:{images:true}});
        return NextResponse.json({
            data: result
        });
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}