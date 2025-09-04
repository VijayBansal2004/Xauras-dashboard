// Daily Traffic Dashboards Default

import { position } from "@chakra-ui/react";

export const barChartDataDailyTraffic = [
  {
    name: "Daily Traffic",
    data: [20, 30, 40, 20, 45, 50, 30],
  },
];

export const barChartOptionsDailyTraffic = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["00", "04", "08", "12", "14", "16", "18"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#8f9bba",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: true,
      style: {
        colors: "#CBD5E0",
        fontSize: "14px",
      },
    },
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      colorStops: [
        [
          {
            offset: 0,
            color: "#4318FF",
            opacity: 1,
          },
          {
            offset: 100,
            color: "rgba(67, 24, 255, 1)",
            opacity: 0.28,
          },
        ],
      ],
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "40px",
    },
  },
};

// Consumption Users Reports

export const barChartDataConsumption = [
  {
    name: "Total Rewards",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
  },
  {
    name: "Total Staked",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
  },
];

export const barChartOptionsConsumption = {
  chart: {
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#8f9bba",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: false,
      style: {
        colors: "#8f9bba",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
  },

  grid: {
    borderColor: "rgba(163, 174, 208, 0.3)",
    show: true,
    yaxis: {
      lines: {
        show: false,
        opacity: 0.5,
      },
    },
    row: {
      opacity: 0.5,
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "solid",
    colors: ["#852df3", "#e08cfd"],
  },
  legend: {
    show: false,
  },
  colors: ["#852df3", "#e08cfd"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "20px",
    },
  },
};
export const pieChartOptions = {
  labels: ["Main leg", "Other legs"],
  colors: ["#852df3", "#852df334"],
  chart: {
    width: "200px",
  },
  states: {
    hover: {
      filter: { type: "none" },
    },
  },
  plotOptions: {
    pie: {
      donut: {
        size: "75%", // Adjust size to control the center hole space
      },
    },
  },
  legend: {
    position: "bottom",
    show: true,
    labels: {
      colors: "#fff",
      useSeriesColors: false,
    },
    // formatter: function (seriesName, opts) {
    //   const value = opts.w.globals.series[opts.seriesIndex];
    //   return `${seriesName} - $ ${value}`;
    // },
    markers: {
      size: 4, // smaller circle
      strokeWidth: 0, // removes white border
      strokeColor: "transparent",
      radius: 12, // keeps circle shape
    },
    itemMargin: {
      horizontal: 8, // space between circle and text
      vertical: 5, // space between legend rows
    },
    fontSize: 14,
    fontWeight: 700, // makes legend text bold (works in newer ApexCharts)
  },
  dataLabels: {
    enabled: true,
    formatter: function (val, opts) {
      const value = opts.w.config.series[opts.seriesIndex];
      return `$ ${value}`;
    },
  },
  hover: { mode: null },

  fill: {
    colors: ["#852df3", "#852df334"],
  },
  stroke: {
    show: false,
    width: 5,
    colors: ["#09090b"], // background color for spacing
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    y: {
      formatter: (val) => `$ ${val}`,
    },
  },
};

export const pieChartData = [21, 11];

// Total Spent Default

export const lineChartDataTotalSpent = [
  {
    name: "Current",
    data: [50, 64, 48, 66, 49, 68],
  },
];

export const lineChartOptionsTotalSpent = {
  chart: {
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 13,
      left: 0,
      blur: 10,
      opacity: 0.1,
      color: "#852df3",
    },
  },
  colors: ["#852df3"],
  markers: {
    size: 0,
    colors: "white",
    strokeColors: "#852df3",
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: "circle",
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    showNullDataPoints: true,
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    type: "line",
  },
  xaxis: {
    type: "numeric",
    categories: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
    labels: {
      style: {
        colors: "#8f9bba",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
    column: {
      color: ["#852df3"],
      opacity: 0.5,
    },
  },
  color: ["#852df3"],
};
