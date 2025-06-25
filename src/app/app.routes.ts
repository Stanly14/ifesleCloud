import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

export const routes: Routes = [
  { path: '', redirectTo: '/sideBar', pathMatch: 'full'},
  // { path: 'dashboard', component: DashboardComponent},
  { path: 'sideBar', component: SideBarComponent}
];
