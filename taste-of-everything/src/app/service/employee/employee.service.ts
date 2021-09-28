import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/class/employee/employee';
import { CategoryService } from '../category/category.service';
import { ItemService } from '../item/item.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url: string;
  isAuthenticated: boolean;
  constructor(private category: CategoryService, private item: ItemService, private service: EmployeeService, private http: HttpClient) {
    this.url = "http://localhost:8080/employee";
    this.isAuthenticated = false;
  }

  public checkEmployee(email: string, password: string): Observable<Employee> {
    // this.service.checkEmployee(employee).subscribe(res => {
    return this.http.get<Employee>(this.url + "/login/" + email + "/" + password);

  }
}
