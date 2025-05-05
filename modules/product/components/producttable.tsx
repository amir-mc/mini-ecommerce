import { 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow 
  } from "@/components/ui/table";
  import { 
    Plus, 
    Edit, 
    Trash2, 
    ChevronLeft, 
    ChevronRight, 
    ChevronsLeft, 
    ChevronsRight,
    Package,
    DollarSign,
    BarChart2,
    Tag,
    Eye
  } from "lucide-react";
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { Badge } from "@/components/ui/badge";
import { ProductWithImages } from "@/types";
import { getProducts } from "@/modules/services";
import Link from "next/link";

  
  export async function ProductTable(prop:{product:Awaited<ReturnType<typeof getProducts>>}) {
   
    const {product}=prop
   
  
    return (
      <div className="rounded-md border  shadow-sm">
        {/* Table Header with Actions */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <Package className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold">Product Management</h2>
          </div>
          <div className="flex gap-2">
            <Input 
              placeholder="Search products..." 
              className="max-w-xs"
            />
            <Button variant="default" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Product
            </Button>
          </div>
        </div>
  
        {/* Data Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px]">Product ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Stock</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {product.map((product:any) => (
              <TableRow key={product.id}>
                
                <TableCell className="font-medium">{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>
                  <Badge variant="outline">
                    <Tag className="w-3 h-3 mr-1" />
                    {product.category}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end">
                    <DollarSign className="w-3 h-3 mr-1 text-muted-foreground" />
                    {product.price}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end">
                    <BarChart2 className="w-3 h-3 mr-1 text-muted-foreground" />
                    {product.quntity}
                  </div>
                </TableCell>
                <TableCell>
                  {/* {product.status === "published" && (
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      Published
                    </Badge>
                  )}
                  {product.status === "draft" && (
                    <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">
                      Draft
                    </Badge>
                  )}
                  {product.status === "out_of_stock" && (
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                      Out of Stock
                    </Badge>
                  )} */}
                </TableCell>
                {/* <TableCell>{product.createdAt}</TableCell> */}
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </Button>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      <Link href={`/dashboard/product/${product.id}`}>
                      
                    
                      More details
                      <Eye className="w-4 h-4" />
                        </Link>
                    </Button>
                  
                  </div>
                </TableCell>
                    
              </TableRow>
            ))}
          </TableBody>
        </Table>
  
        {/* Pagination */}
        <div className="flex items-center justify-between p-4 border-t">
          <div className="text-sm text-muted-foreground">
            Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{" "}
            <span className="font-medium">32</span> products
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <ChevronsLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm">
              1
            </Button>
            <Button variant="outline" size="sm">
              <ChevronRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm">
              <ChevronsRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  }