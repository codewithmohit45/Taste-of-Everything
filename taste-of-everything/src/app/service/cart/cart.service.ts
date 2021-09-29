import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/class/cart/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/cart";
  }

  public addItemInCart(cart: Cart): Observable<Cart> {
    return this.http.post<Cart>(this.url, cart);
  }

  public updateItemInCart(cart: Cart): Observable<Cart[]> {
    return this.http.put<Cart[]>(this.url, cart);
  }
  /// find customer Id 
  public getAllItemFromCart(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.url + "/customerId/");
  }

  public deleteCart(id: number) {
    this.http.delete(this.url + "/{id}");
  }
}
