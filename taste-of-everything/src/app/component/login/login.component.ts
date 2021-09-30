import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer/customer.service';
import { EmployeeService } from 'src/app/service/employee/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  inputEmail: string;
  inputPassword: string;
  isValidForm: boolean;
  isValidCredential: boolean;
  loginType: string;
  constructor(private customerService: CustomerService, private employeeService: EmployeeService, private router: Router) {
    this.isValidForm = false;
    this.isValidCredential = false;
    this.loginType = 'customer';

  }

  ngOnInit() {
  }

  onSubmit(loginForm: NgForm) {
    if (!loginForm.valid) {
      this.isValidForm = true;
      this.isValidCredential = false;
      return
    }
    this.checkValidCustomer();
  }

  public setType(loginType: string) {
    this.loginType = loginType;
  }

  public checkValidCustomer() {
    if (this.loginType == 'customer') {
      this.customerService.checkCustomer(this.inputEmail, this.inputPassword).subscribe(res => {
        if (res != null) {
          this.customerService.customer = res;
          this.customerService.isAuthenticated = true;
          this.customerService.isCustomerLogin = true;
          // sessionStorage.setItem('customerName', this.);
          alert("Login Successfully!!");
          this.router.navigate([""]);
        } else {
          this.isValidForm = false;
          this.isValidCredential = true;
        }
      });
    } else {
      this.employeeService.checkEmployee(this.inputEmail, this.inputPassword).subscribe(res => {
        if (res != null) {
          this.customerService.isAuthenticated = true;
          this.customerService.isCustomerLogin = false;
          alert("Login Successfully!!");
          this.router.navigate(["employee/home"]);
        } else {
          this.isValidForm = false;
          this.isValidCredential = true;
        }
      });
    }
  }
}
