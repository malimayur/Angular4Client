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
  //studentId: number;
  //teacherId: number;
  //startdate: string;
  //enddate: string;

  enroll = new Enrollment();
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
    //this.enroll.studentId = this.studentId;
    //this.enroll.teacherId = this.teacherId;
    //this.dataService.createStudent(this.student);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.enroll = new Enrollment();
  }

  goBack(): void {
    this.location.back();
  }
  reset(): void {
    this.submitted = false;
    this.enroll = new Enrollment();
  }
}
