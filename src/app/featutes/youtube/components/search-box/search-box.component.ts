import {Component, EventEmitter, ElementRef, OnInit} from "@angular/core";
import {YoutubeService} from "../../youtube.service";
import {YoutubeSearchResultModel} from "../../youtube-search-result.model";
import {Observable} from "rxjs";

@Component({
    selector: 'search-box',
    template: `
        <input autofocus placeholder="Search" type="text"/>
    `,

    outputs: ['loading', 'results', 'search']
})
export class SearchBoxComponent implements OnInit {
    search: EventEmitter<string> = new EventEmitter<string>();
    loading: EventEmitter<boolean> = new EventEmitter<boolean>();
    results: EventEmitter<YoutubeSearchResultModel[]> = new EventEmitter<YoutubeSearchResultModel[]>();
    searchQuery: string;

    constructor(public youtubeService: YoutubeService,
                private el: ElementRef) {
        this.youtubeService = youtubeService;
        this.el = el;
    }

    ngOnInit() {
        Observable.fromEvent(this.el.nativeElement, 'keyup')
            .map((e: any) => {
                this.searchQuery = e.target.value;

                return e.target.value;
            })
            .filter((text: string) => text.length > 1)
            .debounceTime(250)
            .do(() => this.loading.next(true))
            .map((query: string) => this.youtubeService.search(query))
            .switch()
            .subscribe(
                (results: YoutubeSearchResultModel[]) => { // success
                    this.search.emit(this.searchQuery);
                    this.loading.emit(false);
                    this.results.emit(results);
                },
                (err: any) => {  // error
                    console.log(err);
                    this.loading.emit(false);
                },
                () => { // complete
                    this.loading.emit(false);
                });
    }
}