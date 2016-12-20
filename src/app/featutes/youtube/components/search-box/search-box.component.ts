import {Component, EventEmitter, ElementRef, OnInit} from '@angular/core';

import {YoutubeService} from '../../youtube.service';
import {YoutubeSearchResultModel} from '../../youtube-search-result.model';

import {Observable} from 'rxjs';

@Component({
    selector: 'search-box',
    template: `
        <input autofocus placeholder="Search" type="text"/>
    `,

    outputs: ['loading', 'results']
})
export class SearchBoxComponent implements OnInit {
    loading:EventEmitter<boolean> = new EventEmitter<boolean>();
    results:EventEmitter<YoutubeSearchResultModel[]> = new EventEmitter<YoutubeSearchResultModel[]>();

    constructor(public youtubeService:YoutubeService,
                private el:ElementRef) {
        this.youtubeService = youtubeService;
        this.el = el;
    }

    ngOnInit() {
        console.log('search-box ngOnInit');

        Observable.fromEvent(this.el.nativeElement, 'keyup')
            .map((e:any) => e.target.value)
            .filter((text:string) => text.length > 1)
            .debounceTime(250)
            .do(() => this.loading.next(true))
            .map((query:string) => this.youtubeService.search(query))
            .switch()
            .subscribe(
            (results:YoutubeSearchResultModel[]) => { // success
                this.loading.emit(false);
                this.results.emit(results);
            },
            (err:any) => {  // error
                console.log(err);
                this.loading.emit(false);
            },
            () => { // complete
                this.loading.emit(false);
            });
    }
}