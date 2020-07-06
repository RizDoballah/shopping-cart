import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = []
 
  cartTotal = 0

  constructor(private msg: MessengerService,
    private cartService: CartService,
    private spinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
    
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
    })
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems =items;
      this.calcCartTotal();
    })
  }

  calcCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

  deleteItem(cartItem: CartItem) {
    this.spinnerService.show();
    this.cartService.removeFromCart(cartItem)
    .pipe(
      catchError(err => {
          console.log('Handling error locally and rethrowing it...', err);
          return throwError(err);
      })
    )
    .subscribe(() => {
        this.cartItems= this.cartItems.filter((item) => item.id != cartItem.id)
        this.spinnerService.hide(); 
      });
    } 
  }
//   addToCart( product: Product ) {

//       if (this.cartItems.length === 0) {
//         this.cartItems.push({
//           productId: product.id,
//           productName: product.name,
//           qty: 1,
//           price: product.price
//         })
//         this.cartTotal = 0
//         this.cartItems.forEach(item => {
//           this.cartTotal += (item.qty * item.price)
//       })

//       } else {
//         for (let i in this.cartItems) {
//           if(this.cartItems[i].productId === product.id ) { 
//           this.cartItems[i].qty++
//         } else {
//           this.cartItems.push({
//             productId: product.id,
//             productName: product.name,
//             qty: 1,
//             price: product.price
//           })
//           this.cartTotal = 0
//           this.cartItems.forEach(item => {
//             this.cartTotal += (item.qty * item.price)
//         })

//         }
          
//         }
//       }

//   }
// }
