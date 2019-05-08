import { Component, OnInit } from '@angular/core';
import { Department, Depts } from "../../models/app.deptemp.model";
import { CommunicationService } from "./../../services/app.communication.service";
@Component({
  selector: 'app-deptsender-component',
  template: `
     
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
       
    `
})
export class DeptSenderComponent implements OnInit {
  dept: Department;
  depts = Depts;

  constructor(private serv: CommunicationService) {
    this.dept = new Department(0, '');
  }

  ngOnInit(): void { }
  // when the row is clicked pass the DeptId
  // to service
  getSelectedDepartment(d: Department): void {
    this.dept.DeptId = d.DeptId;
    this.serv.getData(this.dept.DeptId);
  }
}
