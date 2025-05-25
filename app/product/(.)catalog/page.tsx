import { Metadata, ResolvingMetadata } from 'next'
import CatalogList from "@/components/catalog/catalog";
import { prisma } from "@/lib/prisma";

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function CatalogPage({ searchParams }: Props) {
  const id = searchParams.id as string; // Cast to string since we know the type

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