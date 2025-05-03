import type { ChartConfiguration, ChartData } from "chart.js";

const data: ChartData<"doughnut"> = {
  labels: ["javascript", "typescript", "React.js"],
  datasets: [
    {
      data: [100, 100, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
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
