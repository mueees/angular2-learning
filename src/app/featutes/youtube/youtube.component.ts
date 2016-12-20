import {Component} from '@angular/core';
import {YoutubeService} from './youtube.service';

@Component({
    selector: 'youtube',
    template: `
        <b>Youtube Component!</b>
        <hr/>

        <search-box></search-box>
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

    constructor(youtubeService:YoutubeService) {
        console.log('Youtube Component constructor');

        this.youtubeService = youtubeService;

        this.youtubeService.search('fun');
    }
}