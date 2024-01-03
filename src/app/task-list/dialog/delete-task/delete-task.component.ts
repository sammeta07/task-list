import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskForm } from 'src/app/shared/task.model';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskForm,
  ) {
    // console.log('dialog data',this.data);
  }

  onCancel(data:string){
    this.dialogRef.close(data);
  }
  onDelete(data:TaskForm){
    this.dialogRef.close(data);
  }
}
