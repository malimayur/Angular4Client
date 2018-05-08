import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Student} from '../student';
import {DataService} from '../data.service';

@Component({
  selector: 'app-search-students',
  templateUrl: './search-students.component.html',
  styleUrls: ['./search-students.component.css']
})
export class SearchStudentsComponent implements OnInit {

  lastName: string;
  students: Student[];

  constructor(private dataService: DataService,
      private location: Location) {}

  ngOnInit() {
    this.lastName = '';
  }

  private searchStudents() {
    this.dataService.getStudentByLastName(this.lastName).then(students => this.students = students);
  }

  onSubmit() {
    this.searchStudents();
  }

  goBack(): void {
    this.location.back();
  }
}
