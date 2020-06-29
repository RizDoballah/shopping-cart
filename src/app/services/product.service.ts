import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const productApiUrl = "http://localhost:3000/products";

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }
   
  getProduct(): Observable<Product[]> {

    return this.http.get<Product[]>(productApiUrl);
  }

}
