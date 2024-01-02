import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskForm } from './shared/task.model';
import { TaskServiceService } from './task-list/task-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'task-list';
  createTaskForm!: FormGroup;
  createTaskFormData:TaskForm[]=[];
  allListData:TaskForm[]=[];

  constructor(
    private fb: FormBuilder,
    public TS:TaskServiceService
  ){

  }

  ngOnInit() {
    this.getAllListdata();
    this.initializeLoginForm();
  }

  initializeLoginForm(){
    this.createTaskForm = this.fb.group({
      name        : [null, Validators.required],
      description : [null, Validators.required],
      dueDate     : [null, Validators.required],
    });
  }

  getAllListdata(){
    this.TS.dataChange.subscribe(res=>{
      this.allListData=res;
    });
  }

  onSubmit(form: FormGroup) {
    // console.log(this.createTaskForm , form.value);
    this.createTaskForm.controls['name'].setValue(this.createTaskForm.value.name.trim());
    this.createTaskForm.controls['description'].setValue(this.createTaskForm.value.description.trim());
    let x= this.TS.findMaxId( this.allListData);
    this.allListData.push(this.createTaskForm.value);
    this.allListData[this.allListData.length-1].id= x+1;
    this.TS.dataChange.next(this.allListData);
    this.createTaskForm.reset();


    console.log( this.allListData);
    
  }

} 


