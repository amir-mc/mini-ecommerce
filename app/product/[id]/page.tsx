import ImageToolkits from "@/components/imagetoolkit";
import { products } from "@/modules/product/components/mock/data";
import ProductDeatils from "@/modules/product/components/productdetails";
import { StarIcon } from "lucide-react";
import Link from "next/link";

interface ProductIdProps {
    params: {
        id: string;
    };
}

const  ProductId  = async ({ params }: ProductIdProps) => {
    const data= await params

    
    const product = products[0]
    return ( 
     <ProductDeatils  {...product}   />
    ); 
}
 
export default ProductId;