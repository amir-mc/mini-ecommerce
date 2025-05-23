"use server"

import { product } from "@/generated/prisma"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

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
export const upsertProduct = async (product:product)=>{
const {id}=product
let result
if(id){
    result= await prisma.product.update({
        where:{id:id},
        data:product
    })
} else{
    result=await prisma.product.create({
        data:product
    })
}
revalidatePath('/dashboard/product')
// revalidatePath barye chache kardan data ha estefade mishe ar vaght ke data ha taghir kard
return result
}

export const deleteProduct = async (id:string) => {
    await prisma.product.delete({where:{id}})
    redirect('/dashboard/product')
}
 
 