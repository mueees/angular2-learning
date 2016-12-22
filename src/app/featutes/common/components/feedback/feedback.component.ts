import {Component} from '@angular/core';

import {FeedbackModel} from './feedback.model';

@Component({
    selector: 'feedback',
    template: require('./feedback.component.html')
})
export class FeedbackComponent {
    model: FeedbackModel;

    priorities = ['high', 'medium', 'low'];

    constructor() {
        this.model = new FeedbackModel(
            'mue.miv@gmail.com',
            'high',
            '',
            'test'
        );
    }

    onSubmit() {
        alert(this.model);
    }

    getModel() {
        return JSON.stringify(this.model);
    }
}