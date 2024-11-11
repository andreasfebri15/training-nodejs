/*
  Warnings:

  - You are about to drop the `_CarBlogs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CarBlogs" DROP CONSTRAINT "_CarBlogs_A_fkey";

-- DropForeignKey
ALTER TABLE "_CarBlogs" DROP CONSTRAINT "_CarBlogs_B_fkey";

-- DropTable
DROP TABLE "_CarBlogs";

-- CreateTable
CREATE TABLE "BlogCar" (
    "carId" TEXT NOT NULL,
    "blogId" TEXT NOT NULL,

    CONSTRAINT "BlogCar_pkey" PRIMARY KEY ("carId","blogId")
);

-- AddForeignKey
ALTER TABLE "BlogCar" ADD CONSTRAINT "BlogCar_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlogCar" ADD CONSTRAINT "BlogCar_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
