import {Component} from "@angular/core";

@Component({
    template: `
        <ul>
            <li>
                <a [routerLink]="[1]">First crisis</a>
            </li>
            <li>
                <a [routerLink]="[2]">Second crisis</a>
            </li>
            <li>
                <a [routerLink]="[3]">Third crisis</a>
            </li>
        </ul>

        <router-outlet></router-outlet>
    `
})
export class CrisisListComponent {
}