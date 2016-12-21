import {Injectable, Inject} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';

import {YoutubeSearchResultModel} from './youtube-search-result.model';
import {YoutubeVideoModel} from './youtube-video.model.ts';

@Injectable()
export class YoutubeService {
    API_KEY:string;
    API_URL:string;
    API_SINGLE_VIDEO_URL:string;

    constructor(// Inject simple value defined in youtube module providers
        @Inject('YOUTUBE_API_KEY') API_KEY,
        @Inject('YOUTUBE_API_URL') API_URL,
        @Inject('YOUTUBE_API_SINGLE_VIDEO_URL') API_SINGLE_VIDEO_URL,
        private http:Http) {

        this.http = http;
        this.API_KEY = API_KEY;
        this.API_URL = API_URL;
        this.API_SINGLE_VIDEO_URL = API_SINGLE_VIDEO_URL;
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
                    videoId: item.id.videoId,
                    title: item.snippet.title,
                    description: item.snippet.description,
                    thumbnailUrl: item.snippet.thumbnails.medium.url,
                    videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`
                });
            }));
        });
    }

    getVideoInfo(videoId:string):Observable<YoutubeVideoModel> {
        let params = [
            `id=${videoId}`,
            `key=${this.API_KEY}`,
            `part=snippet,statistics`
        ].join('&');

        let url = `${this.API_SINGLE_VIDEO_URL}?${params}`;

        return this.http.get(url).map((response:Response) => {
            let video = response.json().items[0];

            return new YoutubeVideoModel({
                videoId: video.id,
                title: video.snippet.title,
                description: video.snippet.description,
                thumbnailUrl: video.snippet.thumbnails.medium.url,
                videoUrl: `https://www.youtube.com/watch?v=${video.id}`
            });
        });
    }
}
