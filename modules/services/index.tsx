import { prisma } from "@/lib/prisma"

export const getProducts= async ()=>{
    const result =await prisma.product.findMany({include:{images:true}})
    return result
}
export const getProductsbyApi=async ()=>{
    const result=await fetch('/api/product')
    const response= await result.json()
    return response
}
export const getProductsbyId= async (id:string)=>{
    const result =await prisma.product.findUnique({
        //شرط که ایدی پراپ برابر با ایدی پیزما دیتابیس باشد
        where:{id:id},

        include:{images:true}})
        if(!result){
            return null
        }
    return result
}