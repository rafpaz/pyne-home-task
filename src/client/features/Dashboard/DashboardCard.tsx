import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@client/components/ui/card";
import { filtersStore } from "@client/store";

interface DashboardCardProps {
  title: string;
  content: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ content, title }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
};

export default DashboardCard;
