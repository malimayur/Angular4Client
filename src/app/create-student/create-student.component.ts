import {Student} from '../student';
import {DataService} from '../data.service';
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  student = new Student();
  submitted = false;
  constructor(private dataService: DataService,
    private location: Location) {}

  ngOnInit() {
  }

  private save(): void {
    this.dataService.createStudent(this.student);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.student = new Student();
  }

  goBack(): void {
    this.location.back();
  }
  reset(): void {
    this.submitted = false;
    this.student = new Student();
  }
}
