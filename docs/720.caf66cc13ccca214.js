"use strict";(self.webpackChunktask_list=self.webpackChunktask_list||[]).push([[720],{1720:(O,g,s)=>{s.r(g),s.d(g,{TaskListModule:()=>Q});var C=s(6895),k=s(1635),Z=s(8739),h=s(6308),r=s(3626),m=s(5412),t=s(4650),T=s(4859);let A=(()=>{class a{constructor(e,o){this.dialogRef=e,this.data=o,console.log("dialog data",this.data)}onCancel(e){this.dialogRef.close(e)}onDelete(e){this.dialogRef.close(e)}static#t=this.\u0275fac=function(o){return new(o||a)(t.Y36(m.so),t.Y36(m.WI))};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-delete-task"]],decls:8,vars:1,consts:[["mat-dialog-content",""],["mat-dialog-actions",""],["mat-raised-button","","color","warn",3,"click"],["mat-button","","cdkFocusInitial","",3,"click"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"p"),t._uU(2),t.qZA()(),t.TgZ(3,"div",1)(4,"button",2),t.NdJ("click",function(){return i.onDelete(i.data)}),t._uU(5,"Delete"),t.qZA(),t.TgZ(6,"button",3),t.NdJ("click",function(){return i.onCancel("CANCEL")}),t._uU(7,"Cancel"),t.qZA()()),2&o&&(t.xp6(2),t.hij("Are yoy sure , want to delete task ",i.data.name,""))},dependencies:[T.lW,m.xY,m.H8]})}return a})();var d=s(4006),D=s(1246),f=s(3546),_=s(3336),u=s(9602),y=s(4144),p=s(9549);let L=(()=>{class a{constructor(e,o,i,n){this.fb=e,this.TS=o,this.dialogRef=i,this.data=n,console.log("dialog data",this.data),this.editData=JSON.parse(JSON.stringify(this.data))}onCancel(e){this.dialogRef.close(e)}onSave(){console.log(this.data),this.dialogRef.close(this.data)}ngOnInit(){this.initializeLoginForm()}initializeLoginForm(){this.createTaskForm=this.fb.group({name:[this.editData.name,d.kI.required],description:[this.editData.description,d.kI.required],dueDate:[this.editData.dueDate,d.kI.required]})}onSubmit(e){console.log(this.createTaskForm,e.value),this.dialogRef.close(e.value)}static#t=this.\u0275fac=function(o){return new(o||a)(t.Y36(d.qu),t.Y36(D._),t.Y36(m.so),t.Y36(m.WI))};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-edit-task"]],decls:41,vars:5,consts:[["id","createForm"],[3,"formGroup"],[1,"row"],[1,"col-md-4"],["appearance","outline"],["matInput","","formControlName","name","name","name","type","text"],["matSuffix","","color","grey"],["matInput","","formControlName","description","name","description","type","text"],["color","grey","matSuffix",""],["matInput","","formControlName","dueDate","name","dueDate",3,"matDatepicker","readonly"],["matIconSuffix","",3,"for"],["datepicker",""],["mat-button","","matDatepickerCancel",""],["mat-raised-button","","color","primary","matDatepickerApply",""],["mat-raised-button","","color","primary",3,"disabled","click"],["mat-button","","cdkFocusInitial","",3,"click"]],template:function(o,i){if(1&o&&(t.TgZ(0,"div",0)(1,"form",1)(2,"mat-card")(3,"mat-card-title")(4,"p"),t._uU(5,"Edit Task"),t.qZA()(),t.TgZ(6,"mat-card-content")(7,"div",2)(8,"div",3)(9,"mat-form-field",4)(10,"mat-label"),t._uU(11," Task Name "),t.qZA(),t._UZ(12,"input",5),t.TgZ(13,"mat-icon",6),t._uU(14,"portrait"),t.qZA()()(),t.TgZ(15,"div",3)(16,"mat-form-field",4)(17,"mat-label"),t._uU(18," Description "),t.qZA(),t._UZ(19,"input",7),t.TgZ(20,"mat-icon",8),t._uU(21,"description"),t.qZA()()(),t.TgZ(22,"div",3)(23,"mat-form-field",4)(24,"mat-label"),t._uU(25,"Due Date"),t.qZA(),t._UZ(26,"input",9)(27,"mat-datepicker-toggle",10),t.TgZ(28,"mat-datepicker",null,11)(30,"mat-datepicker-actions")(31,"button",12),t._uU(32,"Cancel"),t.qZA(),t.TgZ(33,"button",13),t._uU(34,"Ok"),t.qZA()()()()()()(),t.TgZ(35,"mat-card-actions")(36,"button",14),t.NdJ("click",function(){return i.onSubmit(i.createTaskForm)}),t._uU(37,"Save"),t.qZA(),t._uU(38,"\xa0 "),t.TgZ(39,"button",15),t.NdJ("click",function(){return i.onCancel("CANCEL")}),t._uU(40,"Cancel"),t.qZA()()()()()),2&o){const n=t.MAs(29);t.xp6(1),t.Q6J("formGroup",i.createTaskForm),t.xp6(25),t.Q6J("matDatepicker",n)("readonly",!0),t.xp6(1),t.Q6J("for",n),t.xp6(9),t.Q6J("disabled",i.createTaskForm.invalid)}},dependencies:[d._Y,d.Fj,d.JJ,d.JL,d.sg,d.u,T.lW,f.a8,f.hq,f.dn,f.n5,_.Hw,u.Mq,u.hl,u.nW,u.M5,u.dp,u.DK,y.Nt,p.KE,p.hX,p.R9]})}return a})();function v(a,l){1&a&&(t.TgZ(0,"th",14),t._uU(1," Name "),t.qZA())}function b(a,l){if(1&a&&(t.TgZ(0,"td",15),t._uU(1),t.qZA()),2&a){const e=l.$implicit;t.xp6(1),t.hij(" ",e.name,"")}}function N(a,l){1&a&&(t.TgZ(0,"th",14),t._uU(1," Description "),t.qZA())}function x(a,l){if(1&a&&(t.TgZ(0,"td",15),t._uU(1),t.qZA()),2&a){const e=l.$implicit;t.xp6(1),t.hij(" ",e.description," ")}}function S(a,l){1&a&&(t.TgZ(0,"th",14),t._uU(1," Due Date "),t.qZA())}function U(a,l){if(1&a&&(t.TgZ(0,"td",15),t._uU(1),t.ALo(2,"date"),t.qZA()),2&a){const e=l.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,e.dueDate,"dd/MM/yyyy")," ")}}function w(a,l){1&a&&(t.TgZ(0,"th",14),t._uU(1," Action "),t.qZA())}function Y(a,l){if(1&a){const e=t.EpF();t.TgZ(0,"td",15)(1,"button",16),t.NdJ("click",function(){const n=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.editTask(n))}),t.TgZ(2,"mat-icon"),t._uU(3,"edit"),t.qZA()(),t.TgZ(4,"button",17),t.NdJ("click",function(){const n=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.deleteTask(n))}),t.TgZ(5,"mat-icon"),t._uU(6,"delete"),t.qZA()()()}}function J(a,l){1&a&&t._UZ(0,"tr",18)}function R(a,l){1&a&&t._UZ(0,"tr",19)}function F(a,l){1&a&&(t.TgZ(0,"tr",20)(1,"td",21),t._uU(2,"No Tasks"),t.qZA()())}const I=function(){return[7,10,25,100]},M=[{path:"",component:(()=>{class a{constructor(e,o){this.TS=e,this.dialog=o,this.displayedColumns=["name","description","dueDate","action"],this.allListData=[]}ngOnInit(){this.getData()}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}getData(){this.TS.dataChange.subscribe(e=>{this.dataSource=new r.by(e),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort})}applyFilter(e){this.dataSource.filter=e.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}deleteTask(e){this.dialog.open(A,{data:e,disableClose:!0}).afterClosed().subscribe(i=>{if(console.log("The dialog was closed",i),"CANCEL"!=i){this.TS.dataChange.subscribe(c=>{this.allListData=c});let n=this.allListData.findIndex(c=>c.id==i.id);this.allListData.splice(n,1),this.TS.dataChange.next(this.allListData)}})}editTask(e){this.dialog.open(L,{data:e,disableClose:!0}).afterClosed().subscribe(i=>{if(console.log("The dialog was closed",i),"CANCEL"!=i){i.description=i.description.trim(),i.name=i.name.trim(),this.TS.dataChange.subscribe(c=>{this.allListData=c});let n=this.allListData.findIndex(c=>c.id==e.id);this.allListData[n]=i,this.TS.dataChange.next(this.allListData)}})}static#t=this.\u0275fac=function(o){return new(o||a)(t.Y36(D._),t.Y36(m.uw))};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-task-list"]],viewQuery:function(o,i){if(1&o&&(t.Gf(Z.NW,5),t.Gf(h.YE,5)),2&o){let n;t.iGM(n=t.CRH())&&(i.paginator=n.first),t.iGM(n=t.CRH())&&(i.sort=n.first)}},decls:23,vars:5,consts:[["matInput","","placeholder","Search...",3,"keyup"],["input",""],[1,"mat-elevation-z8"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","description"],["matColumnDef","dueDate"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Select page of users",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-icon-button","","color","primary",3,"click"],["mat-icon-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(o,i){1&o&&(t.TgZ(0,"mat-form-field")(1,"mat-label"),t._uU(2,"Filter"),t.qZA(),t.TgZ(3,"input",0,1),t.NdJ("keyup",function(c){return i.applyFilter(c)}),t.qZA()(),t.TgZ(5,"div",2)(6,"table",3),t.ynx(7,4),t.YNc(8,v,2,0,"th",5),t.YNc(9,b,2,1,"td",6),t.BQk(),t.ynx(10,7),t.YNc(11,N,2,0,"th",5),t.YNc(12,x,2,1,"td",6),t.BQk(),t.ynx(13,8),t.YNc(14,S,2,0,"th",5),t.YNc(15,U,3,4,"td",6),t.BQk(),t.ynx(16,9),t.YNc(17,w,2,0,"th",5),t.YNc(18,Y,7,0,"td",6),t.BQk(),t.YNc(19,J,1,0,"tr",10),t.YNc(20,R,1,0,"tr",11),t.YNc(21,F,3,0,"tr",12),t.qZA(),t._UZ(22,"mat-paginator",13),t.qZA()),2&o&&(t.xp6(6),t.Q6J("dataSource",i.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns),t.xp6(2),t.Q6J("pageSizeOptions",t.DdM(4,I)))},dependencies:[T.RK,_.Hw,y.Nt,p.KE,p.hX,r.BZ,r.fO,r.as,r.w1,r.Dz,r.nj,r.ge,r.ev,r.XQ,r.Gk,r.Ee,Z.NW,h.YE,h.nU,C.uU],styles:["table[_ngcontent-%COMP%]{width:100%}.mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{width:25%}"]})}return a})()}];let q=(()=>{class a{static#t=this.\u0275fac=function(o){return new(o||a)};static#a=this.\u0275mod=t.oAB({type:a});static#e=this.\u0275inj=t.cJS({imports:[k.Bz.forChild(M),k.Bz]})}return a})();var E=s(9644);let Q=(()=>{class a{static#t=this.\u0275fac=function(o){return new(o||a)};static#a=this.\u0275mod=t.oAB({type:a});static#e=this.\u0275inj=t.cJS({imports:[C.ez,d.u5,d.UX,q,E.h]})}return a})()}}]);