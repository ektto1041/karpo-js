interface StackStatisticsItem {
  label: string;
  count: number;
}

const stackStatistics: StackStatisticsItem[] = [
  {
    label: "React.js",
    count: 10,
  },
  {
    label: "Next.js",
    count: 2,
  },
  {
    label: "styled components",
    count: 3,
  },
  {
    label: "typescript",
    count: 6,
  },
  {
    label: "Nest.js",
    count: 1,
  },
].sort((a, b) => b.count - a.count);

const statisticsColors = [
  "#2B50ABFF",
  "#2B50ABDD",
  "#2B50ABBB",
  "#2B50AB99",
  "#2B50AB77",
];

export { stackStatistics, statisticsColors };
