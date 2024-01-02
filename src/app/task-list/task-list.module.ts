import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskListRoutingModule } from './task-list-routing.module';
import { TaskListComponent } from './task-list.component';
import { AngularMaterialModule } from '../shared/material-design/material.module';
import { DeleteTaskComponent } from './dialog/delete-task/delete-task.component';
import { EditTaskComponent } from './dialog/edit-task/edit-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TaskListComponent,
    DeleteTaskComponent,
    EditTaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TaskListRoutingModule,
    AngularMaterialModule
  ]
})
export class TaskListModule { }
