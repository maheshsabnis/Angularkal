import { Component } from '@angular/core';

@Component({
  selector:'app-simple-component',
  template:`
     <h2>This is a Simple Component</h2>
     <div>{{message}}</div>
     <br/>
     <input type="text" [value]="message"/>
     <br/>
     <input type="button" value="Click Me" (click)="display()"/>
     <br/>
      <input type="text" [(ngModel)]="name" class="form-control"/>
      <br/>
      <input type="text" [(ngModel)]="name" class="form-control"/>
      <br/>
      <input type="text" [(ngModel)]="name" class="form-control"/>

  `
})
export class SimpleComponent {
    message:string;
    name:string;
    constructor(){
      this.message = "The Angular 7.x App";
      this.name = "";
    }
    display():void {
      this.message = "The NG CLI";
    }
}
