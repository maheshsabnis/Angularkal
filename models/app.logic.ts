import { Product } from './app.product.model';
export class ProductLogic {
  private product: Product;
  private products: Array<Product>;

  constructor() {
    this.product = new Product(0, "", "", "", "", "", 0);
    this.products = new Array<Product>();
    this.products.push(new Product(101, "Prd001", "Laptop", "Electronics", "IBM", "Core i7 1 TB SSD", 130000));
    this.products.push(new Product(102, "Prd002", "Power-Tool", "Electrical", "Bajaj", "Stone Cutter", 1300));
  }

  getProducts(): Array<Product> {
    return this.products;
  }

  createProduct(prd: Product): Array<Product> {
    this.products.push(prd);
    return this.products;
  }

}
