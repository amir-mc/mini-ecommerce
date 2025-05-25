
import ProductDeatils from '@/modules/product/components/productdetails';
import { getProductsbyId } from '@/modules/services';
import { ProductWithImages } from '@/types';
import React from 'react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const data = await params;
  const { id } = data;


}

async function page({ params }: { params: Promise<{ id: string }> }) {
  const data = await params;
  const { id } = data;
  const product = (await getProductsbyId(id)) as ProductWithImages;


  return (
    <section>
    
      <ProductDeatils  {...product} />
    </section>
  );
}

export default page;