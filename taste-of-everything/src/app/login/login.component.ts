import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  customer: Customer;

  constructor(private service: CustomerService, private router: Router) {
    this.customer = new Customer();
  }

  ngOnInit() {
  }

  public checkValidCustomer() {

    if (this.service.checkCustomer(this.customer)) {
      this.router.navigate([""]);
    } else {
      this.router.navigate(["/signup"]);
    }
  }

}
