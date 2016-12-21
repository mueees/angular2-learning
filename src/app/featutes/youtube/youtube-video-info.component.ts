import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {YoutubeService} from './youtube.service';
import {YoutubeVideoModel} from './youtube-video.model';

@Component({
    selector: 'youtube-video-info',
    template: `
        <h1>Youtube Video Info!</h1>

        <div *ngIf="video">
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
export class YoutubeVideoInfoComponent implements OnInit {
    video:YoutubeVideoModel;

    constructor(private route:ActivatedRoute,
                private router:Router,
                private youtubeService:YoutubeService) {
    }

    ngOnInit() {
        this.route.params
            .subscribe((params:Params) => {
                this.youtubeService.getVideoInfo(params['videoId']).subscribe((video:YoutubeVideoModel)=> {
                    this.video = video;
                });
            });
    }
}