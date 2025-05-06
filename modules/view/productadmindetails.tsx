import { Inputdata } from "@/components/inputdata";
import { getProductsbyId } from "../services";

 
const ProductAdminDetails = async ({id}:{id:string}) => {
    
   const product= await getProductsbyId(id)
    return ( 
      
      <div>
        <Inputdata product={product} />
      </div>
    
     );
}
 
export default ProductAdminDetails;