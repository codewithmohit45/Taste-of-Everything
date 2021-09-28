import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from './service/customer/customer.service';
import { EmployeeService } from './service/employee/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taste-of-everything';

  constructor(private customerService: CustomerService, private employeeService: EmployeeService, private router: Router) { }
  public logout() {
    this.customerService.isAuthenticated = false;
    this.employeeService.isAuthenticated = false;
    this.customerService.isCustomerLogin = false;
    //sessionStorage.removeItem("customerName");
    this.router.navigate(["/login"]);
  }
}