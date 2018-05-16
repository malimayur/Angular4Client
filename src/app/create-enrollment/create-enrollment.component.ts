import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Student} from '../student';
import {Teacher} from '../teacher';
import {Subject} from '../subject';
import {Enrollment} from '../enrollment';
import {DataService} from '../data.service';

@Component({
  selector: 'app-create-enrollment',
  templateUrl: './create-enrollment.component.html',
  styleUrls: ['./create-enrollment.component.css']
})
export class CreateEnrollmentComponent implements OnInit {

  submitted = false;
  students: Student[];
  teachers: Teacher[];
  subjects: Subject[];
  enrollment = new Enrollment();
  constructor(private dataService: DataService,
      private location: Location) {}

  ngOnInit() {
    this.getStudents();
    this.getTeachers();
    this.getSubjects();
  }

  private getStudents() {
    this.dataService.getStudents().then(students => this.students = students);
  }

  private getTeachers() {
    this.dataService.getTeachers().then(teachers => this.teachers = teachers);
  }

  private getSubjects() {
    this.dataService.getSubjects().then(subjects => this.subjects = subjects);
  }

  private save(): void {
    this.dataService.createEnrollment(this.enrollment);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.enrollment = new Enrollment();
  }

  goBack(): void {
    this.location.back();
  }
  reset(): void {
    this.submitted = false;
    this.enrollment = new Enrollment();
  }
}
