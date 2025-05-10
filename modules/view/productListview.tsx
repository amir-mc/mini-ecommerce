'use client'
import ProductList from "@/modules/product/components/productlist";
import { ProductWithImages } from "@/types";
import { useEffect, useState } from "react";

const ProductListView = () => {
    const [products, setProducts] = useState<ProductWithImages[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchProducts = async () => {
        try {
            const response = await fetch('/api/product');
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const result = await response.json();
            
            if (result?.data) {
                setProducts(result.data);
            } else {
                setError("No products found");
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to fetch products");
            console.error("Fetch error:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading products...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return <ProductList product={products} />;
}

export default ProductListView;