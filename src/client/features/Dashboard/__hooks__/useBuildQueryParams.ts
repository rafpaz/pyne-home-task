import { filtersStore } from "@client/store";

const useBuildQueryParams = () => {
  const vendorId = filtersStore.use.vendorId();
  const taxiType = filtersStore.use.taxiType();
  const currency = filtersStore.use.currency();
  const distanceUnit = filtersStore.use.distanceUnit();

  return new URLSearchParams({
    ...(vendorId && { vendorId }),
    ...(taxiType && { taxiType }),
    ...(currency && { currency }),
    ...(distanceUnit && { distanceUnit }),
  }).toString();
};

export default useBuildQueryParams;
