import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartItem } from 'src/app/models/cart-item';
import { Observable } from 'rxjs';

const cartApiUrl = "http://localhost:3000/cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
  getCartItem(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(cartApiUrl);

  }
}
