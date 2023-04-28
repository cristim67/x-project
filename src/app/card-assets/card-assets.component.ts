import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product';
import { ProductService } from '../products/product.services';

@Component({
  selector: 'app-card-assets',
  templateUrl: './card-assets.component.html',
  styleUrls: ['./card-assets.component.scss']
})
export class CardAssetsComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
