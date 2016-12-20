import {Component} from '@angular/core';

@Component({
    selector: 'search-box',
    template: `
        <input autofocus placeholder="Search" type="text"/>
    `,

    outputs: ['loading', 'results']
})
export class SearchBoxComponent {
}