import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard} from './services/auth.guard'
const routes: Routes = [
   { path: 'login', component: LoginPageComponent,
  canActivate: [AuthGuard]},
   { path: 'home', component: HomePageComponent,
   canActivate: [AuthGuard]},
   { path: 'employees', component: EmployeesComponent,
   canActivate: [AuthGuard]},
   { path: 'employee', component: EmployeeComponent,
   canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
