const convertPrices = <T>(
  prices: T extends Record<string, number | null> ? T : never,
  conversionValue: number
): T => {
  console.log("conversion value: ", conversionValue);
  const convertedPrices = Object.entries(prices).reduce<
    Record<string, number | null>
  >((acc, [property, price]) => {
    if (price === null) {
      acc[property] = null;
    } else {
      acc[property] = price * conversionValue;
    }

    return acc;
  }, {});

  return convertedPrices as T;
};

export default convertPrices;
