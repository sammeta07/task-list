import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskForm } from 'src/app/shared/task.model';
import { TaskServiceService } from '../../task-service.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  editData!:TaskForm;
  createTaskForm!: FormGroup;
  todayDate:Date = new Date();
  constructor(
    private fb: FormBuilder,
    public TS:TaskServiceService,
    public dialogRef: MatDialogRef<EditTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskForm,
  ) {
    // console.log('dialog data',this.data);
    this.editData=JSON.parse(JSON.stringify(this.data));
  }

  onCancel(data:string){
    this.dialogRef.close(data);
  }
  onSave(){
    // console.log(this.data);
    this.dialogRef.close(this.data);
  }

  ngOnInit(): void {
    this.initializeLoginForm();
  }

  initializeLoginForm(){
    this.createTaskForm = this.fb.group({
      name        : [this.editData.name, Validators.required],
      description : [this.editData.description, Validators.required],
      dueDate     : [this.editData.dueDate, Validators.required],
    });
  }

  onSubmit(form: FormGroup) {
    // console.log(this.createTaskForm , form.value);
       this.dialogRef.close(form.value);
  }
}
