import {NgModule} from '@angular/core';

import {CommonModule} from '../common/common.module'
import {DashboardComponent} from './dashboard.component';
import {YoutubeModule} from '../youtube/youtube.module';

@NgModule({
    imports: [
        CommonModule,
        YoutubeModule
    ],
    declarations: [
        DashboardComponent
    ],
    exports: [
        DashboardComponent
    ],
    providers: []
})
export class DashboardModule {

}