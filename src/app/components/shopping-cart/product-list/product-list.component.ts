import { Component, OnInit} from '@angular/core';
import { ProductService } from 'src/app/services/Product.service';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';
import { WishlistService } from 'src/app/services/wishlist.service';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products$: Observable<Product[]>;
  wishlist: number[] = [];

  
  constructor(private productService: ProductService,
    private wishlistService: WishlistService,
    private cartService: CartService,
    private msg: MessengerService) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProduct();
     // .subscribe((products) => {
    //   this.products = products;
    // })
    this.wishlistService.getWishlist().subscribe(productIds => {
      this.wishlist = productIds
    })
  }

  addItem(produtItem: Product) {
    this.cartService.addToCart(produtItem).subscribe(() => {
      this.msg.sendMsg(produtItem);
      })
  }


}
