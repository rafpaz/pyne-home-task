import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@client/components/ui/card";
import { Summary } from "./__hooks__/useFetchData";
import { snamkecaseToWords } from "./__helpers__/snakecaseToWords";
import { filtersStore } from "@client/store";

interface DashboardBreakdownProps {
  prices?: Summary["prices"];
}

const DashboardBreakdown: React.FC<DashboardBreakdownProps> = ({ prices }) => {
  if (!prices) return null;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-2">
          {Object.entries(prices).map(([key, value]) => (
            <div key={key} className="flex justify-between">
              <p className="mr-10">{snamkecaseToWords(key)}</p>
              <p>
                {Number(value).toLocaleString(undefined, {
                  style: "currency",
                  currency: filtersStore.use.currency() ?? "USD",
                  maximumFractionDigits: 0,
                })}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardBreakdown;
