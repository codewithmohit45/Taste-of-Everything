import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { CategoryComponent } from './component/category/category.component';
import { ItemComponent } from './component/item/item.component';
import { CustomerService } from './service/customer/customer.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './component/employee/employee/employee.component';
import { EmployeeCategoryComponent } from './component/employee-category/employee-category.component';
import { EmployeeItemComponent } from './component/employee-item/employee-item.component';
import { OrderStatusComponent } from './component/order-status/order-status.component';
import { OrderHistoryComponent } from './component/order-history/order-history.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CategoryComponent,
    ItemComponent,
    EmployeeComponent,
    EmployeeCategoryComponent,
    EmployeeItemComponent,
    OrderStatusComponent,
    OrderHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
