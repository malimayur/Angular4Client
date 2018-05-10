import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Customer } from './customer';
import { Student } from './student';
import { Teacher } from './teacher';
import { Subject } from './subject';
import { Attendance } from './attendance';

@Injectable()
export class DataService {

  private customersUrl = 'customer';  // URL to web API
  private studentUrl = 'student';  // URL to web API
  private teacherUrl = 'teacher';  // URL to web API
  private subjectUrl = 'subject';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  // Get all customers
  getCustomers(): Promise<Customer[]> {
    return this.http.get(this.customersUrl)
      .toPromise()
      .then(response => response.json() as Customer[])
      .catch(this.handleError);
  }

  getCustomersByLastName(lastName: string): Promise<Customer[]> {
    const url = `findbylastname/${lastName}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Customer)
      .catch(this.handleError);
  }

  create(customer: Customer): Promise<Customer> {
    return this.http
      .post('postcustomer', JSON.stringify(customer), {headers : this.headers})
      .toPromise()
      .then(res => res.json() as Customer)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.customersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  // Get all students
  getStudents(): Promise<Student[]> {
    return this.http.get(this.studentUrl)
      .toPromise()
      .then(response => response.json() as Student[])
      .catch(this.handleError);
  }

  getStudentByLastName(lastName: string): Promise<Student[]> {
    const url = `findstudentbylastname/${lastName}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Student)
      .catch(this.handleError);
  }

  createStudent(student: Student): Promise<Student> {
    return this.http
      .post('createstudent', JSON.stringify(student), {headers : this.headers})
      .toPromise()
      .then(res => res.json() as Student)
      .catch(this.handleError);
  }

  deleteStudent(id: number): Promise<void> {
    const url = `${this.studentUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  // Get all teacher
  getTeachers(): Promise<Teacher[]> {
    return this.http.get(this.teacherUrl)
      .toPromise()
      .then(response => response.json() as Teacher[])
      .catch(this.handleError);
  }

  getTeacherByLastName(lastName: string): Promise<Teacher[]> {
    const url = `findteacherbylastname/${lastName}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Teacher)
      .catch(this.handleError);
  }

  createTeacher(teacher: Teacher): Promise<Teacher> {
    return this.http
      .post('createteacher', JSON.stringify(teacher), {headers : this.headers})
      .toPromise()
      .then(res => res.json() as Teacher)
      .catch(this.handleError);
  }

  deleteTeacher(id: number): Promise<void> {
    const url = `${this.teacherUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  // Get all subjects
  getSubjects(): Promise<Subject[]> {
    return this.http.get(this.subjectUrl)
      .toPromise()
      .then(response => response.json() as Subject[])
      .catch(this.handleError);
  }

  // Attendance
  createAttendance(attendance: Attendance): Promise<Attendance> {
    return this.http
      .post('createattendance', JSON.stringify(attendance), {headers : this.headers})
      .toPromise()
      .then(res => res.json() as Attendance)
      .catch(this.handleError);
  }
}
