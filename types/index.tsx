import { Prisma } from "@/generated/prisma";

export type ProductWithImages = Prisma.productGetPayload<{
  include: { images: true }
}>;

export interface ImageKitUploadResponse {
  fileId: string;
  name: string;
  url: string;
  thumbnailUrl: string;
  height: number;
  width: number;
  size: number;
  filePath: string;
  tags?: string[];
  isPrivateFile: boolean;
  customCoordinates: string | null;
  fileType: string;
}

export type ProductWithImagesss = {
  id: string;
  name: string;
  price: number | null;
  quantity: number | null;
  description: string;
  // ... other product fields
  images: {
    id: string;
    images: string;
    productId: string | null;
  }[];
};


