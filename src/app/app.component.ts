import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    console.log(this.createTaskForm );
  }

  initializeLoginForm(){
    this.createTaskForm = this.fb.group({
      name        : [null, [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/),]],
      description : [null, [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/),]],
      dueDate     : [null, Validators.required],
    });
  }

  getAllListdata(){
    this.TS.dataChange.subscribe(res=>{
      this.allListData=res;
    });
  }

  onSubmit(form: FormGroup) {
    // console.log(this.createTaskForm.value);
    let maxId=0;
    this.createTaskForm.controls['name'].setValue(this.createTaskForm.value.name.trim());
    this.createTaskForm.controls['description'].setValue(this.createTaskForm.value.description.trim());
    if(this.allListData.length){
      maxId= this.TS.findMaxId( this.allListData);
    }else{
      maxId=0;
    }  
    // this.createTaskForm.value.dueDate=JSON.stringify(this.createTaskForm.value.dueDate);
    this.allListData.push(this.createTaskForm.value);
    this.allListData[this.allListData.length-1].id= maxId+1;
    console.log(this.allListData);
    this.allListData.forEach(item=>{
      if(typeof(item.dueDate)!='string'){
        item.dueDate=JSON.parse(JSON.stringify(item.dueDate));
      }
    });
    
    this.TS.dataChange.next(this.allListData);

    console.log(this.createTaskForm , form.value);

    this.createTaskForm.reset();

    // console.log( this.allListData);
    // localStorage.setItem('x',JSON.stringify(this.allListData))
  }
 
  event$:any;
  btnName:string='Show Chart';
  navigate(){
    if(this.btnName=='Show List'){
      this.TS.chartCheck=false;
      this.router.navigate(['/', 'task-list']);
      this.btnName='Show Chart'
    }else if(this.btnName=='Show Chart'){
      this.TS.chartCheck=true;
      this.router.navigate(['/', 'chart']);
      this.btnName='Show List';
    }
    // this.clearValidators();
  }

  clearValidators(){
    this.createTaskForm.controls['name'].removeValidators([Validators.required]);
    this.createTaskForm.controls['name'].updateValueAndValidity();
    this.createTaskForm.controls['description'].removeValidators([Validators.required]);
    this.createTaskForm.controls['description'].updateValueAndValidity();
    this.createTaskForm.controls['dueDate'].removeValidators([Validators.required]);
    this.createTaskForm.controls['dueDate'].updateValueAndValidity();
  }

  

} 


