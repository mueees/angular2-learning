import {Component} from "@angular/core";

@Component({
    selector: 'date',
    template: `
        <h1>{{title}}</h1>
    `
})
export class DateComponent {
    title: string = 'Date component';
}