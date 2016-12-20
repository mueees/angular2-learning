import {Component} from '@angular/core';
import {YoutubeSearchResultModel} from '../../youtube-search-result.model';

@Component({
    selector: 'search-result',
    inputs: ['video'],

    template: `
        <div>
            <p>
                <b>{{video.title}}</b>
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
}