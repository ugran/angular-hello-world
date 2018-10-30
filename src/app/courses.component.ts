import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    //<courses> "courses"
    //<div class="courses"> ".courses"
    //<div id="courses"> "#courses"
    template: `
        {{ text | summary:10 }}`
})

export class CoursesComponent {
    text = `
    Lorem Ipsum is simply dummy text of the print taraarararararararara
    `
}