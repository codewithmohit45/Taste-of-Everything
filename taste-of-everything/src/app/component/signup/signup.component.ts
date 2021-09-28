import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/class/customer/customer';
import { CustomerService } from 'src/app/service/customer/customer.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private customer: Customer;
  isValidForm: boolean;
  constructor(private service: CustomerService, private router: Router) {
    this.customer = new Customer();
    this.isValidForm = false;
  }

  ngOnInit() {
  }
  public setGender(gender: string) {
    this.customer.customerGender = gender;
  }
  onSubmit(signupForm: NgForm) {

    // if (!this.checkValidForm(signupForm)) {
    //   this.isValidForm = true;
    //   return
    // }
    this.addCustomer();
  }

  // public checkValidForm(signupForm: NgForm) {
  //   if (this.customer.customerName.length < 2 && this.customer.customerEmail.length < 2 && this.customer.customerPassword.length < 2 &&
  //     this.customer.customerGender.length < 2) {
  //     return false;
  //   }
  //   return true;
  // }

  public addCustomer() {
    this.service.addCustomer(this.customer).subscribe(res => {
      this.customer = new Customer();
      alert("Accout Create Successfully");
      this.router.navigate(['/login']);
    });
  }

}
