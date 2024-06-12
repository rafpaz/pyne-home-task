import { useEffect, useState } from "react";
import useBuildQueryParams from "./useBuildQueryParams";
import axios from "axios";

interface Summary {
  prices: {
    fare_amount: number;
    tip_amount: number;
    mta_tax: number;
    extra: number;
    improvement_surcharge: number;
    tolls_amount: number;
    total_amount: number;
  };
  duration_minutes: number;
  trip_distance: number;
}

const useFetchData = () => {
  const [data, setData] = useState<Summary | null>(null);
  const queryParams = useBuildQueryParams();

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `${import.meta.env.VITE_ENDPOINT}/summary${queryParams ? "?" + queryParams : ""}`
      );
      setData(result.data);
    }
    fetchData();
  }, [queryParams]);

  return data;
};

export default useFetchData;
