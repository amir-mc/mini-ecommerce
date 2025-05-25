import { imagekit } from "@/lib/imagekit";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const productId = formData.get('productId') as string;

    if (!file || !productId) {
      return NextResponse.json(
        { error: "Missing file or productId" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    
    const uploadResponse = await imagekit.upload({
      file: buffer,
      fileName: `${productId}-${Date.now()}.${file.name.split('.').pop()}`,
      folder: "/products",
      useUniqueFileName: true,
      tags: [`product-${productId}`]
    });

        const uploadProduct=await prisma.product.update({
        where:{id:productId},
        data:{
            images:{
                create:{ images: uploadResponse.url,}
            }
        },
        include:{images:true}
        })
    return NextResponse.json({
      ...uploadResponse, // ✅ Send the full object
        data: uploadProduct,
    });
     
    

  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}