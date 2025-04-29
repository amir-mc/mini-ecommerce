
import ProductList from "@/modules/product/components/productlist";

type Product = {
     id: number;
     name: string;
     brand: string;
     price: number;
     discountPrice?: number;
     rating: number;
     reviewCount: number;
     colors: string[];
     inStock: boolean;
     features: string[];
   };

const Product = () => {

     const products: Product[] = [
          {
            id: 1,
            name: 'Premium Smartphone X9 Pro',
            brand: 'TechMaster',
            price: 899.99,
            discountPrice: 799.99,
            rating: 4.7,
            reviewCount: 124,
            colors: ['Space Gray', 'Midnight Blue', 'Rose Gold'],
            inStock: true,
            features: ['6.7" AMOLED', '108MP Camera', '5G']
          },
          {
            id: 2,
            name: 'Ultra Slim Laptop Pro',
            brand: 'VisionBook',
            price: 1299.99,
            rating: 4.5,
            reviewCount: 89,
            colors: ['Silver', 'Space Gray'],
            inStock: true,
            features: ['14" 4K Display', '16GB RAM', '1TB SSD']
          },
          {
            id: 3,
            name: 'Wireless Noise-Canceling Headphones',
            brand: 'AudioPlus',
            price: 349.99,
            discountPrice: 299.99,
            rating: 4.8,
            reviewCount: 215,
            colors: ['Black', 'White'],
            inStock: false,
            features: ['40hr Battery', 'ANC', 'Bluetooth 5.2']
          },
          {
            id: 4,
            name: 'Smart Watch Series 5',
            brand: 'TechMaster',
            price: 249.99,
            rating: 4.3,
            reviewCount: 67,
            colors: ['Black', 'Silver', 'Gold'],
            inStock: true,
            features: ['Heart Rate', 'GPS', 'Waterproof']
          },
          {
            id: 5,
            name: '4K Ultra HD Smart TV',
            brand: 'ScreenVision',
            price: 799.99,
            discountPrice: 699.99,
            rating: 4.6,
            reviewCount: 142,
            colors: ['Black'],
            inStock: true,
            features: ['55" Display', 'HDR', 'Smart OS']
          },
          {
            id: 6,
            name: 'Gaming Console X',
            brand: 'PlayTech',
            price: 499.99,
            rating: 4.9,
            reviewCount: 321,
            colors: ['White', 'Black'],
            inStock: true,
            features: ['4K Gaming', '1TB SSD', 'VR Ready']
          }
        ];
    
    return ( 

      <ProductList products={products} />

     );
}
 
export default Product;