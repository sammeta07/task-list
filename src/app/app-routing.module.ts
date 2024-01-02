import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'task-list', pathMatch: 'full'},
  { path: 'chart', loadChildren: () => import('../app/chart/chart.module').then(m => m.ChartModule) },
  { path: 'task-list', loadChildren: () => import('../app/task-list/task-list.module').then(m => m.TaskListModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
