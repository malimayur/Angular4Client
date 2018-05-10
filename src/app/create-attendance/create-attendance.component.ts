import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Student} from '../student';
import {Teacher} from '../teacher';
import {Attendance} from '../attendance';
import {DataService} from '../data.service';

@Component({
  selector: 'app-create-attendance',
  templateUrl: './create-attendance.component.html',
  styleUrls: ['./create-attendance.component.css']
})
export class CreateAttendanceComponent implements OnInit {

  submitted = false;
  students: Student[];
  teachers: Teacher[];
  attendanceFor = '1';
  enableStudent = true;

  attendance = new Attendance();
  constructor(private dataService: DataService,
      private location: Location) {}

  ngOnInit() {
    this.getStudents();
    this.getTeachers();
  }

  private getStudents() {
    this.dataService.getStudents().then(students => this.students = students);
  }

  private getTeachers() {
    this.dataService.getTeachers().then(teachers => this.teachers = teachers);
  }

  private save(): void {
    this.dataService.createAttendance(this.attendance);
  }

  private onChange(id: number): void {
    if (this.attendanceFor === '2') {
        this.enableStudent = false;
    } else {
      this.enableStudent = true;
    }
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.attendance = new Attendance();
  }

  goBack(): void {
    this.location.back();
  }
  reset(): void {
    this.submitted = false;
    this.attendance = new Attendance();
  }

}
