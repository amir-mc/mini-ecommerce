import { Inputdata } from "@/components/inputdata";
import { getProductsbyId } from "../services";

 
const ProductAdminDetails = async (props:{id:string}) => {
    const {id}=props
   const products= await getProductsbyId(id)
    return ( 
      
      <div>
        <Inputdata products={products} />
      </div>
    
     );
}
 
export default ProductAdminDetails;