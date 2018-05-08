import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {CustomersComponent} from './customers/customers.component';
import {SearchCustomersComponent} from './search-customers/search-customers.component';
import {HomeComponent} from './home/home.component';
import {SearchStudentsComponent} from './search-students/search-students.component';
import {CreateStudentComponent} from './create-student/create-student.component';
import {SearchTeachersComponent} from './search-teachers/search-teachers.component';
import {CreateTeacherComponent} from './create-teacher/create-teacher.component';
import {CreateEnrollmentComponent} from './create-enrollment/create-enrollment.component';
import {CreateAttendanceComponent} from './create-attendance/create-attendance.component';

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'tcm/home', pathMatch: 'full'},
  {path: 'tcm/customer', component: CustomersComponent},
  {path: 'tcm/add', component: CreateCustomerComponent},
  {path: 'tcm/findbylastname', component: SearchCustomersComponent},
  {path: 'tcm/home', component: HomeComponent},
  {path: 'tcm/searchstudent', component: SearchStudentsComponent},
  {path: 'tcm/searchstudent/createstudent', component: CreateStudentComponent},
  {path: 'tcm/searchteacher', component: SearchTeachersComponent},
  {path: 'tcm/searchteacher/createteacher', component: CreateTeacherComponent},
  {path: 'tcm/createenrollment', component: CreateEnrollmentComponent},
  {path: 'tcm/createattendance', component: CreateAttendanceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
