'use client'
import ProductList from "@/modules/product/components/productlist";
//import { getProducts } from "@/modules/services";
import { ProductWithImages } from "@/types";
import { useEffect, useState } from "react";
import { getProductsbyApi } from "../services";

const ProductListView =  () => {
    const [product,setProducts]=useState<ProductWithImages[]>([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const getProductsData = async () => {
        try {
            setLoading(true);
            const result = await getProductsbyApi();
            
            if (result?.data) {
                setProducts(result.data);
            } else {
                setError("No products found");
            }
        } catch (err) {
            setError("Failed to fetch products");
            console.error("Fetch error:", err);
        } finally {
            setLoading(false);
        }
    };
    useEffect(()=>{
        getProductsData()
    },[])
    if (loading) {
        return <div>Loading products...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    //const product= getProducts()
    return ( 
      <ProductList product={product}  />
     );
}
 
export default ProductListView;