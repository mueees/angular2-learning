import { Component, OnInit, HostBinding,
    trigger, transition, animate,
    style, state } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {YoutubeService} from './youtube.service';
import {YoutubeVideoModel} from './youtube-video.model';

@Component({
    selector: 'youtube-video-info',
    template: `
        <h1>Search: "{{searchQuery}}"</h1>

        <button (click)="onBackToSearch()">Back to search</button>

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
    `,

    animations: [
        trigger('routeAnimation', [
            state('*',
                style({
                    opacity: 1,
                    transform: 'translateX(0)'
                })
            ),
            transition(':enter', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                }),
                animate('0.2s ease-in')
            ]),
            transition(':leave', [
                animate('0.5s ease-out', style({
                    opacity: 0,
                    transform: 'translateY(100%)'
                }))
            ])
        ])
    ]
})
export class YoutubeVideoInfoComponent implements OnInit {
    video:YoutubeVideoModel;
    searchQuery:string;

    constructor(private route:ActivatedRoute,
                private router:Router,
                private youtubeService:YoutubeService) {
    }

    ngOnInit() {
        // We use observable params, because params could be changed during component life
        // for example when videoId will be changed we should not re-initialize YoutubeVideoInfoComponent component
        // but only apply new 'videoId'
        // more could see: https://angular.io/docs/ts/latest/guide/router.html#!#fragment OBSERVABLE PARAMS AND COMPONENT RE-USE

        // alternative way
        // this.route.snapshot.params['videoId'];
        this.route.params
            .subscribe((params:Params) => {
                this.searchQuery = params['search'];

                this.youtubeService.getVideoInfo(params['videoId']).subscribe((video:YoutubeVideoModel)=> {
                    this.video = video;
                });
            });
    }

    onBackToSearch() {
        this.router.navigate(['/youtube', {search: this.searchQuery}]);
    }

    // animation
    @HostBinding('@routeAnimation') get routeAnimation() {
        return true;
    }

    @HostBinding('style.display') get display() {
        return 'block';
    }

    @HostBinding('style.position') get position() {
        return 'absolute';
    }
}