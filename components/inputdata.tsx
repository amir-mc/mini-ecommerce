import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { categorylist, product } from "@/generated/prisma";


export function Inputdata(props:{product:product|null}) {
  const {product}=props
  return (
    <div className="max-w-2xl mx-auto p-6  rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
      
      <div className="space-y-6">
        {/* Product Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 ">
            Product Name
          </label>
          <Input  id="name" placeholder="Enter product name"required defaultValue={product?.name || ''}/>
          <p className="mt-1 text-sm text-gray-500">Minimum 2 characters</p>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-2">
            Description
          </label>
          <Textarea
            id="description"
            placeholder="Enter product description"
            className="min-h-[120px]"
            required
             defaultValue={product?.description || ''}
          />
          <p className="mt-1 text-sm text-gray-500">Minimum 10 characters</p>
        </div>

        {/* Price and Stock */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="price" className="block text-sm font-medium mb-2">
              Price ($)
            </label>
            <Input id="price" type="number" step="0.01"  required
             defaultValue={product?.price || ''} />
            <p className="mt-1 text-sm text-gray-500">Minimum $0.01</p>
          </div>

          <div>
            <label htmlFor="stock" className="block text-sm font-medium mb-2">
              Stock Quantity
            </label>
            <Input id="stock" type="number"  required
             defaultValue={product?.quntity || ''} />
            <p className="mt-1 text-sm text-gray-500">Minimum 0</p>
          </div>
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium mb-2">
            Category
          </label>
          <Select 
          required
          defaultValue={product?.category||''}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {Object.values(categorylist).map((cat)=>
              (
              <SelectItem value={cat} key={cat}>{cat}</SelectItem>
              
              ))}
              
            </SelectContent>
          </Select>
        </div>

        {/* Featured Product */}
        <div className="flex flex-row items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <label className="text-base font-medium">Featured Product</label>
            <p className="text-sm text-gray-500">
              Featured products will be highlighted on the homepage.
            </p>
          </div>
          <Switch />
        </div>

        {/* Product Images (UI only) */}
        <div>
          <label className="block text-sm font-medium mb-2">Product Images</label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">PNG, JPG, GIF (MAX. 5MB each)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" multiple />
            </label>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end gap-4">
          <Button variant="outline">Cancel</Button>
          <Button>Add Product</Button>
        </div>
      </div>
    </div>
  );
}