import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  ApexChart,
  NgApexchartsModule
} from "ng-apexcharts";
import { DataService } from '../../services/data.service';
import { HighlightDirective } from './../../directives/highlight.directive';
import { Subscription } from 'rxjs';
import { ProgressBarDirective } from '../../directives/progress-bar.directive';
import { PaginationComponent } from '../pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { CHART } from '../../constants/chart';
import { Columns, User } from '../../models/dashboard';
import { ConfirmationServiceService } from '../../services/confirmation-service.service';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgApexchartsModule, HighlightDirective, ProgressBarDirective, PaginationComponent, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private confirmation: ConfirmationServiceService) { }
  chartConfig = CHART
  chartOptions: ApexChart = {
    type: "bar",
    height: 350,
    stacked: true,
    toolbar: { show: false },
    zoom: { enabled: false }
  };

  usageChartOptions: ApexChart = {
    type: 'radialBar',
    height: 350,
    sparkline: {
      enabled: true
    }
  };
  subscriptionObj: Subscription = new Subscription();
  isLoading: boolean = true;
  private serviceData = inject(DataService);
  @Output() change = new EventEmitter<number>();
  buttonIndexes: number[] = Array.from({ length: 10 }, (_, i) => i + 1);
  currentPage: number = 1;
  dataList: any[] = [];
  columns: Columns[] = [];
  tableData: User[] = [];
  ngOnInit(): void{
    this.subscriptionObj.add(this.serviceData.getData().subscribe((res: any) => {
      if (res.grid_columns) {
        this.columns = res.grid_columns;
      }
      if (res.grid_data) {
        this.dataList = res.grid_data
      }
      setTimeout(()=> {
        this.isLoading=false
      },2000)
    }))
    if(this.dataList.length) {
      for (let i = 0; i < 10; i++) {
        this.tableData.push(this.dataList[i])
      }
    }
  }
  deleteRow(event: any): void {
    const confirmed = this.confirmation.open(
      'Confirm Deletion',
      'Are you sure you want to delete this item?'
    );
  }
  changePage(page: number): void {
    this.currentPage = page;
    this.tableData = [];
    for (let i = this.currentPage * 10; i < (this.currentPage * 10)+10; i++) {
      this.tableData.push(this.dataList[i])
    }
  }
  toggleAll(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.tableData.forEach(item => item.selected = isChecked);
  }
}
