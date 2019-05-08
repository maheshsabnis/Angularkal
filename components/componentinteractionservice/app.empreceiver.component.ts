import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Employee, Emps } from "../../models/app.deptemp.model";
import { CommunicationService } from "./../../services/app.communication.service";
@Component({
    selector: 'app-empreceiver-component',
    template: `
      <h2>Employee</h2>
       <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <td>EmpId</td>
             <td>EmpName</td>
              <td>DeptId</td>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let e of FiletrEmployees">
           <td>{{e.EmpId}}</td>
            <td>{{e.EmpName}}</td>
             <td>{{e.DeptId}}</td>
          </tr>
        </tbody>
      </table>
      <br/>
    `
})
export class EmpReceiverComponent implements OnInit {
    emp: Employee;
    emps = Emps;
    DeptId: number;
    private _FiletrEmployees: Array<Employee>;

    constructor(private serv: CommunicationService) {
        this.emp = new Employee(0, '', 0);
        this.DeptId = 0;
        this._FiletrEmployees = new Array<Employee>();
    }

    // subscribe to the event from service
    // so that when everytime the event is emitted
    // over the subscription the payload 
    // will be read from it.
    ngOnInit(): void {
        this.serv.onDataReceived.subscribe((id: number) => {
            this.DeptId = id;
        });
    }

    get FiletrEmployees(): Array<Employee> {
        this._FiletrEmployees = new Array<Employee>();

        if (this.DeptId > 0) {
            this._FiletrEmployees = this.emps.filter((e, idx) => {
                return e.DeptId === this.DeptId;
            });
        } else {
            this._FiletrEmployees = this.emps;
        }

        return this._FiletrEmployees;
    }
}
