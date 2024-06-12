import { Prisma } from "@prisma/client";
import { SummaryQuery } from "@server/validators/summaryQueryValidator";

const getFilters = (query: SummaryQuery): Prisma.TripWhereInput => {
  const where: Prisma.TripWhereInput = {
    ...(query.vendorId && { vendor_id: query.vendorId }),
    ...(query.taxiType && { taxi_type: query.taxiType }),
  };

  return where;
};

export default getFilters;
