
import ImageToolkits from "@/components/imagetoolkit";
import { prisma, Promisetype } from "@/lib/prisma";
import { StarIcon } from "lucide-react";
import Link from "next/link";




const  ProductDeatils  = async ( product:any  ) => {
  const database :Promisetype.product[] = await prisma.product.findMany();
  const dataimage :Promisetype.image[]  = await prisma.image.findMany();

  console.log(dataimage);

  

      const relatedProducts = [
        { id: 1, name: 'Smartphone X8', price: 599.99, image: '/related1.jpg' },
        { id: 2, name: 'Smartphone X9', price: 699.99, image: '/related2.jpg' },
        { id: 3, name: 'Smartphone X9 Lite', price: 549.99, image: '/related3.jpg' },
        { id: 4, name: 'Smartphone X8 Pro', price: 649.99, image: '/related4.jpg' }
      ];

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
                <Link href="/products" className="text-gray-500 hover:text-gray-700">
                  Products
                </Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
              </li>
              <li className="text-gray-700 font-medium" aria-current="page">
                {database[0].name}
              </li>
            </ol>
          </nav>
   
          {/* Main Product Grid - 4 columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1: Product Images */}
            <div className="md:col-span-2 bg-white p-4 rounded-lg shadow-sm">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg">
                
                     <ImageToolkits
               src='/phone1.jpg'
               //src={items.image}  
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
              <p className="text-gray-600 mt-1">{product.brand}</p>
              <p className="text-gray-600 mt-1">product ID: </p>
              
              <div className="mt-4 flex items-center">
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon                                                                                                                            
                      key={rating}
                      className={`h-5 w-5 flex-shrink-0 ${
                        rating < Math.floor(product.rating)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="ml-2 text-sm text-gray-500">
                  {product.rating} ({product.reviewCount} reviews)
                </p>
              </div>
   
              <div className="mt-6">
                <p className="text-3xl font-bold text-gray-900">
                  ${product.discountPrice}
                </p>
                {product.discountPrice < product.price && (
                  <p className="text-lg text-gray-500 line-through">
                    ${product.price}
                  </p>
                )}
                <p className="text-green-600 mt-1">
                  {Math.round((1 - product.discountPrice / product.price) * 100)}% Off
                </p>
              </div>
   
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Description</h3>
                <p className="mt-2 text-sm text-gray-600">{product.description}</p>
              </div>
   
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Color</h3>
                <div className="mt-2 flex space-x-2">
                  {product.colors.map((color:string) => (
                    <button
                      key={color}
                      type="button"
                      className="px-3 py-1 border rounded-md text-sm font-medium hover:bg-gray-50"
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
   
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Storage</h3>
                <div className="mt-2 flex space-x-2">
                  {product.sizes.map((size:string) => (
                    <button
                      key={size}
                      type="button"
                      className="px-3 py-1 border rounded-md text-sm font-medium hover:bg-gray-50"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
   
              <div className="mt-8 flex space-x-4">
                <button
                  type="button"
                  className="flex-1 bg-indigo-600 py-3 px-8 border border-transparent rounded-md text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
                  {product.features.map((feature:any, index:any) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
   
              <div className="mt-8">
                <h3 className="text-sm font-medium text-gray-900">Technical Details</h3>
                <dl className="mt-2 grid grid-cols-1 gap-x-4 gap-y-2">
                  <div className="border-t border-gray-200 pt-2">
                    <dt className="text-sm font-medium text-gray-500">Display</dt>
                    <dd className="text-sm text-gray-900">6.7&quot; AMOLED, 120Hz refresh rate</dd>
                  </div>
                  <div className="border-t border-gray-200 pt-2">
                    <dt className="text-sm font-medium text-gray-500">Processor</dt>
                    <dd className="text-sm text-gray-900">Octa-core 3.2GHz</dd>
                  </div>
                  <div className="border-t border-gray-200 pt-2">
                    <dt className="text-sm font-medium text-gray-500">RAM</dt>
                    <dd className="text-sm text-gray-900">8GB LPDDR5</dd>
                  </div>
                  <div className="border-t border-gray-200 pt-2">
                    <dt className="text-sm font-medium text-gray-500">Operating System</dt>
                    <dd className="text-sm text-gray-900">Android 13</dd>
                  </div>
                  <div className="border-t border-gray-200 pt-2">
                    <dt className="text-sm font-medium text-gray-500">Battery</dt>
                    <dd className="text-sm text-gray-900">5000mAh, Fast charging 65W</dd>
                  </div>
                </dl>
              </div>
            </div>
   
            {/* Column 4: Related Products */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-medium text-gray-900">You may also like</h2>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                {relatedProducts.map((item) => (
                  <div key={item.id} className="group relative">
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200">
                       <ImageToolkits
                        src='Phone/apple.jpg'
                        alt=""
                        width={300}
                        height={300}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      /> 
                    </div>
                    <div className="mt-2">
                      <h3 className="text-sm font-medium text-gray-900">
                        <Link href={`/products/${item.id}`}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {item.name}
                        </Link>
                      </h3>
                      <p className="text-sm font-semibold text-gray-900">${item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
   
              
            </div>
          </div>
        </div>
      </div>
    ); 
}
 
export default ProductDeatils;