import {Component, Input} from "@angular/core";

@Component({
    selector: 'm-tab',
    template: require('./tab.component.html')
})
export class TabComponent {
    @Input('title') title: string;
    active: boolean;
}