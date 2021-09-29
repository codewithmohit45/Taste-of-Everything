import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from 'src/app/class/address/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/address";
  }

  public addAddress(address: Address): Observable<Address> {
    return this.http.post<Address>(this.url, address);
  }

  public updateAddress(address: Address): Observable<Address> {
    return this.http.put<Address>(this.url, address);
  }

  public getAllAddress(customerId: number): Observable<Address[]> {
    return this.http.get<Address[]>(this.url + "/customer/{customerId}");
  }

  public getAddress(id: number): Observable<Address> {
    return this.http.get<Address>(this.url + "/{id}");
  }

  public deleteAddress(id: number) {
    this.http.delete(this.url + "/{id}");
  }
}
