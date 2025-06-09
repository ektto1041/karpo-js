import { stackStatistics, statisticsColors } from "./data.js";
var data = {
  labels: stackStatistics.map(function (item) {
    return item.label;
  }),
  datasets: [{
    data: stackStatistics.map(function (item) {
      return item.count;
    }),
    backgroundColor: statisticsColors,
    borderRadius: 8
  }]
};
var config = {
  type: "doughnut",
  data: data,
  options: {
    rotation: -90,
    circumference: 180,
    aspectRatio: 2,
    plugins: {
      legend: {
        position: "right"
      }
    }
  }
};
console.log(stackStatistics);
new Chart(document.getElementById("graph"), config);