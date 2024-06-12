/*
  Warnings:

  - You are about to drop the column `lpep_dropoff_datetime` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `lpep_pickup_datetime` on the `Trip` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Trip" DROP COLUMN "lpep_dropoff_datetime",
DROP COLUMN "lpep_pickup_datetime",
ADD COLUMN     "dropoff_datetime" TIMESTAMP(3),
ADD COLUMN     "pickup_datetime" TIMESTAMP(3);
