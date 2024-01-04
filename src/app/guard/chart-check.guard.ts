import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TaskServiceService } from '../task-list/task-service.service';

@Injectable({
  providedIn: 'root'
})
export class ChartCheckGuard implements CanLoad {
  constructor(public TS:TaskServiceService, private router: Router,){

  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.TS.chartCheck){
        return true;
      }else{
        this.router.navigate(['/', 'task-list']);
        return false;
      }
  }
}
