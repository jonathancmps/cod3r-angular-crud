import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: 'product.crud.html',
  styleUrls: [
    'product.crud.css'
  ]
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void{
    this.router.navigate(['/products/create']);
  }

}
