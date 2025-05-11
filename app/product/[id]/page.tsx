

import ErrorPage from "@/app/error";
import { MiniSpinner } from "@/components/spinner";
import ProductDeatils from "@/modules/product/components/productdetails";
import { getProductsbyId } from "@/modules/services";
import { ProductWithImages } from "@/types";
import { Suspense } from "react";


interface ProductIdProps {
    params: {
        id: string;
    };
}

const  ProductId  = async ({ params }: ProductIdProps) => {
    const data= await params
    const {id}=data
    const product=await getProductsbyId(id) as ProductWithImages
    
  
       if (!product) {
            return <ErrorPage/>;
        }

        return (
            <Suspense fallback={<MiniSpinner size="lg" />}>
                <ProductDeatils {...product} />
            </Suspense>
        );
        
    
}
 
export default ProductId;