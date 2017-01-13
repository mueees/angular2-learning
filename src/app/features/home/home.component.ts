import {Component, OnInit} from "@angular/core";
import {DummyComponent} from '../../components/dummy'

@Component({
    selector: 'home',
    template: require('./home.component.html')
})
export class HomeComponent implements OnInit {
    componentData: any;

    constructor() {
        this.componentData = {
            component: DummyComponent
        };
    }

    ngOnInit() {
    }
}