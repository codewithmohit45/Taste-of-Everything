import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/class/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  customer: Customer;
  isValidForm: boolean;
  isValidCredential: boolean;

  constructor(private service: CustomerService, private router: Router) {
    this.customer = new Customer();
    this.isValidForm = false;
    this.isValidCredential = false;
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

  public checkValidCustomer() {
    if (this.service.checkCustomer(this.customer)) {
      this.service.isAuthenticated = true;

      sessionStorage.setItem('customerName', this.customer.customerName);
      alert("Login Successfully!!");
      this.router.navigate([""]);
    } else {
      this.isValidForm = false;
      this.isValidCredential = true;
    }
  }

}
