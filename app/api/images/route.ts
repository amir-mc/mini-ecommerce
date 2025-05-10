import { imagekit } from "@/lib/imagekit";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

    const formdata = await req.formData();
    const file = formdata.get('file') as File;
    const productId = formdata.get('productId') as string;

    if (!file || !productId) {
        return NextResponse.json({
            error: "Missing file or productId"
        }, {
            status: 400
        });
    }

    try {
        // Convert the File to a Buffer
        const buffer = Buffer.from(await file.arrayBuffer());

        const uploadResponse = await imagekit.upload({
            file: buffer, // Now using Buffer which is accepted
            fileName: `${productId}-${Date.now()}.${file.name.split('.').pop()}`, // Include original extension
            folder: "/products",
            useUniqueFileName: true,
            tags: [`product-${productId}`]
        });

        // Properly await the response and extract properties
        const result = await uploadResponse;
        
        return NextResponse.json({
            url: result.url,
            fileId: result.fileId,
            thumbnailUrl: result.thumbnailUrl
        });
    } catch (error) {
        console.error("Image upload failed:", error);
        return NextResponse.json({
            error: "Image upload failed"
        }, {
            status: 500
        });
    }
}