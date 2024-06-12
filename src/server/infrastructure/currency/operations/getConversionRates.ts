import axios from "axios";

export interface ConversionRates {
  result: string;
  documentation: string;
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
  base_code: string;
  conversion_rates: { [key: string]: number };
}

const getConversionRates = async (
  baseCurrency: string = "USD"
): Promise<ConversionRates["conversion_rates"]> => {
  console.log("before");
  const response = await axios.get<ConversionRates>(
    `https://v6.exchangerate-api.com/v6/3432b30c0ba6974a53bc4a66/latest/${baseCurrency}`
  );
  console.log("after");

  return response.data.conversion_rates;
};

export default getConversionRates;
