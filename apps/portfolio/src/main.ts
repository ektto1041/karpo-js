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

console.log(stackStatistics);

new Chart(document.getElementById("graph") as HTMLCanvasElement, config);

// dev-card onClick
const html = document.querySelector("html") as HTMLHtmlElement;

const devCards: HTMLLIElement[] = Array.from(
  document.getElementsByClassName("dev-card")
) as HTMLLIElement[];

devCards.forEach((devCard) => {
  devCard.addEventListener("click", () => {
    const modalBackground = devCard.querySelector(
      ".modal-background"
    ) as HTMLDivElement | null;

    if (modalBackground) modalBackground.style.display = "flex";

    html.style.overflow = "hidden";
  });
});

function onModalBackgroundClick(modalBackground: HTMLDivElement) {}

const modalBackgrounds = Array.from(
  document.querySelectorAll(".modal-background")
) as HTMLDivElement[];

modalBackgrounds.forEach((modalBackground) => {
  modalBackground.addEventListener("click", (e) => {
    e.stopPropagation();
    modalBackground.style.display = "none";
    html.style.overflow = "auto";
  });
});

const modalBoxes = Array.from(
  document.querySelectorAll(".modal-box")
) as HTMLDivElement[];

modalBoxes.forEach((modalBox) => {
  modalBox.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});
