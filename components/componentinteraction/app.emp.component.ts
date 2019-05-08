import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Employee, Emps } from "./../../models/app.deptemp.model";

@Component({
    selector: 'app-emp-component',
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
      <input type="button" value="Notify-Back" (click)="notify()"/>
    `
})
export class EmpComponent implements OnInit {
    emp: Employee;
    emps = Emps;
    private _DeptId: number;
    private _FiletrEmployees: Array<Employee>;
    // the event emitter will emit the string type payload
    @Output()
    dataFilterted: EventEmitter<string>;
    constructor() {
        this.emp = new Employee(0, '', 0);
        this._DeptId = 0;
        this._FiletrEmployees = new Array<Employee>();
        this.dataFilterted = new EventEmitter<string>();
    }

    ngOnInit(): void { }

    @Input()
    set DeptId(v: number) {
        this._DeptId = v;
        console.log(this._DeptId);
    }

    get DeptId(): number {
        return this._DeptId;
    }

    notify(): void {
        this.dataFilterted.emit(`For the received DeptId ${this._DeptId}
        we searched ${this._FiletrEmployees.length} employees`);
    }

    // read-only property, that will filter data from "emps"
    // based on _DeptId

    get FiletrEmployees(): Array<Employee> {
        this._FiletrEmployees = new Array<Employee>();

        if (this.DeptId > 0) {
            this._FiletrEmployees = this.emps.filter((e, idx) => {
                return e.DeptId === this._DeptId;
            });
        } else {
            this._FiletrEmployees = this.emps;
        }

        return this._FiletrEmployees;
    }
}
