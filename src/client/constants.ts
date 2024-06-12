import { TaxiType } from "@prisma/client";

export const taxiTypes = [
  { value: "all", display: "All" },
  { value: TaxiType.Green, display: "Green" },
  { value: TaxiType.Yellow, display: "Yellow" },
];

export const vendors = [
  { value: "all", display: "All" },
  { value: "1", display: "Vendor 1" },
  { value: "2", display: "Vendor 2" },
];

export const distanceUnits = [
  { value: "mile", display: "Miles" },
  { value: "km", display: "Kilometers" },
];

export const currencies = [
  { value: "USD", display: "USD" },
  { value: "EUR", display: "EUR" },
];
