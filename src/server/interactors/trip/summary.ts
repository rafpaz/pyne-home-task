import getFilters from "@server/__helpers__/getFilters";
import sortSumEntries from "@server/__helpers__/sortEntries";
import DBClient from "@server/infrastructure/db/DBClient";
import { SummaryQuery } from "@server/validators/summaryQueryValidator";
import { MILES_TO_KM } from "./constants";
import CurrencyClient from "@server/infrastructure/currency/CurrencyClient";
import convertPrices from "@server/__helpers__/convertPrices";

const tripSummary = async (queryParams: SummaryQuery) => {
  const where = getFilters(queryParams);

  const aggr = await DBClient.tripSummary(where);

  const { duration_minutes, trip_distance, ...breakdown } = aggr._sum;

  let prices = breakdown;

  if (queryParams.currency && queryParams.currency !== "USD") {
    const rates = await CurrencyClient.getConversionRates();
    prices = convertPrices(breakdown, rates[queryParams.currency]);
  }

  return {
    prices: sortSumEntries(prices),
    duration_minutes,
    trip_distance:
      queryParams.distanceUnit === "km"
        ? (trip_distance ?? 0) * MILES_TO_KM
        : trip_distance,
  };
};

export default tripSummary;
