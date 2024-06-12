import CustomSelect from "@client/components/CustomSelect/CusotmSelect";
import {
  currencies,
  distanceUnits,
  taxiTypes,
  vendors,
} from "@client/constants";
import { filtersStore } from "@client/store";
import { TaxiType } from "@prisma/client";
import { SummaryQuery } from "@server/validators/summaryQueryValidator";
import useFetchData from "./__hooks__/useFetchData";

const Dashboard = () => {
  const data = useFetchData();
  return (
    <div>
      <CustomSelect
        values={taxiTypes}
        placeholder="Taxi Type"
        selectLabel="Select Taxi Type"
        onValueChange={(v: string) => filtersStore.set.taxiType(v as TaxiType)}
      />
      <CustomSelect
        values={vendors}
        placeholder="Vendors"
        selectLabel="Select vendor"
        onValueChange={filtersStore.set.vendorId}
      />
      <CustomSelect
        values={distanceUnits}
        placeholder="Distance Units"
        selectLabel="Select distance units"
        onValueChange={(v: string) =>
          filtersStore.set.distanceUnit(v as SummaryQuery["distanceUnit"])
        }
      />
      <CustomSelect
        values={currencies}
        placeholder="Currencies"
        selectLabel="Select currency"
        onValueChange={(v: string) =>
          filtersStore.set.currency(v as SummaryQuery["currency"])
        }
      />
    </div>
  );
};

export default Dashboard;
