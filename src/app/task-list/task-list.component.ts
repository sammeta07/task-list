import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { TaskForm } from '../shared/task.model';
import { TaskServiceService } from './task-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteTaskComponent } from './dialog/delete-task/delete-task.component';
import { EditTaskComponent } from './dialog/edit-task/edit-task.component';





@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, AfterViewInit {
  dataSource!: MatTableDataSource<TaskForm>;
  displayedColumns: string[] = ['name', 'description', 'dueDate', 'action'];
  allListData:TaskForm[]=[];
  searchText!:string;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(
    public TS:TaskServiceService,
    public dialog: MatDialog,
    ) {
    
  }


  ngOnInit(): void {
    this.getData();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getData(){
    this.TS.dataChange.subscribe(res=>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  clearSearch(){
    this.searchText='';
    this.TS.dataChange.subscribe(res=>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }



  deleteTask(row:TaskForm){
    const dialogRef = this.dialog.open(DeleteTaskComponent, {
      data: row,
      disableClose: true 
    });
    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('The dialog was closed',result);
      if(result=='CANCEL'){
      }else{
        this.TS.dataChange.subscribe(res=>{
          this.allListData=res;
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        });
        let index = this.allListData.findIndex(n => n.id==result.id);
        this.allListData.splice(index,1);
        this.TS.dataChange.next(this.allListData);
      }
    });
  }
  editTask(row:TaskForm){
    const dialogRef = this.dialog.open(EditTaskComponent, {
      data: row,
      disableClose: true 
    });
    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('The dialog was closed',result);
      if(result=='CANCEL'){
      }else{
        result.description=  result.description.trim();
        result.name=  result.name.trim();
        this.TS.dataChange.subscribe(res=>{
          this.allListData=res;
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        });
        let index = this.allListData.findIndex(n => n.id==row.id);
        this.allListData[index]=result;
        this.TS.dataChange.next(this.allListData);
      }
    });
  }
}

