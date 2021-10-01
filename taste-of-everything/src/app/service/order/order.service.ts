import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/class/order/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/customer/order";
  }

  public addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.url, order);
  }

  public updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(this.url, order);
  }

  public getOrderByCustomerId(customerId: number): Observable<Order[]> {
    return this.http.get<Order[]>(this.url + "/" + customerId);
  }

  public getOrderByStatus(): Observable<Order[]> {
    return this.http.get<Order[]>("http://localhost:8080/employee/orderStatus/ordered");
  }

}
