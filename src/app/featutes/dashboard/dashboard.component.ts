import {Component} from '@angular/core';

@Component({
    selector: 'dashboard',
    template: `
        <h1>Dashboard</h1>
        <date></date>
        <hr/>
        <feedback></feedback>
        <hr/>
        <simple-http-component></simple-http-component>
        <hr/>
        <youtube></youtube>
    `
})
export class DashboardComponent {
}