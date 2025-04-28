import Link from "next/link";
import { 
     Star, 
     Check, 
     ChevronLeft, 
     ChevronRight, 
     Filter, 
     ArrowDownWideNarrow, 
     GalleryThumbnails
   } from 'lucide-react';

import ImageToolkits from "@/components/imagetoolkit";

const ProductList = ({products}:{products:any}) => {
    return ( 
        <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
            <p className="mt-2 text-sm text-gray-600">
              Browse our wide selection of products
            </p>
          </div>
  
          {/* Filters and Sorting */}
          <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <ArrowDownWideNarrow className="h-4 w-4 text-gray-500 mr-2" />
                <select
                  id="sort"
                  className="text-black block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Highest Rated</option>
                  <option>Most Reviews</option>
                </select>
              </div>
              <div className="flex items-center">
                <Filter className="h-4 w-4 text-gray-500 mr-2" />
                <select
                  id="filter"
                  className=" text-black block w-full rounded-md border-gray-600 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option>All Brands</option>
                  <option>TechMaster</option>
                  <option>VisionBook</option>
                  <option>AudioPlus</option>
                  <option>ScreenVision</option>
                </select>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Showing {products.length} products
            </div>
          </div>
  
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product:any) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                {/* Product Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        <Link href={`/product/${product.id}`} className="hover:text-indigo-600 transition-colors">
                          {product.name}
                        </Link>
                      </h3>
                      <ImageToolkits
                       src="Phone/galaxy.jpg"
                       width={800}
                       height={800}
                       alt="ax"
                       className="h-full w-full object-cover object-center"
                      />
                      <p className="text-sm text-gray-500 mt-1">{product.brand}</p>
                    </div>
                    
                  </div>
  
                  {/* Rating */}
                  <div className="mt-2 flex items-center">
                  
                    <div className="flex">
                    {product.inStock ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        In Stock
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Out of Stock
                      </span>
                    )}
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <Star
                          key={rating}
                          className={`h-5 w-5 flex-shrink-0 ${
                            rating < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="ml-1 text-sm text-gray-500">
                      {product.rating} ({product.reviewCount})
                    </p>
                  </div>
  
                  {/* Features */}
                  <div className="mt-3">
                    <ul className="space-y-1">
                      {product.features.slice(0, 3).map((feature:any, index:any) => (
                        <li key={index} className="flex items-center">
                          <Check className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
  
                  {/* Colors */}
                  <div className="mt-3">
                    <p className="text-sm text-gray-500">
                      Colors: {product.colors.join(', ')}
                    </p>
                  </div>
  
                  {/* Price */}
                  <div className="mt-4 ">
                    <div className="flex justify-end items-center">
                      <Link href={`/product/catalog?id=${product.id}`}>
                    <GalleryThumbnails className="text-blue-600"/>
                    </Link>
                      </div>
                  
                    <p className="text-lg font-semibold text-gray-900">
                    
                      ${product.discountPrice || product.price}
                      {product.discountPrice && (
                        <span className="ml-2 text-sm text-gray-500 line-through">
                          ${product.price}
                        </span>
                      )}
                    </p>
                   
                    {product.discountPrice && (
                      <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded">
                        {Math.round((1 - product.discountPrice / product.price) * 100)}% OFF
                      </span>
                    )}
                  </div>
  
                  {/* Actions */}
                  <div className="mt-6">
                    <Link
                      href={`/product/${product.id}`}
                      className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          {/* Pagination */}
          <div className="mt-10 flex items-center justify-between border-t border-gray-200 pt-6">
            <div className="flex-1 flex justify-between sm:hidden">
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Previous
              </a>
              <a
                href="#"
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Next
              </a>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of{' '}
                  <span className="font-medium">24</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronLeft className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    aria-current="page"
                    className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    3
                  </a>
                  <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                    ...
                  </span>
                  <a
                    href="#"
                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    8
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Next</span>
                    <ChevronRight className="h-5 w-5" />
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default ProductList;