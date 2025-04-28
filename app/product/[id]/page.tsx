
import { products } from "@/modules/mock/data";
import ProductDeatils from "@/modules/product/components/productdetails";


interface ProductIdProps {
    params: {
        id: string;
    };
}

const  ProductId  = async ({ params }: ProductIdProps) => {
    const data= await params
    console.log(data)
    
    const product = products[0]
    return ( 
     <ProductDeatils  {...product}   />
    ); 
}
 
export default ProductId;