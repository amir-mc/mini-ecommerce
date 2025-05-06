import ProductAdminDetails from "@/modules/view/productadmindetails";

interface ProductIdProps {
  params: {
      id: string;
  };
}


  const ProductDetails = async({ params }: ProductIdProps) => {
  const data= await params
      const {id}=data

    return (
      
      <div>
       <ProductAdminDetails id={id}/>
      </div>
      
     );
    }
  export default ProductDetails;
    
