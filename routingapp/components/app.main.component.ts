import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main-component',
    template: `
      <h2>The Main Component</h2>
      <table class="table table-striped table-bordered">
        <tr>
          <td>
            <a [routerLink]="['']">Home</a>
          </td>
            <td>
            <a [routerLink]="['/about',value]">About</a>
          </td>
            <td>
            <a [routerLink]="['contact']">Contact</a>
          </td>
        </tr>
      </table>
      <hr/>
      <router-outlet></router-outlet>
    `
})
export class MainComponent implements OnInit {
    value: number;
    constructor() {
        this.value = 10;
    }

    ngOnInit(): void { }
}
