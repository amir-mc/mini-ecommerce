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
// import { useSearchParams } from "next/navigation";

const CatalogList = () => {
    // const params= useSearchParams()
    // const id = params.get('id')
    return ( 
        <div className=" flex items-center justify-center py-2 px-5">
        <Carousel className="w-full max-w-xs  ">
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1 ">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <ImageToolkits
                    src={`/phone${index+1}.jpg`}
                    width={400}
                    height={400}
                    alt=""
                    className=""
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