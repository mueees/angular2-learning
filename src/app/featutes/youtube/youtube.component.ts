import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {YoutubeService} from './youtube.service';

import {YoutubeSearchResultModel} from './youtube-search-result.model';

@Component({
    selector: 'youtube',
    template: `
        <h1>Youtube Component!</h1>

        <search-box (loading)="onLoading($event)" (results)="updateResults($event)"></search-box>
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
    youtubeService:YoutubeService;
    videos:YoutubeSearchResultModel[];

    constructor(youtubeService:YoutubeService, private router:Router) {
        this.youtubeService = youtubeService;
        this.router = router;
    }

    updateResults(results:YoutubeSearchResultModel[]):void {
        this.videos = results;
    }

    onLoading(loadingStatus:boolean):void {
        console.log(loadingStatus);
    }

    onVideoSelect(videoId) {
        this.router.navigate(['/youtube', videoId]);
    }
}