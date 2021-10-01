import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CategoryComponent } from './component/category/category.component';
import { EmployeeCategoryComponent } from './component/employee-category/employee-category.component';
import { EmployeeItemComponent } from './component/employee-item/employee-item.component';
import { EmployeeComponent } from './component/employee/employee/employee.component';
import { ItemComponent } from './component/item/item.component';
import { LoginComponent } from './component/login/login.component';
import { OrderHistoryComponent } from './component/order-history/order-history.component';
import { OrderStatusComponent } from './component/order-status/order-status.component';
import { SignupComponent } from './component/signup/signup.component';


const routes: Routes = [
  { path: '', component: CategoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'orderHistory', component: OrderHistoryComponent, canActivate: [AuthGuard] },
  { path: 'item/:id', component: ItemComponent, canActivate: [AuthGuard] },
  { path: 'employee/home', component: EmployeeComponent, canActivate: [AuthGuard] },
  { path: 'employee/category', component: EmployeeCategoryComponent, canActivate: [AuthGuard] },
  { path: 'employee/item', component: EmployeeItemComponent, canActivate: [AuthGuard] },
  { path: 'employee/order', component: OrderStatusComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
