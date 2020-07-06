import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';




@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: CartItem;
  @Output() onRemove: EventEmitter<CartItem> = new EventEmitter<CartItem>();
 
  
  
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  handleRemoveFromCart() {
    this.onRemove.emit(this.cartItem)
    // this.cartService.removeFromCart(this.cartItem).subscribe()
    

  }
}

