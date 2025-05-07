/*
  Warnings:

  - You are about to drop the column `createdAt` on the `image` table. All the data in the column will be lost.
  - You are about to drop the column `fileId` on the `image` table. All the data in the column will be lost.
  - You are about to drop the column `format` on the `image` table. All the data in the column will be lost.
  - You are about to drop the column `height` on the `image` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `image` table. All the data in the column will be lost.
  - You are about to drop the column `width` on the `image` table. All the data in the column will be lost.
  - Added the required column `images` to the `image` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "image_fileId_key";

-- AlterTable
ALTER TABLE "image" DROP COLUMN "createdAt",
DROP COLUMN "fileId",
DROP COLUMN "format",
DROP COLUMN "height",
DROP COLUMN "url",
DROP COLUMN "width",
ADD COLUMN     "images" TEXT NOT NULL;
