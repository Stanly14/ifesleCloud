import { ChartType } from "ng-apexcharts";

export const CHARTSERIES: ApexAxisChartSeries = [
  {
    name: "Year 2023",
    data: [44, 55, 41, 67, 22, 43, 55, 63, 20, 30, 24, 33]
  },
  {
    name: "Year 2024",
    data: [48, 50, 40, 65, 25, 40, 70, 80, 40, 38, 22, 50]
  },
  {
    name: "Year 2025",
    data: [20, 40, 25, 10, 12, 28, 60, 40, 33, 47, 50, 34]
  },
  {
    name: "Year 2026",
    data: [13, 36, 20, 8, 13, 27, 33, 40, 38, 43, 50, 60]
  }
];

const CHARTOPTIONS: ApexChart = {
  type: "bar" as ChartType,
  height: 350,
  stacked: true,
  toolbar: { show: false },
  zoom: { enabled: false }
}; 

export const XAXIS: ApexXAxis = {
  categories: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  title: { text: "Month" },
  labels: { style: { colors: '#ccc' } }
};

export const YAXIS: ApexYAxis = {
  title: { text: "Security Rating" },
  labels: { formatter: (val) => val + '', style: { colors: '#ccc' } }
};

export const PLOTOPTIONS: ApexPlotOptions = {
  bar: {
    horizontal: false,
    borderRadius: 5
  }
};

export const DATALABELS: ApexDataLabels = {
  enabled: true,
  formatter: (val) => `${val}`
};

export const CHARTCOLORS = ["#66C2A5", "#1E90FF", "#20C997", "#A0D468"];

export const CHARTLEGEND: ApexLegend = {
  position: "top",
  horizontalAlign: "left",
  labels: { colors: '#ccc' }
};

export const USAGECHARTSERIES: ApexNonAxisChartSeries = [80];

export const USAGECHARTOPTIONS: ApexChart = {
  type: 'radialBar',
  height: 350,
  sparkline: {
    enabled: true
  }
};

export const USAGEPLOTOPTIONS: ApexPlotOptions = {
  radialBar: {
    startAngle: -90,
    endAngle: 90,
    track: {
      background: '#e7e7e7',
      strokeWidth: '100%'
    },
    hollow: {
      margin: 0,
      size: '70%',
    },
    dataLabels: {
      name: {
        show: false
      },
      value: {
        offsetY: -10,
        fontSize: '34px',
        color: '#333',
        formatter: () => '240'
      }
    }
  }
};

export const USAGEFILL: ApexFill = {
  type: 'gradient',
  gradient: {
    shade: 'light',
    type: 'horizontal',
    gradientToColors: ['#8e44ad'],
    stops: [0, 100]
  }
};

export const USAGESTROKE: ApexStroke = {
  lineCap: 'round'
};

export const CHART = {
  chartSeries: CHARTSERIES, chartOptions: CHARTOPTIONS, xAxis: XAXIS, yAxis: YAXIS, plotOptions: PLOTOPTIONS, 
  dataLabels: DATALABELS, chartColors: CHARTCOLORS, chartLegend: CHARTLEGEND, usageChartSeries: USAGECHARTSERIES,
  usageChartOptions: USAGECHARTOPTIONS, usagePlotOptions: USAGEPLOTOPTIONS, usageFill: USAGEFILL, usageStroke: USAGESTROKE
} 