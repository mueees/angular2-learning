import {Component} from '@angular/core';
import {YoutubeService} from './youtube.service';

import {YoutubeSearchResultModel} from './youtube-search-result.model';

@Component({
    selector: 'youtube',
    template: `
        <h2>Youtube Component!</h2>

        <search-box (loading)="onLoading($event)" (results)="updateResults($event)" ></search-box>
        <hr/>

        <ul>
            <li *ngFor="let video of videos">
                <search-result [video]="video"></search-result>
            </li>
        </ul>
    `,

    /**
     * Any provider will be available only on that component and all its children.
     * */
    providers: [
        YoutubeService
    ]
})
export class YoutubeComponent {
    youtubeService:YoutubeService;
    videos:YoutubeSearchResultModel[];

    constructor(youtubeService:YoutubeService) {
        this.youtubeService = youtubeService;
    }

    updateResults(results:YoutubeSearchResultModel[]):void {
        this.videos = results;
    }

    onLoading(loadingStatus:boolean):void {
        console.log(loadingStatus);
    }
}