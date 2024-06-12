import { useEffect, useState } from "react";

import CustomSelect from "./components/CustomSelect/CusotmSelect";
import { currencies, distanceUnits, taxiTypes, vendors } from "./constants";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(
        "http://localhost:3008/summary?distanceUnit=km"
      );
      console.log("@@@ ~ result:", result);
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-8 min-h-screen">
      <div>
        <CustomSelect
          values={taxiTypes}
          placeholder="Taxi Type"
          selectLabel="Select Taxi Type"
          onValueChange={console.log}
        />
        <CustomSelect
          values={vendors}
          placeholder="Vendors"
          selectLabel="Select vendor"
          onValueChange={console.log}
        />
        <CustomSelect
          values={distanceUnits}
          placeholder="Distance Units"
          selectLabel="Select distance units"
          onValueChange={console.log}
        />
        <CustomSelect
          values={currencies}
          placeholder="Currencies"
          selectLabel="Select currency"
          onValueChange={console.log}
        />
      </div>
    </div>
  );
}

export default App;
