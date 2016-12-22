import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {YoutubeRoutingModule} from "./youtube-routing.module";
import {HttpModule} from "@angular/http";
// Components
import {YoutubeComponent} from "./youtube.component";
import {YoutubeVideoInfoComponent} from "./youtube-video-info.component";
import {SearchBoxComponent} from "./components/search-box/search-box.component";
import {SearchResultComponent} from "./components/search-result/search-result.component";
// Services
import {YoutubeService} from "./youtube.service";

@NgModule({
    imports: [
        HttpModule,
        CommonModule,
        YoutubeRoutingModule
    ],
    declarations: [
        YoutubeComponent,
        YoutubeVideoInfoComponent,
        SearchBoxComponent,
        SearchResultComponent

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