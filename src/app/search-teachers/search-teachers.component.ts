import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Teacher} from '../teacher';
import {DataService} from '../data.service';

@Component({
  selector: 'app-search-teachers',
  templateUrl: './search-teachers.component.html',
  styleUrls: ['./search-teachers.component.css']
})
export class SearchTeachersComponent implements OnInit {

lastName: string;
  teachers: Teacher[];

  constructor(private dataService: DataService,
      private location: Location) {}

  ngOnInit() {
    this.lastName = '';
  }

  private searchTeachers() {
    this.dataService.getTeacherByLastName(this.lastName).then(teachers => this.teachers = teachers);
  }

  onSubmit() {
    this.searchTeachers();
  }

  goBack(): void {
    this.location.back();
  }

}
