import CatalogList from "@/components/catalog/catalog";
import { prisma } from "@/lib/prisma";

interface Itemsinter {
  searchParams?: Record<string, string | string[] | undefined>;
}

export default async function CatalogPage({ searchParams }: Itemsinter) {
  const id = Array.isArray(searchParams?.id) ? searchParams?.id[0] : searchParams?.id;

  if (!id) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h2 className="text-2xl font-bold">Product ID is missing</h2>
      </div>
    );
  }

  const product = await prisma.product.findUnique({
    where: { id },
    include: { images: true },
  });

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h2 className="text-2xl font-bold">Product not found</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mx-auto my-4 max-w-7xl">
      <CatalogList product={product} />
    </div>
  );
}