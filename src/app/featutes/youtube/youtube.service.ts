import {Injectable, Inject} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';

import {YoutubeSearchResultModel} from './youtube-search-result.model.ts';

@Injectable()
export class YoutubeService {
    API_KEY:string;
    API_URL:string;

    constructor(// Inject simple value defined in youtube module providers
        @Inject('YOUTUBE_API_KEY') API_KEY,
        @Inject('YOUTUBE_API_URL') API_URL,
        private http:Http) {

        this.http = http;
        this.API_KEY = API_KEY;
        this.API_URL = API_URL;
    }

    search(query:string):Observable <YoutubeSearchResultModel[]> {
        let params = [
            `q=${query}`,
            `key=${this.API_KEY}`,
            `part=snippet`,
            `type=video`,
            `maxResults=10`
        ].join('&');

        let url = `${this.API_URL}?${params}`;

        return this.http.get(url).map((response:Response) => {
            return (<any>response.json()).items.map((item => {
                return new YoutubeSearchResultModel({
                    title: item.snippet.title,
                    description: item.snippet.description,
                    thumbnailUrl: item.snippet.thumbnails.medium.url,
                    videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`
                });
            }));
        });
    }
}
