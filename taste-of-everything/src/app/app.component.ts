import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from './service/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taste-of-everything';

  constructor(private service: CustomerService, private router: Router) { }
  public logout() {
    this.service.isAuthenticated = false;
    sessionStorage.removeItem("customerName");
    this.router.navigate(["/login"]);
  }
}