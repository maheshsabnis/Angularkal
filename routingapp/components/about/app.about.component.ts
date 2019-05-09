import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-about-component',
    template: `
      <h2>About Component</h2>
      <div>{{message}}</div>
      <input type="button" value="Navigate" (click)="navigate()"/>
    `
})
export class AboutComponent implements OnInit {
    message: string;

    // inject ActivatedRoute to subscribe to the 
    // parameterized route

    constructor(private act: ActivatedRoute, private router: Router) {
        this.message = 'This is About Component';
    }
    ngOnInit(): void {
        this.act.params.subscribe((param) => {
            this.message += `${param.id}`;
        });
    }

    navigate(): void {
        this.router.navigate(['contact']);
    }
}
