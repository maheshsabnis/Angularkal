import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/app.getAuth.service';
@Component({
    selector: 'app-auth-component',
    template: `
      <input type="button" value="Auth Me" (click)="authMe()"/>
    `
})
export class AuthComponent implements OnInit {
    constructor(private serv: AuthService) { }

    ngOnInit(): void { }

    authMe(): void {
        const userName = 'VHJ1c2hhclBhbmNoYWw=';
        const password = 'YWE=';
        const remMe = true;
        this.serv.authUser(userName, password, remMe).subscribe((resp) => {
            console.log(resp);
            console.log(resp.d.LoginDetails);
            if (resp.d.LoginDetails[0].useEmpId === 11) {
                this.serv.getCompanyName('').subscribe((resp) => {
                    console.log(resp);
                });
            }
        });
    }

}
