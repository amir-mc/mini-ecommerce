'use client'
import { useCart } from "@/app/hook/usecart";
import ImageToolkits from "@/components/imagetoolkit";
import { ProductWithImages } from "@/types";
import { StarIcon } from "lucide-react";
import Link from "next/link";


 

const  ProductDeatils  = ( product:ProductWithImages  ) => {
  const { addToCartMutation } = useCart();
    return ( 
        <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
              </li>
              <li>
                <Link href="/product" className="text-gray-500 hover:text-gray-700">
                  Products
                </Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
              </li>
              <li className="text-gray-700 font-medium" aria-current="page">
                {product.name}
              </li>
            </ol>
          </nav>
   
          {/* Main Product Grid - 4 columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1: Product Images */}
            <div className="md:col-span-2 bg-white p-4 rounded-lg shadow-sm">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg">
                
                     <ImageToolkits
             src={product.id ? product.images[0].images : '/image'}
              width={800}
              height={800}
              alt="ax"
              className="h-full w-full object-cover object-center"
              />
                 
             
                {/* <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={800}
                  height={800}
                  className="h-full w-full object-cover object-center"
                /> */}
              </div>
              <div className="grid grid-cols-3 gap-2 mt-4">
                
                  <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                    {/* <Image
                      src={image}
                      alt={`${product.name} view ${index + 2}`}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover object-center"
                    /> */}
                  </div>
             
              </div>
            </div>
   
            {/* Column 2: Product Details */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
              <p className="text-gray-600 mt-1">{product.category}</p>
              
              
              <div className="mt-4 flex items-center">
                <div className="flex">
                {[...Array(5)].map((_, i) => (

                    <StarIcon                                                                                                                            
                    key={i}
                    className={`h-5 w-5 flex-shrink-0 ${
                      
                      'text-yellow-400'
                      
                    }`}
                    />
                  ))}
                </div>
                <p className="ml-2 text-sm text-gray-500">
                
                </p>
              </div>
   
              <div className="mt-6">
                {/* <p className="text-3xl font-bold text-gray-900">
                  ${product.discountPrice}
                </p>
                {product.discountPrice < product.price && (
                  <p className="text-lg text-gray-500 line-through">
                    ${product.price}
                  </p>
                )} */}
                <p className="text-green-600 mt-1">
                  {product.price}
                </p>
              </div>
   
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Description</h3>
                <p className="mt-2 text-sm text-gray-600">{product.description}</p>
              </div>
   
              {/* <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Color</h3>
                <div className="mt-2 flex space-x-2">
                  {/* {product.colors.map((color:string) => (
                    <button
                      key={color}
                      type="button"
                      className="px-3 py-1 border rounded-md text-sm font-medium hover:bg-gray-50"
                    >
                      {color}
                    </button>
                  ))} 
                </div>
              </div> */}
   
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Storage</h3>
                <div className="mt-2 flex space-x-2">
               
                    <button
                      
                      type="button"
                      className=" text-black px-3 py-1 border rounded-md text-sm font-medium hover:bg-gray-500"
                    >
                      {product.memory} GB
                    </button>
                 
                </div>
              </div>
   
              <div className="mt-8 flex space-x-4">
                <button
                onClick={()=>addToCartMutation.mutate(product.id)}
                  type="button"
                  className="flex-1 bg-indigo-600 py-3 px-8 border border-transparent rounded-md text-base font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  className="flex-1 bg-gray-200 py-3 px-8 border border-transparent rounded-md text-base font-medium text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Buy Now
                </button>
              </div>
            </div>
   
            {/* Column 3: Product Specifications */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-medium text-gray-900">Specifications</h2>
              
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Key Features</h3>
                <ul className="mt-2 space-y-2">
                  
                    <li  className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">{product.Battery} All-Day Battery</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">{product.Display} 120Hz refresh rate</span>
                    </li>
                 
                </ul>
              </div>
   
              <div className="mt-8">
                <h3 className="text-sm font-medium text-gray-900">Technical Details</h3>
                <dl className="mt-2 grid grid-cols-1 gap-x-4 gap-y-2">
                  <div className="border-t border-gray-200 pt-2">
                    <dt className="text-sm font-medium text-gray-500">Display</dt>
                    <dd className="text-sm text-gray-900">{product.Display}</dd>
                  </div>
                  <div className="border-t border-gray-200 pt-2">
                    <dt className="text-sm font-medium text-gray-500">Processor</dt>
                    <dd className="text-sm text-gray-900">{product.Processor} Octa-core 3.2GHz</dd>
                  </div>
                  <div className="border-t border-gray-200 pt-2">
                    <dt className="text-sm font-medium text-gray-500">RAM</dt>
                    <dd className="text-sm text-gray-900">{product.RAM}GB LPDDR5</dd>
                  </div>
                  <div className="border-t border-gray-200 pt-2">
                    <dt className="text-sm font-medium text-gray-500">Operating System</dt>
                    <dd className="text-sm text-gray-900">{product.OperatingSystem}13</dd>
                  </div>
                  <div className="border-t border-gray-200 pt-2">
                    <dt className="text-sm font-medium text-gray-500">Battery</dt>
                    <dd className="text-sm text-gray-900">{product.Battery}, Fast charging 65W</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    ); 
}
 
export default ProductDeatils;