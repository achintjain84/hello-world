import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses', // <courses>
    //template: '<h2> {{ title }} </h2>'
    //template: '<h2> {{ "TITLE: " + title }} </h2>'
    //template: '<h2> {{ getTitle() }} </h2>'
    template: `
        <h2> {{ title }} </h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `

})

/*
export class CoursesComponent {

    title = "List of courses";

    courses = ["course1", "course2", "course3"];
    //getTitle(){
    //    return this.title;
    //}

    
}
*/

export class CoursesComponent {
    title = "List of courses";
    courses;
    
    //constructor(){
    //    let service = new CoursesService();    
    //    this.courses = service.getCourses();
    //}


    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }
    
}