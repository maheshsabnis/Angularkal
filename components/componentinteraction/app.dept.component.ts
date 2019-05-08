import { Component, OnInit } from '@angular/core';
import { Department, Depts } from "./../../models/app.deptemp.model";
@Component({
    selector: 'app-dept-component',
    template: `
    <div>{{message}}</div>
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <td>DeptId</td>
             <td>DeptName</td>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let d of depts" (click)="getSelectedDepartment(d)">
             <td>{{d.DeptId}}</td>
             <td>{{d.DeptName}}</td>
          </tr>
        </tbody>
      </table>
      <br/>
      <app-emp-component [DeptId]="dept.DeptId" (dataFilterted)="getNotify($event)"></app-emp-component>
    `
})
export class DeptComponent implements OnInit {
    dept: Department;
    depts = Depts;
    message: string;
    constructor() {
        this.dept = new Department(0, '');
    }

    ngOnInit(): void { }

    getSelectedDepartment(d: Department): void {
        this.dept.DeptId = d.DeptId;
        console.log(this.dept.DeptId);
    }
    getNotify($event): void {
        this.message = $event;
    }
}
