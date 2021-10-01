import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../../class/customer/customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // customerList: Customer[];
  // validCustomer: Customer[];
  isAuthenticated: boolean;
  isCustomerLogin: boolean;
  customer: Customer;
  private url: string;
  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/customer";
    this.isAuthenticated = false;
    this.isCustomerLogin = false;


  }

  public addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.url, customer);
  }

  public updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(this.url, customer);
  }

  public getAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url + "/s");
  }

  public deleteCustomer(id: number) {
    this.http.delete(this.url + "/{id}");
  }

  public checkCustomer(email: string, password: string): Observable<Customer> {
    return this.http.get<Customer>(this.url + "/login/" + email + "/" + password);
  }

}
