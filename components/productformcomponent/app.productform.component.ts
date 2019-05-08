import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Product } from './../../models/app.product.model';
import { Categories, Manufacturers } from "./../../models/app.constants";
import { ProductLogic } from "./../../models/app.logic";
import { CheckEvenValidator } from "./app.custom.validator";
@Component({
    selector: 'app-productform-component',
    templateUrl: './app.productform.view.html'
})
export class ProductFormComponent implements OnInit {
    product: Product;
    products: Array<Product>;
    private logic: ProductLogic;
    categories = Categories;
    manufacturers = Manufacturers;
    tableColumns: Array<string>;
    isFormSubmitted: boolean;
    frmPrd: FormGroup;

    constructor() {
        this.product = new Product(0, '', '', '', '', '', 0);
        this.products = new Array<Product>();
        this.logic = new ProductLogic();
        this.tableColumns = new Array<string>();
        this.isFormSubmitted = false;

        // create an instance for FormGroup by passing FormControl to it
        // and link FormControl to Model Properties in our case the Model class
        // is Product
        this.frmPrd = new FormGroup({
            ProductRowId: new FormControl(this.product.ProductRowId,
                Validators.compose([Validators.required,
                Validators.pattern("[0-9]*"),
                Validators.minLength(2), Validators.maxLength(5)])),
            ProductId: new FormControl(this.product.ProductId),
            ProductName: new FormControl(this.product.ProductName),
            CategoryName: new FormControl(this.product.CategoryName),
            Manufacturer: new FormControl(this.product.Manufacturer),
            Description: new FormControl(this.product.Description),
            Price: new FormControl(this.product.Price,
                Validators.compose([CheckEvenValidator.checkEven]))
        });
    }

    ngOnInit(): void {
        for (let c in this.product) {
            this.tableColumns.push(c);
        }
        //console.log(JSON.stringify(this.tableColumns));
        this.products = this.logic.getProducts();
    }

    clear(): void {
        this.product = new Product(0, '', '', '', '', '', 0);
    }
    save(): void {
        this.product = this.frmPrd.value; // read values for each FormContol
        this.products = this.logic.createProduct(this.product);
        // alert(JSON.stringify(this.products));
        this.isFormSubmitted = false;
    }

    getSelectedProduct(p: Product): void {
        // this.product = p;
        // create a new location ref. for p to which 
        // this.product will point
        this.product = Object.create(p, {});
        this.isFormSubmitted = true;
    }

    loadForm(): void {
        this.product = new Product(0, '', '', '', '', '', 0);
        this.isFormSubmitted = true;
    }

}
