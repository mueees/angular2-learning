import {NgModule}      from '@angular/core';
import {AppComponent}  from './app.component';

import {DashboardModule} from './featutes/dashboard/dashboard.module';
import {YoutubeModule} from './featutes/youtube/youtube.module';

@NgModule({
    imports: [
        DashboardModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}