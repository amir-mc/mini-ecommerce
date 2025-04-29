/*
  Warnings:

  - Added the required column `category` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "categorylist" AS ENUM ('MOBILE', 'LAPTOP', 'OTHER');

-- AlterTable
ALTER TABLE "product" ADD COLUMN     "category" "categorylist" NOT NULL;
