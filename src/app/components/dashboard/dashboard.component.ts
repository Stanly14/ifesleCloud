import { Component, inject } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexPlotOptions,
  ApexDataLabels,
  ApexLegend,
  NgApexchartsModule
} from "ng-apexcharts";
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  chartSeries: ApexAxisChartSeries = [
    {
      name: "Year 2023",
      data: [44, 55, 41, 67, 22, 43,55,63,20,30,24,33]
    },
    {
      name: "Year 2024",
      data: [48, 50, 40, 65, 25, 40,70,80,40,38,22,50]
    },
    {
      name: "Year 2025",
      data: [20, 40, 25, 10, 12, 28,60,40,33,47,50,34]
    },
    {
      name: "Year 2026",
      data: [13, 36, 20, 8, 13, 27,33,40,38,43,50,60]
    }
  ];

  chartOptions: ApexChart = {
    type: "bar",
    height: 350,
    stacked: true,
    toolbar: { show: false },
    zoom: { enabled: false }
  };

  xAxis: ApexXAxis = {
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

  yAxis: ApexYAxis = {
    title: { text: "Security Rating" },
    labels: { formatter: (val) => val+'' , style: { colors: '#ccc' } }
  };

  plotOptions: ApexPlotOptions = {
    bar: {
      horizontal: false,
      borderRadius: 5
    }
  };

  dataLabels: ApexDataLabels = {
    enabled: true,
    formatter: (val) => `${val}`
  };

  chartColors = ["#66C2A5", "#1E90FF", "#20C997", "#A0D468"];

  chartLegend: ApexLegend = {
    position: "top",
    horizontalAlign: "left",
    labels: { colors: '#ccc' }
  };

  usageChartSeries: ApexNonAxisChartSeries = [80];

  usageChartOptions: ApexChart = {
    type: 'radialBar',
    height: 350,
    sparkline: {
      enabled: true
    }
  };

  usageChartLabels = [''];

  usagePlotOptions: ApexPlotOptions = {
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

  usageFill: ApexFill = {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'horizontal',
      gradientToColors: ['#8e44ad'],
      stops: [0, 100]
    }
  };

  usageStroke: ApexStroke = {
    lineCap: 'round'
  };
  subscriptionObj: Subscription = new Subscription();
  private serviceData = inject(DataService);
  dataList:any;
  columns: any;
  tableData: any 
  ngOnInit(){
    this.subscriptionObj.add(this.serviceData.getData().subscribe((res: any) => {
      if (res.grid_columns) {
        this.columns = res.grid_columns;
      }
      if (res.grid_data) {
        this.tableData = res.grid_data
      }
      console.log("column", this.columns);
      console.log("data", this.tableData);
    }))
  }
}
