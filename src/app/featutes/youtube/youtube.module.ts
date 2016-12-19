import {NgModule} from '@angular/core';

import {YoutubeComponent} from './youtube.component';

@NgModule({
    imports: [],
    declarations: [
        YoutubeComponent
    ],

    exports: [
        YoutubeComponent
    ],

    /**
     * Any provider will be accessible in the entire application
     * */
    providers: []
})
export class YoutubeModule {

}