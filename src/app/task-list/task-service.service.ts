import { Injectable } from '@angular/core';
import { TaskForm } from '../shared/task.model';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  allListData: TaskForm[]=[
    // { id:1,name :"task 1" ,description: "task 1 description", dueDate : "2024-01-10T18:30:00.000Z" },
    // { id:2,name :"task 2" ,description: "task 2 description", dueDate : "2024-01-10T19:30:00.000Z" },
    // { id:3,name :"task 3" ,description: "task 3 description", dueDate : "2024-01-10T20:30:00.000Z" },
    // { id:4,name :"task 4" ,description: "task 4 description", dueDate : "2024-01-10T11:30:00.000Z" },
    // { id:5,name :"task 5" ,description: "task 5 description", dueDate : "2024-01-10T10:30:00.000Z" },
  ]
  dataChange = new BehaviorSubject<TaskForm[]>(this.allListData);
  constructor() { }

  findMaxId(data:TaskForm[]):number{
    const flatArray: number[] = [];
    data.forEach((element) => {
      flatArray.push(element.id);
    });
    return Math.max(...flatArray);
  }
}
