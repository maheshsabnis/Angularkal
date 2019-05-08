import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ProductInfo } from "./../models/app.product.model";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class ProductService {
    // 1. define url
    url: string;

    // 2. constructor injected with HttpClient object
    // to get the HttpClient object, import HttpClientModule
    // in @NgModule
    constructor(private http: HttpClient) {
        this.url = 'http://apiapptrainingservice.azurewebsites.net/api/Products';
    }

    getProducts(): Observable<ProductInfo[]> {
        let resp: Observable<ProductInfo[]> = null;
        resp = this.http.get<ProductInfo[]>(this.url);
        return resp;
    }

    postProduct(prd: ProductInfo): Observable<ProductInfo> {
        let resp: Observable<ProductInfo> = null;
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        resp = this.http.post<ProductInfo>(this.url, JSON.stringify(prd), options);
        return resp;
    }

    putProduct(id: number, prd: ProductInfo): Observable<ProductInfo> {
        let resp: Observable<ProductInfo> = null;
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        resp = this.http.put<ProductInfo>(`${this.url}/${id}`, JSON.stringify(prd), options);
        return resp;
    }

    deleteProduct(id: number): Observable<ProductInfo> {
        let resp: Observable<ProductInfo> = null;
        resp = this.http.delete<ProductInfo>(`${this.url}/${id}`);
        return resp;
    }

}
