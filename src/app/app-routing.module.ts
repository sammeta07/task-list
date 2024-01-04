import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './chart/chart.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ChartCheckGuard } from './guard/chart-check.guard';

const routes: Routes = [
  
  { path: '', redirectTo: 'task-list', pathMatch: 'full'},
  { path: 'chart',
    canLoad : [ChartCheckGuard], 
    loadChildren: () => import('../app/chart/chart.module').then(m => m.ChartsModule) 
  },
  { path: 'task-list', loadChildren: () => import('../app/task-list/task-list.module').then(m => m.TaskListModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
