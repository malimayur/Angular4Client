import {CreateCustomerComponent} from './create-customer/create-customer.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import {CustomersComponent} from './customers/customers.component';
import {SearchCustomersComponent} from './search-customers/search-customers.component';

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'tcm/home', pathMatch: 'full'},
  {path: 'tcm/customer', component: CustomersComponent},
  {path: 'tcm/add', component: CreateCustomerComponent},
  {path: 'tcm/findbylastname', component: SearchCustomersComponent},
  {path: 'tcm/student', component: CreateStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
