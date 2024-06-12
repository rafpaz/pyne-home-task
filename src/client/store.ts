import { TaxiType } from "@prisma/client";
import { SummaryQuery } from "@server/validators/summaryQueryValidator";
import { createStore } from "zustand-x";

interface Filters {
  vendorId: string | null;
  taxiType: TaxiType | null;
  currency: SummaryQuery["currency"] | null;
  distanceUnit: SummaryQuery["distanceUnit"] | null;
}

export const filtersStore = createStore("filters")<Filters>(
  {
    vendorId: null,
    taxiType: null,
    currency: null,
    distanceUnit: null,
  },
  { devtools: { enabled: true } }
);
