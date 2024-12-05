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

  course = COURSES[0]

  price = 9.99

  rate=0.27

  title = COURSES[0].description

  startDate = new Date(2000, 0, 1)

  courseSelected(course: Course) {
    console.log('Card clicked and received:', course)
  }

}
