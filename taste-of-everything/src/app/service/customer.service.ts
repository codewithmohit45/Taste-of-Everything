import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../class/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList: Customer[];
  validCustomer: Customer[];
  isAuthenticated: boolean;

  private url: string;
  constructor(private http: HttpClient) {
    this.url = "http://localhost:9000/customer";
    this.customerList = [];
    this.isAuthenticated = false;

  }

  // public addCustomer(customer: Customer): Observable<Customer> {
  //   return this.http.post<Customer>(this.url, customer);
  // }

  // public updateCustomer(customer: Customer): Observable<Customer> {
  //   return this.http.put<Customer>(this.url, customer);
  // }

  // public getAllCustomer(): Observable<Customer[]> {
  //   return this.http.get<Customer[]>(this.url + "/s");
  // }

  // public deleteCustomer(id: number) {
  //   this.http.delete(this.url + "/{id}");
  // }

  public addCustomer(customer: Customer) {
    this.customerList.push(customer);
  }

  public updateCustomer(customer: Customer) {

  }

  public getAllCustomer() {
    return this.customerList;
  }

  public checkCustomer(customer: Customer) {
    this.validCustomer = this.customerList.filter((res) =>
      res.customerEmail === customer.customerEmail && res.customerPassword === customer.customerPassword);
    if (this.validCustomer.length === 1) {
      return this.validCustomer[0];
    }
  }
  public deleteCustomer(id: number) {
    this.customerList = this.customerList.filter((customer) => customer.customerId !== id);
  }



}
