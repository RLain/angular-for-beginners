import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input() course: Course
  // @Input({required: true}) index: number
  @Output() courseSelected = new EventEmitter<Course>()

  courseViewed() {
    this.courseSelected.emit(this.course)
    console.log('Course viewed', this.course)

  }

  isImageVisible() {
    return this.course && this.course.iconUrl
  }

}
