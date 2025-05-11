import { MiniSpinner } from "@/components/spinner";
import ProductAdminDetails from "@/modules/view/productadmindetails";
import { Suspense } from "react";




  const ProductDetails = async({ params }: {params:Promise<{id:string}>}) => {
  const data= await params
      const {id}=data

    return (
      
      <div>
          <Suspense fallback={<MiniSpinner size="lg" color="secondary" />}>
       <ProductAdminDetails id={id}/>
          </Suspense>
      </div>
      
     );
    }
  export default ProductDetails;
    
