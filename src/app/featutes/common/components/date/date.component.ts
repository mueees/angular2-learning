import {Component} from "@angular/core";
import {AuthService} from '../../../../auth.service';

@Component({
    selector: 'date',
    template: require('./date.component.html')
})
export class DateComponent {
    title: string = 'Date component';

    constructor(public authService: AuthService) {
    }
}