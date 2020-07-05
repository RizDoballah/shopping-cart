import { Component, OnInit} from '@angular/core';
import { ProductService } from 'src/app/services/Product.service';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';
import { WishlistService } from 'src/app/services/wishlist.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products$: Observable<Product[]>;
  wishlist: number[] = [];

  
  constructor(private productService: ProductService,
    private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProduct();
     // .subscribe((products) => {
    //   this.products = products;
    // })
    this.wishlistService.getWishlist().subscribe(productIds => {
      this.wishlist = productIds
    })
  }


}
