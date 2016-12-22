import {Component} from "@angular/core";
import {Http, Response} from "@angular/http";

@Component({
    selector: 'simple-http-component',
    template: `
        'Simple http component'

        <button (click)="loadData()">Load data</button>
        <div *ngIf="loading">Loading...</div>

        <pre>{{data | json}}</pre>
    `
})
export class SimpleHttpComponent {
    data: Object;
    loading: boolean;

    constructor(public http: Http) {
        this.http = http;
    }

    loadData(): void {
        let me = this;

        this.loading = true;

        this.http
            .request('http://jsonplaceholder.typicode.com/posts/1')
            .subscribe(function (res: Response) {
                console.log('subscribe');
                me.data = res.json();
                me.loading = false;
            });
    }
}