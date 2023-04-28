import { Injectable } from '@angular/core';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[];

  constructor() {
    this.products = [
      new Product('Arthera', 'AA', 'logo-arthera.png', '$20.17', '+$1.17', '$49.577.978,92', "999.987.834,99 AA"),
      new Product('New Arthera Coin', 'NAAC', 'logo-arthera.png', '$2.46', '-$0.25', '$374.552,81', "152.257,239837 NAAC"),
    ];
  }

  getProducts(): Product[] {
    return this.products;
  }
}
