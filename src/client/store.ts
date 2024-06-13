import { TaxiType } from "@prisma/client";
import { SummaryQuery } from "@server/validators/summaryQueryValidator";
import { createStore } from "zustand-x";

export type TaxiTypeOrAll = TaxiType | "all";

interface Filters {
  vendorId: string | null;
  taxiType: TaxiTypeOrAll | null;
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
