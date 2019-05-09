import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact-component',
    template: `
      <h2>Contact Component</h2>
      <div>{{message}}</div>
      <br/>
      <a [routerLink]="['product']">Product</a>
      <router-outlet></router-outlet>
    `
})
export class ContactComponent implements OnInit {
    message: string;
    constructor() {
        this.message = 'This is Contact Component';
    }
    ngOnInit(): void { }
}
