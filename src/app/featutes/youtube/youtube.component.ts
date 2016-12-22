import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {YoutubeService} from './youtube.service';

import {YoutubeSearchResultModel} from './youtube-search-result.model';

@Component({
    selector: 'youtube',
    template: `
        <h1>Youtube Component!</h1>
        <div *ngIf="previousSearchQuery">Previous search: "{{previousSearchQuery}}"</div>

        <search-box (search)="onSearch($event)" (results)="updateResults($event)"></search-box>
        <hr/>

        <ul>
            <li *ngFor="let video of videos">
                <search-result [video]="video" (select)="onVideoSelect($event)"></search-result>
            </li>
        </ul>
    `,

    /**
     * Any provider will be available only on that component and all its children.
     * */
    providers: []
})
export class YoutubeComponent {
    searchQuery: string;
    previousSearchQuery: string;
    youtubeService: YoutubeService;
    videos: YoutubeSearchResultModel[];

    constructor(youtubeService: YoutubeService,
                private router: Router,
                private route: ActivatedRoute) {
        this.youtubeService = youtubeService;
        this.router = router;

        this.previousSearchQuery = this.route.snapshot.params['search'];
    }

    updateResults(results: YoutubeSearchResultModel[]): void {
        this.videos = results;
    }

    onSearch(s: string): void {
        this.previousSearchQuery = '';

        this.searchQuery = s;
    }

    onVideoSelect(videoId) {
        this.router.navigate(['/youtube', videoId, {search: this.searchQuery}]);
    }
}