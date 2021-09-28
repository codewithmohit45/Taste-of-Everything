import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CategoryComponent } from './component/category/category.component';
import { ItemComponent } from './component/item/item.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';


const routes: Routes = [
  { path: '', component: CategoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'item', component: ItemComponent, canActivate: [AuthGuard] },
  { path: 'employeedashboard', component: EmployeedashboardComponent },
  { path: 'employeeLogin', component: EmployeeLoginComponent },
  { path: 'customerLogin', component: CustomerLoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
