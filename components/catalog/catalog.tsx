// components/catalog/catalog.tsx
'use client'

import ImageToolkits from "@/components/imagetoolkit";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ProductWithImages } from "@/types";

interface CatalogListProps {
  product: ProductWithImages; // Single product, not an array
}


const CatalogList = ({ product }: CatalogListProps) => {
    return ( 
        <div className=" flex items-center justify-center py-2 px-5">
        <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {product.images.map((image) => (
            <CarouselItem key={image.id}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <ImageToolkits
                    src={image.images}
                    width={400}
                    height={400}
                    alt="Product image"
                    className="object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>
     );
}
 
export default CatalogList;