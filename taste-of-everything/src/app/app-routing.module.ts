import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CategoryComponent } from './component/category/category.component';
import { EmployeeCategoryComponent } from './component/employee-category/employee-category.component';
import { EmployeeItemComponent } from './component/employee-item/employee-item.component';
import { EmployeeComponent } from './component/employee/employee/employee.component';
import { ItemComponent } from './component/item/item.component';
import { LoginComponent } from './component/login/login.component';
import { OrderStatusComponent } from './component/order-status/order-status.component';
import { SignupComponent } from './component/signup/signup.component';


const routes: Routes = [
  { path: '', component: CategoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'item/:id', component: ItemComponent, canActivate: [AuthGuard] },
  { path: 'employee/home', component: EmployeeComponent },
  { path: 'employee/category', component: EmployeeCategoryComponent },
  { path: 'employee/item', component: EmployeeItemComponent },
  { path: 'employee/order', component: OrderStatusComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
