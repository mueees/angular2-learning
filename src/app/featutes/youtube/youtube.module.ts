import {NgModule} from '@angular/core';

import {YoutubeComponent} from './youtube.component';
import {SearchBoxComponent} from './components/search-box/search-box.component';

@NgModule({
    imports: [],
    declarations: [
        YoutubeComponent,
        SearchBoxComponent
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