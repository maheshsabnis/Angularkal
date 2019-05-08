import { Component, OnInit } from '@angular/core';
import { ProductService } from "./../../services/app.product.service";
import { ProductInfo } from "./../../models/app.product.model";
@Component({
    selector: 'app-productservice-component',
    template: `
       <input type="button" value="get all" (click)="getall()"/>
       <br/> 

        <input type="button" value="post" (click)="saveProduct()"/>
       <br/> 

        <input type="button" value="put" (click)="updateProduct()"/>
       <br/> 

        <input type="button" value="delete" (click)="deleteProduct()"/>
       
    `
})
export class ProductServiceComponent implements OnInit {
    product: ProductInfo;
    products: Array<ProductInfo>;
    // service is injected
    constructor(private serv: ProductService) {
        this.product = new ProductInfo(0, '', '', '', '', '', 0);
        this.products = new Array<ProductInfo>();
    }

    // always make get call to service in ngOnInt if required
    ngOnInit(): void {
    }

    getall(): void {
        this.serv.getProducts().subscribe((resp) => {
            this.products = resp;
            console.log(JSON.stringify(this.products));
        });
    }

    saveProduct(): void {
        this.product.ProductId = "Prd0001";
        this.product.ProductName = "Laptop";
        this.product.CategoryName = "Electronics";
        this.product.Manufacturer = "IBM";
        this.product.Description = "Core i 7";
        this.product.BasePrice = 100000;

        this.serv.postProduct(this.product).subscribe((resp) => {
            this.product = resp;
            console.log(this.product);
        });
    }

    updateProduct(): void {
        this.product.ProductRowId = 1;
        this.product.ProductId = "Prd0001";
        this.product.ProductName = "Laptop";
        this.product.CategoryName = "Electronics";
        this.product.Manufacturer = "IBM";
        this.product.Description = "Core i 7";
        this.product.BasePrice = 120000;

        this.serv.putProduct(this.product.ProductRowId, this.product).subscribe((resp) => {
            this.product = resp;
            console.log(this.product);
        });
    }

    deleteProduct(): void {
        this.product.ProductRowId = 1;


        this.serv.deleteProduct(this.product.ProductRowId).subscribe((resp) => {
            this.product = resp;
            console.log(this.product);
        });
    }

}
