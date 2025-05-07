/*
  Warnings:

  - You are about to drop the column `images` on the `image` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[fileId]` on the table `image` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fileId` to the `image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "image" DROP COLUMN "images",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "fileId" TEXT NOT NULL,
ADD COLUMN     "format" TEXT,
ADD COLUMN     "height" INTEGER,
ADD COLUMN     "url" TEXT NOT NULL,
ADD COLUMN     "width" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "image_fileId_key" ON "image"("fileId");
