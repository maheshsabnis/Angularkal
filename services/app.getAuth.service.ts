import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    url: string;
    constructor(private http: HttpClient) {
        this.url = 'http://delval.esalesdesk.com/Services/User/User.asmx/getLoginAuthentication';
    }

    authUser(username: string, password: string, remMe: boolean): Observable<any> {
        let resp: Observable<any> = null;
        const data = {
            'strUserName': username,
            'strPassword': password,
            'RemMe': remMe
        };
        console.log(JSON.stringify(data));
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        resp = this.http.post<any>(this.url, JSON.stringify(data), options);
        return resp;
    }

    getCompanyName(compName: string): Observable<string> {
        const data = {
            'strDesignation': compName
        };
        let resp: Observable<string> = null;
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        resp = this.http.post<string>(
            'http://delval.esalesdesk.com/Services/Proposal/Proposal.asmx/getCompName', JSON.stringify(data), options);
        return resp;
    }
}
