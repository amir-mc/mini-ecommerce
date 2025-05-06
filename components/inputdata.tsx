'use client'
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
import {useForm} from "react-hook-form"
import { upsertProduct } from "@/modules/services";
import { useEffect } from "react";

export function Inputdata(props:{products:product|null}) {
  const {products}=props
  const {register,handleSubmit,setValue}=useForm<product>()

  useEffect(() => {
    if (products?.id) {
      setValue("id", products.id); // Set the ID so it's sent to the server
    }
  }, [products, setValue]);
  const onSubmitForm=(data:product)=>{

   
    const _product={...data,
      price:parseFloat(data.price?.toString() || '0'),
      quntity:parseInt(data.quntity?.toString() || '0'),
      RAM:parseInt(data.RAM?.toString() || '0'),
      memory:parseInt(data.memory?.toString() || '0'),
      category:data.category || products?.category
    }
    upsertProduct(_product)
  }
  

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}  className="max-w-2xl mx-auto p-6 rounded-lg shadow-md">
    <div className="max-w-2xl mx-auto p-6  rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
      
      <div className="space-y-6">
        {/* Product Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 ">
            Product Name 
          </label>
          <Input {...register('name')}  id="name" placeholder="Enter product name"required defaultValue={products?.name || ''}/>
          <p className="mt-1 text-sm text-gray-500">Minimum 2 characters</p>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-2">
            Description
          </label>
          <Textarea
          {...register('description')}
            id="description"
            placeholder="Enter product description"
            className="min-h-[120px]"
            required
             defaultValue={products?.description || ''}
          />
          <p className="mt-1 text-sm text-gray-500">Minimum 10 characters</p>
        </div>

        {/* Price and Stock */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="price" className="block text-sm font-medium mb-2">
              Price ($)
            </label>
            <Input id="price" type="number" step="0.01"  required    {...register('price')}
             defaultValue={products?.price || ''} />
            <p className="mt-1 text-sm text-gray-500">Minimum $0.01</p>
          </div>

          <div>
            <label htmlFor="stock" className="block text-sm font-medium mb-2">
              Stock Quantity
            </label>
            <Input id="quntity" type="number"  required {...register('quntity')}
             defaultValue={products?.quntity || ''} />
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
          defaultValue={products?.category||''}
          onValueChange={(value)=>setValue('category',value as categorylist) }
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

        {/* Display */}
        <div>
          <label htmlFor="display" className="block text-sm font-medium mb-2">
            Display
          </label>
          <Input 
            id="display" 
            placeholder="Enter display specifications" 
            required 
            {...register('Display')}
            defaultValue={products?.Display || ''}
          />
        </div>

        {/* Processor */}
        <div>
          <label htmlFor="processor" className="block text-sm font-medium mb-2">
            Processor
          </label>
          <Input 
            id="processor" 
            placeholder="Enter processor details" 
            required 
            {...register('Processor')}
            defaultValue={products?.Processor || ''}
          />
        </div>

        {/* RAM and Memory */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="ram" className="block text-sm font-medium mb-2">
              RAM (GB)
            </label>
            <Input 
              id="ram" 
              type="number" 
              required 
              {...register('RAM', { valueAsNumber: true })}
              defaultValue={products?.RAM || ''}
            />
          </div>
          <div>
            <label htmlFor="memory" className="block text-sm font-medium mb-2">
              Storage (GB)
            </label>
            <Input 
              id="memory" 
              type="number" 
              required 
              {...register('memory', { valueAsNumber: true })}
              defaultValue={products?.memory || ''}
            />
          </div>
        </div>

        {/* Operating System */}
        <div>
          <label htmlFor="os" className="block text-sm font-medium mb-2">
            Operating System
          </label>
          <Input 
            id="os" 
            placeholder="Enter operating system" 
            required 
            {...register('OperatingSystem')}
            defaultValue={products?.OperatingSystem || ''}
          />
        </div>

        {/* Battery */}
        <div>
          <label htmlFor="battery" className="block text-sm font-medium mb-2">
            Battery
          </label>
          <Input 
            id="battery" 
            placeholder="Enter battery specifications" 
            required 
            {...register('Battery')}
            defaultValue={products?.Battery || ''}
          />
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
          <Button type="submit">
            {products?.id ? "Edit product":" Add Product" }
            </Button>
        </div>
      </div>
    </div>
   </form>
  );
}