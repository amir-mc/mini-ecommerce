

import ProductDeatils from "@/modules/product/components/productdetails";
import { getProductsbyId } from "@/modules/services";
import { ProductWithImages } from "@/types";


interface ProductIdProps {
    params: {
        id: string;
    };
}

const  ProductId  = async ({ params }: ProductIdProps) => {
    const data= await params
    const {id}=data
    const product=await getProductsbyId(id) as ProductWithImages
    
  
    return ( 
     <ProductDeatils  {...product}   />
    ); 
}
 
export default ProductId;