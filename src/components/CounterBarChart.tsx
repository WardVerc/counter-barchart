import { BarChart } from "@mui/x-charts";
import { getBarColor } from "../utils/utils";
import type { Color } from "./CounterButton";

export interface ChartItem {
  label: string;
  count: number;
  color: Color;
}

const CounterBarChart = ({ data }: { data: ChartItem[] }) => {
  const sorted = [...data].sort((a, b) => b.count - a.count);

  return (
    <BarChart
      series={sorted.map((item) => ({
        data: [item.count],
        label: item.label,
        color: getBarColor(item.color),
      }))}
      barLabel="value"
      height={300}
    />
  );
};

export default CounterBarChart;
