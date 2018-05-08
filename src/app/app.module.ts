import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {CustomerDetailsComponent} from './customer-details/customer-details.component';
import {CustomersComponent} from './customers/customers.component';
import {DataService} from './data.service';
import {CreateCustomerComponent} from './create-customer/create-customer.component';

import {enableProdMode} from '@angular/core';
import {SearchCustomersComponent} from './search-customers/search-customers.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchStudentsComponent } from './search-students/search-students.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { SearchTeachersComponent } from './search-teachers/search-teachers.component';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { CreateEnrollmentComponent } from './create-enrollment/create-enrollment.component';
import { CreateAttendanceComponent } from './create-attendance/create-attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerDetailsComponent,
    CustomersComponent,
    CreateCustomerComponent,
    SearchCustomersComponent,
    CreateStudentComponent,
    HomeComponent,
    SearchStudentsComponent,
    SearchTeachersComponent,
    CreateTeacherComponent,
    CreateEnrollmentComponent,
    CreateAttendanceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
