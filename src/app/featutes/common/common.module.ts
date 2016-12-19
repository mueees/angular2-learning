import {NgModule} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {DateComponent} from './components/date/date.component'
import {FeedbackComponent} from './components/feedback/feedback.component'
import {YoutubeComponent} from './components/youtube/youtube.component'
import {SimpleHttpComponent} from './components/simpleHttp/simpleHttp.component'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        DateComponent,
        FeedbackComponent,
        YoutubeComponent,
        SimpleHttpComponent
    ],
    exports: [
        DateComponent,
        FeedbackComponent,
        YoutubeComponent,
        SimpleHttpComponent
    ],
    providers: []
})
export class CommonModule {
}