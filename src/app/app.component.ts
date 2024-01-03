import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskForm } from './shared/task.model';
import { TaskServiceService } from './task-list/task-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationStart, Event as NavigationEvent } from '@angular/router';

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
  todayDate:Date = new Date();


  constructor(
    private fb: FormBuilder,
    public TS:TaskServiceService,
    private router: Router,
    private route: ActivatedRoute
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
    let maxId=0;
    this.createTaskForm.controls['name'].setValue(this.createTaskForm.value.name.trim());
    this.createTaskForm.controls['description'].setValue(this.createTaskForm.value.description.trim());
    if(this.allListData.length){
      maxId= this.TS.findMaxId( this.allListData);
    }else{
      maxId=0;
    }    
    this.allListData.push(this.createTaskForm.value);
    this.allListData[this.allListData.length-1].id= maxId+1;
    this.TS.dataChange.next(this.allListData);
    this.createTaskForm.reset();
    console.log( this.allListData);

    localStorage.setItem('x',JSON.stringify(this.allListData))
  }
 
  event$:any;
  btnName:string='Show Chart';
  currentPath:string='';
  navigate(){
    this.currentPath=window.location.pathname;
    if(this.currentPath=='/task-list'){
      this.router.navigate(['/', 'chart']);
      this.btnName='Show List'
    }else if(this.currentPath=='/chart'){
      this.router.navigate(['/', 'task-list']);
      this.btnName='Show Chart'
    }
  }

} 


