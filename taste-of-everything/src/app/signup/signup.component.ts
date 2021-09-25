import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private customer: Customer;
  constructor(private service: CustomerService, private router: Router) {
    this.customer = new Customer();
  }

  ngOnInit() {
  }
  public setGender(gender: String) {
    this.customer.customerGender = gender;
  }

  public addCustomer() {
    this.service.addCustomer(this.customer);
    this.customer = new Customer();
    this.router.navigate(['/login']);
  }

}
