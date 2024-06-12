-- CreateTable
CREATE TABLE "Trip" (
    "id" TEXT NOT NULL,
    "vendor_id" INTEGER NOT NULL,
    "lpep_pickup_datetime" TIMESTAMP(3),
    "lpep_dropoff_datetime" TIMESTAMP(3),
    "store_and_fwd_flag" TEXT,
    "ratecode_id" INTEGER,
    "puLocation_id" INTEGER NOT NULL,
    "doLocation_id" INTEGER NOT NULL,
    "passenger_count" INTEGER NOT NULL,
    "trip_distance" DOUBLE PRECISION NOT NULL,
    "fare_amount" DOUBLE PRECISION NOT NULL,
    "extra" DOUBLE PRECISION NOT NULL,
    "mta_tax" DOUBLE PRECISION NOT NULL,
    "tip_amount" DOUBLE PRECISION NOT NULL,
    "tolls_amount" DOUBLE PRECISION NOT NULL,
    "ehail_fee" DOUBLE PRECISION,
    "improvement_surcharge" DOUBLE PRECISION NOT NULL,
    "total_amount" DOUBLE PRECISION NOT NULL,
    "payment_type" INTEGER NOT NULL,
    "trip_type" INTEGER NOT NULL,
    "congestion_surcharge" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Trip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vendor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Vendor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RateCode" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "RateCode_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_vendor_id_fkey" FOREIGN KEY ("vendor_id") REFERENCES "Vendor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_ratecode_id_fkey" FOREIGN KEY ("ratecode_id") REFERENCES "RateCode"("id") ON DELETE SET NULL ON UPDATE CASCADE;
