import { Component, OnInit} from '@angular/core';
import { ProductService } from 'src/app/services/Product.service';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products$: Observable<Product[]>;

  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProduct();
    // .subscribe((products) => {
    //   this.products = products;
    // })
  }


}
