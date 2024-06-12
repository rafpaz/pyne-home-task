import { z } from "zod";
import { TaxiType } from "@prisma/client";

const summaryQueryValidator = z.object({
  vendorId: z
    .string()
    .regex(/^\d+$/, "VendorId must be a valid number")
    .transform(Number)
    .optional(),
  taxiType: z.enum([TaxiType.Green, TaxiType.Yellow]).optional(),
  distanceUnit: z.enum(["mile", "km"]).optional(),
  currency: z.enum(["USD", "EUR"]).optional(),
});

export type SummaryQuery = z.infer<typeof summaryQueryValidator>;

export { summaryQueryValidator };
