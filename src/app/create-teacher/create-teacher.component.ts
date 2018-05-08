import {Teacher} from '../teacher';
import {DataService} from '../data.service';
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent implements OnInit {

  teacher = new Teacher();
  submitted = false;
  constructor(private dataService: DataService,
    private location: Location) {}

  ngOnInit() {
  }

  private save(): void {
    this.dataService.createTeacher(this.teacher);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.teacher = new Teacher();
  }

  goBack(): void {
    this.location.back();
  }
  reset(): void {
    this.submitted = false;
    this.teacher = new Teacher();
  }
}
