import { Component } from '@angular/core';
import { DashboardComponent } from "../dashboard/dashboard.component";
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [DashboardComponent, PaginationComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  buttonIndexes: number[] = Array.from({ length: 10 }, (_, i) => i + 1);
  currentPage: number = 1;
  changePage(page: number): void {
    this.currentPage = page;
  }
}
