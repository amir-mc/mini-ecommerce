import ProductAdminDetails from "@/modules/view/productadmindetails";




  const ProductDetails = async({ params }: {params:Promise<{id:string}>}) => {
  const data= await params
      const {id}=data

    return (
      
      <div>
       <ProductAdminDetails id={id}/>
      </div>
      
     );
    }
  export default ProductDetails;
    
