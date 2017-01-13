import {Component, Input} from "@angular/core";

@Component({
    selector: 'm-tooltip-content',
    template: require('./tooltip-content.component.html')
})
export class TooltipContentComponent {
    @Input() content: string;

    constructor() {
    }
}