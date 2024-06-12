/*
  Warnings:

  - Added the required column `taxi_type` to the `Trip` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TaxiType" AS ENUM ('Yellow', 'Green');

-- AlterTable
ALTER TABLE "Trip" ADD COLUMN     "taxi_type" "TaxiType" NOT NULL;
