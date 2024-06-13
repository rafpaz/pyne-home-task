import useFetchData from "./__hooks__/useFetchData";
import DashboardFilters from "./DashboardFilters";
import { filtersStore } from "@client/store";
import DashboardCard from "./DashboardCard";
import DashboardBreakdown from "./DashboardBreakdown";

const Dashboard = () => {
  const { loading, data } = useFetchData();

  return (
    <div className="relative flex flex-col space-y-20 w-full min-h-screen p-24">
      <DashboardFilters />
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-gray-900 bg-opacity-20 blur-sm">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-black"></div>
        </div>
      )}
      <div className="flex w-full space-x-20">
        <div className="flex flex-col justify-between">
          <DashboardCard
            title="Total Distance"
            content={`${data?.trip_distance.toLocaleString(undefined, { maximumFractionDigits: 0 })} ${
              filtersStore.use.distanceUnit() === "km" ? "km" : "mi."
            }`}
          />
          <DashboardCard
            title="Total Trip Time"
            content={`${((data?.duration_minutes ?? 0) / 60).toLocaleString(undefined, { maximumFractionDigits: 0 })} hours`}
          />
        </div>

        <div className="flex-1">
          <DashboardBreakdown prices={data?.prices} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
