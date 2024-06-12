const sortSumEntries = (sumObject: Record<string, number | null>) => {
  const entries = Object.entries(sumObject);
  const sortedEntires = entries.sort((a, b) => {
    return (b?.[1] ?? 0) - (a?.[1] ?? 0);
  });

  // make sure total_amount is always the last
  sortedEntires.push(sortedEntires.shift() as [string, number | null]);

  return Object.fromEntries(sortedEntires);
};

export default sortSumEntries;
