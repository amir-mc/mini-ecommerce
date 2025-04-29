-- CreateTable
CREATE TABLE "product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION DEFAULT 0.0,
    "quntity" INTEGER DEFAULT 0,
    "description" TEXT NOT NULL,
    "Display" TEXT NOT NULL,
    "Processor" TEXT NOT NULL,
    "RAM" INTEGER NOT NULL,
    "memory" INTEGER NOT NULL,
    "OperatingSystem" TEXT NOT NULL,
    "Battery" TEXT NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);
