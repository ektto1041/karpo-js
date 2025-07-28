import type { ChartConfiguration, ChartData } from "chart.js";
import { stackStatistics, statisticsColors } from "./data.js";

const data: ChartData<"doughnut"> = {
  labels: stackStatistics.map((item) => item.label),
  datasets: [
    {
      data: stackStatistics.map((item) => item.count),
      backgroundColor: statisticsColors,
      borderRadius: 8,
    },
  ],
};

const config: ChartConfiguration<"doughnut"> = {
  type: "doughnut",
  data: data,
  options: {
    rotation: -90,
    circumference: 180,
    aspectRatio: 2,
    plugins: {
      legend: {
        position: "right",
      },
    },
  },
};

new Chart(document.getElementById("graph") as HTMLCanvasElement, config);
