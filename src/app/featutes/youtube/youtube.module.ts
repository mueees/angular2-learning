import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { YoutubeRoutingModule } from './youtube-routing.module';

// Components
import {YoutubeComponent} from './youtube.component';
import {YoutubeVideoInfoComponent} from './youtube-video-info.component';
import {SearchBoxComponent} from './components/search-box/search-box.component';
import {SearchResultComponent} from './components/search-result/search-result.component';

// Services
import {YoutubeService} from './youtube.service';

@NgModule({
    imports: [
        BrowserModule,
        YoutubeRoutingModule
    ],
    declarations: [
        YoutubeComponent,
        YoutubeVideoInfoComponent,
        SearchBoxComponent,
        SearchResultComponent
    ],

    exports: [
        YoutubeComponent
    ],

    /**
     * Any provider will be accessible in the entire application
     * */
    providers: [
        YoutubeService,
        {
            provide: 'YOUTUBE_API_KEY',
            useValue: 'AIzaSyC9MDCXAHRm2w0obmCjiDJtTvaHaM6DwYY'
        },
        {
            provide: 'YOUTUBE_API_URL',
            useValue: 'https://www.googleapis.com/youtube/v3/search'
        },
        {
            provide: 'YOUTUBE_API_SINGLE_VIDEO_URL',
            useValue: 'https://www.googleapis.com/youtube/v3/videos'
        }
    ]
})
export class YoutubeModule {

}