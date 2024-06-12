import { Prisma, PrismaClient, TaxiType } from "@prisma/client";
import { ParquetReader } from "@dsnp/parquetjs";

const vendors = [
  { id: 1, name: "Creative Mobile Technologies" },
  { id: 2, name: "VeriFone Inc." },
];
const rateCodes = [
  { id: 1, name: "Standard rate" },
  { id: 2, name: "JFK" },
  { id: 3, name: "Newark" },
  { id: 4, name: "Nassau or Westchester" },
  { id: 5, name: "Negotiated fare" },
  { id: 6, name: "Group ride" },
  { id: 99, name: "Other" },
];

const prisma = new PrismaClient();

async function seed() {
  const seedData = [
    {
      taxiType: TaxiType.Green,
      filePath: "./data/green_tripdata_2023-01.parquet",
    },
    {
      taxiType: TaxiType.Yellow,
      filePath: "./data/yellow_tripdata_2023-01.parquet",
    },
  ];

  await Promise.all([
    prisma.vendor.createMany({
      data: vendors,
      skipDuplicates: true,
    }),
    prisma.rateCode.createMany({
      data: rateCodes,
      skipDuplicates: true,
    }),
  ]);

  seedData.forEach(async ({ filePath, taxiType }) => {
    const reader = await ParquetReader.openFile(filePath);
    const cursor = reader.getCursor();

    let record: any;
    const records: Prisma.TripCreateManyInput[] = [];
    let counter = 0;
    while ((record = await cursor.next())) {
      counter++;
      console.log("@@@ ~ counter:", counter.toLocaleString("en-US"));

      records.push({
        taxi_type: taxiType,
        vendor_id: Number(record.VendorID),
        pickup_datetime:
          record.lpep_pickup_datetime ?? record.tpep_pickup_datetime,
        dropoff_datetime:
          record.lpep_dropoff_datetime ?? record.tpep_dropoff_datetime,
        duration_minutes:
          (new Date(
            record.lpep_dropoff_datetime ?? record.tpep_dropoff_datetime
          ).getTime() -
            new Date(
              record.lpep_pickup_datetime ?? record.tpep_pickup_datetime
            ).getTime()) /
          (1000 * 60),
        store_and_fwd_flag: record.store_and_fwd_flag,
        ratecode_id: record.RatecodeID ? Number(record.RatecodeID) : null,
        puLocation_id: Number(record.PULocationID),
        doLocation_id: Number(record.DOLocationID),
        passenger_count: Number(record.passenger_count),
        trip_distance: Number(record.trip_distance),
        fare_amount: Number(record.fare_amount),
        extra: Number(record.extra),
        mta_tax: Number(record.mta_tax),
        tip_amount: Number(record.tip_amount),
        tolls_amount: Number(record.tolls_amount),
        ehail_fee: Number(record.ehail_fee),
        improvement_surcharge: Number(record.improvement_surcharge),
        total_amount: Number(record.total_amount),
        payment_type: Number(record.payment_type),
        trip_type: Number(record.trip_type),
        congestion_surcharge: Number(record.congestion_surcharge),
      });

      if (counter % 50_000 === 0) {
        await prisma.trip.createMany({ data: records });
        records.length = 0;
      }
    }

    if (records.length > 0) {
      await prisma.trip.createMany({ data: records });
      records.length = 0;
    }

    await reader.close();
  });
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
