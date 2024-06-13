import CustomSelect from "@client/components/CustomSelect/CusotmSelect";
import {
  taxiTypes,
  vendors,
  currencies,
  distanceUnits,
} from "@client/constants";
import { filtersStore, TaxiTypeOrAll } from "@client/store";
import { SummaryQuery } from "@server/validators/summaryQueryValidator";

const DashboardFilters: React.FC = () => {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="mr-6">
          <CustomSelect
            values={taxiTypes}
            placeholder="Taxi Type"
            selectLabel="Select Taxi Type"
            onValueChange={(v: string) =>
              filtersStore.set.taxiType(v as TaxiTypeOrAll)
            }
          />
        </div>
        <CustomSelect
          values={vendors}
          placeholder="Vendors"
          selectLabel="Select vendor"
          onValueChange={filtersStore.set.vendorId}
        />
      </div>
      <div className="flex">
        <div className="mr-6">
          <CustomSelect
            values={currencies}
            placeholder="Currencies"
            selectLabel="Select currency"
            onValueChange={(v: string) =>
              filtersStore.set.currency(v as SummaryQuery["currency"])
            }
          />
        </div>
        <CustomSelect
          values={distanceUnits}
          placeholder="Distance Units"
          selectLabel="Select distance units"
          onValueChange={(v: string) =>
            filtersStore.set.distanceUnit(v as SummaryQuery["distanceUnit"])
          }
        />
      </div>
    </div>
  );
};

export default DashboardFilters;
