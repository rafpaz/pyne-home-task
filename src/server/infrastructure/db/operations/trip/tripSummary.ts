import { Prisma } from "@prisma/client";
import { prisma } from "@server/infrastructure/db/client";

export default (where: Prisma.TripWhereInput) =>
  prisma.trip.aggregate({
    _sum: {
      duration_minutes: true,
      trip_distance: true,
      fare_amount: true,
      tip_amount: true,
      extra: true,
      total_amount: true,
      improvement_surcharge: true,
      mta_tax: true,
      tolls_amount: true,
    },
    where,
  });
