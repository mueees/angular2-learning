import {Component, EventEmitter} from '@angular/core';
import {YoutubeSearchResultModel} from '../../youtube-search-result.model';

@Component({
    selector: 'search-result',
    inputs: ['video'],
    outputs: ['select'],

    template: `
        <div>
            <p>
                <b (click)="onSelectVideo()">{{video.title}}</b>
            </p>
            <p>
                {{video.description}}
            </p>
            <p>
                <a target="_blank" href="{{video.videoUrl}}">
                    <img src="{{video.thumbnailUrl}}" alt="{{video.title}}"/>
                </a>
            </p>
        </div>
    `
})
export class SearchResultComponent {
    video:YoutubeSearchResultModel;
    select:EventEmitter<any> = new EventEmitter();

    onSelectVideo() {
        this.select.emit(this.video.videoId);
    }
}