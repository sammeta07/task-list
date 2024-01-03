import { Injectable } from '@angular/core';
import { TaskForm } from '../shared/task.model';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  allListData: TaskForm[]=[
   {"name":"a1","description":"a1111","dueDate":"2024-01-02T18:30:00.000Z","id":1},
   {"name":"a2","description":"a2222","dueDate":"2024-01-02T18:30:00.000Z","id":2},
   {"name":"a3","description":"a3333","dueDate":"2024-01-02T18:30:00.000Z","id":3},
   {"name":"a4","description":"a4444","dueDate":"2024-01-02T18:30:00.000Z","id":4},
   {"name":"ex1","description":"ex1111","dueDate":"2023-12-31T18:30:00.000Z","id":18},
   {"name":"ex1","description":"ex2222","dueDate":"2023-12-31T18:30:00.000Z","id":19},
   {"name":"ex3","description":"ex3333","dueDate":"2024-01-01T18:30:00.000Z","id":20},
   {"name":"b1","description":"b1111","dueDate":"2024-01-03T18:30:00.000Z","id":5},
   {"name":"c1","description":"c1111","dueDate":"2024-01-03T18:30:00.000Z","id":6},
   {"name":"d1","description":"d1111","dueDate":"2024-01-04T18:30:00.000Z","id":7},
   {"name":"d2","description":"d2222","dueDate":"2024-01-04T18:30:00.000Z","id":8},
   {"name":"e1","description":"e1111","dueDate":"2024-01-05T18:30:00.000Z","id":9},
   {"name":"f1","description":"f1111","dueDate":"2024-01-06T18:30:00.000Z","id":10},
   {"name":"g1","description":"g1111","dueDate":"2024-01-07T18:30:00.000Z","id":11},
   {"name":"h1","description":"h1111","dueDate":"2024-01-08T18:30:00.000Z","id":12},
   {"name":"i1","description":"i1111","dueDate":"2024-01-09T18:30:00.000Z","id":13},
   {"name":"i2","description":"i2222","dueDate":"2024-01-09T18:30:00.000Z","id":14},
   {"name":"i3","description":"i3333","dueDate":"2024-01-09T18:30:00.000Z","id":15},
   {"name":"j1","description":"j1111","dueDate":"2024-01-10T18:30:00.000Z","id":16},
   {"name":"k1","description":"k1111","dueDate":"2024-01-12T18:30:00.000Z","id":17}
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
