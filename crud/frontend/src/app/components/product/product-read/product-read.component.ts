import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: 'product.read.html',
  styleUrls: [
    'product.read.css'
  ]
})
export class ProductReadComponent implements OnInit {

  products: Product[];
  displayedColumns = ['id', 'name', 'price']


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe( products => {
      this.products = products;
      console.log(products);
    })
  }

}
