import { Prisma } from "@/generated/prisma";

export type ProductWithImages = Prisma.productGetPayload<{
  include: { images: true }
}>;