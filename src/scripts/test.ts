import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const rows = await prisma.trip.findMany({ take: 10 });
console.log(
  "@@@ ~ rows:",
  rows.reduce((acc, row) => acc + row.fare_amount, 0)
);

const result = await prisma.trip.aggregate({
  _sum: { total_amount: true, fare_amount: true },
  take: 10,
});
console.log("@@@ ~ result:", result);

await prisma.trip.deleteMany();
