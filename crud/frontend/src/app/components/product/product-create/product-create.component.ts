import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-create',
  templateUrl: 'product.create.html',
  styleUrls: [
    'product.create.css'
  ]
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createProduct(): void {
    this.productService.showMessage('Produto criado!')
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }  
}
