import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = COURSES

  courseSelected(course: Course) {
    console.log('Card clicked and received:', course)
  }

}
