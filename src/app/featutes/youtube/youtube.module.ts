import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {YoutubeComponent} from './youtube.component';
import {SearchBoxComponent} from './components/search-box/search-box.component';
import {SearchResultComponent} from './components/search-result/search-result.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        YoutubeComponent,
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
        {
            provide: 'YOUTUBE_API_KEY',
            useValue: 'AIzaSyC9MDCXAHRm2w0obmCjiDJtTvaHaM6DwYY'
        },
        {
            provide: 'YOUTUBE_API_URL',
            useValue: 'https://www.googleapis.com/youtube/v3/search'
        }
    ]
})
export class YoutubeModule {

}