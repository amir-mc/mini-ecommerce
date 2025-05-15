// app/product/catalog/page.tsx
import CatalogList from "@/components/catalog/catalog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "@/lib/prisma";


const Catalog = async ({ 
  searchParams 
}: { 
  searchParams: Promise<{ id: string }> 
}) => {
  // Await the searchParams promise
  const params = await searchParams;
  const { id } = params;

  if (!id) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h2 className="text-2xl font-bold">Product ID is missing</h2>
        <Button asChild className="mt-4">
          <Link href='/product'>Back to Products</Link>
        </Button>
      </div>
    );
  }

  const product = await prisma.product.findUnique({
    where: { id },
    include: { images: true }
  });

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <Button asChild className="mt-4">
          <Link href='/product'>Back to Products</Link>
        </Button>
      </div>
    );
  }

  return ( 
    <div className="flex flex-col items-center mx-auto my-4 max-w-7xl"> 
      <CatalogList product={product} />
      <Button asChild variant="outline" className="mt-8">
        <Link href='/product'>Back to Products</Link>
      </Button>
    </div>
  );
}
 
export default Catalog;