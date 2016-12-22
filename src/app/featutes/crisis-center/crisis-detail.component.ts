import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    template: `
        <p>Welcome to the Crisis Detail</p>
        <button (click)="toCrisisHome()" >Back to Crisis home</button>
    `
})
export class CrisisDetailComponent {
    constructor(private route:ActivatedRoute,
                private router:Router) {
    }

    toCrisisHome() {
        this.router.navigate(['../'], {relativeTo: this.route});
    }
}