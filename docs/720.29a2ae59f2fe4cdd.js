"use strict";(self.webpackChunktask_list=self.webpackChunktask_list||[]).push([[720],{1720:(z,C,s)=>{s.r(C),s.d(C,{TaskListModule:()=>H});var h=s(6895),k=s(1635),_=s(8739),g=s(6308),r=s(3626),m=s(5412),t=s(4650),T=s(4859);let x=(()=>{class a{constructor(e,n){this.dialogRef=e,this.data=n}onCancel(e){this.dialogRef.close(e)}onDelete(e){this.dialogRef.close(e)}static#t=this.\u0275fac=function(n){return new(n||a)(t.Y36(m.so),t.Y36(m.WI))};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-delete-task"]],decls:10,vars:1,consts:[["mat-dialog-content","",2,"border","1px solid rgb(231, 222, 222)","padding","10px","margin","5px","border-radius","5px"],[2,"font-weight","500"],["mat-dialog-actions",""],["mat-raised-button","","color","warn",3,"click"],["mat-button","","cdkFocusInitial","",3,"click"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"p"),t._uU(2,"Are yoy sure , want to delete task "),t.TgZ(3,"span",1),t._uU(4),t.qZA()()(),t.TgZ(5,"div",2)(6,"button",3),t.NdJ("click",function(){return i.onDelete(i.data)}),t._uU(7,"Delete"),t.qZA(),t.TgZ(8,"button",4),t.NdJ("click",function(){return i.onCancel("CANCEL")}),t._uU(9,"Cancel"),t.qZA()()),2&n&&(t.xp6(4),t.Oqu(i.data.name))},dependencies:[T.lW,m.xY,m.H8]})}return a})();var l=s(4006),Z=s(1246),f=s(3546),D=s(3336),u=s(9602),b=s(4144),p=s(9549);let y=(()=>{class a{constructor(e,n,i,o){this.fb=e,this.TS=n,this.dialogRef=i,this.data=o,this.todayDate=new Date,this.editData=JSON.parse(JSON.stringify(this.data))}onCancel(e){this.dialogRef.close(e)}onSave(){this.dialogRef.close(this.data)}ngOnInit(){this.initializeLoginForm()}initializeLoginForm(){this.createTaskForm=this.fb.group({name:[this.editData.name,l.kI.required],description:[this.editData.description,l.kI.required],dueDate:[this.editData.dueDate,l.kI.required]})}onSubmit(e){this.dialogRef.close(e.value)}static#t=this.\u0275fac=function(n){return new(n||a)(t.Y36(l.qu),t.Y36(Z._),t.Y36(m.so),t.Y36(m.WI))};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-edit-task"]],decls:37,vars:6,consts:[["id","createForm"],[3,"formGroup"],[2,"margin","auto"],[2,"border","1px solid rgb(231, 222, 222)","padding","10px","margin","5px","border-radius","5px"],["appearance","outline"],["matInput","","formControlName","name","name","name","type","text"],["matSuffix","","color","grey"],["matInput","","formControlName","description","name","description","type","text"],["color","grey","matSuffix",""],["matInput","","formControlName","dueDate","name","dueDate",3,"min","matDatepicker","readonly"],["matIconSuffix","",3,"for"],["datepicker",""],["mat-button","","matDatepickerCancel",""],["mat-raised-button","","color","primary","matDatepickerApply",""],["mat-raised-button","","color","primary",3,"disabled","click"],["mat-button","","cdkFocusInitial","",3,"click"]],template:function(n,i){if(1&n&&(t.TgZ(0,"div",0)(1,"form",1)(2,"mat-card")(3,"mat-card-title",2)(4,"h1"),t._uU(5,"Edit Task"),t.qZA()(),t.TgZ(6,"mat-card-content",3)(7,"mat-form-field",4)(8,"mat-label"),t._uU(9," Task Name "),t.qZA(),t._UZ(10,"input",5),t.TgZ(11,"mat-icon",6),t._uU(12,"portrait"),t.qZA()(),t.TgZ(13,"mat-form-field",4)(14,"mat-label"),t._uU(15," Description "),t.qZA(),t._UZ(16,"input",7),t.TgZ(17,"mat-icon",8),t._uU(18,"description"),t.qZA()(),t.TgZ(19,"mat-form-field",4)(20,"mat-label"),t._uU(21,"Due Date"),t.qZA(),t._UZ(22,"input",9)(23,"mat-datepicker-toggle",10),t.TgZ(24,"mat-datepicker",null,11)(26,"mat-datepicker-actions")(27,"button",12),t._uU(28,"Cancel"),t.qZA(),t.TgZ(29,"button",13),t._uU(30,"Ok"),t.qZA()()()()(),t.TgZ(31,"mat-card-actions")(32,"button",14),t.NdJ("click",function(){return i.onSubmit(i.createTaskForm)}),t._uU(33,"Save"),t.qZA(),t._uU(34,"\xa0 "),t.TgZ(35,"button",15),t.NdJ("click",function(){return i.onCancel("CANCEL")}),t._uU(36,"Cancel"),t.qZA()()()()()),2&n){const o=t.MAs(25);t.xp6(1),t.Q6J("formGroup",i.createTaskForm),t.xp6(21),t.Q6J("min",i.todayDate)("matDatepicker",o)("readonly",!0),t.xp6(1),t.Q6J("for",o),t.xp6(9),t.Q6J("disabled",i.createTaskForm.invalid)}},dependencies:[l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,T.lW,f.a8,f.hq,f.dn,f.n5,D.Hw,u.Mq,u.hl,u.nW,u.M5,u.dp,u.DK,b.Nt,p.KE,p.hX,p.R9],styles:[".mat-mdc-form-field[_ngcontent-%COMP%]{display:block}"]})}return a})();function S(a,d){1&a&&(t.TgZ(0,"mat-icon",19),t._uU(1,"search"),t.qZA())}function A(a,d){if(1&a){const e=t.EpF();t.TgZ(0,"button",20),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.clearSearch())}),t.TgZ(1,"mat-icon"),t._uU(2,"clear"),t.qZA()()}}function L(a,d){1&a&&(t.TgZ(0,"th",21),t._uU(1," Name "),t.qZA())}function v(a,d){if(1&a&&(t.TgZ(0,"td",22),t._uU(1),t.qZA()),2&a){const e=d.$implicit;t.xp6(1),t.hij(" ",e.name,"")}}function U(a,d){1&a&&(t.TgZ(0,"th",21),t._uU(1," Description "),t.qZA())}function N(a,d){if(1&a&&(t.TgZ(0,"td",22),t._uU(1),t.qZA()),2&a){const e=d.$implicit;t.xp6(1),t.hij(" ",e.description," ")}}function w(a,d){1&a&&(t.TgZ(0,"th",21),t._uU(1," Due Date "),t.qZA())}function J(a,d){if(1&a&&(t.TgZ(0,"td",22),t._uU(1),t.ALo(2,"date"),t.qZA()),2&a){const e=d.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,e.dueDate,"dd MMMM yyyy , EEEE")," ")}}function M(a,d){1&a&&(t.TgZ(0,"th",21),t._uU(1," Action "),t.qZA())}function Y(a,d){if(1&a){const e=t.EpF();t.TgZ(0,"td",23)(1,"button",24),t.NdJ("click",function(){const o=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.editTask(o))}),t.TgZ(2,"mat-icon"),t._uU(3,"edit"),t.qZA()(),t.TgZ(4,"button",25),t.NdJ("click",function(){const o=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.deleteTask(o))}),t.TgZ(5,"mat-icon"),t._uU(6,"delete"),t.qZA()()()}}function R(a,d){1&a&&t._UZ(0,"tr",26)}function q(a,d){1&a&&t._UZ(0,"tr",27)}function I(a,d){1&a&&(t.TgZ(0,"tr",28)(1,"td",29),t._uU(2,"No Tasks"),t.qZA()())}const E=function(){return[5,10,25,100]},F=[{path:"",component:(()=>{class a{constructor(e,n){this.TS=e,this.dialog=n,this.displayedColumns=["name","description","dueDate","action"],this.allListData=[]}ngOnInit(){this.getData()}ngAfterViewInit(){this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator}getData(){this.TS.dataChange.subscribe(e=>{this.dataSource=new r.by(e)})}applyFilter(e){this.dataSource.filter=e.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}clearSearch(){this.searchText="",this.TS.dataChange.subscribe(e=>{this.dataSource=new r.by(e),this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator})}deleteTask(e){this.dialog.open(x,{data:e,disableClose:!0}).afterClosed().subscribe(i=>{if("CANCEL"!=i){this.TS.dataChange.subscribe(c=>{this.allListData=c,this.dataSource=new r.by(c),this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator});let o=this.allListData.findIndex(c=>c.id==i.id);this.allListData.splice(o,1),this.TS.dataChange.next(this.allListData)}})}editTask(e){this.dialog.open(y,{data:e,disableClose:!0}).afterClosed().subscribe(i=>{if("CANCEL"!=i){i.description=i.description.trim(),i.name=i.name.trim(),this.TS.dataChange.subscribe(c=>{this.allListData=c,this.dataSource=new r.by(c),this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator});let o=this.allListData.findIndex(c=>c.id==e.id);this.allListData[o]=i,this.TS.dataChange.next(this.allListData)}})}static#t=this.\u0275fac=function(n){return new(n||a)(t.Y36(Z._),t.Y36(m.uw))};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-task-list"]],viewQuery:function(n,i){if(1&n&&(t.Gf(_.NW,5),t.Gf(g.YE,5)),2&n){let o;t.iGM(o=t.CRH())&&(i.paginator=o.first),t.iGM(o=t.CRH())&&(i.sort=o.first)}},decls:31,vars:8,consts:[[1,"row"],[1,"col-md-4"],["matInput","","placeholder","Search...",3,"ngModel","keyup","ngModelChange"],["input",""],["matSuffix","",4,"ngIf"],["mat-icon-button","","matSuffix","","color","grey",3,"click",4,"ngIf"],[1,"mat-elevation-z8"],["mat-table","","matSort","","matSortActive","dueDate","matSortDirection","asc",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","description"],["matColumnDef","dueDate"],["matColumnDef","action"],["mat-cell","","style","display: flex;",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Select page of users",3,"pageSizeOptions"],["matSuffix",""],["mat-icon-button","","matSuffix","","color","grey",3,"click"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-cell","",2,"display","flex"],["mat-icon-button","","color","primary",3,"click"],["mat-icon-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(n,i){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1"),t._uU(3,"Pending Tasks"),t.qZA()(),t._UZ(4,"div",1),t.TgZ(5,"div",1)(6,"mat-form-field")(7,"mat-label"),t._uU(8,"Search..."),t.qZA(),t.TgZ(9,"input",2,3),t.NdJ("keyup",function(c){return i.applyFilter(c)})("ngModelChange",function(c){return i.searchText=c}),t.qZA(),t.YNc(11,S,2,0,"mat-icon",4),t.YNc(12,A,3,0,"button",5),t.qZA()()(),t.TgZ(13,"div",6)(14,"table",7),t.ynx(15,8),t.YNc(16,L,2,0,"th",9),t.YNc(17,v,2,1,"td",10),t.BQk(),t.ynx(18,11),t.YNc(19,U,2,0,"th",9),t.YNc(20,N,2,1,"td",10),t.BQk(),t.ynx(21,12),t.YNc(22,w,2,0,"th",9),t.YNc(23,J,3,4,"td",10),t.BQk(),t.ynx(24,13),t.YNc(25,M,2,0,"th",9),t.YNc(26,Y,7,0,"td",14),t.BQk(),t.YNc(27,R,1,0,"tr",15),t.YNc(28,q,1,0,"tr",16),t.YNc(29,I,3,0,"tr",17),t.qZA(),t._UZ(30,"mat-paginator",18),t.qZA()),2&n){const o=t.MAs(10);t.xp6(9),t.Q6J("ngModel",i.searchText),t.xp6(2),t.Q6J("ngIf",!o.value),t.xp6(1),t.Q6J("ngIf",o.value),t.xp6(2),t.Q6J("dataSource",i.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns),t.xp6(2),t.Q6J("pageSizeOptions",t.DdM(7,E))}},dependencies:[h.O5,l.Fj,l.JJ,l.On,T.RK,D.Hw,b.Nt,p.KE,p.hX,p.R9,r.BZ,r.fO,r.as,r.w1,r.Dz,r.nj,r.ge,r.ev,r.XQ,r.Gk,r.Ee,_.NW,g.YE,g.nU,h.uU],styles:["table[_ngcontent-%COMP%]{width:100%}.mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}.mdc-data-table__cell[_ngcontent-%COMP%]{padding:0 0 0 5px}"]})}return a})()}];let Q=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#a=this.\u0275mod=t.oAB({type:a});static#e=this.\u0275inj=t.cJS({imports:[k.Bz.forChild(F),k.Bz]})}return a})();var O=s(9644);let H=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#a=this.\u0275mod=t.oAB({type:a});static#e=this.\u0275inj=t.cJS({imports:[h.ez,l.u5,l.UX,Q,O.h]})}return a})()}}]);