import { ProductTable } from "../product/components/producttable";
import { getProducts } from "../services";

const ProductAdmin =  async () => {
    const product= await getProducts()
    return ( 
        <div>
            <ProductTable product={product} />
        </div>
     );
}
 
export default ProductAdmin;